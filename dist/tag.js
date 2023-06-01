!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.tag=t():e.tag=t()}(this,(function(){return function(){"use strict";var e={d:function(t,n){for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}},t={};function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function r(e){return function(e){if(Array.isArray(e))return n(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function i(e,t){t instanceof Node||(t=c.text("".concat(t))),t instanceof Text&&"clone"in t&&(t=t.clone()),e.append(t)}function c(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return"string"==typeof t&&(t={innerHTML:t}),function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("function"==typeof e)return e(n,arguments.length>2&&void 0!==arguments[2]?arguments[2]:[]);if(e instanceof Node)t=e;else{if("string"!=typeof e)throw new Error("Invalid tag, ",o(e));t=document.createElement(e)}return Object.keys(n).forEach((function(e){var r=n[e];if(void 0!==r)switch(e){case"child":i(t,r);break;case"children":if(!Array.isArray(r))throw new Error("children must be an array of Nodes");r.flat().forEach((function(e){i(t,e)}));break;case"attr":Object.keys(r).forEach((function(e){var n=r[e];void 0!==n&&t.setAttribute(e,n)}));break;case"style":case"dataset":Object.keys(r).forEach((function(n){var o=r[n];void 0!==o&&(t[e][n]=o)}));break;case"ref":r.instanceOfRef&&(r.el=t);break;default:t[e]=r}})),t}(e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:[])}return e.d(t,{default:function(){return c}}),Object.defineProperties(c,{get:{value:function(e){return document.querySelector(e)}},getAll:{value:function(e){return r(document.querySelectorAll(e))}},parse:{value:function(e){var t=document.createElement("div");return t.innerHTML=e,1===t.childElementCount?t.firstElementChild:r(t.children)}},text:{value:function(e){return document.createTextNode(e)}},use:{value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=e,n=!1,r=document.createTextNode(e),o=[r];return Object.defineProperty(r,"value",{set:function(e){t=e,o.forEach((function(t){t.textContent=e}))},get:function(){return t}}),Object.defineProperty(r,"clone",{value:function(){if(!n)return n=!0,r;var e=r.cloneNode();return o.push(e),e}}),r}}}),t.default}()}));