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

/***/ "./src/modal/messages/messages.service.ts":
/*!************************************************!*\
  !*** ./src/modal/messages/messages.service.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.MessagesService = void 0;\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ \"@nestjs/typeorm\");\nconst typeorm_2 = __webpack_require__(/*! typeorm */ \"typeorm\");\nconst modal_1 = __webpack_require__(/*! @/modal */ \"./src/modal/index.ts\");\nlet MessagesService = class MessagesService {\n    constructor() { }\n    async createMessage(payload) {\n        const body = {\n            ...payload,\n            created_at: new Date().toISOString(),\n            updated_at: new Date().toISOString(),\n        };\n        const message = this.messagesRepository.create(body);\n        return this.messagesRepository.save(message);\n    }\n    async findMessagesByConversation(conversationId) {\n        return this.messagesRepository.find({ where: { conversation_id: conversationId } });\n    }\n};\nexports.MessagesService = MessagesService;\n__decorate([\n    (0, typeorm_1.InjectRepository)(modal_1.Messages),\n    __metadata(\"design:type\", typeorm_2.Repository)\n], MessagesService.prototype, \"messagesRepository\", void 0);\nexports.MessagesService = MessagesService = __decorate([\n    (0, common_1.Injectable)(),\n    __metadata(\"design:paramtypes\", [])\n], MessagesService);\n\n\n//# sourceURL=webpack://nestjs-thaitd/./src/modal/messages/messages.service.ts?");

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("73c8fbdb0a7cdbb3e3d2")
/******/ })();
/******/ 
/******/ }
;