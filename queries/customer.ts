import { CustomerModel } from "../models/customer";
import { Customer } from "../database/customer.schema";


/**
 * Query for create user
 * @param userData
 */
export async function createUser(userData: CustomerModel): Promise<CustomerModel> {
    const user = new Customer(userData);
    try {
        const newUser = await user.save();
        return await Promise.resolve(newUser);
    } catch (err) {
        return Promise.reject(err.message);
    }
}

/**
 * Query for find user
 * @param username
 */
export function findOne(username: any): any {
    return Customer.findOne({ username: username }).then((userModel: any) => {
        if (userModel === null) {
            return Promise.reject({
                status: 400,
                message: `User: "${username}" does not exist.`
            });
        }
        return userModel;
    });
}

/**
 * Query for get all customer
 */
export function getAll(): Promise<any> {
    return new Promise((resolve, reject) => {
        Customer.find({}, (error, requestsArray) => {
            if (error) {
                console.error("Error ", error);
                reject({
                    status: 400,
                    msg: "[getAll] Error getting all users"
                });
            }
            resolve(requestsArray);
        })
            .select("username password")
            .sort({ date: -1 });
    });
}

/**
 * Query for customer details
 * @param users
 */
export async function get(users: string): Promise<CustomerModel[]> {
    try {
        const customerModel = await Customer.findOne({ _id: users }, { _id: 0 })
            .select("username password")
            .lean();
        if (customerModel === null) {
            throw new Error();
        }
        return Promise.resolve(customerModel);
    } catch (error) {
        return await Promise.reject({
            status: 400,
            msg: `Request: ${users} does not exist.`
        });
    }
}

