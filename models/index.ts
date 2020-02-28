import { Document } from "mongoose";
import { CustomerModel } from "./customer";
import { SipDomainModel } from "./sipDomain";

export interface CustomerDocument extends CustomerModel, Document { }
export interface SipDomainDocument extends SipDomainModel, Document { }
