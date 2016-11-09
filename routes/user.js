var UsersModel = require("../models/index.js").Users;

function list(req, res){
    res.send("respond with a resource");
}
function create(req, res){
    var createUser = new UsersModel({
        name: req.body.name,
        password: req.body.password,
        role: "guest"
    });
    UsersModel.findOne({name: req.body.name }, function(err, user){
        if(err) return res.json({err: err});
        if(user) {
            return res.json({err: "用户名已经存在"})
        }
        createUser.save(function(err, user){
            if(err){
                return res.json({err: err})
            }
            req.session["user"] = user;
            res.json({"user": user});
        })
    })
}
function login(req, res){
    UsersModel.findOne({name: req.body.name}, function(err, user){
        if(err) return res.json({err: err})
        if(!user){
            return res.json({err: "用户名不存在！"})
        }
        if(!user.authenticate(req.body.password)){
            return res.json({err: "密码错误"})
        }
        req.session["user"] = user;
        res.json({"user": user});
    })
}
function logout(req, res){
    req.session["user"] = null;
    res.redirect("/");
}
module.exports = {
    list: list,
    create: create,
    login: login,
    logout: logout
}