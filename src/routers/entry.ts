import Router from "@koa/router";
import { get, getById, publish } from "../controllers/entry";

const router = new Router();

router.get("/", get);
router.get("/:id", getById);
router.post("/", publish);

export default router;
