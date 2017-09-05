import React, {Component} from 'react';
import '../css/register-login.css';

class RegisterLogin extends Component {
  uiToggle = (a, b) => {
    a.style.transform = "translateX(-50%) translateY(-50%) rotateY(90deg)";
    b.style.display = 'block';
    b.style.transform = "translateX(-50%) translateY(-50%) rotateY(-90deg)";
    setTimeout(() => {
      b.style.transform = "translateX(-50%) translateY(-50%) rotateY(0deg)";
      a.style.display = 'none';
    }, 1000);
  };

  registerToLogin = (ev) => {
    const {target} = ev;
    this.uiToggle(target.parentNode, target.parentNode.nextElementSibling);
  };

  loginToRegister = (ev) => {
    const {target} = ev;
    this.uiToggle(target.parentNode, target.parentNode.previousElementSibling);
  };

  register = (ev) => {
    const {dataUser, userRegister} = this.props;
    const {target} = ev;
    const email = target.previousElementSibling.previousElementSibling.value;
    const password = target.previousElementSibling.value;
    if (email && password && !dataUser.some(e => email === e.email)) {
      const dataUserNew = {
        userId: +new Date(),
        email: email,
        password: password,
        isLogin: false,
        carts: [],
        orders: []
      };
      userRegister(dataUserNew);
      // dataUser.unshift(sData);
      // localStorage.setItem('dataUser', JSON.stringify(dataUser));
      this.uiToggle(target.parentNode, target.parentNode.nextElementSibling);
    }
  };

  login = (ev) => {
    const {dataUser, userLogin} = this.props;
    const {target} = ev;
    const email = target.previousElementSibling.previousElementSibling.value;
    const password = target.previousElementSibling.value;
    for (let e of dataUser) {
      if (e.email === email && e.password === password) {
        target.parentNode.style.display = 'none';
        // account.innerText = '退出';
        userLogin(e);
        // e.isLogin = true;
        // dataNow = e;
        // //取登录用户数据
        // dataNowOriginSync = e;
        // isCart(dataNow.carts);
        // localStorage.setItem('dataNow', JSON.stringify(dataNow));
        // //避免dataNow指向原始数据
        // dataNow = JSON.parse(localStorage.getItem('dataNow'));
        // localStorage.setItem('dataUser', JSON.stringify(dataUser));
        break;
      }
    }
  };

  render() {
    return (
      <div>
        <div
          ref={(ele) => this.Eregister = ele}
          className="register"
          style={{display: 'block'}}
        >
          <i>+</i>
          <b onClick={this.registerToLogin}>or 登录</b>
          <input type="text" placeholder="邮箱" />
          <input type="password" placeholder="密码" />
          <a
            className="get-btn register-sure"
            onClick={this.register}
          >注册</a>
        </div>
        <div
          ref={(ele) => this.Elogin = ele}
          className="login register"
        >
          <i>+</i>
          <b onClick={this.loginToRegister}>else 注册</b>
          <input type="text" placeholder="邮箱" />
          <input type="password" placeholder="密码" />
          <a
            className="get-btn login-sure"
            onClick={this.login}
          >登录</a>
        </div>
      </div>
    )
  }
}

export {RegisterLogin};