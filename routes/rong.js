var moocLessonData = require("../models/rong/moocLessonData");
function listdata(req, res){
    var chapters = moocLessonData[1];//348
    var videos = [];
    chapters.forEach(function(item, index){
        videos = videos.concat(item.videos);
    })
    var data = {
        title: "进击Node.js基础（1-4）",
        videos: videos
    }
    res.json({
        code: 0,
        data: data
    })
}
module.exports = {
    listdata: listdata
}