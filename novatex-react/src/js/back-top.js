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
      isShowBackTop = document.documentElement.scrollTop > window.innerHeight * 1.4 ? true : false;
      this.setState({
        isShowBackTop,
      });
    });
  };

  render() {
    const {isShowBackTop} = this.state;
    return (<a href="" id="back-top" style={{display: isShowBackTop ? 'block' : ''}}>{''}</a>)
  }
}

export {BackTop};