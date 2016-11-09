var BlogDao = require("../dao/BlogDao.js");//接口
module.exports.list = function(req, res){
    BlogDao.getAll(function(err, blogs){
        res.send(blogs);//传数据，不是渲染页面
    })
}