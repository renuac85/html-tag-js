!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.polyfill=t():e.polyfill=t()}(this,(function(){return function(){"use strict";var e={};function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function r(e){return function(e){if(Array.isArray(e))return t(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,r){if(e){if("string"==typeof e)return t(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?t(e,r):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}return Element.prototype,CharacterData.prototype,DocumentType.prototype,"flat"in Array.prototype||Object.defineProperty(Array.prototype,"flat",{value:function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:1/0)>0?this.reduce((function(e,t){return e.concat(t.flat())}),[]):this.slice()}}),"isConnected"in Node.prototype||Object.defineProperty(Node.prototype,"isConnected",{get:function(){return!(this.ownerDocument&&this.ownerDocument.compareDocumentPosition(this)&this.DOCUMENT_POSITION_DISCONNECTED)}}),"get"in HTMLElement.prototype||Object.defineProperty(HTMLElement.prototype,"get",{value:function(e){return this.querySelector(e)}}),"getAll"in HTMLElement.prototype||Object.defineProperty(HTMLElement.prototype,"getAll",{value:function(e){return this.querySelectorAll(e)}}),"content"in HTMLElement.prototype||Object.defineProperty(HTMLElement.prototype,"content",{set:function(e){this.innerHTML="",Array.isArray(e)?this.append.apply(this,r(e)):this.append(e)},get:function(){var e=r(this.children);return 0===e.length?null:1===e.length?e[0]:e}}),[Element.prototype,CharacterData.prototype,DocumentType.prototype].forEach((function(e){e.hasOwnProperty("remove")||Object.defineProperty(e,"remove",{configurable:!0,enumerable:!0,writable:!0,value:function(){null!==this.parentNode&&this.parentNode.removeChild(this)}}),e.hasOwnProperty("append")||Object.defineProperty(e,"append",{configurable:!0,enumerable:!0,writable:!0,value:function(){var e=Array.prototype.slice.call(arguments),t=document.createDocumentFragment();e.forEach((function(e){var r=e instanceof Node;t.appendChild(r?e:document.createTextNode(String(e)))})),this.appendChild(t)}})})),e.default}()}));