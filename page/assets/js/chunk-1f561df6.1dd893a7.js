(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1f561df6"],{"3a8b":function(t,e,n){},a582:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{"overflow-x":"auto"}},[n("table",{staticStyle:{"word-break":"break-all"}},[t._m(0),n("tbody",{attrs:{id:"table-body"}},t._l(t.userMessage,(function(e,s){return n("tr",{key:s},[n("td",[t._v(t._s(e.name))]),n("td",[t._v(t._s(e.phone))]),n("td",[t._v(t._s(e.email))]),n("td",[t._v(t._s(e.messages))]),n("td",[t._v(t._s(t.times(e.time)))]),n("td",[n("button",{staticClass:"btn del",on:{click:function(n){return t.del(e.id)}}},[t._v("删除")])])])})),0)])])},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",[t._v("名称")]),n("th",[t._v("手机号")]),n("th",[t._v("邮箱")]),n("th",[t._v("内容")]),n("th",[t._v("时间")]),n("th",[t._v("操作")])])])}],i={data:function(){return{userMessage:[]}},methods:{times:function(t){var e=null;e=10==t.length?new Date(1e3*+t):new Date(+t);var n=e.getFullYear()+"-",s=(e.getMonth()+1<10?"0"+(e.getMonth()+1):e.getMonth()+1)+"-",a=(e.getDate()<10?"0"+e.getDate():e.getDate())+" ",i=(e.getHours()<10?"0"+e.getHours():e.getHours())+":",u=(e.getMinutes()<10?"0"+e.getMinutes():e.getMinutes())+":",o=e.getSeconds()<10?"0"+e.getSeconds():e.getSeconds();return n+s+a+i+u+o},del:function(t){var e=this;this.$A.get("/api/deltMessage/"+t).then((function(t){e.init(),alert("删除成功")}))},init:function(){var t=this;this.$A.get("/api/querytMessage").then((function(e){t.userMessage=e.data.data}))}},mounted:function(){this.init()},watch:{userMessage:function(t,e){console.log(t,e)}}},u=i,o=(n("efc0"),n("2877")),r=Object(o["a"])(u,s,a,!1,null,null,null);e["default"]=r.exports},efc0:function(t,e,n){"use strict";var s=n("3a8b"),a=n.n(s);a.a}}]);
//# sourceMappingURL=chunk-1f561df6.1dd893a7.js.map