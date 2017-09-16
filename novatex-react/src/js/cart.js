import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../css/cart.css';

class CartList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: props.num,
    };
  }

  cartNumDecrement = () => {
    const {goodsId, cartNumChange} = this.props;
    let {num} = this.state;
    if (--num <= 1)  num = 1;
    cartNumChange(goodsId, num);
    this.setState({
      num,
    });
  };

  cartNumIncrement = () => {
    const {goodsId, cartNumChange} = this.props;
    let {num} = this.state;
    // num--;
    if (++num >= 99)  num = 99;
    cartNumChange(goodsId, num);
    this.setState({
      num,
    });
  };

  cartNumChange = (ev) => {
    const {goodsId, cartNumChange} = this.props;
    let {num} = this.state;
    let newVal = Number(ev.target.value);
    num = newVal > 0 ? newVal : 1;
    cartNumChange(goodsId, num);
    this.setState({
      num,
    });
  };

  cartLineDel = () => {
    const {goodsId, cartLineDel} = this.props;
    cartLineDel(goodsId);
  };

  render() {
    const {num} = this.state;
    const {goodsId, name, price, pic_min} = this.props;
    const {cartNumDecrement, cartNumIncrement, cartNumChange, cartLineDel} = this;

    return (
      <li>
        <dl className="carts">
          <dt><img src={require(`../img/${pic_min}`)} alt="" /></dt>
          <dd>
            <div>
              <h5>{name}</h5>
              <i>RMB {price}</i>
              <div>
                <span onClick={cartNumDecrement}>-</span>
                <input
                  type="text"
                  value={num}
                  className="cartNum"
                  onChange={cartNumChange}
                />
                <span onClick={cartNumIncrement}>+</span>
              </div>
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
          <div className="sumOther">
          {/*<div className="sumOther" style={{display: len ? '' :  'none'}}>*/}
            <b style={{display: len ? '' :  'none'}}>总计 RMB <i>{cartTotal}</i></b>
            <Link
              to={len? './cart' : './order'}
              className="get-btn" id="cart-account"
              onClick={orderAdd}
            >
              {len ? '结算' :  'or 查看订单'}
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export {Cart};