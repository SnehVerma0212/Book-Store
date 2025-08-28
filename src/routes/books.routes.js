const express = require("express");
const router = express.Router();
const addBook = require("./../controllers/books.controller");


router.post("/addBook",addBook);

module.exports = router;