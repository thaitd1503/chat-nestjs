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

/***/ "./src/modal/websocket/group/group-chat.gateway.ts":
/*!*********************************************************!*\
  !*** ./src/modal/websocket/group/group-chat.gateway.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nvar __param = (this && this.__param) || function (paramIndex, decorator) {\n    return function (target, key) { decorator(target, key, paramIndex); }\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.GroupChatGateway = void 0;\nconst websockets_1 = __webpack_require__(/*! @nestjs/websockets */ \"@nestjs/websockets\");\nconst conversations_service_1 = __webpack_require__(/*! @/modal/conversations/conversations.service */ \"./src/modal/conversations/conversations.service.ts\");\nconst socket_io_1 = __webpack_require__(/*! socket.io */ \"socket.io\");\nconst conversationUsers_service_1 = __webpack_require__(/*! @/modal/conversation-users/conversationUsers.service */ \"./src/modal/conversation-users/conversationUsers.service.ts\");\nlet GroupChatGateway = class GroupChatGateway {\n    constructor(conversationService, conversationUserService) {\n        this.conversationService = conversationService;\n        this.conversationUserService = conversationUserService;\n    }\n    async handleCreateGroup(data) {\n        console.log(data);\n        this.server.emit('group:new_message', {\n            hehe: 'haha',\n        });\n    }\n};\nexports.GroupChatGateway = GroupChatGateway;\n__decorate([\n    (0, websockets_1.WebSocketServer)(),\n    __metadata(\"design:type\", socket_io_1.Server)\n], GroupChatGateway.prototype, \"server\", void 0);\n__decorate([\n    (0, websockets_1.SubscribeMessage)('group:create'),\n    __param(0, (0, websockets_1.MessageBody)()),\n    __metadata(\"design:type\", Function),\n    __metadata(\"design:paramtypes\", [Object]),\n    __metadata(\"design:returntype\", Promise)\n], GroupChatGateway.prototype, \"handleCreateGroup\", null);\nexports.GroupChatGateway = GroupChatGateway = __decorate([\n    (0, websockets_1.WebSocketGateway)({ cors: true, namespace: '/group-chat' }),\n    __metadata(\"design:paramtypes\", [conversations_service_1.ConversationsService,\n        conversationUsers_service_1.ConversationUsersService])\n], GroupChatGateway);\n\n\n//# sourceURL=webpack://nestjs-thaitd/./src/modal/websocket/group/group-chat.gateway.ts?");

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("37e0e4ac11148fdb30bc")
/******/ })();
/******/ 
/******/ }
;