import React, {Component} from 'react';
import '../css/cart.css';

const dataCart = [
  {goodsId: 1010101, name: 'SFJ-3335', price: '200', pic_min: '../img/SFJ-3335-min.jpg', num: 1},
  {goodsId: 1010201, name: 'SFJ-4200', price: '114', pic_min: '../img/SFJ-4200-min.jpg', num: 2},
  {goodsId: 1070401, name: 'PD-XH007', price: '114', pic_min: '../img/PD-XH007-min.jpg', num: 2},
];

class CartList extends Component {
  render() {
    const {goodsId, name, price, pic_min, num} = this.props;

    return (
      <li>
        <dl className="carts">
          <dt><img src={pic_min} alt="" /></dt>
          <dd>
            <div>
              <h5>{name}</h5>
              <i>RMB {price}</i>
              <input type="text" value={num} className="cartNum" />
              <b className="cart-ePrice">RMB {Number(price) * Number(num)}</b>
            </div>
            <p>
              <span className="cartId">编号: {goodsId}</span>
              <i className="cartDel">删除</i>
            </p>
          </dd>
        </dl>
      </li>
    )
  }
}

class Cart extends Component {
  render() {
    let cartTotal = 0;
    dataCart.forEach(e => {
      cartTotal += Number(e.price) * Number(e.num);
    });
    const list = dataCart.map(e => {
      return <CartList key={e.goodsId} {...e} />;
    });

    return (
      <div id="content-wrap">
        <div className="autoWidth content">
          <h3>购物袋内的产品</h3>
          <ul className="listsCart">
            {list}
          </ul>
          <div className="sumOther">
            <b>总计 RMB <i>{cartTotal}</i></b>
            <a href="#" className="get-btn" id="cart-account">结算</a>
          </div>
        </div>
      </div>
    )
  }
}

export {Cart};