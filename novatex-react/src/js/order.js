import React, {Component} from 'react';
import '../css/order.css';

// const dataOrder = [
//   {goodsId: 1040101, name: 'ZQ-L2024', price: '137', pic_min: '../img/ZQ-L2024-min.jpg', num: 1, serial_num: '1708192022115941', date: [2017,8,19,19,50,49]},
//   {goodsId: 1030401, name: 'ZB-C2868', price: '56', pic_min: '../img/ZB-C2868-min.jpg', num: 2, serial_num: '1708192022113704', date: [2017,8,19,19,50,49]},
//   {goodsId: 1021001, name: 'BZ-K049', price: '53', pic_min: '../img/BZ-K049-min.jpg', num: 2, serial_num: '1708192022112776', date: [2017,8,19,19,50,49]},
//   {goodsId: 1011101, name: 'SFJ-1201', price: '72', pic_min: '../img/SFJ-1201-min.jpg', num: 1, serial_num: '1708192022110241', date: [2017,8,19,19,50,49]},
//   {goodsId: 1060101, name: 'CD-L2024', price: '27', pic_min: '../img/CD-L2024-min.jpg', num: 1, serial_num: '1708192022110241', date: [2017,8,19,19,50,49]},
//   {goodsId: 1060201, name: 'CD-3335', price: '22', pic_min: '../img/CD-3335-min.jpg', num: 1, serial_num: '1708192022110241', date: [2017,8,19,19,50,49]},
//   {goodsId: 1060301, name: 'CD-HD078小绣花', price: '19', pic_min: '../img/CD-HD078xiuhua-min.jpg', num: 1, serial_num: '1708192022110241', date: [2017,8,19,19,50,49]},
//   {goodsId: 1060401, name: 'CD-52838', price: '27', pic_min: '../img/CD-52838-min.jpg', num: 1, serial_num: '1708192022110241', date: [2017,8,19,19,50,49]},
//   {goodsId: 1060501, name: 'CD-7814', price: '21', pic_min: '../img/CD-7814-min.jpg', num: 1, serial_num: '1708192022110241', date: [2017,8,19,19,50,49]},
//   {goodsId: 1060601, name: 'CD-HD118', price: '18', pic_min: '../img/CD-HD118-min.jpg', num: 1, serial_num: '1708192022110241', date: [2017,8,19,19,50,49]},
//   {goodsId: 1060701, name: 'CD-C3869', price: '9', pic_min: '../img/CD-C3869-min.jpg', num: 1, serial_num: '1708192022110241', date: [2017,8,19,19,50,49]},
// ];

class OrderList extends Component {
  render() {
    const {name, price, pic_min, num, serial_num, date} = this.props;

    return (
      <li>
        <dl>
          <dt><img src={pic_min} alt="" /></dt>
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
      return <OrderList key={Number(e.goodsId) + Number(new Date())} {...e} />
    });

    const pList = new Array(pageNum).fill(null).map((e, i) => {
      return <PageList key={i} page={i + 1} />
    });

    return (
      <div id="content-wrap" onClick={moreNavToggle}>
        <div className="autoWidth content">
          <h3>历史订单</h3>
          <ul className="listsOrders">
            {list}
          </ul>
          <div className="page">
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