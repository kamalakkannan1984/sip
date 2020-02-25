"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
exports.CustomerSchema = new mongoose_1.Schema({
    Call_id: { type: String },
    Domain_id: { type: Number },
    Contact_address: { type: String },
    Ipaddress: { type: String },
    IpAdrress_type: { type: Number },
    Username: { type: String, required: true, lowercase: true },
    Password: { type: String, required: true },
    AAA: { type: Number },
    Registered_date: { type: Date },
    last_update: { type: Date },
    expires: { type: Number },
    Request_cseq: { type: Number },
    status: { type: Number },
    proxy_username: { type: String },
    device_type: { type: String },
    mac_address: { type: String }
});
exports.Customer = mongoose_1.model("users", exports.CustomerSchema);
//# sourceMappingURL=customer.schema.js.map