/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./middleware.ts":
/*!***********************!*\
  !*** ./middleware.ts ***!
  \***********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.AuthenticatedSocketIoAdapter = exports.DomainMiddleware = void 0;\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nlet DomainMiddleware = class DomainMiddleware {\n    use(req, res, next) {\n        const allowedDomains = [\n            'localhost:9999',\n            'tranduythai.id.vn',\n            'api.thaitd.io.vn',\n            'api.tranduythai.id.vn',\n            'http://103.38.237.87/',\n            '103.38.237.87:9999',\n            '103.38.237.87',\n        ];\n        const host = req.headers.host;\n        if (allowedDomains.includes(host)) {\n            next();\n        }\n        else {\n            res.status(403).send('Forbidden: Invalid Domain');\n        }\n    }\n};\nexports.DomainMiddleware = DomainMiddleware;\nexports.DomainMiddleware = DomainMiddleware = __decorate([\n    (0, common_1.Injectable)()\n], DomainMiddleware);\nconst platform_socket_io_1 = __webpack_require__(/*! @nestjs/platform-socket.io */ \"@nestjs/platform-socket.io\");\nconst jwt = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\nclass AuthenticatedSocketIoAdapter extends platform_socket_io_1.IoAdapter {\n    constructor(app) {\n        super(app);\n        this.app = app;\n    }\n    createIOServer(port, options) {\n        const server = super.createIOServer(port, options);\n        server.of('/group-chat').use((socket, next) => {\n            try {\n                const token = socket.handshake.auth?.token || socket.handshake.headers?.authorization?.split(' ')[1];\n                if (!token) {\n                    return next(new Error('Unauthorized'));\n                }\n                const payload = jwt.verify(token, process.env.secret_key);\n                socket.user = payload;\n                next();\n            }\n            catch (err) {\n                console.log('Socket auth error:', err.message);\n                next(new Error('Unauthorized'));\n            }\n        });\n        return server;\n    }\n}\nexports.AuthenticatedSocketIoAdapter = AuthenticatedSocketIoAdapter;\n\n\n//# sourceURL=webpack://nestjs-thaitd/./middleware.ts?");

/***/ }),

/***/ "./src/app.module.ts":
/*!***************************!*\
  !*** ./src/app.module.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.AppModule = void 0;\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ \"@nestjs/typeorm\");\nconst user_controller_1 = __webpack_require__(/*! @/modal/user/user.controller */ \"./src/modal/user/user.controller.ts\");\nconst users_service_1 = __webpack_require__(/*! ./modal/user/users.service */ \"./src/modal/user/users.service.ts\");\nconst modal_1 = __webpack_require__(/*! @/modal */ \"./src/modal/index.ts\");\nconst dotenv = __webpack_require__(/*! dotenv */ \"dotenv\");\nconst role_controller_1 = __webpack_require__(/*! ./modal/role/role.controller */ \"./src/modal/role/role.controller.ts\");\nconst role_service_1 = __webpack_require__(/*! ./modal/role/role.service */ \"./src/modal/role/role.service.ts\");\nconst auth_controller_1 = __webpack_require__(/*! ./auth/auth.controller */ \"./src/auth/auth.controller.ts\");\nconst auth_service_1 = __webpack_require__(/*! ./auth/auth.service */ \"./src/auth/auth.service.ts\");\nconst jwt_1 = __webpack_require__(/*! @nestjs/jwt */ \"@nestjs/jwt\");\nconst token_entity_1 = __webpack_require__(/*! ./auth/token.entity */ \"./src/auth/token.entity.ts\");\nconst token_service_1 = __webpack_require__(/*! ./auth/token.service */ \"./src/auth/token.service.ts\");\nconst schedule_1 = __webpack_require__(/*! @nestjs/schedule */ \"@nestjs/schedule\");\nconst conversations_service_1 = __webpack_require__(/*! @/modal/conversations/conversations.service */ \"./src/modal/conversations/conversations.service.ts\");\nconst conversationUsers_service_1 = __webpack_require__(/*! @/modal/conversation-users/conversationUsers.service */ \"./src/modal/conversation-users/conversationUsers.service.ts\");\nconst group_chat_gateway_1 = __webpack_require__(/*! @/modal/websocket/group/group-chat.gateway */ \"./src/modal/websocket/group/group-chat.gateway.ts\");\nconst middleware_1 = __webpack_require__(/*! ../middleware */ \"./middleware.ts\");\nconst conversations_controller_1 = __webpack_require__(/*! @/modal/conversations/conversations.controller */ \"./src/modal/conversations/conversations.controller.ts\");\nconst conversationUser_controller_1 = __webpack_require__(/*! @/modal/conversation-users/conversationUser.controller */ \"./src/modal/conversation-users/conversationUser.controller.ts\");\nconst messages_controller_1 = __webpack_require__(/*! ./modal/messages/messages.controller */ \"./src/modal/messages/messages.controller.ts\");\nconst messages_service_1 = __webpack_require__(/*! ./modal/messages/messages.service */ \"./src/modal/messages/messages.service.ts\");\nconst serve_static_1 = __webpack_require__(/*! @nestjs/serve-static */ \"@nestjs/serve-static\");\nconst files_controller_1 = __webpack_require__(/*! ./modal/upload-files/files.controller */ \"./src/modal/upload-files/files.controller.ts\");\nconst mailer_1 = __webpack_require__(/*! @nestjs-modules/mailer */ \"@nestjs-modules/mailer\");\nconst handlebars_adapter_1 = __webpack_require__(/*! @nestjs-modules/mailer/dist/adapters/handlebars.adapter */ \"@nestjs-modules/mailer/dist/adapters/handlebars.adapter\");\nconst path_1 = __webpack_require__(/*! path */ \"path\");\nconst mail_service_1 = __webpack_require__(/*! ./mail/mail.service */ \"./src/mail/mail.service.ts\");\ndotenv.config();\nlet AppModule = class AppModule {\n    configure(consumer) {\n        consumer.apply(middleware_1.DomainMiddleware).forRoutes('*');\n    }\n};\nexports.AppModule = AppModule;\nexports.AppModule = AppModule = __decorate([\n    (0, common_1.Module)({\n        imports: [\n            typeorm_1.TypeOrmModule.forRoot({\n                type: 'mysql',\n                host: '103.38.237.87',\n                port: 3306,\n                username: 'root',\n                password: 'thaitd',\n                database: 'chat-db',\n                entities: [\n                    modal_1.User,\n                    modal_1.Role,\n                    modal_1.Groups,\n                    modal_1.GroupMembers,\n                    modal_1.Conversations,\n                    modal_1.ConversationUsers,\n                    modal_1.Messages,\n                    modal_1.MessageStatus,\n                    token_entity_1.BlacklistedToken,\n                ],\n                synchronize: true,\n                retryAttempts: 3,\n                retryDelay: 3000,\n            }),\n            schedule_1.ScheduleModule.forRoot(),\n            typeorm_1.TypeOrmModule.forFeature([\n                modal_1.User,\n                modal_1.Role,\n                modal_1.Groups,\n                modal_1.GroupMembers,\n                modal_1.Conversations,\n                modal_1.ConversationUsers,\n                modal_1.Messages,\n                modal_1.MessageStatus,\n                token_entity_1.BlacklistedToken,\n            ]),\n            jwt_1.JwtModule.register({\n                secret: process.env.secret_key,\n                signOptions: { expiresIn: '12h' },\n            }),\n            serve_static_1.ServeStaticModule.forRoot({\n                rootPath: (0, path_1.join)(__dirname, '..', 'public/uploads'),\n                serveRoot: '/uploads',\n            }),\n            mailer_1.MailerModule.forRoot({\n                transport: {\n                    host: 'smtp.gmail.com',\n                    port: 587,\n                    secure: false,\n                    auth: {\n                        user: process.env.MAIL_USER,\n                        pass: process.env.MAIL_PASSWORD,\n                    },\n                },\n                defaults: {\n                    from: '\"Duy Thái 🗨\" <no-reply@tranduythai.id>',\n                },\n                template: {\n                    dir: (0, path_1.join)(process.cwd(), 'src/mail/templates'),\n                    adapter: new handlebars_adapter_1.HandlebarsAdapter(),\n                    options: { strict: false },\n                },\n            }),\n        ],\n        controllers: [\n            role_controller_1.RoleController,\n            auth_controller_1.AuthController,\n            user_controller_1.UserController,\n            conversations_controller_1.ConversationsController,\n            messages_controller_1.MessagesController,\n            conversationUser_controller_1.ConversationUserController,\n            files_controller_1.FilesController,\n        ],\n        providers: [\n            users_service_1.UsersService,\n            role_service_1.RoleService,\n            auth_service_1.AuthService,\n            conversations_service_1.ConversationsService,\n            conversationUsers_service_1.ConversationUsersService,\n            messages_service_1.MessagesService,\n            group_chat_gateway_1.GroupChatGateway,\n            token_service_1.BlacklistService,\n            mail_service_1.MailService,\n        ],\n    })\n], AppModule);\n\n\n//# sourceURL=webpack://nestjs-thaitd/./src/app.module.ts?");

/***/ }),

/***/ "./src/auth/auth.controller.ts":
/*!*************************************!*\
  !*** ./src/auth/auth.controller.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nvar __param = (this && this.__param) || function (paramIndex, decorator) {\n    return function (target, key) { decorator(target, key, paramIndex); }\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.AuthController = void 0;\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst auth_service_1 = __webpack_require__(/*! @/auth/auth.service */ \"./src/auth/auth.service.ts\");\nconst swagger_1 = __webpack_require__(/*! @nestjs/swagger */ \"@nestjs/swagger\");\nconst token_service_1 = __webpack_require__(/*! @/auth/token.service */ \"./src/auth/token.service.ts\");\nconst auth_dto_1 = __webpack_require__(/*! @/auth/roles-auth/auth.dto */ \"./src/auth/roles-auth/auth.dto.ts\");\nlet AuthController = class AuthController {\n    constructor(authService, blacklistService) {\n        this.authService = authService;\n        this.blacklistService = blacklistService;\n    }\n    signIn(login) {\n        return this.authService.LogIn(login);\n    }\n    verify(verify) {\n        return this.authService.VerifyOtp(verify);\n    }\n};\nexports.AuthController = AuthController;\n__decorate([\n    (0, common_1.HttpCode)(common_1.HttpStatus.OK),\n    (0, common_1.Post)('login'),\n    (0, swagger_1.ApiBody)({\n        type: auth_dto_1.LoginDto,\n    }),\n    __param(0, (0, common_1.Body)()),\n    __metadata(\"design:type\", Function),\n    __metadata(\"design:paramtypes\", [auth_dto_1.LoginDto]),\n    __metadata(\"design:returntype\", void 0)\n], AuthController.prototype, \"signIn\", null);\n__decorate([\n    (0, common_1.HttpCode)(common_1.HttpStatus.OK),\n    (0, common_1.Post)('verify'),\n    (0, swagger_1.ApiBody)({\n        type: auth_dto_1.VerifyOtpDto,\n    }),\n    __param(0, (0, common_1.Body)()),\n    __metadata(\"design:type\", Function),\n    __metadata(\"design:paramtypes\", [auth_dto_1.VerifyOtpDto]),\n    __metadata(\"design:returntype\", void 0)\n], AuthController.prototype, \"verify\", null);\nexports.AuthController = AuthController = __decorate([\n    (0, common_1.Controller)('auth'),\n    (0, swagger_1.ApiTags)('Auth'),\n    __metadata(\"design:paramtypes\", [auth_service_1.AuthService,\n        token_service_1.BlacklistService])\n], AuthController);\n\n\n//# sourceURL=webpack://nestjs-thaitd/./src/auth/auth.controller.ts?");

/***/ }),

/***/ "./src/auth/auth.guard.ts":
/*!********************************!*\
  !*** ./src/auth/auth.guard.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.AuthGuard = void 0;\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst jwt_1 = __webpack_require__(/*! @nestjs/jwt */ \"@nestjs/jwt\");\nconst constants_1 = __webpack_require__(/*! @/auth/constants */ \"./src/auth/constants.ts\");\nconst core_1 = __webpack_require__(/*! @nestjs/core */ \"@nestjs/core\");\nconst custom_exception_1 = __webpack_require__(/*! @/common/custom.exception */ \"./src/common/custom.exception.ts\");\nconst token_service_1 = __webpack_require__(/*! @/auth/token.service */ \"./src/auth/token.service.ts\");\nlet AuthGuard = class AuthGuard {\n    constructor(jwtService, reflector, blacklistService) {\n        this.jwtService = jwtService;\n        this.reflector = reflector;\n        this.blacklistService = blacklistService;\n    }\n    async canActivate(context) {\n        const request = context.switchToHttp().getRequest();\n        const token = this.extractTokenFromHeader(request);\n        if (!token) {\n            throw new common_1.UnauthorizedException();\n        }\n        if (token) {\n            await this.jwtService\n                .verifyAsync(token, {\n                secret: process.env.JWT_SECRET,\n            })\n                .catch(() => {\n                throw new common_1.UnauthorizedException();\n            });\n        }\n        const payload = await this.jwtService.verifyAsync(token, {\n            secret: constants_1.jwtConstants.secret,\n        });\n        const roles = this.reflector.get('role', context.getHandler());\n        const isBlacklisted = await this.blacklistService.isBlacklisted(token);\n        if (isBlacklisted) {\n            throw new custom_exception_1.ReturnException('Token has been blacklisted', 401);\n        }\n        if (roles && !roles.includes(payload.roleId)) {\n            throw new custom_exception_1.ReturnException('You do not have permission to access', 403);\n        }\n        request['user'] = payload;\n        return true;\n    }\n    extractTokenFromHeader(request) {\n        const [type, token] = request.headers.authorization?.split(' ') ?? [];\n        return type === 'Bearer' ? token : undefined;\n    }\n};\nexports.AuthGuard = AuthGuard;\nexports.AuthGuard = AuthGuard = __decorate([\n    (0, common_1.Injectable)(),\n    __metadata(\"design:paramtypes\", [jwt_1.JwtService,\n        core_1.Reflector,\n        token_service_1.BlacklistService])\n], AuthGuard);\n\n\n//# sourceURL=webpack://nestjs-thaitd/./src/auth/auth.guard.ts?");

/***/ }),

