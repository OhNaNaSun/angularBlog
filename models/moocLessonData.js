var http = require("http");
var cheerio = require("cheerio");
var Promise = require("bluebird");
var url = "http://www.imooc.com/learn/348";
var baseUrl = "http://www.imooc.com/learn/";
var courseIdArray = [
    "637",
    "348",
    "259",
    "197",
    "134"
];
//promiseFiles : promise集合
var promiseFiles = [];
courseIdArray.forEach(function(item){
    promiseFiles.push(getPageData(baseUrl + item))
})
Promise.all(promiseFiles).then(function(pages) {
    pages.forEach(function(item, index){
        console.log("--------------------第" + index + "个课程--------------------")
        printData(filterchapter(item));
    })
});
function getPageData(url){
    return new Promise(function(resolve, reject){
        http.get(url, function(res){
            var html = "";
            res.on("data", function(data){
                html += data;
            })
            res.on("end", function(){
                resolve(html);
                /*var htmlData = filterchapter(html);
                 printData(htmlData);*/
            })
        }).on("error", function(e){
            reject(e);
            console.log("获取课程数据错误");
        })
    })
}
function filterchapter(html){
    var $ = cheerio.load(html);
    var chapters = $(".chapter");
    var chapterDatas = [];
    chapters.each(function(item){
        var chapter = $(this);
        var chapterTitle = chapter.find("strong").text().replace(/[\r\n\s]/g,"");
        var chapterData = {
            title: chapterTitle,
            videos: []
        }
        var videos = chapter.find(".video").children("li");
        videos.each(function(item){
            var video = $(this);
            var videoTitle = video.find(".J-media-item").text().replace(/[\r\n\s]/g,"");
            var videoId = video.find(".J-media-item").attr("href").split("video/")[1].replace(/[\r\n\s]/g,"");
            chapterData.videos.push({
                title: videoTitle,
                id: videoId
            })
        })
        chapterDatas.push(chapterData)
    })
    return chapterDatas;
}
function printData(data){
    data.forEach(function(item){
        var title = item.title;
        console.log("chapterTitle: " + title);
        item.videos.forEach(function(item){
            console.log("[" + item.id + "]:"  + item.title);
        })
    })
}

