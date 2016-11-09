var mongoose = require("mongoose");
var crypto = require("crypto");
var UsersSchema = new mongoose.Schema({
    name: String,
    hash_password: String,
    role: String
})
UsersSchema.virtual("password").set(function(password){
    this.hash_password = encryptPassword(password);
})
UsersSchema.method("authenticate", function(plainText){
    return encryptPassword(plainText) === this.hash_password;
})
function encryptPassword(password){
    return crypto.createHash("md5").update(password).digest("base64");
}
mongoose.model("Users", UsersSchema);