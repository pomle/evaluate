(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{159:function(e,t,s){var n=s(170);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,s(15).default)("2a215459",n,!0,{})},166:function(e,t,s){"use strict";var n=s(2),i=s(16),r=s(20),o=s(94),a=s(47),u=s(10),c=s(48).f,l=s(66).f,v=s(9).f,f=s(167).trim,p=n.Number,d=p,h=p.prototype,_="Number"==r(s(65)(h)),m="trim"in String.prototype,b=function(e){var t=a(e,!1);if("string"==typeof t&&t.length>2){var s,n,i,r=(t=m?t.trim():f(t,3)).charCodeAt(0);if(43===r||45===r){if(88===(s=t.charCodeAt(2))||120===s)return NaN}else if(48===r){switch(t.charCodeAt(1)){case 66:case 98:n=2,i=49;break;case 79:case 111:n=8,i=55;break;default:return+t}for(var o,u=t.slice(2),c=0,l=u.length;c<l;c++)if((o=u.charCodeAt(c))<48||o>i)return NaN;return parseInt(u,n)}}return+t};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(e){var t=arguments.length<1?0:e,s=this;return s instanceof p&&(_?u(function(){h.valueOf.call(s)}):"Number"!=r(s))?o(new d(b(t)),s,p):b(t)};for(var g,I=s(5)?c(d):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),N=0;I.length>N;N++)i(d,g=I[N])&&!i(p,g)&&v(p,g,l(d,g));p.prototype=h,h.constructor=p,s(11)(n,"Number",p)}},167:function(e,t,s){var n=s(4),i=s(19),r=s(10),o=s(168),a="["+o+"]",u=RegExp("^"+a+a+"*"),c=RegExp(a+a+"*$"),l=function(e,t,s){var i={},a=r(function(){return!!o[e]()||"​"!="​"[e]()}),u=i[e]=a?t(v):o[e];s&&(i[s]=u),n(n.P+n.F*a,"String",i)},v=l.trim=function(e,t){return e=String(i(e)),1&t&&(e=e.replace(u,"")),2&t&&(e=e.replace(c,"")),e};e.exports=l},168:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},169:function(e,t,s){"use strict";var n=s(159);s.n(n).a},170:function(e,t,s){(e.exports=s(14)(!1)).push([e.i,"\n.progress .value{background:#c85782;height:3px\n}",""])},171:function(e,t,s){var n=s(185);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,s(15).default)("8fb2dd40",n,!0,{})},177:function(e,t,s){"use strict";s(166);var n={props:{value:{type:Number,required:!0}}},i=(s(169),s(8)),r=Object(i.a)(n,function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"progress"},[t("div",{staticClass:"value",style:{width:100*this.value+"%"}})])},[],!1,null,null,null);r.options.__file="index.vue";t.a=r.exports},184:function(e,t,s){"use strict";var n=s(171);s.n(n).a},185:function(e,t,s){(e.exports=s(14)(!1)).push([e.i,"\n.done-page .confirm{margin:5em 0;text-align:center\n}\n.done-page .confirm h1{margin:2em 0\n}",""])},199:function(e,t,s){"use strict";s.r(t);var n=s(91),i=s.n(n),r=(s(21),s(96),{components:{Progress:s(177).a},props:{meta:{type:Object,required:!0},session:{type:Object,required:!0}},head:function(){return{title:"Done - Just Evaluate"}},computed:{questionCount:function(){return this.session.test.questions.length},questionsAnswered:function(){return Object.entries(this.session.answers).reduce(function(e,t){var s=i()(t,2);s[0];return s[1].answerId?e+1:e},0)},questionsCommented:function(){return Object.entries(this.session.answers).reduce(function(e,t){var s=i()(t,2);s[0];return s[1].comment?e+1:e},0)}},methods:{prev:function(){var e=this.session.test.questions;this.goToQuestion(e.length)},goToQuestion:function(e){var t=this.session.sessionId;e&&this.$router.push({name:"session-sessionId-questions-questionId",params:{sessionId:t,questionId:e}})},submit:function(){var e=this.session.sessionId;this.$store.dispatch("session/saveResult",{sessionId:e})}}}),o=(s(184),s(8)),a=Object(o.a)(r,function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"done-page"},[s("Progress",{attrs:{value:1}}),e._v(" "),s("div",{staticClass:"confirm"},[e.meta.submitted?s("div",[s("h1",[e._v("Thank you!")]),e._v(" "),s("p",[e._v("\n        That's all. We hope you enjoyed doing the test.\n      ")])]):s("div",[s("h1",[e._v("Done!")]),e._v(" "),s("p",[e._v("\n        That was the last question. You have "),s("b",[e._v("answered "+e._s(e.questionsAnswered)+" / "+e._s(e.questionCount))]),e._v(" and provided a "),s("b",[e._v("comment on "+e._s(e.questionsCommented))]),e._v(" questions.\n      ")]),e._v(" "),e._m(0),e._v(" "),s("button",{staticClass:"primary",class:{disabled:e.meta.submitting},on:{click:e.submit}},[e._v("Submit")]),e._v(" "),s("nav",[s("div",{staticClass:"prev"},[s("button",{on:{click:function(t){return t.preventDefault(),e.prev(t)}}},[e._v("Prev")])]),e._v(" "),e._m(1)])])])],1)},[function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("\n        When you are ready, "),t("b",[this._v("submit your answers")]),this._v(" below.\n      ")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"next"},[t("button",{staticClass:"disabled"},[this._v("Next")])])}],!1,null,null,null);a.options.__file="done.vue";t.default=a.exports}}]);