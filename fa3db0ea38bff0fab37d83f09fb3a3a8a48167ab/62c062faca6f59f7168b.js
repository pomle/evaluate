(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{209:function(t,s,e){"use strict";e.r(s);var u={layout:"test",computed:{result:function(){var t=this.$route.params.resultId;return this.$store.state.session.results[t]}},mounted:function(){var t=this.$route.params.resultId;this.$store.dispatch("session/loadResult",{resultId:t})}},r=e(8),l=Object(r.a)(u,function(){var t=this.$createElement,s=this._self._c||t;return this.result?s("nuxt-child",{attrs:{result:this.result}}):this._e()},[],!1,null,null,null);l.options.__file="_resultId.vue";s.default=l.exports}}]);