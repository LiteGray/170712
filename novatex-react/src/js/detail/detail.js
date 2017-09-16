import React, {Component} from 'react';
import {Route ,Link} from 'react-router-dom';
import {DetailGoods} from './detail-goods';
import {Comment} from './comment';
import './detail.css';

class Detail extends Component {
  render() {
    return (
      <div id="detail" className="autoWidth">
        <dl className="goods-property">
          <dt>
            <img src={require(`../../img/BZ-4200.jpg`)} alt="" />
          </dt>
          <dd>
            <h3>沙发垫田园生活布艺夏纯色绿色客厅简约现代组合套装四季沙发巾套</h3>
            <span>¥ 28</span>
            <b>200</b>
            <div className="goods-property-num">
              <i>+</i>
              <input type="text" value="1" />
              <i>-</i>
            </div>
            <a href="" className="get-btn">加入购物袋</a>
          </dd>
        </dl>
        <div className="goods-detail">
          <Link to="/detail/">商品详情</Link>
          <Link to="/detail/comment">累计评价</Link>
          <Route exact path="/detail/" render={({history}) => {
            return (
              <DetailGoods
                // orders={dataUserLogined.orders}
                // moreNavToggle={moreNavToggle}
              />);
          }}
          />
          <Route path="/detail/comment" render={({history}) => {
            return (
              <Comment
                // orders={dataUserLogined.orders}
                // moreNavToggle={moreNavToggle}
              />);
          }}
          />
        </div>
      </div>
    );
  }
}

export {Detail};