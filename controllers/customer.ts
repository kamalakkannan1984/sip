import { Request, Response, NextFunction } from "express";
import { CustomerModel } from "../models/customer";
import * as Customer from "../queries/customer";


//START SIP USERS
export const comman = async (req: Request, res: Response) => {
    try {
        const body = req.body;
        console.log(body);
        const find = body.sp_name === 'sip_authenticate_user_registration' ? auth(body) : new Error();
        console.log(find);
        return res.status(200).send({ response: find });
    } catch (err) {
        return res.status(err.status).send(err.msg);
    }
}

function auth(body: any) {
    return body;
}



export const authenticate = async (req: Request, res: Response) => {
    try {
        return res.status(200).send();
    } catch (err) {
        return res.status(err.status).send(err.msg);
    }
}

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
            user.Registered_date = new Date();
            user.last_update = new Date();
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
 *  getPassword
 * @param req 
 * @param res 
 */
export const getPassword = async (req: Request, res: Response) => {
    try {
        return res.status(200).send();
    } catch (err) {
        return res.status(err.status).send(err.msg);
    }
}

/**
 * updateStatus
 * @param req 
 * @param res 
 */
export const updateStatus = async (req: Request, res: Response) => {
    try {
        return res.status(200).send();
    } catch (err) {
        return res.status(err.status).send(err.msg);
    }
}

/**
 * deleteUser
 * @param req 
 * @param res 
 */
export const deleteUser = async (req: Request, res: Response) => {
    try {
        return res.status(200).send();
    } catch (err) {
        return res.status(err.status).send(err.msg);
    }
}

/**
 * getUser
 * @param req 
 * @param res 
 */
export const getUser = async (req: Request, res: Response) => {
    try {
        return res.status(200).send();
    } catch (err) {
        return res.status(err.status).send(err.msg);
    }
}

//END  SIP USERS

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