/***/ "./src/auth/auth.service.ts":
/*!**********************************!*\
  !*** ./src/auth/auth.service.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.AuthService = void 0;\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst users_service_1 = __webpack_require__(/*! @/modal/user/users.service */ \"./src/modal/user/users.service.ts\");\nconst jwt_1 = __webpack_require__(/*! @nestjs/jwt */ \"@nestjs/jwt\");\nconst custom_exception_1 = __webpack_require__(/*! @/common/custom.exception */ \"./src/common/custom.exception.ts\");\nconst bcrypt = __webpack_require__(/*! bcrypt */ \"bcrypt\");\nconst mail_service_1 = __webpack_require__(/*! @/mail/mail.service */ \"./src/mail/mail.service.ts\");\nlet AuthService = class AuthService {\n    constructor(usersService, jwtService, mailService) {\n        this.usersService = usersService;\n        this.jwtService = jwtService;\n        this.mailService = mailService;\n    }\n    async LogIn(login) {\n        const user = await this.usersService.findOne(login.email);\n        if (!user) {\n            throw new custom_exception_1.ReturnException('Tài khoản chưa tồn tại', 403);\n        }\n        const isMatch = await bcrypt.compare(login.password, user.password_hash);\n        if (!isMatch) {\n            throw new custom_exception_1.ReturnException('Tài khoản hoặc mật khẩu sai', 403);\n        }\n        if (user.status === 'pending') {\n            const otpDate = new Date(user.time_otp);\n            if (isNaN(otpDate.getTime()) || Date.now() - otpDate.getTime() > 2 * 60 * 1000) {\n                const newOtp = Math.floor(1000000000 + Math.random() * 9000000000).toString();\n                user.otp_secret = newOtp;\n                user.time_otp = new Date().toISOString();\n                await this.usersService.updateUser(user.user_id, user);\n                await this.mailService.sendWelcomeTemplate(user.email, user.username, newOtp);\n            }\n            throw new custom_exception_1.ReturnException('Vui lòng xác thực tài khoản qua email đã đăng ký!', 403);\n        }\n        const payload = {\n            user_id: user.user_id,\n            email: user.email,\n        };\n        return {\n            access_token: await this.jwtService.signAsync(payload),\n            user_id: user.user_id,\n        };\n    }\n    async VerifyOtp(payload) {\n        const user = await this.usersService.findOne(payload.email);\n        if (!user) {\n            throw new custom_exception_1.ReturnException('Tài khoản chưa tồn tại', 403);\n        }\n        if (user.otp_secret !== payload.otp) {\n            throw new custom_exception_1.ReturnException('Mã OTP không tồn tại', 403);\n        }\n        if (user.otp_secret == payload.otp) {\n            user.status = 'active';\n            user.otp_secret = null;\n            user.time_otp = null;\n            await this.usersService.updateUser(user.user_id, user);\n            return { message: 'Xác thực tài khoản thành công' };\n        }\n    }\n};\nexports.AuthService = AuthService;\nexports.AuthService = AuthService = __decorate([\n    (0, common_1.Injectable)(),\n    __metadata(\"design:paramtypes\", [users_service_1.UsersService,\n        jwt_1.JwtService,\n        mail_service_1.MailService])\n], AuthService);\n\n\n//# sourceURL=webpack://nestjs-thaitd/./src/auth/auth.service.ts?");

/***/ }),

/***/ "./src/auth/constants.ts":
/*!*******************************!*\
  !*** ./src/auth/constants.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.jwtConstants = void 0;\nexports.jwtConstants = {\n    secret: process.env.secret_key,\n};\n\n\n//# sourceURL=webpack://nestjs-thaitd/./src/auth/constants.ts?");

/***/ }),

/***/ "./src/auth/roles-auth/auth.dto.ts":
/*!*****************************************!*\
  !*** ./src/auth/roles-auth/auth.dto.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.VerifyOtpDto = exports.LoginDto = void 0;\nconst swagger_1 = __webpack_require__(/*! @nestjs/swagger */ \"@nestjs/swagger\");\nclass LoginDto {\n}\nexports.LoginDto = LoginDto;\n__decorate([\n    (0, swagger_1.ApiProperty)({ default: 'duythai010305@gmail.com' }),\n    __metadata(\"design:type\", String)\n], LoginDto.prototype, \"email\", void 0);\n__decorate([\n    (0, swagger_1.ApiProperty)({ default: 'Thai2003@' }),\n    __metadata(\"design:type\", String)\n], LoginDto.prototype, \"password\", void 0);\nclass VerifyOtpDto {\n}\nexports.VerifyOtpDto = VerifyOtpDto;\n__decorate([\n    (0, swagger_1.ApiProperty)({ default: '' }),\n    __metadata(\"design:type\", String)\n], VerifyOtpDto.prototype, \"email\", void 0);\n__decorate([\n    (0, swagger_1.ApiProperty)({ default: '' }),\n    __metadata(\"design:type\", String)\n], VerifyOtpDto.prototype, \"otp\", void 0);\n\n\n//# sourceURL=webpack://nestjs-thaitd/./src/auth/roles-auth/auth.dto.ts?");

/***/ }),

/***/ "./src/auth/roles-auth/roles.decorator.ts":
/*!************************************************!*\
  !*** ./src/auth/roles-auth/roles.decorator.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Roles = void 0;\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst Roles = (...roles) => (0, common_1.SetMetadata)('roles', roles);\nexports.Roles = Roles;\n\n\n//# sourceURL=webpack://nestjs-thaitd/./src/auth/roles-auth/roles.decorator.ts?");

/***/ }),

/***/ "./src/auth/token.entity.ts":
/*!**********************************!*\
  !*** ./src/auth/token.entity.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.BlacklistedToken = void 0;\nconst typeorm_1 = __webpack_require__(/*! typeorm */ \"typeorm\");\nlet BlacklistedToken = class BlacklistedToken {\n};\nexports.BlacklistedToken = BlacklistedToken;\n__decorate([\n    (0, typeorm_1.PrimaryGeneratedColumn)(),\n    __metadata(\"design:type\", Number)\n], BlacklistedToken.prototype, \"id\", void 0);\n__decorate([\n    (0, typeorm_1.Column)(),\n    __metadata(\"design:type\", String)\n], BlacklistedToken.prototype, \"token\", void 0);\n__decorate([\n    (0, typeorm_1.Column)({ type: 'timestamp' }),\n    __metadata(\"design:type\", Date)\n], BlacklistedToken.prototype, \"expiresAt\", void 0);\nexports.BlacklistedToken = BlacklistedToken = __decorate([\n    (0, typeorm_1.Entity)()\n], BlacklistedToken);\n\n\n//# sourceURL=webpack://nestjs-thaitd/./src/auth/token.entity.ts?");

/***/ }),

/***/ "./src/auth/token.service.ts":
/*!***********************************!*\
  !*** ./src/auth/token.service.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nvar __param = (this && this.__param) || function (paramIndex, decorator) {\n    return function (target, key) { decorator(target, key, paramIndex); }\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.BlacklistService = void 0;\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ \"@nestjs/typeorm\");\nconst typeorm_2 = __webpack_require__(/*! typeorm */ \"typeorm\");\nconst token_entity_1 = __webpack_require__(/*! @/auth/token.entity */ \"./src/auth/token.entity.ts\");\nconst jwt = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\nconst schedule_1 = __webpack_require__(/*! @nestjs/schedule */ \"@nestjs/schedule\");\nlet BlacklistService = class BlacklistService {\n    constructor(blacklistRepo) {\n        this.blacklistRepo = blacklistRepo;\n    }\n    async blacklistToken(token) {\n        const expiresAt = this.getTokenExpiry(token);\n        await this.blacklistRepo.save({ token, expiresAt });\n    }\n    async isBlacklisted(token) {\n        const blacklistedToken = await this.blacklistRepo.findOne({\n            where: { token },\n        });\n        return !!blacklistedToken;\n    }\n    getTokenExpiry(token) {\n        const decoded = jwt.decode(token);\n        return new Date(decoded.exp * 1000);\n    }\n    async cleanupExpiredTokens() {\n        const now = new Date();\n        await this.blacklistRepo.delete({ expiresAt: (0, typeorm_2.LessThan)(now) });\n        console.log('Expired tokens cleaned up');\n    }\n};\nexports.BlacklistService = BlacklistService;\n__decorate([\n    (0, schedule_1.Cron)('0 * * * *'),\n    __metadata(\"design:type\", Function),\n    __metadata(\"design:paramtypes\", []),\n    __metadata(\"design:returntype\", Promise)\n], BlacklistService.prototype, \"cleanupExpiredTokens\", null);\nexports.BlacklistService = BlacklistService = __decorate([\n    (0, common_1.Injectable)(),\n    __param(0, (0, typeorm_1.InjectRepository)(token_entity_1.BlacklistedToken)),\n    __metadata(\"design:paramtypes\", [typeorm_2.Repository])\n], BlacklistService);\n\n\n//# sourceURL=webpack://nestjs-thaitd/./src/auth/token.service.ts?");

/***/ }),

/***/ "./src/common/custom.exception.ts":
/*!****************************************!*\
  !*** ./src/common/custom.exception.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.ReturnException = void 0;\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nclass ReturnException extends common_1.HttpException {\n    constructor(response, statusCode) {\n        super(response, statusCode);\n    }\n}\nexports.ReturnException = ReturnException;\n\n\n//# sourceURL=webpack://nestjs-thaitd/./src/common/custom.exception.ts?");

/***/ }),

/***/ "./src/mail/mail.service.ts":
/*!**********************************!*\
  !*** ./src/mail/mail.service.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.MailService = void 0;\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst mailer_1 = __webpack_require__(/*! @nestjs-modules/mailer */ \"@nestjs-modules/mailer\");\nlet MailService = class MailService {\n    constructor(mailerService) {\n        this.mailerService = mailerService;\n    }\n    async sendWelcomeTemplate(to, name, otp) {\n        const confirmUrl = `https://tranduythai.id.vn/verify?email=${to}&otp=${otp}`;\n        await this.mailerService.sendMail({\n            to,\n            subject: 'Chào mừng bạn đến với hệ thống của Chat Nhanh 🎉',\n            template: './welcome',\n            context: {\n                name,\n                confirmUrl,\n            },\n        });\n    }\n};\nexports.MailService = MailService;\nexports.MailService = MailService = __decorate([\n    (0, common_1.Injectable)(),\n    __metadata(\"design:paramtypes\", [mailer_1.MailerService])\n], MailService);\n\n\n//# sourceURL=webpack://nestjs-thaitd/./src/mail/mail.service.ts?");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst core_1 = __webpack_require__(/*! @nestjs/core */ \"@nestjs/core\");\nconst app_module_1 = __webpack_require__(/*! ./app.module */ \"./src/app.module.ts\");\nconst swagger_1 = __webpack_require__(/*! @nestjs/swagger */ \"@nestjs/swagger\");\nconst dotenv = __webpack_require__(/*! dotenv */ \"dotenv\");\nconst middleware_1 = __webpack_require__(/*! ../middleware */ \"./middleware.ts\");\nasync function bootstrap() {\n    dotenv.config();\n    const app = await core_1.NestFactory.create(app_module_1.AppModule);\n    const config = new swagger_1.DocumentBuilder()\n        .setTitle('Thaitd Project API')\n        .setDescription('The Project build by Thaitd')\n        .setVersion('1.0')\n        .addBearerAuth()\n        .build();\n    const document = swagger_1.SwaggerModule.createDocument(app, config);\n    swagger_1.SwaggerModule.setup('api', app, document);\n    app.useWebSocketAdapter(new middleware_1.AuthenticatedSocketIoAdapter(app));\n    app.enableCors();\n    await app.listen(9999);\n    if (true) {\n        module.hot.accept();\n        module.hot.dispose(() => app.close());\n    }\n}\nbootstrap();\n\n\n//# sourceURL=webpack://nestjs-thaitd/./src/main.ts?");

/***/ }),

/***/ "./src/modal/conversation-users/conversationUser.controller.ts":
/*!*********************************************************************!*\
  !*** ./src/modal/conversation-users/conversationUser.controller.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nvar __param = (this && this.__param) || function (paramIndex, decorator) {\n    return function (target, key) { decorator(target, key, paramIndex); }\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.ConversationUserController = void 0;\nconst swagger_1 = __webpack_require__(/*! @nestjs/swagger */ \"@nestjs/swagger\");\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst conversationUsers_service_1 = __webpack_require__(/*! @/modal/conversation-users/conversationUsers.service */ \"./src/modal/conversation-users/conversationUsers.service.ts\");\nconst conversationUser_dto_1 = __webpack_require__(/*! @/modal/conversation-users/conversationUser.dto */ \"./src/modal/conversation-users/conversationUser.dto.ts\");\nconst auth_guard_1 = __webpack_require__(/*! @/auth/auth.guard */ \"./src/auth/auth.guard.ts\");\nconst decode_util_1 = __webpack_require__(/*! @/utils/decode.util */ \"./src/utils/decode.util.ts\");\nconst jwt_1 = __webpack_require__(/*! @nestjs/jwt */ \"@nestjs/jwt\");\nconst users_service_1 = __webpack_require__(/*! @/modal/user/users.service */ \"./src/modal/user/users.service.ts\");\nconst class_transformer_1 = __webpack_require__(/*! class-transformer */ \"class-transformer\");\nconst user_dto_1 = __webpack_require__(/*! @/modal/user/user.dto */ \"./src/modal/user/user.dto.ts\");\nlet ConversationUserController = class ConversationUserController {\n    constructor(conversationUsersService, jwtService, usersService) {\n        this.conversationUsersService = conversationUsersService;\n        this.jwtService = jwtService;\n        this.usersService = usersService;\n    }\n    async createUser(conversationUser) {\n        return this.conversationUsersService.createConversationUser(conversationUser);\n    }\n    async getConversationUserByConversationId(conversationId, request) {\n        const userFromToken = (0, decode_util_1.decodeToken)(request, this.jwtService);\n        const cvInfo = await this.conversationUsersService.getConversationUserByConversationId(conversationId, userFromToken['user_id']);\n        const userIds = await this.usersService.getUserByIds(cvInfo);\n        return (0, class_transformer_1.plainToInstance)(user_dto_1.GetUserDto, userIds, { excludeExtraneousValues: true });\n    }\n};\nexports.ConversationUserController = ConversationUserController;\n__decorate([\n    (0, common_1.Post)(),\n    (0, swagger_1.ApiBody)({ type: conversationUser_dto_1.CreateConversationUserDto }),\n    __param(0, (0, common_1.Body)()),\n    __metadata(\"design:type\", Function),\n    __metadata(\"design:paramtypes\", [conversationUser_dto_1.CreateConversationUserDto]),\n    __metadata(\"design:returntype\", Promise)\n], ConversationUserController.prototype, \"createUser\", null);\n__decorate([\n    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),\n    (0, swagger_1.ApiBearerAuth)(),\n    (0, common_1.Get)(':conversationId'),\n    __param(0, (0, common_1.Param)('conversationId')),\n    __param(1, (0, common_1.Req)()),\n    __metadata(\"design:type\", Function),\n    __metadata(\"design:paramtypes\", [Number, Object]),\n    __metadata(\"design:returntype\", Promise)\n], ConversationUserController.prototype, \"getConversationUserByConversationId\", null);\nexports.ConversationUserController = ConversationUserController = __decorate([\n    (0, common_1.Controller)('conversation-user'),\n    (0, swagger_1.ApiTags)('Conversation Users'),\n    __metadata(\"design:paramtypes\", [conversationUsers_service_1.ConversationUsersService,\n        jwt_1.JwtService,\n        users_service_1.UsersService])\n], ConversationUserController);\n\n\n//# sourceURL=webpack://nestjs-thaitd/./src/modal/conversation-users/conversationUser.controller.ts?");

