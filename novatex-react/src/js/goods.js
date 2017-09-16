import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../css/goods.css';
import {Banner} from './banner';

class GoodsList extends Component {
  cartAdd = () => {
    const {cartAdd} = this.props;
    const {goodsId} = this.props;
    cartAdd(goodsId, 1);
  };

  goodsDetailSelect = () => {
    const {goodsId, goodsDetailSelect} = this.props;
    goodsDetailSelect(goodsId);
  };

  render() {
    const {cartAdd, goodsDetailSelect} = this;
    const {goodsId, name, price, pic_min} = this.props;

    return (
      <li>
        <dl>
          <dt>
            <Link to="./detail" onClick={goodsDetailSelect}>
              <img src={require(`../img/${pic_min}`)} alt="" className="picGoods-min" />
            </Link>
          </dt>
          <dd>
            <em style={{display: 'none'}}>{goodsId}</em>
            <span>{name}</span>
            <b>RMB {price}</b>
            <a
              className="get-btn cartAdd"
              onClick={cartAdd}
            >
              添加到购物袋
            </a>
          </dd>
        </dl>
      </li>
    )
  }
}

class Goods extends Component {
  render() {
    const {dataGoods, moreNavToggle, cartAdd, goodsDetailSelect} = this.props;
    const list = dataGoods.map(e => {
      return <GoodsList key={e.goodsId} {...e} cartAdd={cartAdd} goodsDetailSelect={goodsDetailSelect} />;
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