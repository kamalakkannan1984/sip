"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var Customer = require("./controllers/customer");
var CUSTOMERS = "/customers";
exports.Routes = express_1.Router()
    .post(CUSTOMERS, Customer.register)
    .get(CUSTOMERS, Customer.getAll)
    .get(CUSTOMERS + "/:id", Customer.get);
//# sourceMappingURL=routes.js.map