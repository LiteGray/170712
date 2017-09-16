import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import './index.css';

import {TimeLime} from "./js/time-lime";
import {BackTop} from "./js/back-top";
import {RegisterLogin} from "./js/register-login";
import {Header} from "./js/header";
import {Footer} from "./js/footer";
import {Goods} from "./js/goods";
import {Cart} from "./js/cart";
import {Order} from "./js/order";
import {Detail} from "./js/detail/detail";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isMoreNav: false,
      dataGoods: [
        {goodsId: 1010101, name: 'SFJ-3335', price: '200', pic: 'SFJ-3335.jpg', pic_min: 'SFJ-3335-min.jpg'},
        {goodsId: 1010201, name: 'SFJ-4200', price: '114', pic: 'SFJ-4200.jpg', pic_min: 'SFJ-4200-min.jpg'},
        {goodsId: 1010301, name: 'SFJ-3275', price: '129', pic: 'SFJ-3275.jpg', pic_min: 'SFJ-3275-min.jpg'},
        {goodsId: 1010401, name: 'SFJ-62779', price: '128', pic: 'SFJ-62779.jpg', pic_min: 'SFJ-62779-min.jpg'},
        {goodsId: 1010501, name: 'SFJ-HD078小绣花', price: '134', pic: 'SFJ-HD078xiuhua.jpg', pic_min: 'SFJ-HD078xiuhua-min.jpg'},
        {goodsId: 1010601, name: 'SFJ-4187', price: '61', pic: 'SFJ-4187.jpg', pic_min: 'SFJ-4187-min.jpg'},
        {goodsId: 1010701, name: 'SFJ-3385', price: '140', pic: 'SFJ-3385.jpg', pic_min: 'SFJ-3385-min.jpg'},
        {goodsId: 1010801, name: 'SFJ-HD021', price: '94', pic: 'SFJ-HD021.jpg', pic_min: 'SFJ-HD021-min.jpg'},
        {goodsId: 1010901, name: 'SFJ-3391', price: '151', pic: 'SFJ-3391.jpg', pic_min: 'SFJ-3391-min.jpg'},
        {goodsId: 1011001, name: 'SFJ-C4369', price: '61', pic: 'SFJ-C4369.jpg', pic_min: 'SFJ-C4369-min.jpg'},
        {goodsId: 1011101, name: 'SFJ-1201', price: '72', pic: 'SFJ-1201.jpg', pic_min: 'SFJ-1201-min.jpg'},
        {goodsId: 1011201, name: 'SFJ-HD078圆点', price: '139', pic: 'SFJ-HD078yuandian.jpg', pic_min: 'SFJ-HD078yuandian-min.jpg'},
        {goodsId: 1020101, name: 'BZ-4183', price: '26', pic: 'BZ-4183.jpg', pic_min: 'BZ-4183-min.jpg'},
        {goodsId: 1020201, name: 'BZ-52272', price: '85', pic: 'BZ-52272.jpg', pic_min: 'BZ-52272-min.jpg'},
        {goodsId: 1020301, name: 'BZ-4200', price: '17', pic: 'BZ-4200.jpg', pic_min: 'BZ-4200-min.jpg'},
        {goodsId: 1020401, name: 'BZ-L2024', price: '68', pic: 'BZ-L2024.jpg', pic_min: 'BZ-L2024-min.jpg'},
        {goodsId: 1020501, name: 'BZ-L2088', price: '110', pic: 'BZ-L2088.jpg', pic_min: 'BZ-L2088-min.jpg'},
        {goodsId: 1020601, name: 'BZ-HD046', price: '17', pic: 'BZ-HD046.jpg', pic_min: 'BZ-HD046-min.jpg'},
        {goodsId: 1020701, name: 'BZ-HD078小绣花', price: '62', pic: 'BZ-HD078xiuhua.jpg', pic_min: 'BZ-HD078xiuhua-min.jpg'},
        {goodsId: 1020801, name: 'BZ-S032', price: '168', pic: 'BZ-S032.jpg', pic_min: 'BZ-S032-min.jpg'},
        {goodsId: 1020901, name: 'BZ-S005', price: '184', pic: 'BZ-S005.jpg', pic_min: 'BZ-S005-min.jpg'},
        {goodsId: 1021001, name: 'BZ-K049', price: '53', pic: 'BZ-K049.jpg', pic_min: 'BZ-K049-min.jpg'},
        {goodsId: 1021101, name: 'BZ-L2027', price: '76', pic: 'BZ-L2027.jpg', pic_min: 'BZ-L2027-min.jpg'},
        {goodsId: 1021201, name: 'BZ-HD021', price: '48', pic: 'BZ-HD021.jpg', pic_min: 'BZ-HD021-min.jpg'},
        {goodsId: 1021301, name: 'BZ-S013', price: '89', pic: 'BZ-S013.jpg', pic_min: 'BZ-S013-min.jpg'},
        {goodsId: 1021401, name: 'BZ-K058', price: '51', pic: 'BZ-K058.jpg', pic_min: 'BZ-K058-min.jpg'},
        {goodsId: 1021501, name: 'BZ-PB01', price: '74', pic: 'BZ-PB01.jpg', pic_min: 'BZ-PB01-min.jpg'},
        {goodsId: 1021601, name: 'BZ-3275', price: '59', pic: 'BZ-3275.jpg#', pic_min: 'BZ-3275-min.jpg'},
        {goodsId: 1021701, name: 'BZ-S017', price: '44', pic: 'BZ-S017.jpg', pic_min: 'BZ-S017-min.jpg'},
        {goodsId: 1021801, name: 'BZ-K048', price: '75', pic: 'BZ-K048.jpg', pic_min: 'BZ-K048-min.jpg'},
        {goodsId: 1021901, name: 'BZ-62294', price: '36', pic: 'BZ-62294.jpg', pic_min: 'BZ-62294-min.jpg'},
        {goodsId: 1022001, name: 'BZ-CM601', price: '41', pic: 'BZ-CM601.jpg', pic_min: 'BZ-CM601-min.jpg'},
        {goodsId: 1030101, name: 'ZB-L2024', price: '208', pic: 'ZB-L2024.jpg', pic_min: 'ZB-L2024-min.jpg'},
        {goodsId: 1030201, name: 'ZB-HD078小绣花', price: '185', pic: 'ZB-HD078xiuhua.jpg', pic_min: 'ZB-HD078xiuhua-min.jpg'},
        {goodsId: 1030301, name: 'ZB-HD118', price: '128', pic: 'ZB-HD118.jpg', pic_min: 'ZB-HD118-min.jpg'},
        {goodsId: 1030401, name: 'ZB-C2868', price: '56', pic: 'ZB-C2868.jpg', pic_min: 'ZB-C2868-min.jpg'},
        {goodsId: 1030501, name: 'ZB-52838', price: '165', pic: 'ZB-52838.jpg', pic_min: 'ZB-52838-min.jpg'},
        {goodsId: 1030601, name: 'ZB-CM601', price: '145', pic: 'ZB-CM601.jpg', pic_min: 'ZB-CM601-min.jpg'},
        {goodsId: 1030701, name: 'ZB-HD021', price: '134', pic: 'ZB-HD021.jpg', pic_min: 'ZB-HD021-min.jpg'},
        {goodsId: 1030801, name: 'ZB-C3465', price: '88', pic: 'ZB-C3465.jpg', pic_min: 'ZB-C3465-min.jpg'},
        {goodsId: 1040101, name: 'ZQ-L2024', price: '137', pic: 'ZQ-L2024.jpg', pic_min: 'ZQ-L2024-min.jpg'},
        {goodsId: 1040201, name: 'ZQ-L2027', price: '145', pic: 'ZQ-L2027.jpg', pic_min: 'ZQ-L2027-min.jpg'},
        {goodsId: 1040301, name: 'ZQ-HD021', price: '93', pic: 'ZQ-HD021.jpg', pic_min: 'ZQ-HD021-min.jpg'},
        {goodsId: 1040401, name: 'ZQ-7801', price: '97', pic: 'ZQ-7801.jpg', pic_min: 'ZQ-7801-min.jpg'},
        {goodsId: 1050101, name: 'YD-4200', price: '39', pic: 'YD-4200.jpg', pic_min: 'YD-4200-min.jpg'},
        {goodsId: 1050201, name: 'YD-3275', price: '62', pic: 'YD-3275.jpg', pic_min: 'YD-3275-min.jpg'},
        {goodsId: 1050301, name: 'YD-HD118', price: '55', pic: 'YD-HD118.jpg', pic_min: 'YD-HD118-min.jpg'},
        {goodsId: 1050401, name: 'YD-62779', price: '65', pic: 'YD-62779.jpg', pic_min: 'YD-62779-min.jpg'},
        {goodsId: 1060101, name: 'CD-L2024', price: '27', pic: 'CD-L2024.jpg', pic_min: 'CD-L2024-min.jpg'},
        {goodsId: 1060201, name: 'CD-3335', price: '22', pic: 'CD-3335.jpg', pic_min: 'CD-3335-min.jpg'},
        {goodsId: 1060301, name: 'CD-HD078小绣花', price: '19', pic: 'CD-HD078xiuhua.jpg', pic_min: 'CD-HD078xiuhua-min.jpg'},
        {goodsId: 1060401, name: 'CD-52838', price: '27', pic: 'CD-52838.jpg', pic_min: 'CD-52838-min.jpg'},
        {goodsId: 1060501, name: 'CD-7814', price: '21', pic: 'CD-7814.jpg', pic_min: 'CD-7814-min.jpg'},
        {goodsId: 1060601, name: 'CD-HD118', price: '18', pic: 'CD-HD118.jpg', pic_min: 'CD-HD118-min.jpg'},
        {goodsId: 1060701, name: 'CD-C3869', price: '9', pic: 'CD-C3869.jpg', pic_min: 'CD-C3869-min.jpg'},
        {goodsId: 1060801, name: 'CD-CM601', price: '18', pic: 'CD-CM601.jpg', pic_min: 'CD-CM601-min.jpg'},
        {goodsId: 1070101, name: 'PD-L042', price: '124', pic: 'PD-L042.jpg', pic_min: 'PD-L042-min.jpg'},
        {goodsId: 1070201, name: 'PD-3385', price: '79', pic: 'PD-3385.jpg', pic_min: 'PD-3385-min.jpg'},
        {goodsId: 1070301, name: 'PD-S024', price: '75', pic: 'PD-S024.jpg', pic_min: 'PD-S024-min.jpg'},
        {goodsId: 1070401, name: 'PD-XH007', price: '114', pic: 'PD-XH007.jpg', pic_min: 'PD-XH007-min.jpg'}
      ],
      dataUser: [
        {
          userId: 1,
          email: 'momo0@gmail.com',
          password: '15280807171',
          isLogin: false,
          carts: [
            {goodsId: 1010101, name: 'SFJ-3335', price: '200', pic_min: '../SFJ-3335-min.jpg', num: 1},
            {goodsId: 1010201, name: 'SFJ-4200', price: '114', pic_min: '../SFJ-4200-min.jpg', num: 2},
            {goodsId: 1070401, name: 'PD-XH007', price: '114', pic_min: '../PD-XH007-min.jpg', num: 2}

          ],
          orders: [
            {goodsId: 1040101, name: 'ZQ-L2024', price: '137', pic_min: '../ZQ-L2024-min.jpg', num: 1, serial_num: '1708192022115941', date: [2017,8,19,19,50,49]},
            {goodsId: 1030401, name: 'ZB-C2868', price: '56', pic_min: '../ZB-C2868-min.jpg', num: 2, serial_num: '1708192022113704', date: [2017,8,19,19,50,49]},
            {goodsId: 1021001, name: 'BZ-K049', price: '53', pic_min: '../BZ-K049-min.jpg', num: 2, serial_num: '1708192022112776', date: [2017,8,19,19,50,49]},
            {goodsId: 1011101, name: 'SFJ-1201', price: '72', pic_min: '../SFJ-1201-min.jpg', num: 1, serial_num: '1708192022110241', date: [2017,8,19,19,50,49]},
            {goodsId: 1060101, name: 'CD-L2024', price: '27', pic_min: '../CD-L2024-min.jpg', num: 1, serial_num: '1708192022110241', date: [2017,8,19,19,50,49]},
            {goodsId: 1060201, name: 'CD-3335', price: '22', pic_min: '../CD-3335-min.jpg', num: 1, serial_num: '1708192022110241', date: [2017,8,19,19,50,49]},
            {goodsId: 1060301, name: 'CD-HD078小绣花', price: '19', pic_min: '../CD-HD078xiuhua-min.jpg', num: 1, serial_num: '1708192022110241', date: [2017,8,19,19,50,49]},
            {goodsId: 1060401, name: 'CD-52838', price: '27', pic_min: '../CD-52838-min.jpg', num: 1, serial_num: '1708192022110241', date: [2017,8,19,19,50,49]},
            {goodsId: 1060501, name: 'CD-7814', price: '21', pic_min: '../CD-7814-min.jpg', num: 1, serial_num: '1708192022110241', date: [2017,8,19,19,50,49]},
            {goodsId: 1060601, name: 'CD-HD118', price: '18', pic_min: '../CD-HD118-min.jpg', num: 1, serial_num: '1708192022110241', date: [2017,8,19,19,50,49]},
            {goodsId: 1060701, name: 'CD-C3869', price: '9', pic_min: '../CD-C3869-min.jpg', num: 1, serial_num: '1708192022110241', date: [2017,8,19,19,50,49]},
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
    };
  };

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
    let {dataUser, isLoginNeeded} = this.state;
    dataUserLogined.isLogin = true;
    isLoginNeeded = false;
    this.setState({
      dataUser,
      dataUserLogined,
      isLoginNeeded,
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

  cartAdd = (ev) => {
    let {dataGoods, dataUser, dataUserLogined} = this.state;

    const goodsId = Number(ev.target.parentNode.childNodes[0].innerText);
    // const path = `../`;
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
        e.num++;
        isInclude = true;
      }
    });
    //如果没有同种商品
    if (!isInclude) {
      sData.num = 1;
      dataUserLogined.carts.unshift(sData);
    }
    this.setState({
      dataUser,
      dataUserLogined,
    });
  };

  cartNumChange = (newVal, goodsId) => {
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
    const {dataUser ,dataUserLogined} = this.state;
    const {carts, orders} = dataUserLogined;
    const {getDate, getSerialNum} = this;
    carts.reverse();
    carts.forEach((e,i) => {
      e.date = getDate();
      e.serial_num = getSerialNum(e.date);
      orders.unshift(e);
    });
    //clear
    carts.splice(0,carts.length);
    this.setState({
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

  render() {
    const {
      isMoreNav,
      dataGoods,
      dataUser,
      dataUserLogined,
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
            history.push('/');
          }
          return (
            <RegisterLogin
              dataUser={dataUser}
              userRegister={userRegister}
              userLogin={userLogin}
              dataUserLogined={dataUserLogined}
            />);
        }} />
        <Route exact path="/" render={() => {
          return (
            <Goods
              dataGoods={dataGoods}
              moreNavToggle={moreNavToggle}
              cartAdd={cartAdd}
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
              // orders={dataUserLogined.orders}
              // moreNavToggle={moreNavToggle}
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
