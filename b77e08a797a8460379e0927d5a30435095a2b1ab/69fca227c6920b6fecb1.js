(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{165:function(t,s,e){var n=e(183);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,e(15).default)("9cffad24",n,!0,{})},182:function(t,s,e){"use strict";var n=e(165);e.n(n).a},183:function(t,s,e){(t.exports=e(14)(!1)).push([t.i,"\n.test-start-page main{margin:0 auto;max-width:800px\n}\n.test-start-page main .logo{display:block;margin:2em auto\n}\n.test-start-page main .start button{display:block;margin:1em auto;width:15em\n}",""])},202:function(t,s,e){"use strict";e.r(s);var n=e(40),a=e.n(n),i={props:{session:{type:Object,required:!0}},data:function(){return{logo:a.a}},head:function(){return{title:"Welcome - Just Evaluate"}},methods:{start:function(){this.goToQuestion(1)},goToQuestion:function(t){var s=this.session.sessionId;this.$router.push({name:"session-sessionId-questions-questionId",params:{sessionId:s,questionId:t}})}}},o=(e(182),e(8)),r=Object(o.a)(i,function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"test-start-page"},[e("main",[e("img",{staticClass:"logo",attrs:{src:t.logo}}),t._v(" "),e("p",[t._v("\n      You will be presented a test with "),e("b",[t._v(t._s(t.session.test.questions.length))]),t._v(" questions. Each test will ask you a question, let you pick an alternative, and let you motivate your answer. You can move forwards and backwards between the questions anytime you like.\n    ")]),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"start"},[e("button",{staticClass:"primary",on:{click:function(s){return s.preventDefault(),t.start(s)}}},[t._v("Start")])])])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("\n      After the last question you will be asked to "),s("b",[this._v("confirm that you want to submit your answer")]),this._v(".\n    ")])}],!1,null,null,null);r.options.__file="index.vue";s.default=r.exports}}]);