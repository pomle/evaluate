(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{150:function(t,e,s){"use strict";s.d(e,"a",function(){return i});var n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";function i(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:8,e=[],s=0;s<t;s++){var i=n[n.length*Math.random()|0];e.push(i)}return e.join("")}},163:function(t,e,s){var n=s(177);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,s(16).default)("81f7b888",n,!0,{})},164:function(t,e,s){var n=s(179);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,s(16).default)("5d65c562",n,!0,{})},176:function(t,e,s){"use strict";var n=s(163);s.n(n).a},177:function(t,e,s){(t.exports=s(15)(!1)).push([t.i,"",""])},178:function(t,e,s){"use strict";var n=s(164);s.n(n).a},179:function(t,e,s){(t.exports=s(15)(!1)).push([t.i,"",""])},180:function(t,e,s){"use strict";s.r(e);var n=s(150),i={data:function(){return{testRef:null}},methods:{start:function(){var t=this.testRef,e=Object(n.a)(12),s=Object(n.a)(12);this.$store.dispatch("session/loadTest",{sessionId:e,testId:t,resultId:s}),this.$router.push({name:"session-sessionId",params:{sessionId:e}})}}},a=(s(176),s(11)),r=Object(a.a)(i,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"test-starter"},[s("table",[s("tbody",[s("tr",[s("th",[t._v("Test Reference")]),t._v(" "),s("td",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.testRef,expression:"testRef"}],domProps:{value:t.testRef},on:{input:function(e){e.target.composing||(t.testRef=e.target.value)}}})])])])]),t._v(" "),s("button",{staticClass:"primary",on:{click:t.start}},[t._v("Start")])])},[],!1,null,null,null);r.options.__file="index.vue";var o={components:{TestStarter:r.exports}},c=(s(178),Object(a.a)(o,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"intro-page"},[this._m(0),this._v(" "),e("section",{staticClass:"take-test"},[e("h2",[this._v("Take a Test")]),this._v(" "),e("TestStarter")],1)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"intro"},[e("h1",[this._v("Welcome to Evaluate")])])}],!1,null,null,null));c.options.__file="index.vue";e.default=c.exports}}]);