require("dotenv").config();
const app = require("./http/server");

const SERVER_PORT = process.env.SERVER_PORT;

app.listen(SERVER_PORT, () => {
  console.log("BackEnd server is running on port:" + SERVER_PORT);
});
