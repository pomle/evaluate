(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{161:function(t,s,e){var n=e(177);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,e(16).default)("9cffad24",n,!0,{})},176:function(t,s,e){"use strict";var n=e(161);e.n(n).a},177:function(t,s,e){(t.exports=e(15)(!1)).push([t.i,"\n.test-start-page{text-align:center\n}\n.test-start-page h1{margin:1em 0\n}",""])},194:function(t,s,e){"use strict";e.r(s);var n={props:{session:{type:Object,required:!0}},head:function(){return{title:"Welcome - Just Evaluate"}},methods:{start:function(){this.goToQuestion(1)},goToQuestion:function(t){var s=this.session.sessionId;this.$router.push({name:"session-sessionId-questions-questionId",params:{sessionId:s,questionId:t}})}}},i=(e(176),e(11)),o=Object(i.a)(n,function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"test-start-page"},[e("main",[e("h1",[t._v("Evaluate")]),t._v(" "),e("p",[t._v("You will be presented "),e("b",[t._v(t._s(t.session.test.questions.length))]),t._v(" questions.")]),t._v(" "),e("button",{staticClass:"primary",on:{click:function(s){return s.preventDefault(),t.start(s)}}},[t._v("Start")])])])},[],!1,null,null,null);o.options.__file="index.vue";s.default=o.exports}}]);