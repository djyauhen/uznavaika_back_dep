"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const cookieParser = require("cookie-parser");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use(cookieParser());
    app.enableCors({
        origin: 'http://localhost:4200',
        methods: 'GET,POST,PUT,DELETE,PATCH',
        allowedHeaders: 'Content-Type, Authorization',
        credentials: true,
        preflightContinue: false,
        optionsSuccessStatus: 204,
    });
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map