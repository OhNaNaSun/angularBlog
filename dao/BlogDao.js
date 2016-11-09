var DaoBase = require("./DaoBase.js"),
    models = require("./../models"),
    Blog = models.Blog;//Blog的模型类Model即mongoose.model('Model', Schema);
var BlogDao = new DaoBase(Blog);//一个类，对传入的模型的数据的CRUD
module.exports = BlogDao;
