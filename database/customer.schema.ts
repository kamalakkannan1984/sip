import { Schema, model } from "mongoose";
import { CustomerDocument, SipDomainDocument } from "../models";

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

export const SipDomainSchema: Schema = new Schema({
    domain_id: { type: Number },
    domain_name: { type: String },
    active: { type: Number }
});

export const Customer = model<CustomerDocument>("Customer", CustomerSchema, 'Sip_Register');
export const SipDomain = model<SipDomainDocument>("SipDomain", SipDomainSchema, 'Sip_domain');

/*
Call_id
domain_name
Contact_address
Ipaddress
IpAddress_type
Username
Password
AAA
expires
Request_cseq
status
proxy_username
device_type
mac_address
*/
/*
 {
        "_id": "5dfe1d508196955ac051310a",
        "Call_id": "121d5332-408f-1238-f1b4-83897910f8f9",
        "Domain_id": 8,
        "Contact_address": "79.11.57.204",
        "Ipaddress": "79.11.57.204",
        "IpAdrress_type": 0,
        "Username": "\"393512758844\"",
        "Password": "6266",
        "AAA": 1,
        "Registered_date": "2019-08-23T16:53:24.893Z",
        "last_update": "2019-08-23T16:53:24.893Z",
        "expires": 3600,
        "Request_cseq": 8743909,
        "status": 1,
        "proxy_username": "",
        "device_type": "",
        "mac_address": ""
    },*/
/*mongoose.model('Question',
               new Schema({ url: String, text: String, id: Number}),
               'question');     // collection name */
