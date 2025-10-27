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
  /***/ './src/modal/role/role.service.ts':
    /*!****************************************!*\
  !*** ./src/modal/role/role.service.ts ***!
  \****************************************/
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      eval(
        '\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);\n};\nvar __param = (this && this.__param) || function (paramIndex, decorator) {\n    return function (target, key) { decorator(target, key, paramIndex); }\n};\nObject.defineProperty(exports, "__esModule", ({ value: true }));\nexports.RoleService = void 0;\nconst common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");\nconst typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");\nconst role_entity_1 = __webpack_require__(/*! @/modal/role/role.entity */ "./src/modal/role/role.entity.ts");\nconst typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");\nlet RoleService = class RoleService {\n    constructor(roleRepository) {\n        this.roleRepository = roleRepository;\n    }\n    async findAll() {\n        return this.roleRepository.find();\n    }\n    async createRole(role) {\n        const hashedPassword = await brcypt.hash(dto.password, 10);\n        const user = this.userRepo.create({\n            ...dto,\n            password: hashedPassword,\n        });\n        return this.roleRepository.save(role);\n    }\n    async getRoleById(idRole) {\n        return this.roleRepository.findOne({ where: { role_id: idRole } });\n    }\n};\nexports.RoleService = RoleService;\nexports.RoleService = RoleService = __decorate([\n    (0, common_1.Injectable)(),\n    __param(0, (0, typeorm_1.InjectRepository)(role_entity_1.Role)),\n    __metadata("design:paramtypes", [typeorm_2.Repository])\n], RoleService);\n\n\n//# sourceURL=webpack://nestjs-thaitd/./src/modal/role/role.service.ts?',
      );

      /***/
    },
};
exports.runtime = /******/ function (__webpack_require__) {
  // webpackRuntimeModules
  /******/ /* webpack/runtime/getFullHash */
  /******/ (() => {
    /******/ __webpack_require__.h = () => '0c70d2239ef44492bd58';
    /******/
  })();
  /******/
  /******/
};
