"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const process_1 = require("process");
const getSettings = () => ({
    MONGO_DB: process_1.default.env.MONGO_DB,
    DB_NAME: process_1.default.env.DB_NAME,
    JWT_ACCESS_SECRET: process_1.default.env.JWT_ACCESS_SECRET,
    JWT_REFRESH_SECRET: process_1.default.env.JWT_REFRESH_SECRET,
});
exports.default = getSettings;
//# sourceMappingURL=configuration.type.js.map