var dbconfig = require("./../dbcongfig");
var mongoose = require("mongoose");
var fs = require("fs");
var db = mongoose.connection;
db.on("error", console.error);
db.once("open", function(){
    //在这里创建你的模式和模型

});
var models_path = __dirname + "/mappings";
var modelfiles = fs.readdirSync(models_path);
modelfiles.forEach(function(file){
    require(models_path + "/" + file);
    var modelName = file.replace("Model.js", "");
    module.exports[modelName] = mongoose.model(modelName);
});
mongoose.connect(dbconfig.connectionstring);