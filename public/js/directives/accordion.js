var expanderModule = angular.module("expanderModule", []);
expanderModule.controller("expanderController", function($scope){
    $scope.expanders = [
        {
            title : "点击展开1",
            text: "这里是内容1"
        },
        {
            title : "点击展开2",
            text: "这里是内容2"
        },
        {
            title : "点击展开3",
            text: "这里是内容3"
        }
    ]
    $scope.checklistArray = [
        {"name": "option1", "value": "yes"},
        {"name": "option2", "value": "yes"},
        {"name": "option3", "value": "yes"}
    ]
})
expanderModule.directive("accordion", function(){
    return {
        restrict: "AE",
        replace: true,
        transclude: true,
        template: "<div ng-transclude></div>",
        controller: function(){//和上面的controller无关
            var expanders = [];
            this.gotOpened = function(selectExpander){
                angular.forEach(expanders, function(expander){
                    if(expander !== selectExpander){
                        expander.showMe = false;
                    }
                })
            }
            this.addExpander = function(expander){
                expanders.push(expander)
            }
        }
    }
})
expanderModule.directive("expander", function(){
    return {
        restrict: "AE",
        replace: true,
        transclude: true,
        require: "^?accordion",
        /*? 如果在当前指令中没有找到所需要的控制器，会将null作为传给link函数的第四个参数。
         ^ 如果添加了^前缀，指令会在上游的指令链中查找require参数所指定的控制器。
         ?^ 将前面两个选项的行为组合起来，我们可选择地加载需要的指令并在父指令链中进行查找。*/
        scope: {
            title: "=expanderTitle"//title取expenderTitle上的属性值
        },
        template:
        "<div>" +
        "<p class='bg-primary title text-left' ng-click='toggle()'>{{title}}</p>" +
        "<p class='bg-primary body text-left' ng-show='showMe' ng-transclude>" +
        "</p>" +
        "</div>",
        link: function(scope, element, attrs, accordionCtrl){
            //console.log(accordionCtrl)
            scope.showMe  = false;
            accordionCtrl.addExpander(scope);
            scope.toggle = function(){
                scope.showMe = !scope.showMe;
                accordionCtrl.gotOpened(scope);
            }
        }
    }
})