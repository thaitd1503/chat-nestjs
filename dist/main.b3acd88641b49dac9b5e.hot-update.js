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

/***/ "./src/modal/conversations/conversations.entity.ts":
/*!*********************************************************!*\
  !*** ./src/modal/conversations/conversations.entity.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Conversations = void 0;\nconst typeorm_1 = __webpack_require__(/*! typeorm */ \"typeorm\");\nconst modal_1 = __webpack_require__(/*! @/modal */ \"./src/modal/index.ts\");\nconst conversationUsers_entity_1 = __webpack_require__(/*! @/modal/conversation-users/conversationUsers.entity */ \"./src/modal/conversation-users/conversationUsers.entity.ts\");\nlet Conversations = class Conversations {\n};\nexports.Conversations = Conversations;\n__decorate([\n    (0, typeorm_1.PrimaryGeneratedColumn)(),\n    __metadata(\"design:type\", Number)\n], Conversations.prototype, \"conversation_id\", void 0);\n__decorate([\n    (0, typeorm_1.Column)({ nullable: true }),\n    __metadata(\"design:type\", Boolean)\n], Conversations.prototype, \"is_group\", void 0);\n__decorate([\n    (0, typeorm_1.Column)({ nullable: true }),\n    __metadata(\"design:type\", Number)\n], Conversations.prototype, \"group_id\", void 0);\n__decorate([\n    (0, typeorm_1.Column)(),\n    __metadata(\"design:type\", String)\n], Conversations.prototype, \"created_at\", void 0);\n__decorate([\n    (0, typeorm_1.Column)(),\n    __metadata(\"design:type\", String)\n], Conversations.prototype, \"updated_at\", void 0);\n__decorate([\n    (0, typeorm_1.ManyToOne)(() => modal_1.Groups, (groups) => groups.members),\n    (0, typeorm_1.JoinColumn)({ name: 'group_id' }),\n    __metadata(\"design:type\", modal_1.Groups)\n], Conversations.prototype, \"groups\", void 0);\n__decorate([\n    (0, typeorm_1.OneToMany)(() => conversationUsers_entity_1.ConversationUsers, (conversationUsers) => conversationUsers.conversations),\n    __metadata(\"design:type\", Array)\n], Conversations.prototype, \"conversationUsers\", void 0);\n__decorate([\n    (0, typeorm_1.OneToMany)(() => modal_1.Messages, (messages) => messages.conversations),\n    __metadata(\"design:type\", Array)\n], Conversations.prototype, \"messages\", void 0);\nexports.Conversations = Conversations = __decorate([\n    (0, typeorm_1.Entity)()\n], Conversations);\n\n\n//# sourceURL=webpack://nestjs-thaitd/./src/modal/conversations/conversations.entity.ts?");

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("b20e325f3ed84d32f957")
/******/ })();
/******/ 
/******/ }
;