/***/ }),

/***/ "./src/modal/conversation-users/conversationUser.dto.ts":
/*!**************************************************************!*\
  !*** ./src/modal/conversation-users/conversationUser.dto.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.CreateConversationUserDto = void 0;\nconst swagger_1 = __webpack_require__(/*! @nestjs/swagger */ \"@nestjs/swagger\");\nclass CreateConversationUserDto {\n}\nexports.CreateConversationUserDto = CreateConversationUserDto;\n__decorate([\n    (0, swagger_1.ApiProperty)(),\n    __metadata(\"design:type\", Number)\n], CreateConversationUserDto.prototype, \"conversation_id\", void 0);\n__decorate([\n    (0, swagger_1.ApiProperty)(),\n    __metadata(\"design:type\", Number)\n], CreateConversationUserDto.prototype, \"user_id\", void 0);\n\n\n//# sourceURL=webpack://nestjs-thaitd/./src/modal/conversation-users/conversationUser.dto.ts?");

/***/ }),

/***/ "./src/modal/conversation-users/conversationUsers.entity.ts":
/*!******************************************************************!*\
  !*** ./src/modal/conversation-users/conversationUsers.entity.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.ConversationUsers = void 0;\nconst typeorm_1 = __webpack_require__(/*! typeorm */ \"typeorm\");\nconst modal_1 = __webpack_require__(/*! @/modal */ \"./src/modal/index.ts\");\nlet ConversationUsers = class ConversationUsers {\n};\nexports.ConversationUsers = ConversationUsers;\n__decorate([\n    (0, typeorm_1.PrimaryGeneratedColumn)(),\n    __metadata(\"design:type\", Number)\n], ConversationUsers.prototype, \"conversation_user_id\", void 0);\n__decorate([\n    (0, typeorm_1.Column)(),\n    __metadata(\"design:type\", Number)\n], ConversationUsers.prototype, \"conversation_id\", void 0);\n__decorate([\n    (0, typeorm_1.Column)(),\n    __metadata(\"design:type\", Number)\n], ConversationUsers.prototype, \"user_id\", void 0);\n__decorate([\n    (0, typeorm_1.ManyToOne)(() => modal_1.User, (users) => users.conversationUser),\n    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),\n    __metadata(\"design:type\", modal_1.User)\n], ConversationUsers.prototype, \"user\", void 0);\n__decorate([\n    (0, typeorm_1.ManyToOne)(() => modal_1.Conversations, (conversations) => conversations.conversationUsers),\n    (0, typeorm_1.JoinColumn)({ name: 'conversation_id' }),\n    __metadata(\"design:type\", modal_1.Conversations)\n], ConversationUsers.prototype, \"conversations\", void 0);\nexports.ConversationUsers = ConversationUsers = __decorate([\n    (0, typeorm_1.Entity)()\n], ConversationUsers);\n\n\n//# sourceURL=webpack://nestjs-thaitd/./src/modal/conversation-users/conversationUsers.entity.ts?");

/***/ }),

/***/ "./src/modal/conversation-users/conversationUsers.service.ts":
/*!*******************************************************************!*\
  !*** ./src/modal/conversation-users/conversationUsers.service.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nvar __param = (this && this.__param) || function (paramIndex, decorator) {\n    return function (target, key) { decorator(target, key, paramIndex); }\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.ConversationUsersService = void 0;\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ \"@nestjs/typeorm\");\nconst modal_1 = __webpack_require__(/*! @/modal */ \"./src/modal/index.ts\");\nconst typeorm_2 = __webpack_require__(/*! typeorm */ \"typeorm\");\nlet ConversationUsersService = class ConversationUsersService {\n    constructor(conversationUsersRepository) {\n        this.conversationUsersRepository = conversationUsersRepository;\n    }\n    async findAll() {\n        return this.conversationUsersRepository.find({ relations: ['user', 'conversations'] });\n    }\n    async findById(id) {\n        return this.conversationUsersRepository.findOne({\n            where: { conversation_user_id: id },\n            relations: ['user', 'conversations'],\n        });\n    }\n    async createConversationUser(conversationUser) {\n        const newConversationUser = this.conversationUsersRepository.create(conversationUser);\n        return this.conversationUsersRepository.save(newConversationUser);\n    }\n    async getConversationUserByConversationId(conversationId, userId) {\n        const conversationUsers = await this.conversationUsersRepository.find({\n            where: { conversation_id: conversationId, user_id: (0, typeorm_2.Not)(userId) },\n        });\n        return conversationUsers.map((cu) => cu.user_id);\n    }\n    async remove(id) {\n        await this.conversationUsersRepository.delete(id);\n    }\n    async updateConversationUser(id, conversationUserUpdate) {\n        await this.conversationUsersRepository.update(id, conversationUserUpdate);\n        return this.conversationUsersRepository.findOneBy({ conversation_user_id: id });\n    }\n    async findConversationByUserIds(userIds) {\n        return this.conversationUsersRepository\n            .createQueryBuilder('conversationUser')\n            .where('conversationUser.user_id IN (:...userIds)', { userIds })\n            .getMany();\n    }\n    async findUserOtherOfConversation(conversationId, userId) {\n        return this.conversationUsersRepository.findOne({\n            where: { conversation_id: conversationId, user_id: (0, typeorm_2.Not)(userId) },\n            relations: ['user'],\n        });\n    }\n    async getUsersInConversation(conversationId) {\n        return this.conversationUsersRepository.find({\n            where: { conversation_id: conversationId },\n            relations: ['user'],\n        });\n    }\n    async checkIfConversationExists(userIds) {\n        const conversationUsers = await this.conversationUsersRepository\n            .createQueryBuilder('conversationUser')\n            .where('conversationUser.user_id IN (:...userIds)', { userIds })\n            .getMany();\n        const conversationCounts = new Map();\n        conversationUsers.forEach((cu) => {\n            if (!conversationCounts.has(cu.conversation_id)) {\n                conversationCounts.set(cu.conversation_id, new Set());\n            }\n            const userSet = conversationCounts.get(cu.conversation_id);\n            if (userSet) {\n                userSet.add(cu.user_id);\n            }\n        });\n        for (const [conversationId, users] of conversationCounts) {\n            if (users.size === userIds.length && userIds.every((id) => users.has(id))) {\n                return conversationId;\n            }\n        }\n        return null;\n    }\n};\nexports.ConversationUsersService = ConversationUsersService;\nexports.ConversationUsersService = ConversationUsersService = __decorate([\n    (0, common_1.Injectable)(),\n    __param(0, (0, typeorm_1.InjectRepository)(modal_1.ConversationUsers)),\n    __metadata(\"design:paramtypes\", [typeorm_2.Repository])\n], ConversationUsersService);\n\n\n//# sourceURL=webpack://nestjs-thaitd/./src/modal/conversation-users/conversationUsers.service.ts?");

/***/ }),

/***/ "./src/modal/conversations/conversations.controller.ts":
/*!*************************************************************!*\
  !*** ./src/modal/conversations/conversations.controller.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nvar __param = (this && this.__param) || function (paramIndex, decorator) {\n    return function (target, key) { decorator(target, key, paramIndex); }\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.ConversationsController = void 0;\nconst swagger_1 = __webpack_require__(/*! @nestjs/swagger */ \"@nestjs/swagger\");\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst conversations_service_1 = __webpack_require__(/*! @/modal/conversations/conversations.service */ \"./src/modal/conversations/conversations.service.ts\");\nconst conversations_dto_1 = __webpack_require__(/*! @/modal/conversations/conversations.dto */ \"./src/modal/conversations/conversations.dto.ts\");\nconst conversationUsers_service_1 = __webpack_require__(/*! @/modal/conversation-users/conversationUsers.service */ \"./src/modal/conversation-users/conversationUsers.service.ts\");\nconst jwt_1 = __webpack_require__(/*! @nestjs/jwt */ \"@nestjs/jwt\");\nconst auth_guard_1 = __webpack_require__(/*! @/auth/auth.guard */ \"./src/auth/auth.guard.ts\");\nconst decode_util_1 = __webpack_require__(/*! @/utils/decode.util */ \"./src/utils/decode.util.ts\");\nconst users_service_1 = __webpack_require__(/*! @/modal/user/users.service */ \"./src/modal/user/users.service.ts\");\nconst class_transformer_1 = __webpack_require__(/*! class-transformer */ \"class-transformer\");\nconst user_dto_1 = __webpack_require__(/*! @/modal/user/user.dto */ \"./src/modal/user/user.dto.ts\");\nlet ConversationsController = class ConversationsController {\n    constructor(conversationService, conversationUserService, usersService, jwtService) {\n        this.conversationService = conversationService;\n        this.conversationUserService = conversationUserService;\n        this.usersService = usersService;\n        this.jwtService = jwtService;\n    }\n    async createConversation(conversation) {\n        return this.conversationService.createConversation(conversation);\n    }\n    async getConversationsByUserIds(body, request) {\n        const userFromToken = (0, decode_util_1.decodeToken)(request, this.jwtService);\n        const allUserIds = [...body.memberId, userFromToken['user_id']];\n        const existingConversationId = await this.conversationUserService.checkIfConversationExists(allUserIds);\n        if (existingConversationId) {\n            const user = await this.usersService.findById(body.memberId[0]);\n            return {\n                ...(0, class_transformer_1.plainToInstance)(user_dto_1.GetUserDto, user, { excludeExtraneousValues: true }),\n                conversation_id: existingConversationId,\n            };\n        }\n        const res = await this.conversationService.createConversation(body);\n        for (const userId of allUserIds) {\n            await this.conversationUserService.createConversationUser({\n                conversation_id: res.conversation_id,\n                user_id: userId,\n            });\n        }\n        const user = await this.usersService.findById(body.memberId[0]);\n        return {\n            ...(0, class_transformer_1.plainToInstance)(user_dto_1.GetUserDto, user, { excludeExtraneousValues: true }),\n            conversation_id: res.conversation_id,\n        };\n    }\n    async getListConversations(page, limit, request) {\n        const userFromToken = (0, decode_util_1.decodeToken)(request, this.jwtService);\n        const userId = userFromToken['user_id'];\n        const lstCv = await this.conversationService.getListConversations({\n            page,\n            limit,\n        }, userId);\n        await Promise.all(lstCv.items.map(async (item) => {\n            const userOfConversation = await this.conversationUserService.findUserOtherOfConversation(item.conversation_id, userId);\n            item.userInfo = (0, class_transformer_1.plainToInstance)(user_dto_1.GetUserDto, userOfConversation?.user, { excludeExtraneousValues: true });\n        }));\n        return lstCv;\n    }\n};\nexports.ConversationsController = ConversationsController;\n__decorate([\n    (0, common_1.Post)(),\n    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),\n    (0, swagger_1.ApiBearerAuth)(),\n    (0, swagger_1.ApiBody)({ type: conversations_dto_1.CreateConversationDto }),\n    __param(0, (0, common_1.Body)()),\n    __metadata(\"design:type\", Function),\n    __metadata(\"design:paramtypes\", [conversations_dto_1.CreateConversationDto]),\n    __metadata(\"design:returntype\", Promise)\n], ConversationsController.prototype, \"createConversation\", null);\n__decorate([\n    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),\n    (0, swagger_1.ApiBearerAuth)(),\n    (0, common_1.Post)('create-conversation'),\n    (0, swagger_1.ApiBody)({ type: conversations_dto_1.CreateConversationDto }),\n    __param(0, (0, common_1.Body)()),\n    __param(1, (0, common_1.Req)()),\n    __metadata(\"design:type\", Function),\n    __metadata(\"design:paramtypes\", [conversations_dto_1.CreateConversationDto, Object]),\n    __metadata(\"design:returntype\", Promise)\n], ConversationsController.prototype, \"getConversationsByUserIds\", null);\n__decorate([\n    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),\n    (0, swagger_1.ApiBearerAuth)(),\n    (0, common_1.Get)(),\n    __param(0, (0, common_1.Query)('page', new common_1.DefaultValuePipe(1), common_1.ParseIntPipe)),\n    __param(1, (0, common_1.Query)('limit', new common_1.DefaultValuePipe(10), common_1.ParseIntPipe)),\n    __param(2, (0, common_1.Req)()),\n    __metadata(\"design:type\", Function),\n    __metadata(\"design:paramtypes\", [Number, Number, Object]),\n    __metadata(\"design:returntype\", Promise)\n], ConversationsController.prototype, \"getListConversations\", null);\nexports.ConversationsController = ConversationsController = __decorate([\n    (0, common_1.Controller)('conversations'),\n    (0, swagger_1.ApiTags)('Conversation'),\n    __metadata(\"design:paramtypes\", [conversations_service_1.ConversationsService,\n        conversationUsers_service_1.ConversationUsersService,\n        users_service_1.UsersService,\n        jwt_1.JwtService])\n], ConversationsController);\n\n\n//# sourceURL=webpack://nestjs-thaitd/./src/modal/conversations/conversations.controller.ts?");

/***/ }),

