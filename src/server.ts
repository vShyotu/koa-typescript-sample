import app from "./app";
import envConfig from "./config/env";

const { port } = envConfig;

const server = app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});

export default server;
