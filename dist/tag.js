!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.tag=t():e.tag=t()}(self,(function(){return function(){"use strict";var e={d:function(t,r){for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}},t={};function r(e){return function(e){if(Array.isArray(e))return n(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function i(e){var t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];if("function"!=typeof e){if(e instanceof Node)t=e;else{if("string"!=typeof e)throw new Error("Invalid tag, ",o(e));t=document.createElement(e)}return Object.keys(r).forEach((function(e){var n=r[e];if(void 0!==n)switch(e){case"child":if(!(n instanceof Node))throw new Error("child must be a Node");t.appendChild(n);break;case"children":if(!Array.isArray(n))throw new Error("children must be an array of Nodes");n.flat().forEach((function(e){e instanceof Node||(e=c.text("".concat(e))),t.append(e)}));break;case"attr":Object.keys(n).forEach((function(e){t.setAttribute(e,n[e])}));break;case"style":case"dataset":Object.keys(n).forEach((function(r){t[e][r]=n[r]}));break;default:t[e]=n}})),t}e(r,n)}function c(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return"string"==typeof t&&(t={innerHTML:t}),i(e,t)}return e.d(t,{tag:function(){return c}}),Object.defineProperties(c,{get:{value:function(e){return document.querySelector(e)}},getAll:{value:function(e){return r(document.querySelectorAll(e))}},parse:{value:function(e){var t=document.createElement("div");return t.innerHTML=e,1===t.childElementCount?t.firstElementChild:r(t.children)}},text:{value:function(e){return document.createTextNode(e)}}}),t.tag}()}));