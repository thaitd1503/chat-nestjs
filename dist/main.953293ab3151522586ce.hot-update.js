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

eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.AppModule = void 0;\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ \"@nestjs/typeorm\");\nconst user_controller_1 = __webpack_require__(/*! @/modal/user/user.controller */ \"./src/modal/user/user.controller.ts\");\nconst users_service_1 = __webpack_require__(/*! ./modal/user/users.service */ \"./src/modal/user/users.service.ts\");\nconst modal_1 = __webpack_require__(/*! @/modal */ \"./src/modal/index.ts\");\nconst dotenv = __webpack_require__(/*! dotenv */ \"dotenv\");\nconst role_controller_1 = __webpack_require__(/*! ./modal/role/role.controller */ \"./src/modal/role/role.controller.ts\");\nconst role_service_1 = __webpack_require__(/*! ./modal/role/role.service */ \"./src/modal/role/role.service.ts\");\nconst auth_controller_1 = __webpack_require__(/*! ./auth/auth.controller */ \"./src/auth/auth.controller.ts\");\nconst auth_service_1 = __webpack_require__(/*! ./auth/auth.service */ \"./src/auth/auth.service.ts\");\nconst jwt_1 = __webpack_require__(/*! @nestjs/jwt */ \"@nestjs/jwt\");\nconst token_entity_1 = __webpack_require__(/*! ./auth/token.entity */ \"./src/auth/token.entity.ts\");\nconst token_service_1 = __webpack_require__(/*! ./auth/token.service */ \"./src/auth/token.service.ts\");\nconst schedule_1 = __webpack_require__(/*! @nestjs/schedule */ \"@nestjs/schedule\");\nconst conversations_service_1 = __webpack_require__(/*! @/modal/conversations/conversations.service */ \"./src/modal/conversations/conversations.service.ts\");\nconst conversationUsers_service_1 = __webpack_require__(/*! @/modal/conversation-users/conversationUsers.service */ \"./src/modal/conversation-users/conversationUsers.service.ts\");\nconst group_chat_gateway_1 = __webpack_require__(/*! @/modal/websocket/group/group-chat.gateway */ \"./src/modal/websocket/group/group-chat.gateway.ts\");\nconst middleware_1 = __webpack_require__(/*! ../middleware */ \"./middleware.ts\");\nconst conversations_controller_1 = __webpack_require__(/*! @/modal/conversations/conversations.controller */ \"./src/modal/conversations/conversations.controller.ts\");\nconst conversationUser_controller_1 = __webpack_require__(/*! @/modal/conversation-users/conversationUser.controller */ \"./src/modal/conversation-users/conversationUser.controller.ts\");\nconst messages_controller_1 = __webpack_require__(/*! ./modal/messages/messages.controller */ \"./src/modal/messages/messages.controller.ts\");\nconst messages_service_1 = __webpack_require__(/*! ./modal/messages/messages.service */ \"./src/modal/messages/messages.service.ts\");\nconst serve_static_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '@nestjs/serve-static'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\nconst files_controller_1 = __webpack_require__(/*! ./modal/upload-files/files.controller */ \"./src/modal/upload-files/files.controller.ts\");\ndotenv.config();\nlet AppModule = class AppModule {\n    configure(consumer) {\n        consumer.apply(middleware_1.DomainMiddleware).forRoutes('*');\n    }\n};\nexports.AppModule = AppModule;\nexports.AppModule = AppModule = __decorate([\n    (0, common_1.Module)({\n        imports: [\n            typeorm_1.TypeOrmModule.forRoot({\n                type: 'mysql',\n                host: 'localhost',\n                port: 3306,\n                username: 'root',\n                password: '1234',\n                database: 'chat-db',\n                entities: [\n                    modal_1.User,\n                    modal_1.Role,\n                    modal_1.Groups,\n                    modal_1.GroupMembers,\n                    modal_1.Conversations,\n                    modal_1.ConversationUsers,\n                    modal_1.Messages,\n                    modal_1.MessageStatus,\n                    token_entity_1.BlacklistedToken,\n                ],\n                synchronize: true,\n                retryAttempts: 3,\n                retryDelay: 3000,\n            }),\n            schedule_1.ScheduleModule.forRoot(),\n            typeorm_1.TypeOrmModule.forFeature([\n                modal_1.User,\n                modal_1.Role,\n                modal_1.Groups,\n                modal_1.GroupMembers,\n                modal_1.Conversations,\n                modal_1.ConversationUsers,\n                modal_1.Messages,\n                modal_1.MessageStatus,\n                token_entity_1.BlacklistedToken,\n            ]),\n            jwt_1.JwtModule.register({\n                secret: process.env.secret_key,\n                signOptions: { expiresIn: '1h' },\n            }),\n            serve_static_1.ServeStaticModule.forRoot({\n                rootPath: join(__dirname, '..', 'public'),\n                serveRoot: '/uploads',\n            }),\n        ],\n        controllers: [\n            role_controller_1.RoleController,\n            auth_controller_1.AuthController,\n            user_controller_1.UserController,\n            conversations_controller_1.ConversationsController,\n            messages_controller_1.MessagesController,\n            conversationUser_controller_1.ConversationUserController,\n            files_controller_1.FilesController,\n        ],\n        providers: [\n            users_service_1.UsersService,\n            role_service_1.RoleService,\n            auth_service_1.AuthService,\n            conversations_service_1.ConversationsService,\n            conversationUsers_service_1.ConversationUsersService,\n            messages_service_1.MessagesService,\n            group_chat_gateway_1.GroupChatGateway,\n            token_service_1.BlacklistService,\n        ],\n    })\n], AppModule);\n\n\n//# sourceURL=webpack://nestjs-thaitd/./src/app.module.ts?");

