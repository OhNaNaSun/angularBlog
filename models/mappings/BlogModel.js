var mongoose = require("mongoose");
var blogSchema = new mongoose.Schema({
    title: {type: String},
    releaseYear: Number
})
mongoose.model("Blog", blogSchema);