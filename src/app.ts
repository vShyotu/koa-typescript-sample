import Koa from "koa";
import cors from "@koa/cors";
import bodyParser from "koa-bodyparser";

import logger from "./middleware/logger";
import router from "./routers/entry";

const app = new Koa();

app.use(cors());
app.use(bodyParser());
app.use(logger);
app.use(router.routes());
app.use(router.allowedMethods());

export default app;
