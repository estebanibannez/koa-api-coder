const Koa = require("koa");
const koaBody = require("koa-body");
const json = require("koa-json");

const app = new Koa();

app.use(json());

require("./db/conection");

// Set up body parsing middleware
app.use(koaBody());

// Require the Router we defined in books.js
let { ProductRouter } = require("./routers/index");

// Use the Router on the sub route /books
app.use(ProductRouter.routes());

// Server listen
const PORT = 8080;
const server = app.listen(PORT, () => {
  console.log(
    `Servidor Koa escuchando en el puerto http://localhost:${
      server.address().port
    }`,
  );
});
server.on("error", (error) => console.log("Error en Servidor Koa:", error));
