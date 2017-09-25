import React, { Component } from 'react';

class BackTop extends Component {
  constructor() {
    super();
    this.state = {
      isShowBackTop: false,
    };
    this.backTopToggle();
  }

  backTopToggle = () => {
    let {isShowBackTop} = this.state;
    window.addEventListener('scroll', () => {
      isShowBackTop = document.documentElement.scrollTop > window.innerHeight * 1.4;
      // isShowBackTop = document.documentElement.scrollTop > window.innerHeight * 1.4 ? true : false;
      this.setState({
        isShowBackTop,
      });
    });
  };

  click = (ev) => {
    ev.preventDefault();
    this.timer = setInterval(() => {
      let scrTop = document.documentElement.scrollTop || document.body.scrollTop;
      document.documentElement.scrollTop = document.body.scrollTop = scrTop = scrTop - 200;
      if (scrTop <= 0) {
        clearInterval(this.timer);
      }
    }, 20);
  };

  render() {
    const {isShowBackTop} = this.state;
    const {click} = this;
    return (
      <a
        href=""
        id="back-top"
        style={{display: isShowBackTop ? 'block' : ''}}
        onClick={click}
      >
        {''}
      </a>
    )
  }
}

export {BackTop};