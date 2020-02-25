import { Schema, model } from "mongoose";
import { CustomerDocument } from "../models";

export const CustomerSchema: Schema = new Schema({
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

export const Customer = model<CustomerDocument>("users", CustomerSchema);
