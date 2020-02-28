"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Config = /** @class */ (function () {
    function Config() {
    }
    Config.env = process.env.NODE_ENV;
    Config.httpPort = 4200;
    Config.sessionSecret = "ssecret";
    Config.sessionStoreHost = "127.0.0.1";
    Config.mongoURL = "mongodb://java:javadb@10.22.7.230:27017/XGREGISTAR";
    Config.apiPrefix = "/api";
    Config.allowOriginHost = "http://localhost:3000";
    return Config;
}());
exports.Config = Config;
//# sourceMappingURL=config.js.map