/***/ "./src/modal/conversations/conversations.dto.ts":
/*!******************************************************!*\
  !*** ./src/modal/conversations/conversations.dto.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.GetListConversationDto = exports.CreateConversationDto = void 0;\nconst swagger_1 = __webpack_require__(/*! @nestjs/swagger */ \"@nestjs/swagger\");\nclass CreateConversationDto {\n}\nexports.CreateConversationDto = CreateConversationDto;\n__decorate([\n    (0, swagger_1.ApiProperty)(),\n    __metadata(\"design:type\", Boolean)\n], CreateConversationDto.prototype, \"is_group\", void 0);\n__decorate([\n    (0, swagger_1.ApiProperty)({ nullable: true }),\n    __metadata(\"design:type\", Number)\n], CreateConversationDto.prototype, \"group_id\", void 0);\n__decorate([\n    (0, swagger_1.ApiProperty)(),\n    __metadata(\"design:type\", Array)\n], CreateConversationDto.prototype, \"memberId\", void 0);\nclass GetListConversationDto {\n}\nexports.GetListConversationDto = GetListConversationDto;\n__decorate([\n    (0, swagger_1.ApiProperty)(),\n    __metadata(\"design:type\", Number)\n], GetListConversationDto.prototype, \"conversation_id\", void 0);\n__decorate([\n    (0, swagger_1.ApiProperty)(),\n    __metadata(\"design:type\", String)\n], GetListConversationDto.prototype, \"created_at\", void 0);\n__decorate([\n    (0, swagger_1.ApiProperty)(),\n    __metadata(\"design:type\", Number)\n], GetListConversationDto.prototype, \"group_id\", void 0);\n__decorate([\n    (0, swagger_1.ApiProperty)(),\n    __metadata(\"design:type\", Boolean)\n], GetListConversationDto.prototype, \"is_group\", void 0);\n__decorate([\n    (0, swagger_1.ApiProperty)(),\n    __metadata(\"design:type\", String)\n], GetListConversationDto.prototype, \"updated_at\", void 0);\n__decorate([\n    (0, swagger_1.ApiProperty)(),\n    __metadata(\"design:type\", Array)\n], GetListConversationDto.prototype, \"messages\", void 0);\n__decorate([\n    (0, swagger_1.ApiProperty)(),\n    __metadata(\"design:type\", Object)\n], GetListConversationDto.prototype, \"userInfo\", void 0);\n\n\n//# sourceURL=webpack://nestjs-thaitd/./src/modal/conversations/conversations.dto.ts?");

/***/ }),

/***/ "./src/modal/conversations/conversations.entity.ts":
/*!*********************************************************!*\
  !*** ./src/modal/conversations/conversations.entity.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Conversations = void 0;\nconst typeorm_1 = __webpack_require__(/*! typeorm */ \"typeorm\");\nconst modal_1 = __webpack_require__(/*! @/modal */ \"./src/modal/index.ts\");\nconst conversationUsers_entity_1 = __webpack_require__(/*! @/modal/conversation-users/conversationUsers.entity */ \"./src/modal/conversation-users/conversationUsers.entity.ts\");\nlet Conversations = class Conversations {\n};\nexports.Conversations = Conversations;\n__decorate([\n    (0, typeorm_1.PrimaryGeneratedColumn)(),\n    __metadata(\"design:type\", Number)\n], Conversations.prototype, \"conversation_id\", void 0);\n__decorate([\n    (0, typeorm_1.Column)(),\n    __metadata(\"design:type\", Boolean)\n], Conversations.prototype, \"is_group\", void 0);\n__decorate([\n    (0, typeorm_1.Column)({ nullable: true }),\n    __metadata(\"design:type\", Number)\n], Conversations.prototype, \"group_id\", void 0);\n__decorate([\n    (0, typeorm_1.Column)({ nullable: true }),\n    __metadata(\"design:type\", String)\n], Conversations.prototype, \"created_at\", void 0);\n__decorate([\n    (0, typeorm_1.Column)({ nullable: true }),\n    __metadata(\"design:type\", String)\n], Conversations.prototype, \"updated_at\", void 0);\n__decorate([\n    (0, typeorm_1.ManyToOne)(() => modal_1.Groups, (groups) => groups.members),\n    (0, typeorm_1.JoinColumn)({ name: 'group_id' }),\n    __metadata(\"design:type\", modal_1.Groups)\n], Conversations.prototype, \"groups\", void 0);\n__decorate([\n    (0, typeorm_1.OneToMany)(() => conversationUsers_entity_1.ConversationUsers, (conversationUsers) => conversationUsers.conversations),\n    __metadata(\"design:type\", Array)\n], Conversations.prototype, \"conversationUsers\", void 0);\n__decorate([\n    (0, typeorm_1.OneToMany)(() => modal_1.Messages, (messages) => messages.conversations),\n    __metadata(\"design:type\", Array)\n], Conversations.prototype, \"messages\", void 0);\nexports.Conversations = Conversations = __decorate([\n    (0, typeorm_1.Entity)()\n], Conversations);\n\n\n//# sourceURL=webpack://nestjs-thaitd/./src/modal/conversations/conversations.entity.ts?");

/***/ }),

/***/ "./src/modal/conversations/conversations.service.ts":
/*!**********************************************************!*\
  !*** ./src/modal/conversations/conversations.service.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nvar __param = (this && this.__param) || function (paramIndex, decorator) {\n    return function (target, key) { decorator(target, key, paramIndex); }\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.ConversationsService = void 0;\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ \"@nestjs/typeorm\");\nconst typeorm_2 = __webpack_require__(/*! typeorm */ \"typeorm\");\nconst modal_1 = __webpack_require__(/*! @/modal */ \"./src/modal/index.ts\");\nconst nestjs_typeorm_paginate_1 = __webpack_require__(/*! nestjs-typeorm-paginate */ \"nestjs-typeorm-paginate\");\nconst class_transformer_1 = __webpack_require__(/*! class-transformer */ \"class-transformer\");\nconst user_dto_1 = __webpack_require__(/*! @/modal/user/user.dto */ \"./src/modal/user/user.dto.ts\");\nlet ConversationsService = class ConversationsService {\n    constructor(conversationRepository) {\n        this.conversationRepository = conversationRepository;\n    }\n    async findAll() {\n        return this.conversationRepository.find();\n    }\n    async getListConversations(options, userId) {\n        console.log('User ID in service:', userId);\n        const queryBuilder = this.conversationRepository\n            .createQueryBuilder('conversations')\n            .innerJoin('conversations.conversationUsers', 'cu', 'cu.user_id = :userId', { userId })\n            .innerJoinAndSelect('conversations.messages', 'messages', `messages.message_id = (\r\n      SELECT m2.message_id\r\n      FROM messages m2\r\n      WHERE m2.conversation_id = conversations.conversation_id\r\n      ORDER BY m2.created_at DESC\r\n      LIMIT 1\r\n    )`)\n            .orderBy('messages.created_at', 'DESC');\n        return (0, nestjs_typeorm_paginate_1.paginate)(queryBuilder, options);\n    }\n    async getConversationWithUserInfo(userId) {\n        const conversation = await this.conversationRepository\n            .createQueryBuilder('conversations')\n            .innerJoin('conversations.conversationUsers', 'cu', 'cu.user_id = :userId', { userId })\n            .leftJoinAndSelect('conversations.conversationUsers', 'allCu', 'allCu.user_id != :userId', { userId })\n            .leftJoinAndSelect('allCu.user', 'user')\n            .innerJoinAndSelect('conversations.messages', 'messages', `messages.message_id = (\r\n        SELECT m2.message_id\r\n        FROM messages m2\r\n        WHERE m2.conversation_id = conversations.conversation_id\r\n        ORDER BY m2.created_at DESC\r\n        LIMIT 1\r\n      )`)\n            .orderBy('messages.created_at', 'DESC')\n            .getOne();\n        if (!conversation)\n            return null;\n        const userInfo = conversation.conversationUsers?.[0]?.user || null;\n        return {\n            ...conversation,\n            conversationUsers: null,\n            userInfo: userInfo ? (0, class_transformer_1.plainToInstance)(user_dto_1.GetUserDto, userInfo, { excludeExtraneousValues: true }) : null,\n        };\n    }\n    async findById(id) {\n        return this.conversationRepository.findOne({\n            where: { conversation_id: id },\n        });\n    }\n    async createConversation(conversation) {\n        const newConversation = this.conversationRepository.create({\n            ...conversation,\n            created_at: new Date().toISOString(),\n            updated_at: new Date().toISOString(),\n        });\n        return this.conversationRepository.save(newConversation);\n    }\n    async remove(id) {\n        await this.conversationRepository.delete(id);\n    }\n    async updateConversation(id, conversationUpdate) {\n        await this.conversationRepository.update(id, conversationUpdate);\n        return this.conversationRepository.findOneBy({ conversation_id: id });\n    }\n};\nexports.ConversationsService = ConversationsService;\nexports.ConversationsService = ConversationsService = __decorate([\n    (0, common_1.Injectable)(),\n    __param(0, (0, typeorm_1.InjectRepository)(modal_1.Conversations)),\n    __metadata(\"design:paramtypes\", [typeorm_2.Repository])\n], ConversationsService);\n\n\n//# sourceURL=webpack://nestjs-thaitd/./src/modal/conversations/conversations.service.ts?");

/***/ }),

/***/ "./src/modal/group-members/groupMembers.entity.ts":
/*!********************************************************!*\
  !*** ./src/modal/group-members/groupMembers.entity.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.GroupMembers = void 0;\nconst typeorm_1 = __webpack_require__(/*! typeorm */ \"typeorm\");\nconst modal_1 = __webpack_require__(/*! @/modal */ \"./src/modal/index.ts\");\nlet GroupMembers = class GroupMembers {\n};\nexports.GroupMembers = GroupMembers;\n__decorate([\n    (0, typeorm_1.PrimaryGeneratedColumn)(),\n    __metadata(\"design:type\", Number)\n], GroupMembers.prototype, \"group_member_id\", void 0);\n__decorate([\n    (0, typeorm_1.Column)(),\n    __metadata(\"design:type\", Number)\n], GroupMembers.prototype, \"group_id\", void 0);\n__decorate([\n    (0, typeorm_1.Column)(),\n    __metadata(\"design:type\", Number)\n], GroupMembers.prototype, \"user_id\", void 0);\n__decorate([\n    (0, typeorm_1.Column)(),\n    __metadata(\"design:type\", String)\n], GroupMembers.prototype, \"role\", void 0);\n__decorate([\n    (0, typeorm_1.Column)(),\n    __metadata(\"design:type\", String)\n], GroupMembers.prototype, \"joined_at\", void 0);\n__decorate([\n    (0, typeorm_1.ManyToOne)(() => modal_1.Groups, (groups) => groups.members),\n    (0, typeorm_1.JoinColumn)({ name: 'group_id' }),\n    __metadata(\"design:type\", modal_1.Groups)\n], GroupMembers.prototype, \"groups\", void 0);\n__decorate([\n    (0, typeorm_1.ManyToOne)(() => modal_1.User, (users) => users.groupMembers),\n    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),\n    __metadata(\"design:type\", modal_1.User)\n], GroupMembers.prototype, \"user\", void 0);\nexports.GroupMembers = GroupMembers = __decorate([\n    (0, typeorm_1.Entity)()\n], GroupMembers);\n\n\n//# sourceURL=webpack://nestjs-thaitd/./src/modal/group-members/groupMembers.entity.ts?");

/***/ }),

/***/ "./src/modal/groups/groups.entity.ts":
/*!*******************************************!*\
  !*** ./src/modal/groups/groups.entity.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Groups = void 0;\nconst typeorm_1 = __webpack_require__(/*! typeorm */ \"typeorm\");\nconst modal_1 = __webpack_require__(/*! @/modal */ \"./src/modal/index.ts\");\nconst conversations_entity_1 = __webpack_require__(/*! @/modal/conversations/conversations.entity */ \"./src/modal/conversations/conversations.entity.ts\");\nlet Groups = class Groups {\n};\nexports.Groups = Groups;\n__decorate([\n    (0, typeorm_1.PrimaryGeneratedColumn)(),\n    __metadata(\"design:type\", Number)\n], Groups.prototype, \"group_id\", void 0);\n__decorate([\n    (0, typeorm_1.Column)(),\n    __metadata(\"design:type\", String)\n], Groups.prototype, \"group_name\", void 0);\n__decorate([\n    (0, typeorm_1.Column)(),\n    __metadata(\"design:type\", String)\n], Groups.prototype, \"description\", void 0);\n__decorate([\n    (0, typeorm_1.Column)(),\n    __metadata(\"design:type\", Boolean)\n], Groups.prototype, \"is_private\", void 0);\n__decorate([\n    (0, typeorm_1.Column)(),\n    __metadata(\"design:type\", String)\n], Groups.prototype, \"created_at\", void 0);\n__decorate([\n    (0, typeorm_1.Column)(),\n    __metadata(\"design:type\", String)\n], Groups.prototype, \"updated_at\", void 0);\n__decorate([\n    (0, typeorm_1.OneToMany)(() => modal_1.GroupMembers, (member) => member.groups),\n    __metadata(\"design:type\", Array)\n], Groups.prototype, \"members\", void 0);\n__decorate([\n    (0, typeorm_1.OneToMany)(() => conversations_entity_1.Conversations, (groups) => groups.groups),\n    __metadata(\"design:type\", Array)\n], Groups.prototype, \"conversations\", void 0);\nexports.Groups = Groups = __decorate([\n    (0, typeorm_1.Entity)()\n], Groups);\n\n\n//# sourceURL=webpack://nestjs-thaitd/./src/modal/groups/groups.entity.ts?");

/***/ }),

/***/ "./src/modal/index.ts":
/*!****************************!*\
  !*** ./src/modal/index.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n__exportStar(__webpack_require__(/*! @/modal/role/role.entity */ \"./src/modal/role/role.entity.ts\"), exports);\n__exportStar(__webpack_require__(/*! @/modal/user/user.entity */ \"./src/modal/user/user.entity.ts\"), exports);\n__exportStar(__webpack_require__(/*! @/modal/groups/groups.entity */ \"./src/modal/groups/groups.entity.ts\"), exports);\n__exportStar(__webpack_require__(/*! @/modal/group-members/groupMembers.entity */ \"./src/modal/group-members/groupMembers.entity.ts\"), exports);\n__exportStar(__webpack_require__(/*! @/modal/conversations/conversations.entity */ \"./src/modal/conversations/conversations.entity.ts\"), exports);\n__exportStar(__webpack_require__(/*! @/modal/conversation-users/conversationUsers.entity */ \"./src/modal/conversation-users/conversationUsers.entity.ts\"), exports);\n__exportStar(__webpack_require__(/*! @/modal/messages/messages.entity */ \"./src/modal/messages/messages.entity.ts\"), exports);\n__exportStar(__webpack_require__(/*! @/modal/message-status/messageStatus.entity */ \"./src/modal/message-status/messageStatus.entity.ts\"), exports);\n\n\n//# sourceURL=webpack://nestjs-thaitd/./src/modal/index.ts?");

