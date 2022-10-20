import app from "./app";
import config from "./config";

const { port } = config;

const server = app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});

export default server;
