(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{Kfvu:function(e,t,n){"use strict";var r=n("TqRt");t.__esModule=!0,t.OutboundLink=l,t.trackCustomEvent=function(e){var t=e.category,n=e.action,r=e.label,a=e.value,o=e.nonInteraction,c=void 0===o||o,i=e.transport,l=e.hitCallback,u=e.callbackTimeout,s=void 0===u?1e3:u;if("undefined"!=typeof window&&window.ga){var d={eventCategory:t,eventAction:n,eventLabel:r,eventValue:a,nonInteraction:c,transport:i};l&&"function"==typeof l&&(d.hitCallback=function(e,t){void 0===t&&(t=1e3);var n=!1,r=function(){n||(n=!0,e())};return setTimeout(r,t),r}(l,s)),window.ga("send","event",d)}};var a=r(n("pVnL")),o=r(n("8OQS")),c=r(n("q1tI")),i=r(n("17x9"));function l(e){var t=e.eventCategory,n=e.eventAction,r=e.eventLabel,i=e.eventValue,l=(0,o.default)(e,["eventCategory","eventAction","eventLabel","eventValue"]);return c.default.createElement("a",(0,a.default)({},l,{onClick:function(a){"function"==typeof e.onClick&&e.onClick(a);var o=!0;return(0!==a.button||a.altKey||a.ctrlKey||a.metaKey||a.shiftKey||a.defaultPrevented)&&(o=!1),e.target&&"_self"!==e.target.toLowerCase()&&(o=!1),window.ga?window.ga("send","event",{eventCategory:t||"Outbound Link",eventAction:n||"click",eventLabel:r||e.href,eventValue:i,transport:o?"beacon":"",hitCallback:function(){o&&(document.location=e.href)}}):o&&(document.location=e.href),!1}}))}l.propTypes={href:i.default.string,target:i.default.string,eventCategory:i.default.string,eventAction:i.default.string,eventLabel:i.default.string,eventValue:i.default.number,onClick:i.default.func}},MGiz:function(e,t){var n=/[\'\"]/;e.exports=function(e){return e?(n.test(e.charAt(0))&&(e=e.substr(1)),n.test(e.charAt(e.length-1))&&(e=e.substr(0,e.length-1)),e):""}},"mA+F":function(e,t,n){"use strict";n.r(t);n("rzGZ"),n("Dq+y"),n("8npG"),n("sC2a");var r=n("q1tI"),a=n.n(r),o=n("LlRK"),c=n.n(o),i=n("Kfvu"),l=(n("klQ5"),n("q8oJ"),n("C9fy"),n("OeI1"),n("MIFh"),n("zGcK"),n("Ggvi"),n("U6Bt"),n("Ll4R"),n("AqHK"),n("HQhv"),n("JHok"),n("HXzo"),n("wZFJ"),n("sc67"),n("m210"),n("4DPX"),n("E5k/"),n("MGiz")),u=n.n(l),s=Object.assign||function(e){for(var t,n=1;n<arguments.length;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};var f={accesskey:"accessKey",allowfullscreen:"allowFullScreen",allowtransparency:"allowTransparency",autocomplete:"autoComplete",autofocus:"autoFocus",autoplay:"autoPlay",cellpadding:"cellPadding",cellspacing:"cellSpacing",charset:"charSet",class:"className",classid:"classId",colspan:"colSpan",contenteditable:"contentEditable",contextmenu:"contextMenu",crossorigin:"crossOrigin",enctype:"encType",for:"htmlFor",formaction:"formAction",formenctype:"formEncType",formmethod:"formMethod",formnovalidate:"formNoValidate",formtarget:"formTarget",frameborder:"frameBorder",hreflang:"hrefLang",inputmode:"inputMode",keyparams:"keyParams",keytype:"keyType",marginheight:"marginHeight",marginwidth:"marginWidth",maxlength:"maxLength",mediagroup:"mediaGroup",minlength:"minLength",novalidate:"noValidate",radiogroup:"radioGroup",readonly:"readOnly",rowspan:"rowSpan",spellcheck:"spellCheck",srcdoc:"srcDoc",srclang:"srcLang",srcset:"srcSet",tabindex:"tabIndex",usemap:"useMap"},p={amp:"&",apos:"'",gt:">",lt:"<",nbsp:" ",quot:"“"},m=["style","script"],g=/([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi,y=/mailto:/i,b=/\n{2,}$/,h=/^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/,v=/^ *> ?/gm,k=/^ {2,}\n/,O=/^(?:( *[-*_]) *){3,}(?:\n *)+\n/,j=/^\s*(`{3,}|~{3,}) *(\S+)? *\n([\s\S]+?)\s*\1 *(?:\n *)+\n?/,w=/^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,x=/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,C=/^(?:\n *)*\n/,S=/\r\n?/g,N=/^\[\^(.*)\](:.*)\n/,L=/^\[\^(.*)\]/,z=/\f/g,E=/^\s*?\[(x|\s)\]/,T=/^ *(#{1,6}) *([^\n]+)\n{0,2}/,A=/^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/,P=/^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?([^>]*)\/{0}>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1)[\s\S])*?)<\/\1>\n*/i,$=/&([a-z]+);/g,M=/^<!--.*?-->/,I=/^(data|aria|x)-[a-z_][a-z\d_.-]*$/,_=/^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,B=/^\{.*\}$/,q=/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,K=/^<([^ >]+@[^ >]+)>/,U=/^<([^ >]+:\/[^ >]+)>/,D=/ *\n+$/,R=/(?:^|\n)( *)$/,V=/-([a-z])?/gi,F=/^(.*\|?.*)\n *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*)\n?/,G=/^((?:[^\n]|\n(?! *\n))+)(?:\n *)+\n/,H=/^\[([^\]]*)\]:\s*(\S+)\s*("([^"]*)")?/,J=/^!\[([^\]]*)\] ?\[([^\]]*)\]/,Z=/^\[([^\]]*)\] ?\[([^\]]*)\]/,Q=/(\[|\])/g,W=/(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/,X=/\t/g,Y=/^ *\| */,ee=/(^ *\||\| *$)/g,te=/ *$/,ne=/^ *:-+: *$/,re=/^ *:-+ *$/,ae=/^ *-+: *$/,oe=/^([*_])\1((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1\1(?!\1)/,ce=/^([*_])((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1(?!\1)/,ie=/^~~((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)~~/,le=/^\\([^0-9A-Za-z\s])/,ue=/^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i,se=/(^\n+|\n+$|\s+$)/g,de=/^([ \t]*)/,fe=/\\([^0-9A-Z\s])/gi,pe=/^( *)((?:[*+-]|\d+\.)) +/,me=/( *)((?:[*+-]|\d+\.)) +[^\n]*(?:\n(?!\1(?:[*+-]|\d+\.) )[^\n]*)*(\n|$)/gm,ge=/^( *)((?:[*+-]|\d+\.)) [\s\S]+?(?:\n{2,}(?! )(?!\1(?:[*+-]|\d+\.) (?!(?:[*+-]|\d+\.) ))\n*|\s*\n*$)/,ye=/^\[((?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*)\]\(\s*<?((?:[^\s\\]|\\.)*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*\)/,be=/^!\[((?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*)\]\(\s*<?((?:[^\s\\]|\\.)*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*\)/,he=[h,w,j,T,A,P,M,_,me,ge,F,G];function ve(e){return e.replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g,"a").replace(/[çÇ]/g,"c").replace(/[ðÐ]/g,"d").replace(/[ÈÉÊËéèêë]/g,"e").replace(/[ÏïÎîÍíÌì]/g,"i").replace(/[Ññ]/g,"n").replace(/[øØœŒÕõÔôÓóÒò]/g,"o").replace(/[ÜüÛûÚúÙù]/g,"u").replace(/[ŸÿÝý]/g,"y").replace(/[^a-z0-9- ]/gi,"").replace(/ /gi,"-").toLowerCase()}function ke(e){return ae.test(e)?"right":ne.test(e)?"center":re.test(e)?"left":null}function Oe(e,t,n){var r=n.inTable;n.inTable=!0;var a=t(e.trim(),n);n.inTable=r;var o=[[]];return a.forEach((function(e,t){"tableSeparator"===e.type?0!==t&&t!==a.length-1&&o.push([]):("text"===e.type&&(null==a[t+1]||"tableSeparator"===a[t+1].type)&&(e.content=e.content.replace(te,"")),o[o.length-1].push(e))})),o}function je(e,t,n){n.inline=!0;var r=Oe(e[1],t,n),a=function(e){return e.replace(ee,"").split("|").map(ke)}(e[2]),o=function(e,t,n){return e.trim().split("\n").map((function(e){return Oe(e,t,n)}))}(e[3],t,n);return n.inline=!1,{align:a,cells:o,header:r,type:"table"}}function we(e,t){return null==e.align[t]?{}:{textAlign:e.align[t]}}function xe(e){function t(r,a){for(var o=[],c="";r;)for(var i=0;i<n.length;){var l=n[i],u=e[l],s=u.match(r,a,c);if(s){var d=s[0];r=r.substring(d.length);var f=u.parse(s,t,a);null==f.type&&(f.type=l),o.push(f),c=d;break}i++}return o}var n=Object.keys(e);return n.sort((function(t,n){var r=e[t].order,a=e[n].order;return r===a?t<n?-1:1:r-a})),function(e,n){return t(function(e){return e.replace(S,"\n").replace(z,"").replace(X,"    ")}(e),n)}}function Ce(e){return function(t,n){return n.inline?e.exec(t):null}}function Se(e){return function(t,n){return n.inline||n.simple?e.exec(t):null}}function Ne(e){return function(t,n){return n.inline||n.simple?null:e.exec(t)}}function Le(e){return function(t){return e.exec(t)}}function ze(e){try{if(decodeURIComponent(e).match(/^\s*javascript:/i))return null}catch(t){return null}return e}function Ee(e){return e.replace(fe,"$1")}function Te(e,t,n){var r=n.inline||!1,a=n.simple||!1;n.inline=!0,n.simple=!0;var o=e(t,n);return n.inline=r,n.simple=a,o}function Ae(e,t,n){var r=n.inline||!1,a=n.simple||!1;n.inline=!1,n.simple=!0;var o=e(t,n);return n.inline=r,n.simple=a,o}function Pe(e,t,n){return n.inline=!1,e(t+"\n\n",n)}function $e(e,t,n){return{content:Te(t,e[1],n)}}function Me(){return{}}function Ie(){return null}function _e(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter(Boolean).join(" ")}function Be(e,t,n){for(var r=e,a=t.split(".");a.length&&void 0!==(r=r[a[0]]);)a.shift();return r||n}function qe(e,t){var n=Be(t,e);return n?"function"==typeof n||"object"===(void 0===n?"undefined":d(n))&&"render"in n?n:Be(t,e+".component",e):e}function Ke(e,t){function n(e,n){for(var r=Be(t.overrides,e+".props",{}),a=arguments.length,o=Array(a>2?a-2:0),i=2;i<a;i++)o[i-2]=arguments[i];return c.apply(void 0,[qe(e,t.overrides),s({},n,r,{className:_e(n&&n.className,r.className)||void 0})].concat(o))}function r(e){var r=!1;t.forceInline?r=!0:!t.forceBlock&&(r=!1===W.test(e));var a=z(S(r?e:e.replace(se,"")+"\n\n",{inline:r})),o=void 0;return a.length>1?o=n(r?"span":"div",{key:"outer"},a):1===a.length?"string"==typeof(o=a[0])&&(o=n("span",{key:"outer"},o)):o=n("span",{key:"outer"}),o}function o(e){var t=e.match(g);return t?t.reduce((function(e,t,n){var o=t.indexOf("=");if(-1!==o){var c=function(e){return-1!==e.indexOf("-")&&null===e.match(I)&&(e=e.replace(V,(function(e,t){return t.toUpperCase()}))),e}(t.slice(0,o)).trim(),i=u()(t.slice(o+1).trim()),l=f[c]||c,s=e[l]=function(e,t){return"style"===e?t.split(/;\s?/).reduce((function(e,t){var n=t.slice(0,t.indexOf(":")),r=n.replace(/(-[a-z])/g,(function(e){return e[1].toUpperCase()}));return e[r]=t.slice(n.length+1).trim(),e}),{}):"href"===e?ze(t):(t.match(B)&&(t=t.slice(1,t.length-1)),"true"===t||"false"!==t&&t)}(c,i);(P.test(s)||_.test(s))&&(e[l]=a.a.cloneElement(r(s.trim()),{key:n}))}else"style"!==t&&(e[f[t]||t]=!0);return e}),{}):void 0}(t=t||{}).overrides=t.overrides||{},t.slugify=t.slugify||ve,t.namedCodesToUnicode=t.namedCodesToUnicode?s({},p,t.namedCodesToUnicode):p;var c=t.createElement||a.a.createElement;var i=[],l={},d={blockQuote:{match:Ne(h),order:2,parse:function(e,t,n){return{content:t(e[0].replace(v,""),n)}},react:function(e,t,r){return n("blockquote",{key:r.key},t(e.content,r))}},breakLine:{match:Le(k),order:2,parse:Me,react:function(e,t,r){return n("br",{key:r.key})}},breakThematic:{match:Ne(O),order:2,parse:Me,react:function(e,t,r){return n("hr",{key:r.key})}},codeBlock:{match:Ne(w),order:1,parse:function(e){return{content:e[0].replace(/^ {4}/gm,"").replace(/\n+$/,""),lang:void 0}},react:function(e,t,r){return n("pre",{key:r.key},n("code",{className:e.lang?"lang-"+e.lang:""},e.content))}},codeFenced:{match:Ne(j),order:1,parse:function(e){return{content:e[3],lang:e[2]||void 0,type:"codeBlock"}}},codeInline:{match:Se(x),order:4,parse:function(e){return{content:e[2]}},react:function(e,t,r){return n("code",{key:r.key},e.content)}},footnote:{match:Ne(N),order:1,parse:function(e){return i.push({footnote:e[2],identifier:e[1]}),{}},react:Ie},footnoteReference:{match:Ce(L),order:2,parse:function(e){return{content:e[1],target:"#"+e[1]}},react:function(e,t,r){return n("a",{key:r.key,href:ze(e.target)},n("sup",{key:r.key},e.content))}},gfmTask:{match:Ce(E),order:2,parse:function(e){return{completed:"x"===e[1].toLowerCase()}},react:function(e,t,r){return n("input",{checked:e.completed,key:r.key,readOnly:!0,type:"checkbox"})}},heading:{match:Ne(T),order:2,parse:function(e,n,r){return{content:Te(n,e[2],r),id:t.slugify(e[2]),level:e[1].length}},react:function(e,t,r){return n("h"+e.level,{id:e.id,key:r.key},t(e.content,r))}},headingSetext:{match:Ne(A),order:1,parse:function(e,t,n){return{content:Te(t,e[1],n),level:"="===e[2]?1:2,type:"heading"}}},htmlComment:{match:Le(M),order:2,parse:function(){return{}},react:Ie},image:{match:Se(be),order:2,parse:function(e){return{alt:e[1],target:Ee(e[2]),title:e[3]}},react:function(e,t,r){return n("img",{key:r.key,alt:e.alt||void 0,title:e.title||void 0,src:ze(e.target)})}},link:{match:Ce(ye),order:4,parse:function(e,t,n){return{content:Ae(t,e[1],n),target:Ee(e[2]),title:e[3]}},react:function(e,t,r){return n("a",{key:r.key,href:ze(e.target),title:e.title},t(e.content,r))}},linkAngleBraceStyleDetector:{match:Ce(U),order:1,parse:function(e){return{content:[{content:e[1],type:"text"}],target:e[1],type:"link"}}},linkBareUrlDetector:{match:Ce(q),order:1,parse:function(e){return{content:[{content:e[1],type:"text"}],target:e[1],title:void 0,type:"link"}}},linkMailtoDetector:{match:Ce(K),order:1,parse:function(e){var t=e[1],n=e[1];return y.test(n)||(n="mailto:"+n),{content:[{content:t.replace("mailto:",""),type:"text"}],target:n,type:"link"}}},list:{match:function(e,t,n){var r=R.exec(n),a=t._list||!t.inline;return r&&a?(e=r[1]+e,ge.exec(e)):null},order:2,parse:function(e,t,n){var r=e[2],a=r.length>1,o=a?+r:void 0,c=e[0].replace(b,"\n").match(me),i=!1;return{items:c.map((function(e,r){var a=pe.exec(e)[0].length,o=new RegExp("^ {1,"+a+"}","gm"),l=e.replace(o,"").replace(pe,""),u=r===c.length-1,s=-1!==l.indexOf("\n\n")||u&&i;i=s;var d,f=n.inline,p=n._list;n._list=!0,s?(n.inline=!1,d=l.replace(D,"\n\n")):(n.inline=!0,d=l.replace(D,""));var m=t(d,n);return n.inline=f,n._list=p,m})),ordered:a,start:o}},react:function(e,t,r){return n(e.ordered?"ol":"ul",{key:r.key,start:e.start},e.items.map((function(e,a){return n("li",{key:a},t(e,r))})))}},newlineCoalescer:{match:Ne(C),order:4,parse:Me,react:function(){return"\n"}},paragraph:{match:Ne(G),order:4,parse:$e,react:function(e,t,r){return n("p",{key:r.key},t(e.content,r))}},ref:{match:Ce(H),order:1,parse:function(e){return l[e[1]]={target:e[2],title:e[4]},{}},react:Ie},refImage:{match:Se(J),order:1,parse:function(e){return{alt:e[1]||void 0,ref:e[2]}},react:function(e,t,r){return n("img",{key:r.key,alt:e.alt,src:ze(l[e.ref].target),title:l[e.ref].title})}},refLink:{match:Ce(Z),order:1,parse:function(e,t,n){return{content:t(e[1],n),fallbackContent:t(e[0].replace(Q,"\\$1"),n),ref:e[2]}},react:function(e,t,r){return l[e.ref]?n("a",{key:r.key,href:ze(l[e.ref].target),title:l[e.ref].title},t(e.content,r)):n("span",{key:r.key},t(e.fallbackContent,r))}},table:{match:Ne(F),order:2,parse:je,react:function(e,t,r){return n("table",{key:r.key},n("thead",null,n("tr",null,e.header.map((function(a,o){return n("th",{key:o,style:we(e,o)},t(a,r))})))),n("tbody",null,e.cells.map((function(a,o){return n("tr",{key:o},a.map((function(a,o){return n("td",{key:o,style:we(e,o)},t(a,r))})))}))))}},tableSeparator:{match:function(e,t){return t.inTable?Y.exec(e):null},order:2,parse:function(){return{type:"tableSeparator"}},react:function(){return" | "}},text:{match:Le(ue),order:5,parse:function(e){return{content:e[0].replace($,(function(e,n){return t.namedCodesToUnicode[n]?t.namedCodesToUnicode[n]:e}))}},react:function(e){return e.content}},textBolded:{match:Se(oe),order:3,parse:function(e,t,n){return{content:t(e[2],n)}},react:function(e,t,r){return n("strong",{key:r.key},t(e.content,r))}},textEmphasized:{match:Se(ce),order:4,parse:function(e,t,n){return{content:t(e[2],n)}},react:function(e,t,r){return n("em",{key:r.key},t(e.content,r))}},textEscaped:{match:Se(le),order:2,parse:function(e){return{content:e[1],type:"text"}}},textStrikethroughed:{match:Se(ie),order:4,parse:$e,react:function(e,t,r){return n("del",{key:r.key},t(e.content,r))}}};!0!==t.disableParsingRawHTML&&(d.htmlBlock={match:Le(P),order:2,parse:function(e,t,n){var r=e[3].match(de)[1],a=new RegExp("^"+r,"gm"),c=e[3].replace(a,""),i=function(e){return he.some((function(t){return t.test(e)}))}(c)?Pe:Te,l=e[1].toLowerCase(),u=-1!==m.indexOf(l);return{attrs:o(e[2]),content:u?e[3]:i(t,c,n),noInnerParse:u,tag:u?l:e[1]}},react:function(e,t,r){return n(e.tag,s({key:r.key},e.attrs),e.noInnerParse?e.content:t(e.content,r))}},d.htmlSelfClosing={match:Le(_),order:2,parse:function(e){return{attrs:o(e[2]||""),tag:e[1]}},react:function(e,t,r){return n(e.tag,s({},e.attrs,{key:r.key}))}});var S=xe(d),z=function(e){return function t(n,r){if(r=r||{},Array.isArray(n)){for(var a=r.key,o=[],c=!1,i=0;i<n.length;i++){r.key=i;var l=t(n[i],r),u="string"==typeof l;u&&c?o[o.length-1]+=l:o.push(l),c=u}return r.key=a,o}return e(n,t,r)}}(function(e){return function(t,n,r){return e[t.type].react(t,n,r)}}(d)),X=r(function(e){return e.replace(/<!--[\s\S]*?(?:-->)/g,"")}(e));return i.length&&X.props.children.push(n("footer",{key:"footer"},i.map((function(e){return n("div",{id:e.identifier,key:e.identifier},e.identifier,z(S(e.footnote,{inline:!0})))})))),X}function Ue(e){var t=e.children,n=e.options,r=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["children","options"]);return a.a.cloneElement(Ke(t,n),r)}var De=n("17x9"),Re=n.n(De);function Ve(){return(Ve=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function Fe(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var Ge=function(e){var t=e.color,n=e.size,r=Fe(e,["color","size"]);return a.a.createElement("svg",Ve({xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},r),a.a.createElement("path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"}),a.a.createElement("path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"}))};Ge.propTypes={color:Re.a.string,size:Re.a.oneOfType([Re.a.string,Re.a.number])},Ge.defaultProps={color:"currentColor",size:"24"};var He=Ge;function Je(){return(Je=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function Ze(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var Qe=function(e){var t=e.color,n=e.size,r=Ze(e,["color","size"]);return a.a.createElement("svg",Je({xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},r),a.a.createElement("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),a.a.createElement("circle",{cx:"12",cy:"10",r:"3"}))};Qe.propTypes={color:Re.a.string,size:Re.a.oneOfType([Re.a.string,Re.a.number])},Qe.defaultProps={color:"currentColor",size:"24"};var We=Qe,Xe=n("NqE+"),Ye=n("TBFr"),et=n("+ego"),tt=n("he5r"),nt=n("JlVE"),rt=n("fdqv"),at=n("9Dx3"),ot=(n("xjMj"),n("qKvR"));t.default=function(){var e=Object(r.useState)([]),t=e[0],n=e[1],a=Object(r.useState)(!1),o=a[0],l=a[1];return Object(r.useEffect)((function(){l(!0),Object(nt.a)(tt.c,(function(e){e.forEach((function(e){"jobs"===e.title&&n(e.entries)})),l(!1)}))}),[]),Object(ot.d)(et.a,null,Object(ot.d)(Xe.a,null,Object(ot.d)(Ye.a,null,o?Object(ot.d)(at.a,null):t.map((function(e,t){return function(e,t){return Object(ot.d)("div",{key:t,className:"card mb-4 job job-"+t},Object(ot.d)("div",{className:"card-header"},Object(ot.d)("div",{className:"row"},Object(ot.d)("div",{className:"col-md-4"},Object(ot.d)("div",{className:"time"},"Added ",Object(ot.d)(c.a,{date:e.timestamp}))),Object(ot.d)("div",{className:"col-md-8"},Object(ot.d)("div",{className:"category text-right"},e.jobcategory)))),Object(ot.d)("div",{className:"card-body"},Object(ot.d)("div",{className:"row"},Object(ot.d)("div",{className:"col-md-9"},Object(ot.d)("h4",{className:"card-title"},e.jobtitle,Object(ot.d)("span",{className:"job-type badge badge-primary ml-2"},e.typeofwork)),Object(ot.d)("p",{className:"description"},Object(ot.d)(Ue,null,e.jobdescription.replace(/(\r\n|\n|\r)/gm,"<br/>")))),Object(ot.d)("div",{className:"col-md-3"},Object(ot.d)("div",{className:"contact-wrapper"},Object(ot.d)("a",{href:"mailto:"+e.emailaddress+"?subject="+e.jobtitle,className:"btn btn-block btn-success mb-1"},"Contact"),e.phonenumber?Object(ot.d)("a",{className:"phone btn btn-block btn-primary mb-1",href:"tel:"+e.phonenumber},"Call"):"",e.jobpostlink?Object(ot.d)(i.OutboundLink,{href:e.jobpostlink,target:"_blank",className:"post-link btn btn-block btn-warning mb-1"},"Online Link"):""),Object(ot.d)("div",{className:"rate-wrapper text-center py-2"},Object(ot.d)("strong",{className:"rate btn btn-block btn-default"},e.jobrate))))),Object(ot.d)("div",{className:"card-footer"},Object(ot.d)("div",{className:"row"},Object(ot.d)("div",{className:"company col-md-8"},Object(ot.d)("div",{className:"name"},e.companyname,e.dentonchamberofcommercemember&&Object(ot.d)("div",{className:"coc"},Object(ot.d)("img",{src:"https://cdn.jsdelivr.net/gh/techmilldenton/denton-works@master/src/images/dcoc-logo.svg",alt:"Denton Chamber of Commerce Member",title:"Denton Chamber of Commerce Member"})))),Object(ot.d)("div",{className:"links col-md-4"},Object(ot.d)("div",{className:"btn-group float-right",role:"group","aria-label":"Company Links"},e.websiteurl?Object(ot.d)(i.OutboundLink,{target:"_blank",href:e.websiteurl,className:"btn"},Object(ot.d)(He,null)," Website"):"",Object(ot.d)(i.OutboundLink,{target:"_blank",className:"btn",href:"https://www.google.com/maps/search/?api=1&query="+e.companyname.replace(/\s/g,"+")+"+"+e.address.replace(/\s/g,"+")},Object(ot.d)(We,null)," Address"))))))}(Object(rt.c)(e),t)})))))}},xjMj:function(e,t,n){}}]);
//# sourceMappingURL=component---src-pages-jobs-tsx-54d316f5d2b17d65bb7a.js.map