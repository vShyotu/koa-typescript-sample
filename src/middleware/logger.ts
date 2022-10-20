import { Context, Next } from "koa";

const logger = async (ctx: Context, next: Next) => {
  const start = Date.now();

  try {
    await next();
    const ms = Date.now() - start;
    console.info(`${ctx.method} ${ctx.path} ${ctx.status} - ${ms}ms`);
  } catch (err) {
    const ms = Date.now() - start;

    if (err instanceof Error) {
      console.error(
        `Request: ${ctx.method} ${ctx.path} ${ctx.status} - ${ms}ms - ${err.stack}`
      );
    }
  }
};

export default logger;
