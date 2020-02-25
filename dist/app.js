"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var bodyParser = require("body-parser");
var config_1 = require("./config");
var routes_1 = require("./routes");
var settings_1 = require("./settings");
require("./database");
exports.httpApp = express()
    .use(settings_1.Settings)
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: true }))
    .use(config_1.Config.apiPrefix, routes_1.Routes)
    .disable("x-powered-by")
    .set("x-powered-by", false);
//# sourceMappingURL=app.js.map