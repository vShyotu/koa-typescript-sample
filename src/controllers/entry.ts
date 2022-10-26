import { Context, Request } from "koa";
import { getEntries, getEntry, publishEntry } from "../models/entry";

interface PublishRequest extends Request {
  body: {
    message: string;
  };
}

interface PublishContext extends Context {
  request: PublishRequest;
}

interface GetContext extends Context {
  params: { id: string };
}

export const get = async (ctx: Context) => {
  const result = await getEntries();

  ctx.status = 200;
  ctx.body = result;
};

export const getById = async (ctx: GetContext) => {
  const { id } = ctx.params;

  if (!id) {
    ctx.throw(400, "Error: entry.getById - missing id");
  }

  const result = await getEntry(id);

  ctx.status = 200;
  ctx.body = result;
};

export const publish = async (ctx: PublishContext) => {
  const { message } = ctx.request.body;

  if (!message) {
    ctx.throw(400, "Error: entry.publish - No message");
  }

  const result = await publishEntry(message);

  ctx.status = 201;
  ctx.body = result;
};
