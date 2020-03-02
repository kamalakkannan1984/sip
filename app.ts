import * as express from "express";
import * as bodyParser from "body-parser";
import { Config } from "./config";
import { Routes } from "./routes";
import { Settings } from "./settings";
import "./database";

import * as swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from "./swagger.json";


export const httpApp = express()
    .use(Settings)
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: true }))
    .use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
    .use(Config.apiPrefix, Routes)
    .disable("x-powered-by")
    .set("x-powered-by", false);