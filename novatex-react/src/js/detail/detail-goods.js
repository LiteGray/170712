import React, {Component} from 'react';

class DetailGoods extends Component {
  render() {
    const {detailGoods} = this.props;
    const {property, pic} = detailGoods;
    const {
      color,
      suit,
      material,
      size,
      band,
      name,
      cat,
      style,
    } = property;

    return (
      <div>
        <div
          className="goods-detail-info"
          style={{
            padding: 1+'vw',
          }}
        >
          <p>品牌名称: {band}</p>
          <p style={{
            marginTop: 1.4+'vw',
            marginBottom: 1+'vw',
          }}>
            产品参数:
          </p>
          <div className="goods-detail-info-list">
            <span>颜色分类: {color}</span>
            <span>适用对象: {suit}</span>
            <span>材质: {material}</span>
            <span>规格: {size}</span>
            <span>品牌: {band}</span>
            <span>货号: {name}</span>
            <span>图案: {cat}</span>
            <span>风格: {style}</span>
          </div>
        </div>
        <ul className="goods-detail-img">
          <li>
            <img src={require(`../../img/detail/${pic[0]}`)} alt="" />
            <img src={require(`../../img/detail/${pic[1]}`)} alt="" />
            <img src={require(`../../img/detail/${pic[2]}`)} alt="" />
          </li>
        </ul>
      </div>
    );
  }
}

export {DetailGoods};