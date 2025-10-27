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

/***/ "./src/app.module.ts":
/*!***************************!*\
  !*** ./src/app.module.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.AppModule = void 0;\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ \"@nestjs/typeorm\");\nconst user_controller_1 = __webpack_require__(/*! @/modal/user/user.controller */ \"./src/modal/user/user.controller.ts\");\nconst users_service_1 = __webpack_require__(/*! ./modal/user/users.service */ \"./src/modal/user/users.service.ts\");\nconst modal_1 = __webpack_require__(/*! @/modal */ \"./src/modal/index.ts\");\nconst dotenv = __webpack_require__(/*! dotenv */ \"dotenv\");\nconst role_controller_1 = __webpack_require__(/*! ./modal/role/role.controller */ \"./src/modal/role/role.controller.ts\");\nconst role_service_1 = __webpack_require__(/*! ./modal/role/role.service */ \"./src/modal/role/role.service.ts\");\nconst auth_controller_1 = __webpack_require__(/*! ./auth/auth.controller */ \"./src/auth/auth.controller.ts\");\nconst auth_service_1 = __webpack_require__(/*! ./auth/auth.service */ \"./src/auth/auth.service.ts\");\nconst jwt_1 = __webpack_require__(/*! @nestjs/jwt */ \"@nestjs/jwt\");\nconst token_entity_1 = __webpack_require__(/*! ./auth/token.entity */ \"./src/auth/token.entity.ts\");\nconst token_service_1 = __webpack_require__(/*! ./auth/token.service */ \"./src/auth/token.service.ts\");\nconst schedule_1 = __webpack_require__(/*! @nestjs/schedule */ \"@nestjs/schedule\");\nconst conversations_service_1 = __webpack_require__(/*! @/modal/conversations/conversations.service */ \"./src/modal/conversations/conversations.service.ts\");\nconst conversationUsers_service_1 = __webpack_require__(/*! @/modal/conversation-users/conversationUsers.service */ \"./src/modal/conversation-users/conversationUsers.service.ts\");\nconst group_chat_gateway_1 = __webpack_require__(/*! @/modal/websocket/group/group-chat.gateway */ \"./src/modal/websocket/group/group-chat.gateway.ts\");\ndotenv.config();\nlet AppModule = class AppModule {\n};\nexports.AppModule = AppModule;\nexports.AppModule = AppModule = __decorate([\n    (0, common_1.Module)({\n        imports: [\n            typeorm_1.TypeOrmModule.forRoot({\n                type: 'mysql',\n                host: 'localhost',\n                port: 3306,\n                username: 'root',\n                password: '1234',\n                database: 'chat-db',\n                entities: [\n                    modal_1.User,\n                    modal_1.Role,\n                    modal_1.Groups,\n                    modal_1.GroupMembers,\n                    modal_1.Conversations,\n                    modal_1.ConversationUsers,\n                    modal_1.Messages,\n                    modal_1.MessageStatus,\n                    token_entity_1.BlacklistedToken,\n                ],\n                synchronize: true,\n                retryAttempts: 3,\n                retryDelay: 3000,\n            }),\n            schedule_1.ScheduleModule.forRoot(),\n            typeorm_1.TypeOrmModule.forFeature([\n                modal_1.User,\n                modal_1.Role,\n                modal_1.Groups,\n                modal_1.GroupMembers,\n                modal_1.Conversations,\n                modal_1.ConversationUsers,\n                modal_1.Messages,\n                modal_1.MessageStatus,\n                token_entity_1.BlacklistedToken,\n            ]),\n            jwt_1.JwtModule.register({\n                secret: process.env.secret_key,\n                signOptions: { expiresIn: '1h' },\n            }),\n        ],\n        controllers: [role_controller_1.RoleController, auth_controller_1.AuthController, user_controller_1.UserController],\n        providers: [\n            users_service_1.UsersService,\n            role_service_1.RoleService,\n            auth_service_1.AuthService,\n            conversations_service_1.ConversationsService,\n            conversationUsers_service_1.ConversationUsersService,\n            group_chat_gateway_1.GroupChatGateway,\n            token_service_1.BlacklistService,\n        ],\n    })\n], AppModule);\n\n\n//# sourceURL=webpack://nestjs-thaitd/./src/app.module.ts?");

/***/ }),

/***/ "./src/modal/websocket/group/group-chat.gateway.ts":
/*!*********************************************************!*\
  !*** ./src/modal/websocket/group/group-chat.gateway.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nvar __param = (this && this.__param) || function (paramIndex, decorator) {\n    return function (target, key) { decorator(target, key, paramIndex); }\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.GroupChatGateway = void 0;\nconst websockets_1 = __webpack_require__(/*! @nestjs/websockets */ \"@nestjs/websockets\");\nconst conversations_service_1 = __webpack_require__(/*! @/modal/conversations/conversations.service */ \"./src/modal/conversations/conversations.service.ts\");\nconst socket_io_1 = __webpack_require__(/*! socket.io */ \"socket.io\");\nconst conversationUsers_service_1 = __webpack_require__(/*! @/modal/conversation-users/conversationUsers.service */ \"./src/modal/conversation-users/conversationUsers.service.ts\");\nlet GroupChatGateway = class GroupChatGateway {\n    constructor(conversationService, conversationUserService) {\n        this.conversationService = conversationService;\n        this.conversationUserService = conversationUserService;\n    }\n    async handleCreateGroup(data) {\n        await this.conversationService.createConversation(data);\n        await this.conversationUserService.createConversationUser(data);\n    }\n};\nexports.GroupChatGateway = GroupChatGateway;\n__decorate([\n    (0, websockets_1.WebSocketServer)(),\n    __metadata(\"design:type\", socket_io_1.Server)\n], GroupChatGateway.prototype, \"server\", void 0);\n__decorate([\n    (0, websockets_1.SubscribeMessage)('group:create'),\n    __param(0, (0, websockets_1.MessageBody)()),\n    __metadata(\"design:type\", Function),\n    __metadata(\"design:paramtypes\", [Object]),\n    __metadata(\"design:returntype\", Promise)\n], GroupChatGateway.prototype, \"handleCreateGroup\", null);\nexports.GroupChatGateway = GroupChatGateway = __decorate([\n    (0, websockets_1.WebSocketGateway)(9999, { cors: true, namespace: '/group-chat' }),\n    __metadata(\"design:paramtypes\", [conversations_service_1.ConversationsService,\n        conversationUsers_service_1.ConversationUsersService])\n], GroupChatGateway);\n\n\n//# sourceURL=webpack://nestjs-thaitd/./src/modal/websocket/group/group-chat.gateway.ts?");

/***/ }),

/***/ "@nestjs/websockets":
/*!*************************************!*\
  !*** external "@nestjs/websockets" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("@nestjs/websockets");

/***/ }),

/***/ "socket.io":
/*!****************************!*\
  !*** external "socket.io" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("socket.io");

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("0d403e36908e15e993d7")
/******/ })();
/******/ 
/******/ }
;