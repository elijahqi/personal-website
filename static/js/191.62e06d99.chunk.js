/*! For license information please see 191.62e06d99.chunk.js.LICENSE.txt */
(self.webpackChunkpersonal_site=self.webpackChunkpersonal_site||[]).push([[191],{2191:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return j}});var n=r(2791),i=r(1087),o=r(6842),a=r(184),u=function(t){var e=t.label,r=t.link,n=t.value,i=t.format;return(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{width:"70%",children:e}),(0,a.jsx)("td",{children:r?(0,a.jsx)("a",{href:r,children:i(n)}):i(n)})]})};u.defaultProps={format:function(t){return t},link:null,value:null};var s=u,c=function(t){var e=t.data;return(0,a.jsx)("table",{children:(0,a.jsx)("tbody",{children:e.map((function(t){return(0,a.jsx)(s,{format:t.format,label:t.label,link:t.link,value:t.value},t.label)}))})})},f=r(9439),h=function(){var t=(0,n.useState)(),e=(0,f.Z)(t,2),r=e[0],i=e[1];return(0,n.useEffect)((function(){var t=setInterval((function(){return function(){var t=new Date("2000-06-04T09:24:00");i(((Date.now()-t)/31556925190.079998).toFixed(11))}()}),25);return function(){clearInterval(t)}}),[]),(0,a.jsx)(a.Fragment,{children:r})},l=[{key:"age",label:"Current age",value:(0,a.jsx)(h,{})},{key:"countries",label:"Countries visited",value:5,link:"https://www.google.com/maps"},{key:"location",label:"Current city",value:"Ann Arbor, MI"}],d=function(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h3",{children:"Some stats about me"}),(0,a.jsx)(c,{data:l})]})},v=r(1002);function p(){p=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(k){s=function(t,e,r){return t[e]=r}}function c(t,e,r,i){var o=e&&e.prototype instanceof l?e:l,a=Object.create(o.prototype),u=new D(i||[]);return n(a,"_invoke",{value:j(t,r,u)}),a}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(k){return{type:"throw",arg:k}}}t.wrap=c;var h={};function l(){}function d(){}function y(){}var m={};s(m,o,(function(){return this}));var g=Object.getPrototypeOf,w=g&&g(g(L([])));w&&w!==e&&r.call(w,o)&&(m=w);var $=y.prototype=l.prototype=Object.create(m);function b(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function i(n,o,a,u){var s=f(t[n],t,o);if("throw"!==s.type){var c=s.arg,h=c.value;return h&&"object"==(0,v.Z)(h)&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){i("next",t,a,u)}),(function(t){i("throw",t,a,u)})):e.resolve(h).then((function(t){c.value=t,a(c)}),(function(t){return i("throw",t,a,u)}))}u(s.arg)}var o;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){i(t,r,e,n)}))}return o=o?o.then(n,n):n()}})}function j(t,e,r){var n="suspendedStart";return function(i,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===i)throw o;return _()}for(r.method=i,r.arg=o;;){var a=r.delegate;if(a){var u=O(a,r);if(u){if(u===h)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=f(t,e,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===h)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}function O(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,O(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),h;var i=f(n,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,h;var o=i.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function M(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function D(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function L(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:_}}function _(){return{value:void 0,done:!0}}return d.prototype=y,n($,"constructor",{value:y,configurable:!0}),n(y,"constructor",{value:d,configurable:!0}),d.displayName=s(y,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,s(t,u,"GeneratorFunction")),t.prototype=Object.create($),t},t.awrap=function(t){return{__await:t}},b(x.prototype),s(x.prototype,a,(function(){return this})),t.AsyncIterator=x,t.async=function(e,r,n,i,o){void 0===o&&(o=Promise);var a=new x(c(e,r,n,i),o);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},b($),s($,u,"Generator"),s($,o,(function(){return this})),s($,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=L,D.prototype={constructor:D,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(M),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],a=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var u=r.call(o,"catchLoc"),s=r.call(o,"finallyLoc");if(u&&s){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(u){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),M(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var i=n.arg;M(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:L(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},t}var y=r(1413);function m(t,e,r,n,i,o,a){try{var u=t[o](a),s=u.value}catch(c){return void r(c)}u.done?e(s):Promise.resolve(s).then(n,i)}function g(t){return function(){var e=this,r=arguments;return new Promise((function(n,i){var o=t.apply(e,r);function a(t){m(o,n,i,a,u,"next",t)}function u(t){m(o,n,i,a,u,"throw",t)}a(void 0)}))}}var w=r(7892),$=r.n(w),b=[{label:"Last updated at",key:"pushed_at",link:"https://github.com/elijahqi/personal-website/commits",format:function(t){return $()(t).format("MMMM DD, YYYY")}}],x=function(){var t=(0,n.useState)(b),e=(0,f.Z)(t,2),r=e[0],i=e[1],o=(0,n.useCallback)(g(p().mark((function t(){var e,r;return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.github.com/repos/mldangelo/personal-site");case 2:return e=t.sent,t.next=5,e.json();case 5:r=t.sent,i(b.map((function(t){return(0,y.Z)((0,y.Z)({},t),{},{value:Object.keys(r).includes(t.key)?r[t.key]:t.value})})));case 7:case"end":return t.stop()}}),t)}))),[]);return(0,n.useEffect)((function(){o()}),[o]),(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{children:"Some stats about this site"}),(0,a.jsx)(c,{data:r})]})},j=function(){return(0,a.jsx)(o.Z,{title:"Stats",description:"Some statistics about Elijah Qi",children:(0,a.jsxs)("article",{className:"post",id:"stats",children:[(0,a.jsx)("header",{children:(0,a.jsx)("div",{className:"title",children:(0,a.jsx)("h2",{children:(0,a.jsx)(i.rU,{to:"/stats",children:"Stats"})})})}),(0,a.jsx)(d,{}),(0,a.jsx)(x,{})]})})}},7892:function(t){t.exports=function(){"use strict";var t=1e3,e=6e4,r=36e5,n="millisecond",i="second",o="minute",a="hour",u="day",s="week",c="month",f="quarter",h="year",l="date",d="Invalid Date",v=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,y={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],r=t%100;return"["+t+(e[(r-20)%10]||e[r]||e[0])+"]"}},m=function(t,e,r){var n=String(t);return!n||n.length>=e?t:""+Array(e+1-n.length).join(r)+t},g={s:m,z:function(t){var e=-t.utcOffset(),r=Math.abs(e),n=Math.floor(r/60),i=r%60;return(e<=0?"+":"-")+m(n,2,"0")+":"+m(i,2,"0")},m:function t(e,r){if(e.date()<r.date())return-t(r,e);var n=12*(r.year()-e.year())+(r.month()-e.month()),i=e.clone().add(n,c),o=r-i<0,a=e.clone().add(n+(o?-1:1),c);return+(-(n+(r-i)/(o?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:h,w:s,d:u,D:l,h:a,m:o,s:i,ms:n,Q:f}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},w="en",$={};$[w]=y;var b=function(t){return t instanceof S},x=function t(e,r,n){var i;if(!e)return w;if("string"==typeof e){var o=e.toLowerCase();$[o]&&(i=o),r&&($[o]=r,i=o);var a=e.split("-");if(!i&&a.length>1)return t(a[0])}else{var u=e.name;$[u]=e,i=u}return!n&&i&&(w=i),i||!n&&w},j=function(t,e){if(b(t))return t.clone();var r="object"==typeof e?e:{};return r.date=t,r.args=arguments,new S(r)},O=g;O.l=x,O.i=b,O.w=function(t,e){return j(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var S=function(){function y(t){this.$L=x(t.locale,null,!0),this.parse(t)}var m=y.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,r=t.utc;if(null===e)return new Date(NaN);if(O.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var n=e.match(v);if(n){var i=n[2]-1||0,o=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,o)):new Date(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,o)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return O},m.isValid=function(){return!(this.$d.toString()===d)},m.isSame=function(t,e){var r=j(t);return this.startOf(e)<=r&&r<=this.endOf(e)},m.isAfter=function(t,e){return j(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<j(t)},m.$g=function(t,e,r){return O.u(t)?this[e]:this.set(r,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var r=this,n=!!O.u(e)||e,f=O.p(t),d=function(t,e){var i=O.w(r.$u?Date.UTC(r.$y,e,t):new Date(r.$y,e,t),r);return n?i:i.endOf(u)},v=function(t,e){return O.w(r.toDate()[t].apply(r.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(e)),r)},p=this.$W,y=this.$M,m=this.$D,g="set"+(this.$u?"UTC":"");switch(f){case h:return n?d(1,0):d(31,11);case c:return n?d(1,y):d(0,y+1);case s:var w=this.$locale().weekStart||0,$=(p<w?p+7:p)-w;return d(n?m-$:m+(6-$),y);case u:case l:return v(g+"Hours",0);case a:return v(g+"Minutes",1);case o:return v(g+"Seconds",2);case i:return v(g+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var r,s=O.p(t),f="set"+(this.$u?"UTC":""),d=(r={},r[u]=f+"Date",r[l]=f+"Date",r[c]=f+"Month",r[h]=f+"FullYear",r[a]=f+"Hours",r[o]=f+"Minutes",r[i]=f+"Seconds",r[n]=f+"Milliseconds",r)[s],v=s===u?this.$D+(e-this.$W):e;if(s===c||s===h){var p=this.clone().set(l,1);p.$d[d](v),p.init(),this.$d=p.set(l,Math.min(this.$D,p.daysInMonth())).$d}else d&&this.$d[d](v);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[O.p(t)]()},m.add=function(n,f){var l,d=this;n=Number(n);var v=O.p(f),p=function(t){var e=j(d);return O.w(e.date(e.date()+Math.round(t*n)),d)};if(v===c)return this.set(c,this.$M+n);if(v===h)return this.set(h,this.$y+n);if(v===u)return p(1);if(v===s)return p(7);var y=(l={},l[o]=e,l[a]=r,l[i]=t,l)[v]||1,m=this.$d.getTime()+n*y;return O.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,r=this.$locale();if(!this.isValid())return r.invalidDate||d;var n=t||"YYYY-MM-DDTHH:mm:ssZ",i=O.z(this),o=this.$H,a=this.$m,u=this.$M,s=r.weekdays,c=r.months,f=function(t,r,i,o){return t&&(t[r]||t(e,n))||i[r].slice(0,o)},h=function(t){return O.s(o%12||12,t,"0")},l=r.meridiem||function(t,e,r){var n=t<12?"AM":"PM";return r?n.toLowerCase():n},v={YY:String(this.$y).slice(-2),YYYY:this.$y,M:u+1,MM:O.s(u+1,2,"0"),MMM:f(r.monthsShort,u,c,3),MMMM:f(c,u),D:this.$D,DD:O.s(this.$D,2,"0"),d:String(this.$W),dd:f(r.weekdaysMin,this.$W,s,2),ddd:f(r.weekdaysShort,this.$W,s,3),dddd:s[this.$W],H:String(o),HH:O.s(o,2,"0"),h:h(1),hh:h(2),a:l(o,a,!0),A:l(o,a,!1),m:String(a),mm:O.s(a,2,"0"),s:String(this.$s),ss:O.s(this.$s,2,"0"),SSS:O.s(this.$ms,3,"0"),Z:i};return n.replace(p,(function(t,e){return e||v[t]||i.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(n,l,d){var v,p=O.p(l),y=j(n),m=(y.utcOffset()-this.utcOffset())*e,g=this-y,w=O.m(this,y);return w=(v={},v[h]=w/12,v[c]=w,v[f]=w/3,v[s]=(g-m)/6048e5,v[u]=(g-m)/864e5,v[a]=g/r,v[o]=g/e,v[i]=g/t,v)[p]||g,d?w:O.a(w)},m.daysInMonth=function(){return this.endOf(c).$D},m.$locale=function(){return $[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var r=this.clone(),n=x(t,e,!0);return n&&(r.$L=n),r},m.clone=function(){return O.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},y}(),M=S.prototype;return j.prototype=M,[["$ms",n],["$s",i],["$m",o],["$H",a],["$W",u],["$M",c],["$y",h],["$D",l]].forEach((function(t){M[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),j.extend=function(t,e){return t.$i||(t(e,S,j),t.$i=!0),j},j.locale=x,j.isDayjs=b,j.unix=function(t){return j(1e3*t)},j.en=$[w],j.Ls=$,j.p={},j}()},4942:function(t,e,r){"use strict";r.d(e,{Z:function(){return i}});var n=r(9142);function i(t,e,r){return(e=(0,n.Z)(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}},1413:function(t,e,r){"use strict";r.d(e,{Z:function(){return o}});var n=r(4942);function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){(0,n.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}}}]);
//# sourceMappingURL=191.62e06d99.chunk.js.map