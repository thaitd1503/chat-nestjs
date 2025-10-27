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

/***/ "./src/modal/conversation-users/conversationUsers.service.ts":
/*!*******************************************************************!*\
  !*** ./src/modal/conversation-users/conversationUsers.service.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nvar __param = (this && this.__param) || function (paramIndex, decorator) {\n    return function (target, key) { decorator(target, key, paramIndex); }\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.ConversationUsersService = void 0;\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ \"@nestjs/typeorm\");\nconst modal_1 = __webpack_require__(/*! @/modal */ \"./src/modal/index.ts\");\nconst typeorm_2 = __webpack_require__(/*! typeorm */ \"typeorm\");\nlet ConversationUsersService = class ConversationUsersService {\n    constructor(conversationUsersRepository) {\n        this.conversationUsersRepository = conversationUsersRepository;\n    }\n    async findAll() {\n        return this.conversationUsersRepository.find({ relations: ['user', 'conversations'] });\n    }\n    async findById(id) {\n        return this.conversationUsersRepository.findOne({\n            where: { conversation_user_id: id },\n            relations: ['user', 'conversations'],\n        });\n    }\n    async createConversationUser(conversationUser) {\n        const newConversationUser = this.conversationUsersRepository.create(conversationUser);\n        return this.conversationUsersRepository.save(newConversationUser);\n    }\n    async remove(id) {\n        await this.conversationUsersRepository.delete(id);\n    }\n    async updateConversationUser(id, conversationUserUpdate) {\n        await this.conversationUsersRepository.update(id, conversationUserUpdate);\n        return this.conversationUsersRepository.findOneBy({ conversation_user_id: id });\n    }\n    async findConversationByUserIds(userIds) {\n        return this.conversationUsersRepository\n            .createQueryBuilder('conversationUser')\n            .where('conversationUser.user_id IN (:...userIds)', { userIds })\n            .getMany();\n    }\n    async findUserOtherOfConversation(conversationId, userId) {\n        return this.conversationUsersRepository.findOne({\n            where: { conversation_id: conversationId, user_id: (0, typeorm_2.Not)(userId) },\n            relations: ['user'],\n        });\n    }\n    async getUsersInConversation(conversationId) {\n        return this.conversationUsersRepository.find({\n            where: { conversation_id: conversationId },\n            relations: ['user'],\n        });\n    }\n    async checkIfConversationExists(userIds) {\n        const conversationUsers = await this.conversationUsersRepository\n            .createQueryBuilder('conversationUser')\n            .where('conversationUser.user_id IN (:...userIds)', { userIds })\n            .getMany();\n        const conversationCounts = new Map();\n        conversationUsers.forEach((cu) => {\n            if (!conversationCounts.has(cu.conversation_id)) {\n                conversationCounts.set(cu.conversation_id, new Set());\n            }\n            const userSet = conversationCounts.get(cu.conversation_id);\n            if (userSet) {\n                userSet.add(cu.user_id);\n            }\n        });\n        for (const [conversationId, users] of conversationCounts) {\n            if (users.size === userIds.length && userIds.every((id) => users.has(id))) {\n                return conversationId;\n            }\n        }\n        return null;\n    }\n};\nexports.ConversationUsersService = ConversationUsersService;\nexports.ConversationUsersService = ConversationUsersService = __decorate([\n    (0, common_1.Injectable)(),\n    __param(0, (0, typeorm_1.InjectRepository)(modal_1.ConversationUsers)),\n    __metadata(\"design:paramtypes\", [typeorm_2.Repository])\n], ConversationUsersService);\n\n\n//# sourceURL=webpack://nestjs-thaitd/./src/modal/conversation-users/conversationUsers.service.ts?");

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("b2ef675a7074f6e66b18")
/******/ })();
/******/ 
/******/ }
;