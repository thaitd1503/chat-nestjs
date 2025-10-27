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

/***/ "./src/modal/user/users.service.ts":
/*!*****************************************!*\
  !*** ./src/modal/user/users.service.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nvar __param = (this && this.__param) || function (paramIndex, decorator) {\n    return function (target, key) { decorator(target, key, paramIndex); }\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.UsersService = void 0;\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ \"@nestjs/typeorm\");\nconst typeorm_2 = __webpack_require__(/*! typeorm */ \"typeorm\");\nconst modal_1 = __webpack_require__(/*! @/modal */ \"./src/modal/index.ts\");\nconst bcrypt = __webpack_require__(/*! bcrypt */ \"bcrypt\");\nconst nestjs_typeorm_paginate_1 = __webpack_require__(/*! nestjs-typeorm-paginate */ \"nestjs-typeorm-paginate\");\nlet UsersService = class UsersService {\n    constructor(usersRepository) {\n        this.usersRepository = usersRepository;\n    }\n    async findAll(options, userName, userId) {\n        const queryBuilder = this.usersRepository\n            .createQueryBuilder('user')\n            .leftJoinAndSelect('user.role', 'role')\n            .where('user.user_id != :userId', { userId });\n        if (userName) {\n            queryBuilder.where('user.username LIKE :userName', { userName: `%${userName}%` });\n        }\n        return (0, nestjs_typeorm_paginate_1.paginate)(queryBuilder, options);\n    }\n    async findOne(email) {\n        return this.usersRepository.findOne({\n            where: { email },\n            relations: ['role'],\n        });\n    }\n    async findById(id) {\n        return this.usersRepository.findOne({ where: { user_id: id } });\n    }\n    async getUserbyIds(userIds) {\n        return this.usersRepository\n            .createQueryBuilder('user')\n            .where('user.user_id IN (:...userIds)', { userIds })\n            .getMany();\n    }\n    async createUser(user) {\n        const hashedPassword = await bcrypt.hash(user.password, 10);\n        const userPayload = this.usersRepository.create({\n            ...user,\n            password_hash: hashedPassword,\n            role_id: 2,\n            created_at: new Date().toISOString(),\n            updated_at: new Date().toISOString(),\n        });\n        return this.usersRepository.save(userPayload);\n    }\n    async remove(id) {\n        await this.usersRepository.delete(id);\n    }\n    async updateUser(id, userUpdate) {\n        await this.usersRepository.update(id, userUpdate);\n        return this.usersRepository.findOneBy({ user_id: id });\n    }\n};\nexports.UsersService = UsersService;\nexports.UsersService = UsersService = __decorate([\n    (0, common_1.Injectable)(),\n    __param(0, (0, typeorm_1.InjectRepository)(modal_1.User)),\n    __metadata(\"design:paramtypes\", [typeorm_2.Repository])\n], UsersService);\n\n\n//# sourceURL=webpack://nestjs-thaitd/./src/modal/user/users.service.ts?");

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("95c83b458da791f8a6b7")
/******/ })();
/******/ 
/******/ }
;