/***/ }),

/***/ "./src/modal/message-status/messageStatus.entity.ts":
/*!**********************************************************!*\
  !*** ./src/modal/message-status/messageStatus.entity.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.MessageStatus = void 0;\nconst typeorm_1 = __webpack_require__(/*! typeorm */ \"typeorm\");\nconst modal_1 = __webpack_require__(/*! @/modal */ \"./src/modal/index.ts\");\nlet MessageStatus = class MessageStatus {\n};\nexports.MessageStatus = MessageStatus;\n__decorate([\n    (0, typeorm_1.PrimaryGeneratedColumn)(),\n    __metadata(\"design:type\", Number)\n], MessageStatus.prototype, \"message_status_id\", void 0);\n__decorate([\n    (0, typeorm_1.Column)(),\n    __metadata(\"design:type\", Number)\n], MessageStatus.prototype, \"message_id\", void 0);\n__decorate([\n    (0, typeorm_1.Column)(),\n    __metadata(\"design:type\", Number)\n], MessageStatus.prototype, \"user_id\", void 0);\n__decorate([\n    (0, typeorm_1.Column)(),\n    __metadata(\"design:type\", Number)\n], MessageStatus.prototype, \"status\", void 0);\n__decorate([\n    (0, typeorm_1.Column)(),\n    __metadata(\"design:type\", Number)\n], MessageStatus.prototype, \"updated_at\", void 0);\n__decorate([\n    (0, typeorm_1.ManyToOne)(() => modal_1.User, (users) => users.conversationUser),\n    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),\n    __metadata(\"design:type\", modal_1.User)\n], MessageStatus.prototype, \"user\", void 0);\n__decorate([\n    (0, typeorm_1.ManyToOne)(() => modal_1.Messages, (messages) => messages.messageStatus),\n    (0, typeorm_1.JoinColumn)({ name: 'message_id' }),\n    __metadata(\"design:type\", modal_1.Messages)\n], MessageStatus.prototype, \"messages\", void 0);\nexports.MessageStatus = MessageStatus = __decorate([\n    (0, typeorm_1.Entity)()\n], MessageStatus);\n\n\n//# sourceURL=webpack://nestjs-thaitd/./src/modal/message-status/messageStatus.entity.ts?");

/***/ }),

/***/ "./src/modal/messages/messages.controller.ts":
/*!***************************************************!*\
  !*** ./src/modal/messages/messages.controller.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nvar __param = (this && this.__param) || function (paramIndex, decorator) {\n    return function (target, key) { decorator(target, key, paramIndex); }\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.MessagesController = void 0;\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst messages_dto_1 = __webpack_require__(/*! ./messages.dto */ \"./src/modal/messages/messages.dto.ts\");\nconst messages_service_1 = __webpack_require__(/*! ./messages.service */ \"./src/modal/messages/messages.service.ts\");\nconst swagger_1 = __webpack_require__(/*! @nestjs/swagger */ \"@nestjs/swagger\");\nconst auth_guard_1 = __webpack_require__(/*! @/auth/auth.guard */ \"./src/auth/auth.guard.ts\");\nlet MessagesController = class MessagesController {\n    constructor(messagesService) {\n        this.messagesService = messagesService;\n    }\n    async create(createMessageDto) {\n        return this.messagesService.createMessage(createMessageDto);\n    }\n    async findByConversation(page, limit, conversationId) {\n        const res = await this.messagesService.findMessagesByConversation({ page, limit }, conversationId);\n        return res;\n    }\n};\nexports.MessagesController = MessagesController;\n__decorate([\n    (0, common_1.Post)(),\n    __param(0, (0, common_1.Body)()),\n    __metadata(\"design:type\", Function),\n    __metadata(\"design:paramtypes\", [messages_dto_1.CreateMessageDto]),\n    __metadata(\"design:returntype\", Promise)\n], MessagesController.prototype, \"create\", null);\n__decorate([\n    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),\n    (0, swagger_1.ApiBearerAuth)(),\n    (0, common_1.Get)(':conversationId'),\n    __param(0, (0, common_1.Query)('page', new common_1.DefaultValuePipe(1), common_1.ParseIntPipe)),\n    __param(1, (0, common_1.Query)('limit', new common_1.DefaultValuePipe(10), common_1.ParseIntPipe)),\n    __param(2, (0, common_1.Param)('conversationId')),\n    __metadata(\"design:type\", Function),\n    __metadata(\"design:paramtypes\", [Number, Number, Number]),\n    __metadata(\"design:returntype\", Promise)\n], MessagesController.prototype, \"findByConversation\", null);\nexports.MessagesController = MessagesController = __decorate([\n    (0, common_1.Controller)('messages'),\n    (0, swagger_1.ApiTags)('Messages'),\n    __metadata(\"design:paramtypes\", [messages_service_1.MessagesService])\n], MessagesController);\n\n\n//# sourceURL=webpack://nestjs-thaitd/./src/modal/messages/messages.controller.ts?");

/***/ }),

/***/ "./src/modal/messages/messages.dto.ts":
/*!********************************************!*\
  !*** ./src/modal/messages/messages.dto.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.CreateMessageDto = void 0;\nconst swagger_1 = __webpack_require__(/*! @nestjs/swagger */ \"@nestjs/swagger\");\nclass CreateMessageDto {\n}\nexports.CreateMessageDto = CreateMessageDto;\n__decorate([\n    (0, swagger_1.ApiProperty)(),\n    __metadata(\"design:type\", Number)\n], CreateMessageDto.prototype, \"conversation_id\", void 0);\n__decorate([\n    (0, swagger_1.ApiProperty)(),\n    __metadata(\"design:type\", Number)\n], CreateMessageDto.prototype, \"sender_id\", void 0);\n__decorate([\n    (0, swagger_1.ApiProperty)(),\n    __metadata(\"design:type\", String)\n], CreateMessageDto.prototype, \"message_text\", void 0);\n__decorate([\n    (0, swagger_1.ApiProperty)(),\n    __metadata(\"design:type\", String)\n], CreateMessageDto.prototype, \"message_type\", void 0);\n__decorate([\n    (0, swagger_1.ApiProperty)(),\n    __metadata(\"design:type\", String)\n], CreateMessageDto.prototype, \"created_at\", void 0);\n__decorate([\n    (0, swagger_1.ApiProperty)(),\n    __metadata(\"design:type\", String)\n], CreateMessageDto.prototype, \"updated_at\", void 0);\n\n\n//# sourceURL=webpack://nestjs-thaitd/./src/modal/messages/messages.dto.ts?");

/***/ }),

/***/ "./src/modal/messages/messages.entity.ts":
/*!***********************************************!*\
  !*** ./src/modal/messages/messages.entity.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Messages = void 0;\nconst typeorm_1 = __webpack_require__(/*! typeorm */ \"typeorm\");\nconst user_entity_1 = __webpack_require__(/*! @/modal/user/user.entity */ \"./src/modal/user/user.entity.ts\");\nconst modal_1 = __webpack_require__(/*! @/modal */ \"./src/modal/index.ts\");\nconst messageStatus_entity_1 = __webpack_require__(/*! @/modal/message-status/messageStatus.entity */ \"./src/modal/message-status/messageStatus.entity.ts\");\nlet Messages = class Messages {\n};\nexports.Messages = Messages;\n__decorate([\n    (0, typeorm_1.PrimaryGeneratedColumn)(),\n    __metadata(\"design:type\", Number)\n], Messages.prototype, \"message_id\", void 0);\n__decorate([\n    (0, typeorm_1.Column)(),\n    __metadata(\"design:type\", Number)\n], Messages.prototype, \"conversation_id\", void 0);\n__decorate([\n    (0, typeorm_1.Column)(),\n    __metadata(\"design:type\", Number)\n], Messages.prototype, \"sender_id\", void 0);\n__decorate([\n    (0, typeorm_1.Column)({ type: 'varchar', length: 5000 }),\n    __metadata(\"design:type\", String)\n], Messages.prototype, \"message_text\", void 0);\n__decorate([\n    (0, typeorm_1.Column)({ nullable: true }),\n    __metadata(\"design:type\", String)\n], Messages.prototype, \"message_type\", void 0);\n__decorate([\n    (0, typeorm_1.Column)({ nullable: true }),\n    __metadata(\"design:type\", String)\n], Messages.prototype, \"created_at\", void 0);\n__decorate([\n    (0, typeorm_1.Column)({ nullable: true }),\n    __metadata(\"design:type\", String)\n], Messages.prototype, \"updated_at\", void 0);\n__decorate([\n    (0, typeorm_1.ManyToOne)(() => modal_1.Conversations, (conversations) => conversations.conversationUsers),\n    (0, typeorm_1.JoinColumn)({ name: 'conversation_id' }),\n    __metadata(\"design:type\", modal_1.Conversations)\n], Messages.prototype, \"conversations\", void 0);\n__decorate([\n    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.messages),\n    (0, typeorm_1.JoinColumn)({ name: 'sender_id' }),\n    __metadata(\"design:type\", user_entity_1.User)\n], Messages.prototype, \"users\", void 0);\n__decorate([\n    (0, typeorm_1.OneToMany)(() => messageStatus_entity_1.MessageStatus, (messStatus) => messStatus.messages),\n    __metadata(\"design:type\", Array)\n], Messages.prototype, \"messageStatus\", void 0);\nexports.Messages = Messages = __decorate([\n    (0, typeorm_1.Entity)()\n], Messages);\n\n\n//# sourceURL=webpack://nestjs-thaitd/./src/modal/messages/messages.entity.ts?");

/***/ }),

/***/ "./src/modal/messages/messages.service.ts":
/*!************************************************!*\
  !*** ./src/modal/messages/messages.service.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.MessagesService = void 0;\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ \"@nestjs/typeorm\");\nconst typeorm_2 = __webpack_require__(/*! typeorm */ \"typeorm\");\nconst modal_1 = __webpack_require__(/*! @/modal */ \"./src/modal/index.ts\");\nconst nestjs_typeorm_paginate_1 = __webpack_require__(/*! nestjs-typeorm-paginate */ \"nestjs-typeorm-paginate\");\nlet MessagesService = class MessagesService {\n    constructor() { }\n    async createMessage(payload) {\n        const body = {\n            ...payload,\n            created_at: new Date().toISOString(),\n            updated_at: new Date().toISOString(),\n        };\n        const message = this.messagesRepository.create(body);\n        return this.messagesRepository.save(message);\n    }\n    async findMessagesByConversation(options, conversationId) {\n        const queryBuilder = this.messagesRepository.createQueryBuilder('messages').orderBy('messages.created_at', 'DESC');\n        queryBuilder.where('messages.conversation_id = :conversationId', { conversationId });\n        const paginated = await (0, nestjs_typeorm_paginate_1.paginate)(queryBuilder, options);\n        return {\n            ...paginated,\n            items: [...paginated.items].reverse(),\n        };\n    }\n};\nexports.MessagesService = MessagesService;\n__decorate([\n    (0, typeorm_1.InjectRepository)(modal_1.Messages),\n    __metadata(\"design:type\", typeorm_2.Repository)\n], MessagesService.prototype, \"messagesRepository\", void 0);\nexports.MessagesService = MessagesService = __decorate([\n    (0, common_1.Injectable)(),\n    __metadata(\"design:paramtypes\", [])\n], MessagesService);\n\n\n//# sourceURL=webpack://nestjs-thaitd/./src/modal/messages/messages.service.ts?");

/***/ }),

/***/ "./src/modal/role/role.controller.ts":
/*!*******************************************!*\
  !*** ./src/modal/role/role.controller.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nvar __param = (this && this.__param) || function (paramIndex, decorator) {\n    return function (target, key) { decorator(target, key, paramIndex); }\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.RoleController = void 0;\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst role_service_1 = __webpack_require__(/*! ./role.service */ \"./src/modal/role/role.service.ts\");\nconst swagger_1 = __webpack_require__(/*! @nestjs/swagger */ \"@nestjs/swagger\");\nconst role_entity_1 = __webpack_require__(/*! @/modal/role/role.entity */ \"./src/modal/role/role.entity.ts\");\nconst auth_guard_1 = __webpack_require__(/*! @/auth/auth.guard */ \"./src/auth/auth.guard.ts\");\nconst roles_decorator_1 = __webpack_require__(/*! @/auth/roles-auth/roles.decorator */ \"./src/auth/roles-auth/roles.decorator.ts\");\nconst role_dto_1 = __webpack_require__(/*! @/modal/role/role.dto */ \"./src/modal/role/role.dto.ts\");\nlet RoleController = class RoleController {\n    constructor(roleService) {\n        this.roleService = roleService;\n    }\n    getAllRole() {\n        return this.roleService.findAll();\n    }\n    createRole(role) {\n        return this.roleService.createRole(role);\n    }\n    getRoleById(id) {\n        return this.roleService.getRoleById(id);\n    }\n};\nexports.RoleController = RoleController;\n__decorate([\n    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),\n    (0, roles_decorator_1.Roles)('ADMIN', 'USER'),\n    (0, swagger_1.ApiBearerAuth)(),\n    (0, common_1.Get)('GetAll'),\n    __metadata(\"design:type\", Function),\n    __metadata(\"design:paramtypes\", []),\n    __metadata(\"design:returntype\", Promise)\n], RoleController.prototype, \"getAllRole\", null);\n__decorate([\n    (0, swagger_1.ApiBody)({ type: role_dto_1.createRoleDto }),\n    (0, common_1.Post)('CreateRole'),\n    __param(0, (0, common_1.Body)()),\n    __metadata(\"design:type\", Function),\n    __metadata(\"design:paramtypes\", [role_entity_1.Role]),\n    __metadata(\"design:returntype\", Promise)\n], RoleController.prototype, \"createRole\", null);\n__decorate([\n    (0, common_1.Get)('FindRoleById/:id'),\n    __param(0, (0, common_1.Param)('id')),\n    __metadata(\"design:type\", Function),\n    __metadata(\"design:paramtypes\", [Number]),\n    __metadata(\"design:returntype\", Promise)\n], RoleController.prototype, \"getRoleById\", null);\nexports.RoleController = RoleController = __decorate([\n    (0, common_1.Controller)('role'),\n    (0, swagger_1.ApiTags)('Role'),\n    __metadata(\"design:paramtypes\", [role_service_1.RoleService])\n], RoleController);\n\n\n//# sourceURL=webpack://nestjs-thaitd/./src/modal/role/role.controller.ts?");

