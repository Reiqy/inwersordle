/*! For license information please see main.js.LICENSE.txt */
(()=>{var e={12:(e,t,r)=>{"use strict";var n=r(866);e.exports=function(e){if(!Array.isArray(e))throw new TypeError("even expects an array.");return e.filter(n)}},738:e=>{function t(e){return!!e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}e.exports=function(e){return null!=e&&(t(e)||function(e){return"function"==typeof e.readFloatLE&&"function"==typeof e.slice&&t(e.slice(0,0))}(e)||!!e._isBuffer)}},866:(e,t,r)=>{"use strict";var n=r(724);e.exports=function(e){return!n(e)}},924:(e,t,r)=>{"use strict";var n=r(401);e.exports=function(e){var t=n(e);if("string"===t){if(!e.trim())return!1}else if("number"!==t)return!1;return e-e+1>=0}},724:(e,t,r)=>{"use strict";var n=r(924);e.exports=function(e){if(!n(e))throw new TypeError("is-odd expects a number.");if(Number(e)!==Math.floor(e))throw new RangeError("is-odd expects an integer.");return!!(1&~~e)}},401:(e,t,r)=>{var n=r(738),l=Object.prototype.toString;e.exports=function(e){if(void 0===e)return"undefined";if(null===e)return"null";if(!0===e||!1===e||e instanceof Boolean)return"boolean";if("string"==typeof e||e instanceof String)return"string";if("number"==typeof e||e instanceof Number)return"number";if("function"==typeof e||e instanceof Function)return"function";if(void 0!==Array.isArray&&Array.isArray(e))return"array";if(e instanceof RegExp)return"regexp";if(e instanceof Date)return"date";var t=l.call(e);return"[object RegExp]"===t?"regexp":"[object Date]"===t?"date":"[object Arguments]"===t?"arguments":"[object Error]"===t?"error":n(e)?"buffer":"[object Set]"===t?"set":"[object WeakSet]"===t?"weakset":"[object Map]"===t?"map":"[object WeakMap]"===t?"weakmap":"[object Symbol]"===t?"symbol":"[object Int8Array]"===t?"int8array":"[object Uint8Array]"===t?"uint8array":"[object Uint8ClampedArray]"===t?"uint8clampedarray":"[object Int16Array]"===t?"int16array":"[object Uint16Array]"===t?"uint16array":"[object Int32Array]"===t?"int32array":"[object Uint32Array]"===t?"uint32array":"[object Float32Array]"===t?"float32array":"[object Float64Array]"===t?"float64array":"object"}}},t={};function r(n){var l=t[n];if(void 0!==l)return l.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,r),i.exports}(()=>{"use strict";var e=r(12);class t{constructor(){this.currentlySelected=$(".row.first .cell.first")[0]}selectPreviousCell(e=!1){let t=this.currentlySelected.previousElementSibling;e&&null==t&&(t=this.currentlySelected.parentElement.previousElementSibling.lastElementChild),this.selectCell(t)}selectNextCell(t=!1){let r=this.currentlySelected.nextElementSibling;t&&null==r&&(r=this.currentlySelected.parentElement.nextElementSibling.firstElementChild),console.log(e([1,"2",3,"4",5,6,7,8,9,10])),this.selectCell(r)}selectAdjacentRow(e=!1){var t,r;let n,l=this.currentlySelected.parentElement.querySelectorAll("div"),i=0;for(;i<l.length&&l[i]!=this.currentlySelected;i++);n=e?null===(t=this.currentlySelected.parentElement.previousElementSibling)||void 0===t?void 0:t.querySelectorAll("div")[i]:null===(r=this.currentlySelected.parentElement.nextElementSibling)||void 0===r?void 0:r.querySelectorAll("div")[i],this.selectCell(n)}selectCell(e){if(null==e)return;if(e.classList.contains("submitted"))return;let t=document.getElementsByClassName("cell");for(let e of t)e.classList.remove("selected");e.classList.add("selected"),this.currentlySelected=e}addNavigationListener(e){switch(e.key){case"ArrowLeft":this.selectPreviousCell();break;case"ArrowRight":this.selectNextCell();break;case"ArrowUp":this.selectAdjacentRow(!0);break;case"ArrowDown":this.selectAdjacentRow()}}}$((function(){let e=new t,r=$(".row.first .cell.first")[0];e.selectCell(r),$(".cell").on("click",(function(t){e.selectCell(t.target)})),document.addEventListener("keydown",(function(t){e.addNavigationListener(t),class{static addTextListener(e,t){switch(e.key){case"Backspace":case"Delete":t.currentlySelected.innerHTML=""}/^[a-zA-Z]$/.test(e.key)&&(t.currentlySelected.innerHTML=e.key,t.selectNextCell(!0))}}.addTextListener(t,e)}))}))})()})();