function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},r={},a=t.parcelRequire3143;null==a&&((a=function(e){if(e in o)return o[e].exports;if(e in r){var t=r[e];delete r[e];var a={id:e,exports:{}};return o[e]=a,t.call(a.exports,a,a.exports),a.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){r[e]=t},t.parcelRequire3143=a);var n=a("7IoHk"),l=a("g1uI7");a("f0PEG");const s=document.querySelector(".header--library__buttons");s.addEventListener("click",t=>{t.target.classList.contains("watched-btn-modal--color")&&(e(n).Notify.success("już pokazuję Watched..."),localStorage.setItem("typeOfAPI","watched"),(0,l.getStartMovies)()),t.target.classList.contains("queue-btn-modal--color")&&(e(n).Notify.success("już pokazuję Queue..."),localStorage.setItem("typeOfAPI","queue"),(0,l.getStartMovies)())});
//# sourceMappingURL=library.3c15593d.js.map