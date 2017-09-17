import React, {Component} from 'react';
import '../css/register-login.css';

class RegisterLogin extends Component {
  constructor() {
    super();
    this.state = {
      email: {
        isLegal: true,
        value: '',
      },
      password: {
        isLegal: true,
        value: '',
      }
    };
  }

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

  emailChange = (ev) => {
    let {email} = this.state;
    email.value = ev.target.value;
    this.setState({
      email,
    }, this.emailIsLegal(ev));
  };

  passwordChange = (ev) => {
    let {password} = this.state;
    password.value = ev.target.value;
    this.setState({
      password,
    }, this.passwordIsLegal(ev));
  };

  emailIsLegal = (ev) => {
    if (ev.target.nextElementSibling.nextElementSibling.innerText.includes('登录')) return;
    const {email} = this.state;
    email.isLegal = (/^[A-Za-z][\w]{2,10}@([0-9A-Za-z]{3,5}\.){1,3}[a-z]{1,3}$/.test(email.value)) ? true : false;
    this.setState({
      email,
    });
  };

  passwordIsLegal = (ev) => {
    if (ev.target.nextElementSibling.innerText.includes('登录')) return;
    const {password} = this.state;
    password.isLegal = (password.value.length >= 6) ? true : false;
    this.setState({
      password,
    });
  };

  register = (ev) => {
    const {dataUser, userRegister} = this.props;
    const {target} = ev;

    const {email, password} = this.state;

    // const email = target.previousElementSibling.previousElementSibling.value;
    // const password = target.previousElementSibling.value;
    if (email.isLegal && password.isLegal && !dataUser.some(e => email.value === e.email)) {
      const dataUserNew = {
        userId: +new Date(),
        email: email.value,
        password: password.value,
        isLogin: false,
        carts: [],
        orders: []
      };
      userRegister(dataUserNew);
      this.uiToggle(target.parentNode, target.parentNode.nextElementSibling);
    }
  };

  login = (ev) => {
    const {dataUserLogined, dataUser, userLogin} = this.props;
    const {carts} = dataUserLogined;
    const {target} = ev;

    const {email, password} = this.state;

    // const email = target.previousElementSibling.previousElementSibling.value;
    // const password = target.previousElementSibling.value;
    for (let e of dataUser) {
      if (e.email === email.value && e.password === password.value) {
        target.parentNode.style.display = 'none';
        e.carts = carts;
        userLogin(e);
        break;
      }
    }
  };

  boxDisappear = (ev) => {
    ev.target.parentNode.style.display = 'none';
  };

  render() {
    const {email, password} = this.state;
    const {
      emailChange,
      passwordChange,
      emailIsLegal,
      passwordIsLegal,
    } = this;

    return (
      <div>
        <div id="fill-window"> </div>
        <div
          // ref={(ele) => this.Eregister = ele}
          className="register"
        >
          <i onClick={this.boxDisappear}>+</i>
          <b onClick={this.registerToLogin}>or 登录</b>
          <input
            type="text"
            placeholder="邮箱"
            style={{borderBottom: email.isLegal ? '' : '2px solid rgba(255,0,0,.6)'}}
            onChange={emailChange}
            onBlur={emailIsLegal}
          />
          <input
            type="password"
            placeholder="密码"
            style={{borderBottom: password.isLegal ? '' : '2px solid rgba(255,0,0,.6)'}}
            onChange={passwordChange}
            onBlur={passwordIsLegal}
          />
          <a
            className="get-btn register-sure"
            style={{opacity: email.isLegal && password.isLegal ? 1 : .6,}}
            onClick={this.register}
          >
            注册
          </a>
        </div>
        <div
          // ref={(ele) => this.Elogin = ele}
          className="login register"
          style={{display: 'block'}}
        >
          <i onClick={this.boxDisappear}>+</i>
          <b onClick={this.loginToRegister}>else 注册</b>
          <input
            type="text"
            placeholder="邮箱"
            onChange={emailChange}
          />
          <input
            type="password"
            placeholder="密码"
            onChange={passwordChange}
          />
          <a
            className="get-btn login-sure"
            onClick={this.login}
          >
            登录
          </a>
        </div>
      </div>
    )
  }
}

export {RegisterLogin};