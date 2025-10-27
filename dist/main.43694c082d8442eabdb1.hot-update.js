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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst core_1 = __webpack_require__(/*! @nestjs/core */ \"@nestjs/core\");\nconst app_module_1 = __webpack_require__(/*! ./app.module */ \"./src/app.module.ts\");\nconst swagger_1 = __webpack_require__(/*! @nestjs/swagger */ \"@nestjs/swagger\");\nconst dotenv = __webpack_require__(/*! dotenv */ \"dotenv\");\nconst middleware_1 = __webpack_require__(/*! ../middleware */ \"./middleware.ts\");\nasync function bootstrap() {\n    dotenv.config();\n    const app = await core_1.NestFactory.create(app_module_1.AppModule);\n    const config = new swagger_1.DocumentBuilder()\n        .setTitle('Thaitd Project API')\n        .setDescription('The Project build by Thaitd')\n        .setVersion('1.0')\n        .addBearerAuth()\n        .build();\n    const document = swagger_1.SwaggerModule.createDocument(app, config);\n    swagger_1.SwaggerModule.setup('api', app, document);\n    app.useWebSocketAdapter(new middleware_1.AuthenticatedSocketIoAdapter(app));\n    app.enableCors();\n    await app.listen(9999);\n    if (true) {\n        module.hot.accept();\n        module.hot.dispose(() => app.close());\n    }\n}\nbootstrap();\n\n\n//# sourceURL=webpack://nestjs-thaitd/./src/main.ts?");

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("fa0154db17203bd69f5c")
/******/ })();
/******/ 
/******/ }
;