import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import './index.css';

import { TimeLime } from "./js/time-lime";
import { BackTop } from "./js/back-top";
import { RegisterLogin } from "./js/register-login";
import { Header } from "./js/header";
import { Footer } from "./js/footer";
import { Goods } from "./js/goods";
import { Cart } from "./js/cart";
import { Order } from "./js/order";
import { Detail } from "./js/detail/detail";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isMoreNav: false,
      dataUser: [
        {
          userId: 1,
          email: 'momo@gmail.com',
          password: '@15280807171',
          isLogin: false,
          carts: [],
          orders: [
            {goodsId: 1040101, name: 'ZQ-L2024', price: '137', pic_min: 'ZQ-L2024-min.jpg', num: 1, serial_num: '1708192022115941', date: [2017,8,19,19,50,49]},
            {goodsId: 1030401, name: 'ZB-C2868', price: '56', pic_min: 'ZB-C2868-min.jpg', num: 2, serial_num: '1708192022113704', date: [2017,8,19,19,50,49]},
            {goodsId: 1021001, name: 'BZ-K049', price: '53', pic_min: 'BZ-K049-min.jpg', num: 2, serial_num: '1708192022112776', date: [2017,8,19,19,50,49]},
            {goodsId: 1011101, name: 'SFJ-1201', price: '72', pic_min: 'SFJ-1201-min.jpg', num: 1, serial_num: '1708192022110241', date: [2017,8,19,19,50,49]},
            {goodsId: 1060101, name: 'CD-L2024', price: '27', pic_min: 'CD-L2024-min.jpg', num: 1, serial_num: '1708192022110241', date: [2017,8,19,19,50,49]},
            {goodsId: 1060201, name: 'CD-3335', price: '22', pic_min: 'CD-3335-min.jpg', num: 1, serial_num: '1708192022110241', date: [2017,8,19,19,50,49]},
            {goodsId: 1060301, name: 'CD-HD078小绣花', price: '19', pic_min: 'CD-HD078xiuhua-min.jpg', num: 1, serial_num: '1708192022110241', date: [2017,8,19,19,50,49]},
            {goodsId: 1060401, name: 'CD-52838', price: '27', pic_min: 'CD-52838-min.jpg', num: 1, serial_num: '1708192022110241', date: [2017,8,19,19,50,49]},
            {goodsId: 1060501, name: 'CD-7814', price: '21', pic_min: 'CD-7814-min.jpg', num: 1, serial_num: '1708192022110241', date: [2017,8,19,19,50,49]},
            {goodsId: 1060601, name: 'CD-HD118', price: '18', pic_min: 'CD-HD118-min.jpg', num: 1, serial_num: '1708192022110241', date: [2017,8,19,19,50,49]},
            {goodsId: 1060701, name: 'CD-C3869', price: '9', pic_min: 'CD-C3869-min.jpg', num: 1, serial_num: '1708192022110241', date: [2017,8,19,19,50,49]},
          ]
        }
      ],
      dataUserLogined: {
        userId: null,
        email: ' ',
        password: ' ',
        isLogin: false,
        carts: [],
        orders: [],
      },
      dataGoodsDetail: {
        goodsId: 1010101,
        name: 'SFJ-3335',
        title: '沙发垫田园生活布艺夏纯色绿色客厅简约现代组合套装四季沙发巾套',
        price: '166',
        pic: 'SFJ-3335.jpg',
        pic_min: 'SFJ-3335-min.jpg',
        num_sale: 0,
        detail: {
          goods: {
            property: {
              color: ['灰色'],
              suit: '组合沙发',
              material: '其他',
              size: ['70*70'],
              band: 'novatex',
              name: 'SFJ-3335',
              cat: '纯色',
              style: '简约现代'
            },
            pic: ['SFJ-4200-detail-0.jpg', 'SFJ-4200-detail-1.jpg', 'SFJ-4200-detail-2.jpg'],
          },
          comment: [
            {
              name: 'c灰姑凉',
              content: '真的很不错，即将搬新房子还是会来买的！',
              date: '09.16',
            }
          ],
        }
      }
    };
  };

  // componentDidMount = () => {
  //   this.initBackTop();
  // };

  moreNavToggle = (ev) => {
    let {isMoreNav} = this.state;
    if (ev.target.className === 'cart' || ev.target.id === 'cart-dot') {
      isMoreNav = !isMoreNav;
    } else {
      isMoreNav = false;
    }
    this.setState({
      isMoreNav,
    });
  };

  userRegister = (dataUserNew) => {
    const {dataUser} = this.state;
    dataUser.unshift(dataUserNew);
    this.setState({
      dataUser,
    });
  };

  userLogin = (dataUserLogined) => {
    let {dataUser} = this.state;
    dataUserLogined.isLogin = true;
    this.setState({
      dataUser,
      dataUserLogined,
    });
  };

  userLogToggle = (dataUserLogined) => {
    if (dataUserLogined.isLogin) {
      setTimeout(() => {
        this.setState({
          dataUserLogined: {
            userId: null,
            email: ' ',
            password: ' ',
            isLogin: false,
            carts: [],
            orders: [],
          },
        });
      } ,10);
    }
  };

  cartAdd = (ev, goodsId, num) => {
    let {dataGoods, dataUser, dataUserLogined} = this.state;

    // const goodsId = Number(ev.target.parentNode.childNodes[0].innerText);
    let sData = [];
    let isInclude = false;
    dataGoods.forEach(e => {
      if (e.goodsId === goodsId) {
        sData = JSON.parse(JSON.stringify(e));
      }
    });
    //如果已有同种商品
    dataUserLogined.carts.forEach(e => {
      if (e.goodsId === sData.goodsId) {
        e.num += num;
        isInclude = true;
      }
    });
    //如果没有同种商品
    if (!isInclude) {
      sData.num = num;
      dataUserLogined.carts.unshift(sData);
    }

    //动画添加购物袋
    {
      const {target} = ev;
      const targetNext = target.nextElementSibling;
      targetNext.onOff = true;
      clearTimeout(targetNext.timer0);
      clearTimeout(targetNext.timer1);
      clearTimeout(targetNext.timer2);

      targetNext.style.display = 'block';
      setTimeout(() => {
        targetNext.style.opacity = 1;
        targetNext.style.transform = `rotateY(360deg)`;
      }, 0);

      targetNext.timer0 = setTimeout(function () {
        targetNext.onOff = false;
      }, 1990);
      targetNext.timer1 = setTimeout(() => {
        if (!targetNext.onOff) {
          targetNext.style.opacity = 0;
          targetNext.style.transform = '';
        }
      }, 2000);
      targetNext.timer2 = setTimeout(() => {
        if (!targetNext.onOff) {
          targetNext.style.display = '';
        }
      }, 4000);
    }

    this.setState({
      dataUser,
      dataUserLogined,
    });
  };

  cartNumChange = (goodsId, newVal) => {
    let {dataUser , dataUserLogined} = this.state;
    let {carts} = dataUserLogined;
    for (let value of carts) {
      if (value.goodsId === goodsId) {
        value.num = newVal;
        break;
      }
    }
    this.setState({
      dataUser,
      dataUserLogined,
    });
  };

  cartLineDel = (goodsId) => {
    let {dataUser , dataUserLogined} = this.state;
    let {carts} = dataUserLogined;
    for (let [key, value] of carts.entries()) {
      if (value.goodsId === goodsId) {
        carts.splice(key, 1);
        break;
      }
    }
    this.setState({
      dataUser,
      dataUserLogined,
    });
  };

  orderAdd = () => {
    const {dataGoods, dataUser ,dataUserLogined} = this.state;
    const {carts, orders} = dataUserLogined;
    const {getDate, getSerialNum} = this;
    carts.reverse();
    carts.forEach((cart) => {
      const {goodsId, num} = cart;
      for (let goods of dataGoods) {
        if (goods.goodsId === goodsId) {
          goods.num_sale += num;
          break;
        }
      }

      cart.date = getDate();
      cart.serial_num = getSerialNum(cart.date);
      orders.unshift(cart);
    });
    //clear
    carts.splice(0,carts.length);
    this.setState({
      dataGoods,
      dataUser,
      dataUserLogined,
    });
  };

  //获取时间
  getDate = () => {
    const {addZero} = this;
    let formDate = [];
    const time = new Date();
    formDate.push(time.getFullYear());
    formDate.push(time.getMonth() + 1);
    formDate.push(time.getDate());
    formDate.push(time.getHours());
    formDate.push(time.getMinutes());
    formDate.push(time.getSeconds());
    formDate.forEach((e, i) => {
      formDate[i] = addZero(e);
    });
    return formDate;
  };

  //补零
  addZero = (e) => {
    let tmp = e;
    if (tmp < 10) {
      tmp = `0` + tmp;
    }
    return tmp;
  };

  //获取订单号
  getSerialNum = (date) => {
    let str = '';
    let str0 = '' + Math.trunc(8999 * Math.random() + 1000);
    date.forEach(e => {
      str += ('' + e);
    });
    str = str.slice(2);
    return str + str0;
  };

  goodsDetailSelect = (goodsId) => {
    let {dataGoods, dataGoodsDetail} = this.state;
    for (let e of dataGoods) {
      if (e.goodsId === goodsId) {
        dataGoodsDetail = e;
        break;
      }
    }
    this.setState({
      dataGoodsDetail
    });
  };

  //懒加载
  lazyLoading = () => {
    const imgs = document.querySelectorAll('img');
    lazyLoading(imgs);
    let Lazyloading = function () {
      lazyLoading(imgs);
    };
    window.addEventListener('scroll', Lazyloading);

    function lazyLoading(eles) {
      eles.forEach(e => {
        if (e.getBoundingClientRect().top < window.innerHeight) {
          const dataSrc = e.getAttribute('data-src');
          if (dataSrc) {
            e.src = dataSrc;
            e.removeAttribute('data-src');
          }
        }
      });
    }
  };

  initBackTop = () => {
    document.documentElement.scrollTop = document.body.scrollTop = 0;
  };

  render() {
    const {
      isMoreNav,
      dataGoods,
      dataUser,
      dataUserLogined,
      dataGoodsDetail,
    } = this.state;
    const {
      moreNavToggle,
      userRegister,
      userLogin,
      userLogToggle,
      cartAdd,
      cartNumChange,
      cartLineDel,
      orderAdd,
      goodsDetailSelect,
      lazyLoading,
      initBackTop,
    } = this;

    return (
      <div>
        <TimeLime />
        <BackTop />
        <Header
          isMoreNav={isMoreNav}
          dataUserLogined={dataUserLogined}
          moreNavToggle={moreNavToggle}
          userLogToggle={userLogToggle}
        />
        <Route path="/login" render={({history}) => {
          if (dataUserLogined.isLogin) {
            history.push('/cart');
          }
          return (
            <RegisterLogin
              dataUser={dataUser}
              userRegister={userRegister}
              userLogin={userLogin}
              dataUserLogined={dataUserLogined}
            />);
        }}
        />
        <Route exact path="/" render={() => {
          return (
            <Goods
              dataGoods={dataGoods}
              carts={dataUserLogined.carts}
              moreNavToggle={moreNavToggle}
              cartAdd={cartAdd}
              goodsDetailSelect={goodsDetailSelect}
              lazyLoading={lazyLoading}
              initBackTop={initBackTop}
            />);
        }}
        />
        <Route path="/cart" render={({history}) => {
          if (!dataUserLogined.isLogin) {
            history.push('/login');
          }
          return (
            <Cart
              carts={dataUserLogined.carts}
              moreNavToggle={moreNavToggle}
              cartNumChange={cartNumChange}
              cartLineDel={cartLineDel}
              orderAdd={orderAdd}
            />);
        }}
        />
        <Route path="/order" render={({history}) => {
          if (!dataUserLogined.isLogin) {
            history.push('/login');
          }
          return (
            <Order
              orders={dataUserLogined.orders}
              moreNavToggle={moreNavToggle}
            />);
        }}
        />

        <Route path="/detail" render={({history}) => {
          return (
            <Detail
              dataGoodsDetail={dataGoodsDetail}
              carts={dataUserLogined.carts}
              cartAdd={cartAdd}
              lazyLoading={lazyLoading}
              initBackTop={initBackTop}
            />);
        }}
        />

        <Footer moreNavToggle={moreNavToggle} />
      </div>
    )
  }
}

ReactDOM.render(
  <Router>
    <Route path="/" component={App} />
  </Router>,
  document.getElementById('root'),
);
