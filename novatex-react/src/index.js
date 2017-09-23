import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import './index.css';

import {TimeLime} from "./js/time-lime";
import {BackTop} from "./js/back-top";
import {RegisterLogin} from "./js/register-login";
import {Header} from "./js/header";
import {Footer} from "./js/footer";
import {Goods} from "./js/goods";
import {Cart} from "./js/cart";
import {Order} from "./js/order";
import {Detail} from "./js/detail/detail";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isMoreNav: false,
      dataGoods: [
        {
          goodsId: 1010101,
          name: 'SFJ-3335',
          title: '亚麻沙发垫棉麻布艺夏季简约现代四季通用灰纯色实木沙发巾套定制',
          price: '166',
          pic: 'SFJ-3335.jpg',
          pic_min: 'SFJ-3335-min.jpg',
          num_sale: 3335,
          detail: {
            goods: {
              property: {
                color: ['灰色'],
                suit: '组合沙发',
                material: '棉',
                size: ['70*70'],
                band: 'novatex',
                name: 'SFJ-3335',
                cat: '纯色',
                style: '现代中式'
              },
              pic: ['SFJ-3335-detail-0.jpg', 'SFJ-3335-detail-1.jpg', 'SFJ-3335-detail-2.jpg'],
            },
            comment: [
              {
                name: 'k董小妹',
                content: '撒都不想说了，自己看图吧，怎么可以这么好看，么么哒',
                date: '09.12',
              },
              {
                name: 'rmb6',
                content: '质量很好给5分，准备再买4块',
                date: '09.08',
              },
              {
                name: '伊***1',
                content: '宝贝收到了，质地好，做工精细，已经第二次购买了，颜色面料显高档，其中有一个买小了店家很快就答应给我换了一块大的，服务态度很棒！',
                date: '08.23',
              },
              {
                name: '芷***8',
                content: '一如既往的好',
                date: '08.20',
              },
              {
                name: 'i***p',
                content: '对比了很多家，刚开始买了一小片背巾来看效果，的确不错，最后订做了一整套，漂亮！',
                date: '08.17',
              },
              {
                name: '燕***5',
                content: '质感很好！',
                date: '08.07',
              },
              {
                name: '伊***1',
                content: '宝贝收到了，铺在沙发上非常上档次，亚麻面料质地好，颜色也很漂亮，非常喜欢哦！',
                date: '08.04',
              },
              {
                name: '7***y',
                content: '很好。多次买了。',
                date: '07.15',
              },
              {
                name: 'j***d',
                content: '第一次买这类东西，感觉不错。客服“纯”和前面的“多”都很好。我是老沙发翻新，上几张图。',
                date: '07.06',
              },
              {
                name: '阳***2',
                content: '挺满意的，物有所值，',
                date: '07.05',
              },
              {
                name: 'm***乐',
                content: '买垫子有点味道～～质感什么的还不错',
                date: '07.04',
              },
              {
                name: 'f***贝',
                content: '很好的宝贝已经是第二次购买了,感谢比尔的耐心很感动，尺寸非常合适已经铺上了',
                date: '07.04',
              },
              {
                name: '给***8',
                content: '好评，做工精细。',
                date: '06.24',
              },
              {
                name: 'h***j',
                content: '和我家颜色差不多。',
                date: '06.21',
              },
              {
                name: 'l***惠',
                content: '两次买的质量不一样 一个偏厚一个偏薄 刚买完没多久就便宜了 客服还是挺耐心挺好的',
                date: '06.20',
              },
              {
                name: 'l***8',
                content: '沙发垫确实还可以，防滑，柔软的。就是感觉放小了，洗后再缩水，就够呛。有点小贵！',
                date: '06.19',
              },
              {
                name: 'i***p',
                content: '买了几张，家人都说好',
                date: '06.14',
              },
            ],
          },
        },
        {
          goodsId: 1010201,
          name: 'SFJ-4200',
          title: '沙发垫田园生活布艺夏纯色绿色客厅简约现代组合套装四季沙发巾套',
          price: '114',
          pic: 'SFJ-4200.jpg',
          pic_min: 'SFJ-4200-min.jpg',
          num_sale: 4200,
          detail: {
            goods: {
              property: {
                color: ['灰色'],
                suit: '组合沙发',
                material: '棉',
                size: ['70*70'],
                band: 'novatex',
                name: 'SFJ-4200',
                cat: '纯色',
                style: '现代中式'
              },
              pic: ['SFJ-4200-detail-0.jpg', 'SFJ-4200-detail-1.jpg', 'SFJ-4200-detail-2.jpg'],
            },
            comment: [
              {
                name: 'k董小妹',
                content: '撒都不想说了，自己看图吧，怎么可以这么好看，么么哒',
                date: '09.12',
              },
              {
                name: 'rmb6',
                content: '质量很好给5分，准备再买4块',
                date: '09.08',
              },
              {
                name: '伊***1',
                content: '宝贝收到了，质地好，做工精细，已经第二次购买了，颜色面料显高档，其中有一个买小了店家很快就答应给我换了一块大的，服务态度很棒！',
                date: '08.23',
              },
              {
                name: '芷***8',
                content: '一如既往的好',
                date: '08.20',
              },
              {
                name: 'i***p',
                content: '对比了很多家，刚开始买了一小片背巾来看效果，的确不错，最后订做了一整套，漂亮！',
                date: '08.17',
              },
              {
                name: '燕***5',
                content: '质感很好！',
                date: '08.07',
              },
              {
                name: '伊***1',
                content: '宝贝收到了，铺在沙发上非常上档次，亚麻面料质地好，颜色也很漂亮，非常喜欢哦！',
                date: '08.04',
              },
              {
                name: '7***y',
                content: '很好。多次买了。',
                date: '07.15',
              },
              {
                name: 'j***d',
                content: '第一次买这类东西，感觉不错。客服“纯”和前面的“多”都很好。我是老沙发翻新，上几张图。',
                date: '07.06',
              },
              {
                name: '阳***2',
                content: '挺满意的，物有所值，',
                date: '07.05',
              },
              {
                name: 'm***乐',
                content: '买垫子有点味道～～质感什么的还不错',
                date: '07.04',
              },
              {
                name: 'f***贝',
                content: '很好的宝贝已经是第二次购买了,感谢比尔的耐心很感动，尺寸非常合适已经铺上了',
                date: '07.04',
              },
              {
                name: '给***8',
                content: '好评，做工精细。',
                date: '06.24',
              },
              {
                name: 'h***j',
                content: '和我家颜色差不多。',
                date: '06.21',
              },
              {
                name: 'l***惠',
                content: '两次买的质量不一样 一个偏厚一个偏薄 刚买完没多久就便宜了 客服还是挺耐心挺好的',
                date: '06.20',
              },
              {
                name: 'l***8',
                content: '沙发垫确实还可以，防滑，柔软的。就是感觉放小了，洗后再缩水，就够呛。有点小贵！',
                date: '06.19',
              },
              {
                name: 'i***p',
                content: '买了几张，家人都说好',
                date: '06.14',
              },
            ],
          },
        },
        {
          goodsId: 1010301,
          name: 'SFJ-3275',
          title: '2017春夏款仿亚麻沙发垫紫沙发巾纯色简约沙发垫布艺防滑',
          price: '129',
          pic: 'SFJ-3275.jpg',
          pic_min: 'SFJ-3275-min.jpg',
          num_sale: 3275,
          detail: {
            goods: {
              property: {
                color: ['灰色'],
                suit: '组合沙发',
                material: '棉',
                size: ['70*70'],
                band: 'novatex',
                name: 'SFJ-3275',
                cat: '纯色',
                style: '现代中式'
              },
              pic: ['SFJ-3275-detail-0.jpg', 'SFJ-3275-detail-1.jpg', 'SFJ-3275-detail-2.jpg'],
            },
            comment: [
              {
                name: 'k董小妹',
                content: '撒都不想说了，自己看图吧，怎么可以这么好看，么么哒',
                date: '09.12',
              },
              {
                name: 'rmb6',
                content: '质量很好给5分，准备再买4块',
                date: '09.08',
              },
              {
                name: '伊***1',
                content: '宝贝收到了，质地好，做工精细，已经第二次购买了，颜色面料显高档，其中有一个买小了店家很快就答应给我换了一块大的，服务态度很棒！',
                date: '08.23',
              },
              {
                name: '芷***8',
                content: '一如既往的好',
                date: '08.20',
              },
              {
                name: 'i***p',
                content: '对比了很多家，刚开始买了一小片背巾来看效果，的确不错，最后订做了一整套，漂亮！',
                date: '08.17',
              },
              {
                name: '燕***5',
                content: '质感很好！',
                date: '08.07',
              },
              {
                name: '伊***1',
                content: '宝贝收到了，铺在沙发上非常上档次，亚麻面料质地好，颜色也很漂亮，非常喜欢哦！',
                date: '08.04',
              },
              {
                name: '7***y',
                content: '很好。多次买了。',
                date: '07.15',
              },
              {
                name: 'j***d',
                content: '第一次买这类东西，感觉不错。客服“纯”和前面的“多”都很好。我是老沙发翻新，上几张图。',
                date: '07.06',
              },
              {
                name: '阳***2',
                content: '挺满意的，物有所值，',
                date: '07.05',
              },
              {
                name: 'm***乐',
                content: '买垫子有点味道～～质感什么的还不错',
                date: '07.04',
              },
              {
                name: 'f***贝',
                content: '很好的宝贝已经是第二次购买了,感谢比尔的耐心很感动，尺寸非常合适已经铺上了',
                date: '07.04',
              },
              {
                name: '给***8',
                content: '好评，做工精细。',
                date: '06.24',
              },
              {
                name: 'h***j',
                content: '和我家颜色差不多。',
                date: '06.21',
              },
              {
                name: 'l***惠',
                content: '两次买的质量不一样 一个偏厚一个偏薄 刚买完没多久就便宜了 客服还是挺耐心挺好的',
                date: '06.20',
              },
              {
                name: 'l***8',
                content: '沙发垫确实还可以，防滑，柔软的。就是感觉放小了，洗后再缩水，就够呛。有点小贵！',
                date: '06.19',
              },
              {
                name: 'i***p',
                content: '买了几张，家人都说好',
                date: '06.14',
              },
            ],
          },
        },
        {
          goodsId: 1010401,
          name: 'SFJ-62779',
          title: '亚麻沙发垫棉麻布艺夏季简约现代四季通用灰纯色实木沙发巾套定制',
          price: '128',
          pic: 'SFJ-62779.jpg',
          pic_min: 'SFJ-62779-min.jpg',
          num_sale: 62279,
          detail: {
            goods: {
              property: {
                color: ['灰色'],
                suit: '组合沙发',
                material: '棉',
                size: ['70*70'],
                band: 'novatex',
                name: 'SFJ-3335',
                cat: '纯色',
                style: '现代中式'
              },
              pic: ['SFJ-3335-detail-0.jpg', 'SFJ-3335-detail-1.jpg', 'SFJ-3335-detail-2.jpg'],
            },
            comment: [
              {
                name: 'k董小妹',
                content: '撒都不想说了，自己看图吧，怎么可以这么好看，么么哒',
                date: '09.12',
              },
              {
                name: 'rmb6',
                content: '质量很好给5分，准备再买4块',
                date: '09.08',
              },
              {
                name: '伊***1',
                content: '宝贝收到了，质地好，做工精细，已经第二次购买了，颜色面料显高档，其中有一个买小了店家很快就答应给我换了一块大的，服务态度很棒！',
                date: '08.23',
              },
              {
                name: '芷***8',
                content: '一如既往的好',
                date: '08.20',
              },
              {
                name: 'i***p',
                content: '对比了很多家，刚开始买了一小片背巾来看效果，的确不错，最后订做了一整套，漂亮！',
                date: '08.17',
              },
              {
                name: '燕***5',
                content: '质感很好！',
                date: '08.07',
              },
              {
                name: '伊***1',
                content: '宝贝收到了，铺在沙发上非常上档次，亚麻面料质地好，颜色也很漂亮，非常喜欢哦！',
                date: '08.04',
              },
              {
                name: '7***y',
                content: '很好。多次买了。',
                date: '07.15',
              },
              {
                name: 'j***d',
                content: '第一次买这类东西，感觉不错。客服“纯”和前面的“多”都很好。我是老沙发翻新，上几张图。',
                date: '07.06',
              },
              {
                name: '阳***2',
                content: '挺满意的，物有所值，',
                date: '07.05',
              },
              {
                name: 'm***乐',
                content: '买垫子有点味道～～质感什么的还不错',
                date: '07.04',
              },
              {
                name: 'f***贝',
                content: '很好的宝贝已经是第二次购买了,感谢比尔的耐心很感动，尺寸非常合适已经铺上了',
                date: '07.04',
              },
              {
                name: '给***8',
                content: '好评，做工精细。',
                date: '06.24',
              },
              {
                name: 'h***j',
                content: '和我家颜色差不多。',
                date: '06.21',
              },
              {
                name: 'l***惠',
                content: '两次买的质量不一样 一个偏厚一个偏薄 刚买完没多久就便宜了 客服还是挺耐心挺好的',
                date: '06.20',
              },
              {
                name: 'l***8',
                content: '沙发垫确实还可以，防滑，柔软的。就是感觉放小了，洗后再缩水，就够呛。有点小贵！',
                date: '06.19',
              },
              {
                name: 'i***p',
                content: '买了几张，家人都说好',
                date: '06.14',
              },
            ],
          },
        },
        {
          goodsId: 1010501,
          name: 'SFJ-HD078小绣花',
          title: '亚麻沙发垫棉麻布艺夏季简约现代四季通用灰纯色实木沙发巾套定制',
          price: '134',
          pic: 'SFJ-HD078xiuhua.jpg',
          pic_min: 'SFJ-HD078xiuhua-min.jpg',
          num_sale: 78,
          detail: {
            goods: {
              property: {
                color: ['灰色'],
                suit: '组合沙发',
                material: '棉',
                size: ['70*70'],
                band: 'novatex',
                name: 'SFJ-3335',
                cat: '纯色',
                style: '现代中式'
              },
              pic: ['SFJ-3335-detail-0.jpg', 'SFJ-3335-detail-1.jpg', 'SFJ-3335-detail-2.jpg'],
            },
            comment: [
              {
                name: 'k董小妹',
                content: '撒都不想说了，自己看图吧，怎么可以这么好看，么么哒',
                date: '09.12',
              },
              {
                name: 'rmb6',
                content: '质量很好给5分，准备再买4块',
                date: '09.08',
              },
              {
                name: '伊***1',
                content: '宝贝收到了，质地好，做工精细，已经第二次购买了，颜色面料显高档，其中有一个买小了店家很快就答应给我换了一块大的，服务态度很棒！',
                date: '08.23',
              },
              {
                name: '芷***8',
                content: '一如既往的好',
                date: '08.20',
              },
              {
                name: 'i***p',
                content: '对比了很多家，刚开始买了一小片背巾来看效果，的确不错，最后订做了一整套，漂亮！',
                date: '08.17',
              },
              {
                name: '燕***5',
                content: '质感很好！',
                date: '08.07',
              },
              {
                name: '伊***1',
                content: '宝贝收到了，铺在沙发上非常上档次，亚麻面料质地好，颜色也很漂亮，非常喜欢哦！',
                date: '08.04',
              },
              {
                name: '7***y',
                content: '很好。多次买了。',
                date: '07.15',
              },
              {
                name: 'j***d',
                content: '第一次买这类东西，感觉不错。客服“纯”和前面的“多”都很好。我是老沙发翻新，上几张图。',
                date: '07.06',
              },
              {
                name: '阳***2',
                content: '挺满意的，物有所值，',
                date: '07.05',
              },
              {
                name: 'm***乐',
                content: '买垫子有点味道～～质感什么的还不错',
                date: '07.04',
              },
              {
                name: 'f***贝',
                content: '很好的宝贝已经是第二次购买了,感谢比尔的耐心很感动，尺寸非常合适已经铺上了',
                date: '07.04',
              },
              {
                name: '给***8',
                content: '好评，做工精细。',
                date: '06.24',
              },
              {
                name: 'h***j',
                content: '和我家颜色差不多。',
                date: '06.21',
              },
              {
                name: 'l***惠',
                content: '两次买的质量不一样 一个偏厚一个偏薄 刚买完没多久就便宜了 客服还是挺耐心挺好的',
                date: '06.20',
              },
              {
                name: 'l***8',
                content: '沙发垫确实还可以，防滑，柔软的。就是感觉放小了，洗后再缩水，就够呛。有点小贵！',
                date: '06.19',
              },
              {
                name: 'i***p',
                content: '买了几张，家人都说好',
                date: '06.14',
              },
            ],
          },
        },
        {
          goodsId: 1010601,
          name: 'SFJ-4187',
          title: '亚麻沙发垫棉麻布艺夏季简约现代四季通用灰纯色实木沙发巾套定制',
          price: '61',
          pic: 'SFJ-4187.jpg',
          pic_min: 'SFJ-4187-min.jpg',
          num_sale: 4187,
          detail: {
            goods: {
              property: {
                color: ['灰色'],
                suit: '组合沙发',
                material: '棉',
                size: ['70*70'],
                band: 'novatex',
                name: 'SFJ-3335',
                cat: '纯色',
                style: '现代中式'
              },
              pic: ['SFJ-3335-detail-0.jpg', 'SFJ-3335-detail-1.jpg', 'SFJ-3335-detail-2.jpg'],
            },
            comment: [
              {
                name: 'k董小妹',
                content: '撒都不想说了，自己看图吧，怎么可以这么好看，么么哒',
                date: '09.12',
              },
              {
                name: 'rmb6',
                content: '质量很好给5分，准备再买4块',
                date: '09.08',
              },
              {
                name: '伊***1',
                content: '宝贝收到了，质地好，做工精细，已经第二次购买了，颜色面料显高档，其中有一个买小了店家很快就答应给我换了一块大的，服务态度很棒！',
                date: '08.23',
              },
              {
                name: '芷***8',
                content: '一如既往的好',
                date: '08.20',
              },
              {
                name: 'i***p',
                content: '对比了很多家，刚开始买了一小片背巾来看效果，的确不错，最后订做了一整套，漂亮！',
                date: '08.17',
              },
              {
                name: '燕***5',
                content: '质感很好！',
                date: '08.07',
              },
              {
                name: '伊***1',
                content: '宝贝收到了，铺在沙发上非常上档次，亚麻面料质地好，颜色也很漂亮，非常喜欢哦！',
                date: '08.04',
              },
              {
                name: '7***y',
                content: '很好。多次买了。',
                date: '07.15',
              },
              {
                name: 'j***d',
                content: '第一次买这类东西，感觉不错。客服“纯”和前面的“多”都很好。我是老沙发翻新，上几张图。',
                date: '07.06',
              },
              {
                name: '阳***2',
                content: '挺满意的，物有所值，',
                date: '07.05',
              },
              {
                name: 'm***乐',
                content: '买垫子有点味道～～质感什么的还不错',
                date: '07.04',
              },
              {
                name: 'f***贝',
                content: '很好的宝贝已经是第二次购买了,感谢比尔的耐心很感动，尺寸非常合适已经铺上了',
                date: '07.04',
              },
              {
                name: '给***8',
                content: '好评，做工精细。',
                date: '06.24',
              },
              {
                name: 'h***j',
                content: '和我家颜色差不多。',
                date: '06.21',
              },
              {
                name: 'l***惠',
                content: '两次买的质量不一样 一个偏厚一个偏薄 刚买完没多久就便宜了 客服还是挺耐心挺好的',
                date: '06.20',
              },
              {
                name: 'l***8',
                content: '沙发垫确实还可以，防滑，柔软的。就是感觉放小了，洗后再缩水，就够呛。有点小贵！',
                date: '06.19',
              },
              {
                name: 'i***p',
                content: '买了几张，家人都说好',
                date: '06.14',
              },
            ],
          },
        },
        {
          goodsId: 1010701,
          name: 'SFJ-3385',
          title: '亚麻沙发垫棉麻布艺夏季简约现代四季通用灰纯色实木沙发巾套定制',
          price: '140',
          pic: 'SFJ-3385.jpg',
          pic_min: 'SFJ-3385-min.jpg',
          num_sale: 3385,
          detail: {
            goods: {
              property: {
                color: ['灰色'],
                suit: '组合沙发',
                material: '棉',
                size: ['70*70'],
                band: 'novatex',
                name: 'SFJ-3335',
                cat: '纯色',
                style: '现代中式'
              },
              pic: ['SFJ-3335-detail-0.jpg', 'SFJ-3335-detail-1.jpg', 'SFJ-3335-detail-2.jpg'],
            },
            comment: [
              {
                name: 'k董小妹',
                content: '撒都不想说了，自己看图吧，怎么可以这么好看，么么哒',
                date: '09.12',
              },
              {
                name: 'rmb6',
                content: '质量很好给5分，准备再买4块',
                date: '09.08',
              },
              {
                name: '伊***1',
                content: '宝贝收到了，质地好，做工精细，已经第二次购买了，颜色面料显高档，其中有一个买小了店家很快就答应给我换了一块大的，服务态度很棒！',
                date: '08.23',
              },
              {
                name: '芷***8',
                content: '一如既往的好',
                date: '08.20',
              },
              {
                name: 'i***p',
                content: '对比了很多家，刚开始买了一小片背巾来看效果，的确不错，最后订做了一整套，漂亮！',
                date: '08.17',
              },
              {
                name: '燕***5',
                content: '质感很好！',
                date: '08.07',
              },
              {
                name: '伊***1',
                content: '宝贝收到了，铺在沙发上非常上档次，亚麻面料质地好，颜色也很漂亮，非常喜欢哦！',
                date: '08.04',
              },
              {
                name: '7***y',
                content: '很好。多次买了。',
                date: '07.15',
              },
              {
                name: 'j***d',
                content: '第一次买这类东西，感觉不错。客服“纯”和前面的“多”都很好。我是老沙发翻新，上几张图。',
                date: '07.06',
              },
              {
                name: '阳***2',
                content: '挺满意的，物有所值，',
                date: '07.05',
              },
              {
                name: 'm***乐',
                content: '买垫子有点味道～～质感什么的还不错',
                date: '07.04',
              },
              {
                name: 'f***贝',
                content: '很好的宝贝已经是第二次购买了,感谢比尔的耐心很感动，尺寸非常合适已经铺上了',
                date: '07.04',
              },
              {
                name: '给***8',
                content: '好评，做工精细。',
                date: '06.24',
              },
              {
                name: 'h***j',
                content: '和我家颜色差不多。',
                date: '06.21',
              },
              {
                name: 'l***惠',
                content: '两次买的质量不一样 一个偏厚一个偏薄 刚买完没多久就便宜了 客服还是挺耐心挺好的',
                date: '06.20',
              },
              {
                name: 'l***8',
                content: '沙发垫确实还可以，防滑，柔软的。就是感觉放小了，洗后再缩水，就够呛。有点小贵！',
                date: '06.19',
              },
              {
                name: 'i***p',
                content: '买了几张，家人都说好',
                date: '06.14',
              },
            ],
          },
        },
        {
          goodsId: 1010801,
          name: 'SFJ-HD021',
          title: '亚麻沙发垫棉麻布艺夏季简约现代四季通用灰纯色实木沙发巾套定制',
          price: '94',
          pic: 'SFJ-HD021.jpg',
          pic_min: 'SFJ-HD021-min.jpg',
          num_sale: 21,
          detail: {
            goods: {
              property: {
                color: ['灰色'],
                suit: '组合沙发',
                material: '棉',
                size: ['70*70'],
                band: 'novatex',
                name: 'SFJ-3335',
                cat: '纯色',
                style: '现代中式'
              },
              pic: ['SFJ-3335-detail-0.jpg', 'SFJ-3335-detail-1.jpg', 'SFJ-3335-detail-2.jpg'],
            },
            comment: [
              {
                name: 'k董小妹',
                content: '撒都不想说了，自己看图吧，怎么可以这么好看，么么哒',
                date: '09.12',
              },
              {
                name: 'rmb6',
                content: '质量很好给5分，准备再买4块',
                date: '09.08',
              },
              {
                name: '伊***1',
                content: '宝贝收到了，质地好，做工精细，已经第二次购买了，颜色面料显高档，其中有一个买小了店家很快就答应给我换了一块大的，服务态度很棒！',
                date: '08.23',
              },
              {
                name: '芷***8',
                content: '一如既往的好',
                date: '08.20',
              },
              {
                name: 'i***p',
                content: '对比了很多家，刚开始买了一小片背巾来看效果，的确不错，最后订做了一整套，漂亮！',
                date: '08.17',
              },
              {
                name: '燕***5',
                content: '质感很好！',
                date: '08.07',
              },
              {
                name: '伊***1',
                content: '宝贝收到了，铺在沙发上非常上档次，亚麻面料质地好，颜色也很漂亮，非常喜欢哦！',
                date: '08.04',
              },
              {
                name: '7***y',
                content: '很好。多次买了。',
                date: '07.15',
              },
              {
                name: 'j***d',
                content: '第一次买这类东西，感觉不错。客服“纯”和前面的“多”都很好。我是老沙发翻新，上几张图。',
                date: '07.06',
              },
              {
                name: '阳***2',
                content: '挺满意的，物有所值，',
                date: '07.05',
              },
              {
                name: 'm***乐',
                content: '买垫子有点味道～～质感什么的还不错',
                date: '07.04',
              },
              {
                name: 'f***贝',
                content: '很好的宝贝已经是第二次购买了,感谢比尔的耐心很感动，尺寸非常合适已经铺上了',
                date: '07.04',
              },
              {
                name: '给***8',
                content: '好评，做工精细。',
                date: '06.24',
              },
              {
                name: 'h***j',
                content: '和我家颜色差不多。',
                date: '06.21',
              },
              {
                name: 'l***惠',
                content: '两次买的质量不一样 一个偏厚一个偏薄 刚买完没多久就便宜了 客服还是挺耐心挺好的',
                date: '06.20',
              },
              {
                name: 'l***8',
                content: '沙发垫确实还可以，防滑，柔软的。就是感觉放小了，洗后再缩水，就够呛。有点小贵！',
                date: '06.19',
              },
              {
                name: 'i***p',
                content: '买了几张，家人都说好',
                date: '06.14',
              },
            ],
          },
        },
        {
          goodsId: 1010901,
          name: 'SFJ-3391',
          title: '亚麻沙发垫棉麻布艺夏季简约现代四季通用灰纯色实木沙发巾套定制',
          price: '151',
          pic: 'SFJ-3391.jpg',
          pic_min: 'SFJ-3391-min.jpg',
          num_sale: 3391,
          detail: {
            goods: {
              property: {
                color: ['灰色'],
                suit: '组合沙发',
                material: '棉',
                size: ['70*70'],
                band: 'novatex',
                name: 'SFJ-3335',
                cat: '纯色',
                style: '现代中式'
              },
              pic: ['SFJ-3335-detail-0.jpg', 'SFJ-3335-detail-1.jpg', 'SFJ-3335-detail-2.jpg'],
            },
            comment: [
              {
                name: 'k董小妹',
                content: '撒都不想说了，自己看图吧，怎么可以这么好看，么么哒',
                date: '09.12',
              },
              {
                name: 'rmb6',
                content: '质量很好给5分，准备再买4块',
                date: '09.08',
              },
              {
                name: '伊***1',
                content: '宝贝收到了，质地好，做工精细，已经第二次购买了，颜色面料显高档，其中有一个买小了店家很快就答应给我换了一块大的，服务态度很棒！',
                date: '08.23',
              },
              {
                name: '芷***8',
                content: '一如既往的好',
                date: '08.20',
              },
              {
                name: 'i***p',
                content: '对比了很多家，刚开始买了一小片背巾来看效果，的确不错，最后订做了一整套，漂亮！',
                date: '08.17',
              },
              {
                name: '燕***5',
                content: '质感很好！',
                date: '08.07',
              },
              {
                name: '伊***1',
                content: '宝贝收到了，铺在沙发上非常上档次，亚麻面料质地好，颜色也很漂亮，非常喜欢哦！',
                date: '08.04',
              },
              {
                name: '7***y',
                content: '很好。多次买了。',
                date: '07.15',
              },
              {
                name: 'j***d',
                content: '第一次买这类东西，感觉不错。客服“纯”和前面的“多”都很好。我是老沙发翻新，上几张图。',
                date: '07.06',
              },
              {
                name: '阳***2',
                content: '挺满意的，物有所值，',
                date: '07.05',
              },
              {
                name: 'm***乐',
                content: '买垫子有点味道～～质感什么的还不错',
                date: '07.04',
              },
              {
                name: 'f***贝',
                content: '很好的宝贝已经是第二次购买了,感谢比尔的耐心很感动，尺寸非常合适已经铺上了',
                date: '07.04',
              },
              {
                name: '给***8',
                content: '好评，做工精细。',
                date: '06.24',
              },
              {
                name: 'h***j',
                content: '和我家颜色差不多。',
                date: '06.21',
              },
              {
                name: 'l***惠',
                content: '两次买的质量不一样 一个偏厚一个偏薄 刚买完没多久就便宜了 客服还是挺耐心挺好的',
                date: '06.20',
              },
              {
                name: 'l***8',
                content: '沙发垫确实还可以，防滑，柔软的。就是感觉放小了，洗后再缩水，就够呛。有点小贵！',
                date: '06.19',
              },
              {
                name: 'i***p',
                content: '买了几张，家人都说好',
                date: '06.14',
              },
            ],
          },
        },
        {
          goodsId: 1011001,
          name: 'SFJ-C4369',
          title: '亚麻沙发垫棉麻布艺夏季简约现代四季通用灰纯色实木沙发巾套定制',
          price: '61',
          pic: 'SFJ-C4369.jpg',
          pic_min: 'SFJ-C4369-min.jpg',
          num_sale: 4369,
          detail: {
            goods: {
              property: {
                color: ['灰色'],
                suit: '组合沙发',
                material: '棉',
                size: ['70*70'],
                band: 'novatex',
                name: 'SFJ-3335',
                cat: '纯色',
                style: '现代中式'
              },
              pic: ['SFJ-3335-detail-0.jpg', 'SFJ-3335-detail-1.jpg', 'SFJ-3335-detail-2.jpg'],
            },
            comment: [
              {
                name: 'k董小妹',
                content: '撒都不想说了，自己看图吧，怎么可以这么好看，么么哒',
                date: '09.12',
              },
              {
                name: 'rmb6',
                content: '质量很好给5分，准备再买4块',
                date: '09.08',
              },
              {
                name: '伊***1',
                content: '宝贝收到了，质地好，做工精细，已经第二次购买了，颜色面料显高档，其中有一个买小了店家很快就答应给我换了一块大的，服务态度很棒！',
                date: '08.23',
              },
              {
                name: '芷***8',
                content: '一如既往的好',
                date: '08.20',
              },
              {
                name: 'i***p',
                content: '对比了很多家，刚开始买了一小片背巾来看效果，的确不错，最后订做了一整套，漂亮！',
                date: '08.17',
              },
              {
                name: '燕***5',
                content: '质感很好！',
                date: '08.07',
              },
              {
                name: '伊***1',
                content: '宝贝收到了，铺在沙发上非常上档次，亚麻面料质地好，颜色也很漂亮，非常喜欢哦！',
                date: '08.04',
              },
              {
                name: '7***y',
                content: '很好。多次买了。',
                date: '07.15',
              },
              {
                name: 'j***d',
                content: '第一次买这类东西，感觉不错。客服“纯”和前面的“多”都很好。我是老沙发翻新，上几张图。',
                date: '07.06',
              },
              {
                name: '阳***2',
                content: '挺满意的，物有所值，',
                date: '07.05',
              },
              {
                name: 'm***乐',
                content: '买垫子有点味道～～质感什么的还不错',
                date: '07.04',
              },
              {
                name: 'f***贝',
                content: '很好的宝贝已经是第二次购买了,感谢比尔的耐心很感动，尺寸非常合适已经铺上了',
                date: '07.04',
              },
              {
                name: '给***8',
                content: '好评，做工精细。',
                date: '06.24',
              },
              {
                name: 'h***j',
                content: '和我家颜色差不多。',
                date: '06.21',
              },
              {
                name: 'l***惠',
                content: '两次买的质量不一样 一个偏厚一个偏薄 刚买完没多久就便宜了 客服还是挺耐心挺好的',
                date: '06.20',
              },
              {
                name: 'l***8',
                content: '沙发垫确实还可以，防滑，柔软的。就是感觉放小了，洗后再缩水，就够呛。有点小贵！',
                date: '06.19',
              },
              {
                name: 'i***p',
                content: '买了几张，家人都说好',
                date: '06.14',
              },
            ],
          },
        },
        {
          goodsId: 1011101,
          name: 'SFJ-1201',
          title: '亚麻沙发垫棉麻布艺夏季简约现代四季通用灰纯色实木沙发巾套定制',
          price: '72',
          pic: 'SFJ-1201.jpg',
          pic_min: 'SFJ-1201-min.jpg',
          num_sale: 1201,
          detail: {
            goods: {
              property: {
                color: ['灰色'],
                suit: '组合沙发',
                material: '棉',
                size: ['70*70'],
                band: 'novatex',
                name: 'SFJ-3335',
                cat: '纯色',
                style: '现代中式'
              },
              pic: ['SFJ-3335-detail-0.jpg', 'SFJ-3335-detail-1.jpg', 'SFJ-3335-detail-2.jpg'],
            },
            comment: [
              {
                name: 'k董小妹',
                content: '撒都不想说了，自己看图吧，怎么可以这么好看，么么哒',
                date: '09.12',
              },
              {
                name: 'rmb6',
                content: '质量很好给5分，准备再买4块',
                date: '09.08',
              },
              {
                name: '伊***1',
                content: '宝贝收到了，质地好，做工精细，已经第二次购买了，颜色面料显高档，其中有一个买小了店家很快就答应给我换了一块大的，服务态度很棒！',
                date: '08.23',
              },
              {
                name: '芷***8',
                content: '一如既往的好',
                date: '08.20',
              },
              {
                name: 'i***p',
                content: '对比了很多家，刚开始买了一小片背巾来看效果，的确不错，最后订做了一整套，漂亮！',
                date: '08.17',
              },
              {
                name: '燕***5',
                content: '质感很好！',
                date: '08.07',
              },
              {
                name: '伊***1',
                content: '宝贝收到了，铺在沙发上非常上档次，亚麻面料质地好，颜色也很漂亮，非常喜欢哦！',
                date: '08.04',
              },
              {
                name: '7***y',
                content: '很好。多次买了。',
                date: '07.15',
              },
              {
                name: 'j***d',
                content: '第一次买这类东西，感觉不错。客服“纯”和前面的“多”都很好。我是老沙发翻新，上几张图。',
                date: '07.06',
              },
              {
                name: '阳***2',
                content: '挺满意的，物有所值，',
                date: '07.05',
              },
              {
                name: 'm***乐',
                content: '买垫子有点味道～～质感什么的还不错',
                date: '07.04',
              },
              {
                name: 'f***贝',
                content: '很好的宝贝已经是第二次购买了,感谢比尔的耐心很感动，尺寸非常合适已经铺上了',
                date: '07.04',
              },
              {
                name: '给***8',
                content: '好评，做工精细。',
                date: '06.24',
              },
              {
                name: 'h***j',
                content: '和我家颜色差不多。',
                date: '06.21',
              },
              {
                name: 'l***惠',
                content: '两次买的质量不一样 一个偏厚一个偏薄 刚买完没多久就便宜了 客服还是挺耐心挺好的',
                date: '06.20',
              },
              {
                name: 'l***8',
                content: '沙发垫确实还可以，防滑，柔软的。就是感觉放小了，洗后再缩水，就够呛。有点小贵！',
                date: '06.19',
              },
              {
                name: 'i***p',
                content: '买了几张，家人都说好',
                date: '06.14',
              },
            ],
          },
        },
        {
          goodsId: 1011201,
          name: 'SFJ-HD078圆点',
          title: '亚麻沙发垫棉麻布艺夏季简约现代四季通用灰纯色实木沙发巾套定制',
          price: '139',
          pic: 'SFJ-HD078yuandian.jpg',
          pic_min: 'SFJ-HD078yuandian-min.jpg',
          num_sale: 78,
          detail: {
            goods: {
              property: {
                color: ['灰色'],
                suit: '组合沙发',
                material: '棉',
                size: ['70*70'],
                band: 'novatex',
                name: 'SFJ-3335',
                cat: '纯色',
                style: '现代中式'
              },
              pic: ['SFJ-3335-detail-0.jpg', 'SFJ-3335-detail-1.jpg', 'SFJ-3335-detail-2.jpg'],
            },
            comment: [
              {
                name: 'k董小妹',
                content: '撒都不想说了，自己看图吧，怎么可以这么好看，么么哒',
                date: '09.12',
              },
              {
                name: 'rmb6',
                content: '质量很好给5分，准备再买4块',
                date: '09.08',
              },
              {
                name: '伊***1',
                content: '宝贝收到了，质地好，做工精细，已经第二次购买了，颜色面料显高档，其中有一个买小了店家很快就答应给我换了一块大的，服务态度很棒！',
                date: '08.23',
              },
              {
                name: '芷***8',
                content: '一如既往的好',
                date: '08.20',
              },
              {
                name: 'i***p',
                content: '对比了很多家，刚开始买了一小片背巾来看效果，的确不错，最后订做了一整套，漂亮！',
                date: '08.17',
              },
              {
                name: '燕***5',
                content: '质感很好！',
                date: '08.07',
              },
              {
                name: '伊***1',
                content: '宝贝收到了，铺在沙发上非常上档次，亚麻面料质地好，颜色也很漂亮，非常喜欢哦！',
                date: '08.04',
              },
              {
                name: '7***y',
                content: '很好。多次买了。',
                date: '07.15',
              },
              {
                name: 'j***d',
                content: '第一次买这类东西，感觉不错。客服“纯”和前面的“多”都很好。我是老沙发翻新，上几张图。',
                date: '07.06',
              },
              {
                name: '阳***2',
                content: '挺满意的，物有所值，',
                date: '07.05',
              },
              {
                name: 'm***乐',
                content: '买垫子有点味道～～质感什么的还不错',
                date: '07.04',
              },
              {
                name: 'f***贝',
                content: '很好的宝贝已经是第二次购买了,感谢比尔的耐心很感动，尺寸非常合适已经铺上了',
                date: '07.04',
              },
              {
                name: '给***8',
                content: '好评，做工精细。',
                date: '06.24',
              },
              {
                name: 'h***j',
                content: '和我家颜色差不多。',
                date: '06.21',
              },
              {
                name: 'l***惠',
                content: '两次买的质量不一样 一个偏厚一个偏薄 刚买完没多久就便宜了 客服还是挺耐心挺好的',
                date: '06.20',
              },
              {
                name: 'l***8',
                content: '沙发垫确实还可以，防滑，柔软的。就是感觉放小了，洗后再缩水，就够呛。有点小贵！',
                date: '06.19',
              },
              {
                name: 'i***p',
                content: '买了几张，家人都说好',
                date: '06.14',
              },
            ],
          },
        },
        {
          goodsId: 1020101,
          name: 'BZ-4183',
          title: '亚麻沙发垫棉麻布艺夏季简约现代四季通用灰纯色实木沙发巾套定制',
          price: '26',
          pic: 'BZ-4183.jpg',
          pic_min: 'BZ-4183-min.jpg',
          num_sale: 4183,
          detail: {
            goods: {
              property: {
                color: ['灰色'],
                suit: '组合沙发',
                material: '棉',
                size: ['70*70'],
                band: 'novatex',
                name: 'SFJ-3335',
                cat: '纯色',
                style: '现代中式'
              },
              pic: ['SFJ-3335-detail-0.jpg', 'SFJ-3335-detail-1.jpg', 'SFJ-3335-detail-2.jpg'],
            },
            comment: [
              {
                name: 'k董小妹',
                content: '撒都不想说了，自己看图吧，怎么可以这么好看，么么哒',
                date: '09.12',
              },
              {
                name: 'rmb6',
                content: '质量很好给5分，准备再买4块',
                date: '09.08',
              },
              {
                name: '伊***1',
                content: '宝贝收到了，质地好，做工精细，已经第二次购买了，颜色面料显高档，其中有一个买小了店家很快就答应给我换了一块大的，服务态度很棒！',
                date: '08.23',
              },
              {
                name: '芷***8',
                content: '一如既往的好',
                date: '08.20',
              },
              {
                name: 'i***p',
                content: '对比了很多家，刚开始买了一小片背巾来看效果，的确不错，最后订做了一整套，漂亮！',
                date: '08.17',
              },
              {
                name: '燕***5',
                content: '质感很好！',
                date: '08.07',
              },
              {
                name: '伊***1',
                content: '宝贝收到了，铺在沙发上非常上档次，亚麻面料质地好，颜色也很漂亮，非常喜欢哦！',
                date: '08.04',
              },
              {
                name: '7***y',
                content: '很好。多次买了。',
                date: '07.15',
              },
              {
                name: 'j***d',
                content: '第一次买这类东西，感觉不错。客服“纯”和前面的“多”都很好。我是老沙发翻新，上几张图。',
                date: '07.06',
              },
              {
                name: '阳***2',
                content: '挺满意的，物有所值，',
                date: '07.05',
              },
              {
                name: 'm***乐',
                content: '买垫子有点味道～～质感什么的还不错',
                date: '07.04',
              },
              {
                name: 'f***贝',
                content: '很好的宝贝已经是第二次购买了,感谢比尔的耐心很感动，尺寸非常合适已经铺上了',
                date: '07.04',
              },
              {
                name: '给***8',
                content: '好评，做工精细。',
                date: '06.24',
              },
              {
                name: 'h***j',
                content: '和我家颜色差不多。',
                date: '06.21',
              },
              {
                name: 'l***惠',
                content: '两次买的质量不一样 一个偏厚一个偏薄 刚买完没多久就便宜了 客服还是挺耐心挺好的',
                date: '06.20',
              },
              {
                name: 'l***8',
                content: '沙发垫确实还可以，防滑，柔软的。就是感觉放小了，洗后再缩水，就够呛。有点小贵！',
                date: '06.19',
              },
              {
                name: 'i***p',
                content: '买了几张，家人都说好',
                date: '06.14',
              },
            ],
          },
        },
        {
          goodsId: 1020201,
          name: 'BZ-52272',
          title: '亚麻沙发垫棉麻布艺夏季简约现代四季通用灰纯色实木沙发巾套定制',
          price: '85',
          pic: 'BZ-52272.jpg',
          pic_min: 'BZ-52272-min.jpg',
          num_sale: 52272,
          detail: {
            goods: {
              property: {
                color: ['灰色'],
                suit: '组合沙发',
                material: '棉',
                size: ['70*70'],
                band: 'novatex',
                name: 'SFJ-3335',
                cat: '纯色',
                style: '现代中式'
              },
              pic: ['SFJ-3335-detail-0.jpg', 'SFJ-3335-detail-1.jpg', 'SFJ-3335-detail-2.jpg'],
            },
            comment: [
              {
                name: 'k董小妹',
                content: '撒都不想说了，自己看图吧，怎么可以这么好看，么么哒',
                date: '09.12',
              },
              {
                name: 'rmb6',
                content: '质量很好给5分，准备再买4块',
                date: '09.08',
              },
              {
                name: '伊***1',
                content: '宝贝收到了，质地好，做工精细，已经第二次购买了，颜色面料显高档，其中有一个买小了店家很快就答应给我换了一块大的，服务态度很棒！',
                date: '08.23',
              },
              {
                name: '芷***8',
                content: '一如既往的好',
                date: '08.20',
              },
              {
                name: 'i***p',
                content: '对比了很多家，刚开始买了一小片背巾来看效果，的确不错，最后订做了一整套，漂亮！',
                date: '08.17',
              },
              {
                name: '燕***5',
                content: '质感很好！',
                date: '08.07',
              },
              {
                name: '伊***1',
                content: '宝贝收到了，铺在沙发上非常上档次，亚麻面料质地好，颜色也很漂亮，非常喜欢哦！',
                date: '08.04',
              },
              {
                name: '7***y',
                content: '很好。多次买了。',
                date: '07.15',
              },
              {
                name: 'j***d',
                content: '第一次买这类东西，感觉不错。客服“纯”和前面的“多”都很好。我是老沙发翻新，上几张图。',
                date: '07.06',
              },
              {
                name: '阳***2',
                content: '挺满意的，物有所值，',
                date: '07.05',
              },
              {
                name: 'm***乐',
                content: '买垫子有点味道～～质感什么的还不错',
                date: '07.04',
              },
              {
                name: 'f***贝',
                content: '很好的宝贝已经是第二次购买了,感谢比尔的耐心很感动，尺寸非常合适已经铺上了',
                date: '07.04',
              },
              {
                name: '给***8',
                content: '好评，做工精细。',
                date: '06.24',
              },
              {
                name: 'h***j',
                content: '和我家颜色差不多。',
                date: '06.21',
              },
              {
                name: 'l***惠',
                content: '两次买的质量不一样 一个偏厚一个偏薄 刚买完没多久就便宜了 客服还是挺耐心挺好的',
                date: '06.20',
              },
              {
                name: 'l***8',
                content: '沙发垫确实还可以，防滑，柔软的。就是感觉放小了，洗后再缩水，就够呛。有点小贵！',
                date: '06.19',
              },
              {
                name: 'i***p',
                content: '买了几张，家人都说好',
                date: '06.14',
              },
            ],
          },
        },
        {
          goodsId: 1020301,
          name: 'BZ-4200',
          title: '亚麻沙发垫棉麻布艺夏季简约现代四季通用灰纯色实木沙发巾套定制',
          price: '17',
          pic: 'BZ-4200.jpg',
          pic_min: 'BZ-4200-min.jpg',
          num_sale: 4200,
          detail: {
            goods: {
              property: {
                color: ['灰色'],
                suit: '组合沙发',
                material: '棉',
                size: ['70*70'],
                band: 'novatex',
                name: 'SFJ-3335',
                cat: '纯色',
                style: '现代中式'
              },
              pic: ['SFJ-3335-detail-0.jpg', 'SFJ-3335-detail-1.jpg', 'SFJ-3335-detail-2.jpg'],
            },
            comment: [
              {
                name: 'k董小妹',
                content: '撒都不想说了，自己看图吧，怎么可以这么好看，么么哒',
                date: '09.12',
              },
              {
                name: 'rmb6',
                content: '质量很好给5分，准备再买4块',
                date: '09.08',
              },
              {
                name: '伊***1',
                content: '宝贝收到了，质地好，做工精细，已经第二次购买了，颜色面料显高档，其中有一个买小了店家很快就答应给我换了一块大的，服务态度很棒！',
                date: '08.23',
              },
              {
                name: '芷***8',
                content: '一如既往的好',
                date: '08.20',
              },
              {
                name: 'i***p',
                content: '对比了很多家，刚开始买了一小片背巾来看效果，的确不错，最后订做了一整套，漂亮！',
                date: '08.17',
              },
              {
                name: '燕***5',
                content: '质感很好！',
                date: '08.07',
              },
              {
                name: '伊***1',
                content: '宝贝收到了，铺在沙发上非常上档次，亚麻面料质地好，颜色也很漂亮，非常喜欢哦！',
                date: '08.04',
              },
              {
                name: '7***y',
                content: '很好。多次买了。',
                date: '07.15',
              },
              {
                name: 'j***d',
                content: '第一次买这类东西，感觉不错。客服“纯”和前面的“多”都很好。我是老沙发翻新，上几张图。',
                date: '07.06',
              },
              {
                name: '阳***2',
                content: '挺满意的，物有所值，',
                date: '07.05',
              },
              {
                name: 'm***乐',
                content: '买垫子有点味道～～质感什么的还不错',
                date: '07.04',
              },
              {
                name: 'f***贝',
                content: '很好的宝贝已经是第二次购买了,感谢比尔的耐心很感动，尺寸非常合适已经铺上了',
                date: '07.04',
              },
              {
                name: '给***8',
                content: '好评，做工精细。',
                date: '06.24',
              },
              {
                name: 'h***j',
                content: '和我家颜色差不多。',
                date: '06.21',
              },
              {
                name: 'l***惠',
                content: '两次买的质量不一样 一个偏厚一个偏薄 刚买完没多久就便宜了 客服还是挺耐心挺好的',
                date: '06.20',
              },
              {
                name: 'l***8',
                content: '沙发垫确实还可以，防滑，柔软的。就是感觉放小了，洗后再缩水，就够呛。有点小贵！',
                date: '06.19',
              },
              {
                name: 'i***p',
                content: '买了几张，家人都说好',
                date: '06.14',
              },
            ],
          },
        },
        {
          goodsId: 1020401,
          name: 'BZ-L2024',
          title: '亚麻沙发垫棉麻布艺夏季简约现代四季通用灰纯色实木沙发巾套定制',
          price: '68',
          pic: 'BZ-L2024.jpg',
          pic_min: 'BZ-L2024-min.jpg',
          num_sale: 2024,
          detail: {
            goods: {
              property: {
                color: ['灰色'],
                suit: '组合沙发',
                material: '棉',
                size: ['70*70'],
                band: 'novatex',
                name: 'SFJ-3335',
                cat: '纯色',
                style: '现代中式'
              },
              pic: ['SFJ-3335-detail-0.jpg', 'SFJ-3335-detail-1.jpg', 'SFJ-3335-detail-2.jpg'],
            },
            comment: [
              {
                name: 'k董小妹',
                content: '撒都不想说了，自己看图吧，怎么可以这么好看，么么哒',
                date: '09.12',
              },
              {
                name: 'rmb6',
                content: '质量很好给5分，准备再买4块',
                date: '09.08',
              },
              {
                name: '伊***1',
                content: '宝贝收到了，质地好，做工精细，已经第二次购买了，颜色面料显高档，其中有一个买小了店家很快就答应给我换了一块大的，服务态度很棒！',
                date: '08.23',
              },
              {
                name: '芷***8',
                content: '一如既往的好',
                date: '08.20',
              },
              {
                name: 'i***p',
                content: '对比了很多家，刚开始买了一小片背巾来看效果，的确不错，最后订做了一整套，漂亮！',
                date: '08.17',
              },
              {
                name: '燕***5',
                content: '质感很好！',
                date: '08.07',
              },
              {
                name: '伊***1',
                content: '宝贝收到了，铺在沙发上非常上档次，亚麻面料质地好，颜色也很漂亮，非常喜欢哦！',
                date: '08.04',
              },
              {
                name: '7***y',
                content: '很好。多次买了。',
                date: '07.15',
              },
              {
                name: 'j***d',
                content: '第一次买这类东西，感觉不错。客服“纯”和前面的“多”都很好。我是老沙发翻新，上几张图。',
                date: '07.06',
              },
              {
                name: '阳***2',
                content: '挺满意的，物有所值，',
                date: '07.05',
              },
              {
                name: 'm***乐',
                content: '买垫子有点味道～～质感什么的还不错',
                date: '07.04',
              },
              {
                name: 'f***贝',
                content: '很好的宝贝已经是第二次购买了,感谢比尔的耐心很感动，尺寸非常合适已经铺上了',
                date: '07.04',
              },
              {
                name: '给***8',
                content: '好评，做工精细。',
                date: '06.24',
              },
              {
                name: 'h***j',
                content: '和我家颜色差不多。',
                date: '06.21',
              },
              {
                name: 'l***惠',
                content: '两次买的质量不一样 一个偏厚一个偏薄 刚买完没多久就便宜了 客服还是挺耐心挺好的',
                date: '06.20',
              },
              {
                name: 'l***8',
                content: '沙发垫确实还可以，防滑，柔软的。就是感觉放小了，洗后再缩水，就够呛。有点小贵！',
                date: '06.19',
              },
              {
                name: 'i***p',
                content: '买了几张，家人都说好',
                date: '06.14',
              },
            ],
          },
        },
        {
          goodsId: 1020501,
          name: 'BZ-L2088',
          title: '亚麻沙发垫棉麻布艺夏季简约现代四季通用灰纯色实木沙发巾套定制',
          price: '110',
          pic: 'BZ-L2088.jpg',
          pic_min: 'BZ-L2088-min.jpg',
          num_sale: 2088,
          detail: {
            goods: {
              property: {
                color: ['灰色'],
                suit: '组合沙发',
                material: '棉',
                size: ['70*70'],
                band: 'novatex',
                name: 'SFJ-3335',
                cat: '纯色',
                style: '现代中式'
              },
              pic: ['SFJ-3335-detail-0.jpg', 'SFJ-3335-detail-1.jpg', 'SFJ-3335-detail-2.jpg'],
            },
            comment: [
              {
                name: 'k董小妹',
                content: '撒都不想说了，自己看图吧，怎么可以这么好看，么么哒',
                date: '09.12',
              },
              {
                name: 'rmb6',
                content: '质量很好给5分，准备再买4块',
                date: '09.08',
              },
              {
                name: '伊***1',
                content: '宝贝收到了，质地好，做工精细，已经第二次购买了，颜色面料显高档，其中有一个买小了店家很快就答应给我换了一块大的，服务态度很棒！',
                date: '08.23',
              },
              {
                name: '芷***8',
                content: '一如既往的好',
                date: '08.20',
              },
              {
                name: 'i***p',
                content: '对比了很多家，刚开始买了一小片背巾来看效果，的确不错，最后订做了一整套，漂亮！',
                date: '08.17',
              },
              {
                name: '燕***5',
                content: '质感很好！',
                date: '08.07',
              },
              {
                name: '伊***1',
                content: '宝贝收到了，铺在沙发上非常上档次，亚麻面料质地好，颜色也很漂亮，非常喜欢哦！',
                date: '08.04',
              },
              {
                name: '7***y',
                content: '很好。多次买了。',
                date: '07.15',
              },
              {
                name: 'j***d',
                content: '第一次买这类东西，感觉不错。客服“纯”和前面的“多”都很好。我是老沙发翻新，上几张图。',
                date: '07.06',
              },
              {
                name: '阳***2',
                content: '挺满意的，物有所值，',
                date: '07.05',
              },
              {
                name: 'm***乐',
                content: '买垫子有点味道～～质感什么的还不错',
                date: '07.04',
              },
              {
                name: 'f***贝',
                content: '很好的宝贝已经是第二次购买了,感谢比尔的耐心很感动，尺寸非常合适已经铺上了',
                date: '07.04',
              },
              {
                name: '给***8',
                content: '好评，做工精细。',
                date: '06.24',
              },
              {
                name: 'h***j',
                content: '和我家颜色差不多。',
                date: '06.21',
              },
              {
                name: 'l***惠',
                content: '两次买的质量不一样 一个偏厚一个偏薄 刚买完没多久就便宜了 客服还是挺耐心挺好的',
                date: '06.20',
              },
              {
                name: 'l***8',
                content: '沙发垫确实还可以，防滑，柔软的。就是感觉放小了，洗后再缩水，就够呛。有点小贵！',
                date: '06.19',
              },
              {
                name: 'i***p',
                content: '买了几张，家人都说好',
                date: '06.14',
              },
            ],
          },
        },
        {
          goodsId: 1020601,
          name: 'BZ-HD046',
          title: '亚麻沙发垫棉麻布艺夏季简约现代四季通用灰纯色实木沙发巾套定制',
          price: '17',
          pic: 'BZ-HD046.jpg',
          pic_min: 'BZ-HD046-min.jpg',
          num_sale: 46,
          detail: {
            goods: {
              property: {
                color: ['灰色'],
                suit: '组合沙发',
                material: '棉',
                size: ['70*70'],
                band: 'novatex',
                name: 'SFJ-3335',
                cat: '纯色',
                style: '现代中式'
              },
              pic: ['SFJ-3335-detail-0.jpg', 'SFJ-3335-detail-1.jpg', 'SFJ-3335-detail-2.jpg'],
            },
            comment: [
              {
                name: 'k董小妹',
                content: '撒都不想说了，自己看图吧，怎么可以这么好看，么么哒',
                date: '09.12',
              },
              {
                name: 'rmb6',
                content: '质量很好给5分，准备再买4块',
                date: '09.08',
              },
              {
                name: '伊***1',
                content: '宝贝收到了，质地好，做工精细，已经第二次购买了，颜色面料显高档，其中有一个买小了店家很快就答应给我换了一块大的，服务态度很棒！',
                date: '08.23',
              },
              {
                name: '芷***8',
                content: '一如既往的好',
                date: '08.20',
              },
              {
                name: 'i***p',
                content: '对比了很多家，刚开始买了一小片背巾来看效果，的确不错，最后订做了一整套，漂亮！',
                date: '08.17',
              },
              {
                name: '燕***5',
                content: '质感很好！',
                date: '08.07',
              },
              {
                name: '伊***1',
                content: '宝贝收到了，铺在沙发上非常上档次，亚麻面料质地好，颜色也很漂亮，非常喜欢哦！',
                date: '08.04',
              },
              {
                name: '7***y',
                content: '很好。多次买了。',
                date: '07.15',
              },
              {
                name: 'j***d',
                content: '第一次买这类东西，感觉不错。客服“纯”和前面的“多”都很好。我是老沙发翻新，上几张图。',
                date: '07.06',
              },
              {
                name: '阳***2',
                content: '挺满意的，物有所值，',
                date: '07.05',
              },
              {
                name: 'm***乐',
                content: '买垫子有点味道～～质感什么的还不错',
                date: '07.04',
              },
              {
                name: 'f***贝',
                content: '很好的宝贝已经是第二次购买了,感谢比尔的耐心很感动，尺寸非常合适已经铺上了',
                date: '07.04',
              },
              {
                name: '给***8',
                content: '好评，做工精细。',
                date: '06.24',
              },
              {
                name: 'h***j',
                content: '和我家颜色差不多。',
                date: '06.21',
              },
              {
                name: 'l***惠',
                content: '两次买的质量不一样 一个偏厚一个偏薄 刚买完没多久就便宜了 客服还是挺耐心挺好的',
                date: '06.20',
              },
              {
                name: 'l***8',
                content: '沙发垫确实还可以，防滑，柔软的。就是感觉放小了，洗后再缩水，就够呛。有点小贵！',
                date: '06.19',
              },
              {
                name: 'i***p',
                content: '买了几张，家人都说好',
                date: '06.14',
              },
            ],
          },
        },
        {
          goodsId: 1020701,
          name: 'BZ-HD078小绣花',
          title: '亚麻沙发垫棉麻布艺夏季简约现代四季通用灰纯色实木沙发巾套定制',
          price: '62',
          pic: 'BZ-HD078xiuhua.jpg',
          pic_min: 'BZ-HD078xiuhua-min.jpg',
          num_sale: 78,
          detail: {
            goods: {
              property: {
                color: ['灰色'],
                suit: '组合沙发',
                material: '棉',
                size: ['70*70'],
                band: 'novatex',
                name: 'SFJ-3335',
                cat: '纯色',
                style: '现代中式'
              },
              pic: ['SFJ-3335-detail-0.jpg', 'SFJ-3335-detail-1.jpg', 'SFJ-3335-detail-2.jpg'],
            },
            comment: [
              {
                name: 'k董小妹',
                content: '撒都不想说了，自己看图吧，怎么可以这么好看，么么哒',
                date: '09.12',
              },
              {
                name: 'rmb6',
                content: '质量很好给5分，准备再买4块',
                date: '09.08',
              },
              {
                name: '伊***1',
                content: '宝贝收到了，质地好，做工精细，已经第二次购买了，颜色面料显高档，其中有一个买小了店家很快就答应给我换了一块大的，服务态度很棒！',
                date: '08.23',
              },
              {
                name: '芷***8',
                content: '一如既往的好',
                date: '08.20',
              },
              {
                name: 'i***p',
                content: '对比了很多家，刚开始买了一小片背巾来看效果，的确不错，最后订做了一整套，漂亮！',
                date: '08.17',
              },
              {
                name: '燕***5',
                content: '质感很好！',
                date: '08.07',
              },
              {
                name: '伊***1',
                content: '宝贝收到了，铺在沙发上非常上档次，亚麻面料质地好，颜色也很漂亮，非常喜欢哦！',
                date: '08.04',
              },
              {
                name: '7***y',
                content: '很好。多次买了。',
                date: '07.15',
              },
              {
                name: 'j***d',
                content: '第一次买这类东西，感觉不错。客服“纯”和前面的“多”都很好。我是老沙发翻新，上几张图。',
                date: '07.06',
              },
              {
                name: '阳***2',
                content: '挺满意的，物有所值，',
                date: '07.05',
              },
              {
                name: 'm***乐',
                content: '买垫子有点味道～～质感什么的还不错',
                date: '07.04',
              },
              {
                name: 'f***贝',
                content: '很好的宝贝已经是第二次购买了,感谢比尔的耐心很感动，尺寸非常合适已经铺上了',
                date: '07.04',
              },
              {
                name: '给***8',
                content: '好评，做工精细。',
                date: '06.24',
              },
              {
                name: 'h***j',
                content: '和我家颜色差不多。',
                date: '06.21',
              },
              {
                name: 'l***惠',
                content: '两次买的质量不一样 一个偏厚一个偏薄 刚买完没多久就便宜了 客服还是挺耐心挺好的',
                date: '06.20',
              },
              {
                name: 'l***8',
                content: '沙发垫确实还可以，防滑，柔软的。就是感觉放小了，洗后再缩水，就够呛。有点小贵！',
                date: '06.19',
              },
              {
                name: 'i***p',
                content: '买了几张，家人都说好',
                date: '06.14',
              },
            ],
          },
        },
        {
          goodsId: 1020801,
          name: 'BZ-S032',
          title: '亚麻沙发垫棉麻布艺夏季简约现代四季通用灰纯色实木沙发巾套定制',
          price: '168',
          pic: 'BZ-S032.jpg',
          pic_min: 'BZ-S032-min.jpg',
          num_sale: 32,
          detail: {
            goods: {
              property: {
                color: ['灰色'],
                suit: '组合沙发',
                material: '棉',
                size: ['70*70'],
                band: 'novatex',
                name: 'SFJ-3335',
                cat: '纯色',
                style: '现代中式'
              },
              pic: ['SFJ-3335-detail-0.jpg', 'SFJ-3335-detail-1.jpg', 'SFJ-3335-detail-2.jpg'],
            },
            comment: [
              {
                name: 'k董小妹',
                content: '撒都不想说了，自己看图吧，怎么可以这么好看，么么哒',
                date: '09.12',
              },
              {
                name: 'rmb6',
                content: '质量很好给5分，准备再买4块',
                date: '09.08',
              },
              {
                name: '伊***1',
                content: '宝贝收到了，质地好，做工精细，已经第二次购买了，颜色面料显高档，其中有一个买小了店家很快就答应给我换了一块大的，服务态度很棒！',
                date: '08.23',
              },
              {
                name: '芷***8',
                content: '一如既往的好',
                date: '08.20',
              },
              {
                name: 'i***p',
                content: '对比了很多家，刚开始买了一小片背巾来看效果，的确不错，最后订做了一整套，漂亮！',
                date: '08.17',
              },
              {
                name: '燕***5',
                content: '质感很好！',
                date: '08.07',
              },
              {
                name: '伊***1',
                content: '宝贝收到了，铺在沙发上非常上档次，亚麻面料质地好，颜色也很漂亮，非常喜欢哦！',
                date: '08.04',
              },
              {
                name: '7***y',
                content: '很好。多次买了。',
                date: '07.15',
              },
              {
                name: 'j***d',
                content: '第一次买这类东西，感觉不错。客服“纯”和前面的“多”都很好。我是老沙发翻新，上几张图。',
                date: '07.06',
              },
              {
                name: '阳***2',
                content: '挺满意的，物有所值，',
                date: '07.05',
              },
              {
                name: 'm***乐',
                content: '买垫子有点味道～～质感什么的还不错',
                date: '07.04',
              },
              {
                name: 'f***贝',
                content: '很好的宝贝已经是第二次购买了,感谢比尔的耐心很感动，尺寸非常合适已经铺上了',
                date: '07.04',
              },
              {
                name: '给***8',
                content: '好评，做工精细。',
                date: '06.24',
              },
              {
                name: 'h***j',
                content: '和我家颜色差不多。',
                date: '06.21',
              },
              {
                name: 'l***惠',
                content: '两次买的质量不一样 一个偏厚一个偏薄 刚买完没多久就便宜了 客服还是挺耐心挺好的',
                date: '06.20',
              },
              {
                name: 'l***8',
                content: '沙发垫确实还可以，防滑，柔软的。就是感觉放小了，洗后再缩水，就够呛。有点小贵！',
                date: '06.19',
              },
              {
                name: 'i***p',
                content: '买了几张，家人都说好',
                date: '06.14',
              },
            ],
          },
        },
        {
          goodsId: 1020901,
          name: 'BZ-S005',
          title: '亚麻沙发垫棉麻布艺夏季简约现代四季通用灰纯色实木沙发巾套定制',
          price: '184',
          pic: 'BZ-S005.jpg',
          pic_min: 'BZ-S005-min.jpg',
          num_sale: 5,
          detail: {
            goods: {
              property: {
                color: ['灰色'],
                suit: '组合沙发',
                material: '棉',
                size: ['70*70'],
                band: 'novatex',
                name: 'SFJ-3335',
                cat: '纯色',
                style: '现代中式'
              },
              pic: ['SFJ-3335-detail-0.jpg', 'SFJ-3335-detail-1.jpg', 'SFJ-3335-detail-2.jpg'],
            },
            comment: [
              {
                name: 'k董小妹',
                content: '撒都不想说了，自己看图吧，怎么可以这么好看，么么哒',
                date: '09.12',
              },
              {
                name: 'rmb6',
                content: '质量很好给5分，准备再买4块',
                date: '09.08',
              },
              {
                name: '伊***1',
                content: '宝贝收到了，质地好，做工精细，已经第二次购买了，颜色面料显高档，其中有一个买小了店家很快就答应给我换了一块大的，服务态度很棒！',
                date: '08.23',
              },
              {
                name: '芷***8',
                content: '一如既往的好',
                date: '08.20',
              },
              {
                name: 'i***p',
                content: '对比了很多家，刚开始买了一小片背巾来看效果，的确不错，最后订做了一整套，漂亮！',
                date: '08.17',
              },
              {
                name: '燕***5',
                content: '质感很好！',
                date: '08.07',
              },
              {
                name: '伊***1',
                content: '宝贝收到了，铺在沙发上非常上档次，亚麻面料质地好，颜色也很漂亮，非常喜欢哦！',
                date: '08.04',
              },
              {
                name: '7***y',
                content: '很好。多次买了。',
                date: '07.15',
              },
              {
                name: 'j***d',
                content: '第一次买这类东西，感觉不错。客服“纯”和前面的“多”都很好。我是老沙发翻新，上几张图。',
                date: '07.06',
              },
              {
                name: '阳***2',
                content: '挺满意的，物有所值，',
                date: '07.05',
              },
              {
                name: 'm***乐',
                content: '买垫子有点味道～～质感什么的还不错',
                date: '07.04',
              },
              {
                name: 'f***贝',
                content: '很好的宝贝已经是第二次购买了,感谢比尔的耐心很感动，尺寸非常合适已经铺上了',
                date: '07.04',
              },
              {
                name: '给***8',
                content: '好评，做工精细。',
                date: '06.24',
              },
              {
                name: 'h***j',
                content: '和我家颜色差不多。',
                date: '06.21',
              },
              {
                name: 'l***惠',
                content: '两次买的质量不一样 一个偏厚一个偏薄 刚买完没多久就便宜了 客服还是挺耐心挺好的',
                date: '06.20',
              },
              {
                name: 'l***8',
                content: '沙发垫确实还可以，防滑，柔软的。就是感觉放小了，洗后再缩水，就够呛。有点小贵！',
                date: '06.19',
              },
              {
                name: 'i***p',
                content: '买了几张，家人都说好',
                date: '06.14',
              },
            ],
          },
        },
        {
          goodsId: 1021001,
          name: 'BZ-K049',
          title: '亚麻沙发垫棉麻布艺夏季简约现代四季通用灰纯色实木沙发巾套定制',
          price: '53',
          pic: 'BZ-K049.jpg',
          pic_min: 'BZ-K049-min.jpg',
          num_sale: 49,
          detail: {
            goods: {
              property: {
                color: ['灰色'],
                suit: '组合沙发',
                material: '棉',
                size: ['70*70'],
                band: 'novatex',
                name: 'SFJ-3335',
                cat: '纯色',
                style: '现代中式'
              },
              pic: ['SFJ-3335-detail-0.jpg', 'SFJ-3335-detail-1.jpg', 'SFJ-3335-detail-2.jpg'],
            },
            comment: [
              {
                name: 'k董小妹',
                content: '撒都不想说了，自己看图吧，怎么可以这么好看，么么哒',
                date: '09.12',
              },
              {
                name: 'rmb6',
                content: '质量很好给5分，准备再买4块',
                date: '09.08',
              },
              {
                name: '伊***1',
                content: '宝贝收到了，质地好，做工精细，已经第二次购买了，颜色面料显高档，其中有一个买小了店家很快就答应给我换了一块大的，服务态度很棒！',
                date: '08.23',
              },
              {
                name: '芷***8',
                content: '一如既往的好',
                date: '08.20',
              },
              {
                name: 'i***p',
                content: '对比了很多家，刚开始买了一小片背巾来看效果，的确不错，最后订做了一整套，漂亮！',
                date: '08.17',
              },
              {
                name: '燕***5',
                content: '质感很好！',
                date: '08.07',
              },
              {
                name: '伊***1',
                content: '宝贝收到了，铺在沙发上非常上档次，亚麻面料质地好，颜色也很漂亮，非常喜欢哦！',
                date: '08.04',
              },
              {
                name: '7***y',
                content: '很好。多次买了。',
                date: '07.15',
              },
              {
                name: 'j***d',
                content: '第一次买这类东西，感觉不错。客服“纯”和前面的“多”都很好。我是老沙发翻新，上几张图。',
                date: '07.06',
              },
              {
                name: '阳***2',
                content: '挺满意的，物有所值，',
                date: '07.05',
              },
              {
                name: 'm***乐',
                content: '买垫子有点味道～～质感什么的还不错',
                date: '07.04',
              },
              {
                name: 'f***贝',
                content: '很好的宝贝已经是第二次购买了,感谢比尔的耐心很感动，尺寸非常合适已经铺上了',
                date: '07.04',
              },
              {
                name: '给***8',
                content: '好评，做工精细。',
                date: '06.24',
              },
              {
                name: 'h***j',
                content: '和我家颜色差不多。',
                date: '06.21',
              },
              {
                name: 'l***惠',
                content: '两次买的质量不一样 一个偏厚一个偏薄 刚买完没多久就便宜了 客服还是挺耐心挺好的',
                date: '06.20',
              },
              {
                name: 'l***8',
                content: '沙发垫确实还可以，防滑，柔软的。就是感觉放小了，洗后再缩水，就够呛。有点小贵！',
                date: '06.19',
              },
              {
                name: 'i***p',
                content: '买了几张，家人都说好',
                date: '06.14',
              },
            ],
          },
        },
        {
          goodsId: 1021101,
          name: 'BZ-L2027',
          title: '亚麻沙发垫棉麻布艺夏季简约现代四季通用灰纯色实木沙发巾套定制',
          price: '76',
          pic: 'BZ-L2027.jpg',
          pic_min: 'BZ-L2027-min.jpg',
          num_sale: 2027,
          detail: {
            goods: {
              property: {
                color: ['灰色'],
                suit: '组合沙发',
                material: '棉',
                size: ['70*70'],
                band: 'novatex',
                name: 'SFJ-3335',
                cat: '纯色',
                style: '现代中式'
              },
              pic: ['SFJ-3335-detail-0.jpg', 'SFJ-3335-detail-1.jpg', 'SFJ-3335-detail-2.jpg'],
            },
            comment: [
              {
                name: 'k董小妹',
                content: '撒都不想说了，自己看图吧，怎么可以这么好看，么么哒',
                date: '09.12',
              },
              {
                name: 'rmb6',
                content: '质量很好给5分，准备再买4块',
                date: '09.08',
              },
              {
                name: '伊***1',
                content: '宝贝收到了，质地好，做工精细，已经第二次购买了，颜色面料显高档，其中有一个买小了店家很快就答应给我换了一块大的，服务态度很棒！',
                date: '08.23',
              },
              {
                name: '芷***8',
                content: '一如既往的好',
                date: '08.20',
              },
              {
                name: 'i***p',
                content: '对比了很多家，刚开始买了一小片背巾来看效果，的确不错，最后订做了一整套，漂亮！',
                date: '08.17',
              },
              {
                name: '燕***5',
                content: '质感很好！',
                date: '08.07',
              },
              {
                name: '伊***1',
                content: '宝贝收到了，铺在沙发上非常上档次，亚麻面料质地好，颜色也很漂亮，非常喜欢哦！',
                date: '08.04',
              },
              {
                name: '7***y',
                content: '很好。多次买了。',
                date: '07.15',
              },
              {
                name: 'j***d',
                content: '第一次买这类东西，感觉不错。客服“纯”和前面的“多”都很好。我是老沙发翻新，上几张图。',
                date: '07.06',
              },
              {
                name: '阳***2',
                content: '挺满意的，物有所值，',
                date: '07.05',
              },
              {
                name: 'm***乐',
                content: '买垫子有点味道～～质感什么的还不错',
                date: '07.04',
              },
              {
                name: 'f***贝',
                content: '很好的宝贝已经是第二次购买了,感谢比尔的耐心很感动，尺寸非常合适已经铺上了',
                date: '07.04',
              },
              {
                name: '给***8',
                content: '好评，做工精细。',
                date: '06.24',
              },
              {
                name: 'h***j',
                content: '和我家颜色差不多。',
                date: '06.21',
              },
              {
                name: 'l***惠',
                content: '两次买的质量不一样 一个偏厚一个偏薄 刚买完没多久就便宜了 客服还是挺耐心挺好的',
                date: '06.20',
              },
              {
                name: 'l***8',
                content: '沙发垫确实还可以，防滑，柔软的。就是感觉放小了，洗后再缩水，就够呛。有点小贵！',
                date: '06.19',
              },
              {
                name: 'i***p',
                content: '买了几张，家人都说好',
                date: '06.14',
              },
            ],
          },
        },
        {
          goodsId: 1021201,
          name: 'BZ-HD021',
          title: '亚麻沙发垫棉麻布艺夏季简约现代四季通用灰纯色实木沙发巾套定制',
          price: '48',
          pic: 'BZ-HD021.jpg',
          pic_min: 'BZ-HD021-min.jpg',
          num_sale: 21,
          detail: {
            goods: {
              property: {
                color: ['灰色'],
                suit: '组合沙发',
                material: '棉',
                size: ['70*70'],
                band: 'novatex',
                name: 'SFJ-3335',
                cat: '纯色',
                style: '现代中式'
              },
              pic: ['SFJ-3335-detail-0.jpg', 'SFJ-3335-detail-1.jpg', 'SFJ-3335-detail-2.jpg'],
            },
            comment: [
              {
                name: 'k董小妹',
                content: '撒都不想说了，自己看图吧，怎么可以这么好看，么么哒',
                date: '09.12',
              },
              {
                name: 'rmb6',
                content: '质量很好给5分，准备再买4块',
                date: '09.08',
              },
              {
                name: '伊***1',
                content: '宝贝收到了，质地好，做工精细，已经第二次购买了，颜色面料显高档，其中有一个买小了店家很快就答应给我换了一块大的，服务态度很棒！',
                date: '08.23',
              },
              {
                name: '芷***8',
                content: '一如既往的好',
                date: '08.20',
              },
              {
                name: 'i***p',
                content: '对比了很多家，刚开始买了一小片背巾来看效果，的确不错，最后订做了一整套，漂亮！',
                date: '08.17',
              },
              {
                name: '燕***5',
                content: '质感很好！',
                date: '08.07',
              },
              {
                name: '伊***1',
                content: '宝贝收到了，铺在沙发上非常上档次，亚麻面料质地好，颜色也很漂亮，非常喜欢哦！',
                date: '08.04',
              },
              {
                name: '7***y',
                content: '很好。多次买了。',
                date: '07.15',
              },
              {
                name: 'j***d',
                content: '第一次买这类东西，感觉不错。客服“纯”和前面的“多”都很好。我是老沙发翻新，上几张图。',
                date: '07.06',
              },
              {
                name: '阳***2',
                content: '挺满意的，物有所值，',
                date: '07.05',
              },
              {
                name: 'm***乐',
                content: '买垫子有点味道～～质感什么的还不错',
                date: '07.04',
              },
              {
                name: 'f***贝',
                content: '很好的宝贝已经是第二次购买了,感谢比尔的耐心很感动，尺寸非常合适已经铺上了',
                date: '07.04',
              },
              {
                name: '给***8',
                content: '好评，做工精细。',
                date: '06.24',
              },
              {
                name: 'h***j',
                content: '和我家颜色差不多。',
                date: '06.21',
              },
              {
                name: 'l***惠',
                content: '两次买的质量不一样 一个偏厚一个偏薄 刚买完没多久就便宜了 客服还是挺耐心挺好的',
                date: '06.20',
              },
              {
                name: 'l***8',
                content: '沙发垫确实还可以，防滑，柔软的。就是感觉放小了，洗后再缩水，就够呛。有点小贵！',
                date: '06.19',
              },
              {
                name: 'i***p',
                content: '买了几张，家人都说好',
                date: '06.14',
              },
            ],
          },
        },
        {
          goodsId: 1021301,
          name: 'BZ-S013',
          title: '亚麻沙发垫棉麻布艺夏季简约现代四季通用灰纯色实木沙发巾套定制',
          price: '89',
          pic: 'BZ-S013.jpg',
          pic_min: 'BZ-S013-min.jpg',
          num_sale: 13,
          detail: {
            goods: {
              property: {
                color: ['灰色'],
                suit: '组合沙发',
                material: '棉',
                size: ['70*70'],
                band: 'novatex',
                name: 'SFJ-3335',
                cat: '纯色',
                style: '现代中式'
              },
              pic: ['SFJ-3335-detail-0.jpg', 'SFJ-3335-detail-1.jpg', 'SFJ-3335-detail-2.jpg'],
            },
            comment: [
              {
                name: 'k董小妹',
                content: '撒都不想说了，自己看图吧，怎么可以这么好看，么么哒',
                date: '09.12',
              },
              {
                name: 'rmb6',
                content: '质量很好给5分，准备再买4块',
                date: '09.08',
              },
              {
                name: '伊***1',
                content: '宝贝收到了，质地好，做工精细，已经第二次购买了，颜色面料显高档，其中有一个买小了店家很快就答应给我换了一块大的，服务态度很棒！',
                date: '08.23',
              },
              {
                name: '芷***8',
                content: '一如既往的好',
                date: '08.20',
              },
              {
                name: 'i***p',
                content: '对比了很多家，刚开始买了一小片背巾来看效果，的确不错，最后订做了一整套，漂亮！',
                date: '08.17',
              },
              {
                name: '燕***5',
                content: '质感很好！',
                date: '08.07',
              },
              {
                name: '伊***1',
                content: '宝贝收到了，铺在沙发上非常上档次，亚麻面料质地好，颜色也很漂亮，非常喜欢哦！',
                date: '08.04',
              },
              {
                name: '7***y',
                content: '很好。多次买了。',
                date: '07.15',
              },
              {
                name: 'j***d',
                content: '第一次买这类东西，感觉不错。客服“纯”和前面的“多”都很好。我是老沙发翻新，上几张图。',
                date: '07.06',
              },
              {
                name: '阳***2',
                content: '挺满意的，物有所值，',
                date: '07.05',
              },
              {
                name: 'm***乐',
                content: '买垫子有点味道～～质感什么的还不错',
                date: '07.04',
              },
              {
                name: 'f***贝',
                content: '很好的宝贝已经是第二次购买了,感谢比尔的耐心很感动，尺寸非常合适已经铺上了',
                date: '07.04',
              },
              {
                name: '给***8',
                content: '好评，做工精细。',
                date: '06.24',
              },
              {
                name: 'h***j',
                content: '和我家颜色差不多。',
                date: '06.21',
              },
              {
                name: 'l***惠',
                content: '两次买的质量不一样 一个偏厚一个偏薄 刚买完没多久就便宜了 客服还是挺耐心挺好的',
                date: '06.20',
              },
              {
                name: 'l***8',
                content: '沙发垫确实还可以，防滑，柔软的。就是感觉放小了，洗后再缩水，就够呛。有点小贵！',
                date: '06.19',
              },
              {
                name: 'i***p',
                content: '买了几张，家人都说好',
                date: '06.14',
              },
            ],
          },
        },
        {
          goodsId: 1021401,
          name: 'BZ-K058',
          title: '亚麻沙发垫棉麻布艺夏季简约现代四季通用灰纯色实木沙发巾套定制',
          price: '51',
          pic: 'BZ-K058.jpg',
          pic_min: 'BZ-K058-min.jpg',
          num_sale: 58,
          detail: {
            goods: {
              property: {
                color: ['灰色'],
                suit: '组合沙发',
                material: '棉',
                size: ['70*70'],
                band: 'novatex',
                name: 'SFJ-3335',
                cat: '纯色',
                style: '现代中式'
              },
              pic: ['SFJ-3335-detail-0.jpg', 'SFJ-3335-detail-1.jpg', 'SFJ-3335-detail-2.jpg'],
            },
            comment: [
              {
                name: 'k董小妹',
                content: '撒都不想说了，自己看图吧，怎么可以这么好看，么么哒',
                date: '09.12',
              },
              {
                name: 'rmb6',
                content: '质量很好给5分，准备再买4块',
                date: '09.08',
              },
              {
                name: '伊***1',
                content: '宝贝收到了，质地好，做工精细，已经第二次购买了，颜色面料显高档，其中有一个买小了店家很快就答应给我换了一块大的，服务态度很棒！',
                date: '08.23',
              },
              {
                name: '芷***8',
                content: '一如既往的好',
                date: '08.20',
              },
              {
                name: 'i***p',
                content: '对比了很多家，刚开始买了一小片背巾来看效果，的确不错，最后订做了一整套，漂亮！',
                date: '08.17',
              },
              {
                name: '燕***5',
                content: '质感很好！',
                date: '08.07',
              },
              {
                name: '伊***1',
                content: '宝贝收到了，铺在沙发上非常上档次，亚麻面料质地好，颜色也很漂亮，非常喜欢哦！',
                date: '08.04',
              },
              {
                name: '7***y',
                content: '很好。多次买了。',
                date: '07.15',
              },
              {
                name: 'j***d',
                content: '第一次买这类东西，感觉不错。客服“纯”和前面的“多”都很好。我是老沙发翻新，上几张图。',
                date: '07.06',
              },
              {
                name: '阳***2',
                content: '挺满意的，物有所值，',
                date: '07.05',
              },
              {
                name: 'm***乐',
                content: '买垫子有点味道～～质感什么的还不错',
                date: '07.04',
              },
              {
                name: 'f***贝',
                content: '很好的宝贝已经是第二次购买了,感谢比尔的耐心很感动，尺寸非常合适已经铺上了',
                date: '07.04',
              },
              {
                name: '给***8',
                content: '好评，做工精细。',
                date: '06.24',
              },
              {
                name: 'h***j',
                content: '和我家颜色差不多。',
                date: '06.21',
              },
              {
                name: 'l***惠',
                content: '两次买的质量不一样 一个偏厚一个偏薄 刚买完没多久就便宜了 客服还是挺耐心挺好的',
                date: '06.20',
              },
              {
                name: 'l***8',
                content: '沙发垫确实还可以，防滑，柔软的。就是感觉放小了，洗后再缩水，就够呛。有点小贵！',
                date: '06.19',
              },
              {
                name: 'i***p',
                content: '买了几张，家人都说好',
                date: '06.14',
              },
            ],
          },
        },
        {
          goodsId: 1021501,
          name: 'BZ-PB01',
          title: '亚麻沙发垫棉麻布艺夏季简约现代四季通用灰纯色实木沙发巾套定制',
          price: '74',
          pic: 'BZ-PB01.jpg',
          pic_min: 'BZ-PB01-min.jpg',
          num_sale: 1,
          detail: {
            goods: {
              property: {
                color: ['灰色'],
                suit: '组合沙发',
                material: '棉',
                size: ['70*70'],
                band: 'novatex',
                name: 'SFJ-3335',
                cat: '纯色',
                style: '现代中式'
              },
              pic: ['SFJ-3335-detail-0.jpg', 'SFJ-3335-detail-1.jpg', 'SFJ-3335-detail-2.jpg'],
            },
            comment: [
              {
                name: 'k董小妹',
                content: '撒都不想说了，自己看图吧，怎么可以这么好看，么么哒',
                date: '09.12',
              },
              {
                name: 'rmb6',
                content: '质量很好给5分，准备再买4块',
                date: '09.08',
              },
              {
                name: '伊***1',
                content: '宝贝收到了，质地好，做工精细，已经第二次购买了，颜色面料显高档，其中有一个买小了店家很快就答应给我换了一块大的，服务态度很棒！',
                date: '08.23',
              },
              {
                name: '芷***8',
                content: '一如既往的好',
                date: '08.20',
              },
              {
                name: 'i***p',
                content: '对比了很多家，刚开始买了一小片背巾来看效果，的确不错，最后订做了一整套，漂亮！',
                date: '08.17',
              },
              {
                name: '燕***5',
                content: '质感很好！',
                date: '08.07',
              },
              {
                name: '伊***1',
                content: '宝贝收到了，铺在沙发上非常上档次，亚麻面料质地好，颜色也很漂亮，非常喜欢哦！',
                date: '08.04',
              },
              {
                name: '7***y',
                content: '很好。多次买了。',
                date: '07.15',
              },
              {
                name: 'j***d',
                content: '第一次买这类东西，感觉不错。客服“纯”和前面的“多”都很好。我是老沙发翻新，上几张图。',
                date: '07.06',
              },
              {
                name: '阳***2',
                content: '挺满意的，物有所值，',
                date: '07.05',
              },
              {
                name: 'm***乐',
                content: '买垫子有点味道～～质感什么的还不错',
                date: '07.04',
              },
              {
                name: 'f***贝',
                content: '很好的宝贝已经是第二次购买了,感谢比尔的耐心很感动，尺寸非常合适已经铺上了',
                date: '07.04',
              },
              {
                name: '给***8',
                content: '好评，做工精细。',
                date: '06.24',
              },
              {
                name: 'h***j',
                content: '和我家颜色差不多。',
                date: '06.21',
              },
              {
                name: 'l***惠',
                content: '两次买的质量不一样 一个偏厚一个偏薄 刚买完没多久就便宜了 客服还是挺耐心挺好的',
                date: '06.20',
              },
              {
                name: 'l***8',
                content: '沙发垫确实还可以，防滑，柔软的。就是感觉放小了，洗后再缩水，就够呛。有点小贵！',
                date: '06.19',
              },
              {
                name: 'i***p',
                content: '买了几张，家人都说好',
                date: '06.14',
              },
            ],
          },
        },
        {
          goodsId: 1021601,
          name: 'BZ-3275',
          title: '亚麻沙发垫棉麻布艺夏季简约现代四季通用灰纯色实木沙发巾套定制',
          price: '59',
          pic: 'BZ-3275.jpg#',
          pic_min: 'BZ-3275-min.jpg',
          num_sale: 3275,
          detail: {
            goods: {
              property: {
                color: ['灰色'],
                suit: '组合沙发',
                material: '棉',
                size: ['70*70'],
                band: 'novatex',
                name: 'SFJ-3335',
                cat: '纯色',
                style: '现代中式'
              },
              pic: ['SFJ-3335-detail-0.jpg', 'SFJ-3335-detail-1.jpg', 'SFJ-3335-detail-2.jpg'],
            },
            comment: [
              {
                name: 'k董小妹',
                content: '撒都不想说了，自己看图吧，怎么可以这么好看，么么哒',
                date: '09.12',
              },
              {
                name: 'rmb6',
                content: '质量很好给5分，准备再买4块',
                date: '09.08',
              },
              {
                name: '伊***1',
                content: '宝贝收到了，质地好，做工精细，已经第二次购买了，颜色面料显高档，其中有一个买小了店家很快就答应给我换了一块大的，服务态度很棒！',
                date: '08.23',
              },
              {
                name: '芷***8',
                content: '一如既往的好',
                date: '08.20',
              },
              {
                name: 'i***p',
                content: '对比了很多家，刚开始买了一小片背巾来看效果，的确不错，最后订做了一整套，漂亮！',
                date: '08.17',
              },
              {
                name: '燕***5',
                content: '质感很好！',
                date: '08.07',
              },
              {
                name: '伊***1',
                content: '宝贝收到了，铺在沙发上非常上档次，亚麻面料质地好，颜色也很漂亮，非常喜欢哦！',
                date: '08.04',
              },
              {
                name: '7***y',
                content: '很好。多次买了。',
                date: '07.15',
              },
              {
                name: 'j***d',
                content: '第一次买这类东西，感觉不错。客服“纯”和前面的“多”都很好。我是老沙发翻新，上几张图。',
                date: '07.06',
              },
              {
                name: '阳***2',
                content: '挺满意的，物有所值，',
                date: '07.05',
              },
              {
                name: 'm***乐',
                content: '买垫子有点味道～～质感什么的还不错',
                date: '07.04',
              },
              {
                name: 'f***贝',
                content: '很好的宝贝已经是第二次购买了,感谢比尔的耐心很感动，尺寸非常合适已经铺上了',
                date: '07.04',
              },
              {
                name: '给***8',
                content: '好评，做工精细。',
                date: '06.24',
              },
              {
                name: 'h***j',
                content: '和我家颜色差不多。',
                date: '06.21',
              },
              {
                name: 'l***惠',
                content: '两次买的质量不一样 一个偏厚一个偏薄 刚买完没多久就便宜了 客服还是挺耐心挺好的',
                date: '06.20',
              },
              {
                name: 'l***8',
                content: '沙发垫确实还可以，防滑，柔软的。就是感觉放小了，洗后再缩水，就够呛。有点小贵！',
                date: '06.19',
              },
              {
                name: 'i***p',
                content: '买了几张，家人都说好',
                date: '06.14',
              },
            ],
          },
        },
        {
          goodsId: 1021701,
          name: 'BZ-S017',
          title: '亚麻沙发垫棉麻布艺夏季简约现代四季通用灰纯色实木沙发巾套定制',
          price: '44',
          pic: 'BZ-S017.jpg',
          pic_min: 'BZ-S017-min.jpg',
          num_sale: 17,
          detail: {
            goods: {
              property: {
                color: ['灰色'],
                suit: '组合沙发',
                material: '棉',
                size: ['70*70'],
                band: 'novatex',
                name: 'SFJ-3335',
                cat: '纯色',
                style: '现代中式'
              },
              pic: ['SFJ-3335-detail-0.jpg', 'SFJ-3335-detail-1.jpg', 'SFJ-3335-detail-2.jpg'],
            },
            comment: [
              {
                name: 'k董小妹',
                content: '撒都不想说了，自己看图吧，怎么可以这么好看，么么哒',
                date: '09.12',
              },
              {
                name: 'rmb6',
                content: '质量很好给5分，准备再买4块',
                date: '09.08',
              },
              {
                name: '伊***1',
                content: '宝贝收到了，质地好，做工精细，已经第二次购买了，颜色面料显高档，其中有一个买小了店家很快就答应给我换了一块大的，服务态度很棒！',
                date: '08.23',
              },
              {
                name: '芷***8',
                content: '一如既往的好',
                date: '08.20',
              },
              {
                name: 'i***p',
                content: '对比了很多家，刚开始买了一小片背巾来看效果，的确不错，最后订做了一整套，漂亮！',
                date: '08.17',
              },
              {
                name: '燕***5',
                content: '质感很好！',
                date: '08.07',
              },
              {
                name: '伊***1',
                content: '宝贝收到了，铺在沙发上非常上档次，亚麻面料质地好，颜色也很漂亮，非常喜欢哦！',
                date: '08.04',
              },
              {
                name: '7***y',
                content: '很好。多次买了。',
                date: '07.15',
              },
              {
                name: 'j***d',
                content: '第一次买这类东西，感觉不错。客服“纯”和前面的“多”都很好。我是老沙发翻新，上几张图。',
                date: '07.06',
              },
              {
                name: '阳***2',
                content: '挺满意的，物有所值，',
                date: '07.05',
              },
              {
                name: 'm***乐',
                content: '买垫子有点味道～～质感什么的还不错',
                date: '07.04',
              },
              {
                name: 'f***贝',
                content: '很好的宝贝已经是第二次购买了,感谢比尔的耐心很感动，尺寸非常合适已经铺上了',
                date: '07.04',
              },
              {
                name: '给***8',
                content: '好评，做工精细。',
                date: '06.24',
              },
              {
                name: 'h***j',
                content: '和我家颜色差不多。',
                date: '06.21',
              },
              {
                name: 'l***惠',
                content: '两次买的质量不一样 一个偏厚一个偏薄 刚买完没多久就便宜了 客服还是挺耐心挺好的',
                date: '06.20',
              },
              {
                name: 'l***8',
                content: '沙发垫确实还可以，防滑，柔软的。就是感觉放小了，洗后再缩水，就够呛。有点小贵！',
                date: '06.19',
              },
              {
                name: 'i***p',
                content: '买了几张，家人都说好',
                date: '06.14',
              },
            ],
          },
        },
        {
          goodsId: 1021801,
          name: 'BZ-K048',
          title: '亚麻沙发垫棉麻布艺夏季简约现代四季通用灰纯色实木沙发巾套定制',
          price: '75',
          pic: 'BZ-K048.jpg',
          pic_min: 'BZ-K048-min.jpg',
          num_sale: 48,
          detail: {
            goods: {
              property: {
                color: ['灰色'],
                suit: '组合沙发',
                material: '棉',
                size: ['70*70'],
                band: 'novatex',
                name: 'SFJ-3335',
                cat: '纯色',
                style: '现代中式'
              },
              pic: ['SFJ-3335-detail-0.jpg', 'SFJ-3335-detail-1.jpg', 'SFJ-3335-detail-2.jpg'],
            },
            comment: [
              {
                name: 'k董小妹',
                content: '撒都不想说了，自己看图吧，怎么可以这么好看，么么哒',
                date: '09.12',
              },
              {
                name: 'rmb6',
                content: '质量很好给5分，准备再买4块',
                date: '09.08',
              },
              {
                name: '伊***1',
                content: '宝贝收到了，质地好，做工精细，已经第二次购买了，颜色面料显高档，其中有一个买小了店家很快就答应给我换了一块大的，服务态度很棒！',
                date: '08.23',
              },
              {
                name: '芷***8',
                content: '一如既往的好',
                date: '08.20',
              },
              {
                name: 'i***p',
                content: '对比了很多家，刚开始买了一小片背巾来看效果，的确不错，最后订做了一整套，漂亮！',
                date: '08.17',
              },
              {
                name: '燕***5',
                content: '质感很好！',
                date: '08.07',
              },
              {
                name: '伊***1',
                content: '宝贝收到了，铺在沙发上非常上档次，亚麻面料质地好，颜色也很漂亮，非常喜欢哦！',
                date: '08.04',
              },
              {
                name: '7***y',
                content: '很好。多次买了。',
                date: '07.15',
              },
              {
                name: 'j***d',
                content: '第一次买这类东西，感觉不错。客服“纯”和前面的“多”都很好。我是老沙发翻新，上几张图。',
                date: '07.06',
              },
              {
                name: '阳***2',
                content: '挺满意的，物有所值，',
                date: '07.05',
              },
              {
                name: 'm***乐',
                content: '买垫子有点味道～～质感什么的还不错',
                date: '07.04',
              },
              {
                name: 'f***贝',
                content: '很好的宝贝已经是第二次购买了,感谢比尔的耐心很感动，尺寸非常合适已经铺上了',
                date: '07.04',
              },
              {
                name: '给***8',
                content: '好评，做工精细。',
                date: '06.24',
              },
              {
                name: 'h***j',
                content: '和我家颜色差不多。',
                date: '06.21',
              },
              {
                name: 'l***惠',
                content: '两次买的质量不一样 一个偏厚一个偏薄 刚买完没多久就便宜了 客服还是挺耐心挺好的',
                date: '06.20',
              },
              {
                name: 'l***8',
                content: '沙发垫确实还可以，防滑，柔软的。就是感觉放小了，洗后再缩水，就够呛。有点小贵！',
                date: '06.19',
              },
              {
                name: 'i***p',
                content: '买了几张，家人都说好',
                date: '06.14',
              },
            ],
          },
        },
        {
          goodsId: 1021901,
          name: 'BZ-62294',
          title: '亚麻沙发垫棉麻布艺夏季简约现代四季通用灰纯色实木沙发巾套定制',
          price: '36',
          pic: 'BZ-62294.jpg',
          pic_min: 'BZ-62294-min.jpg',
          num_sale: 62294,
          detail: {
            goods: {
              property: {
                color: ['灰色'],
                suit: '组合沙发',
                material: '棉',
                size: ['70*70'],
                band: 'novatex',
                name: 'SFJ-3335',
                cat: '纯色',
                style: '现代中式'
              },
              pic: ['SFJ-3335-detail-0.jpg', 'SFJ-3335-detail-1.jpg', 'SFJ-3335-detail-2.jpg'],
            },
            comment: [
              {
                name: 'k董小妹',
                content: '撒都不想说了，自己看图吧，怎么可以这么好看，么么哒',
                date: '09.12',
              },
              {
                name: 'rmb6',
                content: '质量很好给5分，准备再买4块',
                date: '09.08',
              },
              {
                name: '伊***1',
                content: '宝贝收到了，质地好，做工精细，已经第二次购买了，颜色面料显高档，其中有一个买小了店家很快就答应给我换了一块大的，服务态度很棒！',
                date: '08.23',
              },
              {
                name: '芷***8',
                content: '一如既往的好',
                date: '08.20',
              },
              {
                name: 'i***p',
                content: '对比了很多家，刚开始买了一小片背巾来看效果，的确不错，最后订做了一整套，漂亮！',
                date: '08.17',
              },
              {
                name: '燕***5',
                content: '质感很好！',
                date: '08.07',
              },
              {
                name: '伊***1',
                content: '宝贝收到了，铺在沙发上非常上档次，亚麻面料质地好，颜色也很漂亮，非常喜欢哦！',
                date: '08.04',
              },
              {
                name: '7***y',
                content: '很好。多次买了。',
                date: '07.15',
              },
              {
                name: 'j***d',
                content: '第一次买这类东西，感觉不错。客服“纯”和前面的“多”都很好。我是老沙发翻新，上几张图。',
                date: '07.06',
              },
              {
                name: '阳***2',
                content: '挺满意的，物有所值，',
                date: '07.05',
              },
              {
                name: 'm***乐',
                content: '买垫子有点味道～～质感什么的还不错',
                date: '07.04',
              },
              {
                name: 'f***贝',
                content: '很好的宝贝已经是第二次购买了,感谢比尔的耐心很感动，尺寸非常合适已经铺上了',
                date: '07.04',
              },
              {
                name: '给***8',
                content: '好评，做工精细。',
                date: '06.24',
              },
              {
                name: 'h***j',
                content: '和我家颜色差不多。',
                date: '06.21',
              },
              {
                name: 'l***惠',
                content: '两次买的质量不一样 一个偏厚一个偏薄 刚买完没多久就便宜了 客服还是挺耐心挺好的',
                date: '06.20',
              },
              {
                name: 'l***8',
                content: '沙发垫确实还可以，防滑，柔软的。就是感觉放小了，洗后再缩水，就够呛。有点小贵！',
                date: '06.19',
              },
              {
                name: 'i***p',
                content: '买了几张，家人都说好',
                date: '06.14',
              },
            ],
          },
        },
        {
          goodsId: 1022001,
          name: 'BZ-CM601',
          title: '亚麻沙发垫棉麻布艺夏季简约现代四季通用灰纯色实木沙发巾套定制',
          price: '41',
          pic: 'BZ-CM601.jpg',
          pic_min: 'BZ-CM601-min.jpg',
          num_sale: 601,
          detail: {
            goods: {
              property: {
                color: ['灰色'],
                suit: '组合沙发',
                material: '棉',
                size: ['70*70'],
                band: 'novatex',
                name: 'SFJ-3335',
                cat: '纯色',
                style: '现代中式'
              },
              pic: ['SFJ-3335-detail-0.jpg', 'SFJ-3335-detail-1.jpg', 'SFJ-3335-detail-2.jpg'],
            },
            comment: [
              {
                name: 'k董小妹',
                content: '撒都不想说了，自己看图吧，怎么可以这么好看，么么哒',
                date: '09.12',
              },
              {
                name: 'rmb6',
                content: '质量很好给5分，准备再买4块',
                date: '09.08',
              },
              {
                name: '伊***1',
                content: '宝贝收到了，质地好，做工精细，已经第二次购买了，颜色面料显高档，其中有一个买小了店家很快就答应给我换了一块大的，服务态度很棒！',
                date: '08.23',
              },
              {
                name: '芷***8',
                content: '一如既往的好',
                date: '08.20',
              },
              {
                name: 'i***p',
                content: '对比了很多家，刚开始买了一小片背巾来看效果，的确不错，最后订做了一整套，漂亮！',
                date: '08.17',
              },
              {
                name: '燕***5',
                content: '质感很好！',
                date: '08.07',
              },
              {
                name: '伊***1',
                content: '宝贝收到了，铺在沙发上非常上档次，亚麻面料质地好，颜色也很漂亮，非常喜欢哦！',
                date: '08.04',
              },
              {
                name: '7***y',
                content: '很好。多次买了。',
                date: '07.15',
              },
              {
                name: 'j***d',
                content: '第一次买这类东西，感觉不错。客服“纯”和前面的“多”都很好。我是老沙发翻新，上几张图。',
                date: '07.06',
              },
              {
                name: '阳***2',
                content: '挺满意的，物有所值，',
                date: '07.05',
              },
              {
                name: 'm***乐',
                content: '买垫子有点味道～～质感什么的还不错',
                date: '07.04',
              },
              {
                name: 'f***贝',
                content: '很好的宝贝已经是第二次购买了,感谢比尔的耐心很感动，尺寸非常合适已经铺上了',
                date: '07.04',
              },
              {
                name: '给***8',
                content: '好评，做工精细。',
                date: '06.24',
              },
              {
                name: 'h***j',
                content: '和我家颜色差不多。',
                date: '06.21',
              },
              {
                name: 'l***惠',
                content: '两次买的质量不一样 一个偏厚一个偏薄 刚买完没多久就便宜了 客服还是挺耐心挺好的',
                date: '06.20',
              },
              {
                name: 'l***8',
                content: '沙发垫确实还可以，防滑，柔软的。就是感觉放小了，洗后再缩水，就够呛。有点小贵！',
                date: '06.19',
              },
              {
                name: 'i***p',
                content: '买了几张，家人都说好',
                date: '06.14',
              },
            ],
          },
        },
        {
          goodsId: 1030101,
          name: 'ZB-L2024',
          title: '亚麻沙发垫棉麻布艺夏季简约现代四季通用灰纯色实木沙发巾套定制',
          price: '208',
          pic: 'ZB-L2024.jpg',
          pic_min: 'ZB-L2024-min.jpg',
          num_sale: 2024,
          detail: {
            goods: {
              property: {
                color: ['灰色'],
                suit: '组合沙发',
                material: '棉',
                size: ['70*70'],
                band: 'novatex',
                name: 'SFJ-3335',
                cat: '纯色',
                style: '现代中式'
              },
              pic: ['SFJ-3335-detail-0.jpg', 'SFJ-3335-detail-1.jpg', 'SFJ-3335-detail-2.jpg'],
            },
            comment: [
              {
                name: 'k董小妹',
                content: '撒都不想说了，自己看图吧，怎么可以这么好看，么么哒',
                date: '09.12',
              },
              {
                name: 'rmb6',
                content: '质量很好给5分，准备再买4块',
                date: '09.08',
              },
              {
                name: '伊***1',
                content: '宝贝收到了，质地好，做工精细，已经第二次购买了，颜色面料显高档，其中有一个买小了店家很快就答应给我换了一块大的，服务态度很棒！',
                date: '08.23',
              },
              {
                name: '芷***8',
                content: '一如既往的好',
                date: '08.20',
              },
              {
                name: 'i***p',
                content: '对比了很多家，刚开始买了一小片背巾来看效果，的确不错，最后订做了一整套，漂亮！',
                date: '08.17',
              },
              {
                name: '燕***5',
                content: '质感很好！',
                date: '08.07',
              },
              {
                name: '伊***1',
                content: '宝贝收到了，铺在沙发上非常上档次，亚麻面料质地好，颜色也很漂亮，非常喜欢哦！',
                date: '08.04',
              },
              {
                name: '7***y',
                content: '很好。多次买了。',
                date: '07.15',
              },
              {
                name: 'j***d',
                content: '第一次买这类东西，感觉不错。客服“纯”和前面的“多”都很好。我是老沙发翻新，上几张图。',
                date: '07.06',
              },
              {
                name: '阳***2',
                content: '挺满意的，物有所值，',
                date: '07.05',
              },
              {
                name: 'm***乐',
                content: '买垫子有点味道～～质感什么的还不错',
                date: '07.04',
              },
              {
                name: 'f***贝',
                content: '很好的宝贝已经是第二次购买了,感谢比尔的耐心很感动，尺寸非常合适已经铺上了',
                date: '07.04',
              },
              {
                name: '给***8',
                content: '好评，做工精细。',
                date: '06.24',
              },
              {
                name: 'h***j',
                content: '和我家颜色差不多。',
                date: '06.21',
              },
              {
                name: 'l***惠',
                content: '两次买的质量不一样 一个偏厚一个偏薄 刚买完没多久就便宜了 客服还是挺耐心挺好的',
                date: '06.20',
              },
              {
                name: 'l***8',
                content: '沙发垫确实还可以，防滑，柔软的。就是感觉放小了，洗后再缩水，就够呛。有点小贵！',
                date: '06.19',
              },
              {
                name: 'i***p',
                content: '买了几张，家人都说好',
                date: '06.14',
              },
            ],
          },
        },
        {
          goodsId: 1030201,
          name: 'ZB-HD078小绣花',
          title: '亚麻沙发垫棉麻布艺夏季简约现代四季通用灰纯色实木沙发巾套定制',
          price: '185',
          pic: 'ZB-HD078xiuhua.jpg',
          pic_min: 'ZB-HD078xiuhua-min.jpg',
          num_sale: 78,
          detail: {
            goods: {
              property: {
                color: ['灰色'],
                suit: '组合沙发',
                material: '棉',
                size: ['70*70'],
                band: 'novatex',
                name: 'SFJ-3335',
                cat: '纯色',
                style: '现代中式'
              },
              pic: ['SFJ-3335-detail-0.jpg', 'SFJ-3335-detail-1.jpg', 'SFJ-3335-detail-2.jpg'],
            },
            comment: [
              {
                name: 'k董小妹',
                content: '撒都不想说了，自己看图吧，怎么可以这么好看，么么哒',
                date: '09.12',
              },
              {
                name: 'rmb6',
                content: '质量很好给5分，准备再买4块',
                date: '09.08',
              },
              {
                name: '伊***1',
                content: '宝贝收到了，质地好，做工精细，已经第二次购买了，颜色面料显高档，其中有一个买小了店家很快就答应给我换了一块大的，服务态度很棒！',
                date: '08.23',
              },
              {
                name: '芷***8',
                content: '一如既往的好',
                date: '08.20',
              },
              {
                name: 'i***p',
                content: '对比了很多家，刚开始买了一小片背巾来看效果，的确不错，最后订做了一整套，漂亮！',
                date: '08.17',
              },
              {
                name: '燕***5',
                content: '质感很好！',
                date: '08.07',
              },
              {
                name: '伊***1',
                content: '宝贝收到了，铺在沙发上非常上档次，亚麻面料质地好，颜色也很漂亮，非常喜欢哦！',
                date: '08.04',
              },
              {
                name: '7***y',
                content: '很好。多次买了。',
                date: '07.15',
              },
              {
                name: 'j***d',
                content: '第一次买这类东西，感觉不错。客服“纯”和前面的“多”都很好。我是老沙发翻新，上几张图。',
                date: '07.06',
              },
              {
                name: '阳***2',
                content: '挺满意的，物有所值，',
                date: '07.05',
              },
              {
                name: 'm***乐',
                content: '买垫子有点味道～～质感什么的还不错',
                date: '07.04',
              },
              {
                name: 'f***贝',
                content: '很好的宝贝已经是第二次购买了,感谢比尔的耐心很感动，尺寸非常合适已经铺上了',
                date: '07.04',
              },
              {
                name: '给***8',
                content: '好评，做工精细。',
                date: '06.24',
              },
              {
                name: 'h***j',
                content: '和我家颜色差不多。',
                date: '06.21',
              },
              {
                name: 'l***惠',
                content: '两次买的质量不一样 一个偏厚一个偏薄 刚买完没多久就便宜了 客服还是挺耐心挺好的',
                date: '06.20',
              },
              {
                name: 'l***8',
                content: '沙发垫确实还可以，防滑，柔软的。就是感觉放小了，洗后再缩水，就够呛。有点小贵！',
                date: '06.19',
              },
              {
                name: 'i***p',
                content: '买了几张，家人都说好',
                date: '06.14',
              },
            ],
          },
        },
        {
          goodsId: 1030301,
          name: 'ZB-HD118',
          title: '亚麻沙发垫棉麻布艺夏季简约现代四季通用灰纯色实木沙发巾套定制',
          price: '128',
          pic: 'ZB-HD118.jpg',
          pic_min: 'ZB-HD118-min.jpg',
          num_sale: 118,
          detail: {
            goods: {
              property: {
                color: ['灰色'],
                suit: '组合沙发',
                material: '棉',
                size: ['70*70'],
                band: 'novatex',
                name: 'SFJ-3335',
                cat: '纯色',
                style: '现代中式'
              },
              pic: ['SFJ-3335-detail-0.jpg', 'SFJ-3335-detail-1.jpg', 'SFJ-3335-detail-2.jpg'],
            },
            comment: [
              {
                name: 'k董小妹',
                content: '撒都不想说了，自己看图吧，怎么可以这么好看，么么哒',
                date: '09.12',
              },
              {
                name: 'rmb6',
                content: '质量很好给5分，准备再买4块',
                date: '09.08',
              },
              {
                name: '伊***1',
                content: '宝贝收到了，质地好，做工精细，已经第二次购买了，颜色面料显高档，其中有一个买小了店家很快就答应给我换了一块大的，服务态度很棒！',
                date: '08.23',
              },
              {
                name: '芷***8',
                content: '一如既往的好',
                date: '08.20',
              },
              {
                name: 'i***p',
                content: '对比了很多家，刚开始买了一小片背巾来看效果，的确不错，最后订做了一整套，漂亮！',
                date: '08.17',
              },
              {
                name: '燕***5',
                content: '质感很好！',
                date: '08.07',
              },
              {
                name: '伊***1',
                content: '宝贝收到了，铺在沙发上非常上档次，亚麻面料质地好，颜色也很漂亮，非常喜欢哦！',
                date: '08.04',
              },
              {
                name: '7***y',
                content: '很好。多次买了。',
                date: '07.15',
              },
              {
                name: 'j***d',
                content: '第一次买这类东西，感觉不错。客服“纯”和前面的“多”都很好。我是老沙发翻新，上几张图。',
                date: '07.06',
              },
              {
                name: '阳***2',
                content: '挺满意的，物有所值，',
                date: '07.05',
              },
              {
                name: 'm***乐',
                content: '买垫子有点味道～～质感什么的还不错',
                date: '07.04',
              },
              {
                name: 'f***贝',
                content: '很好的宝贝已经是第二次购买了,感谢比尔的耐心很感动，尺寸非常合适已经铺上了',
                date: '07.04',
              },
              {
                name: '给***8',
                content: '好评，做工精细。',
                date: '06.24',
              },
              {
                name: 'h***j',
                content: '和我家颜色差不多。',
                date: '06.21',
              },
              {
                name: 'l***惠',
                content: '两次买的质量不一样 一个偏厚一个偏薄 刚买完没多久就便宜了 客服还是挺耐心挺好的',
                date: '06.20',
              },
              {
                name: 'l***8',
                content: '沙发垫确实还可以，防滑，柔软的。就是感觉放小了，洗后再缩水，就够呛。有点小贵！',
                date: '06.19',
              },
              {
                name: 'i***p',
                content: '买了几张，家人都说好',
                date: '06.14',
              },
            ],
          },
        },
        {
          goodsId: 1030401,
          name: 'ZB-C2868',
          title: '亚麻沙发垫棉麻布艺夏季简约现代四季通用灰纯色实木沙发巾套定制',
          price: '56',
          pic: 'ZB-C2868.jpg',
          pic_min: 'ZB-C2868-min.jpg',
          num_sale: 2868,
          detail: {
            goods: {
              property: {
                color: ['灰色'],
                suit: '组合沙发',
                material: '棉',
                size: ['70*70'],
                band: 'novatex',
                name: 'SFJ-3335',
                cat: '纯色',
                style: '现代中式'
              },
              pic: ['SFJ-3335-detail-0.jpg', 'SFJ-3335-detail-1.jpg', 'SFJ-3335-detail-2.jpg'],
            },
            comment: [
              {
                name: 'k董小妹',
                content: '撒都不想说了，自己看图吧，怎么可以这么好看，么么哒',
                date: '09.12',
              },
              {
                name: 'rmb6',
                content: '质量很好给5分，准备再买4块',
                date: '09.08',
              },
              {
                name: '伊***1',
                content: '宝贝收到了，质地好，做工精细，已经第二次购买了，颜色面料显高档，其中有一个买小了店家很快就答应给我换了一块大的，服务态度很棒！',
                date: '08.23',
              },
              {
                name: '芷***8',
                content: '一如既往的好',
                date: '08.20',
              },
              {
                name: 'i***p',
                content: '对比了很多家，刚开始买了一小片背巾来看效果，的确不错，最后订做了一整套，漂亮！',
                date: '08.17',
              },
              {
                name: '燕***5',
                content: '质感很好！',
                date: '08.07',
              },
              {
                name: '伊***1',
                content: '宝贝收到了，铺在沙发上非常上档次，亚麻面料质地好，颜色也很漂亮，非常喜欢哦！',
                date: '08.04',
              },
              {
                name: '7***y',
                content: '很好。多次买了。',
                date: '07.15',
              },
              {
                name: 'j***d',
                content: '第一次买这类东西，感觉不错。客服“纯”和前面的“多”都很好。我是老沙发翻新，上几张图。',
                date: '07.06',
              },
              {
                name: '阳***2',
                content: '挺满意的，物有所值，',
                date: '07.05',
              },
              {
                name: 'm***乐',
                content: '买垫子有点味道～～质感什么的还不错',
                date: '07.04',
              },
              {
                name: 'f***贝',
                content: '很好的宝贝已经是第二次购买了,感谢比尔的耐心很感动，尺寸非常合适已经铺上了',
                date: '07.04',
              },
              {
                name: '给***8',
                content: '好评，做工精细。',
                date: '06.24',
              },
              {
                name: 'h***j',
                content: '和我家颜色差不多。',
                date: '06.21',
              },
              {
                name: 'l***惠',
                content: '两次买的质量不一样 一个偏厚一个偏薄 刚买完没多久就便宜了 客服还是挺耐心挺好的',
                date: '06.20',
              },
              {
                name: 'l***8',
                content: '沙发垫确实还可以，防滑，柔软的。就是感觉放小了，洗后再缩水，就够呛。有点小贵！',
                date: '06.19',
              },
              {
                name: 'i***p',
                content: '买了几张，家人都说好',
                date: '06.14',
              },
            ],
          },
        },
        {
          goodsId: 1030501,
          name: 'ZB-52838',
          title: '亚麻沙发垫棉麻布艺夏季简约现代四季通用灰纯色实木沙发巾套定制',
          price: '165',
          pic: 'ZB-52838.jpg',
          pic_min: 'ZB-52838-min.jpg',
          num_sale: 52838,
          detail: {
            goods: {
              property: {
                color: ['灰色'],
                suit: '组合沙发',
                material: '棉',
                size: ['70*70'],
                band: 'novatex',
                name: 'SFJ-3335',
                cat: '纯色',
                style: '现代中式'
              },
              pic: ['SFJ-3335-detail-0.jpg', 'SFJ-3335-detail-1.jpg', 'SFJ-3335-detail-2.jpg'],
            },
            comment: [
              {
                name: 'k董小妹',
                content: '撒都不想说了，自己看图吧，怎么可以这么好看，么么哒',
                date: '09.12',
              },
              {
                name: 'rmb6',
                content: '质量很好给5分，准备再买4块',
                date: '09.08',
              },
              {
                name: '伊***1',
                content: '宝贝收到了，质地好，做工精细，已经第二次购买了，颜色面料显高档，其中有一个买小了店家很快就答应给我换了一块大的，服务态度很棒！',
                date: '08.23',
              },
              {
                name: '芷***8',
                content: '一如既往的好',
                date: '08.20',
              },
              {
                name: 'i***p',
                content: '对比了很多家，刚开始买了一小片背巾来看效果，的确不错，最后订做了一整套，漂亮！',
                date: '08.17',
              },
              {
                name: '燕***5',
                content: '质感很好！',
                date: '08.07',
              },
              {
                name: '伊***1',
                content: '宝贝收到了，铺在沙发上非常上档次，亚麻面料质地好，颜色也很漂亮，非常喜欢哦！',
                date: '08.04',
              },
              {
                name: '7***y',
                content: '很好。多次买了。',
                date: '07.15',
              },
              {
                name: 'j***d',
                content: '第一次买这类东西，感觉不错。客服“纯”和前面的“多”都很好。我是老沙发翻新，上几张图。',
                date: '07.06',
              },
              {
                name: '阳***2',
                content: '挺满意的，物有所值，',
                date: '07.05',
              },
              {
                name: 'm***乐',
                content: '买垫子有点味道～～质感什么的还不错',
                date: '07.04',
              },
              {
                name: 'f***贝',
                content: '很好的宝贝已经是第二次购买了,感谢比尔的耐心很感动，尺寸非常合适已经铺上了',
                date: '07.04',
              },
              {
                name: '给***8',
                content: '好评，做工精细。',
                date: '06.24',
              },
              {
                name: 'h***j',
                content: '和我家颜色差不多。',
                date: '06.21',
              },
              {
                name: 'l***惠',
                content: '两次买的质量不一样 一个偏厚一个偏薄 刚买完没多久就便宜了 客服还是挺耐心挺好的',
                date: '06.20',
              },
              {
                name: 'l***8',
                content: '沙发垫确实还可以，防滑，柔软的。就是感觉放小了，洗后再缩水，就够呛。有点小贵！',
                date: '06.19',
              },
              {
                name: 'i***p',
                content: '买了几张，家人都说好',
                date: '06.14',
              },
            ],
          },
        },
        {
          goodsId: 1030601,
          name: 'ZB-CM601',
          title: '亚麻沙发垫棉麻布艺夏季简约现代四季通用灰纯色实木沙发巾套定制',
          price: '145',
          pic: 'ZB-CM601.jpg',
          pic_min: 'ZB-CM601-min.jpg',
          num_sale: 601,
          detail: {
            goods: {
              property: {
                color: ['灰色'],
                suit: '组合沙发',
                material: '棉',
                size: ['70*70'],
                band: 'novatex',
                name: 'SFJ-3335',
                cat: '纯色',
                style: '现代中式'
              },
              pic: ['SFJ-3335-detail-0.jpg', 'SFJ-3335-detail-1.jpg', 'SFJ-3335-detail-2.jpg'],
            },
            comment: [
              {
                name: 'k董小妹',
                content: '撒都不想说了，自己看图吧，怎么可以这么好看，么么哒',
                date: '09.12',
              },
              {
                name: 'rmb6',
                content: '质量很好给5分，准备再买4块',
                date: '09.08',
              },
              {
                name: '伊***1',
                content: '宝贝收到了，质地好，做工精细，已经第二次购买了，颜色面料显高档，其中有一个买小了店家很快就答应给我换了一块大的，服务态度很棒！',
                date: '08.23',
              },
              {
                name: '芷***8',
                content: '一如既往的好',
                date: '08.20',
              },
              {
                name: 'i***p',
                content: '对比了很多家，刚开始买了一小片背巾来看效果，的确不错，最后订做了一整套，漂亮！',
                date: '08.17',
              },
              {
                name: '燕***5',
                content: '质感很好！',
                date: '08.07',
              },
              {
                name: '伊***1',
                content: '宝贝收到了，铺在沙发上非常上档次，亚麻面料质地好，颜色也很漂亮，非常喜欢哦！',
                date: '08.04',
              },
              {
                name: '7***y',
                content: '很好。多次买了。',
                date: '07.15',
              },
              {
                name: 'j***d',
                content: '第一次买这类东西，感觉不错。客服“纯”和前面的“多”都很好。我是老沙发翻新，上几张图。',
                date: '07.06',
              },
              {
                name: '阳***2',
                content: '挺满意的，物有所值，',
                date: '07.05',
              },
              {
                name: 'm***乐',
                content: '买垫子有点味道～～质感什么的还不错',
                date: '07.04',
              },
              {
                name: 'f***贝',
                content: '很好的宝贝已经是第二次购买了,感谢比尔的耐心很感动，尺寸非常合适已经铺上了',
                date: '07.04',
              },
              {
                name: '给***8',
                content: '好评，做工精细。',
                date: '06.24',
              },
              {
                name: 'h***j',
                content: '和我家颜色差不多。',
                date: '06.21',
              },
              {
                name: 'l***惠',
                content: '两次买的质量不一样 一个偏厚一个偏薄 刚买完没多久就便宜了 客服还是挺耐心挺好的',
                date: '06.20',
              },
              {
                name: 'l***8',
                content: '沙发垫确实还可以，防滑，柔软的。就是感觉放小了，洗后再缩水，就够呛。有点小贵！',
                date: '06.19',
              },
              {
                name: 'i***p',
                content: '买了几张，家人都说好',
                date: '06.14',
              },
            ],
          },
        },
        {
          goodsId: 1030701,
          name: 'ZB-HD021',
          title: '亚麻沙发垫棉麻布艺夏季简约现代四季通用灰纯色实木沙发巾套定制',
          price: '134',
          pic: 'ZB-HD021.jpg',
          pic_min: 'ZB-HD021-min.jpg',
          num_sale: 21,
          detail: {
            goods: {
              property: {
                color: ['灰色'],
                suit: '组合沙发',
                material: '棉',
                size: ['70*70'],
                band: 'novatex',
                name: 'SFJ-3335',
                cat: '纯色',
                style: '现代中式'
              },
              pic: ['SFJ-3335-detail-0.jpg', 'SFJ-3335-detail-1.jpg', 'SFJ-3335-detail-2.jpg'],
            },
            comment: [
              {
                name: 'k董小妹',
                content: '撒都不想说了，自己看图吧，怎么可以这么好看，么么哒',
                date: '09.12',
              },
              {
                name: 'rmb6',
                content: '质量很好给5分，准备再买4块',
                date: '09.08',
              },
              {
                name: '伊***1',
                content: '宝贝收到了，质地好，做工精细，已经第二次购买了，颜色面料显高档，其中有一个买小了店家很快就答应给我换了一块大的，服务态度很棒！',
                date: '08.23',
              },
              {
                name: '芷***8',
                content: '一如既往的好',
                date: '08.20',
              },
              {
                name: 'i***p',
                content: '对比了很多家，刚开始买了一小片背巾来看效果，的确不错，最后订做了一整套，漂亮！',
                date: '08.17',
              },
              {
                name: '燕***5',
                content: '质感很好！',
                date: '08.07',
              },
              {
                name: '伊***1',
                content: '宝贝收到了，铺在沙发上非常上档次，亚麻面料质地好，颜色也很漂亮，非常喜欢哦！',
                date: '08.04',
              },
              {
                name: '7***y',
                content: '很好。多次买了。',
                date: '07.15',
              },
              {
                name: 'j***d',
                content: '第一次买这类东西，感觉不错。客服“纯”和前面的“多”都很好。我是老沙发翻新，上几张图。',
                date: '07.06',
              },
              {
                name: '阳***2',
                content: '挺满意的，物有所值，',
                date: '07.05',
              },
              {
                name: 'm***乐',
                content: '买垫子有点味道～～质感什么的还不错',
                date: '07.04',
              },
              {
                name: 'f***贝',
                content: '很好的宝贝已经是第二次购买了,感谢比尔的耐心很感动，尺寸非常合适已经铺上了',
                date: '07.04',
              },
              {
                name: '给***8',
                content: '好评，做工精细。',
                date: '06.24',
              },
              {
                name: 'h***j',
                content: '和我家颜色差不多。',
                date: '06.21',
              },
              {
                name: 'l***惠',
                content: '两次买的质量不一样 一个偏厚一个偏薄 刚买完没多久就便宜了 客服还是挺耐心挺好的',
                date: '06.20',
              },
              {
                name: 'l***8',
                content: '沙发垫确实还可以，防滑，柔软的。就是感觉放小了，洗后再缩水，就够呛。有点小贵！',
                date: '06.19',
              },
              {
                name: 'i***p',
                content: '买了几张，家人都说好',
                date: '06.14',
              },
            ],
          },
        },
        {
          goodsId: 1030801,
          name: 'ZB-C3465',
          title: '亚麻沙发垫棉麻布艺夏季简约现代四季通用灰纯色实木沙发巾套定制',
          price: '88',
          pic: 'ZB-C3465.jpg',
          pic_min: 'ZB-C3465-min.jpg',
          num_sale: 3465,
          detail: {
            goods: {
              property: {
                color: ['灰色'],
                suit: '组合沙发',
                material: '棉',
                size: ['70*70'],
                band: 'novatex',
                name: 'SFJ-3335',
                cat: '纯色',
                style: '现代中式'
              },
              pic: ['SFJ-3335-detail-0.jpg', 'SFJ-3335-detail-1.jpg', 'SFJ-3335-detail-2.jpg'],
            },
            comment: [
              {
                name: 'k董小妹',
                content: '撒都不想说了，自己看图吧，怎么可以这么好看，么么哒',
                date: '09.12',
              },
              {
                name: 'rmb6',
                content: '质量很好给5分，准备再买4块',
                date: '09.08',
              },
              {
                name: '伊***1',
                content: '宝贝收到了，质地好，做工精细，已经第二次购买了，颜色面料显高档，其中有一个买小了店家很快就答应给我换了一块大的，服务态度很棒！',
                date: '08.23',
              },
              {
                name: '芷***8',
                content: '一如既往的好',
                date: '08.20',
              },
              {
                name: 'i***p',
                content: '对比了很多家，刚开始买了一小片背巾来看效果，的确不错，最后订做了一整套，漂亮！',
                date: '08.17',
              },
              {
                name: '燕***5',
                content: '质感很好！',
                date: '08.07',
              },
              {
                name: '伊***1',
                content: '宝贝收到了，铺在沙发上非常上档次，亚麻面料质地好，颜色也很漂亮，非常喜欢哦！',
                date: '08.04',
              },
              {
                name: '7***y',
                content: '很好。多次买了。',
                date: '07.15',
              },
              {
                name: 'j***d',
                content: '第一次买这类东西，感觉不错。客服“纯”和前面的“多”都很好。我是老沙发翻新，上几张图。',
                date: '07.06',
              },
              {
                name: '阳***2',
                content: '挺满意的，物有所值，',
                date: '07.05',
              },
              {
                name: 'm***乐',
                content: '买垫子有点味道～～质感什么的还不错',
                date: '07.04',
              },
              {
                name: 'f***贝',
                content: '很好的宝贝已经是第二次购买了,感谢比尔的耐心很感动，尺寸非常合适已经铺上了',
                date: '07.04',
              },
              {
                name: '给***8',
                content: '好评，做工精细。',
                date: '06.24',
              },
              {
                name: 'h***j',
                content: '和我家颜色差不多。',
                date: '06.21',
              },
              {
                name: 'l***惠',
                content: '两次买的质量不一样 一个偏厚一个偏薄 刚买完没多久就便宜了 客服还是挺耐心挺好的',
                date: '06.20',
              },
              {
                name: 'l***8',
                content: '沙发垫确实还可以，防滑，柔软的。就是感觉放小了，洗后再缩水，就够呛。有点小贵！',
                date: '06.19',
              },
              {
                name: 'i***p',
                content: '买了几张，家人都说好',
                date: '06.14',
              },
            ],
          },
        },
        {
          goodsId: 1040101,
          name: 'ZQ-L2024',
          title: '亚麻沙发垫棉麻布艺夏季简约现代四季通用灰纯色实木沙发巾套定制',
          price: '137',
          pic: 'ZQ-L2024.jpg',
          pic_min: 'ZQ-L2024-min.jpg',
          num_sale: 2024,
          detail: {
            goods: {
              property: {
                color: ['灰色'],
                suit: '组合沙发',
                material: '棉',
                size: ['70*70'],
                band: 'novatex',
                name: 'SFJ-3335',
                cat: '纯色',
                style: '现代中式'
              },
              pic: ['SFJ-3335-detail-0.jpg', 'SFJ-3335-detail-1.jpg', 'SFJ-3335-detail-2.jpg'],
            },
            comment: [
              {
                name: 'k董小妹',
                content: '撒都不想说了，自己看图吧，怎么可以这么好看，么么哒',
                date: '09.12',
              },
              {
                name: 'rmb6',
                content: '质量很好给5分，准备再买4块',
                date: '09.08',
              },
              {
                name: '伊***1',
                content: '宝贝收到了，质地好，做工精细，已经第二次购买了，颜色面料显高档，其中有一个买小了店家很快就答应给我换了一块大的，服务态度很棒！',
                date: '08.23',
              },
              {
                name: '芷***8',
                content: '一如既往的好',
                date: '08.20',
              },
              {
                name: 'i***p',
                content: '对比了很多家，刚开始买了一小片背巾来看效果，的确不错，最后订做了一整套，漂亮！',
                date: '08.17',
              },
              {
                name: '燕***5',
                content: '质感很好！',
                date: '08.07',
              },
              {
                name: '伊***1',
                content: '宝贝收到了，铺在沙发上非常上档次，亚麻面料质地好，颜色也很漂亮，非常喜欢哦！',
                date: '08.04',
              },
              {
                name: '7***y',
                content: '很好。多次买了。',
                date: '07.15',
              },
              {
                name: 'j***d',
                content: '第一次买这类东西，感觉不错。客服“纯”和前面的“多”都很好。我是老沙发翻新，上几张图。',
                date: '07.06',
              },
              {
                name: '阳***2',
                content: '挺满意的，物有所值，',
                date: '07.05',
              },
              {
                name: 'm***乐',
                content: '买垫子有点味道～～质感什么的还不错',
                date: '07.04',
              },
              {
                name: 'f***贝',
                content: '很好的宝贝已经是第二次购买了,感谢比尔的耐心很感动，尺寸非常合适已经铺上了',
                date: '07.04',
              },
              {
                name: '给***8',
                content: '好评，做工精细。',
                date: '06.24',
              },
              {
                name: 'h***j',
                content: '和我家颜色差不多。',
                date: '06.21',
              },
              {
                name: 'l***惠',
                content: '两次买的质量不一样 一个偏厚一个偏薄 刚买完没多久就便宜了 客服还是挺耐心挺好的',
                date: '06.20',
              },
              {
                name: 'l***8',
                content: '沙发垫确实还可以，防滑，柔软的。就是感觉放小了，洗后再缩水，就够呛。有点小贵！',
                date: '06.19',
              },
              {
                name: 'i***p',
                content: '买了几张，家人都说好',
                date: '06.14',
              },
            ],
          },
        },
        {
          goodsId: 1040201,
          name: 'ZQ-L2027',
          title: '亚麻沙发垫棉麻布艺夏季简约现代四季通用灰纯色实木沙发巾套定制',
          price: '145',
          pic: 'ZQ-L2027.jpg',
          pic_min: 'ZQ-L2027-min.jpg',
          num_sale: 2027,
          detail: {
            goods: {
              property: {
                color: ['灰色'],
                suit: '组合沙发',
                material: '棉',
                size: ['70*70'],
                band: 'novatex',
                name: 'SFJ-3335',
                cat: '纯色',
                style: '现代中式'
              },
              pic: ['SFJ-3335-detail-0.jpg', 'SFJ-3335-detail-1.jpg', 'SFJ-3335-detail-2.jpg'],
            },
            comment: [
              {
                name: 'k董小妹',
                content: '撒都不想说了，自己看图吧，怎么可以这么好看，么么哒',
                date: '09.12',
              },
              {
                name: 'rmb6',
                content: '质量很好给5分，准备再买4块',
                date: '09.08',
              },
              {
                name: '伊***1',
                content: '宝贝收到了，质地好，做工精细，已经第二次购买了，颜色面料显高档，其中有一个买小了店家很快就答应给我换了一块大的，服务态度很棒！',
                date: '08.23',
              },
              {
                name: '芷***8',
                content: '一如既往的好',
                date: '08.20',
              },
              {
                name: 'i***p',
                content: '对比了很多家，刚开始买了一小片背巾来看效果，的确不错，最后订做了一整套，漂亮！',
                date: '08.17',
              },
              {
                name: '燕***5',
                content: '质感很好！',
                date: '08.07',
              },
              {
                name: '伊***1',
                content: '宝贝收到了，铺在沙发上非常上档次，亚麻面料质地好，颜色也很漂亮，非常喜欢哦！',
                date: '08.04',
              },
              {
                name: '7***y',
                content: '很好。多次买了。',
                date: '07.15',
              },
              {
                name: 'j***d',
                content: '第一次买这类东西，感觉不错。客服“纯”和前面的“多”都很好。我是老沙发翻新，上几张图。',
                date: '07.06',
              },
              {
                name: '阳***2',
                content: '挺满意的，物有所值，',
                date: '07.05',
              },
              {
                name: 'm***乐',
                content: '买垫子有点味道～～质感什么的还不错',
                date: '07.04',
              },
              {
                name: 'f***贝',
                content: '很好的宝贝已经是第二次购买了,感谢比尔的耐心很感动，尺寸非常合适已经铺上了',
                date: '07.04',
              },
              {
                name: '给***8',
                content: '好评，做工精细。',
                date: '06.24',
              },
              {
                name: 'h***j',
                content: '和我家颜色差不多。',
                date: '06.21',
              },
              {
                name: 'l***惠',
                content: '两次买的质量不一样 一个偏厚一个偏薄 刚买完没多久就便宜了 客服还是挺耐心挺好的',
                date: '06.20',
              },
              {
                name: 'l***8',
                content: '沙发垫确实还可以，防滑，柔软的。就是感觉放小了，洗后再缩水，就够呛。有点小贵！',
                date: '06.19',
              },
              {
                name: 'i***p',
                content: '买了几张，家人都说好',
                date: '06.14',
              },
            ],
          },
        },
        {
          goodsId: 1040301,
          name: 'ZQ-HD021',
          title: '亚麻沙发垫棉麻布艺夏季简约现代四季通用灰纯色实木沙发巾套定制',
          price: '93',
          pic: 'ZQ-HD021.jpg',
          pic_min: 'ZQ-HD021-min.jpg',
          num_sale: 21,
          detail: {
            goods: {
              property: {
                color: ['灰色'],
                suit: '组合沙发',
                material: '棉',
                size: ['70*70'],
                band: 'novatex',
                name: 'SFJ-3335',
                cat: '纯色',
                style: '现代中式'
              },
              pic: ['SFJ-3335-detail-0.jpg', 'SFJ-3335-detail-1.jpg', 'SFJ-3335-detail-2.jpg'],
            },
            comment: [
              {
                name: 'k董小妹',
                content: '撒都不想说了，自己看图吧，怎么可以这么好看，么么哒',
                date: '09.12',
              },
              {
                name: 'rmb6',
                content: '质量很好给5分，准备再买4块',
                date: '09.08',
              },
              {
                name: '伊***1',
                content: '宝贝收到了，质地好，做工精细，已经第二次购买了，颜色面料显高档，其中有一个买小了店家很快就答应给我换了一块大的，服务态度很棒！',
                date: '08.23',
              },
              {
                name: '芷***8',
                content: '一如既往的好',
                date: '08.20',
              },
              {
                name: 'i***p',
                content: '对比了很多家，刚开始买了一小片背巾来看效果，的确不错，最后订做了一整套，漂亮！',
                date: '08.17',
              },
              {
                name: '燕***5',
                content: '质感很好！',
                date: '08.07',
              },
              {
                name: '伊***1',
                content: '宝贝收到了，铺在沙发上非常上档次，亚麻面料质地好，颜色也很漂亮，非常喜欢哦！',
                date: '08.04',
              },
              {
                name: '7***y',
                content: '很好。多次买了。',
                date: '07.15',
              },
              {
                name: 'j***d',
                content: '第一次买这类东西，感觉不错。客服“纯”和前面的“多”都很好。我是老沙发翻新，上几张图。',
                date: '07.06',
              },
              {
                name: '阳***2',
                content: '挺满意的，物有所值，',
                date: '07.05',
              },
              {
                name: 'm***乐',
                content: '买垫子有点味道～～质感什么的还不错',
                date: '07.04',
              },
              {
                name: 'f***贝',
                content: '很好的宝贝已经是第二次购买了,感谢比尔的耐心很感动，尺寸非常合适已经铺上了',
                date: '07.04',
              },
              {
                name: '给***8',
                content: '好评，做工精细。',
                date: '06.24',
              },
              {
                name: 'h***j',
                content: '和我家颜色差不多。',
                date: '06.21',
              },
              {
                name: 'l***惠',
                content: '两次买的质量不一样 一个偏厚一个偏薄 刚买完没多久就便宜了 客服还是挺耐心挺好的',
                date: '06.20',
              },
              {
                name: 'l***8',
                content: '沙发垫确实还可以，防滑，柔软的。就是感觉放小了，洗后再缩水，就够呛。有点小贵！',
                date: '06.19',
              },
              {
                name: 'i***p',
                content: '买了几张，家人都说好',
                date: '06.14',
              },
            ],
          },
        },
        {
          goodsId: 1040401,
          name: 'ZQ-7801',
          title: '亚麻沙发垫棉麻布艺夏季简约现代四季通用灰纯色实木沙发巾套定制',
          price: '97',
          pic: 'ZQ-7801.jpg',
          pic_min: 'ZQ-7801-min.jpg',
          num_sale: 7801,
          detail: {
            goods: {
              property: {
                color: ['灰色'],
                suit: '组合沙发',
                material: '棉',
                size: ['70*70'],
                band: 'novatex',
                name: 'SFJ-3335',
                cat: '纯色',
                style: '现代中式'
              },
              pic: ['SFJ-3335-detail-0.jpg', 'SFJ-3335-detail-1.jpg', 'SFJ-3335-detail-2.jpg'],
            },
            comment: [
              {
                name: 'k董小妹',
                content: '撒都不想说了，自己看图吧，怎么可以这么好看，么么哒',
                date: '09.12',
              },
              {
                name: 'rmb6',
                content: '质量很好给5分，准备再买4块',
                date: '09.08',
              },
              {
                name: '伊***1',
                content: '宝贝收到了，质地好，做工精细，已经第二次购买了，颜色面料显高档，其中有一个买小了店家很快就答应给我换了一块大的，服务态度很棒！',
                date: '08.23',
              },
              {
                name: '芷***8',
                content: '一如既往的好',
                date: '08.20',
              },
              {
                name: 'i***p',
                content: '对比了很多家，刚开始买了一小片背巾来看效果，的确不错，最后订做了一整套，漂亮！',
                date: '08.17',
              },
              {
                name: '燕***5',
                content: '质感很好！',
                date: '08.07',
              },
              {
                name: '伊***1',
                content: '宝贝收到了，铺在沙发上非常上档次，亚麻面料质地好，颜色也很漂亮，非常喜欢哦！',
                date: '08.04',
              },
              {
                name: '7***y',
                content: '很好。多次买了。',
                date: '07.15',
              },
              {
                name: 'j***d',
                content: '第一次买这类东西，感觉不错。客服“纯”和前面的“多”都很好。我是老沙发翻新，上几张图。',
                date: '07.06',
              },
              {
                name: '阳***2',
                content: '挺满意的，物有所值，',
                date: '07.05',
              },
              {
                name: 'm***乐',
                content: '买垫子有点味道～～质感什么的还不错',
                date: '07.04',
              },
              {
                name: 'f***贝',
                content: '很好的宝贝已经是第二次购买了,感谢比尔的耐心很感动，尺寸非常合适已经铺上了',
                date: '07.04',
              },
              {
                name: '给***8',
                content: '好评，做工精细。',
                date: '06.24',
              },
              {
                name: 'h***j',
                content: '和我家颜色差不多。',
                date: '06.21',
              },
              {
                name: 'l***惠',
                content: '两次买的质量不一样 一个偏厚一个偏薄 刚买完没多久就便宜了 客服还是挺耐心挺好的',
                date: '06.20',
              },
              {
                name: 'l***8',
                content: '沙发垫确实还可以，防滑，柔软的。就是感觉放小了，洗后再缩水，就够呛。有点小贵！',
                date: '06.19',
              },
              {
                name: 'i***p',
                content: '买了几张，家人都说好',
                date: '06.14',
              },
            ],
          },
        },
        {
          goodsId: 1050101,
          name: 'YD-4200',
          title: '亚麻沙发垫棉麻布艺夏季简约现代四季通用灰纯色实木沙发巾套定制',
          price: '39',
          pic: 'YD-4200.jpg',
          pic_min: 'YD-4200-min.jpg',
          num_sale: 4200,
          detail: {
            goods: {
              property: {
                color: ['灰色'],
                suit: '组合沙发',
                material: '棉',
                size: ['70*70'],
                band: 'novatex',
                name: 'SFJ-3335',
                cat: '纯色',
                style: '现代中式'
              },
              pic: ['SFJ-3335-detail-0.jpg', 'SFJ-3335-detail-1.jpg', 'SFJ-3335-detail-2.jpg'],
            },
            comment: [
              {
                name: 'k董小妹',
                content: '撒都不想说了，自己看图吧，怎么可以这么好看，么么哒',
                date: '09.12',
              },
              {
                name: 'rmb6',
                content: '质量很好给5分，准备再买4块',
                date: '09.08',
              },
              {
                name: '伊***1',
                content: '宝贝收到了，质地好，做工精细，已经第二次购买了，颜色面料显高档，其中有一个买小了店家很快就答应给我换了一块大的，服务态度很棒！',
                date: '08.23',
              },
              {
                name: '芷***8',
                content: '一如既往的好',
                date: '08.20',
              },
              {
                name: 'i***p',
                content: '对比了很多家，刚开始买了一小片背巾来看效果，的确不错，最后订做了一整套，漂亮！',
                date: '08.17',
              },
              {
                name: '燕***5',
                content: '质感很好！',
                date: '08.07',
              },
              {
                name: '伊***1',
                content: '宝贝收到了，铺在沙发上非常上档次，亚麻面料质地好，颜色也很漂亮，非常喜欢哦！',
                date: '08.04',
              },
              {
                name: '7***y',
                content: '很好。多次买了。',
                date: '07.15',
              },
              {
                name: 'j***d',
                content: '第一次买这类东西，感觉不错。客服“纯”和前面的“多”都很好。我是老沙发翻新，上几张图。',
                date: '07.06',
              },
              {
                name: '阳***2',
                content: '挺满意的，物有所值，',
                date: '07.05',
              },
              {
                name: 'm***乐',
                content: '买垫子有点味道～～质感什么的还不错',
                date: '07.04',
              },
              {
                name: 'f***贝',
                content: '很好的宝贝已经是第二次购买了,感谢比尔的耐心很感动，尺寸非常合适已经铺上了',
                date: '07.04',
              },
              {
                name: '给***8',
                content: '好评，做工精细。',
                date: '06.24',
              },
              {
                name: 'h***j',
                content: '和我家颜色差不多。',
                date: '06.21',
              },
              {
                name: 'l***惠',
                content: '两次买的质量不一样 一个偏厚一个偏薄 刚买完没多久就便宜了 客服还是挺耐心挺好的',
                date: '06.20',
              },
              {
                name: 'l***8',
                content: '沙发垫确实还可以，防滑，柔软的。就是感觉放小了，洗后再缩水，就够呛。有点小贵！',
                date: '06.19',
              },
              {
                name: 'i***p',
                content: '买了几张，家人都说好',
                date: '06.14',
              },
            ],
          },
        },
        {
          goodsId: 1050201,
          name: 'YD-3275',
          title: '亚麻沙发垫棉麻布艺夏季简约现代四季通用灰纯色实木沙发巾套定制',
          price: '62',
          pic: 'YD-3275.jpg',
          pic_min: 'YD-3275-min.jpg',
          num_sale: 3275,
          detail: {
            goods: {
              property: {
                color: ['灰色'],
                suit: '组合沙发',
                material: '棉',
                size: ['70*70'],
                band: 'novatex',
                name: 'SFJ-3335',
                cat: '纯色',
                style: '现代中式'
              },
              pic: ['SFJ-3335-detail-0.jpg', 'SFJ-3335-detail-1.jpg', 'SFJ-3335-detail-2.jpg'],
            },
            comment: [
              {
                name: 'k董小妹',
                content: '撒都不想说了，自己看图吧，怎么可以这么好看，么么哒',
                date: '09.12',
              },
              {
                name: 'rmb6',
                content: '质量很好给5分，准备再买4块',
                date: '09.08',
              },
              {
                name: '伊***1',
                content: '宝贝收到了，质地好，做工精细，已经第二次购买了，颜色面料显高档，其中有一个买小了店家很快就答应给我换了一块大的，服务态度很棒！',
                date: '08.23',
              },
              {
                name: '芷***8',
                content: '一如既往的好',
                date: '08.20',
              },
              {
                name: 'i***p',
                content: '对比了很多家，刚开始买了一小片背巾来看效果，的确不错，最后订做了一整套，漂亮！',
                date: '08.17',
              },
              {
                name: '燕***5',
                content: '质感很好！',
                date: '08.07',
              },
              {
                name: '伊***1',
                content: '宝贝收到了，铺在沙发上非常上档次，亚麻面料质地好，颜色也很漂亮，非常喜欢哦！',
                date: '08.04',
              },
              {
                name: '7***y',
                content: '很好。多次买了。',
                date: '07.15',
              },
              {
                name: 'j***d',
                content: '第一次买这类东西，感觉不错。客服“纯”和前面的“多”都很好。我是老沙发翻新，上几张图。',
                date: '07.06',
              },
              {
                name: '阳***2',
                content: '挺满意的，物有所值，',
                date: '07.05',
              },
              {
                name: 'm***乐',
                content: '买垫子有点味道～～质感什么的还不错',
                date: '07.04',
              },
              {
                name: 'f***贝',
                content: '很好的宝贝已经是第二次购买了,感谢比尔的耐心很感动，尺寸非常合适已经铺上了',
                date: '07.04',
              },
              {
                name: '给***8',
                content: '好评，做工精细。',
                date: '06.24',
              },
              {
                name: 'h***j',
                content: '和我家颜色差不多。',
                date: '06.21',
              },
              {
                name: 'l***惠',
                content: '两次买的质量不一样 一个偏厚一个偏薄 刚买完没多久就便宜了 客服还是挺耐心挺好的',
                date: '06.20',
              },
              {
                name: 'l***8',
                content: '沙发垫确实还可以，防滑，柔软的。就是感觉放小了，洗后再缩水，就够呛。有点小贵！',
                date: '06.19',
              },
              {
                name: 'i***p',
                content: '买了几张，家人都说好',
                date: '06.14',
              },
            ],
          },
        },
        {
          goodsId: 1050301,
          name: 'YD-HD118',
          title: '亚麻沙发垫棉麻布艺夏季简约现代四季通用灰纯色实木沙发巾套定制',
          price: '55',
          pic: 'YD-HD118.jpg',
          pic_min: 'YD-HD118-min.jpg',
          num_sale: 118,
          detail: {
            goods: {
              property: {
                color: ['灰色'],
                suit: '组合沙发',
                material: '棉',
                size: ['70*70'],
                band: 'novatex',
                name: 'SFJ-3335',
                cat: '纯色',
                style: '现代中式'
              },
              pic: ['SFJ-3335-detail-0.jpg', 'SFJ-3335-detail-1.jpg', 'SFJ-3335-detail-2.jpg'],
            },
            comment: [
              {
                name: 'k董小妹',
                content: '撒都不想说了，自己看图吧，怎么可以这么好看，么么哒',
                date: '09.12',
              },
              {
                name: 'rmb6',
                content: '质量很好给5分，准备再买4块',
                date: '09.08',
              },
              {
                name: '伊***1',
                content: '宝贝收到了，质地好，做工精细，已经第二次购买了，颜色面料显高档，其中有一个买小了店家很快就答应给我换了一块大的，服务态度很棒！',
                date: '08.23',
              },
              {
                name: '芷***8',
                content: '一如既往的好',
                date: '08.20',
              },
              {
                name: 'i***p',
                content: '对比了很多家，刚开始买了一小片背巾来看效果，的确不错，最后订做了一整套，漂亮！',
                date: '08.17',
              },
              {
                name: '燕***5',
                content: '质感很好！',
                date: '08.07',
              },
              {
                name: '伊***1',
                content: '宝贝收到了，铺在沙发上非常上档次，亚麻面料质地好，颜色也很漂亮，非常喜欢哦！',
                date: '08.04',
              },
              {
                name: '7***y',
                content: '很好。多次买了。',
                date: '07.15',
              },
              {
                name: 'j***d',
                content: '第一次买这类东西，感觉不错。客服“纯”和前面的“多”都很好。我是老沙发翻新，上几张图。',
                date: '07.06',
              },
              {
                name: '阳***2',
                content: '挺满意的，物有所值，',
                date: '07.05',
              },
              {
                name: 'm***乐',
                content: '买垫子有点味道～～质感什么的还不错',
                date: '07.04',
              },
              {
                name: 'f***贝',
                content: '很好的宝贝已经是第二次购买了,感谢比尔的耐心很感动，尺寸非常合适已经铺上了',
                date: '07.04',
              },
              {
                name: '给***8',
                content: '好评，做工精细。',
                date: '06.24',
              },
              {
                name: 'h***j',
                content: '和我家颜色差不多。',
                date: '06.21',
              },
              {
                name: 'l***惠',
                content: '两次买的质量不一样 一个偏厚一个偏薄 刚买完没多久就便宜了 客服还是挺耐心挺好的',
                date: '06.20',
              },
              {
                name: 'l***8',
                content: '沙发垫确实还可以，防滑，柔软的。就是感觉放小了，洗后再缩水，就够呛。有点小贵！',
                date: '06.19',
              },
              {
                name: 'i***p',
                content: '买了几张，家人都说好',
                date: '06.14',
              },
            ],
          },
        },
        {
          goodsId: 1050401,
          name: 'YD-62779',
          title: '亚麻沙发垫棉麻布艺夏季简约现代四季通用灰纯色实木沙发巾套定制',
          price: '65',
          pic: 'YD-62779.jpg',
          pic_min: 'YD-62779-min.jpg',
          num_sale: 62779,
          detail: {
            goods: {
              property: {
                color: ['灰色'],
                suit: '组合沙发',
                material: '棉',
                size: ['70*70'],
                band: 'novatex',
                name: 'SFJ-3335',
                cat: '纯色',
                style: '现代中式'
              },
              pic: ['SFJ-3335-detail-0.jpg', 'SFJ-3335-detail-1.jpg', 'SFJ-3335-detail-2.jpg'],
            },
            comment: [
              {
                name: 'k董小妹',
                content: '撒都不想说了，自己看图吧，怎么可以这么好看，么么哒',
                date: '09.12',
              },
              {
                name: 'rmb6',
                content: '质量很好给5分，准备再买4块',
                date: '09.08',
              },
              {
                name: '伊***1',
                content: '宝贝收到了，质地好，做工精细，已经第二次购买了，颜色面料显高档，其中有一个买小了店家很快就答应给我换了一块大的，服务态度很棒！',
                date: '08.23',
              },
              {
                name: '芷***8',
                content: '一如既往的好',
                date: '08.20',
              },
              {
                name: 'i***p',
                content: '对比了很多家，刚开始买了一小片背巾来看效果，的确不错，最后订做了一整套，漂亮！',
                date: '08.17',
              },
              {
                name: '燕***5',
                content: '质感很好！',
                date: '08.07',
              },
              {
                name: '伊***1',
                content: '宝贝收到了，铺在沙发上非常上档次，亚麻面料质地好，颜色也很漂亮，非常喜欢哦！',
                date: '08.04',
              },
              {
                name: '7***y',
                content: '很好。多次买了。',
                date: '07.15',
              },
              {
                name: 'j***d',
                content: '第一次买这类东西，感觉不错。客服“纯”和前面的“多”都很好。我是老沙发翻新，上几张图。',
                date: '07.06',
              },
              {
                name: '阳***2',
                content: '挺满意的，物有所值，',
                date: '07.05',
              },
              {
                name: 'm***乐',
                content: '买垫子有点味道～～质感什么的还不错',
                date: '07.04',
              },
              {
                name: 'f***贝',
                content: '很好的宝贝已经是第二次购买了,感谢比尔的耐心很感动，尺寸非常合适已经铺上了',
                date: '07.04',
              },
              {
                name: '给***8',
                content: '好评，做工精细。',
                date: '06.24',
              },
              {
                name: 'h***j',
                content: '和我家颜色差不多。',
                date: '06.21',
              },
              {
                name: 'l***惠',
                content: '两次买的质量不一样 一个偏厚一个偏薄 刚买完没多久就便宜了 客服还是挺耐心挺好的',
                date: '06.20',
              },
              {
                name: 'l***8',
                content: '沙发垫确实还可以，防滑，柔软的。就是感觉放小了，洗后再缩水，就够呛。有点小贵！',
                date: '06.19',
              },
              {
                name: 'i***p',
                content: '买了几张，家人都说好',
                date: '06.14',
              },
            ],
          },
        },
        {
          goodsId: 1060101,
          name: 'CD-L2024',
          title: '亚麻沙发垫棉麻布艺夏季简约现代四季通用灰纯色实木沙发巾套定制',
          price: '27',
          pic: 'CD-L2024.jpg',
          pic_min: 'CD-L2024-min.jpg',
          num_sale: 2024,
          detail: {
            goods: {
              property: {
                color: ['灰色'],
                suit: '组合沙发',
                material: '棉',
                size: ['70*70'],
                band: 'novatex',
                name: 'SFJ-3335',
                cat: '纯色',
                style: '现代中式'
              },
              pic: ['SFJ-3335-detail-0.jpg', 'SFJ-3335-detail-1.jpg', 'SFJ-3335-detail-2.jpg'],
            },
            comment: [
              {
                name: 'k董小妹',
                content: '撒都不想说了，自己看图吧，怎么可以这么好看，么么哒',
                date: '09.12',
              },
              {
                name: 'rmb6',
                content: '质量很好给5分，准备再买4块',
                date: '09.08',
              },
              {
                name: '伊***1',
                content: '宝贝收到了，质地好，做工精细，已经第二次购买了，颜色面料显高档，其中有一个买小了店家很快就答应给我换了一块大的，服务态度很棒！',
                date: '08.23',
              },
              {
                name: '芷***8',
                content: '一如既往的好',
                date: '08.20',
              },
              {
                name: 'i***p',
                content: '对比了很多家，刚开始买了一小片背巾来看效果，的确不错，最后订做了一整套，漂亮！',
                date: '08.17',
              },
              {
                name: '燕***5',
                content: '质感很好！',
                date: '08.07',
              },
              {
                name: '伊***1',
                content: '宝贝收到了，铺在沙发上非常上档次，亚麻面料质地好，颜色也很漂亮，非常喜欢哦！',
                date: '08.04',
              },
              {
                name: '7***y',
                content: '很好。多次买了。',
                date: '07.15',
              },
              {
                name: 'j***d',
                content: '第一次买这类东西，感觉不错。客服“纯”和前面的“多”都很好。我是老沙发翻新，上几张图。',
                date: '07.06',
              },
              {
                name: '阳***2',
                content: '挺满意的，物有所值，',
                date: '07.05',
              },
              {
                name: 'm***乐',
                content: '买垫子有点味道～～质感什么的还不错',
                date: '07.04',
              },
              {
                name: 'f***贝',
                content: '很好的宝贝已经是第二次购买了,感谢比尔的耐心很感动，尺寸非常合适已经铺上了',
                date: '07.04',
              },
              {
                name: '给***8',
                content: '好评，做工精细。',
                date: '06.24',
              },
              {
                name: 'h***j',
                content: '和我家颜色差不多。',
                date: '06.21',
              },
              {
                name: 'l***惠',
                content: '两次买的质量不一样 一个偏厚一个偏薄 刚买完没多久就便宜了 客服还是挺耐心挺好的',
                date: '06.20',
              },
              {
                name: 'l***8',
                content: '沙发垫确实还可以，防滑，柔软的。就是感觉放小了，洗后再缩水，就够呛。有点小贵！',
                date: '06.19',
              },
              {
                name: 'i***p',
                content: '买了几张，家人都说好',
                date: '06.14',
              },
            ],
          },
        },
        {
          goodsId: 1060201,
          name: 'CD-3335',
          title: '亚麻沙发垫棉麻布艺夏季简约现代四季通用灰纯色实木沙发巾套定制',
          price: '22',
          pic: 'CD-3335.jpg',
          pic_min: 'CD-3335-min.jpg',
          num_sale: 3335,
          detail: {
            goods: {
              property: {
                color: ['灰色'],
                suit: '组合沙发',
                material: '棉',
                size: ['70*70'],
                band: 'novatex',
                name: 'SFJ-3335',
                cat: '纯色',
                style: '现代中式'
              },
              pic: ['SFJ-3335-detail-0.jpg', 'SFJ-3335-detail-1.jpg', 'SFJ-3335-detail-2.jpg'],
            },
            comment: [
              {
                name: 'k董小妹',
                content: '撒都不想说了，自己看图吧，怎么可以这么好看，么么哒',
                date: '09.12',
              },
              {
                name: 'rmb6',
                content: '质量很好给5分，准备再买4块',
                date: '09.08',
              },
              {
                name: '伊***1',
                content: '宝贝收到了，质地好，做工精细，已经第二次购买了，颜色面料显高档，其中有一个买小了店家很快就答应给我换了一块大的，服务态度很棒！',
                date: '08.23',
              },
              {
                name: '芷***8',
                content: '一如既往的好',
                date: '08.20',
              },
              {
                name: 'i***p',
                content: '对比了很多家，刚开始买了一小片背巾来看效果，的确不错，最后订做了一整套，漂亮！',
                date: '08.17',
              },
              {
                name: '燕***5',
                content: '质感很好！',
                date: '08.07',
              },
              {
                name: '伊***1',
                content: '宝贝收到了，铺在沙发上非常上档次，亚麻面料质地好，颜色也很漂亮，非常喜欢哦！',
                date: '08.04',
              },
              {
                name: '7***y',
                content: '很好。多次买了。',
                date: '07.15',
              },
              {
                name: 'j***d',
                content: '第一次买这类东西，感觉不错。客服“纯”和前面的“多”都很好。我是老沙发翻新，上几张图。',
                date: '07.06',
              },
              {
                name: '阳***2',
                content: '挺满意的，物有所值，',
                date: '07.05',
              },
              {
                name: 'm***乐',
                content: '买垫子有点味道～～质感什么的还不错',
                date: '07.04',
              },
              {
                name: 'f***贝',
                content: '很好的宝贝已经是第二次购买了,感谢比尔的耐心很感动，尺寸非常合适已经铺上了',
                date: '07.04',
              },
              {
                name: '给***8',
                content: '好评，做工精细。',
                date: '06.24',
              },
              {
                name: 'h***j',
                content: '和我家颜色差不多。',
                date: '06.21',
              },
              {
                name: 'l***惠',
                content: '两次买的质量不一样 一个偏厚一个偏薄 刚买完没多久就便宜了 客服还是挺耐心挺好的',
                date: '06.20',
              },
              {
                name: 'l***8',
                content: '沙发垫确实还可以，防滑，柔软的。就是感觉放小了，洗后再缩水，就够呛。有点小贵！',
                date: '06.19',
              },
              {
                name: 'i***p',
                content: '买了几张，家人都说好',
                date: '06.14',
              },
            ],
          },
        },
        {
          goodsId: 1060301,
          name: 'CD-HD078小绣花',
          title: '亚麻沙发垫棉麻布艺夏季简约现代四季通用灰纯色实木沙发巾套定制',
          price: '19',
          pic: 'CD-HD078xiuhua.jpg',
          pic_min: 'CD-HD078xiuhua-min.jpg',
          num_sale: 78,
          detail: {
            goods: {
              property: {
                color: ['灰色'],
                suit: '组合沙发',
                material: '棉',
                size: ['70*70'],
                band: 'novatex',
                name: 'SFJ-3335',
                cat: '纯色',
                style: '现代中式'
              },
              pic: ['SFJ-3335-detail-0.jpg', 'SFJ-3335-detail-1.jpg', 'SFJ-3335-detail-2.jpg'],
            },
            comment: [
              {
                name: 'k董小妹',
                content: '撒都不想说了，自己看图吧，怎么可以这么好看，么么哒',
                date: '09.12',
              },
              {
                name: 'rmb6',
                content: '质量很好给5分，准备再买4块',
                date: '09.08',
              },
              {
                name: '伊***1',
                content: '宝贝收到了，质地好，做工精细，已经第二次购买了，颜色面料显高档，其中有一个买小了店家很快就答应给我换了一块大的，服务态度很棒！',
                date: '08.23',
              },
              {
                name: '芷***8',
                content: '一如既往的好',
                date: '08.20',
              },
              {
                name: 'i***p',
                content: '对比了很多家，刚开始买了一小片背巾来看效果，的确不错，最后订做了一整套，漂亮！',
                date: '08.17',
              },
              {
                name: '燕***5',
                content: '质感很好！',
                date: '08.07',
              },
              {
                name: '伊***1',
                content: '宝贝收到了，铺在沙发上非常上档次，亚麻面料质地好，颜色也很漂亮，非常喜欢哦！',
                date: '08.04',
              },
              {
                name: '7***y',
                content: '很好。多次买了。',
                date: '07.15',
              },
              {
                name: 'j***d',
                content: '第一次买这类东西，感觉不错。客服“纯”和前面的“多”都很好。我是老沙发翻新，上几张图。',
                date: '07.06',
              },
              {
                name: '阳***2',
                content: '挺满意的，物有所值，',
                date: '07.05',
              },
              {
                name: 'm***乐',
                content: '买垫子有点味道～～质感什么的还不错',
                date: '07.04',
              },
              {
                name: 'f***贝',
                content: '很好的宝贝已经是第二次购买了,感谢比尔的耐心很感动，尺寸非常合适已经铺上了',
                date: '07.04',
              },
              {
                name: '给***8',
                content: '好评，做工精细。',
                date: '06.24',
              },
              {
                name: 'h***j',
                content: '和我家颜色差不多。',
                date: '06.21',
              },
              {
                name: 'l***惠',
                content: '两次买的质量不一样 一个偏厚一个偏薄 刚买完没多久就便宜了 客服还是挺耐心挺好的',
                date: '06.20',
              },
              {
                name: 'l***8',
                content: '沙发垫确实还可以，防滑，柔软的。就是感觉放小了，洗后再缩水，就够呛。有点小贵！',
                date: '06.19',
              },
              {
                name: 'i***p',
                content: '买了几张，家人都说好',
                date: '06.14',
              },
            ],
          },
        },
        {
          goodsId: 1060401,
          name: 'CD-52838',
          title: '亚麻沙发垫棉麻布艺夏季简约现代四季通用灰纯色实木沙发巾套定制',
          price: '27',
          pic: 'CD-52838.jpg',
          pic_min: 'CD-52838-min.jpg',
          num_sale: 401,
          detail: {
            goods: {
              property: {
                color: ['灰色'],
                suit: '组合沙发',
                material: '棉',
                size: ['70*70'],
                band: 'novatex',
                name: 'SFJ-3335',
                cat: '纯色',
                style: '现代中式'
              },
              pic: ['SFJ-3335-detail-0.jpg', 'SFJ-3335-detail-1.jpg', 'SFJ-3335-detail-2.jpg'],
            },
            comment: [
              {
                name: 'k董小妹',
                content: '撒都不想说了，自己看图吧，怎么可以这么好看，么么哒',
                date: '09.12',
              },
              {
                name: 'rmb6',
                content: '质量很好给5分，准备再买4块',
                date: '09.08',
              },
              {
                name: '伊***1',
                content: '宝贝收到了，质地好，做工精细，已经第二次购买了，颜色面料显高档，其中有一个买小了店家很快就答应给我换了一块大的，服务态度很棒！',
                date: '08.23',
              },
              {
                name: '芷***8',
                content: '一如既往的好',
                date: '08.20',
              },
              {
                name: 'i***p',
                content: '对比了很多家，刚开始买了一小片背巾来看效果，的确不错，最后订做了一整套，漂亮！',
                date: '08.17',
              },
              {
                name: '燕***5',
                content: '质感很好！',
                date: '08.07',
              },
              {
                name: '伊***1',
                content: '宝贝收到了，铺在沙发上非常上档次，亚麻面料质地好，颜色也很漂亮，非常喜欢哦！',
                date: '08.04',
              },
              {
                name: '7***y',
                content: '很好。多次买了。',
                date: '07.15',
              },
              {
                name: 'j***d',
                content: '第一次买这类东西，感觉不错。客服“纯”和前面的“多”都很好。我是老沙发翻新，上几张图。',
                date: '07.06',
              },
              {
                name: '阳***2',
                content: '挺满意的，物有所值，',
                date: '07.05',
              },
              {
                name: 'm***乐',
                content: '买垫子有点味道～～质感什么的还不错',
                date: '07.04',
              },
              {
                name: 'f***贝',
                content: '很好的宝贝已经是第二次购买了,感谢比尔的耐心很感动，尺寸非常合适已经铺上了',
                date: '07.04',
              },
              {
                name: '给***8',
                content: '好评，做工精细。',
                date: '06.24',
              },
              {
                name: 'h***j',
                content: '和我家颜色差不多。',
                date: '06.21',
              },
              {
                name: 'l***惠',
                content: '两次买的质量不一样 一个偏厚一个偏薄 刚买完没多久就便宜了 客服还是挺耐心挺好的',
                date: '06.20',
              },
              {
                name: 'l***8',
                content: '沙发垫确实还可以，防滑，柔软的。就是感觉放小了，洗后再缩水，就够呛。有点小贵！',
                date: '06.19',
              },
              {
                name: 'i***p',
                content: '买了几张，家人都说好',
                date: '06.14',
              },
            ],
          },
        },
        {
          goodsId: 1060501,
          name: 'CD-7814',
          title: '亚麻沙发垫棉麻布艺夏季简约现代四季通用灰纯色实木沙发巾套定制',
          price: '21',
          pic: 'CD-7814.jpg',
          pic_min: 'CD-7814-min.jpg',
          num_sale: 7814,
          detail: {
            goods: {
              property: {
                color: ['灰色'],
                suit: '组合沙发',
                material: '棉',
                size: ['70*70'],
                band: 'novatex',
                name: 'SFJ-3335',
                cat: '纯色',
                style: '现代中式'
              },
              pic: ['SFJ-3335-detail-0.jpg', 'SFJ-3335-detail-1.jpg', 'SFJ-3335-detail-2.jpg'],
            },
            comment: [
              {
                name: 'k董小妹',
                content: '撒都不想说了，自己看图吧，怎么可以这么好看，么么哒',
                date: '09.12',
              },
              {
                name: 'rmb6',
                content: '质量很好给5分，准备再买4块',
                date: '09.08',
              },
              {
                name: '伊***1',
                content: '宝贝收到了，质地好，做工精细，已经第二次购买了，颜色面料显高档，其中有一个买小了店家很快就答应给我换了一块大的，服务态度很棒！',
                date: '08.23',
              },
              {
                name: '芷***8',
                content: '一如既往的好',
                date: '08.20',
              },
              {
                name: 'i***p',
                content: '对比了很多家，刚开始买了一小片背巾来看效果，的确不错，最后订做了一整套，漂亮！',
                date: '08.17',
              },
              {
                name: '燕***5',
                content: '质感很好！',
                date: '08.07',
              },
              {
                name: '伊***1',
                content: '宝贝收到了，铺在沙发上非常上档次，亚麻面料质地好，颜色也很漂亮，非常喜欢哦！',
                date: '08.04',
              },
              {
                name: '7***y',
                content: '很好。多次买了。',
                date: '07.15',
              },
              {
                name: 'j***d',
                content: '第一次买这类东西，感觉不错。客服“纯”和前面的“多”都很好。我是老沙发翻新，上几张图。',
                date: '07.06',
              },
              {
                name: '阳***2',
                content: '挺满意的，物有所值，',
                date: '07.05',
              },
              {
                name: 'm***乐',
                content: '买垫子有点味道～～质感什么的还不错',
                date: '07.04',
              },
              {
                name: 'f***贝',
                content: '很好的宝贝已经是第二次购买了,感谢比尔的耐心很感动，尺寸非常合适已经铺上了',
                date: '07.04',
              },
              {
                name: '给***8',
                content: '好评，做工精细。',
                date: '06.24',
              },
              {
                name: 'h***j',
                content: '和我家颜色差不多。',
                date: '06.21',
              },
              {
                name: 'l***惠',
                content: '两次买的质量不一样 一个偏厚一个偏薄 刚买完没多久就便宜了 客服还是挺耐心挺好的',
                date: '06.20',
              },
              {
                name: 'l***8',
                content: '沙发垫确实还可以，防滑，柔软的。就是感觉放小了，洗后再缩水，就够呛。有点小贵！',
                date: '06.19',
              },
              {
                name: 'i***p',
                content: '买了几张，家人都说好',
                date: '06.14',
              },
            ],
          },
        },
        {
          goodsId: 1060601,
          name: 'CD-HD118',
          title: '亚麻沙发垫棉麻布艺夏季简约现代四季通用灰纯色实木沙发巾套定制',
          price: '18',
          pic: 'CD-HD118.jpg',
          pic_min: 'CD-HD118-min.jpg',
          num_sale: 118,
          detail: {
            goods: {
              property: {
                color: ['灰色'],
                suit: '组合沙发',
                material: '棉',
                size: ['70*70'],
                band: 'novatex',
                name: 'SFJ-3335',
                cat: '纯色',
                style: '现代中式'
              },
              pic: ['SFJ-3335-detail-0.jpg', 'SFJ-3335-detail-1.jpg', 'SFJ-3335-detail-2.jpg'],
            },
            comment: [
              {
                name: 'k董小妹',
                content: '撒都不想说了，自己看图吧，怎么可以这么好看，么么哒',
                date: '09.12',
              },
              {
                name: 'rmb6',
                content: '质量很好给5分，准备再买4块',
                date: '09.08',
              },
              {
                name: '伊***1',
                content: '宝贝收到了，质地好，做工精细，已经第二次购买了，颜色面料显高档，其中有一个买小了店家很快就答应给我换了一块大的，服务态度很棒！',
                date: '08.23',
              },
              {
                name: '芷***8',
                content: '一如既往的好',
                date: '08.20',
              },
              {
                name: 'i***p',
                content: '对比了很多家，刚开始买了一小片背巾来看效果，的确不错，最后订做了一整套，漂亮！',
                date: '08.17',
              },
              {
                name: '燕***5',
                content: '质感很好！',
                date: '08.07',
              },
              {
                name: '伊***1',
                content: '宝贝收到了，铺在沙发上非常上档次，亚麻面料质地好，颜色也很漂亮，非常喜欢哦！',
                date: '08.04',
              },
              {
                name: '7***y',
                content: '很好。多次买了。',
                date: '07.15',
              },
              {
                name: 'j***d',
                content: '第一次买这类东西，感觉不错。客服“纯”和前面的“多”都很好。我是老沙发翻新，上几张图。',
                date: '07.06',
              },
              {
                name: '阳***2',
                content: '挺满意的，物有所值，',
                date: '07.05',
              },
              {
                name: 'm***乐',
                content: '买垫子有点味道～～质感什么的还不错',
                date: '07.04',
              },
              {
                name: 'f***贝',
                content: '很好的宝贝已经是第二次购买了,感谢比尔的耐心很感动，尺寸非常合适已经铺上了',
                date: '07.04',
              },
              {
                name: '给***8',
                content: '好评，做工精细。',
                date: '06.24',
              },
              {
                name: 'h***j',
                content: '和我家颜色差不多。',
                date: '06.21',
              },
              {
                name: 'l***惠',
                content: '两次买的质量不一样 一个偏厚一个偏薄 刚买完没多久就便宜了 客服还是挺耐心挺好的',
                date: '06.20',
              },
              {
                name: 'l***8',
                content: '沙发垫确实还可以，防滑，柔软的。就是感觉放小了，洗后再缩水，就够呛。有点小贵！',
                date: '06.19',
              },
              {
                name: 'i***p',
                content: '买了几张，家人都说好',
                date: '06.14',
              },
            ],
          },
        },
        {
          goodsId: 1060701,
          name: 'CD-C3869',
          title: '亚麻沙发垫棉麻布艺夏季简约现代四季通用灰纯色实木沙发巾套定制',
          price: '9',
          pic: 'CD-C3869.jpg',
          pic_min: 'CD-C3869-min.jpg',
          num_sale: 3869,
          detail: {
            goods: {
              property: {
                color: ['灰色'],
                suit: '组合沙发',
                material: '棉',
                size: ['70*70'],
                band: 'novatex',
                name: 'SFJ-3335',
                cat: '纯色',
                style: '现代中式'
              },
              pic: ['SFJ-3335-detail-0.jpg', 'SFJ-3335-detail-1.jpg', 'SFJ-3335-detail-2.jpg'],
            },
            comment: [
              {
                name: 'k董小妹',
                content: '撒都不想说了，自己看图吧，怎么可以这么好看，么么哒',
                date: '09.12',
              },
              {
                name: 'rmb6',
                content: '质量很好给5分，准备再买4块',
                date: '09.08',
              },
              {
                name: '伊***1',
                content: '宝贝收到了，质地好，做工精细，已经第二次购买了，颜色面料显高档，其中有一个买小了店家很快就答应给我换了一块大的，服务态度很棒！',
                date: '08.23',
              },
              {
                name: '芷***8',
                content: '一如既往的好',
                date: '08.20',
              },
              {
                name: 'i***p',
                content: '对比了很多家，刚开始买了一小片背巾来看效果，的确不错，最后订做了一整套，漂亮！',
                date: '08.17',
              },
              {
                name: '燕***5',
                content: '质感很好！',
                date: '08.07',
              },
              {
                name: '伊***1',
                content: '宝贝收到了，铺在沙发上非常上档次，亚麻面料质地好，颜色也很漂亮，非常喜欢哦！',
                date: '08.04',
              },
              {
                name: '7***y',
                content: '很好。多次买了。',
                date: '07.15',
              },
              {
                name: 'j***d',
                content: '第一次买这类东西，感觉不错。客服“纯”和前面的“多”都很好。我是老沙发翻新，上几张图。',
                date: '07.06',
              },
              {
                name: '阳***2',
                content: '挺满意的，物有所值，',
                date: '07.05',
              },
              {
                name: 'm***乐',
                content: '买垫子有点味道～～质感什么的还不错',
                date: '07.04',
              },
              {
                name: 'f***贝',
                content: '很好的宝贝已经是第二次购买了,感谢比尔的耐心很感动，尺寸非常合适已经铺上了',
                date: '07.04',
              },
              {
                name: '给***8',
                content: '好评，做工精细。',
                date: '06.24',
              },
              {
                name: 'h***j',
                content: '和我家颜色差不多。',
                date: '06.21',
              },
              {
                name: 'l***惠',
                content: '两次买的质量不一样 一个偏厚一个偏薄 刚买完没多久就便宜了 客服还是挺耐心挺好的',
                date: '06.20',
              },
              {
                name: 'l***8',
                content: '沙发垫确实还可以，防滑，柔软的。就是感觉放小了，洗后再缩水，就够呛。有点小贵！',
                date: '06.19',
              },
              {
                name: 'i***p',
                content: '买了几张，家人都说好',
                date: '06.14',
              },
            ],
          },
        },
        {
          goodsId: 1060801,
          name: 'CD-CM601',
          title: '亚麻沙发垫棉麻布艺夏季简约现代四季通用灰纯色实木沙发巾套定制',
          price: '18',
          pic: 'CD-CM601.jpg',
          pic_min: 'CD-CM601-min.jpg',
          num_sale: 601,
          detail: {
            goods: {
              property: {
                color: ['灰色'],
                suit: '组合沙发',
                material: '棉',
                size: ['70*70'],
                band: 'novatex',
                name: 'SFJ-3335',
                cat: '纯色',
                style: '现代中式'
              },
              pic: ['SFJ-3335-detail-0.jpg', 'SFJ-3335-detail-1.jpg', 'SFJ-3335-detail-2.jpg'],
            },
            comment: [
              {
                name: 'k董小妹',
                content: '撒都不想说了，自己看图吧，怎么可以这么好看，么么哒',
                date: '09.12',
              },
              {
                name: 'rmb6',
                content: '质量很好给5分，准备再买4块',
                date: '09.08',
              },
              {
                name: '伊***1',
                content: '宝贝收到了，质地好，做工精细，已经第二次购买了，颜色面料显高档，其中有一个买小了店家很快就答应给我换了一块大的，服务态度很棒！',
                date: '08.23',
              },
              {
                name: '芷***8',
                content: '一如既往的好',
                date: '08.20',
              },
              {
                name: 'i***p',
                content: '对比了很多家，刚开始买了一小片背巾来看效果，的确不错，最后订做了一整套，漂亮！',
                date: '08.17',
              },
              {
                name: '燕***5',
                content: '质感很好！',
                date: '08.07',
              },
              {
                name: '伊***1',
                content: '宝贝收到了，铺在沙发上非常上档次，亚麻面料质地好，颜色也很漂亮，非常喜欢哦！',
                date: '08.04',
              },
              {
                name: '7***y',
                content: '很好。多次买了。',
                date: '07.15',
              },
              {
                name: 'j***d',
                content: '第一次买这类东西，感觉不错。客服“纯”和前面的“多”都很好。我是老沙发翻新，上几张图。',
                date: '07.06',
              },
              {
                name: '阳***2',
                content: '挺满意的，物有所值，',
                date: '07.05',
              },
              {
                name: 'm***乐',
                content: '买垫子有点味道～～质感什么的还不错',
                date: '07.04',
              },
              {
                name: 'f***贝',
                content: '很好的宝贝已经是第二次购买了,感谢比尔的耐心很感动，尺寸非常合适已经铺上了',
                date: '07.04',
              },
              {
                name: '给***8',
                content: '好评，做工精细。',
                date: '06.24',
              },
              {
                name: 'h***j',
                content: '和我家颜色差不多。',
                date: '06.21',
              },
              {
                name: 'l***惠',
                content: '两次买的质量不一样 一个偏厚一个偏薄 刚买完没多久就便宜了 客服还是挺耐心挺好的',
                date: '06.20',
              },
              {
                name: 'l***8',
                content: '沙发垫确实还可以，防滑，柔软的。就是感觉放小了，洗后再缩水，就够呛。有点小贵！',
                date: '06.19',
              },
              {
                name: 'i***p',
                content: '买了几张，家人都说好',
                date: '06.14',
              },
            ],
          },
        },
        {
          goodsId: 1070101,
          name: 'PD-L042',
          title: '亚麻沙发垫棉麻布艺夏季简约现代四季通用灰纯色实木沙发巾套定制',
          price: '124',
          pic: 'PD-L042.jpg',
          pic_min: 'PD-L042-min.jpg',
          num_sale: 42,
          detail: {
            goods: {
              property: {
                color: ['灰色'],
                suit: '组合沙发',
                material: '棉',
                size: ['70*70'],
                band: 'novatex',
                name: 'SFJ-3335',
                cat: '纯色',
                style: '现代中式'
              },
              pic: ['SFJ-3335-detail-0.jpg', 'SFJ-3335-detail-1.jpg', 'SFJ-3335-detail-2.jpg'],
            },
            comment: [
              {
                name: 'k董小妹',
                content: '撒都不想说了，自己看图吧，怎么可以这么好看，么么哒',
                date: '09.12',
              },
              {
                name: 'rmb6',
                content: '质量很好给5分，准备再买4块',
                date: '09.08',
              },
              {
                name: '伊***1',
                content: '宝贝收到了，质地好，做工精细，已经第二次购买了，颜色面料显高档，其中有一个买小了店家很快就答应给我换了一块大的，服务态度很棒！',
                date: '08.23',
              },
              {
                name: '芷***8',
                content: '一如既往的好',
                date: '08.20',
              },
              {
                name: 'i***p',
                content: '对比了很多家，刚开始买了一小片背巾来看效果，的确不错，最后订做了一整套，漂亮！',
                date: '08.17',
              },
              {
                name: '燕***5',
                content: '质感很好！',
                date: '08.07',
              },
              {
                name: '伊***1',
                content: '宝贝收到了，铺在沙发上非常上档次，亚麻面料质地好，颜色也很漂亮，非常喜欢哦！',
                date: '08.04',
              },
              {
                name: '7***y',
                content: '很好。多次买了。',
                date: '07.15',
              },
              {
                name: 'j***d',
                content: '第一次买这类东西，感觉不错。客服“纯”和前面的“多”都很好。我是老沙发翻新，上几张图。',
                date: '07.06',
              },
              {
                name: '阳***2',
                content: '挺满意的，物有所值，',
                date: '07.05',
              },
              {
                name: 'm***乐',
                content: '买垫子有点味道～～质感什么的还不错',
                date: '07.04',
              },
              {
                name: 'f***贝',
                content: '很好的宝贝已经是第二次购买了,感谢比尔的耐心很感动，尺寸非常合适已经铺上了',
                date: '07.04',
              },
              {
                name: '给***8',
                content: '好评，做工精细。',
                date: '06.24',
              },
              {
                name: 'h***j',
                content: '和我家颜色差不多。',
                date: '06.21',
              },
              {
                name: 'l***惠',
                content: '两次买的质量不一样 一个偏厚一个偏薄 刚买完没多久就便宜了 客服还是挺耐心挺好的',
                date: '06.20',
              },
              {
                name: 'l***8',
                content: '沙发垫确实还可以，防滑，柔软的。就是感觉放小了，洗后再缩水，就够呛。有点小贵！',
                date: '06.19',
              },
              {
                name: 'i***p',
                content: '买了几张，家人都说好',
                date: '06.14',
              },
            ],
          },
        },
        {
          goodsId: 1070201,
          name: 'PD-3385',
          title: '亚麻沙发垫棉麻布艺夏季简约现代四季通用灰纯色实木沙发巾套定制',
          price: '79',
          pic: 'PD-3385.jpg',
          pic_min: 'PD-3385-min.jpg',
          num_sale: 3385,
          detail: {
            goods: {
              property: {
                color: ['灰色'],
                suit: '组合沙发',
                material: '棉',
                size: ['70*70'],
                band: 'novatex',
                name: 'SFJ-3335',
                cat: '纯色',
                style: '现代中式'
              },
              pic: ['SFJ-3335-detail-0.jpg', 'SFJ-3335-detail-1.jpg', 'SFJ-3335-detail-2.jpg'],
            },
            comment: [
              {
                name: 'k董小妹',
                content: '撒都不想说了，自己看图吧，怎么可以这么好看，么么哒',
                date: '09.12',
              },
              {
                name: 'rmb6',
                content: '质量很好给5分，准备再买4块',
                date: '09.08',
              },
              {
                name: '伊***1',
                content: '宝贝收到了，质地好，做工精细，已经第二次购买了，颜色面料显高档，其中有一个买小了店家很快就答应给我换了一块大的，服务态度很棒！',
                date: '08.23',
              },
              {
                name: '芷***8',
                content: '一如既往的好',
                date: '08.20',
              },
              {
                name: 'i***p',
                content: '对比了很多家，刚开始买了一小片背巾来看效果，的确不错，最后订做了一整套，漂亮！',
                date: '08.17',
              },
              {
                name: '燕***5',
                content: '质感很好！',
                date: '08.07',
              },
              {
                name: '伊***1',
                content: '宝贝收到了，铺在沙发上非常上档次，亚麻面料质地好，颜色也很漂亮，非常喜欢哦！',
                date: '08.04',
              },
              {
                name: '7***y',
                content: '很好。多次买了。',
                date: '07.15',
              },
              {
                name: 'j***d',
                content: '第一次买这类东西，感觉不错。客服“纯”和前面的“多”都很好。我是老沙发翻新，上几张图。',
                date: '07.06',
              },
              {
                name: '阳***2',
                content: '挺满意的，物有所值，',
                date: '07.05',
              },
              {
                name: 'm***乐',
                content: '买垫子有点味道～～质感什么的还不错',
                date: '07.04',
              },
              {
                name: 'f***贝',
                content: '很好的宝贝已经是第二次购买了,感谢比尔的耐心很感动，尺寸非常合适已经铺上了',
                date: '07.04',
              },
              {
                name: '给***8',
                content: '好评，做工精细。',
                date: '06.24',
              },
              {
                name: 'h***j',
                content: '和我家颜色差不多。',
                date: '06.21',
              },
              {
                name: 'l***惠',
                content: '两次买的质量不一样 一个偏厚一个偏薄 刚买完没多久就便宜了 客服还是挺耐心挺好的',
                date: '06.20',
              },
              {
                name: 'l***8',
                content: '沙发垫确实还可以，防滑，柔软的。就是感觉放小了，洗后再缩水，就够呛。有点小贵！',
                date: '06.19',
              },
              {
                name: 'i***p',
                content: '买了几张，家人都说好',
                date: '06.14',
              },
            ],
          },
        },
        {
          goodsId: 1070301,
          name: 'PD-S024',
          title: '亚麻沙发垫棉麻布艺夏季简约现代四季通用灰纯色实木沙发巾套定制',
          price: '75',
          pic: 'PD-S024.jpg',
          pic_min: 'PD-S024-min.jpg',
          num_sale: 24,
          detail: {
            goods: {
              property: {
                color: ['灰色'],
                suit: '组合沙发',
                material: '棉',
                size: ['70*70'],
                band: 'novatex',
                name: 'SFJ-3335',
                cat: '纯色',
                style: '现代中式'
              },
              pic: ['SFJ-3335-detail-0.jpg', 'SFJ-3335-detail-1.jpg', 'SFJ-3335-detail-2.jpg'],
            },
            comment: [
              {
                name: 'k董小妹',
                content: '撒都不想说了，自己看图吧，怎么可以这么好看，么么哒',
                date: '09.12',
              },
              {
                name: 'rmb6',
                content: '质量很好给5分，准备再买4块',
                date: '09.08',
              },
              {
                name: '伊***1',
                content: '宝贝收到了，质地好，做工精细，已经第二次购买了，颜色面料显高档，其中有一个买小了店家很快就答应给我换了一块大的，服务态度很棒！',
                date: '08.23',
              },
              {
                name: '芷***8',
                content: '一如既往的好',
                date: '08.20',
              },
              {
                name: 'i***p',
                content: '对比了很多家，刚开始买了一小片背巾来看效果，的确不错，最后订做了一整套，漂亮！',
                date: '08.17',
              },
              {
                name: '燕***5',
                content: '质感很好！',
                date: '08.07',
              },
              {
                name: '伊***1',
                content: '宝贝收到了，铺在沙发上非常上档次，亚麻面料质地好，颜色也很漂亮，非常喜欢哦！',
                date: '08.04',
              },
              {
                name: '7***y',
                content: '很好。多次买了。',
                date: '07.15',
              },
              {
                name: 'j***d',
                content: '第一次买这类东西，感觉不错。客服“纯”和前面的“多”都很好。我是老沙发翻新，上几张图。',
                date: '07.06',
              },
              {
                name: '阳***2',
                content: '挺满意的，物有所值，',
                date: '07.05',
              },
              {
                name: 'm***乐',
                content: '买垫子有点味道～～质感什么的还不错',
                date: '07.04',
              },
              {
                name: 'f***贝',
                content: '很好的宝贝已经是第二次购买了,感谢比尔的耐心很感动，尺寸非常合适已经铺上了',
                date: '07.04',
              },
              {
                name: '给***8',
                content: '好评，做工精细。',
                date: '06.24',
              },
              {
                name: 'h***j',
                content: '和我家颜色差不多。',
                date: '06.21',
              },
              {
                name: 'l***惠',
                content: '两次买的质量不一样 一个偏厚一个偏薄 刚买完没多久就便宜了 客服还是挺耐心挺好的',
                date: '06.20',
              },
              {
                name: 'l***8',
                content: '沙发垫确实还可以，防滑，柔软的。就是感觉放小了，洗后再缩水，就够呛。有点小贵！',
                date: '06.19',
              },
              {
                name: 'i***p',
                content: '买了几张，家人都说好',
                date: '06.14',
              },
            ],
          },
        },
        {
          goodsId: 1070401,
          name: 'PD-XH007',
          title: '亚麻沙发垫棉麻布艺夏季简约现代四季通用灰纯色实木沙发巾套定制',
          price: '114',
          pic: 'PD-XH007.jpg',
          pic_min: 'PD-XH007-min.jpg',
          num_sale: 7,
          detail: {
            goods: {
              property: {
                color: ['灰色'],
                suit: '组合沙发',
                material: '棉',
                size: ['70*70'],
                band: 'novatex',
                name: 'SFJ-3335',
                cat: '纯色',
                style: '现代中式'
              },
              pic: ['SFJ-3335-detail-0.jpg', 'SFJ-3335-detail-1.jpg', 'SFJ-3335-detail-2.jpg'],
            },
            comment: [
              {
                name: 'k董小妹',
                content: '撒都不想说了，自己看图吧，怎么可以这么好看，么么哒',
                date: '09.12',
              },
              {
                name: 'rmb6',
                content: '质量很好给5分，准备再买4块',
                date: '09.08',
              },
              {
                name: '伊***1',
                content: '宝贝收到了，质地好，做工精细，已经第二次购买了，颜色面料显高档，其中有一个买小了店家很快就答应给我换了一块大的，服务态度很棒！',
                date: '08.23',
              },
              {
                name: '芷***8',
                content: '一如既往的好',
                date: '08.20',
              },
              {
                name: 'i***p',
                content: '对比了很多家，刚开始买了一小片背巾来看效果，的确不错，最后订做了一整套，漂亮！',
                date: '08.17',
              },
              {
                name: '燕***5',
                content: '质感很好！',
                date: '08.07',
              },
              {
                name: '伊***1',
                content: '宝贝收到了，铺在沙发上非常上档次，亚麻面料质地好，颜色也很漂亮，非常喜欢哦！',
                date: '08.04',
              },
              {
                name: '7***y',
                content: '很好。多次买了。',
                date: '07.15',
              },
              {
                name: 'j***d',
                content: '第一次买这类东西，感觉不错。客服“纯”和前面的“多”都很好。我是老沙发翻新，上几张图。',
                date: '07.06',
              },
              {
                name: '阳***2',
                content: '挺满意的，物有所值，',
                date: '07.05',
              },
              {
                name: 'm***乐',
                content: '买垫子有点味道～～质感什么的还不错',
                date: '07.04',
              },
              {
                name: 'f***贝',
                content: '很好的宝贝已经是第二次购买了,感谢比尔的耐心很感动，尺寸非常合适已经铺上了',
                date: '07.04',
              },
              {
                name: '给***8',
                content: '好评，做工精细。',
                date: '06.24',
              },
              {
                name: 'h***j',
                content: '和我家颜色差不多。',
                date: '06.21',
              },
              {
                name: 'l***惠',
                content: '两次买的质量不一样 一个偏厚一个偏薄 刚买完没多久就便宜了 客服还是挺耐心挺好的',
                date: '06.20',
              },
              {
                name: 'l***8',
                content: '沙发垫确实还可以，防滑，柔软的。就是感觉放小了，洗后再缩水，就够呛。有点小贵！',
                date: '06.19',
              },
              {
                name: 'i***p',
                content: '买了几张，家人都说好',
                date: '06.14',
              },
            ],
          },
        }
      ],
      dataUser: [
        {
          userId: 1,
          email: 'momo0@gmail.com',
          password: '15280807171',
          isLogin: false,
          carts: [
            {goodsId: 1010101, name: 'SFJ-3335', price: '166', pic_min: '../SFJ-3335-min.jpg', num: 1},
            {goodsId: 1010201, name: 'SFJ-4200', price: '114', pic_min: '../SFJ-4200-min.jpg', num: 2},
            {goodsId: 1070401, name: 'PD-XH007', price: '114', pic_min: '../PD-XH007-min.jpg', num: 2}

          ],
          orders: [
            {goodsId: 1040101, name: 'ZQ-L2024', price: '137', pic_min: '../ZQ-L2024-min.jpg', num: 1, serial_num: '1708192022115941', date: [2017,8,19,19,50,49]},
            {goodsId: 1030401, name: 'ZB-C2868', price: '56', pic_min: '../ZB-C2868-min.jpg', num: 2, serial_num: '1708192022113704', date: [2017,8,19,19,50,49]},
            {goodsId: 1021001, name: 'BZ-K049', price: '53', pic_min: '../BZ-K049-min.jpg', num: 2, serial_num: '1708192022112776', date: [2017,8,19,19,50,49]},
            {goodsId: 1011101, name: 'SFJ-1201', price: '72', pic_min: '../SFJ-1201-min.jpg', num: 1, serial_num: '1708192022110241', date: [2017,8,19,19,50,49]},
            {goodsId: 1060101, name: 'CD-L2024', price: '27', pic_min: '../CD-L2024-min.jpg', num: 1, serial_num: '1708192022110241', date: [2017,8,19,19,50,49]},
            {goodsId: 1060201, name: 'CD-3335', price: '22', pic_min: '../CD-3335-min.jpg', num: 1, serial_num: '1708192022110241', date: [2017,8,19,19,50,49]},
            {goodsId: 1060301, name: 'CD-HD078小绣花', price: '19', pic_min: '../CD-HD078xiuhua-min.jpg', num: 1, serial_num: '1708192022110241', date: [2017,8,19,19,50,49]},
            {goodsId: 1060401, name: 'CD-52838', price: '27', pic_min: '../CD-52838-min.jpg', num: 1, serial_num: '1708192022110241', date: [2017,8,19,19,50,49]},
            {goodsId: 1060501, name: 'CD-7814', price: '21', pic_min: '../CD-7814-min.jpg', num: 1, serial_num: '1708192022110241', date: [2017,8,19,19,50,49]},
            {goodsId: 1060601, name: 'CD-HD118', price: '18', pic_min: '../CD-HD118-min.jpg', num: 1, serial_num: '1708192022110241', date: [2017,8,19,19,50,49]},
            {goodsId: 1060701, name: 'CD-C3869', price: '9', pic_min: '../CD-C3869-min.jpg', num: 1, serial_num: '1708192022110241', date: [2017,8,19,19,50,49]},
          ]
        }
      ],
      dataUserLogined: {
        userId: null,
        email: ' ',
        password: ' ',
        isLogin: false,
        carts: [],
        orders: [],
      },
      dataGoodsDetail: {
        goodsId: 1010101,
        name: 'SFJ-3335',
        title: '沙发垫田园生活布艺夏纯色绿色客厅简约现代组合套装四季沙发巾套',
        price: '166',
        pic: 'SFJ-3335.jpg',
        pic_min: 'SFJ-3335-min.jpg',
        num_sale: 0,
        detail: {
          goods: {
            property: {
              color: ['灰色'],
              suit: '组合沙发',
              material: '其他',
              size: ['70*70'],
              band: 'novatex',
              name: 'SFJ-3335',
              cat: '纯色',
              style: '简约现代'
            },
            pic: ['SFJ-4200-detail-0.jpg', 'SFJ-4200-detail-1.jpg', 'SFJ-4200-detail-2.jpg'],
          },
          comment: [
            {
              name: 'c灰姑凉',
              content: '真的很不错，即将搬新房子还是会来买的！',
              date: '09.16',
            }
          ],
        }
      }
    };
  };

  moreNavToggle = (ev) => {
    let {isMoreNav} = this.state;
    if (ev.target.className === 'cart' || ev.target.id === 'cart-dot') {
      isMoreNav = !isMoreNav;
    } else {
      isMoreNav = false;
    }
    this.setState({
      isMoreNav,
    });
  };

  userRegister = (dataUserNew) => {
    const {dataUser} = this.state;
    dataUser.unshift(dataUserNew);
    this.setState({
      dataUser,
    });
  };

  userLogin = (dataUserLogined) => {
    let {dataUser} = this.state;
    dataUserLogined.isLogin = true;
    this.setState({
      dataUser,
      dataUserLogined,
    });
  };

  userLogToggle = (dataUserLogined) => {
    if (dataUserLogined.isLogin) {
      setTimeout(() => {
        this.setState({
          dataUserLogined: {
            userId: null,
            email: ' ',
            password: ' ',
            isLogin: false,
            carts: [],
            orders: [],
          },
        });
      } ,10);
    }
  };

  cartAdd = (ev, goodsId, num) => {
    let {dataGoods, dataUser, dataUserLogined} = this.state;

    // const goodsId = Number(ev.target.parentNode.childNodes[0].innerText);
    let sData = [];
    let isInclude = false;
    dataGoods.forEach(e => {
      if (e.goodsId === goodsId) {
        sData = JSON.parse(JSON.stringify(e));
      }
    });
    //如果已有同种商品
    dataUserLogined.carts.forEach(e => {
      if (e.goodsId === sData.goodsId) {
        e.num += num;
        isInclude = true;
      }
    });
    //如果没有同种商品
    if (!isInclude) {
      sData.num = num;
      dataUserLogined.carts.unshift(sData);
    }

    //动画添加购物袋
    {
      const {target} = ev;
      const targetNext = target.nextElementSibling;
      targetNext.onOff = true;
      clearTimeout(targetNext.timer0);
      clearTimeout(targetNext.timer1);
      clearTimeout(targetNext.timer2);

      targetNext.style.display = 'block';
      setTimeout(() => {
        targetNext.style.opacity = 1;
        targetNext.style.transform = `rotateY(360deg)`;
      }, 0);

      targetNext.timer0 = setTimeout(function () {
        targetNext.onOff = false;
      }, 1990);
      targetNext.timer1 = setTimeout(() => {
        if (!targetNext.onOff) {
          targetNext.style.opacity = 0;
          targetNext.style.transform = '';
        }
      }, 2000);
      targetNext.timer2 = setTimeout(() => {
        if (!targetNext.onOff) {
          targetNext.style.display = '';
        }
      }, 4000);
    }

    this.setState({
      dataUser,
      dataUserLogined,
    });
  };

  cartNumChange = (goodsId, newVal) => {
    let {dataUser , dataUserLogined} = this.state;
    let {carts} = dataUserLogined;
    for (let value of carts) {
      if (value.goodsId === goodsId) {
        value.num = newVal;
        break;
      }
    }
    this.setState({
      dataUser,
      dataUserLogined,
    });
  };

  cartLineDel = (goodsId) => {
    let {dataUser , dataUserLogined} = this.state;
    let {carts} = dataUserLogined;
    for (let [key, value] of carts.entries()) {
      if (value.goodsId === goodsId) {
        carts.splice(key, 1);
        break;
      }
    }
    this.setState({
      dataUser,
      dataUserLogined,
    });
  };

  orderAdd = () => {
    const {dataGoods, dataUser ,dataUserLogined} = this.state;
    const {carts, orders} = dataUserLogined;
    const {getDate, getSerialNum} = this;
    carts.reverse();
    carts.forEach((cart) => {
      const {goodsId, num} = cart;
      for (let goods of dataGoods) {
        if (goods.goodsId === goodsId) {
          goods.num_sale += num;
          break;
        }
      }

      cart.date = getDate();
      cart.serial_num = getSerialNum(cart.date);
      orders.unshift(cart);
    });
    //clear
    carts.splice(0,carts.length);
    this.setState({
      dataGoods,
      dataUser,
      dataUserLogined,
    });
  };

  //获取时间
  getDate = () => {
    const {addZero} = this;
    let formDate = [];
    const time = new Date();
    formDate.push(time.getFullYear());
    formDate.push(time.getMonth() + 1);
    formDate.push(time.getDate());
    formDate.push(time.getHours());
    formDate.push(time.getMinutes());
    formDate.push(time.getSeconds());
    formDate.forEach((e, i) => {
      formDate[i] = addZero(e);
    });
    return formDate;
  };

  //补零
  addZero = (e) => {
    let tmp = e;
    if (tmp < 10) {
      tmp = `0` + tmp;
    }
    return tmp;
  };

  //获取订单号
  getSerialNum = (date) => {
    let str = '';
    let str0 = '' + Math.trunc(8999 * Math.random() + 1000);
    date.forEach(e => {
      str += ('' + e);
    });
    str = str.slice(2);
    return str + str0;
  };

  goodsDetailSelect = (goodsId) => {
    let {dataGoods, dataGoodsDetail} = this.state;
    for (let e of dataGoods) {
      if (e.goodsId === goodsId) {
        dataGoodsDetail = e;
        break;
      }
    }
    this.setState({
      dataGoodsDetail
    });
  };

  render() {
    const {
      isMoreNav,
      dataGoods,
      dataUser,
      dataUserLogined,
      dataGoodsDetail,
    } = this.state;
    const {
      moreNavToggle,
      userRegister,
      userLogin,
      userLogToggle,
      cartAdd,
      cartNumChange,
      cartLineDel,
      orderAdd,
      goodsDetailSelect,
    } = this;

    return (
      <div>
        <TimeLime />
        <BackTop />
        <Header
          isMoreNav={isMoreNav}
          dataUserLogined={dataUserLogined}
          moreNavToggle={moreNavToggle}
          userLogToggle={userLogToggle}
        />
        <Route path="/login" render={({history}) => {
          if (dataUserLogined.isLogin) {
            history.push('/');
          }
          return (
            <RegisterLogin
              dataUser={dataUser}
              userRegister={userRegister}
              userLogin={userLogin}
              dataUserLogined={dataUserLogined}
            />);
        }} />
        <Route exact path="/" render={() => {
          return (
            <Goods
              dataGoods={dataGoods}
              carts={dataUserLogined.carts}
              moreNavToggle={moreNavToggle}
              cartAdd={cartAdd}
              goodsDetailSelect={goodsDetailSelect}
            />);
        }}
        />
        <Route path="/cart" render={({history}) => {
          if (!dataUserLogined.isLogin) {
            history.push('/login');
          }
          return (
            <Cart
              carts={dataUserLogined.carts}
              moreNavToggle={moreNavToggle}
              cartNumChange={cartNumChange}
              cartLineDel={cartLineDel}
              orderAdd={orderAdd}
            />);
        }}
        />
        <Route path="/order" render={({history}) => {
          if (!dataUserLogined.isLogin) {
            history.push('/login');
          }
          return (
            <Order
              orders={dataUserLogined.orders}
              moreNavToggle={moreNavToggle}
            />);
        }}
        />

        <Route path="/detail" render={({history}) => {
          return (
            <Detail
              dataGoodsDetail={dataGoodsDetail}
              carts={dataUserLogined.carts}
              cartAdd={cartAdd}
            />);
        }}
        />

        <Footer moreNavToggle={moreNavToggle} />
      </div>
    )
  }
}

ReactDOM.render(
  <Router>
    <Route path="/" component={App} />
  </Router>,
  document.getElementById('root'),
);
