"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("./config");
exports.Settings = function (req, res, next) {
    var allowOrigin = {
        key: "Access-Control-Allow-Origin",
        value: config_1.Config.allowOriginHost
    };
    var allowHeaders = {
        key: "Access-Control-Allow-Headers",
        value: "Content-Type"
    };
    var allowCredentials = {
        key: "Access-Control-Allow-Credentials",
        value: "true"
    };
    var allowMethods = {
        key: "Access-Control-Allow-Methods",
        value: "GET, PUT, POST, DELETE, OPTIONS"
    };
    res.setHeader(allowOrigin.key, allowOrigin.value);
    res.setHeader(allowHeaders.key, allowHeaders.value);
    res.setHeader(allowCredentials.key, allowCredentials.value);
    res.setHeader(allowMethods.key, allowMethods.value);
    if ("OPTIONS" === req.method) {
        res.sendStatus(200);
    }
    else {
        next();
    }
};
//# sourceMappingURL=settings.js.map