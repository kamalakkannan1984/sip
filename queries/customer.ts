import { CustomerModel } from "../models/customer";
import { Customer, SipDomain } from "../database/customer.schema";
import { SipDomainModel } from "../models/sipDomain";




/**
 * Query for create user
 * @param userData
 */
export async function createUser(userData: CustomerModel): Promise<CustomerModel> {
    const user = new Customer(userData);
    try {
        //const newUser = await user.save();
        //
        Customer.findOneAndUpdate(
            { Call_id: userData.Call_id, Domain_id: userData.Domain_id, Username: userData.Username, device_type: userData.device_type }, // find a document with that filter
            userData, // document to insert when nothing was found
            { upsert: true, new: true, runValidators: true }, // options
            async (err, doc) => { // callback
                if (err) {
                    // handle error
                    return Promise.reject(err.message);
                } else {
                    // handle document
                    return await Promise.resolve(doc);
                }
            }
        );
        //

    } catch (err) {
        return Promise.reject(err.message);
    }
}

/**
 * Query for find user
 * @param username
 */
export function findOne(username: any): any {
    return Customer.findOne({ Username: username }).then((userModel: any) => {
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
export function getAll() {
    return new Promise((resolve, reject) => {
        Customer.find({}, (error, requestsArray) => {
            console.log(error);
            if (error) {
                console.error("Error ", error);
                reject({
                    status: 400,
                    msg: "[getAll] Error getting all users"
                });
            }
            resolve(requestsArray);
        })
            .select("Username Password")
            .sort({ createdDate: -1 });
    });

}

/**
 * Query for customer details
 * @param users
 */
export async function get(users: string): Promise<CustomerModel[]> {
    try {
        const customerModel = await Customer.findOne({ Username: users }, { _id: 0 })
            .select("Username Password")
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

export async function getDomainId(domain_name: string): Promise<number> {
    try {
        const sipDomainModel = await SipDomain.findOne({ domain_name: domain_name }, { _id: 0 })
            .select("domain_id")
            .lean();
        if (sipDomainModel == null) {
            throw new Error();
        }
        return Promise.resolve(sipDomainModel.domain_id);
    } catch (error) {
        return Promise.reject({
            status: 400,
            msg: `domain is invalid`
        })
    }
}

