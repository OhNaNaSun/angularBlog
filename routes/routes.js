var index = require("./index.js");
var blog = require("./blog.js");
var user = require("./user.js");
module.exports = function(app){
    app.get("/", index.index);
    app.get("/list", user.list);
    app.get("/blog", blog.list);
    app.get("/user", user.list);
    app.post("/api/signup", user.create);
    app.post("/api/login", user.login);
    app.get("/api/logout", user.logout);
    app.get("/api/checklogin", index.getLoginUser);
}