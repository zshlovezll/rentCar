(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5d25b0ff"],{"3a4e":function(t,e,a){},"78bb":function(t,e,a){"use strict";var i=a("3a4e"),n=a.n(i);n.a},"7be8":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrapper"},[i("el-container",[i("img",{staticClass:"hidden-xs-only",staticStyle:{width:"100%",height:"75vh"},attrs:{src:a("832b"),alt:""}}),i("el-main",[this.cot?t._e():i("Load"),this.cot?i("div",{staticClass:"flex justify-center align-center flex-column border",staticStyle:{width:"100%"}},[i("h4",{staticStyle:{"padding-bottom":"30px","margin-top":"20px","max-width":"80%"}},[t._v(t._s(t.cot.title))]),i("div",{staticStyle:{"padding-bottom":"30px"}},[i("span",{staticStyle:{"margin-right":"20px"}},[t._v(t._s(new Date(parseInt(t.cot.time)).toLocaleString()))]),i("span",{staticStyle:{"margin-left":"20px"}},[t._v("青松畅游")])]),i("div",{staticStyle:{width:"80%",border:"1px solid #99A9BF","margin-bottom":"30px"}}),i("div",{staticClass:"ql-container ql-snow",staticStyle:{border:"none"}},[i("div",{staticClass:"ql-editor",domProps:{innerHTML:t._s(t.cot.content)}})])]):t._e()],1),i("el-footer",[i("div",{staticStyle:{height:"20px"}}),i("footers1"),i("div",{staticStyle:{height:"100px"}})],1)],1)],1)},n=[],s=(a("96cf"),a("1da1")),o=a("a5c7"),r=a("eab4"),c={components:{footers1:o["default"],Load:r["default"]},data:function(){return{cot:""}},computed:{},methods:{},created:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$A.get("/api/querydetail",{params:{id:t.$route.query.id}}).then((function(e){t.cot=e.data.data[0]}));case 2:case"end":return e.stop()}}),e)})))()}},l=c,d=(a("78bb"),a("2877")),u=Object(d["a"])(l,i,n,!1,null,null,null);e["default"]=u.exports},"832b":function(t,e,a){t.exports=a.p+"assets/img/zou.4cfc80c3.png"}}]);
//# sourceMappingURL=chunk-5d25b0ff.dd874549.js.map