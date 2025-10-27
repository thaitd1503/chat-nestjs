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
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.AuthenticatedSocketIoAdapter = exports.DomainMiddleware = void 0;\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nlet DomainMiddleware = class DomainMiddleware {\n    use(req, res, next) {\n        const allowedDomains = [\n            'localhost:9999',\n            'tranduythai.id.vn',\n            'api.thaitd.io.vn',\n            'api.tranduythai.id.vn',\n            'http://103.38.237.87/',\n            '103.38.237.87',\n        ];\n        const host = req.headers.host;\n        if (allowedDomains.includes(host)) {\n            next();\n        }\n        else {\n            res.status(403).send('Forbidden: Invalid Domain');\n        }\n    }\n};\nexports.DomainMiddleware = DomainMiddleware;\nexports.DomainMiddleware = DomainMiddleware = __decorate([\n    (0, common_1.Injectable)()\n], DomainMiddleware);\nconst platform_socket_io_1 = __webpack_require__(/*! @nestjs/platform-socket.io */ \"@nestjs/platform-socket.io\");\nconst jwt = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\nclass AuthenticatedSocketIoAdapter extends platform_socket_io_1.IoAdapter {\n    constructor(app) {\n        super(app);\n        this.app = app;\n    }\n    createIOServer(port, options) {\n        const server = super.createIOServer(port, options);\n        server.of('/group-chat').use((socket, next) => {\n            try {\n                const token = socket.handshake.auth?.token || socket.handshake.headers?.authorization?.split(' ')[1];\n                if (!token) {\n                    return next(new Error('Unauthorized'));\n                }\n                const payload = jwt.verify(token, process.env.secret_key);\n                socket.user = payload;\n                next();\n            }\n            catch (err) {\n                console.log('Socket auth error:', err.message);\n                next(new Error('Unauthorized'));\n            }\n        });\n        return server;\n    }\n}\nexports.AuthenticatedSocketIoAdapter = AuthenticatedSocketIoAdapter;\n\n\n//# sourceURL=webpack://nestjs-thaitd/./middleware.ts?");

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("223b1862f181723097cf")
/******/ })();
/******/ 
/******/ }
;