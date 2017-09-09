import React, {Component} from 'react';
import '../css/goods.css';
import {Banner} from './banner';

class GoodsList extends Component {
  render() {
    const {goodsId, name, price, pic_min, cartAdd} = this.props;

    return (
      <li>
        <dl>
          <dt><img src={require(`../img/${pic_min}`)} alt="" className="picGoods-min" /></dt>
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
  // constructor() {
  //   super();
  //   this.state = {
  //     dataBanner: ['banner0', 'banner1', 'banner2', 'banner3'],
  //     cName: 'autoWidth banner banner0',
  //   };
  //   this.bannerAutoPlay();
  // }
  //
  // bannerAutoPlay = () => {
  //   let {dataBanner, cName} = this.state;
  //   let n = 0;
  //   setInterval(() => {
  //     cName = 'autoWidth banner';
  //     cName += ` ${dataBanner[++n % dataBanner.length]}`;
  //     this.setState({
  //       cName,
  //     });
  //   }, 6000);
  // };

  render() {
    // const {cName} = this.state;
    // const dataBanner = ['banner0', 'banner1', 'banner2', 'banner3'];
    // const banner = document.querySelector('.banner');
    // let n = 0;
    // banner.className = 'autoWidth banner banner0';

    const {dataGoods, moreNavToggle, cartAdd} = this.props;
    // let dataGoodTmp = Object.assign([], {...dataGoods});
    const list = dataGoods.map(e => {
      return <GoodsList key={e.goodsId} {...e} cartAdd={cartAdd} />;
    });

    return (
      <section onClick={moreNavToggle}>
        <Banner />
        {/*<div className={cName}> </div>*/}
        <ul className="autoWidth lists">
          {list}
        </ul>
      </section>
    )
  }
}

export {Goods};