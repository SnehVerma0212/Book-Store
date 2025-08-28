const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookModel = new Schema({
    title: {type: String, required: true},
    author: {type: String, require: true},
    genre: {type: String, required: true},
    publishedDate: {type: Date, required: true}
}, { collection: "Books" });

module.exports = mongoose.model("Books",bookModel);