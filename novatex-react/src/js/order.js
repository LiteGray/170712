import React, {Component} from 'react';
import '../css/order.css';

class OrderList extends Component {
  render() {
    const {name, price, pic_min, num, serial_num, date} = this.props;

    return (
      <li>
        <dl>
          <dt><img src={require(`../img/${pic_min}`)} alt="" /></dt>
          <dd>
            <div>
              <h5>{name}</h5>
              <i>RMB {price}</i>
              <span>{num}</span>
              <b className="order-ePrice">RMB {Number(price) * Number(num)}</b>
            </div>
            <p>
              <span>订单号: {serial_num}</span>
              <i className="order-date">{date[0]}/{date[1]}/{date[2]}</i>
            </p>
          </dd>
        </dl>
      </li>
    )
  }
}

class PageList extends Component {
  render() {
    return <option value={this.props.page}>{this.props.page}</option>
  }
}

class Order extends Component {
  constructor(props) {
    super(props);
    const {orders} = this.props;
    this.state = {
      pageNum: Math.ceil(orders.length / 4),
      page: 1,
    };
  };

  handlePageSelect = (ev) => {
    this.setState({
      page: ev.target.value,
    });
  };

  handlePagePrev = () => {
    this.setState({
      page: --this.state.page < 1 ? 1 : this.state.page,
    });
  };

  handlePageNext = () => {
    this.setState({
      page: ++this.state.page > this.state.pageNum ? this.state.pageNum : this.state.page,
    });
  };

  render() {
    const {orders, moreNavToggle} = this.props;
    const {pageNum, page} = this.state;
    const len = orders.length;
    const OrderStart = 4 * (page - 1);
    const OrderEnd = (OrderStart + 4) >  len ?  len : (OrderStart + 4);
    const dataOrderShow = orders.slice(OrderStart, OrderEnd);

    const list = dataOrderShow.map(e => {
      return <OrderList key={Number(e.goodsId) + Number(new Date()) + Math.round(Math.random() * 1000)} {...e} />
    });

    const pList = new Array(pageNum).fill(null).map((e, i) => {
      return <PageList key={i} page={i + 1} />
    });

    return (
      <div id="content-wrap" onClick={moreNavToggle}>
        <div className="autoWidth content">
          <h3 style={len ? {} : {textAlign: 'center', color: 'rgba(33,163,213,.4)'}}>{len ? '历史订单' : '永远相信美好的事情即将发生～'}</h3>
          <ul className="listsOrders" style={len ? {} : {display: 'none'}}>
            {list}
          </ul>
          <div className="page" style={len ? {} : {display: 'none'}}>
            <a
              className="get-btn"
              onClick={this.handlePagePrev}
            >
              上一页
            </a>
            <select
              className="pageSelect"
              value={page}
              onChange={this.handlePageSelect}
            >
              {pList}
            </select>
            <a
              className="get-btn"
              onClick={this.handlePageNext}
            >
              下一页
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export {Order};