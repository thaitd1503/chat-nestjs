'use strict';
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = 'main';
exports.ids = null;
exports.modules = {
  /***/ './src/auth/auth.controller.ts':
    /*!*************************************!*\
  !*** ./src/auth/auth.controller.ts ***!
  \*************************************/
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      eval(
        '\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);\n};\nvar __param = (this && this.__param) || function (paramIndex, decorator) {\n    return function (target, key) { decorator(target, key, paramIndex); }\n};\nObject.defineProperty(exports, "__esModule", ({ value: true }));\nexports.AuthController = void 0;\nconst common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");\nconst auth_service_1 = __webpack_require__(/*! @/auth/auth.service */ "./src/auth/auth.service.ts");\nconst swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");\nconst token_service_1 = __webpack_require__(/*! @/auth/token.service */ "./src/auth/token.service.ts");\nconst auth_guard_1 = __webpack_require__(/*! ./auth.guard */ "./src/auth/auth.guard.ts");\nconst custom_exception_1 = __webpack_require__(/*! @/common/custom.exception */ "./src/common/custom.exception.ts");\nconst auth_dto_1 = __webpack_require__(/*! @/auth/roles-auth/auth.dto */ "./src/auth/roles-auth/auth.dto.ts");\nlet AuthController = class AuthController {\n    constructor(authService, blacklistService) {\n        this.authService = authService;\n        this.blacklistService = blacklistService;\n    }\n    signIn(signInDto) {\n        return this.authService.signIn(signInDto.username, signInDto.password);\n    }\n    async logout(req) {\n        const token = \'123\';\n        if (!token) {\n            return { message: \'No token provided\' };\n        }\n        try {\n            await this.blacklistService.blacklistToken(token);\n            return { message: \'Logged out successfully\' };\n        }\n        catch (error) {\n            throw new custom_exception_1.ReturnException(\'Error logging out\', 500);\n        }\n    }\n};\nexports.AuthController = AuthController;\n__decorate([\n    (0, common_1.HttpCode)(common_1.HttpStatus.OK),\n    (0, common_1.Post)(\'login\'),\n    (0, swagger_1.ApiBody)({\n        type: auth_dto_1.LoginDto,\n    }),\n    __param(0, (0, common_1.Body)()),\n    __metadata("design:type", Function),\n    __metadata("design:paramtypes", [Object]),\n    __metadata("design:returntype", void 0)\n], AuthController.prototype, "signIn", null);\n__decorate([\n    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),\n    (0, swagger_1.ApiBearerAuth)(),\n    (0, common_1.Post)(\'logout\'),\n    __param(0, (0, common_1.Req)()),\n    __metadata("design:type", Function),\n    __metadata("design:paramtypes", [Object]),\n    __metadata("design:returntype", Promise)\n], AuthController.prototype, "logout", null);\nexports.AuthController = AuthController = __decorate([\n    (0, common_1.Controller)(\'Auth\'),\n    (0, swagger_1.ApiTags)(\'Auth\'),\n    __metadata("design:paramtypes", [auth_service_1.AuthService,\n        token_service_1.BlacklistService])\n], AuthController);\n\n\n//# sourceURL=webpack://nestjs-thaitd/./src/auth/auth.controller.ts?',
      );

      /***/
    },

  /***/ './src/auth/roles-auth/auth.dto.ts':
    /*!*****************************************!*\
  !*** ./src/auth/roles-auth/auth.dto.ts ***!
  \*****************************************/
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      eval(
        '\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);\n};\nObject.defineProperty(exports, "__esModule", ({ value: true }));\nexports.LoginDto = void 0;\nconst swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");\nclass LoginDto {\n}\nexports.LoginDto = LoginDto;\n__decorate([\n    (0, swagger_1.ApiProperty)({ default: \'\' }),\n    __metadata("design:type", String)\n], LoginDto.prototype, "username", void 0);\n__decorate([\n    (0, swagger_1.ApiProperty)({ default: \'\' }),\n    __metadata("design:type", String)\n], LoginDto.prototype, "password", void 0);\n\n\n//# sourceURL=webpack://nestjs-thaitd/./src/auth/roles-auth/auth.dto.ts?',
      );

      /***/
    },
};
exports.runtime = /******/ function (__webpack_require__) {
  // webpackRuntimeModules
  /******/ /* webpack/runtime/getFullHash */
  /******/ (() => {
    /******/ __webpack_require__.h = () => 'a17bdfc888fe46384b20';
    /******/
  })();
  /******/
  /******/
};
