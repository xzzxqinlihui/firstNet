import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: true
    };
  }

  render() {
    console.log(this.props);
    return (
      <div className="about">
        <input
          onClick={() => this.setState({ isLogin: false })}
          type="button"
          className="button is-primary"
          value="<<返回首页"
        />
        {!this.state.isLogin && <Redirect to="/" />}
        <div className="person">
          <div className="person-btn">指向到这</div>
          {/* <!-- 到个人信息网站的的几个地址 --> */}
          <a
            href="https://github.com/xzzxqinlihui"
            className="person-address person-address-1"
            target="blank"
          >
            github
          </a>
          <a
            href="https://cnblogs.com/NightTiger/"
            className="person-address person-address-2"
            target="blank"
          >
            个人博客
          </a>
          <a
            href="http://www.baidu.com"
            className="person-address person-address-3"
            target="blank"
          >
            个人信息
          </a>
          <a
            href="https://github.com/xzzxqinlihui"
            className="person-address person-address-4"
            target="blank"
          >
            github
          </a>
          <a
            href="https://cnblogs.com/NightTiger/"
            className="person-address person-address-5"
            target="blank"
          >
            个人博客
          </a>
          <a
            href="http://www.baidu.com"
            className="person-address person-address-6"
            target="blank"
          >
            个人信息
          </a>
        </div>
      </div>
    );
  }
}

export default About;
