import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../css/cart.css';

class CartList extends Component {
  cartNumChange = (ev) => {
    const {goodsId, cartNumChange} = this.props;
    let newVal = Number(ev.target.value);
    newVal = newVal > 0 ? newVal : 1;
    cartNumChange(newVal, goodsId);
  };

  cartLineDel = () => {
    const {goodsId, cartLineDel} = this.props;
    cartLineDel(goodsId);
  };

  render() {
    const {goodsId, name, price, pic_min, num} = this.props;
    const {cartNumChange, cartLineDel} = this;

    return (
      <li>
        <dl className="carts">
          <dt><img src={require(`../img/${pic_min}`)} alt="" /></dt>
          <dd>
            <div>
              <h5>{name}</h5>
              <i>RMB {price}</i>
              <input
                type="text"
                value={num}
                className="cartNum"
                onChange={cartNumChange}
              />
              <b className="cart-ePrice">RMB {Number(price) * Number(num)}</b>
            </div>
            <p>
              <span className="cartId">编号: {goodsId}</span>
              <i
                className="cartDel"
                onClick={cartLineDel}
              >
                删除
              </i>
            </p>
          </dd>
        </dl>
      </li>
    )
  }
}

class Cart extends Component {
  render() {
    const {
      carts,
      moreNavToggle,
      cartNumChange,
      cartLineDel,
      orderAdd
    } = this.props;
    const len = carts.length;
    let cartTotal = 0;
    carts.forEach(e => {
      cartTotal += Number(e.price) * Number(e.num);
    });
    const list = carts.map(e => {
      return <CartList
        key={e.goodsId}
        {...e}
        cartNumChange={cartNumChange}
        cartLineDel={cartLineDel}
      />;
    });

    return (
      <div id="content-wrap" onClick={moreNavToggle}>
        <div className="autoWidth content">
          <h3 style={ len ? {} : {textAlign: 'center', color: 'rgba(33,163,213,.4)'}}>{len ? '购物袋内的产品' : '购物袋很懒～'}</h3>
          <ul className="listsCart">
            {list}
          </ul>
          <div className="sumOther" style={{display: len ? '' :  'none'}} onClick={orderAdd}>
            <b>总计 RMB <i>{cartTotal}</i></b>
            <Link to="/order" className="get-btn" id="cart-account">结算</Link>
          </div>
        </div>
      </div>
    )
  }
}

export {Cart};