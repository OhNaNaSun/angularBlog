var path = require("path");
var index = function (req, res) {
    // var html = path.join(__dirname + "/../views/index.html");join会先做字符串拼接
    var html = path.resolve("./views/index.html");//或者
    res.sendFile(html)
};
function getLoginUser(req, res){
    res.json(req.session["user"] || {})
}
module.exports = {
    index: index,
    getLoginUser: getLoginUser
}