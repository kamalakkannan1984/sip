"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var config_1 = require("../config");
var options = {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
};
mongoose.connect(config_1.Config.mongoURL, options);
exports.DBConn = mongoose.connection
    .on("connected", function () {
    console.log("Connected to the App.");
})
    .on("disconnected", function () { return console.log("Disconnection from the App."); })
    .on("error", function (error) { return console.error("Mongoose connection error: " + error); })
    .on("error", function (error) {
    if (error.message &&
        error.message.match(/failed to connect to server .* on first connect/)) {
        setTimeout(function () {
            mongoose.connect(config_1.Config.mongoURL, options).catch(function () { });
        }, 5 * 1000);
    }
    else {
        console.error(error);
    }
})
    .on("close", function () {
    console.log("Shutting down App.");
});
//# sourceMappingURL=index.js.map