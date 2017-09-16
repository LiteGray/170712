import React, {Component} from 'react';
import {Route ,Link} from 'react-router-dom';
import {DetailGoods} from './detail-goods';
import {Comment} from './comment';
import './detail.css';

class GoodsProperty extends Component {
  constructor() {
    super();
    this.state = {
      num: 1,
    };
  }

  numDecrease = (ev) => {
    // ev.preventDefault();
    let {num} = this.state;
    num--;
    if (num <= 1) num = 1;
    this.setState({
      num,
    });
  };

  numIncrease = (ev) => {
    // ev.preventDefault();
    let {num} = this.state;
    num++;
    if (num >= 99) num = 99;
    this.setState({
      num,
    });
  };

  numChange = (ev) => {
    let {num} = this.state;
    const {target} = ev;
    num = Number(target.value);
    this.setState({
      num,
    });
  };

  cartAdd = (ev) => {
    const {goodsId, cartAdd} = this.props;
    const {num} = this.state;
    cartAdd(ev, goodsId, num);
  };

  render() {
    const {title, price, pic, numSale, carts} = this.props;
    const {num} = this.state;
    const {numIncrease, numDecrease, numChange, cartAdd} = this;

    let cartNumTotal = 0;
    carts.forEach(e => {
      cartNumTotal += e.num;
    });

    return(
      <dl className="goods-property">
        <dt>
          <img src={require(`../../img/${pic}`)} alt="" />
        </dt>
        <dd style={{position: 'relative'}}>
          <h3>{title}</h3>
          <span>¥ {price}</span>
          <b className="numSale">{numSale}</b>
          <div className="goods-property-num">
            <i onClick={numDecrease}>-</i>
            <input type="text" value={num} onChange={numChange}/>
            <i onClick={numIncrease}>+</i>
          </div>
          <a
            className="get-btn"
            onClick={cartAdd}
          >
            添加到购物袋
          </a>
          <b id="cart-add-icon" className="cart cart-add-icon" style={{position: 'absolute'}}>{cartNumTotal}</b>
        </dd>
      </dl>
    )
  }
}

class Detail extends Component {
  constructor() {
    super();
    this.state = {
      view: 'goods',
    };
  }

  viewToggle = (ev) => {
    let {view} = this.state;
    const {target} = ev;
    if (target.href && target.href.includes('comment')) {
      view = 'comment';
    } else {
      view = 'goods';
    }
    this.setState({
      view,
    });
  };


  render() {
    const {viewToggle} = this;
    const {view} = this.state;
    const {dataGoodsDetail, carts, cartAdd} = this.props;
    const {goodsId, title, price, pic, num_sale, detail} = dataGoodsDetail;
    return (
      <div id="detail" className="autoWidth">
        <GoodsProperty
          goodsId={goodsId}
          title={title}
          price={price}
          pic={pic}
          numSale={num_sale}
          cartAdd={cartAdd}
          carts={carts}
        />
        <div className="goods-detail">
          <div className="goods-detail-link" onClick={viewToggle}>
            <Link
              to="/detail/"
              className={view === 'goods' ? 'active' : ''}
            >
              商品详情
            </Link>
            <Link
              to="/detail/comment"
              className={view === 'comment' ? 'active' : ''}
            >
              累计评价
              <span
                style={{color: 'rgba(33,163,213,.8)', fontWeight: view === 'comment' ? '600' : ''}}
              >
                {' (' + detail.comment.length + ')'}
              </span>
            </Link>
          </div>
          <Route exact path="/detail/" render={({history}) => {
            return (
              <DetailGoods
                detailGoods={detail.goods}
              />);
          }}
          />
          <Route path="/detail/comment" render={({history}) => {
            return (
              <Comment
                detailComment={detail.comment}
              />);
          }}
          />
        </div>
      </div>
    );
  }
}

export {Detail};