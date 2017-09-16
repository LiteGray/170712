import React, {Component} from 'react';

class DetailGoods extends Component {
  render() {
    return (
      <div>
        <div
          className="goods-detail-info"
          style={{
            padding: 1+'vw',
          }}
        >
          <p>品牌名称: novatex</p>
          <p style={{
            marginTop: 1.4+'vw',
            marginBottom: 1+'vw',
          }}>
            产品参数:
          </p>
          <div className="goods-detail-info-list">
            <span>颜色分类:</span>
            <span>适用对象:</span>
            <span>材质:</span>
            <span>规格:</span>
            <span>品牌:</span>
            <span>货号:</span>
            <span>图案:</span>
            <span>风格:</span>
          </div>
        </div>
        <ul className="goods-detail-img">
          <li>
            <img src={require(`../../img/detail/SFJ-4200-detail-0.jpg`)} alt="" />
            <img src={require(`../../img/detail/SFJ-4200-detail-1.jpg`)} alt="" />
            <img src={require(`../../img/detail/SFJ-4200-detail-2.jpg`)} alt="" />
          </li>
        </ul>
      </div>
    );
  }
}

export {DetailGoods};