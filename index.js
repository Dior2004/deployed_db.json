import jsonServer from "json-server"; // importing json server library
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const midlewares = jsonServer.defaults();
const port = process.env.PORT || 8080;

server.use(midlewares);
server.use(router);

server.listen(port);
