(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{HS01:function(e,t,n){"use strict";n("R48M"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){1!==e&&(t+="s");return e+" "+t+" "+n};!function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);t.default=e}(n("q1tI"))},Kfvu:function(e,t,n){"use strict";var r=n("TqRt");t.__esModule=!0,t.OutboundLink=l,t.trackCustomEvent=function(e){var t=e.category,n=e.action,r=e.label,a=e.value,o=e.nonInteraction,i=void 0===o||o,c=e.transport,l=e.hitCallback,u=e.callbackTimeout,s=void 0===u?1e3:u;if("undefined"!=typeof window&&window.ga){var d={eventCategory:t,eventAction:n,eventLabel:r,eventValue:a,nonInteraction:i,transport:c};l&&"function"==typeof l&&(d.hitCallback=function(e,t){void 0===t&&(t=1e3);var n=!1,r=function(){n||(n=!0,e())};return setTimeout(r,t),r}(l,s)),window.ga("send","event",d)}};var a=r(n("pVnL")),o=r(n("8OQS")),i=r(n("q1tI")),c=r(n("17x9"));function l(e){var t=e.eventCategory,n=e.eventAction,r=e.eventLabel,c=e.eventValue,l=(0,o.default)(e,["eventCategory","eventAction","eventLabel","eventValue"]);return i.default.createElement("a",(0,a.default)({},l,{onClick:function(a){"function"==typeof e.onClick&&e.onClick(a);var o=!0;return(0!==a.button||a.altKey||a.ctrlKey||a.metaKey||a.shiftKey||a.defaultPrevented)&&(o=!1),e.target&&"_self"!==e.target.toLowerCase()&&(o=!1),window.ga?window.ga("send","event",{eventCategory:t||"Outbound Link",eventAction:n||"click",eventLabel:r||e.href,eventValue:c,transport:o?"beacon":"",hitCallback:function(){o&&(document.location=e.href)}}):o&&(document.location=e.href),!1}}))}l.propTypes={href:c.default.string,target:c.default.string,eventCategory:c.default.string,eventAction:c.default.string,eventLabel:c.default.string,eventValue:c.default.number,onClick:c.default.func}},LlRK:function(e,t,n){"use strict";n("1dPr"),n("n7j8"),n("pQ2P"),n("sC2a"),n("LagC"),n("pS08"),n("sc67"),n("MIFh"),n("m210"),n("4DPX"),n("rzGZ"),n("E5k/"),n("R48M"),Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(l){a=!0,o=l}finally{try{!r&&c.return&&c.return()}finally{if(a)throw o}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n("q1tI")),c=u(n("HS01")),l=u(n("zcrH"));function u(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var f=i.Component,p=86400,m=function(e){function t(){var e,n,r;s(this,t);for(var a=arguments.length,o=Array(a),i=0;i<a;i++)o[i]=arguments[i];return n=r=d(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),r.isStillMounted=!1,r.tick=function(e){if(r.isStillMounted&&r.props.live){var t=(0,l.default)(r.props.date).valueOf();if(t){var n=r.props.now(),a=Math.round(Math.abs(n-t)/1e3),o=a<60?1e3:a<3600?6e4:a<p?36e5:0,i=Math.min(Math.max(o,1e3*r.props.minPeriod),1e3*r.props.maxPeriod);i&&(r.timeoutId&&clearTimeout(r.timeoutId),r.timeoutId=setTimeout(r.tick,i)),e||r.forceUpdate()}else console.warn("[react-timeago] Invalid Date provided")}},d(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"componentDidMount",value:function(){this.isStillMounted=!0,this.props.live&&this.tick(!0)}},{key:"componentDidUpdate",value:function(e){this.props.live===e.live&&this.props.date===e.date||(!this.props.live&&this.timeoutId&&clearTimeout(this.timeoutId),this.tick())}},{key:"componentWillUnmount",value:function(){this.isStillMounted=!1,this.timeoutId&&(clearTimeout(this.timeoutId),this.timeoutId=void 0)}},{key:"render",value:function(){var e=this.props,t=e.date,n=e.formatter,o=e.component,u=(e.live,e.minPeriod,e.maxPeriod,e.title),s=e.now,d=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["date","formatter","component","live","minPeriod","maxPeriod","title","now"]),f=(0,l.default)(t).valueOf();if(!f)return null;var m=s(),b=Math.round(Math.abs(m-f)/1e3),v=f<m?"ago":"from now",h=b<60?[Math.round(b),"second"]:b<3600?[Math.round(b/60),"minute"]:b<p?[Math.round(b/3600),"hour"]:b<604800?[Math.round(b/p),"day"]:b<2592e3?[Math.round(b/604800),"week"]:b<31536e3?[Math.round(b/2592e3),"month"]:[Math.round(b/31536e3),"year"],y=a(h,2),O=y[0],j=y[1],g=void 0===u?"string"==typeof t?t:(0,l.default)(t).toISOString().substr(0,16).replace("T"," "):u,w="time"===o?Object.assign({},d,{dateTime:(0,l.default)(t).toISOString()}):d,k=c.default.bind(null,O,j,v);return i.createElement(o,r({},w,{title:g}),n(O,j,v,f,k,s))}}]),t}(f);m.displayName="TimeAgo",m.defaultProps={live:!0,component:"time",minPeriod:0,maxPeriod:1/0,formatter:c.default,now:function(){return Date.now()}},t.default=m},N6Xh:function(e,t,n){},iuFa:function(e,t,n){var r=n("P8UN");r(r.S,"Number",{isNaN:function(e){return e!=e}})},"mA+F":function(e,t,n){"use strict";n.r(t);n("rzGZ"),n("Dq+y"),n("8npG"),n("sC2a");var r=n("q1tI"),a=n("LlRK"),o=n.n(a),i=n("Kfvu"),c=n("NqE+"),l=n("TBFr"),u=n("+ego"),s=n("he5r"),d=n("JlVE"),f=n("fdqv"),p=n("9Dx3"),m=(n("xjMj"),n("N6Xh"),n("qKvR"));t.default=function(){var e=Object(r.useState)([]),t=e[0],n=e[1],a=Object(r.useState)(!1),b=a[0],v=a[1];return Object(r.useEffect)((function(){v(!0),Object(d.a)(s.c,(function(e){e.forEach((function(e){"jobs"===e.title&&n(e.entries)})),v(!1)}))}),[]),Object(m.d)(u.a,null,Object(m.d)(c.a,null,Object(m.d)(l.a,null,b?Object(m.d)(p.a,null):t.map((function(e,t){return function(e,t){return Object(m.d)("div",{key:t,className:"job job-"+t},Object(m.d)("div",{className:"top"},Object(m.d)("div",{className:"time"},Object(m.d)(o.a,{date:e.timestamp})),Object(m.d)("div",{className:"category"},e.jobcategory)),Object(m.d)("div",{className:"middle"},Object(m.d)("div",{className:"col-left"},Object(m.d)("h4",{className:"title"},e.jobtitle,Object(m.d)("span",{className:"type"},e.typeofwork)),Object(m.d)("div",{className:"description"},e.jobdescription)),Object(m.d)("div",{className:"col-right"},Object(m.d)("div",{className:"contact-wrapper row1"},Object(m.d)("a",{href:"mailto:"+e.emailaddress+"?subject="+e.jobtitle,className:"btn"},"Contact")),Object(m.d)("div",{className:"rate-wrapper row1"},Object(m.d)("span",{className:"rate"},e.jobrate)),Object(m.d)("div",{className:"alt-icons row2"},e.phonenumber?Object(m.d)("a",{className:"phone btn secondary",href:"tel:"+e.phonenumber},"Call"):"",e.jobpostlink?Object(m.d)(i.OutboundLink,{href:e.jobpostlink,target:"_blank",className:"post-link btn tertiary"},"Online Link"):""))),Object(m.d)("div",{className:"bottom"},Object(m.d)("div",{className:"company"},Object(m.d)("div",{className:"name"},e.companyname,e.dentonchamberofcommercemember&&Object(m.d)("div",{className:"coc"},Object(m.d)("img",{src:"https://cdn.jsdelivr.net/gh/techmilldenton/denton-works@master/src/images/dcoc-logo.svg",alt:"Denton Chamber of Commerce Member",title:"Denton Chamber of Commerce Member"}))),Object(m.d)("div",{className:"links"},e.websiteurl?Object(m.d)(i.OutboundLink,{target:"_blank",href:e.websiteurl},"🔗"):"")),Object(m.d)("div",{className:"address"},Object(m.d)(i.OutboundLink,{target:"_blank",href:"https://www.google.com/maps/search/?api=1&query="+e.companyname.replace(/\s/g,"+")+"+"+e.address.replace(/\s/g,"+")},e.address))))}(Object(f.c)(e),t)})))))}},xjMj:function(e,t,n){},zcrH:function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}n("AqHK"),n("Ll4R"),n("YBKJ"),n("iuFa"),n("YbXK"),n("cFtU"),n("MIFh"),n("R48M"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=new Date(e);if(!Number.isNaN(t.valueOf()))return t;var n=String(e).match(/\d+/g);if(null==n||n.length<=2)return t;var a=n.map((function(e){return parseInt(e)})),o=(s=a,Array.isArray(s)?s:Array.from(s)),i=o[0],c=o[1],l=o.slice(2),u=[i,c-1].concat(r(l));return new Date(Date.UTC.apply(Date,r(u)));var s}}}]);
//# sourceMappingURL=component---src-pages-jobs-tsx-9630542ffd527e671eeb.js.map