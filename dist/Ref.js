!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Ref=e():t.Ref=e()}(this,(function(){return function(){"use strict";var t={d:function(e,s){for(var i in s)t.o(s,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:s[i]})},o:function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}},e={};t.d(e,{default:function(){return Ref}});class Ref{#t;#e;#s;#i;#n;#l;#h;#r=new ClassList;#a={};#u={};#c=[];#o={};append(...t){this.#t?this.#t.append(...t):this.#c.push(...t)}attr(t,e){return t||e?this.#t?(e&&this.#t.setAttribute(t,e),this.#t.getAttribute(t)):e?void(this.#o[t]=e):this.#o[t]:null}get(t){return this.#t?.get(t)}getAll(t){return this.#t?.getAll(t)}get el(){return this.#t}set el(t){this.#t=t,this.#e&&(this.value=this.#e,this.#e=null),this.#s&&(this.innerHTML=this.#s,this.#s=null),this.#i&&(this.textContent=this.#i,this.#i=null),this.#n&&(this.innerText=this.#n,this.#n=null),this.#l&&(this.id=this.#l,this.#l=null),this.#h&&(this.className=this.#h,this.#h=null),this.#r.length&&(this.#r.forEach((t=>this.classList.add(t))),this.#r.length=0),this.#c.length&&(this.append(...this.#c),this.#c.length=0);const e=Object.keys(this.#o);e.length&&(e.forEach((t=>this.attr(t,this.#o[t]))),this.#o={});const s=Object.keys(this.#a);s.length&&(s.forEach((t=>this.style[t]=this.#a[t])),this.#a={});const i=Object.keys(this.#u);i.length&&(i.forEach((t=>this.dataset[t]=this.#u[t])),this.#u={})}get textContent(){return this.#t?.textContent??this.#i}set textContent(t){this.#t?this.#t.textContent=t:this.#i=t}get innerText(){return this.#t?.innerText??this.#n}set innerText(t){this.#t?this.#t.innerText=t:this.#n=t}get innerHTML(){return this.#t?.innerHTML??this.#s}set innerHTML(t){this.#t?this.#t.innerHTML=t:this.#s=t}get value(){return this.#t?.value??this.#e}set value(t){this.#t?this.#t.value=t:this.#e=t}get classList(){return this.#t?.classList??this.#r}get id(){return this.#t?.id??this.#l}set id(t){this.#t?this.#t.id=t:this.#l=t}get className(){return this.#t?.className??this.#h}set className(t){this.#t?this.#t.className=t:this.#h=t}get style(){return this.#t?.style??(t=this.#a,Object.defineProperties(t,{item:{value(t){Object.keys(this)[t]}},removeProperty:{value(t){delete this[t]}},setProperty:{value(t,e){this[t]=e}}}),t);var t}get dataset(){return this.#t?.dataset??this.#u}}class ClassList{#d=[];get length(){return this.#d.length}set length(t){this.#d.length=t}add(...t){this.#d.push(...t)}remove(...t){this.#d=this.#d.filter((e=>!t.includes(e)))}contains(t){return this.#d.includes(t)}toggle(t){this.contains(t)?this.remove(t):this.add(t)}replace(t,e){this.remove(t),this.add(e)}entries(){return this.#d.entries()}forEach(t){return this.#d.forEach(t)}keys(){return this.#d.keys()}values(){return this.#d.values()}}return e=e.default}()}));