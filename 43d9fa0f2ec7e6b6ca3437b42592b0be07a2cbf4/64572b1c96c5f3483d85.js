(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{184:function(e,t,s){"use strict";function n(e,t,s){var n={testId:e,resultId:t,label:s},r=JSON.stringify(n);return btoa(r)}function r(e){var t=atob(e);return JSON.parse(t)}s.d(t,"b",function(){return n}),s.d(t,"a",function(){return r})},213:function(e,t,s){"use strict";s.r(t);s(52);var n=s(71),r=s(184),i={layout:"busy",mounted:function(){var e=this.$route.params.ref;if(e){var t=Object(r.a)(e),s=t.testId,i=t.resultId,a=t.label,u=Object(n.a)(12);this.$store.dispatch("session/loadTest",{sessionId:u,testId:s,resultId:i,label:a}),this.$router.replace({name:"session-sessionId",params:{sessionId:u}})}else this.$router.replace({name:"index"})}},a=s(8),u=Object(a.a)(i,function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("h1",[this._v("Please wait...")])])}],!1,null,null,null);u.options.__file="_ref.vue";t.default=u.exports}}]);