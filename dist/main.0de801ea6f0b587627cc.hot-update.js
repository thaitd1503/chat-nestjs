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

/***/ "./src/modal/messages/messages.entity.ts":
/*!***********************************************!*\
  !*** ./src/modal/messages/messages.entity.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Messages = void 0;\nconst typeorm_1 = __webpack_require__(/*! typeorm */ \"typeorm\");\nconst user_entity_1 = __webpack_require__(/*! @/modal/user/user.entity */ \"./src/modal/user/user.entity.ts\");\nconst modal_1 = __webpack_require__(/*! @/modal */ \"./src/modal/index.ts\");\nconst messageStatus_entity_1 = __webpack_require__(/*! @/modal/message-status/messageStatus.entity */ \"./src/modal/message-status/messageStatus.entity.ts\");\nlet Messages = class Messages {\n};\nexports.Messages = Messages;\n__decorate([\n    (0, typeorm_1.PrimaryGeneratedColumn)(),\n    __metadata(\"design:type\", Number)\n], Messages.prototype, \"message_id\", void 0);\n__decorate([\n    (0, typeorm_1.Column)(),\n    __metadata(\"design:type\", Number)\n], Messages.prototype, \"conversation_id\", void 0);\n__decorate([\n    (0, typeorm_1.Column)(),\n    __metadata(\"design:type\", Number)\n], Messages.prototype, \"sender_id\", void 0);\n__decorate([\n    (0, typeorm_1.Column)({ nullable: true }),\n    __metadata(\"design:type\", String)\n], Messages.prototype, \"message_text\", void 0);\n__decorate([\n    (0, typeorm_1.Column)(),\n    __metadata(\"design:type\", String)\n], Messages.prototype, \"message_type\", void 0);\n__decorate([\n    (0, typeorm_1.Column)(),\n    __metadata(\"design:type\", String)\n], Messages.prototype, \"created_at\", void 0);\n__decorate([\n    (0, typeorm_1.Column)(),\n    __metadata(\"design:type\", String)\n], Messages.prototype, \"updated_at\", void 0);\n__decorate([\n    (0, typeorm_1.ManyToOne)(() => modal_1.Conversations, (conversations) => conversations.conversationUsers),\n    (0, typeorm_1.JoinColumn)({ name: 'conversation_id' }),\n    __metadata(\"design:type\", modal_1.Conversations)\n], Messages.prototype, \"conversations\", void 0);\n__decorate([\n    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.messages),\n    (0, typeorm_1.JoinColumn)({ name: 'sender_id' }),\n    __metadata(\"design:type\", user_entity_1.User)\n], Messages.prototype, \"users\", void 0);\n__decorate([\n    (0, typeorm_1.OneToMany)(() => messageStatus_entity_1.MessageStatus, (messStatus) => messStatus.messages),\n    __metadata(\"design:type\", Array)\n], Messages.prototype, \"messageStatus\", void 0);\nexports.Messages = Messages = __decorate([\n    (0, typeorm_1.Entity)()\n], Messages);\n\n\n//# sourceURL=webpack://nestjs-thaitd/./src/modal/messages/messages.entity.ts?");

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("2d0bbf86d9ac13dc7757")
/******/ })();
/******/ 
/******/ }
;