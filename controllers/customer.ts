import { Request, Response, NextFunction } from "express";
import { CustomerModel } from "../models/customer";
import * as Customer from "../queries/customer";

/**
 * Register a new customer
 * @param req
 * @param res
 */
export const register = async (req: Request, res: Response) => {
    const user: CustomerModel = req.body;
    try {
        await Customer.getDomainId(req.body.domain_name).then(domain_id => {
            user.Domain_id = domain_id;
            const newUser = Customer.createUser(user);
            return res.status(200).send({ status: 201, msg: "Sip registration completed" });
        }).catch(err => {
            console.log(err);
            return res.status(400).send(err);
        });

    } catch (err) {
        return res.status(err.status).send(err.msg);
    }
};

/**
 * Get all customer
 * @param req
 * @param res
 */
export async function getAll(req: Request, res: Response) {
    try {
        const users = await Customer.getAll();
        return res.status(200).send(users);
    } catch (err) {
        return res.status(err.status).send(err.msg);
    }
}

/**
 * Get individual customer
 * @param req
 * @param res
 */
export async function get(req: Request, res: Response) {
    const username = req.params.username;
    try {
        const users = await Customer.get(username);
        return res.status(200).send(users);
    } catch (err) {
        return res.status(err.status).send(err.msg);
    }
}
