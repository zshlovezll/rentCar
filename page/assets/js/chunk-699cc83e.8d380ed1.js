(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-699cc83e"],{"151e":function(e,t,A){"use strict";var n=function(){var e=this,t=e.$createElement,A=e._self._c||t;return A("div",{staticClass:"flex flex-column justify-center align-center wrap"},[A("i",{staticClass:"el-icon-circle-check",staticStyle:{color:"#FFFFFF"}}),A("div",{staticStyle:{padding:"20px"}},[e._v(e._s(e.tipMessage))])])},a=[],i={props:{tipMessage:{type:[String]}}},r=i,c=(A("e960"),A("2877")),s=Object(c["a"])(r,n,a,!1,null,null,null);t["a"]=s.exports},"1b74":function(e,t,A){e.exports=A.p+"assets/img/5.82d9faca.jpg"},"4cac":function(e,t,A){"use strict";A.r(t);var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wrapper"},[n("el-container",[n("img",{staticClass:"one",staticStyle:{width:"100%",height:"85vh"},attrs:{src:A("1b74"),alt:""}}),n("el-main",[n("contact"),n("div",{staticStyle:{height:"20px"}}),n("message")],1),n("el-footer",[n("div",{staticStyle:{height:"20px"}}),n("footers1"),n("div",{staticStyle:{height:"100px"}})],1)],1)],1)},a=[],i=A("a5c7"),r=A("6180"),c=function(){var e=this,t=e.$createElement,A=e._self._c||t;return A("div",{staticClass:"position-relative",staticStyle:{"z-index":"1"}},[A("transition",{attrs:{name:"fade"}},[e.show?e._e():A("tip",{attrs:{tipMessage:e.tipMessage}})],1),A("el-row",{attrs:{gutter:10}},[A("el-col",{attrs:{xs:24,sm:8,md:8,lg:8,xl:8}},[e._v("称呼："),A("input",{directives:[{name:"model",rawName:"v-model",value:e.ch,expression:"ch"}],staticClass:"bg-fuzzy",staticStyle:{"border-style":"none",width:"18.75rem",height:"2.5rem",margin:"15px 0px"},attrs:{type:"text",placeholder:"请输入称呼"},domProps:{value:e.ch},on:{input:function(t){t.target.composing||(e.ch=t.target.value)}}})]),A("el-col",{attrs:{xs:24,sm:8,md:8,lg:8,xl:8}},[e._v("电话："),A("input",{directives:[{name:"model",rawName:"v-model",value:e.phone,expression:"phone"}],staticClass:"bg-fuzzy",staticStyle:{"border-style":"none",width:"18.75rem",height:"2.5rem",margin:"15px 0px"},attrs:{type:"text",placeholder:"请输入电话"},domProps:{value:e.phone},on:{input:function(t){t.target.composing||(e.phone=t.target.value)}}})]),A("el-col",{attrs:{xs:24,sm:8,md:8,lg:8,xl:8}},[e._v("邮箱："),A("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"bg-fuzzy",staticStyle:{"border-style":"none",width:"18.75rem",height:"2.5rem",margin:"15px 0px"},attrs:{type:"text",placeholder:"请输入邮箱"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})])],1),e._v(" 留言内容:"),A("input",{directives:[{name:"model",rawName:"v-model",value:e.messages,expression:"messages"}],staticClass:"bg-fuzzy",staticStyle:{"border-style":"none",height:"5.5rem",width:"18.75rem",margin:"15px 0px"},attrs:{type:"text",placeholder:"请输入内容"},domProps:{value:e.messages},on:{input:function(t){t.target.composing||(e.messages=t.target.value)}}}),A("button",{staticStyle:{width:"100%",height:"2.75rem",margin:"15px 0px","background-color":"#FFC107","border-radius":"5px","border-style":"none","font-size":"20px","font-weight":"bolder"},on:{click:function(t){return e.message()}}},[e._v("留言")])],1)},s=[],o=(A("96cf"),A("1da1")),l=A("151e"),u=A("b383"),m={components:{tip:l["a"]},data:function(){return{ch:"",phone:"",email:"",messages:"",show:!0,tipMessage:"留言成功"}},computed:{checkPhone:function(){var e=/^[1][3,4,5,7,8][0-9]{9}$/;return!!e.test(this.phone)},checkEmail:function(){var e=/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;return!!e.test(this.email)}},methods:{message:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var A;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(A=e,e.ch&&e.phone&&e.email&&e.messages){t.next=5;break}alert("输入框不能为空"),t.next=11;break;case 5:if(!e.checkPhone||!e.checkEmail){t.next=10;break}return t.next=8,e.$A.post("/api/insertMessage",u.stringify({name:A.ch,phone:A.phone,email:A.email,messages:A.messages,time:Date.now()})).then((function(t){console.log(t),e.show=!1,setTimeout((function(){e.show=!0}),3e3)})).catch((function(e){console.log(e)}));case 8:t.next=11;break;case 10:alert("手机或者邮箱格式不正确");case 11:case"end":return t.stop()}}),t)})))()}}},g=m,p=(A("cdae"),A("2877")),v=Object(p["a"])(g,c,s,!1,null,null,null),d=v.exports,w={components:{footers1:i["default"],contact:r["default"],message:d},data:function(){return{}},methods:{}},M=w,h=(A("bd2b"),Object(p["a"])(M,n,a,!1,null,null,null));t["default"]=h.exports},"57f3":function(e,t,A){"use strict";A.d(t,"a",(function(){return n})),A.d(t,"b",(function(){return a}));var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-row",{attrs:{gutter:10}},[n("el-col",{attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[n("div",{staticClass:"flex align-center flex-1"},[n("div",[n("img",{attrs:{src:A("d181")}})]),n("div",{staticStyle:{"margin-left":"20px"}},[n("div",{staticClass:"font-lg font-weight-bold"},[e._v("服务热线：")]),n("div",{},[e._v("18682208230")])])])]),n("el-col",{attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[n("div",{staticClass:"flex align-center flex-1"},[n("div",[n("img",{attrs:{src:A("a126")}})]),n("div",{staticStyle:{"margin-left":"20px"}},[n("div",{staticClass:"font-lg font-weight-bold"},[e._v("企业微信")]),n("div",{},[e._v("18682208230(电话同号)")])])])])],1)},a=[]},6180:function(e,t,A){"use strict";var n=A("57f3"),a=A("d684"),i=A("2877"),r=Object(i["a"])(a["default"],n["a"],n["b"],!1,null,null,null);t["default"]=r.exports},"91dd":function(e,t,A){"use strict";function n(e,t){return Object.prototype.hasOwnProperty.call(e,t)}e.exports=function(e,t,A,i){t=t||"&",A=A||"=";var r={};if("string"!==typeof e||0===e.length)return r;var c=/\+/g;e=e.split(t);var s=1e3;i&&"number"===typeof i.maxKeys&&(s=i.maxKeys);var o=e.length;s>0&&o>s&&(o=s);for(var l=0;l<o;++l){var u,m,g,p,v=e[l].replace(c,"%20"),d=v.indexOf(A);d>=0?(u=v.substr(0,d),m=v.substr(d+1)):(u=v,m=""),g=decodeURIComponent(u),p=decodeURIComponent(m),n(r,g)?a(r[g])?r[g].push(p):r[g]=[r[g],p]:r[g]=p}return r};var a=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)}},"98fa":function(e,t){},"9b6b":function(e,t,A){},a126:function(e,t){e.exports="data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABQAAD/4QMqaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0MiA3OS4xNjA5MjQsIDIwMTcvMDcvMTMtMDE6MDY6MzkgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NjMxMDk4Njk0OTRBMTFFOUJCQ0FFNjcwMjdFNTMzNTIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NjMxMDk4NkE0OTRBMTFFOUJCQ0FFNjcwMjdFNTMzNTIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2MzEwOTg2NzQ5NEExMUU5QkJDQUU2NzAyN0U1MzM1MiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo2MzEwOTg2ODQ5NEExMUU5QkJDQUU2NzAyN0U1MzM1MiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv/uAA5BZG9iZQBkwAAAAAH/2wCEAAICAgICAgICAgIDAgICAwQDAgIDBAUEBAQEBAUGBQUFBQUFBgYHBwgHBwYJCQoKCQkMDAwMDAwMDAwMDAwMDAwBAwMDBQQFCQYGCQ0LCQsNDw4ODg4PDwwMDAwMDw8MDAwMDAwPDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDP/AABEIABgAGAMBEQACEQEDEQH/xABgAAACAwAAAAAAAAAAAAAAAAAHCQMFCAEBAAAAAAAAAAAAAAAAAAAAABAAAQUAAQMEAgMAAAAAAAAAAwECBAUGBxETCAASIiMhJTFBFxEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AbXeXv+gE1dvdbEnH3BeGlSa62uo05auRezIJFDPcSza8ZIkGMZrgdQvYUxWv+bRNRCgP8AfwY5SuC5zBQuPdFqhte9rhQhhui9tFV5QTTiHLM5qJ1V4yOVE/PX0BU/dcM3VJHkXc/ScT6SfHpxkuJBJlhm7CYRoYKLOMrjSYUkzmg+9zyiK9nzcJyoIMd89cdbHkbwG40iYh7z3mYgUGg1VGPq49keLFIOyjINEXumScZS9tUVXvZ7URXq1PQLONI2vAkTJ7HaYyZU8nX+hstdTJoq2XVDr5deYTGODGirXkc8xFc5zXudHaP2IgV96qgNrxnO9v5CeGvMOzv6gNbfVUS+oqqbDESPHsbCLFGWsmxAmeVw3PkGE1Gq93QrVRF/pA0V+64ZuruRHpJ+k4m0k+RcEHTxyTLDN2EwjjTlSCFrjSYUkznH+hryiK9/wcJyKIKXa8h+J3I9dHq99qOPtiOGXvQ85cGhS7AJ1Tovary+6Uwqp+Fa0aOX+OnoIsvlY+xTL0ObxZeOuB8TYMuayjlQ31si9sAyFmREHWla0sSDHkqkjoZrCEK1iINgW/aH//2Q=="},b383:function(e,t,A){"use strict";t.decode=t.parse=A("91dd"),t.encode=t.stringify=A("e099")},bd2b:function(e,t,A){"use strict";var n=A("9b6b"),a=A.n(n);a.a},cdae:function(e,t,A){"use strict";var n=A("fd1f"),a=A.n(n);a.a},d181:function(e,t){e.exports="data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABQAAD/4QMqaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0MiA3OS4xNjA5MjQsIDIwMTcvMDcvMTMtMDE6MDY6MzkgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NjBCQTYyOUQ0OTRBMTFFOUFBQjBFMDkwNzU1MzVDNUMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NjBCQTYyOUU0OTRBMTFFOUFBQjBFMDkwNzU1MzVDNUMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2MEJBNjI5QjQ5NEExMUU5QUFCMEUwOTA3NTUzNUM1QyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo2MEJBNjI5QzQ5NEExMUU5QUFCMEUwOTA3NTUzNUM1QyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv/uAA5BZG9iZQBkwAAAAAH/2wCEAAICAgICAgICAgIDAgICAwQDAgIDBAUEBAQEBAUGBQUFBQUFBgYHBwgHBwYJCQoKCQkMDAwMDAwMDAwMDAwMDAwBAwMDBQQFCQYGCQ0LCQsNDw4ODg4PDwwMDAwMDw8MDAwMDAwPDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDP/AABEIABgAGAMBEQACEQEDEQH/xABiAAADAQEAAAAAAAAAAAAAAAAGBwgFCQEBAAAAAAAAAAAAAAAAAAAAABAAAQQCAQMDBAMAAAAAAAAAAwECBAUGBxIRIhQAIwghMRMkFSUWEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDrXeXq7AfllvdZgXX+i8Fkyq+3uos1auRey4D3BsHksmPGSJBima4HsvYUpWP72iaiFDPssI+JVPUY5fWeJ4NCrMtGw2P50SCBHSEK1jhG/nOHNjiIRvAjztVyr2qq+gJGuudN3NGE15PybUuTT49QItvIfNsMbsJr2hg/vGc40mFJM5oPfc8oivZ3uE5UECIy3VVzuf4G0eB40XjlszEKWd4znozyrqvUMudGMqqiczShFYquVEQio5ft6BN6Nz/QMv4p1+F5FnZ9VZrqSJLg5BEurCSOwq7kxXCKbwHu/aiGO/ujKJ4uLnBIzry6hUGQ04KL4lbCr4GSwMqq/wDM3EjXNnVk/NHG2Qx5qWLEKryc2xpDxijryXsaNPqqdfQHf91pm6u5Eekn5JqbJJ8i4IOnjkmWGN2EwjjTlSCFrjSYUkznH9hryiK9/Y4TkUQTbuvXXwV3vaJkWW51QVGaPRrJcyguY8K9lcERGik1zkKUpEREROcdS9OjevRET0Dg15gEC0psFwnEsTn4NoHW5wWFVAuRFjWeSWEU/lxSEiSEacEUUpfKcp2sKYyM9tomqpQ//9k="},d389:function(e,t,A){},d684:function(e,t,A){"use strict";var n=A("98fa"),a=A.n(n);t["default"]=a.a},e099:function(e,t,A){"use strict";var n=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};e.exports=function(e,t,A,c){return t=t||"&",A=A||"=",null===e&&(e=void 0),"object"===typeof e?i(r(e),(function(r){var c=encodeURIComponent(n(r))+A;return a(e[r])?i(e[r],(function(e){return c+encodeURIComponent(n(e))})).join(t):c+encodeURIComponent(n(e[r]))})).join(t):c?encodeURIComponent(n(c))+A+encodeURIComponent(n(e)):""};var a=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)};function i(e,t){if(e.map)return e.map(t);for(var A=[],n=0;n<e.length;n++)A.push(t(e[n],n));return A}var r=Object.keys||function(e){var t=[];for(var A in e)Object.prototype.hasOwnProperty.call(e,A)&&t.push(A);return t}},e960:function(e,t,A){"use strict";var n=A("d389"),a=A.n(n);a.a},fd1f:function(e,t,A){}}]);
//# sourceMappingURL=chunk-699cc83e.8d380ed1.js.map