"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("http");
var app_1 = require("./app");
var app = http.createServer(app_1.httpApp);
var port = 3000 || process.env.PORT;
app.listen(port, function () {
    // tslint:disable-next-line:no-console
    console.log("server started at http://localhost:" + port);
});
//# sourceMappingURL=index.js.map