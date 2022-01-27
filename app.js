const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

app.use(cors);

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

module.exports = app;
