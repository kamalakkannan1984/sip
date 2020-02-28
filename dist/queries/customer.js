"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var customer_schema_1 = require("../database/customer.schema");
/**
 * Query for create user
 * @param userData
 */
function createUser(userData) {
    return __awaiter(this, void 0, void 0, function () {
        var user;
        var _this = this;
        return __generator(this, function (_a) {
            user = new customer_schema_1.Customer(userData);
            try {
                //const newUser = await user.save();
                //
                customer_schema_1.Customer.findOneAndUpdate({ Call_id: userData.Call_id, Domain_id: userData.Domain_id, Username: userData.Username, device_type: userData.device_type }, // find a document with that filter
                userData, // document to insert when nothing was found
                { upsert: true, new: true, runValidators: true }, // options
                function (err, doc) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                if (!err) return [3 /*break*/, 1];
                                // handle error
                                return [2 /*return*/, Promise.reject(err.message)];
                            case 1: return [4 /*yield*/, Promise.resolve(doc)];
                            case 2: 
                            // handle document
                            return [2 /*return*/, _a.sent()];
                        }
                    });
                }); });
                //
            }
            catch (err) {
                return [2 /*return*/, Promise.reject(err.message)];
            }
            return [2 /*return*/];
        });
    });
}
exports.createUser = createUser;
/**
 * Query for find user
 * @param username
 */
function findOne(username) {
    return customer_schema_1.Customer.findOne({ username: username }).then(function (userModel) {
        if (userModel === null) {
            return Promise.reject({
                status: 400,
                message: "User: \"" + username + "\" does not exist."
            });
        }
        return userModel;
    });
}
exports.findOne = findOne;
/**
 * Query for get all customer
 */
function getAll() {
    return new Promise(function (resolve, reject) {
        customer_schema_1.Customer.find({}, function (error, requestsArray) {
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
exports.getAll = getAll;
/**
 * Query for customer details
 * @param users
 */
function get(users) {
    return __awaiter(this, void 0, void 0, function () {
        var customerModel, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, customer_schema_1.Customer.findOne({ _id: users }, { _id: 0 })
                            .select("username password")
                            .lean()];
                case 1:
                    customerModel = _a.sent();
                    if (customerModel === null) {
                        throw new Error();
                    }
                    return [2 /*return*/, Promise.resolve(customerModel)];
                case 2:
                    error_1 = _a.sent();
                    return [4 /*yield*/, Promise.reject({
                            status: 400,
                            msg: "Request: " + users + " does not exist."
                        })];
                case 3: return [2 /*return*/, _a.sent()];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.get = get;
function getDomainId(domain_name) {
    return __awaiter(this, void 0, void 0, function () {
        var sipDomainModel, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, customer_schema_1.SipDomain.findOne({ domain_name: domain_name }, { _id: 0 })
                            .select("domain_id")
                            .lean()];
                case 1:
                    sipDomainModel = _a.sent();
                    if (sipDomainModel == null) {
                        throw new Error();
                    }
                    return [2 /*return*/, Promise.resolve(sipDomainModel.domain_id)];
                case 2:
                    error_2 = _a.sent();
                    return [2 /*return*/, Promise.reject({
                            status: 400,
                            msg: "domain is invalid"
                        })];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.getDomainId = getDomainId;
//# sourceMappingURL=customer.js.map