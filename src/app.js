const express = require("express");
const app = express();
const connectdb = require("./config/db");
const bookRoutes = require("./routes/books.routes");


app.use(express.json());

app.use("/api/v1/book",bookRoutes);

connectdb();

module.exports = app;