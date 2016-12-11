define(["app"], function(app){
  return app.constant("sideBarConfig", [
    {
        title: "爬取数据",
        list: [
            {
                title:"慕课网nodejs课程",
                url: "#/rong/listdata",
                tag: ""
            }
        ]
    },
    {
        title: "Blog列表",
        list: [
            {
                title:"列表数据一",
                url: "",
                tag: ""
            }
        ]
    }
  ])
})