(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{182:function(s,t,e){"use strict";e.r(t);e(62);var n={layout:"test",computed:{session:function(){var s=this.$route.params.sessionId;return this.$store.state.session.sessions.find(function(t){return t.sessionId===s})}},mounted:function(){var s=this.$route.params.sessionId,t=this.$route.query,e=t.testId,n=t.resultId;this.$store.dispatch("session/loadTest",{sessionId:s,testId:e,resultId:n})}},i=e(11),o=Object(i.a)(n,function(){var s=this.$createElement,t=this._self._c||s;return this.session?t("nuxt-child",{attrs:{session:this.session}}):this._e()},[],!1,null,null,null);o.options.__file="_sessionId.vue";t.default=o.exports}}]);