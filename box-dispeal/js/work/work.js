/**
 * Created by LiteGray on 2017/7/1.
 */

var colors = ['rgba(175,175,175,0.8)', 'rgba(180,180,180,0.8)', 'rgba(185,185,185,0.8)',
              'rgba(195,195,195,0.8)', 'rgba(200,200,200,0.8)', 'rgba(205,205,205,0.8)', 'rgba(190,190,190,0.6)'];
var classes = ['class0', 'class1', 'class2', 'class3', 'class4', 'class5', 'class6'];
var query = location.search.split('=')[1];
var ul = document.querySelector('ul');
//结束,倒计时
var another = document.querySelector('#another');
var gameOver = another.querySelector('#another section');
var revTime = another.querySelector('#another time');
//时间条,分数条,home键
var other = document.querySelector('#other');
var eachTime = other.querySelector('#other time');
var listen = other.querySelector('#other em');
var home = other.querySelector('#other a');
//行列
var row = col = 10;
//二维坐标
var item = [];
//间距li
var liSpace = {};
//相同颜色,X方向相同颜色,Y方向相同颜色
var aSame = [];
var aXSame = [];
var aYSame = [];
//各个X方向消失数,各个X方向消失数到顶部,各个X方向消失数以上
var aX = [];
var aXOth = [];
var aXAbout = [];
//生成二维数组
(function () {
    for(var i=0; i<col; i++){
        item[i] = [];
        aX[i] = [];
        aXOth[i] = [];
        aXAbout = [];
    }
})();
//倒计时
startEnd();
setTimeout(function () {
    home.innerHTML = Number(query)+1;
    remainTime0(eachTime, 20);
}, 3000);
//进入页面
(function () {
//生成li
    (function () {
        var str = '';
        for(var i=0; i<col; i++){
            for(var j=0; j<row; j++){
                str += '<li></li>';
            }
        }
        ul.innerHTML = str;
    })();
    lis = ul.querySelectorAll('li');
    lis = Array.from(lis);
//转换样式
    (function () {
        lis.forEach(function (p1, p2, p3) {
            p1.style.left = p1.offsetLeft+'px';
            p1.style.top = p1.offsetTop+'px';
            setTimeout(function () {
                p1.style.position = 'absolute';
            }, 0)
        })
    })();
//生成二维坐标
    (function () {
        lis.forEach(function (p1, p2, p3) {
            p1.x = p2%col;
            p1.y = Math.floor(p2/row);
            item[p1.x].push(p1);
        });
        liSpace.t = item[0][0].offsetTop;
        liSpace.w = item[1][0].offsetLeft-item[0][0].offsetLeft;
        liSpace.h = item[0][1].offsetTop-item[0][0].offsetTop;
    })();
//生成颜色
    (function () {
        lis.forEach(function (p1, p2, p3) {
            var c = p1.style.background = colors[Math.round(Math.random()*(colors.length-1))];
            addClass(p1, c);
        });
    })();
//避免颜色
    (function () {
        lis.forEach(function (p1, p2, p3) {
            avoidColor(p1.x, p1.y);
        });
    })();
})();
//移动
(function () {
    lis.forEach(function (p1, p2, p3) {
        drag(p1);
    });
})();