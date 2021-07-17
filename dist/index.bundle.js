(()=>{"use strict";var e={426:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(645),o=r.n(n)()((function(e){return e[1]}));o.push([e.id,"ul {\r\n  list-style-type: none;\r\n}\r\n\r\n.hover {\r\n  background-color: gray;\r\n  opacity: 0.6;\r\n}\r\n\r\n.hover2 {\r\n  background-color: blue;\r\n  opacity: 0.6;\r\n}\r\n\r\n.completed {\r\n  text-decoration: black line-through;\r\n}\r\n\r\n.clearBtn:hover {\r\n  text-decoration: underline;\r\n  cursor: pointer;\r\n}\r\n\r\n.no-border {\r\n  border: 0;\r\n  box-shadow: none;\r\n}\r\n\r\n.no-border:focus {\r\n  outline: none;\r\n}\r\n\r\n.bi-trash {\r\n  cursor: pointer;\r\n}\r\n\r\n.draggableicon {\r\n  cursor: move;\r\n}\r\n\r\n.bi-arrow-return-left:hover {\r\n  cursor: pointer;\r\n}\r\n",""]);const i=o},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r=e(t);return t[2]?"@media ".concat(t[2]," {").concat(r,"}"):r})).join("")},t.i=function(e,r,n){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(n)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);n&&o[s[0]]||(r&&(s[2]?s[2]="".concat(r," and ").concat(s[2]):s[2]=r),t.push(s))}},t}},379:e=>{var t=[];function r(e){for(var r=-1,n=0;n<t.length;n++)if(t[n].identifier===e){r=n;break}return r}function n(e,n){for(var i={},a=[],c=0;c<e.length;c++){var s=e[c],d=n.base?s[0]+n.base:s[0],l=i[d]||0,u="".concat(d," ").concat(l);i[d]=l+1;var p=r(u),v={css:s[1],media:s[2],sourceMap:s[3]};-1!==p?(t[p].references++,t[p].updater(v)):t.push({identifier:u,updater:o(v,n),references:1}),a.push(u)}return a}function o(e,t){var r=t.domAPI(t);return r.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r.update(e=t)}else r.remove()}}e.exports=function(e,o){var i=n(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=r(i[a]);t[c].references--}for(var s=n(e,o),d=0;d<i.length;d++){var l=r(i[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}i=s}}},569:e=>{var t={};e.exports=function(e,r){var n=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t),t}},565:(e,t,r)=>{e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var n=r.css,o=r.media,i=r.sourceMap;o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(n,e)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={id:n,exports:{}};return e[n](i,i.exports,r),i.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=r(379),t=r.n(e),n=r(795),o=r.n(n),i=r(569),a=r.n(i),c=r(565),s=r.n(c),d=r(216),l=r.n(d),u=r(589),p=r.n(u),v=r(426),f={};f.styleTagTransform=p(),f.setAttributes=s(),f.insert=a().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=l(),t()(v.Z,f),v.Z&&v.Z.locals&&v.Z.locals;const h=[];class m{constructor(e,t=!1,r=h.length){this.description=e,this.completed=t,this.id=r}}const b=()=>{const e=document.querySelector("#taskUl");let t=-1;e.innerHTML="",h.forEach((r=>{t+=1;const n=document.createElement("li");!0===r.completed?n.innerHTML=`\n      <div>\n      <input class="checkbox m-2" type="checkbox" id="${t}" checked=true>\n      <label class="completed" id="${t}">${r.description}</label>\n      </div>\n      <i class="fs-5 bi bi-three-dots-vertical draggableicon"></i>\n      `:n.innerHTML=`\n      <div>\n      <input class="checkbox m-2" type="checkbox" id="${t}">\n      <label id="${t}">${r.description}</label>\n      </div>\n      <i class="fs-5 bi bi-three-dots-vertical draggableicon"></i>\n      `,n.classList.add("list-group-item","draggable","droppable","d-flex","justify-content-between","align-items-center"),n.setAttribute("draggable","true"),e.appendChild(n)})),(()=>{const e=document.querySelectorAll(".draggable");let t=null,r=null;e.forEach((e=>{e.addEventListener("dragstart",(()=>{e.classList.add("hover"),t=e.children[0].children[0].id})),e.addEventListener("dragend",(()=>{e.classList.remove("hover")})),e.addEventListener("dragenter",(r=>{t!==r.target&&e.classList.add("hover2")})),e.addEventListener("dragleave",(()=>{e.classList.remove("hover2")})),e.addEventListener("dragover",(e=>{e.preventDefault()})),e.addEventListener("drop",(()=>{e.classList.remove("hover2"),r=e.children[0].children[0].id,t!==r&&e.classList.contains("droppable")&&((e,t,r)=>{const n=e[r].description;e[r].description=e[t].description,e[t].description=n;const o=e[r].completed;e[r].completed=e[t].completed,e[t].completed=o,b(),g()})(h,t,r)}))}))})(),document.querySelectorAll(".checkbox").forEach((e=>{e.addEventListener("change",(()=>{const t=e.id;e.checked?(h[t].completed=!0,e.nextSibling.nextSibling.classList.add("completed"),g()):(h[t].completed=!1,e.nextSibling.nextSibling.classList.remove("completed"),g())}))})),(()=>{const e=document.querySelectorAll("label[id]"),t=document.createElement("i");t.classList.add("bi","bi-trash","fs-5");const r=document.createElement("input");r.classList.add("no-border"),r.setAttribute("type","text"),e.forEach((e=>{e.addEventListener("click",(n=>{r.setAttribute("id",`${n.target.id}`),r.value=`${n.target.innerText}`,n.target.parentNode.append(r),r.focus(),t.setAttribute("id",`${n.target.id}`),n.target.parentNode.nextSibling.parentNode.append(t),t.addEventListener("click",(()=>{h.splice(e.id,1),g(),b()})),n.target.parentNode.nextSibling.nextSibling.remove(),r.addEventListener("keypress",(t=>{"Enter"===t.key&&(h[e.id].description=r.value,g(),b())})),n.target.remove()}))}))})()},g=()=>{localStorage.setItem("taskListKey",JSON.stringify(h))};localStorage.getItem("taskListKey")&&(JSON.parse(localStorage.getItem("taskListKey")).forEach((e=>{h.push(e)})),b()),(()=>{const e=document.querySelector("#inputTask");e.addEventListener("keypress",(t=>{if("Enter"===t.key){const t=new m(e.value);h.push(t),b(),g(),e.value=""}})),document.querySelector(".bi-arrow-return-left").addEventListener("click",(t=>{const r=new m(e.value);h.push(r),b(),g(),e.value=""}))})(),document.querySelector("#clear").addEventListener("click",(()=>{const e=h.filter((e=>!1===e.completed));h.splice(0),h.push(...e),g(),b()}))})()})();