(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21e738"],{d62b:function(t,n,o){"use strict";o.r(n);var e=function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"demo-notice-service"},[o("im-demo-row",{attrs:{title:"基本用法"}},[o("im-button",{attrs:{label:"basically"},on:{click:function(n){return t.$notice.show("您有新的消息！")}}})],1),o("im-demo-row",{attrs:{title:"提示类型"}},[o("im-button",{attrs:{label:"info","box-color":"primary"},on:{click:function(n){return t.$notice.show("操作成功！",{type:"info"})}}}),o("im-button",{attrs:{label:"success","box-color":"success"},on:{click:function(n){return t.$notice.show("操作成功！",{type:"success"})}}}),o("im-button",{attrs:{label:"warn","box-color":"warn"},on:{click:function(n){return t.$notice.show("操作成功！",{type:"warn"})}}}),o("im-button",{attrs:{label:"error","box-color":"error"},on:{click:function(n){return t.$notice.show("操作成功！",{type:"error"})}}}),o("im-button",{attrs:{label:"help","box-color":"info"},on:{click:function(n){return t.$notice.show("操作成功！",{type:"help"})}}})],1),o("im-demo-row",{attrs:{title:"位置"}},[o("im-button",{attrs:{label:"左上"},on:{click:function(n){return t.$notice.show("操作成功！",{horizontal:"start",vertical:"start"})}}}),o("im-button",{attrs:{label:"中上"},on:{click:function(n){return t.$notice.show("操作成功！",{horizontal:"center",vertical:"start"})}}}),o("im-button",{attrs:{label:"右上"},on:{click:function(n){return t.$notice.show("操作成功！",{horizontal:"end",vertical:"start"})}}}),o("im-button",{attrs:{label:"左中"},on:{click:function(n){return t.$notice.show("操作成功！",{horizontal:"start",vertical:"center"})}}}),o("im-button",{attrs:{label:"中中"},on:{click:function(n){return t.$notice.show("操作成功！",{horizontal:"center",vertical:"center"})}}}),o("im-button",{attrs:{label:"右中"},on:{click:function(n){return t.$notice.show("操作成功！",{horizontal:"end",vertical:"center"})}}}),o("im-button",{attrs:{label:"左下"},on:{click:function(n){return t.$notice.show("操作成功！",{horizontal:"start",vertical:"end"})}}}),o("im-button",{attrs:{label:"中下"},on:{click:function(n){return t.$notice.show("操作成功！",{horizontal:"center",vertical:"end"})}}}),o("im-button",{attrs:{label:"右下"},on:{click:function(n){return t.$notice.show("操作成功！",{horizontal:"end",vertical:"end"})}}})],1),o("im-demo-row",{attrs:{title:"关闭时间与不自动关闭"}},[o("im-button",{attrs:{label:"一秒后自动关闭"},on:{click:function(n){t.$notice.show("操作成功！",{time:1e3,done:function(){return t.$message.show("done")}})}}}),o("im-button",{attrs:{label:"不自动关闭"},on:{click:t.dontAutoClose}})],1),o("im-demo-row",{attrs:{title:"标题"}},[o("im-button",{attrs:{label:"标题"},on:{click:function(n){return t.$notice.show("您有新的消息！",{title:"你有一份新的邮件信息"})}}})],1),o("im-demo-row",{attrs:{title:"不要标题栏"}},[o("im-button",{attrs:{label:"noHeader"},on:{click:function(n){return t.$notice.show("您有新的消息！",{noHeader:!0})}}})],1),o("im-demo-row",{attrs:{title:"自定义渲染内容"}},[o("im-button",{attrs:{label:"renderFunc"},on:{click:t.costumeRender}}),o("im-input",{model:{value:t.val,callback:function(n){t.val=n},expression:"val"}})],1)],1)},i=[],r={name:"demo-notice-service",data:function(){return{val:null}},methods:{dontAutoClose:function(){this.msg=this.$notice.show("操作成功！",{time:null,click:function(){console.log("click")}})},costumeRender:function(){this.$createElement;var t=this;this.$notice.show(null,{renderFunc:function(n){return n("im-input",{attrs:{value:t.val},on:{input:function(n){return t.val=n}}})},time:null})}}},c=r,l=o("2877"),a=Object(l["a"])(c,e,i,!1,null,null,null);n["default"]=a.exports}}]);
//# sourceMappingURL=chunk-2d21e738.2be24838.js.map