import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
  userLogToggle = () => {
    let {dataUserLogined, userLogToggle} = this.props;
    userLogToggle(dataUserLogined);
  };

  render() {
    const {isMoreNav, moreNavToggle, dataUserLogined} = this.props;
    const {carts} = dataUserLogined;

    let cartNumTotal = 0;
    carts.forEach(e => {
      cartNumTotal += e.num;
    });

    return (
      <div>
        <div id="fixed-fill">{''}</div>
        <div id="header-wrap" onClick={moreNavToggle}>
          <header className="autoWidth">
            <ul
              className="moreNav"
              style={{display: isMoreNav ? 'block' : ''}}
            >
              <li>
                <Link to="/cart" id="cart-page" >
                  购物袋
                  <i className="cart-num">
                    {cartNumTotal ? (' (' + cartNumTotal + ')') : ''}
                  </i>
                </Link>
              </li>
              <li>
                <Link to="/order" id="order-page">订单</Link>
                {/*<a href="#" id="order-page" onClick={loginNeeded}>订单</a>*/}
              </li>
              <li style={{display: /cart|order/.test(window.location.href) ? 'none' : ''}}>
                <Link
                  to="/login"
                  id="account"
                  onClick={this.userLogToggle}
                >
                  {dataUserLogined.isLogin ? '退出' : '登录'}
                </Link>
              </li>
            </ul>
            <Link to="/" id="logo">novatex</Link>
            <b className="cart" onClick={moreNavToggle}>
              <i
                id="cart-dot"
                className={dataUserLogined.carts && dataUserLogined.carts.length ? 'active' : ''}
              >
              </i>
            </b>
          </header>
        </div>
      </div>
    )
  }
}

export {Header};