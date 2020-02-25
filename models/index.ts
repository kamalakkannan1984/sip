import { Document } from "mongoose";
import { CustomerModel } from "./customer";

export interface CustomerDocument extends CustomerModel, Document { }
