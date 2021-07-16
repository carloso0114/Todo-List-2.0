(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(645),o=n.n(r)()((function(e){return e[1]}));o.push([e.id,"ul {\r\n  list-style-type: none;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: black;\r\n}\r\n\r\n.draggable {\r\n  cursor: move;\r\n}\r\n\r\n.hover {\r\n  background-color: gray;\r\n  opacity: 0.6;\r\n}\r\n\r\n.hover2 {\r\n  background-color: blue;\r\n  opacity: 0.6;\r\n}\r\n\r\n.completed {\r\n  text-decoration: black line-through;\r\n}\r\n",""]);const a=o},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);r&&o[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),t.push(s))}},t}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],d=r.base?s[0]+r.base:s[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=n(u),f={css:s[1],media:s[2],sourceMap:s[3]};-1!==p?(t[p].references++,t[p].updater(f)):t.push({identifier:u,updater:o(f,r),references:1}),i.push(u)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=n(a[i]);t[c].references--}for(var s=r(e,o),d=0;d<a.length;d++){var l=n(a[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=s}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r=n.css,o=n.media,a=n.sourceMap;o?e.setAttribute("media",o):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=n(379),t=n.n(e),r=n(795),o=n.n(r),a=n(569),i=n.n(a),c=n(565),s=n.n(c),d=n(216),l=n.n(d),u=n(589),p=n.n(u),f=n(426),v={};v.styleTagTransform=p(),v.setAttributes=s(),v.insert=i().bind(null,"head"),v.domAPI=o(),v.insertStyleElement=l(),t()(f.Z,v),f.Z&&f.Z.locals&&f.Z.locals;const h=[];class m{constructor(e,t=!1,n=h.length){this.description=e,this.completed=t,this.index=n}}const b=()=>{const e=document.querySelector("#taskUl");e.innerHTML="",h.forEach((t=>{const n=document.createElement("li");!0===t.completed?n.innerHTML=`\n      <div>\n      <input class="checkbox m-2" type="checkbox" id="${t.index}" checked>\n      <label for="${t.index}">${t.description}</label>\n      </div>\n      <i class="fs-5 bi bi-three-dots-vertical"></i>\n      `:n.innerHTML=`\n      <div>\n      <input class="checkbox m-2" type="checkbox" id="${t.index}">\n      <label for="${t.index}">${t.description}</label>\n      </div>\n      <i class="fs-5 bi bi-three-dots-vertical"></i>\n      `,n.classList.add("list-group-item","draggable","droppable","d-flex","justify-content-between","align-items-center"),n.setAttribute("draggable","true"),e.appendChild(n)})),(()=>{const e=document.querySelectorAll(".draggable");let t=null,n=null;e.forEach((e=>{e.addEventListener("dragstart",(()=>{e.classList.add("hover"),t=e.children[0].children[0].id})),e.addEventListener("dragend",(()=>{e.classList.remove("hover")})),e.addEventListener("dragenter",(n=>{t!==n.target&&e.classList.add("hover2")})),e.addEventListener("dragleave",(()=>{e.classList.remove("hover2")})),e.addEventListener("dragover",(e=>{e.preventDefault()})),e.addEventListener("drop",(()=>{e.classList.remove("hover2"),n=e.children[0].children[0].id,t!==n&&e.classList.contains("droppable")&&((e,t,n)=>{const r=e[n].description;e[n].description=e[t].description,e[t].description=r;const o=e[n].completed;e[n].completed=e[t].completed,e[t].completed=o,b(),g()})(h,t,n)}))}))})(),document.querySelectorAll(".checkbox").forEach((e=>{e.addEventListener("change",(()=>{const t=e.id;e.checked?(h[t].completed=!0,e.nextSibling.nextSibling.classList.add("completed"),g()):(h[t].completed=!1,g())}))}))},g=()=>{localStorage.setItem("taskListKey",JSON.stringify(h))};localStorage.getItem("taskListKey")&&(JSON.parse(localStorage.getItem("taskListKey")).forEach((e=>{h.push(e)})),b()),(()=>{const e=document.querySelector("#inputTask");e.addEventListener("keypress",(t=>{if("Enter"===t.key){const t=new m(e.value);h.push(t),b(),g(),e.value=""}}))})()})()})();