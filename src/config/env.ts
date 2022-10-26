import * as dotenv from "dotenv";
import { getString } from "../utils/get-env";

dotenv.config();

const config = {
  port: getString("PORT") || 5000,
};

export default config;
