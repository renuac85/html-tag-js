!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.tag=t():e.tag=t()}(window,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function r(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function o(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e instanceof Node;if(!n&&"string"!=typeof e)throw new Error("{tag} is invalid value of tag");var r=n?e:document.createElement(e);for(var i in r.on=b.bind(r),r.off=g.bind(r),r.append=m.bind(r),r.get=h.bind(r),r.getAll=j.bind(r),t)if(void 0!==t[i])if("child"===i){var u=t[i];r instanceof Node&&r.append(u)}else if("children"==i&&Array.isArray(t[i])){var a=t[i],f=!0,c=!1,l=void 0;try{for(var d,p=a[Symbol.iterator]();!(f=(d=p.next()).done);f=!0){var s=d.value;r.append(s)}}catch(e){c=!0,l=e}finally{try{f||null==p.return||p.return()}finally{if(c)throw l}}}else if("attr"==i)for(var y in t[i])r.setAttribute(y,t[i][y]);else if("Object"===t[i].constructor.name)for(var v in t[i])r[i][v]=t[i][v];else r[i]=t[i];return r;function b(e,t,n){this.addEventListener(e,t,n)}function g(e,t,n){this.removeEventListener(e,t,n)}function m(){for(var e=this,t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];return n.map((function(t){t instanceof Node&&(e.appendChild(o(t)),t.id&&!r[t.id]&&(r[t.id]=t))})),this}function h(e){return this.querySelector(e)}function j(e){return this.querySelectorAll(e)}}n.r(t),n.d(t,"tag",(function(){return o})),o.get=function(e){var t=document.querySelector(e);return t?o(t):null},o.getAll=function(e){var t=r(document.querySelectorAll(e));return t.map((function(e){o(e)})),t},o.parse=function(e){var t=o("div");return t.innerHTML=e,1===t.childElementCount?o(t.firstElementChild):r(t.children)},o.template=function(e,t){if(t)for(var n in t)/^[a-z_][a-z0-9_\-]*$/.test(n)&&(e=e.replace(new RegExp("{{".concat(n,"}}"),"g"),t[n]));return e=e.replace(/{{[a-z_][a-z0-9_\-]*}}/g,"")}}]).tag}));