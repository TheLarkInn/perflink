(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{5:function(e,t,n){(function(t){var n=function(e){var t=/\blang(?:uage)?-([\w-]+)\b/i,n=0,a={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function(e){return e instanceof r?new r(e.type,a.util.encode(e.content),e.alias):Array.isArray(e)?e.map(a.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++n}),e.__id},clone:function e(t,n){var r,i,o=a.util.type(t);switch(n=n||{},o){case"Object":if(i=a.util.objId(t),n[i])return n[i];for(var s in r={},n[i]=r,t)t.hasOwnProperty(s)&&(r[s]=e(t[s],n));return r;case"Array":return i=a.util.objId(t),n[i]?n[i]:(r=[],n[i]=r,t.forEach(function(t,a){r[a]=e(t,n)}),r);default:return t}}},languages:{extend:function(e,t){var n=a.util.clone(a.languages[e]);for(var r in t)n[r]=t[r];return n},insertBefore:function(e,t,n,r){var i=(r=r||a.languages)[e],o={};for(var s in i)if(i.hasOwnProperty(s)){if(s==t)for(var l in n)n.hasOwnProperty(l)&&(o[l]=n[l]);n.hasOwnProperty(s)||(o[s]=i[s])}var c=r[e];return r[e]=o,a.languages.DFS(a.languages,function(t,n){n===c&&t!=e&&(this[t]=o)}),o},DFS:function e(t,n,r,i){i=i||{};var o=a.util.objId;for(var s in t)if(t.hasOwnProperty(s)){n.call(t,s,t[s],r||s);var l=t[s],c=a.util.type(l);"Object"!==c||i[o(l)]?"Array"!==c||i[o(l)]||(i[o(l)]=!0,e(l,n,s,i)):(i[o(l)]=!0,e(l,n,null,i))}}},plugins:{},highlightAll:function(e,t){a.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,n){var r={callback:n,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",r);for(var i,o=r.elements||e.querySelectorAll(r.selector),s=0;i=o[s++];)a.highlightElement(i,!0===t,r.callback)},highlightElement:function(n,r,i){for(var o,s,l=n;l&&!t.test(l.className);)l=l.parentNode;l&&(o=(l.className.match(t)||[,""])[1].toLowerCase(),s=a.languages[o]),n.className=n.className.replace(t,"").replace(/\s+/g," ")+" language-"+o,n.parentNode&&(l=n.parentNode,/pre/i.test(l.nodeName)&&(l.className=l.className.replace(t,"").replace(/\s+/g," ")+" language-"+o));var c={element:n,language:o,grammar:s,code:n.textContent},u=function(e){c.highlightedCode=e,a.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,a.hooks.run("after-highlight",c),a.hooks.run("complete",c),i&&i.call(c.element)};if(a.hooks.run("before-sanity-check",c),c.code)if(a.hooks.run("before-highlight",c),c.grammar)if(r&&e.Worker){var d=new Worker(a.filename);d.onmessage=function(e){u(e.data)},d.postMessage(JSON.stringify({language:c.language,code:c.code,immediateClose:!0}))}else u(a.highlight(c.code,c.grammar,c.language));else u(a.util.encode(c.code));else a.hooks.run("complete",c)},highlight:function(e,t,n){var i={code:e,grammar:t,language:n};return a.hooks.run("before-tokenize",i),i.tokens=a.tokenize(i.code,i.grammar),a.hooks.run("after-tokenize",i),r.stringify(a.util.encode(i.tokens),i.language)},matchGrammar:function(e,t,n,i,o,s,l){for(var c in n)if(n.hasOwnProperty(c)&&n[c]){if(c==l)return;var u=n[c];u="Array"===a.util.type(u)?u:[u];for(var d=0;d<u.length;++d){var h=u[d],p=h.inside,g=!!h.lookbehind,f=!!h.greedy,m=0,y=h.alias;if(f&&!h.pattern.global){var v=h.pattern.toString().match(/[imuy]*$/)[0];h.pattern=RegExp(h.pattern.source,v+"g")}h=h.pattern||h;for(var b=i,k=o;b<t.length;k+=t[b].length,++b){var w=t[b];if(t.length>e.length)return;if(!(w instanceof r)){if(f&&b!=t.length-1){if(h.lastIndex=k,!($=h.exec(e)))break;for(var _=$.index+(g?$[1].length:0),F=$.index+$[0].length,x=b,C=k,S=t.length;x<S&&(C<F||!t[x].type&&!t[x-1].greedy);++x)(C+=t[x].length)<=_&&(++b,k=C);if(t[b]instanceof r)continue;A=x-b,w=e.slice(k,C),$.index-=k}else{h.lastIndex=0;var $=h.exec(w),A=1}if($){g&&(m=$[1]?$[1].length:0),F=(_=$.index+m)+($=$[0].slice(m)).length;var E=w.slice(0,_),j=w.slice(F),O=[b,A];E&&(++b,k+=E.length,O.push(E));var z=new r(c,p?a.tokenize($,p):$,y,$,f);if(O.push(z),j&&O.push(j),Array.prototype.splice.apply(t,O),1!=A&&a.matchGrammar(e,t,n,b,k,!0,c),s)break}else if(s)break}}}}},tokenize:function(e,t){var n=[e],r=t.rest;if(r){for(var i in r)t[i]=r[i];delete t.rest}return a.matchGrammar(e,n,t,0,0,!1),n},hooks:{all:{},add:function(e,t){var n=a.hooks.all;n[e]=n[e]||[],n[e].push(t)},run:function(e,t){var n=a.hooks.all[e];if(n&&n.length)for(var r,i=0;r=n[i++];)r(t)}},Token:r};function r(e,t,n,a,r){this.type=e,this.content=t,this.alias=n,this.length=0|(a||"").length,this.greedy=!!r}if(e.Prism=a,r.stringify=function(e,t,n){if("string"==typeof e)return e;if(Array.isArray(e))return e.map(function(n){return r.stringify(n,t,e)}).join("");var i={type:e.type,content:r.stringify(e.content,t,n),tag:"span",classes:["token",e.type],attributes:{},language:t,parent:n};if(e.alias){var o=Array.isArray(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(i.classes,o)}a.hooks.run("wrap",i);var s=Object.keys(i.attributes).map(function(e){return e+'="'+(i.attributes[e]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+(s?" "+s:"")+">"+i.content+"</"+i.tag+">"},!e.document)return e.addEventListener&&(a.disableWorkerMessageHandler||e.addEventListener("message",function(t){var n=JSON.parse(t.data),r=n.language,i=n.code,o=n.immediateClose;e.postMessage(a.highlight(i,a.languages[r],r)),o&&e.close()},!1)),a;var i=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return i&&(a.filename=i.src,a.manual||i.hasAttribute("data-manual")||("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(a.highlightAll):window.setTimeout(a.highlightAll,16):document.addEventListener("DOMContentLoaded",a.highlightAll))),a}("undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{});e.exports&&(e.exports=n),void 0!==t&&(t.Prism=n),n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},n.languages.javascript=n.languages.extend("clike",{"class-name":[n.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,lookbehind:!0}],keyword:[{pattern:/((?:^|})\s*)(?:catch|finally)\b/,lookbehind:!0},{pattern:/(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],number:/\b(?:(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+)n?|\d+n|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,function:/[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/}),n.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,n.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^\/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})\]]))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,lookbehind:!0,inside:n.languages.javascript},{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,inside:n.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,lookbehind:!0,inside:n.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,lookbehind:!0,inside:n.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),n.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${[^}]+}|[^\\`])*`/,greedy:!0,inside:{interpolation:{pattern:/\${[^}]+}/,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:n.languages.javascript}},string:/[\s\S]+/}}}),n.languages.markup&&n.languages.markup.tag.addInlined("script","javascript"),n.languages.js=n.languages.javascript}).call(this,n(1))},6:function(e,t,n){},8:function(e,t,n){"use strict";n.r(t);n(5),n(6);var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var o=13,s=9,l=8,c=89,u=90,d=77,h=57,p=219,g=222,f=192,m=100,y=3e3,v="navigator"in window&&/Win/i.test(navigator.platform),b="navigator"in window&&/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform),k="npm__react-simple-code-editor__textarea",w=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var k=arguments.length,w=Array(k),_=0;_<k;_++)w[_]=arguments[_];return n=r=i(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(w))),r.state={capture:!0},r._recordCurrentState=function(){var e=r._input;if(e){var t=e.value,n=e.selectionStart,a=e.selectionEnd;r._recordChange({value:t,selectionStart:n,selectionEnd:a})}},r._getLines=function(e,t){return e.substring(0,t).split("\n")},r._recordChange=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=r._history,i=n.stack,o=n.offset;if(i.length&&o>-1){r._history.stack=i.slice(0,o+1);var s=r._history.stack.length;if(s>m){var l=s-m;r._history.stack=i.slice(l,s),r._history.offset=Math.max(r._history.offset-l,0)}}var c=Date.now();if(t){var u=r._history.stack[r._history.offset];if(u&&c-u.timestamp<y){var d=/[^a-z0-9]([a-z0-9]+)$/i,h=r._getLines(u.value,u.selectionStart).pop().match(d),p=r._getLines(e.value,e.selectionStart).pop().match(d);if(h&&p&&p[1].startsWith(h[1]))return void(r._history.stack[r._history.offset]=a({},e,{timestamp:c}))}}r._history.stack.push(a({},e,{timestamp:c})),r._history.offset++},r._updateInput=function(e){var t=r._input;t&&(t.value=e.value,t.selectionStart=e.selectionStart,t.selectionEnd=e.selectionEnd,r.props.onValueChange(e.value))},r._applyEdits=function(e){var t=r._input,n=r._history.stack[r._history.offset];n&&t&&(r._history.stack[r._history.offset]=a({},n,{selectionStart:t.selectionStart,selectionEnd:t.selectionEnd})),r._recordChange(e),r._updateInput(e)},r._undoEdit=function(){var e=r._history,t=e.stack,n=e.offset,a=t[n-1];a&&(r._updateInput(a),r._history.offset=Math.max(n-1,0))},r._redoEdit=function(){var e=r._history,t=e.stack,n=e.offset,a=t[n+1];a&&(r._updateInput(a),r._history.offset=Math.min(n+1,t.length-1))},r._handleKeyDown=function(e){var t=r.props,n=t.tabSize,a=t.insertSpaces,i=t.ignoreTabKey,m=t.onKeyDown;if(!m||(m(e),!e.defaultPrevented)){var y=e.target,k=y.value,w=y.selectionStart,_=y.selectionEnd,F=(a?" ":"     ").repeat(n);if(e.keyCode===s&&!i&&r.state.capture)if(e.preventDefault(),e.shiftKey){var x=r._getLines(k,w),C=x.length-1,S=r._getLines(k,_).length-1,$=k.split("\n").map(function(e,t){return t>=C&&t<=S&&e.startsWith(F)?e.substring(F.length):e}).join("\n");if(k!==$){var A=x[C];r._applyEdits({value:$,selectionStart:A.startsWith(F)?w-F.length:w,selectionEnd:_-(k.length-$.length)})}}else if(w!==_){var E=r._getLines(k,w),j=E.length-1,O=r._getLines(k,_).length-1,z=E[j];r._applyEdits({value:k.split("\n").map(function(e,t){return t>=j&&t<=O?F+e:e}).join("\n"),selectionStart:/\S/.test(z)?w+F.length:w,selectionEnd:_+F.length*(O-j+1)})}else{var K=w+F.length;r._applyEdits({value:k.substring(0,w)+F+k.substring(_),selectionStart:K,selectionEnd:K})}else if(e.keyCode===l){var N=w!==_;if(k.substring(0,w).endsWith(F)&&!N){e.preventDefault();var L=w-F.length;r._applyEdits({value:k.substring(0,w-F.length)+k.substring(_),selectionStart:L,selectionEnd:L})}}else if(e.keyCode===o){if(w===_){var P=r._getLines(k,w).pop().match(/^\s+/);if(P&&P[0]){e.preventDefault();var I="\n"+P[0],T=w+I.length;r._applyEdits({value:k.substring(0,w)+I+k.substring(_),selectionStart:T,selectionEnd:T})}}}else if(e.keyCode===h||e.keyCode===p||e.keyCode===g||e.keyCode===f){var M=void 0;e.keyCode===h&&e.shiftKey?M=["(",")"]:e.keyCode===p?M=e.shiftKey?["{","}"]:["[","]"]:e.keyCode===g?M=e.shiftKey?['"','"']:["'","'"]:e.keyCode!==f||e.shiftKey||(M=["`","`"]),w!==_&&M&&(e.preventDefault(),r._applyEdits({value:k.substring(0,w)+M[0]+k.substring(w,_)+M[1]+k.substring(_),selectionStart:w,selectionEnd:_+2}))}else(b?e.metaKey&&e.keyCode===u:e.ctrlKey&&e.keyCode===u)&&!e.shiftKey&&!e.altKey?(e.preventDefault(),r._undoEdit()):(b?e.metaKey&&e.keyCode===u&&e.shiftKey:v?e.ctrlKey&&e.keyCode===c:e.ctrlKey&&e.keyCode===u&&e.shiftKey)&&!e.altKey?(e.preventDefault(),r._redoEdit()):e.keyCode!==d||!e.ctrlKey||b&&!e.shiftKey||(e.preventDefault(),r.setState(function(e){return{capture:!e.capture}}))}},r._handleChange=function(e){var t=e.target,n=t.value,a=t.selectionStart,i=t.selectionEnd;r._recordChange({value:n,selectionStart:a,selectionEnd:i},!0),r.props.onValueChange(n)},r._history={stack:[],offset:-1},i(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,React.Component),r(t,[{key:"componentDidMount",value:function(){this._recordCurrentState()}},{key:"render",value:function(){var e=this,t=this.props,n=t.value,r=t.style,i=t.padding,o=t.highlight,s=t.textareaId,l=t.autoFocus,c=t.disabled,u=t.form,d=t.maxLength,h=t.minLength,p=t.name,g=t.placeholder,f=t.readOnly,m=t.required,y=t.onClick,v=t.onFocus,b=t.onBlur,w=t.onKeyUp,F=(t.onKeyDown,t.onValueChange,t.tabSize,t.insertSpaces,t.ignoreTabKey,function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(t,["value","style","padding","highlight","textareaId","autoFocus","disabled","form","maxLength","minLength","name","placeholder","readOnly","required","onClick","onFocus","onBlur","onKeyUp","onKeyDown","onValueChange","tabSize","insertSpaces","ignoreTabKey"])),x={paddingTop:i,paddingRight:i,paddingBottom:i,paddingLeft:i},C=o(n);return React.createElement("div",a({},F,{style:a({},_.container,r)}),React.createElement("textarea",{ref:function(t){return e._input=t},style:a({},_.editor,_.textarea,x),className:k,id:s,value:n,onChange:this._handleChange,onKeyDown:this._handleKeyDown,onClick:y,onKeyUp:w,onFocus:v,onBlur:b,disabled:c,form:u,maxLength:d,minLength:h,name:p,placeholder:g,readOnly:f,required:m,autoFocus:l,autoCapitalize:"off",autoComplete:"off",autoCorrect:"off",spellCheck:!1,"data-gramm":!1}),React.createElement("pre",a({"aria-hidden":"true",style:a({},_.editor,_.highlight,x)},"string"==typeof C?{dangerouslySetInnerHTML:{__html:C+"<br />"}}:{children:C})),React.createElement("style",{type:"text/css",dangerouslySetInnerHTML:{__html:"\n/**\n * Reset the text fill color so that placeholder is visible\n */\n.npm__react-simple-code-editor__textarea:empty {\n  -webkit-text-fill-color: inherit !important;\n}\n\n/**\n * Hack to apply on some CSS on IE10 and IE11\n */\n@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n  /**\n    * IE doesn't support '-webkit-text-fill-color'\n    * So we use 'color: transparent' to make the text transparent on IE\n    * Unlike other browsers, it doesn't affect caret color in IE\n    */\n  .npm__react-simple-code-editor__textarea {\n    color: transparent !important;\n  }\n\n  .npm__react-simple-code-editor__textarea::selection {\n    background-color: #accef7 !important;\n    color: transparent !important;\n  }\n}\n"}}))}},{key:"session",get:function(){return{history:this._history}},set:function(e){this._history=e.history}}]),t}();w.defaultProps={tabSize:2,insertSpaces:!0,ignoreTabKey:!1,padding:0};var _={container:{position:"relative",textAlign:"left",boxSizing:"border-box",padding:0,overflow:"hidden"},textarea:{position:"absolute",top:0,left:0,height:"100%",width:"100%",resize:"none",color:"inherit",overflow:"hidden",outline:"none",MozOsxFontSmoothing:"grayscale",WebkitFontSmoothing:"antialiased",WebkitTextFillColor:"transparent"},highlight:{position:"relative",pointerEvents:"none"},editor:{margin:0,border:0,background:"none",boxSizing:"inherit",display:"inherit",fontFamily:"inherit",fontSize:"inherit",fontStyle:"inherit",fontVariantLigatures:"inherit",fontWeight:"inherit",letterSpacing:"inherit",lineHeight:"inherit",tabSize:"inherit",textIndent:"inherit",textRendering:"inherit",textTransform:"inherit",whiteSpace:"pre-wrap",wordBreak:"keep-all",overflowWrap:"break-word"}},F=w;n.d(t,"TestControls",function(){return j});const{highlight:x,languages:C}=Prism,S={width:"100%",fontSize:16,backgroundColor:"#2a2b2f",color:"rgb(255, 255, 255)",borderRadius:"1rem",fontFamily:"source-code-pro, Menlo, Monaco, Consolas, 'Courier New'",lineHeight:"170%"},$=css`
    color: orange;
    border: 1px solid orange;
  `,A=css`
    color: lightblue;
    border: 1px solid lightblue;
  `,E=(css`
    position: absolute;
    right: 1rem;
    top: 1.4rem;
    display: flex;
    align-items: center;
  `,css`
    padding: 0;
    border: 0;
  `);const j=({id:e,test:t,tests:n,setTests:a})=>html`
    <div className="test__controls">
      <p>
        ${t.error?"Failed":`${(e=>parseFloat(e).toFixed(0))(1e3*t.median||0)} μs`}
      </p>
      <button
        className=${E}
        onClick=${t=>a(((e,t,n)=>[...e.slice(0,t),n,...e.slice(t)])(n,e,n[e]))}
      >
        <${()=>html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4l6 6v10c0 1.1-.9 2-2 2H7.99C6.89 23 6 22.1 6 21l.01-14c0-1.1.89-2 1.99-2h7zm-1 7h5.5L14 6.5V12z"
    />
  </svg>
`} />
      </button>
      <button
        className=${E}
        onClick=${t=>a(n.filter((t,n)=>n!==e))}
      >
        <${()=>html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path
      d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
    />
    <path d="M0 0h24v24H0z" fill="none" />
  </svg>
`} />
      </button>
    </div>
  `;let O;t.default=(({before:e,setBefore:t,tests:n,setTests:a,setStarted:r})=>(!O&&(O=function(e,t,n){var a;return function(){var r=this,i=arguments,o=n&&!a;clearTimeout(a),a=setTimeout(function(){a=null,n||e.apply(r,i)},t),o&&e.apply(r,i)}}(r,500)),html`
    <article className="tests">
      <div className="tests__header">
        <h3>Setup Code</h3>
        <div>
          <button
            className=${A}
            onClick=${e=>{a(n.map(e=>({...e,median:0}))),O(!0)}}
          >
            Run Benchmark
          </button>
        </div>
      </div>
      <${F}
        value=${e}
        onValueChange=${e=>{t(e),O(!0)}}
        highlight=${e=>x(e,C.js)}
        padding=${20}
        style=${S}
      />
      <div className="tests__header">
        <h3>Test Cases</h3>
        <div>
          <button
            className=${$}
            onClick=${e=>a([{code:"",median:0},...n])}
          >
            Add Case
          </button>
        </div>
      </div>
      <ul>
        ${n.map((e,t)=>html`
            <li key=${t} className="test">
              <div className="test__editor">
                <${F}
                  key=${t}
                  value=${e.code}
                  onValueChange=${e=>{a(n.map((n,a)=>a==t?{...n,code:e}:n)),O(!0)}}
                  highlight=${e=>x(e,C.js)}
                  padding=${20}
                />
              </div>
              <${j}
                id=${t}
                tests=${n}
                test=${e}
                setTests=${a}
              />
            </li>
          `)}
      </ul>
    </article>
  `))}}]);