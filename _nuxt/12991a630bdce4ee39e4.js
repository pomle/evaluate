(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{144:function(e,t,n){var s=n(148);"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);(0,n(27).default)("845e8a5c",s,!0,{})},145:function(e,t,n){var s=n(154);"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);(0,n(27).default)("2a215459",s,!0,{})},146:function(e,t,n){(function(t){var n="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},s=function(){var e=/\blang(?:uage)?-([\w-]+)\b/i,t=0,s=n.Prism={manual:n.Prism&&n.Prism.manual,disableWorkerMessageHandler:n.Prism&&n.Prism.disableWorkerMessageHandler,util:{encode:function(e){return e instanceof i?new i(e.type,s.util.encode(e.content),e.alias):"Array"===s.util.type(e)?e.map(s.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++t}),e.__id},clone:function(e,t){var n=s.util.type(e);switch(t=t||{},n){case"Object":if(t[s.util.objId(e)])return t[s.util.objId(e)];var i={};for(var a in t[s.util.objId(e)]=i,e)e.hasOwnProperty(a)&&(i[a]=s.util.clone(e[a],t));return i;case"Array":if(t[s.util.objId(e)])return t[s.util.objId(e)];i=[];return t[s.util.objId(e)]=i,e.forEach(function(e,n){i[n]=s.util.clone(e,t)}),i}return e}},languages:{extend:function(e,t){var n=s.util.clone(s.languages[e]);for(var i in t)n[i]=t[i];return n},insertBefore:function(e,t,n,i){var a=(i=i||s.languages)[e];if(2==arguments.length){for(var r in n=arguments[1])n.hasOwnProperty(r)&&(a[r]=n[r]);return a}var o={};for(var u in a)if(a.hasOwnProperty(u)){if(u==t)for(var r in n)n.hasOwnProperty(r)&&(o[r]=n[r]);o[u]=a[u]}return s.languages.DFS(s.languages,function(t,n){n===i[e]&&t!=e&&(this[t]=o)}),i[e]=o},DFS:function(e,t,n,i){for(var a in i=i||{},e)e.hasOwnProperty(a)&&(t.call(e,a,e[a],n||a),"Object"!==s.util.type(e[a])||i[s.util.objId(e[a])]?"Array"!==s.util.type(e[a])||i[s.util.objId(e[a])]||(i[s.util.objId(e[a])]=!0,s.languages.DFS(e[a],t,a,i)):(i[s.util.objId(e[a])]=!0,s.languages.DFS(e[a],t,null,i)))}},plugins:{},highlightAll:function(e,t){s.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,n){var i={callback:n,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};s.hooks.run("before-highlightall",i);for(var a,r=i.elements||e.querySelectorAll(i.selector),o=0;a=r[o++];)s.highlightElement(a,!0===t,i.callback)},highlightElement:function(t,i,a){for(var r,o,u=t;u&&!e.test(u.className);)u=u.parentNode;u&&(r=(u.className.match(e)||[,""])[1].toLowerCase(),o=s.languages[r]),t.className=t.className.replace(e,"").replace(/\s+/g," ")+" language-"+r,t.parentNode&&(u=t.parentNode,/pre/i.test(u.nodeName)&&(u.className=u.className.replace(e,"").replace(/\s+/g," ")+" language-"+r));var l={element:t,language:r,grammar:o,code:t.textContent};if(s.hooks.run("before-sanity-check",l),!l.code||!l.grammar)return l.code&&(s.hooks.run("before-highlight",l),l.element.textContent=l.code,s.hooks.run("after-highlight",l)),void s.hooks.run("complete",l);if(s.hooks.run("before-highlight",l),i&&n.Worker){var c=new Worker(s.filename);c.onmessage=function(e){l.highlightedCode=e.data,s.hooks.run("before-insert",l),l.element.innerHTML=l.highlightedCode,a&&a.call(l.element),s.hooks.run("after-highlight",l),s.hooks.run("complete",l)},c.postMessage(JSON.stringify({language:l.language,code:l.code,immediateClose:!0}))}else l.highlightedCode=s.highlight(l.code,l.grammar,l.language),s.hooks.run("before-insert",l),l.element.innerHTML=l.highlightedCode,a&&a.call(t),s.hooks.run("after-highlight",l),s.hooks.run("complete",l)},highlight:function(e,t,n){var a={code:e,grammar:t,language:n};return s.hooks.run("before-tokenize",a),a.tokens=s.tokenize(a.code,a.grammar),s.hooks.run("after-tokenize",a),i.stringify(s.util.encode(a.tokens),a.language)},matchGrammar:function(e,t,n,i,a,r,o){var u=s.Token;for(var l in n)if(n.hasOwnProperty(l)&&n[l]){if(l==o)return;var c=n[l];c="Array"===s.util.type(c)?c:[c];for(var g=0;g<c.length;++g){var d=c[g],p=d.inside,h=!!d.lookbehind,f=!!d.greedy,m=0,v=d.alias;if(f&&!d.pattern.global){var y=d.pattern.toString().match(/[imuy]*$/)[0];d.pattern=RegExp(d.pattern.source,y+"g")}d=d.pattern||d;for(var b=i,x=a;b<t.length;x+=t[b].length,++b){var w=t[b];if(t.length>e.length)return;if(!(w instanceof u)){if(f&&b!=t.length-1){if(d.lastIndex=x,!(N=d.exec(e)))break;for(var k=N.index+(h?N[1].length:0),I=N.index+N[0].length,A=b,F=x,q=t.length;A<q&&(F<I||!t[A].type&&!t[A-1].greedy);++A)k>=(F+=t[A].length)&&(++b,x=F);if(t[b]instanceof u)continue;S=A-b,w=e.slice(x,F),N.index-=x}else{d.lastIndex=0;var N=d.exec(w),S=1}if(N){h&&(m=N[1]?N[1].length:0);I=(k=N.index+m)+(N=N[0].slice(m)).length;var j=w.slice(0,k),_=w.slice(I),C=[b,S];j&&(++b,x+=j.length,C.push(j));var E=new u(l,p?s.tokenize(N,p):N,v,N,f);if(C.push(E),_&&C.push(_),Array.prototype.splice.apply(t,C),1!=S&&s.matchGrammar(e,t,n,b,x,!0,l),r)break}else if(r)break}}}}},tokenize:function(e,t,n){var i=[e],a=t.rest;if(a){for(var r in a)t[r]=a[r];delete t.rest}return s.matchGrammar(e,i,t,0,0,!1),i},hooks:{all:{},add:function(e,t){var n=s.hooks.all;n[e]=n[e]||[],n[e].push(t)},run:function(e,t){var n=s.hooks.all[e];if(n&&n.length)for(var i,a=0;i=n[a++];)i(t)}}},i=s.Token=function(e,t,n,s,i){this.type=e,this.content=t,this.alias=n,this.length=0|(s||"").length,this.greedy=!!i};if(i.stringify=function(e,t,n){if("string"==typeof e)return e;if("Array"===s.util.type(e))return e.map(function(n){return i.stringify(n,t,e)}).join("");var a={type:e.type,content:i.stringify(e.content,t,n),tag:"span",classes:["token",e.type],attributes:{},language:t,parent:n};if(e.alias){var r="Array"===s.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(a.classes,r)}s.hooks.run("wrap",a);var o=Object.keys(a.attributes).map(function(e){return e+'="'+(a.attributes[e]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return"<"+a.tag+' class="'+a.classes.join(" ")+'"'+(o?" "+o:"")+">"+a.content+"</"+a.tag+">"},!n.document)return n.addEventListener?(s.disableWorkerMessageHandler||n.addEventListener("message",function(e){var t=JSON.parse(e.data),i=t.language,a=t.code,r=t.immediateClose;n.postMessage(s.highlight(a,s.languages[i],i)),r&&n.close()},!1),n.Prism):n.Prism;var a=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return a&&(s.filename=a.src,s.manual||a.hasAttribute("data-manual")||("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(s.highlightAll):window.setTimeout(s.highlightAll,16):document.addEventListener("DOMContentLoaded",s.highlightAll))),n.Prism}();e.exports&&(e.exports=s),void 0!==t&&(t.Prism=s),s.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:/<!DOCTYPE[\s\S]+?>/i,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/(^|[^\\])["']/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},s.languages.markup.tag.inside["attr-value"].inside.entity=s.languages.markup.entity,s.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),s.languages.xml=s.languages.markup,s.languages.html=s.languages.markup,s.languages.mathml=s.languages.markup,s.languages.svg=s.languages.markup,s.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(?:;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^{}\s][^{};]*?(?=\s*\{)/,string:{pattern:/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/\B!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},s.languages.css.atrule.inside.rest=s.languages.css,s.languages.markup&&(s.languages.insertBefore("markup","tag",{style:{pattern:/(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,lookbehind:!0,inside:s.languages.css,alias:"language-css",greedy:!0}}),s.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:s.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:s.languages.css}},alias:"language-css"}},s.languages.markup.tag)),s.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/[a-z0-9_]+(?=\()/i,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},s.languages.javascript=s.languages.extend("clike",{keyword:/\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,number:/\b(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,function:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\()/i,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/}),s.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[[^\]\r\n]+]|\\.|[^\/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})\]]))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i,alias:"function"},constant:/\b[A-Z][A-Z\d_]*\b/}),s.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${[^}]+}|[^\\`])*`/,greedy:!0,inside:{interpolation:{pattern:/\${[^}]+}/,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}}}),s.languages.javascript["template-string"].inside.interpolation.inside.rest=s.languages.javascript,s.languages.markup&&s.languages.insertBefore("markup","tag",{script:{pattern:/(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,lookbehind:!0,inside:s.languages.javascript,alias:"language-javascript",greedy:!0}}),s.languages.js=s.languages.javascript,"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(){var e={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.slice.call(document.querySelectorAll("pre[data-src]")).forEach(function(t){for(var n,i=t.getAttribute("data-src"),a=t,r=/\blang(?:uage)?-([\w-]+)\b/i;a&&!r.test(a.className);)a=a.parentNode;if(a&&(n=(t.className.match(r)||[,""])[1]),!n){var o=(i.match(/\.(\w+)$/)||[,""])[1];n=e[o]||o}var u=document.createElement("code");u.className="language-"+n,t.textContent="",u.textContent="Loading…",t.appendChild(u);var l=new XMLHttpRequest;l.open("GET",i,!0),l.onreadystatechange=function(){4==l.readyState&&(l.status<400&&l.responseText?(u.textContent=l.responseText,s.highlightElement(u)):l.status>=400?u.textContent="✖ Error "+l.status+" while fetching file: "+l.statusText:u.textContent="✖ Error: File does not exist or is empty")},l.send(null)}),s.plugins.toolbar&&s.plugins.toolbar.registerButton("download-file",function(e){var t=e.element.parentNode;if(t&&/pre/i.test(t.nodeName)&&t.hasAttribute("data-src")&&t.hasAttribute("data-download-link")){var n=t.getAttribute("data-src"),s=document.createElement("a");return s.textContent=t.getAttribute("data-download-link-label")||"Download",s.setAttribute("download",""),s.href=n,s}})},document.addEventListener("DOMContentLoaded",self.Prism.fileHighlight))}).call(this,n(47))},147:function(e,t,n){"use strict";var s=n(144);n.n(s).a},148:function(e,t,n){(e.exports=n(26)(!1)).push([e.i,"\n.question{display:flex;flex-flow:column;align-items:center;margin:0 -12px\n}\n.question .options{display:flex;margin:-.5em;width:100%\n}\n.question .options .option{border-radius:6px;flex:1 1;cursor:pointer;margin:.5em;padding:5px\n}\n.question .options .option.selected{background-color:#7fea7f\n}\n.question .options .option pre{height:100%;margin:0\n}",""])},150:function(e,t,n){"use strict";var s=n(2),i=n(14),a=n(16),r=n(91),o=n(45),u=n(9),l=n(46).f,c=n(64).f,g=n(8).f,d=n(151).trim,p=s.Number,h=p,f=p.prototype,m="Number"==a(n(63)(f)),v="trim"in String.prototype,y=function(e){var t=o(e,!1);if("string"==typeof t&&t.length>2){var n,s,i,a=(t=v?t.trim():d(t,3)).charCodeAt(0);if(43===a||45===a){if(88===(n=t.charCodeAt(2))||120===n)return NaN}else if(48===a){switch(t.charCodeAt(1)){case 66:case 98:s=2,i=49;break;case 79:case 111:s=8,i=55;break;default:return+t}for(var r,u=t.slice(2),l=0,c=u.length;l<c;l++)if((r=u.charCodeAt(l))<48||r>i)return NaN;return parseInt(u,s)}}return+t};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof p&&(m?u(function(){f.valueOf.call(n)}):"Number"!=a(n))?r(new h(y(t)),n,p):y(t)};for(var b,x=n(5)?l(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),w=0;x.length>w;w++)i(h,b=x[w])&&!i(p,b)&&g(p,b,c(h,b));p.prototype=f,f.constructor=p,n(10)(s,"Number",p)}},151:function(e,t,n){var s=n(4),i=n(15),a=n(9),r=n(152),o="["+r+"]",u=RegExp("^"+o+o+"*"),l=RegExp(o+o+"*$"),c=function(e,t,n){var i={},o=a(function(){return!!r[e]()||"​"!="​"[e]()}),u=i[e]=o?t(g):r[e];n&&(i[n]=u),s(s.P+s.F*o,"String",i)},g=c.trim=function(e,t){return e=String(i(e)),1&t&&(e=e.replace(u,"")),2&t&&(e=e.replace(l,"")),e};e.exports=c},152:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},153:function(e,t,n){"use strict";var s=n(145);n.n(s).a},154:function(e,t,n){(e.exports=n(26)(!1)).push([e.i,"\n.progress .value{background:#c85782;height:3px\n}",""])},156:function(e,t,n){var s=n(167);"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);(0,n(27).default)("290a1d3d",s,!0,{})},159:function(e,t,n){"use strict";n(150);var s={props:{value:{type:Number,required:!0}}},i=(n(153),n(11)),a=Object(i.a)(s,function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"progress"},[t("div",{staticClass:"value",style:{width:100*this.value+"%"}})])},[],!1,null,null,null);a.options.__file="index.vue";t.a=a.exports},160:function(e,t,n){"use strict";var s=n(146),i=n.n(s),a={props:{session:{type:Object,required:!0},question:{type:Object,required:!0}},computed:{options:function(){return this.question.answers.map(function(e){return{answer:e,html:i.a.highlight(e.content,i.a.languages.javascript,"javascript")}})}},methods:{setAnswer:function(e){var t=this.$route.params.questionId;this.$emit("selected",{questionId:t,answerId:e})},isSelected:function(e){return e.id===this.session.answers[this.question.id].answerId}}},r=(n(147),n(11)),o=Object(r.a)(a,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"question"},[n("div",{staticClass:"options"},e._l(e.options,function(t,s){return n("div",{key:s,staticClass:"option",class:{selected:e.isSelected(t.answer)},on:{click:function(n){e.setAnswer(t.answer.id)}}},[n("pre",{staticClass:"language-javascript"},[n("code",{domProps:{innerHTML:e._s(t.html)}})])])}))])},[],!1,null,null,null);o.options.__file="index.vue";t.a=o.exports},165:function(e,t,n){"use strict";var s=n(4),i=n(92)(6),a="findIndex",r=!0;a in[]&&Array(1)[a](function(){r=!1}),s(s.P+s.F*r,"Array",{findIndex:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),n(48)(a)},166:function(e,t,n){"use strict";var s=n(156);n.n(s).a},167:function(e,t,n){(e.exports=n(26)(!1)).push([e.i,"\n.question-page .response{margin:2em 0\n}\n.question-page .response .comment,.question-page .response .question-container{margin:80px 0\n}\n.question-page .response .comment textarea{height:100px;width:100%\n}",""])},174:function(e,t,n){"use strict";n.r(t);n(165);var s=n(160),i=n(159),a={components:{Question:s.a,Progress:i.a},props:{session:{type:Object,required:!0},question:{type:Object,required:!0}},head:function(){var e=this.questionIndex+1,t=this.session.test.questions.length;return{title:"".concat(e," / ").concat(t)}},computed:{comment:{get:function(){return this.session.answers[this.question.id].comment},set:function(e){var t=this.session.sessionId;this.$store.commit("session/setComment",{sessionId:t,questionId:this.question.id,comment:e})}},questionIndex:function(){var e=this;return this.session.test.questions.findIndex(function(t){return t.id===e.question.id})},nextQuestionId:function(){return this.getQuestionByIndex(this.questionIndex+1)},prevQuestionId:function(){return this.getQuestionByIndex(this.questionIndex-1)},progress:function(){return(this.questionIndex+1)/(this.session.test.questions.length+1)}},methods:{getQuestionByIndex:function(e){var t=this.session.test.questions[e];return t?t.id:null},goToQuestion:function(e){var t=this.session.sessionId;e&&this.$router.push({name:"session-sessionId-questions-questionId",params:{sessionId:t,questionId:e}})},next:function(){if(this.nextQuestionId)this.goToQuestion(this.nextQuestionId);else{var e=this.session.sessionId;this.$router.push({name:"session-sessionId-done",params:{sessionId:e}})}},prev:function(){if(this.prevQuestionId)this.goToQuestion(this.prevQuestionId);else{var e=this.session.sessionId;this.$router.push({name:"session-sessionId",params:{sessionId:e}})}},setAnswer:function(e){var t=e.questionId,n=e.answerId,s=this.session.sessionId;this.$store.commit("session/setAnswer",{sessionId:s,questionId:t,answerId:n})}}},r=(n(166),n(11)),o=Object(r.a)(a,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"question-page"},[n("Progress",{attrs:{value:e.progress}}),e._v(" "),n("div",{staticClass:"response"},[n("div",{staticClass:"question-container"},[n("Question",{attrs:{session:e.session,question:e.question},on:{selected:e.setAnswer}})],1),e._v(" "),n("div",{staticClass:"comment"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.comment,expression:"comment"}],domProps:{value:e.comment},on:{input:function(t){t.target.composing||(e.comment=t.target.value)}}})])]),e._v(" "),n("nav",[n("div",{staticClass:"prev"},[n("button",{on:{click:function(t){return t.preventDefault(),e.prev(t)}}},[e._v("Prev")])]),e._v(" "),n("div",{staticClass:"next"},[n("button",{staticClass:"primary",on:{click:function(t){return t.preventDefault(),e.next(t)}}},[e._v("Next")])])])],1)},[],!1,null,null,null);o.options.__file="index.vue";t.default=o.exports}}]);