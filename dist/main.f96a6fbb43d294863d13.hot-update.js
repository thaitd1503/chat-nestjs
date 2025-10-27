"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "main";
exports.ids = null;
exports.modules = {

/***/ "./src/utils/decode.util.ts":
/*!**********************************!*\
  !*** ./src/utils/decode.util.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.decodeToken = decodeToken;\nfunction decodeToken(request, jwtService) {\n    const authHeader = request.headers['authorization'];\n    if (!authHeader) {\n        throw new Error('Authorization header missing');\n    }\n    const token = authHeader.replace('Bearer ', '');\n    return jwtService.decode(token);\n}\n\n\n//# sourceURL=webpack://nestjs-thaitd/./src/utils/decode.util.ts?");

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("08b27525c282c0bd5984")
/******/ })();
/******/ 
/******/ }
;