/***/ }),

/***/ "./src/modal/role/role.dto.ts":
/*!************************************!*\
  !*** ./src/modal/role/role.dto.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.createRoleDto = void 0;\nconst swagger_1 = __webpack_require__(/*! @nestjs/swagger */ \"@nestjs/swagger\");\nclass createRoleDto {\n}\nexports.createRoleDto = createRoleDto;\n__decorate([\n    (0, swagger_1.ApiProperty)(),\n    __metadata(\"design:type\", String)\n], createRoleDto.prototype, \"role_name\", void 0);\n\n\n//# sourceURL=webpack://nestjs-thaitd/./src/modal/role/role.dto.ts?");

/***/ }),

/***/ "./src/modal/role/role.entity.ts":
/*!***************************************!*\
  !*** ./src/modal/role/role.entity.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Role = void 0;\nconst typeorm_1 = __webpack_require__(/*! typeorm */ \"typeorm\");\nconst user_entity_1 = __webpack_require__(/*! @/modal/user/user.entity */ \"./src/modal/user/user.entity.ts\");\nlet Role = class Role {\n};\nexports.Role = Role;\n__decorate([\n    (0, typeorm_1.PrimaryGeneratedColumn)(),\n    __metadata(\"design:type\", Number)\n], Role.prototype, \"role_id\", void 0);\n__decorate([\n    (0, typeorm_1.Column)(),\n    __metadata(\"design:type\", String)\n], Role.prototype, \"role_name\", void 0);\n__decorate([\n    (0, typeorm_1.OneToMany)(() => user_entity_1.User, (user) => user.role),\n    __metadata(\"design:type\", Array)\n], Role.prototype, \"users\", void 0);\nexports.Role = Role = __decorate([\n    (0, typeorm_1.Entity)()\n], Role);\n\n\n//# sourceURL=webpack://nestjs-thaitd/./src/modal/role/role.entity.ts?");

/***/ }),

/***/ "./src/modal/role/role.service.ts":
/*!****************************************!*\
  !*** ./src/modal/role/role.service.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nvar __param = (this && this.__param) || function (paramIndex, decorator) {\n    return function (target, key) { decorator(target, key, paramIndex); }\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.RoleService = void 0;\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ \"@nestjs/typeorm\");\nconst role_entity_1 = __webpack_require__(/*! @/modal/role/role.entity */ \"./src/modal/role/role.entity.ts\");\nconst typeorm_2 = __webpack_require__(/*! typeorm */ \"typeorm\");\nlet RoleService = class RoleService {\n    constructor(roleRepository) {\n        this.roleRepository = roleRepository;\n    }\n    async findAll() {\n        return this.roleRepository.find();\n    }\n    async createRole(role) {\n        return this.roleRepository.save(role);\n    }\n    async getRoleById(idRole) {\n        return this.roleRepository.findOne({ where: { role_id: idRole } });\n    }\n};\nexports.RoleService = RoleService;\nexports.RoleService = RoleService = __decorate([\n    (0, common_1.Injectable)(),\n    __param(0, (0, typeorm_1.InjectRepository)(role_entity_1.Role)),\n    __metadata(\"design:paramtypes\", [typeorm_2.Repository])\n], RoleService);\n\n\n//# sourceURL=webpack://nestjs-thaitd/./src/modal/role/role.service.ts?");

/***/ }),

/***/ "./src/modal/upload-files/files.controller.ts":
/*!****************************************************!*\
  !*** ./src/modal/upload-files/files.controller.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nvar __param = (this && this.__param) || function (paramIndex, decorator) {\n    return function (target, key) { decorator(target, key, paramIndex); }\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.FilesController = void 0;\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst platform_express_1 = __webpack_require__(/*! @nestjs/platform-express */ \"@nestjs/platform-express\");\nconst multer_1 = __webpack_require__(/*! multer */ \"multer\");\nconst path_1 = __webpack_require__(/*! path */ \"path\");\nconst swagger_1 = __webpack_require__(/*! @nestjs/swagger */ \"@nestjs/swagger\");\nlet FilesController = class FilesController {\n    uploadFile(file) {\n        console.log(' 34 file', file);\n        if (!file) {\n            throw new common_1.BadRequestException('File is not provided');\n        }\n        const fileUrl = `uploads/${file.filename}`;\n        return {\n            message: 'File uploaded successfully',\n            filename: file.filename,\n            url: fileUrl,\n        };\n    }\n};\nexports.FilesController = FilesController;\n__decorate([\n    (0, common_1.Post)('upload'),\n    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', {\n        storage: (0, multer_1.diskStorage)({\n            destination: './public/uploads',\n            filename: (req, file, cb) => {\n                const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);\n                const ext = (0, path_1.extname)(file.originalname);\n                const filename = `${file.fieldname}-${uniqueSuffix}${ext}`;\n                cb(null, filename);\n            },\n        }),\n        fileFilter: (req, file, cb) => {\n            if (!file.mimetype.match(/\\/(jpg|jpeg|png|gif|pdf)$/)) {\n                return cb(new common_1.BadRequestException('Only image and pdf files are allowed!'), false);\n            }\n            cb(null, true);\n        },\n        limits: { fileSize: 5 * 1024 * 1024 },\n    })),\n    __param(0, (0, common_1.UploadedFile)()),\n    __metadata(\"design:type\", Function),\n    __metadata(\"design:paramtypes\", [Object]),\n    __metadata(\"design:returntype\", void 0)\n], FilesController.prototype, \"uploadFile\", null);\nexports.FilesController = FilesController = __decorate([\n    (0, common_1.Controller)('files'),\n    (0, swagger_1.ApiTags)('Upload Files')\n], FilesController);\n\n\n//# sourceURL=webpack://nestjs-thaitd/./src/modal/upload-files/files.controller.ts?");

/***/ }),

/***/ "./src/modal/user/user.controller.ts":
/*!*******************************************!*\
  !*** ./src/modal/user/user.controller.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nvar __param = (this && this.__param) || function (paramIndex, decorator) {\n    return function (target, key) { decorator(target, key, paramIndex); }\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.UserController = void 0;\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst users_service_1 = __webpack_require__(/*! @/modal/user/users.service */ \"./src/modal/user/users.service.ts\");\nconst user_entity_1 = __webpack_require__(/*! @/modal/user/user.entity */ \"./src/modal/user/user.entity.ts\");\nconst swagger_1 = __webpack_require__(/*! @nestjs/swagger */ \"@nestjs/swagger\");\nconst custom_exception_1 = __webpack_require__(/*! @/common/custom.exception */ \"./src/common/custom.exception.ts\");\nconst reponse_util_1 = __webpack_require__(/*! @/utils/reponse.util */ \"./src/utils/reponse.util.ts\");\nconst user_dto_1 = __webpack_require__(/*! @/modal/user/user.dto */ \"./src/modal/user/user.dto.ts\");\nconst class_transformer_1 = __webpack_require__(/*! class-transformer */ \"class-transformer\");\nconst decode_util_1 = __webpack_require__(/*! @/utils/decode.util */ \"./src/utils/decode.util.ts\");\nconst jwt_1 = __webpack_require__(/*! @nestjs/jwt */ \"@nestjs/jwt\");\nconst auth_guard_1 = __webpack_require__(/*! @/auth/auth.guard */ \"./src/auth/auth.guard.ts\");\nconst mail_service_1 = __webpack_require__(/*! @/mail/mail.service */ \"./src/mail/mail.service.ts\");\nlet UserController = class UserController {\n    constructor(userService, jwtService, mailService) {\n        this.userService = userService;\n        this.jwtService = jwtService;\n        this.mailService = mailService;\n    }\n    async getAllUser(page, limit, userName, request) {\n        const userFromToken = (0, decode_util_1.decodeToken)(request, this.jwtService);\n        const usersPage = await this.userService.findAll({ page, limit }, userName, userFromToken['user_id']);\n        const usersDto = (0, class_transformer_1.plainToInstance)(user_dto_1.GetUserDto, usersPage.items, { excludeExtraneousValues: true });\n        return {\n            ...usersPage,\n            items: usersDto,\n        };\n    }\n    async findById(request) {\n        const userFromToken = (0, decode_util_1.decodeToken)(request, this.jwtService);\n        const user = await this.userService.findById(userFromToken['user_id']);\n        return (0, class_transformer_1.plainToInstance)(user_dto_1.GetUserDto, user, { excludeExtraneousValues: true });\n    }\n    async createUser(user) {\n        const payloadUser = {\n            ...user,\n            status: 'pending',\n            otp_secret: Math.floor(1000000000 + Math.random() * 9000000000).toString(),\n            time_otp: new Date().toISOString(),\n        };\n        const existingUser = await this.userService.findOne(payloadUser.email);\n        if (existingUser) {\n            throw new custom_exception_1.ReturnException('Email already exists', 500);\n        }\n        await this.mailService.sendWelcomeTemplate(payloadUser.email, payloadUser.username, payloadUser.otp_secret);\n        return this.userService.createUser(payloadUser);\n    }\n    async updateUser(request, userUpdate, id) {\n        try {\n            const userFromToken = (0, decode_util_1.decodeToken)(request, this.jwtService);\n            return (0, reponse_util_1.createApiResponse)(await this.userService.updateUser(userFromToken['user_id'], userUpdate));\n        }\n        catch (error) {\n            throw new custom_exception_1.ReturnException('Please check: ' + error.message, 500);\n        }\n    }\n};\nexports.UserController = UserController;\n__decorate([\n    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),\n    (0, swagger_1.ApiBearerAuth)(),\n    (0, common_1.Get)(),\n    __param(0, (0, common_1.Query)('page', new common_1.DefaultValuePipe(1), common_1.ParseIntPipe)),\n    __param(1, (0, common_1.Query)('limit', new common_1.DefaultValuePipe(10), common_1.ParseIntPipe)),\n    __param(2, (0, common_1.Query)('name')),\n    __param(3, (0, common_1.Req)()),\n    __metadata(\"design:type\", Function),\n    __metadata(\"design:paramtypes\", [Number, Number, String, Object]),\n    __metadata(\"design:returntype\", Promise)\n], UserController.prototype, \"getAllUser\", null);\n__decorate([\n    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),\n    (0, swagger_1.ApiBearerAuth)(),\n    (0, common_1.Get)('get-by-id'),\n    __param(0, (0, common_1.Req)()),\n    __metadata(\"design:type\", Function),\n    __metadata(\"design:paramtypes\", [Object]),\n    __metadata(\"design:returntype\", Promise)\n], UserController.prototype, \"findById\", null);\n__decorate([\n    (0, common_1.Post)(),\n    (0, swagger_1.ApiBody)({ type: user_dto_1.CreatUserDto }),\n    __param(0, (0, common_1.Body)()),\n    __metadata(\"design:type\", Function),\n    __metadata(\"design:paramtypes\", [user_dto_1.CreatUserDto]),\n    __metadata(\"design:returntype\", Promise)\n], UserController.prototype, \"createUser\", null);\n__decorate([\n    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),\n    (0, swagger_1.ApiBearerAuth)(),\n    (0, common_1.Put)('update-user/:id'),\n    (0, swagger_1.ApiBody)({\n        type: user_dto_1.CreatUserDto,\n    }),\n    __param(0, (0, common_1.Req)()),\n    __param(1, (0, common_1.Body)()),\n    __param(2, (0, common_1.Param)('id')),\n    __metadata(\"design:type\", Function),\n    __metadata(\"design:paramtypes\", [Object, user_entity_1.User, Number]),\n    __metadata(\"design:returntype\", Promise)\n], UserController.prototype, \"updateUser\", null);\nexports.UserController = UserController = __decorate([\n    (0, common_1.Controller)('user'),\n    (0, swagger_1.ApiTags)('User'),\n    __metadata(\"design:paramtypes\", [users_service_1.UsersService,\n        jwt_1.JwtService,\n        mail_service_1.MailService])\n], UserController);\n\n\n//# sourceURL=webpack://nestjs-thaitd/./src/modal/user/user.controller.ts?");

/***/ }),

/***/ "./src/modal/user/user.dto.ts":
/*!************************************!*\
  !*** ./src/modal/user/user.dto.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.GetUserDto = exports.CreatUserDto = void 0;\nconst swagger_1 = __webpack_require__(/*! @nestjs/swagger */ \"@nestjs/swagger\");\nconst class_transformer_1 = __webpack_require__(/*! class-transformer */ \"class-transformer\");\nclass CreatUserDto {\n}\nexports.CreatUserDto = CreatUserDto;\n__decorate([\n    (0, swagger_1.ApiProperty)(),\n    __metadata(\"design:type\", String)\n], CreatUserDto.prototype, \"username\", void 0);\n__decorate([\n    (0, swagger_1.ApiProperty)(),\n    __metadata(\"design:type\", String)\n], CreatUserDto.prototype, \"email\", void 0);\n__decorate([\n    (0, swagger_1.ApiProperty)(),\n    __metadata(\"design:type\", String)\n], CreatUserDto.prototype, \"password\", void 0);\n__decorate([\n    (0, swagger_1.ApiProperty)(),\n    __metadata(\"design:type\", String)\n], CreatUserDto.prototype, \"avatar_url\", void 0);\nclass GetUserDto {\n}\nexports.GetUserDto = GetUserDto;\n__decorate([\n    (0, swagger_1.ApiProperty)(),\n    (0, class_transformer_1.Expose)(),\n    __metadata(\"design:type\", Number)\n], GetUserDto.prototype, \"user_id\", void 0);\n__decorate([\n    (0, swagger_1.ApiProperty)(),\n    (0, class_transformer_1.Expose)(),\n    __metadata(\"design:type\", String)\n], GetUserDto.prototype, \"username\", void 0);\n__decorate([\n    (0, swagger_1.ApiProperty)(),\n    (0, class_transformer_1.Expose)(),\n    __metadata(\"design:type\", String)\n], GetUserDto.prototype, \"email\", void 0);\n__decorate([\n    (0, swagger_1.ApiProperty)(),\n    (0, class_transformer_1.Expose)(),\n    (0, class_transformer_1.Transform)(({ value }) => {\n        if (!value)\n            return value;\n        if (/^https?:\\/\\//i.test(value))\n            return value;\n        const clean = String(value).replace(/^\\/+/, '');\n        return `${process.env.domain}${clean}`;\n    }),\n    __metadata(\"design:type\", String)\n], GetUserDto.prototype, \"avatar_url\", void 0);\n__decorate([\n    (0, swagger_1.ApiProperty)(),\n    (0, class_transformer_1.Expose)(),\n    __metadata(\"design:type\", String)\n], GetUserDto.prototype, \"created_at\", void 0);\n__decorate([\n    (0, swagger_1.ApiProperty)(),\n    (0, class_transformer_1.Expose)(),\n    __metadata(\"design:type\", String)\n], GetUserDto.prototype, \"updated_at\", void 0);\n__decorate([\n    (0, swagger_1.ApiProperty)(),\n    (0, class_transformer_1.Expose)(),\n    (0, class_transformer_1.Transform)(({ obj }) => obj.role?.role_name),\n    __metadata(\"design:type\", String)\n], GetUserDto.prototype, \"role_name\", void 0);\n\n\n//# sourceURL=webpack://nestjs-thaitd/./src/modal/user/user.dto.ts?");

