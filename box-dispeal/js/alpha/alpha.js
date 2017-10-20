/**
 * Created by LiteGray on 2017/7/2.
 */

var scoreA,scoreB;
scoreA = scoreB = 150;
var colors = ['#f00', '#0f0', '#ff0', '#f0f', '#0ff', '#0ff'];
var classes = ['class0', 'class1', 'class2', 'class3', 'class4', 'class5', 'class6'];
var query = location.search.split('=')[1];
var container = document.querySelector('.container');
var ul = document.querySelector('.container ul');
var ol = document.querySelector('.container ol');
//结束,倒计时
var another = document.querySelector('#another');
var gameOver = another.querySelector('#another section');
var revTime = another.querySelector('#another time');
//时间条,分数条,home键
var p = document.querySelector('p');
var other = document.querySelector('#other');
var eachTime = other.querySelector('#other time');
var listen = other.querySelector('#other strong');
var home = other.querySelector('#other a');
//行列
var row = 10;
var col = 5;
// ul.onOff = true;
//ol数组
var arrol=[];
var arrolx=[];
var otharrolx=[];
var newarrol=[];
//ul数组
var arr=[];
var arrx=[];
var otharrx=[];
var newarr=[];
var prev=[];
var timer2=null;
var h=0;
// var h=ul.offsetHeight/10;
//生成5个数组
for(var j=0;j<col;j++){
	arr[j]=[];
    arrx[j]=[];
    otharrx[j]=[];
    newarr[j]=[];
    
    arrol[j]=[];
    arrolx[j]=[];
    otharrolx[j]=[];
    newarrol[j]=[];
}

