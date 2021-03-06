<template>
    <transition-group :name="`pl-list-move-${direction}`" tag="div" class="pl-list">
        <slot></slot>
    </transition-group>
</template>

<script>
    export default {
        name: "pl-list",
        props: {
            direction: {                            //item入场出场动画 'left', 'right', 'top', 'bottom', 'left-top', 'top-left', 'right-top', 'top-right', 'left-bottom', 'bottom-left', 'right-bottom', 'bottom-right'
                type: String,
                default: 'bottom-right',

            },
            draggable: {type: Boolean},
            dragList: {type: Array},
        },
        data() {
            return {
                targetEl: null,
                copyEl: null,
                switchEl: null,
                targetIndex: null,
                switchIndex: null,
                targetTransition: null,
                startX: null,
                startY: null,
                left: null,
                top: null,
            }
        },
        watch: {
            dragList: {
                immediate: true,
                async handler() {
                    await this.$plain.nextTick()
                    if (!this.draggable || !this.dragList || this.dragList.length === 0) return
                    Array.from(this.$el.children).filter(el => {
                        return this.hasClass(el, 'pl-item') && !this.hasClass(el, 'pl-item-exclude')
                    }).forEach((el, index) => {
                        if (!!el.pl_mousedown) {
                            el.removeEventListener('mousedown', el.pl_mousedown)
                            el.removeEventListener('mouseenter', el.pl_mouseenter)
                        }
                        el.pl_mousedown = (e) => this.pl_mousedown(e, index)
                        el.pl_mouseenter = (e) => this.pl_mouseenter(e, index)
                        el.addEventListener('mousedown', el.pl_mousedown)
                        el.addEventListener('mouseenter', el.pl_mouseenter)
                    })
                },
            },
            async draggable(newVal, oldVal) {
                if (!!newVal === !!oldVal) return
                if (!this.dragList || this.dragList.length === 0) return
                await this.$plain.nextTick()
                if (!!newVal) {
                    Array.from(this.$el.children).forEach((el, index) => {
                        el.pl_mousedown = (e) => this.pl_mousedown(e, index)
                        el.pl_mouseenter = (e) => this.pl_mouseenter(e, index)
                        el.addEventListener('mousedown', el.pl_mousedown)
                        el.addEventListener('mouseenter', el.pl_mouseenter)
                    })
                } else {
                    Array.from(this.$el.children).forEach((el, index) => {
                        if (!!el.pl_mousedown) {
                            el.removeEventListener('mousedown', el.pl_mousedown)
                            el.removeEventListener('mouseenter', el.pl_mouseenter)
                        }
                    })
                }
            },
        },
        methods: {
            pl_mousedown(e, index) {
                if (e.button !== 0) return
                this.targetEl = this.getItemEl(e.target)
                this.copyEl = this.targetEl.cloneNode(true)
                const {top, left} = this.targetEl.getBoundingClientRect()
                this.targetIndex = index
                this.startX = e.clientX
                this.startY = e.clientY
                this.top = top
                this.left = left

                this.targetEl.style.opacity = '0.5'
                this.copyEl.style.position = 'fixed'
                this.copyEl.style.opacity = '1'
                this.copyEl.style.left = this.left + 'px'
                this.copyEl.style.top = this.top + 'px'
                this.copyEl.style.transition = 'initial'
                this.copyEl.style.pointerEvents = 'none'
                this.copyEl.style.cursor = 'all-scroll'
                this.copyEl.zIndex = 9999
                document.body.append(this.copyEl)
                window.addEventListener('mousemove', this.pl_mousemove)
                window.addEventListener('mouseup', this.pl_mouseup)
                this.$plain.$dom.enableSelectNone()
            },
            pl_mousemove(e) {
                this.copyEl.style.left = (this.left + e.clientX - this.startX) + 'px'
                this.copyEl.style.top = (this.top + e.clientY - this.startY) + 'px'
            },
            async pl_mouseup() {
                window.removeEventListener('mousemove', this.pl_mousemove)
                window.removeEventListener('mouseup', this.pl_mouseup)

                this.copyEl.style.transition = 'all 0.15s linear'
                if (this.switchIndex == null || this.switchIndex === this.targetIndex) {
                    this.copyEl.style.left = this.left + 'px'
                    this.copyEl.style.top = this.top + 'px'
                } else {
                    const {top, left} = this.switchEl.getBoundingClientRect()
                    this.copyEl.style.left = left + 'px'
                    this.copyEl.style.top = top + 'px'

                    // console.log(this.targetIndex, this.switchIndex)
                    this.dragList.splice(this.switchIndex, 0, this.dragList.splice(this.targetIndex, 1)[0])
                    this.$emit('switch', {
                        originIndex: this.targetIndex,
                        originData: this.dragList[this.targetIndex],
                        targetIndex: this.switchIndex,
                        targetData: this.dragList[this.switchIndex]
                    })
                }
                document.body.removeChild(this.copyEl)
                this.targetEl.style.opacity = null
                this.targetIndex = null
                this.switchIndex = null
                this.switchEl = null
                this.$plain.$dom.disabledSelectNone()
            },
            pl_mouseenter(e, index) {
                this.switchIndex = index
                this.switchEl = this.getItemEl(e.target)
            },
            getItemEl(el) {
                while (!!el && !this.hasClass(el, 'pl-item')) {
                    el = el.parentNode
                }
                return el
            },
            hasClass(el, cls) {
                if (!!el.classList && !!el.classList.value) return this.$plain.$utils.oneOf(cls, el.classList.value.split(' '));
                else {
                    if (!!el.className && this.$plain.$utils.typeOf(el.className) === 'string') {
                        return el.className.split(' ').indexOf(cls) > -1
                    }
                    return false
                }
            },
        }
    }
</script>
