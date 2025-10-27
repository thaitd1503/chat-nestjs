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

/***/ "./middleware.ts":
/*!***********************!*\
  !*** ./middleware.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.AuthenticatedSocketIoAdapter = void 0;\nconst platform_socket_io_1 = __webpack_require__(/*! @nestjs/platform-socket.io */ \"@nestjs/platform-socket.io\");\nconst jwt = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\nclass AuthenticatedSocketIoAdapter extends platform_socket_io_1.IoAdapter {\n    createIOServer(port, options) {\n        const server = super.createIOServer(port, options);\n        server.of('/group-chat').use((socket, next) => {\n            const token = socket.handshake.auth?.token || socket.handshake.headers?.authorization?.split(' ')[1];\n            if (!token) {\n                return next(new Error('Unauthorized'));\n            }\n            try {\n                const payload = jwt.verify(token, process.env.JWT_SECRET);\n                socket.user = payload;\n                next();\n            }\n            catch {\n                next(new Error('Unauthorized'));\n            }\n        });\n        return server;\n    }\n}\nexports.AuthenticatedSocketIoAdapter = AuthenticatedSocketIoAdapter;\n\n\n//# sourceURL=webpack://nestjs-thaitd/./middleware.ts?");

/***/ }),

/***/ "@nestjs/platform-socket.io":
/*!*********************************************!*\
  !*** external "@nestjs/platform-socket.io" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("@nestjs/platform-socket.io");

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("02d6c104576e4eaa0e65")
/******/ })();
/******/ 
/******/ }
;