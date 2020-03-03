import { Router } from "express";
import * as Customer from "./controllers/customer";
import { Post } from "./models/validation";


const SIP_AUTH_USER = "/users/authenticate";
const SIP_GET_PASSWORD = "/users/GetPassword";
const SIP_REGISTER = "/users/register";
const SIP_UPDATE = "/users/updateStatus";
const SIP_DELETE = "/users/deleteUser";
const SIP_GET_USER = "/users/getUser";
const SIP_COMMAN = "";

//1. sip_authenticate_user_registration
/*1)sprintf(str,"Exec sip_authenticate_user_registration '%s','%s','%s','%s'",
                                pSipMsg->callid.c_str(),
                                pSipMsg->domainname.c_str(),
                                pSipMsg->contactaddress.c_str(),
                                pSipMsg->username.c_str()); */

/*2) sprintf(pass_str,"Exec sip_get_user_password '%s','%s','%s','%s','%s'",
                                pSipMsg->mobileno.c_str(),
                                pSipMsg->domainname.c_str(),
                                pSipMsg->devicetype.c_str(),
                                pSipMsg->deviceid.c_str(),
                                pSipMsg->username.c_str());*/
/*sip_update_registered_status 
5) sprintf(str,"Exec sip_update_registered_status  '%s','%s','%s','%d'",
                                pSipMsg->callid.c_str(),
                                pSipMsg->domainname.c_str(),
                                pSipMsg->username.c_str(),
                                pSipMsg->status);*/
/*  5. sip_delete_user_registration 
6) sprintf(str,"Exec sip_delete_user_registration  '%s','%s','%s',%s",
                                pSipMsg->callid.c_str(),
                                pSipMsg->domainname.c_str(),
                                pSipMsg->contactaddress.c_str(),
                                pSipMsg->username.c_str());

6) sip_get_Registered_user_info
*/
/*{
    "trans_id": "123wer",
    "db_name": "xgrigstrar",
    "db_operation": [
        "READ",
        "WRITE",
        "UPDATE",
        "DELETE",
        "EXECUTE"
    ],
    "table_name": "XXXXX",
    "sp_name": "sip_authenticate_user_registration",
    "input": "inuput details mentioned as below",
    "output": "output from queries",
    "affected_rows": 0,
    "msg": "any valid message from nodejs server"
} */

export const Routes = Router()
    .post(SIP_COMMAN, Customer.comman)
    .post(SIP_AUTH_USER, Customer.authenticate)
    .post(SIP_GET_PASSWORD, Customer.getPassword)
    .post(SIP_REGISTER, Customer.register)
    .post(SIP_UPDATE, Customer.updateStatus)
    .post(SIP_DELETE, Customer.deleteUser)
    .post(SIP_GET_USER, Customer.getUser);   
