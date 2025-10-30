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

/***/ "./src/mail/mail.service.ts":
/*!**********************************!*\
  !*** ./src/mail/mail.service.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.MailService = void 0;\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst mailer_1 = __webpack_require__(/*! @nestjs-modules/mailer */ \"@nestjs-modules/mailer\");\nlet MailService = class MailService {\n    constructor(mailerService) {\n        this.mailerService = mailerService;\n    }\n    async sendWelcomeTemplate(to, name, otp) {\n        const confirmUrl = `https://tranduythai.id.vn/verify?email=${to}&otp=${otp}`;\n        await this.mailerService.sendMail({\n            to,\n            subject: 'Chào mừng bạn đến với hệ thống của Chat Nhanh 🎉',\n            template: './welcome',\n            context: {\n                name,\n                confirmUrl,\n            },\n        });\n    }\n};\nexports.MailService = MailService;\nexports.MailService = MailService = __decorate([\n    (0, common_1.Injectable)(),\n    __metadata(\"design:paramtypes\", [mailer_1.MailerService])\n], MailService);\n\n\n//# sourceURL=webpack://nestjs-thaitd/./src/mail/mail.service.ts?");

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("0dddd537f6582dbbee08")
/******/ })();
/******/ 
/******/ }
;