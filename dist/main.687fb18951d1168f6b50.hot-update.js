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

/***/ "./src/auth/auth.service.ts":
/*!**********************************!*\
  !*** ./src/auth/auth.service.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.AuthService = void 0;\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst users_service_1 = __webpack_require__(/*! @/modal/user/users.service */ \"./src/modal/user/users.service.ts\");\nconst jwt_1 = __webpack_require__(/*! @nestjs/jwt */ \"@nestjs/jwt\");\nconst custom_exception_1 = __webpack_require__(/*! @/common/custom.exception */ \"./src/common/custom.exception.ts\");\nconst bcrypt = __webpack_require__(/*! bcrypt */ \"bcrypt\");\nconst mail_service_1 = __webpack_require__(/*! @/mail/mail.service */ \"./src/mail/mail.service.ts\");\nlet AuthService = class AuthService {\n    constructor(usersService, jwtService, mailService) {\n        this.usersService = usersService;\n        this.jwtService = jwtService;\n        this.mailService = mailService;\n    }\n    async LogIn(login) {\n        const user = await this.usersService.findOne(login.email);\n        if (!user) {\n            throw new custom_exception_1.ReturnException('Tài khoản chưa tồn tại', 403);\n        }\n        const isMatch = await bcrypt.compare(login.password, user.password_hash);\n        if (!isMatch) {\n            throw new custom_exception_1.ReturnException('Tài khoản hoặc mật khẩu sai', 403);\n        }\n        if (user.status === 'pending') {\n            const otpDate = new Date(user.time_otp);\n            if (isNaN(otpDate.getTime()) || Date.now() - otpDate.getTime() > 2 * 60 * 1000) {\n                const newOtp = Math.floor(1000000000 + Math.random() * 9000000000).toString();\n                user.otp_secret = newOtp;\n                user.time_otp = new Date().toISOString();\n                await this.usersService.updateUser(user.user_id, user);\n                await this.mailService.sendWelcomeTemplate(user.email, user.username, newOtp);\n            }\n            throw new custom_exception_1.ReturnException('Vui lòng xác thực tài khoản qua email đã đăng ký!', 403);\n        }\n        const payload = {\n            user_id: user.user_id,\n            email: user.email,\n        };\n        return {\n            access_token: await this.jwtService.signAsync(payload),\n            user_id: user.user_id,\n        };\n    }\n    async VerifyOtp(email, otp) {\n        try {\n            const user = await this.usersService.findOne(email);\n            if (!user) {\n                throw new custom_exception_1.ReturnException('Tài khoản chưa tồn tại', 403);\n            }\n            if (user.otp_secret !== otp) {\n                throw new custom_exception_1.ReturnException('Mã OTP không tồn tại', 403);\n            }\n        }\n        catch (error) {\n            throw new custom_exception_1.ReturnException('Invalid token', 401);\n        }\n    }\n};\nexports.AuthService = AuthService;\nexports.AuthService = AuthService = __decorate([\n    (0, common_1.Injectable)(),\n    __metadata(\"design:paramtypes\", [users_service_1.UsersService,\n        jwt_1.JwtService,\n        mail_service_1.MailService])\n], AuthService);\n\n\n//# sourceURL=webpack://nestjs-thaitd/./src/auth/auth.service.ts?");

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("b80ff0e35b4c87425063")
/******/ })();
/******/ 
/******/ }
;