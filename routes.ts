import { Router } from "express";
import * as Customer from "./controllers/customer";


const CUSTOMERS = "/customers";

export const Routes = Router()
    .post(CUSTOMERS, Customer.register)
    .get(CUSTOMERS, Customer.getAll)
    .get(
        `${CUSTOMERS}/:id`,
        Customer.get
    );
