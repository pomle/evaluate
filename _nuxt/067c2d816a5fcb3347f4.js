(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{178:function(s,t,n){"use strict";n.r(t);n(62);var e={computed:{session:function(){var s=this.$route.params.sessionId;return this.$store.state.session.sessions.find(function(t){return t.sessionId===s})},question:function(){var s=this.$route.params.questionId;return this.session.test.questions.find(function(t){return t.id===s})}}},i=n(11),o=Object(i.a)(e,function(){var s=this.$createElement;return(this._self._c||s)("nuxt-child",{attrs:{session:this.session,question:this.question}})},[],!1,null,null,null);o.options.__file="_questionId.vue";t.default=o.exports}}]);