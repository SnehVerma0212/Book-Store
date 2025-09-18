const mongoose = require("mongoose");
const { minLength } = require("zod");
const Schema = mongoose.Schema;

const bookModel = new Schema({
    title: {type: String, required: true, minLength: [3]},
    author: {type: String, require: true, minLength: [3]},
    genre: {type: String, required: true},
    publishedDate: {type: Date, required: true, min: [2000], max:[new Date().getFullYear()]}
}, { collection: "Books" });

module.exports = mongoose.model("Books",bookModel);