(function () {
    //倒计时
    startEnd();
    //开始计时,home秒数
    (function () {
        var t = 0;
        setTimeout(function () {
            home.timer = setInterval(function () {
                home.innerText = ++t;
            }, 1000);
            // remainTime1(eachTime, 5);
            autoAlpha(4, 9);
        }, 3000);
    })();
    setInterval(function () {
        p.style.background = 'linear-gradient(to right, rgba(255,0,0,0.4) '+ 100*scoreA/(scoreA+scoreB) +'%, ' +
            'rgba(0,0,255,0.4) '+ 100*scoreA/(scoreA+scoreB) +'%)';
        if(scoreA<10 || scoreB<10){
            (function () {
                clearInterval(ol.timer);
                clearInterval(home.timer);
                container.style.zIndex = -10;
                gameOver.style.display = 'flex';
            })();
        }
    }, 50);

    //生成li
    (function () {
        var str = '';
        for(var i=0; i<col; i++){
            for(var j=0; j<row; j++){
                str += '<li></li>';
            }
        }
        ul.innerHTML = str;
        ol.innerHTML = str;
    })();
    var uLis = ul.querySelectorAll('li');
    var oLis = ol.querySelectorAll('li');
    uLis = Array.from(uLis);
    oLis = Array.from(oLis);
    h = uLis[col].offsetTop-uLis[0].offsetTop;
    //转换样式
    (function () {
        uLis.forEach(function (p1, p2, p3) {
            p1.style.left = p1.offsetLeft+'px';
            p1.style.top = p1.offsetTop+'px';
            setTimeout(function () {
                p1.style.position = 'absolute';
            }, 0)
        });
        oLis.forEach(function (p1, p2, p3) {
            p1.style.left = p1.offsetLeft+'px';
            p1.style.top = p1.offsetTop+'px';
            setTimeout(function () {
                p1.style.position = 'absolute';
            }, 0)
        });
    })();
    //生成颜色
    (function () {
        uLis.forEach(function (p1, p2, p3) {
                var c = p1.style.background = colors[Math.round(Math.random()*(colors.length-1))];
                addClass(p1, c);
                arr[p2%col].push(p1);
		        p1.x=p2%5;
		        p1.y=Math.floor(p2/5);
		        p1.onclick=function(){
                    // remainTime1(eachTime, 5);
                    // if(ul.onOff){
                    //     ul.onOff = false;
                    var newdata=samecolor(this.x,this.y,arr);
                    var big = findMax(newdata);
                    if(newdata.length>1){
                    scoreA += newdata.length;
                    scoreB = 300-scoreA;
                    findXSame(newdata,arrx);
                    non(arrx,otharrx,newarr,arr,big);
                    // setTimeout(function () {
                    //     ul.onOff = true;
                    // }, 820);
                    }
                        // setTimeout(function () {
                        //     remainTime1(eachTime, 5);
                        // }, 820);
                    // }
        } 
        });
        oLis.forEach(function (a, b, c) {
	            // a.style.background = colors[Math.round(Math.random()*(colors.length-1))];
	            var c1 = a.style.background = colors[Math.round(Math.random()*(colors.length-1))];
                addClass(a, c1);
		        arrol[b%col].push(a);
		        a.x=b%5;
		        a.y=Math.floor(b/5); 
        });
    })();
    //消失
    function non(arrx,otharrx,newarr,arr, big){
		 for(var i=0; i<arrx.length; i++){
		 	if(arrx[i].length){
		 		//找X轴相同的一列，将小于arrx的y的所有放在数组内
		 		 otharrx[i]=arr[i].filter(function(a,b,c){
		 		 	return !arrx[i].includes(a) && a.y<big;
		 		 });
		 		 for(var j=0; j<arrx[i].length; j++){
		 		 	//生成随机颜色
		 		 	arrx[i][j].style.top=-h*(j+1)+'px';
		 		 	var c = arrx[i][j].style.background=colors[Math.round(Math.random()*(colors.length-1))];
		 		 	addClass(arrx[i][j], c);
		 		}
		 		 arrx[i].reverse();
		 		 newarr[i] = arrx[i].concat(otharrx[i]);
		 		 newarr[i].forEach(function(a,b,c){
		 		 	 move({
                            obj: a,
                            attrs: {top: h*b},
                            duration: 800
                        });
                         a.y = b;
		 		 })
		 	}
		 }
		 for(var i=0; i<col; i++){
                    arrx[i] = [];
				    otharrx[i]=[];
				    newarr[i]=[];
				  
				    arrolx[i]=[];
				    otharrolx[i]=[];
				    newarrol[i]=[];
              }
         arr.forEach(function (p1, p2, p3) {
                    p1.sort(function (a, b) {
                        return a.y-b.y;
                    })
               })
       }
    //找相同的颜色放到数组arr内返回
    function samecolor(_x,_y,arr){
     var data=[];
     var targetcolor=arr[_x][_y].style.background;
     fn(_x,_y);
     function fn(x,y){
            var uli = arr[x][y];
                //如果已经在数组里，证明已经找过了，不需要重复放数组里，return终止继续查找
            if(data.includes(uli)){
                return;
            }else{
                //如果没有，就放入数组
                data.push(uli);
            }
            if(arr[x-1]&&arr[x-1][y].style.background==targetcolor){
                fn(x-1,y);
            }
            if(arr[x+1]&&arr[x+1][y].style.background==targetcolor){
                fn(x+1,y);
            }
            if(arr[x][y-1]&&arr[x][y-1].style.background==targetcolor){
                fn(x,y-1);
            }
            if(arr[x][y+1]&&arr[x][y+1].style.background==targetcolor){
                fn(x,y+1);
            }
         }
         return data;
    }
    //arr内相同x轴的放到数组内
    function findXSame(arr,arrx) {
        arr.forEach(function (p1, p2, p3) {
            arrx[p1.x].unshift(p1);
        });
    }
    //自动模式
    function autoAlpha(x, y) {
        ol.timer= setInterval(function(){
            // var x=4;
            // var y=9;
            var now=samecolor(x,y,arrol);
            var big = findMax(now);
            if(now.length>1){
                // scoreA -= now.length;
                scoreB += now.length;
                scoreA = 300-scoreB;
                findXSame(now,arrolx);
                non(arrolx,otharrolx,newarrol,arrol, big);
                // x++;
                clearInterval(ol.timer);
                setTimeout(function () {
                    // x--;
                    // if(x<0){
                    //     x=4;
                    //     y--;
                    //     if(y<0){
                    //         y=9
                    //     }
                    // }
                    autoAlpha(4, 9);
                }, 1000);
            }else{
                if(x===0 && y===0){
                    (function () {
                        clearInterval(ol.timer);
                        clearInterval(home.timer);
                        container.style.zIndex = -10;
                        gameOver.style.display = 'flex';
                    })();
                }
                x--;
                if(x<0){
                    x=4;
                    y--;
                    // if(y<0){
                    //     y=9
                    // }
                }
            }
        },50);
    }
})();
function findMax(data) {
    var n = -Infinity;
    for(var i=0; i<data.length; i++){
        if(data[i].y > n){
            n = data[i].y;
        }
    }
    return n;
}