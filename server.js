const express = require("express"),
  server = express(),
  port = process.env.PORT || 3000;

server.listen(port);

console.log("commerce demo RESTful API server started on: " + port);

let productsRoute = require("./routes/products");
server.use("/products", productsRoute);

// catch 404
server.use(function (req, res, next) {
  res.status(404).send("API not found!");
});
