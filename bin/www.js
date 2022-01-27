const http = require("http");
const app = require("../app");

process.addListener("uncaughtException", (err) => {
  console.log("UNCAUGHT EXCEPTION: \n" + err);
});

function normalizePort(val) {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }

  if (port > 0) {
    return port;
  }

  return false;
}

const server = http.createServer(app);

server.on("listening", onListening);
server.on("error", onError);

server.listen(normalizePort(process.env.PORT || 8080));

function onListening() {
  const addr = server.address();
  const bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
  console.log("Listening on " + bind);
}

function onError(err) {
  const addr = server.address();
  const bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;

  switch (err.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
    default:
      console.error(bind + " error: " + err.message);
  }
}

process.addListener("unhandledRejection", function (err) {
  console.error("UNHANDLED REJECTION: \n" + err);
});
