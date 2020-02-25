export class Config {
    static env = process.env.NODE_ENV;
    static httpPort = 4200;
    static sessionSecret = "ssecret";
    static sessionStoreHost = "127.0.0.1";
    static mongoURL = `mongodb://10.22.7.230:27017/XGREGISTAR`;
    static apiPrefix = "/api";
    static allowOriginHost = "http://localhost:3000";
}

