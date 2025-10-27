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

/***/ "./src/modal/conversations/conversations.service.ts":
/*!**********************************************************!*\
  !*** ./src/modal/conversations/conversations.service.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nvar __param = (this && this.__param) || function (paramIndex, decorator) {\n    return function (target, key) { decorator(target, key, paramIndex); }\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.ConversationsService = void 0;\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ \"@nestjs/typeorm\");\nconst typeorm_2 = __webpack_require__(/*! typeorm */ \"typeorm\");\nconst modal_1 = __webpack_require__(/*! @/modal */ \"./src/modal/index.ts\");\nconst nestjs_typeorm_paginate_1 = __webpack_require__(/*! nestjs-typeorm-paginate */ \"nestjs-typeorm-paginate\");\nlet ConversationsService = class ConversationsService {\n    constructor(conversationRepository) {\n        this.conversationRepository = conversationRepository;\n    }\n    async findAll() {\n        return this.conversationRepository.find();\n    }\n    async getListConversations(options) {\n        const queryBuilder = this.conversationRepository\n            .createQueryBuilder('conversations')\n            .leftJoinAndSelect('conversations.messages', 'messages', `messages.created_at = (\r\n        SELECT MAX(m2.created_at)\r\n        FROM messages m2\r\n        WHERE m2.conversation_id = conversations.conversation_id\r\n      )`)\n            .leftJoinAndSelect('conversations.conversationUsers', 'conversationUsers')\n            .leftJoinAndSelect('conversationUsers.user', 'user', `user.user_id = conversationUsers.user_id`)\n            .orderBy('messages.created_at', 'DESC');\n        return (0, nestjs_typeorm_paginate_1.paginate)(queryBuilder, options);\n    }\n    async findById(id) {\n        return this.conversationRepository.findOne({ where: { conversation_id: id } });\n    }\n    async createConversation(conversation) {\n        const newConversation = this.conversationRepository.create({\n            ...conversation,\n            created_at: new Date().toISOString(),\n            updated_at: new Date().toISOString(),\n        });\n        return this.conversationRepository.save(newConversation);\n    }\n    async remove(id) {\n        await this.conversationRepository.delete(id);\n    }\n    async updateConversation(id, conversationUpdate) {\n        await this.conversationRepository.update(id, conversationUpdate);\n        return this.conversationRepository.findOneBy({ conversation_id: id });\n    }\n};\nexports.ConversationsService = ConversationsService;\nexports.ConversationsService = ConversationsService = __decorate([\n    (0, common_1.Injectable)(),\n    __param(0, (0, typeorm_1.InjectRepository)(modal_1.Conversations)),\n    __metadata(\"design:paramtypes\", [typeorm_2.Repository])\n], ConversationsService);\n\n\n//# sourceURL=webpack://nestjs-thaitd/./src/modal/conversations/conversations.service.ts?");

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("9f272586ca374d726b4e")
/******/ })();
/******/ 
/******/ }
;