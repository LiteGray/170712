import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './data/data';
import {Goods} from "./js/goods";

class Header extends Component {
  render() {
    return (
      <div id="header-wrap">
        <header className="autoWidth">
          <ul className="moreNav">
            <li><a href="#" id="cart-page">购物袋&nbsp;<i className="cart-num"></i></a></li>
            <li><a href="#" id="order-page">订单</a></li>
            <li><a href="#" id="account">登录</a></li>
          </ul>
          <a href="#" id="logo">novatex</a>
          <b className="cart"><i></i></b>
        </header>
      </div>
    )
  }
}

class Footer extends Component {
  render() {
    return (
      <div id="footer-wrap">
        <footer className="autoWidth">
          <p>© 诺华（杭州）纺织有限公司 - 2017 NOVATEX Inc.</p>
        </footer>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Goods />
        <Footer />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);