/***/ }),

/***/ "./src/modal/user/user.entity.ts":
/*!***************************************!*\
  !*** ./src/modal/user/user.entity.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.User = void 0;\nconst typeorm_1 = __webpack_require__(/*! typeorm */ \"typeorm\");\nconst role_entity_1 = __webpack_require__(/*! @/modal/role/role.entity */ \"./src/modal/role/role.entity.ts\");\nconst modal_1 = __webpack_require__(/*! @/modal */ \"./src/modal/index.ts\");\nconst conversationUsers_entity_1 = __webpack_require__(/*! @/modal/conversation-users/conversationUsers.entity */ \"./src/modal/conversation-users/conversationUsers.entity.ts\");\nconst messageStatus_entity_1 = __webpack_require__(/*! @/modal/message-status/messageStatus.entity */ \"./src/modal/message-status/messageStatus.entity.ts\");\nlet User = class User {\n};\nexports.User = User;\n__decorate([\n    (0, typeorm_1.PrimaryGeneratedColumn)(),\n    __metadata(\"design:type\", Number)\n], User.prototype, \"user_id\", void 0);\n__decorate([\n    (0, typeorm_1.Column)(),\n    __metadata(\"design:type\", Number)\n], User.prototype, \"role_id\", void 0);\n__decorate([\n    (0, typeorm_1.Column)(),\n    __metadata(\"design:type\", String)\n], User.prototype, \"username\", void 0);\n__decorate([\n    (0, typeorm_1.Column)(),\n    __metadata(\"design:type\", String)\n], User.prototype, \"email\", void 0);\n__decorate([\n    (0, typeorm_1.Column)(),\n    __metadata(\"design:type\", String)\n], User.prototype, \"password_hash\", void 0);\n__decorate([\n    (0, typeorm_1.Column)({ nullable: true }),\n    __metadata(\"design:type\", String)\n], User.prototype, \"avatar_url\", void 0);\n__decorate([\n    (0, typeorm_1.Column)({ nullable: true }),\n    __metadata(\"design:type\", String)\n], User.prototype, \"otp_secret\", void 0);\n__decorate([\n    (0, typeorm_1.Column)({ nullable: true }),\n    __metadata(\"design:type\", String)\n], User.prototype, \"time_otp\", void 0);\n__decorate([\n    (0, typeorm_1.Column)({ nullable: true }),\n    __metadata(\"design:type\", String)\n], User.prototype, \"status\", void 0);\n__decorate([\n    (0, typeorm_1.Column)({ nullable: true }),\n    __metadata(\"design:type\", String)\n], User.prototype, \"created_at\", void 0);\n__decorate([\n    (0, typeorm_1.Column)({ nullable: true }),\n    __metadata(\"design:type\", String)\n], User.prototype, \"updated_at\", void 0);\n__decorate([\n    (0, typeorm_1.ManyToOne)(() => role_entity_1.Role, (role) => role.users),\n    (0, typeorm_1.JoinColumn)({ name: 'role_id' }),\n    __metadata(\"design:type\", role_entity_1.Role)\n], User.prototype, \"role\", void 0);\n__decorate([\n    (0, typeorm_1.OneToMany)(() => modal_1.GroupMembers, (groupMembers) => groupMembers.user),\n    __metadata(\"design:type\", Array)\n], User.prototype, \"groupMembers\", void 0);\n__decorate([\n    (0, typeorm_1.OneToMany)(() => conversationUsers_entity_1.ConversationUsers, (conversationUser) => conversationUser.user),\n    __metadata(\"design:type\", Array)\n], User.prototype, \"conversationUser\", void 0);\n__decorate([\n    (0, typeorm_1.OneToMany)(() => messageStatus_entity_1.MessageStatus, (messStatus) => messStatus.user),\n    __metadata(\"design:type\", Array)\n], User.prototype, \"messageStatus\", void 0);\n__decorate([\n    (0, typeorm_1.OneToMany)(() => modal_1.Messages, (mess) => mess.users),\n    __metadata(\"design:type\", Array)\n], User.prototype, \"messages\", void 0);\nexports.User = User = __decorate([\n    (0, typeorm_1.Entity)()\n], User);\n\n\n//# sourceURL=webpack://nestjs-thaitd/./src/modal/user/user.entity.ts?");

/***/ }),

/***/ "./src/modal/user/users.service.ts":
/*!*****************************************!*\
  !*** ./src/modal/user/users.service.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nvar __param = (this && this.__param) || function (paramIndex, decorator) {\n    return function (target, key) { decorator(target, key, paramIndex); }\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.UsersService = void 0;\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ \"@nestjs/typeorm\");\nconst typeorm_2 = __webpack_require__(/*! typeorm */ \"typeorm\");\nconst modal_1 = __webpack_require__(/*! @/modal */ \"./src/modal/index.ts\");\nconst bcrypt = __webpack_require__(/*! bcrypt */ \"bcrypt\");\nconst nestjs_typeorm_paginate_1 = __webpack_require__(/*! nestjs-typeorm-paginate */ \"nestjs-typeorm-paginate\");\nlet UsersService = class UsersService {\n    constructor(usersRepository) {\n        this.usersRepository = usersRepository;\n    }\n    async findAll(options, userName, userId) {\n        const queryBuilder = this.usersRepository\n            .createQueryBuilder('user')\n            .leftJoinAndSelect('user.role', 'role')\n            .where('user.user_id != :userId', { userId });\n        if (userName) {\n            queryBuilder.where('user.username LIKE :userName', { userName: `%${userName}%` });\n        }\n        return (0, nestjs_typeorm_paginate_1.paginate)(queryBuilder, options);\n    }\n    async findOne(email) {\n        return this.usersRepository.findOne({\n            where: { email },\n            relations: ['role'],\n        });\n    }\n    async findById(id) {\n        return this.usersRepository.findOne({ where: { user_id: id } });\n    }\n    async getUserByIds(userIds) {\n        return this.usersRepository\n            .createQueryBuilder('user')\n            .where('user.user_id IN (:...userIds)', { userIds })\n            .getMany();\n    }\n    async createUser(user) {\n        const hashedPassword = await bcrypt.hash(user.password, 10);\n        const userPayload = this.usersRepository.create({\n            ...user,\n            password_hash: hashedPassword,\n            role_id: 2,\n            created_at: new Date().toISOString(),\n            updated_at: new Date().toISOString(),\n        });\n        return this.usersRepository.save(userPayload);\n    }\n    async remove(id) {\n        await this.usersRepository.delete(id);\n    }\n    async updateUser(id, userUpdate) {\n        await this.usersRepository.update(id, userUpdate);\n        return this.usersRepository.findOneBy({ user_id: id });\n    }\n};\nexports.UsersService = UsersService;\nexports.UsersService = UsersService = __decorate([\n    (0, common_1.Injectable)(),\n    __param(0, (0, typeorm_1.InjectRepository)(modal_1.User)),\n    __metadata(\"design:paramtypes\", [typeorm_2.Repository])\n], UsersService);\n\n\n//# sourceURL=webpack://nestjs-thaitd/./src/modal/user/users.service.ts?");

/***/ }),

/***/ "./src/modal/websocket/group/group-chat.gateway.ts":
/*!*********************************************************!*\
  !*** ./src/modal/websocket/group/group-chat.gateway.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nvar __param = (this && this.__param) || function (paramIndex, decorator) {\n    return function (target, key) { decorator(target, key, paramIndex); }\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.GroupChatGateway = void 0;\nconst conversations_service_1 = __webpack_require__(/*! @/modal/conversations/conversations.service */ \"./src/modal/conversations/conversations.service.ts\");\nconst socket_io_1 = __webpack_require__(/*! socket.io */ \"socket.io\");\nconst conversationUsers_service_1 = __webpack_require__(/*! @/modal/conversation-users/conversationUsers.service */ \"./src/modal/conversation-users/conversationUsers.service.ts\");\nconst websockets_1 = __webpack_require__(/*! @nestjs/websockets */ \"@nestjs/websockets\");\nconst user_socket_store_1 = __webpack_require__(/*! @/store/user-socket.store */ \"./src/store/user-socket.store.ts\");\nconst messages_service_1 = __webpack_require__(/*! @/modal/messages/messages.service */ \"./src/modal/messages/messages.service.ts\");\nlet GroupChatGateway = class GroupChatGateway {\n    constructor(conversationService, conversationUserService, messagesService) {\n        this.conversationService = conversationService;\n        this.conversationUserService = conversationUserService;\n        this.messagesService = messagesService;\n    }\n    async handleConnection(client) {\n        const user = client.user;\n        if (user?.user_id) {\n            const sockets = user_socket_store_1.userSockets.get(user.user_id) || [];\n            sockets.push(client.id);\n            user_socket_store_1.userSockets.set(user.user_id, sockets);\n            console.log(`✅ User ${user.user_id} connected with socket ${client.id}`);\n        }\n    }\n    async handleDisconnect(client) {\n        const user = client.user;\n        if (user?.user_id) {\n            const sockets = user_socket_store_1.userSockets.get(user.user_id) || [];\n            const updated = sockets.filter((id) => id !== client.id);\n            if (updated.length > 0) {\n                user_socket_store_1.userSockets.set(user.user_id, updated);\n            }\n            else {\n                user_socket_store_1.userSockets.delete(user.user_id);\n            }\n            console.log(`❌ User ${user.user_id} disconnected from socket ${client.id}`);\n        }\n    }\n    async handleCreateGroup(client, data) {\n        const user = client.user;\n        console.log('User gửi yêu cầu:', user, data);\n        console.log(user_socket_store_1.userSockets);\n        console.log(data);\n        this.server.emit('group:new_message', {\n            hehe: 'haha',\n        });\n    }\n    async handleMessageSend(client, data) {\n        const user = client.user;\n        const createMs = {\n            ...data,\n            sender_id: user.user_id,\n        };\n        const res = await this.messagesService.createMessage(createMs);\n        const listUserInConversation = await this.conversationUserService.getUsersInConversation(data.conversation_id);\n        for (const u of listUserInConversation) {\n            const sockets = user_socket_store_1.userSockets.get(u.user_id);\n            if (sockets && sockets.length > 0) {\n                for (const s of sockets) {\n                    this.server.to(s).emit('message:new', {\n                        message: res,\n                        conversation_id: data.conversation_id,\n                        sender: {\n                            user_id: user.user_id,\n                            username: user.username,\n                        },\n                    });\n                    const conversations = await this.conversationService.getConversationWithUserInfo(u.user_id);\n                    this.server.to(s).emit('conversation:new', conversations);\n                }\n            }\n        }\n    }\n};\nexports.GroupChatGateway = GroupChatGateway;\n__decorate([\n    (0, websockets_1.WebSocketServer)(),\n    __metadata(\"design:type\", socket_io_1.Server)\n], GroupChatGateway.prototype, \"server\", void 0);\n__decorate([\n    __param(0, (0, websockets_1.ConnectedSocket)()),\n    __metadata(\"design:type\", Function),\n    __metadata(\"design:paramtypes\", [socket_io_1.Socket]),\n    __metadata(\"design:returntype\", Promise)\n], GroupChatGateway.prototype, \"handleConnection\", null);\n__decorate([\n    __param(0, (0, websockets_1.ConnectedSocket)()),\n    __metadata(\"design:type\", Function),\n    __metadata(\"design:paramtypes\", [socket_io_1.Socket]),\n    __metadata(\"design:returntype\", Promise)\n], GroupChatGateway.prototype, \"handleDisconnect\", null);\n__decorate([\n    (0, websockets_1.SubscribeMessage)('group:create'),\n    __param(0, (0, websockets_1.ConnectedSocket)()),\n    __param(1, (0, websockets_1.MessageBody)()),\n    __metadata(\"design:type\", Function),\n    __metadata(\"design:paramtypes\", [socket_io_1.Socket, Object]),\n    __metadata(\"design:returntype\", Promise)\n], GroupChatGateway.prototype, \"handleCreateGroup\", null);\n__decorate([\n    (0, websockets_1.SubscribeMessage)('message:send'),\n    __param(0, (0, websockets_1.ConnectedSocket)()),\n    __param(1, (0, websockets_1.MessageBody)()),\n    __metadata(\"design:type\", Function),\n    __metadata(\"design:paramtypes\", [socket_io_1.Socket, Object]),\n    __metadata(\"design:returntype\", Promise)\n], GroupChatGateway.prototype, \"handleMessageSend\", null);\nexports.GroupChatGateway = GroupChatGateway = __decorate([\n    (0, websockets_1.WebSocketGateway)({ cors: true, namespace: '/group-chat' }),\n    __metadata(\"design:paramtypes\", [conversations_service_1.ConversationsService,\n        conversationUsers_service_1.ConversationUsersService,\n        messages_service_1.MessagesService])\n], GroupChatGateway);\n\n\n//# sourceURL=webpack://nestjs-thaitd/./src/modal/websocket/group/group-chat.gateway.ts?");

/***/ }),

/***/ "./src/store/user-socket.store.ts":
/*!****************************************!*\
  !*** ./src/store/user-socket.store.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.userSockets = void 0;\nexports.userSockets = new Map();\n\n\n//# sourceURL=webpack://nestjs-thaitd/./src/store/user-socket.store.ts?");

/***/ }),

