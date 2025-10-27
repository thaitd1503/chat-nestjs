'use strict';
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = 'main';
exports.ids = null;
exports.modules = {
  /***/ './src/modal/user/user.entity.ts':
    /*!***************************************!*\
  !*** ./src/modal/user/user.entity.ts ***!
  \***************************************/
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      eval(
        '\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);\n};\nObject.defineProperty(exports, "__esModule", ({ value: true }));\nexports.User = void 0;\nconst typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");\nconst role_entity_1 = __webpack_require__(/*! @/modal/role/role.entity */ "./src/modal/role/role.entity.ts");\nconst modal_1 = __webpack_require__(/*! @/modal */ "./src/modal/index.ts");\nconst conversationUsers_entity_1 = __webpack_require__(/*! @/modal/conversation-users/conversationUsers.entity */ "./src/modal/conversation-users/conversationUsers.entity.ts");\nconst messageStatus_entity_1 = __webpack_require__(/*! @/modal/message-status/messageStatus.entity */ "./src/modal/message-status/messageStatus.entity.ts");\nlet User = class User {\n};\nexports.User = User;\n__decorate([\n    (0, typeorm_1.PrimaryGeneratedColumn)(),\n    __metadata("design:type", Number)\n], User.prototype, "user_id", void 0);\n__decorate([\n    (0, typeorm_1.Column)(),\n    __metadata("design:type", String)\n], User.prototype, "username", void 0);\n__decorate([\n    (0, typeorm_1.Column)(),\n    __metadata("design:type", String)\n], User.prototype, "email", void 0);\n__decorate([\n    (0, typeorm_1.Column)(),\n    __metadata("design:type", String)\n], User.prototype, "password_hash", void 0);\n__decorate([\n    (0, typeorm_1.Column)(),\n    __metadata("design:type", String)\n], User.prototype, "avatar_url", void 0);\n__decorate([\n    (0, typeorm_1.Column)(),\n    __metadata("design:type", String)\n], User.prototype, "otp_secret", void 0);\n__decorate([\n    (0, typeorm_1.Column)(),\n    __metadata("design:type", String)\n], User.prototype, "created_at", void 0);\n__decorate([\n    (0, typeorm_1.Column)(),\n    __metadata("design:type", String)\n], User.prototype, "updated_at", void 0);\n__decorate([\n    (0, typeorm_1.ManyToOne)(() => role_entity_1.Role, (role) => role.users),\n    (0, typeorm_1.JoinColumn)({ name: \'role_id\' }),\n    __metadata("design:type", role_entity_1.Role)\n], User.prototype, "role", void 0);\n__decorate([\n    (0, typeorm_1.OneToMany)(() => modal_1.GroupMembers, (groupMembers) => groupMembers.user),\n    __metadata("design:type", Array)\n], User.prototype, "groupMembers", void 0);\n__decorate([\n    (0, typeorm_1.OneToMany)(() => conversationUsers_entity_1.ConversationUsers, (conversationUser) => conversationUser.user),\n    __metadata("design:type", Array)\n], User.prototype, "conversationUser", void 0);\n__decorate([\n    (0, typeorm_1.OneToMany)(() => messageStatus_entity_1.MessageStatus, (messStatus) => messStatus.user),\n    __metadata("design:type", Array)\n], User.prototype, "messageStatus", void 0);\n__decorate([\n    (0, typeorm_1.OneToMany)(() => modal_1.Messages, (mess) => mess.users),\n    __metadata("design:type", Array)\n], User.prototype, "messages", void 0);\nexports.User = User = __decorate([\n    (0, typeorm_1.Entity)()\n], User);\n\n\n//# sourceURL=webpack://nestjs-thaitd/./src/modal/user/user.entity.ts?',
      );

      /***/
    },
};
exports.runtime = /******/ function (__webpack_require__) {
  // webpackRuntimeModules
  /******/ /* webpack/runtime/getFullHash */
  /******/ (() => {
    /******/ __webpack_require__.h = () => 'd0f410e540224ea94443';
    /******/
  })();
  /******/
  /******/
};