/***/ }),

/***/ "./src/modal/upload-files/files.controller.ts":
/*!****************************************************!*\
  !*** ./src/modal/upload-files/files.controller.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nvar __param = (this && this.__param) || function (paramIndex, decorator) {\n    return function (target, key) { decorator(target, key, paramIndex); }\n};\nvar _a, _b;\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.FilesController = void 0;\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst platform_express_1 = __webpack_require__(/*! @nestjs/platform-express */ \"@nestjs/platform-express\");\nconst multer_1 = __webpack_require__(/*! multer */ \"multer\");\nconst path_1 = __webpack_require__(/*! path */ \"path\");\nlet FilesController = class FilesController {\n    uploadFile(file) {\n        if (!file) {\n            throw new common_1.BadRequestException('File is not provided');\n        }\n        const fileUrl = `http://localhost:3000/uploads/${file.filename}`;\n        return {\n            message: 'File uploaded successfully',\n            filename: file.filename,\n            url: fileUrl,\n        };\n    }\n};\nexports.FilesController = FilesController;\n__decorate([\n    (0, common_1.Post)('upload'),\n    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', {\n        storage: (0, multer_1.diskStorage)({\n            destination: './public/uploads',\n            filename: (req, file, cb) => {\n                const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);\n                const ext = (0, path_1.extname)(file.originalname);\n                const filename = `${file.fieldname}-${uniqueSuffix}${ext}`;\n                cb(null, filename);\n            },\n        }),\n        fileFilter: (req, file, cb) => {\n            if (!file.mimetype.match(/\\/(jpg|jpeg|png|gif|pdf)$/)) {\n                return cb(new common_1.BadRequestException('Only image and pdf files are allowed!'), false);\n            }\n            cb(null, true);\n        },\n        limits: { fileSize: 5 * 1024 * 1024 },\n    })),\n    __param(0, (0, common_1.UploadedFile)()),\n    __metadata(\"design:type\", Function),\n    __metadata(\"design:paramtypes\", [typeof (_b = typeof Express !== \"undefined\" && (_a = Express.Multer) !== void 0 && _a.File) === \"function\" ? _b : Object]),\n    __metadata(\"design:returntype\", void 0)\n], FilesController.prototype, \"uploadFile\", null);\nexports.FilesController = FilesController = __decorate([\n    (0, common_1.Controller)('files')\n], FilesController);\n\n\n//# sourceURL=webpack://nestjs-thaitd/./src/modal/upload-files/files.controller.ts?");

/***/ }),

/***/ "@nestjs/platform-express":
/*!*******************************************!*\
  !*** external "@nestjs/platform-express" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("@nestjs/platform-express");

/***/ }),

/***/ "multer":
/*!*************************!*\
  !*** external "multer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("multer");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("ff95c05931199ed42150")
/******/ })();
/******/ 
/******/ }
;