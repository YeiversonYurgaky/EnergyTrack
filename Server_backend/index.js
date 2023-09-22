//npm nodemon -D para que sea solo desarrollo

const http = require("http"); //así se importa en express
const app = require("./app");

const server = http.createServer(app);

server.listen(80, () => {
  console.log("Server Up, Port:", 80);
});
