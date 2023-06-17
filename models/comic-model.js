//Require mongoose
//Create a const of schema and equate it to mongoose
const { Schema, default: mongoose } = require("mongoose");


const comicSchema = new Schema({
    title: String,
    author: String,
    publisher: String,
    genre: String,
    pages: Number,
    rating: Number,
    synopsis: String,
    image: String, 
});
const Comic = mongoose.model("Comic", comicSchema)
module.exports = Comic