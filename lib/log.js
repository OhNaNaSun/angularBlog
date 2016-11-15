/*
* 设置打印日志的样式
* */
require("colors");
var slice = Array.prototype.slice;
module.exports = {
    create: function(message){
        var args = slice.call(arguments);
        args[0] = "Create:".green.inverse + message.green;
        console.log.apply(console, args);
    },
    patch: function(message){
        var args = slice.call(arguments);
        args[0] = "Patch:".blue.inverse + message.blue;
        console.log.apply(console, args);
    },
    warn: function(message){
        var args = slice.call(arguments);
        args[0] = "Warn:".yellow.inverse + message.yellow;
        console.log.apply(console, args);
    },
    error: function(message){
        var args = slice.call(arguments);
        args[0] = "Error:".res.inverse + message.red;
        console.log.apply(console, args);
    },
    success: function(message){
        var args = slice.call(arguments);
        args[0] = "Success:".green.inverse + message.green;
        console.log.apply(console, args);
    },
    version: function(message){
        var args = slice.call(arguments);
        args[0] = "Version:".green.inverse + message.green;
        console.log.apply(console, args);
    },
    title: function(message){
        var args = slice.call(arguments);
        args[0] = "Title:".green.inverse + message.green;
        console.log.apply(console, args);
    }

}