/***/ "./src/utils/decode.util.ts":
/*!**********************************!*\
  !*** ./src/utils/decode.util.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.decodeToken = decodeToken;\nfunction decodeToken(request, jwtService) {\n    const authHeader = request.headers['authorization'];\n    if (!authHeader) {\n        throw new Error('Authorization header missing');\n    }\n    const token = authHeader.replace('Bearer ', '');\n    return jwtService.decode(token);\n}\n\n\n//# sourceURL=webpack://nestjs-thaitd/./src/utils/decode.util.ts?");

/***/ }),

/***/ "./src/utils/reponse.util.ts":
/*!***********************************!*\
  !*** ./src/utils/reponse.util.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.ApiResponse = void 0;\nexports.createApiResponse = createApiResponse;\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nfunction createApiResponse(data, statusCode = common_1.HttpStatus.OK) {\n    return {\n        data,\n        statusCode,\n    };\n}\nclass ApiResponse {\n}\nexports.ApiResponse = ApiResponse;\n\n\n//# sourceURL=webpack://nestjs-thaitd/./src/utils/reponse.util.ts?");

/***/ }),

/***/ "./node_modules/webpack/hot/log-apply-result.js":
/*!******************************************************!*\
  !*** ./node_modules/webpack/hot/log-apply-result.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n\n/**\n * @param {(string | number)[]} updatedModules updated modules\n * @param {(string | number)[] | null} renewedModules renewed modules\n */\nmodule.exports = function (updatedModules, renewedModules) {\n\tvar unacceptedModules = updatedModules.filter(function (moduleId) {\n\t\treturn renewedModules && renewedModules.indexOf(moduleId) < 0;\n\t});\n\tvar log = __webpack_require__(/*! ./log */ \"./node_modules/webpack/hot/log.js\");\n\n\tif (unacceptedModules.length > 0) {\n\t\tlog(\n\t\t\t\"warning\",\n\t\t\t\"[HMR] The following modules couldn't be hot updated: (They would need a full reload!)\"\n\t\t);\n\t\tunacceptedModules.forEach(function (moduleId) {\n\t\t\tlog(\"warning\", \"[HMR]  - \" + moduleId);\n\t\t});\n\t}\n\n\tif (!renewedModules || renewedModules.length === 0) {\n\t\tlog(\"info\", \"[HMR] Nothing hot updated.\");\n\t} else {\n\t\tlog(\"info\", \"[HMR] Updated modules:\");\n\t\trenewedModules.forEach(function (moduleId) {\n\t\t\tif (typeof moduleId === \"string\" && moduleId.indexOf(\"!\") !== -1) {\n\t\t\t\tvar parts = moduleId.split(\"!\");\n\t\t\t\tlog.groupCollapsed(\"info\", \"[HMR]  - \" + parts.pop());\n\t\t\t\tlog(\"info\", \"[HMR]  - \" + moduleId);\n\t\t\t\tlog.groupEnd(\"info\");\n\t\t\t} else {\n\t\t\t\tlog(\"info\", \"[HMR]  - \" + moduleId);\n\t\t\t}\n\t\t});\n\t\tvar numberIds = renewedModules.every(function (moduleId) {\n\t\t\treturn typeof moduleId === \"number\";\n\t\t});\n\t\tif (numberIds)\n\t\t\tlog(\n\t\t\t\t\"info\",\n\t\t\t\t'[HMR] Consider using the optimization.moduleIds: \"named\" for module names.'\n\t\t\t);\n\t}\n};\n\n\n//# sourceURL=webpack://nestjs-thaitd/./node_modules/webpack/hot/log-apply-result.js?");

/***/ }),

/***/ "./node_modules/webpack/hot/log.js":
/*!*****************************************!*\
  !*** ./node_modules/webpack/hot/log.js ***!
  \*****************************************/
/***/ ((module) => {

eval("/** @typedef {\"info\" | \"warning\" | \"error\"} LogLevel */\n\n/** @type {LogLevel} */\nvar logLevel = \"info\";\n\nfunction dummy() {}\n\n/**\n * @param {LogLevel} level log level\n * @returns {boolean} true, if should log\n */\nfunction shouldLog(level) {\n\tvar shouldLog =\n\t\t(logLevel === \"info\" && level === \"info\") ||\n\t\t([\"info\", \"warning\"].indexOf(logLevel) >= 0 && level === \"warning\") ||\n\t\t([\"info\", \"warning\", \"error\"].indexOf(logLevel) >= 0 && level === \"error\");\n\treturn shouldLog;\n}\n\n/**\n * @param {(msg?: string) => void} logFn log function\n * @returns {(level: LogLevel, msg?: string) => void} function that logs when log level is sufficient\n */\nfunction logGroup(logFn) {\n\treturn function (level, msg) {\n\t\tif (shouldLog(level)) {\n\t\t\tlogFn(msg);\n\t\t}\n\t};\n}\n\n/**\n * @param {LogLevel} level log level\n * @param {string|Error} msg message\n */\nmodule.exports = function (level, msg) {\n\tif (shouldLog(level)) {\n\t\tif (level === \"info\") {\n\t\t\tconsole.log(msg);\n\t\t} else if (level === \"warning\") {\n\t\t\tconsole.warn(msg);\n\t\t} else if (level === \"error\") {\n\t\t\tconsole.error(msg);\n\t\t}\n\t}\n};\n\nvar group = console.group || dummy;\nvar groupCollapsed = console.groupCollapsed || dummy;\nvar groupEnd = console.groupEnd || dummy;\n\nmodule.exports.group = logGroup(group);\n\nmodule.exports.groupCollapsed = logGroup(groupCollapsed);\n\nmodule.exports.groupEnd = logGroup(groupEnd);\n\n/**\n * @param {LogLevel} level log level\n */\nmodule.exports.setLogLevel = function (level) {\n\tlogLevel = level;\n};\n\n/**\n * @param {Error} err error\n * @returns {string} formatted error\n */\nmodule.exports.formatError = function (err) {\n\tvar message = err.message;\n\tvar stack = err.stack;\n\tif (!stack) {\n\t\treturn message;\n\t} else if (stack.indexOf(message) < 0) {\n\t\treturn message + \"\\n\" + stack;\n\t}\n\treturn stack;\n};\n\n\n//# sourceURL=webpack://nestjs-thaitd/./node_modules/webpack/hot/log.js?");

/***/ }),

/***/ "./node_modules/webpack/hot/poll.js?100":
/*!**********************************************!*\
  !*** ./node_modules/webpack/hot/poll.js?100 ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var __resourceQuery = \"?100\";\n/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n/* globals __resourceQuery */\nif (true) {\n\tvar hotPollInterval = +__resourceQuery.slice(1) || 0;\n\tvar log = __webpack_require__(/*! ./log */ \"./node_modules/webpack/hot/log.js\");\n\n\t/**\n\t * @param {boolean=} fromUpdate true when called from update\n\t */\n\tvar checkForUpdate = function checkForUpdate(fromUpdate) {\n\t\tif (module.hot.status() === \"idle\") {\n\t\t\tmodule.hot\n\t\t\t\t.check(true)\n\t\t\t\t.then(function (updatedModules) {\n\t\t\t\t\tif (!updatedModules) {\n\t\t\t\t\t\tif (fromUpdate) log(\"info\", \"[HMR] Update applied.\");\n\t\t\t\t\t\treturn;\n\t\t\t\t\t}\n\t\t\t\t\t__webpack_require__(/*! ./log-apply-result */ \"./node_modules/webpack/hot/log-apply-result.js\")(updatedModules, updatedModules);\n\t\t\t\t\tcheckForUpdate(true);\n\t\t\t\t})\n\t\t\t\t.catch(function (err) {\n\t\t\t\t\tvar status = module.hot.status();\n\t\t\t\t\tif ([\"abort\", \"fail\"].indexOf(status) >= 0) {\n\t\t\t\t\t\tlog(\"warning\", \"[HMR] Cannot apply update.\");\n\t\t\t\t\t\tlog(\"warning\", \"[HMR] \" + log.formatError(err));\n\t\t\t\t\t\tlog(\"warning\", \"[HMR] You need to restart the application!\");\n\t\t\t\t\t} else {\n\t\t\t\t\t\tlog(\"warning\", \"[HMR] Update failed: \" + log.formatError(err));\n\t\t\t\t\t}\n\t\t\t\t});\n\t\t}\n\t};\n\tsetInterval(checkForUpdate, hotPollInterval);\n} else {}\n\n\n//# sourceURL=webpack://nestjs-thaitd/./node_modules/webpack/hot/poll.js?");

/***/ }),

/***/ "@nestjs-modules/mailer":
/*!*****************************************!*\
  !*** external "@nestjs-modules/mailer" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@nestjs-modules/mailer");

/***/ }),

/***/ "@nestjs-modules/mailer/dist/adapters/handlebars.adapter":
/*!**************************************************************************!*\
  !*** external "@nestjs-modules/mailer/dist/adapters/handlebars.adapter" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@nestjs-modules/mailer/dist/adapters/handlebars.adapter");

/***/ }),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/jwt":
/*!******************************!*\
  !*** external "@nestjs/jwt" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("@nestjs/jwt");

/***/ }),

/***/ "@nestjs/platform-express":
/*!*******************************************!*\
  !*** external "@nestjs/platform-express" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@nestjs/platform-express");

/***/ }),

/***/ "@nestjs/platform-socket.io":
/*!*********************************************!*\
  !*** external "@nestjs/platform-socket.io" ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@nestjs/platform-socket.io");

/***/ }),

/***/ "@nestjs/schedule":
/*!***********************************!*\
  !*** external "@nestjs/schedule" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@nestjs/schedule");

/***/ }),

/***/ "@nestjs/serve-static":
/*!***************************************!*\
  !*** external "@nestjs/serve-static" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@nestjs/serve-static");

/***/ }),

/***/ "@nestjs/swagger":
/*!**********************************!*\
  !*** external "@nestjs/swagger" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@nestjs/swagger");

/***/ }),

/***/ "@nestjs/typeorm":
/*!**********************************!*\
  !*** external "@nestjs/typeorm" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@nestjs/typeorm");

/***/ }),

/***/ "@nestjs/websockets":
/*!*************************************!*\
  !*** external "@nestjs/websockets" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@nestjs/websockets");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("bcrypt");

/***/ }),

/***/ "class-transformer":
/*!************************************!*\
  !*** external "class-transformer" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("class-transformer");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("dotenv");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("jsonwebtoken");

/***/ }),

/***/ "multer":
/*!*************************!*\
  !*** external "multer" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("multer");

/***/ }),

/***/ "nestjs-typeorm-paginate":
/*!******************************************!*\
  !*** external "nestjs-typeorm-paginate" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("nestjs-typeorm-paginate");

/***/ }),

/***/ "socket.io":
/*!****************************!*\
  !*** external "socket.io" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("socket.io");

/***/ }),

/***/ "typeorm":
/*!**************************!*\
  !*** external "typeorm" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("typeorm");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 		} catch(e) {
/******/ 			module.error = e;
/******/ 			throw e;
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("main." + __webpack_require__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("76e1717c393301f7bba5")
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises = 0;
/******/ 		var blockingPromisesWaiting = [];
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId, fetchPriority) {
/******/ 				return trackBlockingPromise(require.e(chunkId, fetchPriority));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				// inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/ 		
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		
/******/ 			return Promise.all(results).then(function () {});
/******/ 		}
/******/ 		
/******/ 		function unblock() {
/******/ 			if (--blockingPromises === 0) {
/******/ 				setStatus("ready").then(function () {
/******/ 					if (blockingPromises === 0) {
/******/ 						var list = blockingPromisesWaiting;
/******/ 						blockingPromisesWaiting = [];
/******/ 						for (var i = 0; i < list.length; i++) {
/******/ 							list[i]();
/******/ 						}
/******/ 					}
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 				/* fallthrough */
/******/ 				case "prepare":
/******/ 					blockingPromises++;
/******/ 					promise.then(unblock, unblock);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises === 0) return fn();
/******/ 			return new Promise(function (resolve) {
/******/ 				blockingPromisesWaiting.push(function () {
/******/ 					resolve(fn());
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			return setStatus("check")
/******/ 				.then(__webpack_require__.hmrM)
/******/ 				.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 							function () {
/******/ 								return null;
/******/ 							}
/******/ 						);
/******/ 					}
/******/ 		
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/ 		
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/ 							) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules
/******/ 								);
/******/ 								return promises;
/******/ 							}, [])
/******/ 						).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
/******/ 								}
/******/ 								return setStatus("ready").then(function () {
/******/ 									return updatedModules;
/******/ 								});
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error(
/******/ 						"apply() is only allowed in ready status (state: " +
/******/ 							currentStatus +
/******/ 							")"
/******/ 					);
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 				// handle errors in accept handlers and self accepted module load
/******/ 				if (error) {
/******/ 					return setStatus("fail").then(function () {
/******/ 						throw error;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				if (queuedInvalidatedModules) {
/******/ 					return internalApply(options).then(function (list) {
/******/ 						outdatedModules.forEach(function (moduleId) {
/******/ 							if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 						});
/******/ 						return list;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				return setStatus("idle").then(function () {
/******/ 					return outdatedModules;
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/require chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "loaded", otherwise not loaded yet
/******/ 		var installedChunks = __webpack_require__.hmrS_require = __webpack_require__.hmrS_require || {
/******/ 			"main": 1
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no chunk install function needed
/******/ 		
/******/ 		// no chunk loading
/******/ 		
/******/ 		// no external install chunk
/******/ 		
/******/ 		function loadUpdateChunk(chunkId, updatedModulesList) {
/******/ 			var update = require("./" + __webpack_require__.hu(chunkId));
/******/ 			var updatedModules = update.modules;
/******/ 			var runtime = update.runtime;
/******/ 			for(var moduleId in updatedModules) {
/******/ 				if(__webpack_require__.o(updatedModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = updatedModules[moduleId];
/******/ 					if(updatedModulesList) updatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 		}
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.requireHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result = newModuleFactory
/******/ 						? getAffectedModuleEffects(moduleId)
/******/ 						: {
/******/ 								type: "disposed",
/******/ 								moduleId: moduleId
/******/ 							};
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err1) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err1,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err1);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.require = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.require = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				} else {
/******/ 					currentUpdateChunks[chunkId] = false;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.requireHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						!currentUpdateChunks[chunkId]
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = function() {
/******/ 			return Promise.resolve().then(function() {
/******/ 				return require("./" + __webpack_require__.hmrF());
/******/ 			})['catch'](function(err) { if(err.code !== 'MODULE_NOT_FOUND') throw err; });
/******/ 		}
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_require__("./node_modules/webpack/hot/poll.js?100");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.ts");
/******/ 	
/******/ })()
;