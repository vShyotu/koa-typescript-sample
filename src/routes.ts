import Router from "@koa/router";

const router = new Router();

router.get("/", async (ctx) => {
  ctx.status = 200;
  ctx.body = "Hello world";
});

export default router;
