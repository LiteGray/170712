import React, {Component} from 'react';
import '../css/register-login.css';

class RegisterLogin extends Component {
  render() {
    return (
      <div>
        <div className="register" style={{display: 'block'}}>
          <i>+</i>
          <b>or&nbsp;登录</b>
          <input type="text" placeholder="邮箱" />
          <input type="password" placeholder="密码" />
          <a className="get-btn register-sure">注册</a>
        </div>
        <div className="login register">
          <i>+</i>
          <b>else&nbsp;注册</b>
          <input type="text" placeholder="邮箱" />
          <input type="password" placeholder="密码" />
          <a className="get-btn login-sure">登录</a>
        </div>
      </div>
    )
  }
}

export {RegisterLogin};