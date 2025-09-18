const express = require("express");
const router = express.Router();
const { addBook , getBook , updateBook , deleteBook } = require("./../controllers/books.controller");


router.post("/",addBook);
router.get("/",getBook);
router.get("/:id",getBook);
router.put("/:id",updateBook);
router.delete("/:id",deleteBook);

module.exports = router;