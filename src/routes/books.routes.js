const express = require("express");
const router = express.Router();
const { addBook , getBook } = require("./../controllers/books.controller");


router.post("/",addBook);
router.get("/",getBook);
router.get("/:id",getBook);
// router.put("/",updateBook);


module.exports = router;