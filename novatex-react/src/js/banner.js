import React, {Component} from 'react';

class Banner extends Component {
  constructor() {
    super();
    this.state = {
      // dataBanner: ['banner0', 'banner1', 'banner2', 'banner3'],
      pic: ['banner-0.jpg', 'banner-1.jpg', 'banner-2.jpg', 'banner-3.jpg'],
      src: {
        src0: 0,
        src1: 1,
      },
      position: {
        left0: 0,
        left1: 84,
      },
      // cName: 'autoWidth banner banner0',
    };
  }

  componentDidMount = () => {
    const {bannerAutoPlay} = this;
    this.timeOut = setTimeout(() => {
      bannerAutoPlay();
    }, 4000);
  };

  componentWillUnmount = () => {
    // clearInterval(this.timer0);
    clearInterval(this.timeOut);
    clearInterval(this.timer);
  };

  bannerAutoPlay = () => {
    let {
      pic,
      src,
      position,
      // dataBanner,
      // cName,
    } = this.state;
    // let {src0, src1} = src;
    // let {left0, left1} = position;
    const len = pic.length;
    // let n = 0;
    // this.timer0 = setInterval(() => {
    //   pic0 = ++pic0 % pic.length;
    //   pic1 = ++pic1 % pic.length;
    //   // cName = 'autoWidth banner';
    //   cName += ` ${dataBanner[++n % dataBanner.length]}`;
    //   this.setState({
    //     pic0,
    //     pic1,
    //     cName,
    //   });
    // }, 4200);
    this.timer = setInterval(() => {
      position.left0 -= .12;
      position.left1 -= .12;
      if (position.left0 <= -84) {
        src.src0 = (src.src0 + 2) % len;
        position.left0 = 84;
      }
      if (position.left1 <= -84) {
        src.src1 = (src.src1 + 2) % len;
        position.left1 = 84;
      }
      this.setState({
        src,
        position,
      });
    }, 10);
  };

  render() {
    const {
      pic,
      src,
      position,
    } = this.state;
    // let {src0, src1} = src;
    // let {left0, left1} = position;
    // console.log(this.state.position);
    return (
      <div
        className="autoWidth banner"
        style={{position: 'relative'}}
      >
        <img
          src={require(`../img/${pic[src.src0]}`)}
          alt=""
          style={{position: 'absolute', left: position.left0 + 'vw'}}
        />
        <img
          src={require(`../img/${pic[src.src1]}`)}
          alt=""
          style={{position: 'absolute', left: position.left1 + 'vw'}}
        />
      </div>
    );
  }
}

export {Banner};