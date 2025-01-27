"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const mongoose_1 = require("@nestjs/mongoose");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const categories_module_1 = require("./modules/categories/categories.module");
const subcategories_module_1 = require("./modules/subcategories/subcategories.module");
const teachers_module_1 = require("./modules/teachers/teachers.module");
const offers_module_1 = require("./modules/offers/offers.module");
const documents_module_1 = require("./modules/documents/documents.module");
const users_module_1 = require("./modules/users/users.module");
const photos_module_1 = require("./modules/photos/photos.module");
const auth_module_1 = require("./modules/auth/auth.module");
const serve_static_1 = require("@nestjs/serve-static");
const path_1 = require("path");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            mongoose_1.MongooseModule.forRootAsync({
                imports: [config_1.ConfigModule],
                useFactory: (configService) => ({
                    uri: configService.get('MONGO_DB'),
                    dbName: configService.get('DB_NAME'),
                }),
                inject: [config_1.ConfigService],
            }),
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: (0, path_1.join)(__dirname, '..', 'public'),
                serveRoot: '/',
            }),
            categories_module_1.CategoriesModule,
            subcategories_module_1.SubcategoriesModule,
            teachers_module_1.TeachersModule,
            offers_module_1.OffersModule,
            documents_module_1.DocumentsModule,
            users_module_1.UsersModule,
            photos_module_1.PhotosModule,
            auth_module_1.AuthModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map