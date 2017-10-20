/**
 * Created by LiteGray on 2017/7/1.
 */

//倒计时
function startEnd() {
    //透明度
    (function () {
        var opa = 0.5;
        document.body.timer = setInterval(function () {
            opa += 0.005;
            document.body.style.opacity = opa;
            if(opa >= 1){
                document.body.style.opacity = '';
                clearInterval(document.body.timer);
            }
        }, 30);
    })();
    //显示倒计框
    (function () {
        ul.style.zIndex = -10;
        //倒计秒数
        var n = 3;
        revTime.innerText = n;
        revTime.style.display = 'block';
        revTime.timer = setInterval(function () {
            revTime.style.fontSize = (200-50*(4-n))+'px';
            revTime.innerText = --n;
            if(!n){
                //显示关卡
                // home.innerHTML = Number(query)+1;
                listen.score = 0;
                // remainTime(eachTime, 20);
                ul.style.zIndex = '';
                revTime.style.fontSize = '';
                n = 3;
                revTime.style.display = '';
                clearInterval(revTime.timer);
            }
        }, 1000);
    })();
}
//根据颜色选择类
function addClass(obj, c) {
    obj.className = '';
    switch (c){
        case colors[0]:
            obj.classList.add(classes[0]);
            break;
        case colors[1]:
            obj.classList.add(classes[1]);
            break;
        case colors[2]:
            obj.classList.add(classes[2]);
            break;
        case colors[3]:
            obj.classList.add(classes[3]);
            break;
        case colors[4]:
            obj.classList.add(classes[4]);
            break;
        case colors[5]:
            obj.classList.add(classes[5]);
            break;
        case colors[6]:
            obj.classList.add(classes[6]);
            break;
    }
}
//避免颜色
function avoidColor(x, y) {
    if(item[x][y-1]&&item[x][y-2] && item[x][y-1].style.backgroundColor===item[x][y-2].style.backgroundColor){
        if(item[x][y].style.backgroundColor === item[x][y-1].style.backgroundColor){
            var c0 = item[x][y].style.backgroundColor = colors[Math.round(Math.random()*(colors.length-1))];
            addClass(item[x][y], c0);
            avoidColor(x, y);
        }
    }
    if(item[x-1]&&item[x-2] && item[x-1][y].style.backgroundColor===item[x-2][y].style.backgroundColor){
        if(item[x][y].style.backgroundColor === item[x-1][y].style.backgroundColor){
            var c1 = item[x][y].style.backgroundColor = colors[Math.round(Math.random()*(colors.length-1))];
            addClass(item[x][y], c1);
            avoidColor(x, y);
        }
    }
}
//移动
function drag(obj) {
    obj.onmousedown = function (ev) {
        obj.style.zIndex = 10;
        //按下时obj位置,索引值
        var pos = {};
        var index = {};
        pos.t = obj.offsetTop;
        pos.l = obj.offsetLeft;
        index.x = obj.x;
        index.y = obj.y;
        ev.preventDefault();
        var x = ev.clientX-obj.getBoundingClientRect().left;
        var y = ev.clientY-obj.getBoundingClientRect().top;
        document.onmousemove = function (ev) {
            var t = ev.clientY-obj.parentNode.getBoundingClientRect().top-y;
            var l = ev.clientX-obj.parentNode.getBoundingClientRect().left-x;
            //控制垂直移动
            (function () {
                //方向
                if(Math.abs(l-pos.l)-Math.abs(t-pos.t) >= 10){
                    t = pos.t;
                }else{
                    l = pos.l;
                }
                //距离
                if(pos.t-t >= liSpace.h){
                    t = pos.t-liSpace.h;
                }else if(l-pos.l >= liSpace.w){
                    l = pos.l+liSpace.w;
                }else if(t-pos.t >= liSpace.h){
                    t = pos.t+liSpace.h;
                }else if(pos.l-l >= liSpace.w){
                    l = pos.l-liSpace.w;
                }
            })();
            obj.style.left = l+'px';
            obj.style.top = t+'px';
            document.onmouseup = function () {
                //移动
                if(item[obj.x][obj.y-1]){
                    moveAro(obj, item[obj.x][obj.y-1], index, pos);
                }
                if(item[obj.x+1]){
                    moveAro(obj, item[obj.x+1][obj.y], index, pos);
                }
                if(item[obj.x][obj.y+1]){
                    moveAro(obj, item[obj.x][obj.y+1], index, pos);
                }
                if(item[obj.x-1]){
                    moveAro(obj, item[obj.x-1][obj.y], index, pos);
                }
                setTimeout(function () {
                    //找同色,消除
                    findSame(obj);
                    //根据找到,消失
                    disappearLi(aSame);
                }, 520);
                document.onmousemove = document.onmouseup = null;
            };
        };
    };
}
//接触
function touch(cur, tar) {
    var posCur = cur.getBoundingClientRect();
    var posTar = tar.getBoundingClientRect();
    if(posCur.right<posTar.left || posCur.bottom<posTar.top || posCur.left>posTar.right || posCur.top>posTar.bottom){
        return false;
    }else{
        return true;
    }
}
//移动
function moveAro(obj, tar, index, pos) {
    if(touch(obj, tar)){
        var t = tar.offsetTop;
        var l = tar.offsetLeft;
        if(tar.y-1===index.y || tar.y+1===index.y){
            move({
                obj: tar,
                attrs: {
                    top: pos.t
                },
                duration: 500
            });
            move({
                obj: obj,
                attrs: {
                    top: t
                },
                duration: 500,
                callBack: function () {
                    obj.style.zIndex = '';
                    obj.y = tar.y;
                    tar.y = index.y;
                    item[obj.x][obj.y] = obj;
                    item[tar.x][tar.y] = tar;
                }
            });
        }else if(tar.x-1===index.x || tar.x+1===index.x){
            move({
                obj: tar,
                attrs: {
                    left: pos.l
                },
                duration: 500
            });
            move({
                obj: obj,
                attrs: {
                    left: l
                },
                duration: 500,
                callBack: function () {
                    obj.style.zIndex = '';
                    obj.x = tar.x;
                    tar.x = index.x;
                    item[obj.x][obj.y] = obj;
                    item[tar.x][tar.y] = tar;
                }
            });
        }
    }
}
//相同颜色
function findSame(obj) {
    aSame = [];
    aXSame = [];
    aYSame = [];
    //X方向,Y方向
    findXSame(obj);
    findYSame(obj);
    function findXSame(obj) {
        var x = obj.x;
        var y = obj.y;
        if(!aXSame.includes(obj)){
            aXSame.push(item[x][y]);
            if(item[x][y-1] && item[x][y-1].style.backgroundColor === item[x][y].style.backgroundColor){
                findXSame(item[x][y-1]);
            }
            if(item[x][y+1] && item[x][y+1].style.backgroundColor === item[x][y].style.backgroundColor){
                findXSame(item[x][y+1]);
            }
        }
    }
    function findYSame(obj) {
        var x = obj.x;
        var y = obj.y;
        if(!aYSame.includes(obj)){
            aYSame.push(item[x][y]);
            if(item[x-1] && item[x-1][y].style.backgroundColor === item[x][y].style.backgroundColor){
                findYSame(item[x-1][y]);
            }
            if(item[x+1] && item[x+1][y].style.backgroundColor === item[x][y].style.backgroundColor){
                findYSame(item[x+1][y]);
            }
        }
    }
    //根据X,Y方向个数>=3,存入aSame
    if(aXSame.length>=3){
        aXSame.forEach(function (p1, p2, p3) {
            if(!aSame.includes(p1)){
                aSame.push(p1);
            }
        });
    }
    if(aYSame.length>=3){
        aYSame.forEach(function (p1, p2, p3) {
            if(!aSame.includes(p1)){
                aSame.push(p1);
            }
        });
    }
}
//消失
function disappearLi(aSame) {
    //各个X方向消失数
    (function () {
        aSame.forEach(function (p1, p2, p3) {
            aX[p1.x].push(p1);
        });
    })();
    (function () {
        aX.forEach(function (p1, p2, p3) {
            if(p1.length){
                p1.sort(function (p11, p22) {
                    return p22.y-p11.y;
                });
                //各个X方向消失数,到顶部
                p1.forEach(function (p11, p22, p33) {
                    var c = p11.style.backgroundColor = colors[Math.floor((Math.random()*colors.length))];
                    addClass(p11, c);
                    p11.style.top = -liSpace.h*(p22+1)+'px';
                });
                p1.reverse();
                //各个X方向消失数,以上
                aXOth[p2] = item[p2].filter(function (p11, p22, p33) {
                    return !p1.includes(p11) && p11.y<(p1[0]).y;
                });
                aXOth[p2].sort(function (p11, p22) {
                    return p11.y-p22.y;
                })
            }
            //各个X方向消失数+以上
            (function () {
                aXAbout[p2] = p1.concat(aXOth[p2]);
                aXAbout[p2].forEach(function (p11, p22, p33) {
                    move({
                        obj: p11,
                        attrs: {
                            top: liSpace.t+liSpace.h*p22
                        },
                        duration: 1500,
                        //找可否自动消失
                        callBack: findAutoDis
                    });
                    //Y改变
                    p11.y = p22;
                });
            })();
        });
    })();
    //还原
    (function () {
        for(var i=0; i<row; i++){
            aX[i] = [];
            aXOth[i] = [];
            aXAbout = [];
        }
        //根据Y改变,重排二维坐标
        item.forEach(function (p1, p2, p3) {
            p1.sort(function (p11, p22) {
                return p11.y-p22.y;
            });
        })
    })();
    //时间条,分数条
    setTimeout(function () {
        addScore(listen, aSame.length);
        remainTime0(eachTime, 20);
    }, 1600);
}
//找可否自动消失
function findAutoDis() {
    item.forEach(function (p1, p2, p3) {
        p1.forEach(function (p11, p22, p33) {
            findSame(p11);
            if(aSame.length){
                disappearLi(aSame);
            }
        });
    });
}
//时间条
function remainTime0(obj, secs) {
    var total = 1000*secs;
    var t = total;
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        t -= 20;
        obj.style.background = 'linear-gradient(90deg, rgba(255,0,0,0.5) '+ 100*t/total +'%, ' +
                                'rgba(200,200,200,0.1) '+ 100*t/total +'%)';
        if(t <= 0){
            obj.style.backgroun = '';
            clearInterval(obj.timer);
            ul.style.zIndex = -10;
            gameOver.style.display = 'flex';
        }
    }, 20);
}
function remainTime1(obj, secs) {
    var total = 1000*secs;
    var t = total;
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        t -= 20;
        obj.style.background = 'linear-gradient(90deg, rgba(255,0,0,0.5) '+ 100*t/total +'%, ' +
            'rgba(200,200,200,0.1) '+ 100*t/total +'%)';
        if(t <= 0){
            obj.style.backgroun = '';
            clearInterval(obj.timer);
            clearInterval(ol.timer);
            clearInterval(home.timer);
            container.style.zIndex = -10;
            gameOver.style.display = 'flex';
        }
    }, 20);
}
//分数条
function addScore(obj, num) {
    switch(num){
        case 0: num = 0;
            break;
        case 3: num = 5;
            break;
        case 4: num = 7;
            break;
        case 5: num = 12;
            break;
        default: num = 15;
    }
    obj.score += num;
    //根据search控制关卡
    obj.style.backgroundImage = 'linear-gradient(to top, rgba(0,255,0,0.5) '+ 100*obj.score/(100*(1+query/10)) +'%,' +
                                'rgba(200,200,200,0.4) '+ 100*obj.score/(100*(1+query/10)) +'%)';
    if(obj.score >= (100*(1+query/10))){
        location.search = 'q='+ (++query);
    }
}