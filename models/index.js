var dbconfig = require("./../dbcongfig");
var mongoose = require("mongoose");
var fs = require("fs");
var log = require("./../lib/log");
var db = mongoose.connection;
db.on("error", function(err){
    log.error('connect to %s error: ', config.connectionstring, err.message);
    process.exit(1);
});
db.once("open", function(){
    //在这里创建你的模式和模型
    log.success('%s has been connected.', dbconfig.connectionstring)
});
var models_path = __dirname + "/mappings";
var modelfiles = fs.readdirSync(models_path);
modelfiles.forEach(function(file){
    require(models_path + "/" + file);
    var modelName = file.replace("Model.js", "");
    module.exports[modelName] = mongoose.model(modelName);
});
mongoose.connect(dbconfig.connectionstring);