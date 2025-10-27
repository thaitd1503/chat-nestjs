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

/***/ "./src/modal/upload-files/files.controller.ts":
/*!****************************************************!*\
  !*** ./src/modal/upload-files/files.controller.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nvar __param = (this && this.__param) || function (paramIndex, decorator) {\n    return function (target, key) { decorator(target, key, paramIndex); }\n};\nvar _a, _b;\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.FilesController = void 0;\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst platform_express_1 = __webpack_require__(/*! @nestjs/platform-express */ \"@nestjs/platform-express\");\nconst multer_1 = __webpack_require__(/*! multer */ \"multer\");\nconst path_1 = __webpack_require__(/*! path */ \"path\");\nconst swagger_1 = __webpack_require__(/*! @nestjs/swagger */ \"@nestjs/swagger\");\nlet FilesController = class FilesController {\n    uploadFile(file) {\n        if (!file) {\n            throw new common_1.BadRequestException('File is not provided');\n        }\n        const fileUrl = `http://localhost:9999/uploads/${file.filename}`;\n        return {\n            message: 'File uploaded successfully',\n            filename: file.filename,\n            url: fileUrl,\n        };\n    }\n};\nexports.FilesController = FilesController;\n__decorate([\n    (0, common_1.Post)('upload'),\n    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', {\n        storage: (0, multer_1.diskStorage)({\n            destination: './public/uploads',\n            filename: (req, file, cb) => {\n                const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);\n                const ext = (0, path_1.extname)(file.originalname);\n                const filename = `${file.fieldname}-${uniqueSuffix}${ext}`;\n                cb(null, filename);\n            },\n        }),\n        fileFilter: (req, file, cb) => {\n            if (!file.mimetype.match(/\\/(jpg|jpeg|png|gif|pdf)$/)) {\n                return cb(new common_1.BadRequestException('Only image and pdf files are allowed!'), false);\n            }\n            cb(null, true);\n        },\n        limits: { fileSize: 5 * 1024 * 1024 },\n    })),\n    __param(0, (0, common_1.UploadedFile)()),\n    __metadata(\"design:type\", Function),\n    __metadata(\"design:paramtypes\", [typeof (_b = typeof Express !== \"undefined\" && (_a = Express.Multer) !== void 0 && _a.File) === \"function\" ? _b : Object]),\n    __metadata(\"design:returntype\", void 0)\n], FilesController.prototype, \"uploadFile\", null);\nexports.FilesController = FilesController = __decorate([\n    (0, common_1.Controller)('files'),\n    (0, swagger_1.ApiTags)('Upload Files')\n], FilesController);\n\n\n//# sourceURL=webpack://nestjs-thaitd/./src/modal/upload-files/files.controller.ts?");

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

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("2f1e32aade28346f82dc")
/******/ })();
/******/ 
/******/ }
;