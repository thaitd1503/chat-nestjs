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

/***/ "./src/auth/auth.guard.ts":
/*!********************************!*\
  !*** ./src/auth/auth.guard.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.AuthGuard = void 0;\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst jwt_1 = __webpack_require__(/*! @nestjs/jwt */ \"@nestjs/jwt\");\nconst constants_1 = __webpack_require__(/*! @/auth/constants */ \"./src/auth/constants.ts\");\nconst core_1 = __webpack_require__(/*! @nestjs/core */ \"@nestjs/core\");\nconst custom_exception_1 = __webpack_require__(/*! @/common/custom.exception */ \"./src/common/custom.exception.ts\");\nconst token_service_1 = __webpack_require__(/*! @/auth/token.service */ \"./src/auth/token.service.ts\");\nlet AuthGuard = class AuthGuard {\n    constructor(jwtService, reflector, blacklistService) {\n        this.jwtService = jwtService;\n        this.reflector = reflector;\n        this.blacklistService = blacklistService;\n    }\n    async canActivate(context) {\n        const request = context.switchToHttp().getRequest();\n        const token = this.extractTokenFromHeader(request);\n        if (!token) {\n            throw new common_1.UnauthorizedException();\n        }\n        if (token) {\n            const jwtToken = await this.jwtService\n                .verifyAsync(token, {\n                secret: process.env.JWT_SECRET,\n            })\n                .catch((error) => {\n                if (error === 'jwt expired')\n                    return;\n            });\n        }\n        const payload = await this.jwtService.verifyAsync(token, {\n            secret: constants_1.jwtConstants.secret,\n        });\n        const roles = this.reflector.get('role', context.getHandler());\n        const isBlacklisted = await this.blacklistService.isBlacklisted(token);\n        if (isBlacklisted) {\n            throw new custom_exception_1.ReturnException('Token has been blacklisted', 401);\n        }\n        if (roles && !roles.includes(payload.roleId)) {\n            throw new custom_exception_1.ReturnException('You do not have permission to access', 403);\n        }\n        request['user'] = payload;\n        return true;\n    }\n    extractTokenFromHeader(request) {\n        const [type, token] = request.headers.authorization?.split(' ') ?? [];\n        return type === 'Bearer' ? token : undefined;\n    }\n};\nexports.AuthGuard = AuthGuard;\nexports.AuthGuard = AuthGuard = __decorate([\n    (0, common_1.Injectable)(),\n    __metadata(\"design:paramtypes\", [jwt_1.JwtService,\n        core_1.Reflector,\n        token_service_1.BlacklistService])\n], AuthGuard);\n\n\n//# sourceURL=webpack://nestjs-thaitd/./src/auth/auth.guard.ts?");

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("316c4d3fc21bcd045176")
/******/ })();
/******/ 
/******/ }
;