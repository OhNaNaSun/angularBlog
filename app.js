var http = require("http");
var path = require("path");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var session = require("express-session");
var express = require("express");
var logger = require("morgan");
var compression = require("compression");
var errorhandler = require("errorhandler");
var favicon = require("serve-favicon");
var app = express();
app.use(logger("dev"));
app.use(compression());
app.use(favicon(__dirname + '/public/favicon.ico'));
//模版的目录
app.set("views", __dirname + "／views");
//将模板引擎用于 Express
app.set("view engine", "html");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cookieParser());
app.use(session({
    secret: 'angularblogsession', // 建议使用 128 个字符的随机字符串
    cookie: { maxAge: 60 * 1000 * 60 * 24 * 30 },//30 days
    maxAge: Date.now() + (30 * 86400 * 1000),
    expires: new Date(Date.now() + (30 * 86400 * 1000)),
    rolling: true,
    resave: true,
    saveUninitialized: true
}))
var router = require("./routes/routes");

// only use in development
app.use(function(err, req, res, next) {
    if (process.env.NODE_ENV === 'development') {
        return errorhandler(err, req, res, next);
    } else {
        res.sendStatus(401);
    }
});
//这两个的顺序要这样
router(app);
app.use(express.static('public'));

http.createServer(app).listen(2016, function(){
    console.log("angularBlog 启动 ")
});