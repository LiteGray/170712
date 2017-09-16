import React, {Component} from 'react';

class Banner extends Component {
  constructor() {
    super();
    this.state = {
      dataBanner: ['banner0', 'banner1', 'banner2', 'banner3'],
      cName: 'autoWidth banner banner0',
    };
  }

  componentDidMount = () => {
    this.bannerAutoPlay();
  };

  componentWillUnmount = () => {
    clearInterval(this.timer);
  };

  bannerAutoPlay = () => {
    let {dataBanner, cName} = this.state;
    let n = 0;
    this.timer = setInterval(() => {
      cName = 'autoWidth banner';
      cName += ` ${dataBanner[++n % dataBanner.length]}`;
      this.setState({
        cName,
      });
    }, 6000);
  };

  render() {
    const {cName} = this.state;
    return <div className={cName}>{''}</div>
  }
}

export {Banner};