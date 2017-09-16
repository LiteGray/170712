import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../css/goods.css';
import {Banner} from './banner';

class GoodsList extends Component {
  cartAdd = (ev) => {
    const {cartAdd} = this.props;
    const {goodsId} = this.props;
    cartAdd(ev, goodsId, 1);
  };

  goodsDetailSelect = () => {
    const {goodsId, goodsDetailSelect} = this.props;
    goodsDetailSelect(goodsId);
  };

  render() {
    const {cartAdd, goodsDetailSelect} = this;
    const {goodsId, name, price, pic_min, carts} = this.props;

    let cartNumTotal = 0;
    carts.forEach(e => {
      cartNumTotal += e.num;
    });

    return (
      <li>
        <dl>
          <dt>
            <Link to="./detail" onClick={goodsDetailSelect}>
              <img src={require(`../img/${pic_min}`)} alt="" className="picGoods-min" />
            </Link>
          </dt>
          <dd style={{position: 'relative'}}>
            <em style={{display: 'none'}}>{goodsId}</em>
            <span>{name}</span>
            <b>RMB {price}</b>
            <a
              className="get-btn cartAdd"
              onClick={cartAdd}
            >
              添加到购物袋
            </a>
            <b className="cart cart-add-icon" style={{position: 'absolute'}}>{cartNumTotal}</b>
          </dd>
        </dl>
      </li>
    )
  }
}

class Goods extends Component {
  render() {
    const {dataGoods, carts, moreNavToggle, cartAdd, goodsDetailSelect} = this.props;
    const list = dataGoods.map(e => {
      return <GoodsList key={e.goodsId} {...e} carts={carts} cartAdd={cartAdd} goodsDetailSelect={goodsDetailSelect} />;
    });

    return (
      <section onClick={moreNavToggle}>
        <Banner />
        <ul className="autoWidth lists">
          {list}
        </ul>
      </section>
    )
  }
}

export {Goods};