(() => { // webpackBootstrap
"use strict";
var __webpack_modules__ = ({
"./src/foo.cjs": (function (__unused_webpack_module, exports) {

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.foo = void 0;
Object.defineProperty(exports, "foo", ({
    enumerable: true,
    get: function() {
        return "foo";
    }
}));


}),

});
/************************************************************************/
// The module cache
var __webpack_module_cache__ = {};

// The require function
function __webpack_require__(moduleId) {

// Check if module is in cache
var cachedModule = __webpack_module_cache__[moduleId];
if (cachedModule !== undefined) {
return cachedModule.exports;
}
// Create a new module (and put it into the cache)
var module = (__webpack_module_cache__[moduleId] = {
exports: {}
});
// Execute the module function
__webpack_modules__[moduleId](module, module.exports, __webpack_require__);

// Return the exports of the module
return module.exports;

}

/************************************************************************/
// webpack/runtime/make_namespace_object
(() => {
// define __esModule on exports
__webpack_require__.r = function(exports) {
	if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
	}
	Object.defineProperty(exports, '__esModule', { value: true });
};

})();
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _foo_cjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./foo.cjs */ "./src/foo.cjs");

console.log(_foo_cjs__WEBPACK_IMPORTED_MODULE_0__);

})();

})()
;