import React, { Component } from 'react';
import { Prompt, Link, Route, Switch } from 'react-router-dom';
import Logo from '../assets/logo.svg';
//在头文件中引入 这里就可以不用引入了
// import "../sass/Home.scss";
// import "../index.scss";
import About from './About.js';
import Product from './Product.js';
import Count from './Count.js';
import store from '../store';
import UserList from './UserList.js';
import Foot from './Foot.js';
import Accordion from './Accordion.js';
import Lunbotu from './Lunbotu.js';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Num: store.getState().Num
    };

    store.subscribe(() => {
      this.setState({
        Num: store.getState().Num
      });
    });
  }

  logout = () => {
    //  清除 sessionStorage里面的用户登录的信息
    sessionStorage.clear();
    this.props.history.push('/login');
  };
  render() {
    let { match } = this.props;
    return (
      <div className="Home">
        <header className="header">
          <div className="header-up">
            <div className="header-left">
              <div>学前端更容易</div>
              <div>LANGUAGE</div>
            </div>
            <div className="header-right">
              <ul>
                <li>
                  <a href="http://www.baidu.com">您好,请登录</a>
                </li>
                |<li>消息</li>|<li>我的学习</li>|<li>我的课程</li>|
                <li>客服中心</li>|<li>微信手机</li>
              </ul>
            </div>
          </div>
          <div className="header-down">
            <nav className="navbar-a">
              <div className="navbar-b">
                <Link to="/app">
                  <img src={Logo} alt="官网图片" title="秦立辉个人网站" />
                </Link>
              </div>
              <div className="navbar-m">
                <div className="navbar-s">
                  <ul>
                    <li>
                      <Link className="navbar-i" to="/app">
                        首页
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-i" to={`${match.path}/product`}>
                        产品
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-i" to={`${match.path}/cases`}>
                        成功案例
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-i" to={`${match.path}/about`}>
                        关于我
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-i" to={`${match.path}/userlist`}>
                        用户管理列表
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="navbar-e">
                  <button onClick={this.logout} className="button is-danger">
                    退出
                  </button>
                </div>
              </div>
            </nav>
          </div>
        </header>
        <main className="main">
          <aside className="aside" />
          <div className="content">
            <section className="section first">
              <nav className="nav main-left menu-list column is-one-fifth has-background-success">
                <br />
                <Link className="navbar-item" to="/app">
                  首页
                </Link>
                <br />
                <Link className="navbar-item" to={`${match.path}/product`}>
                  产品
                </Link>
                <br />
                <Link className="navbar-item" to={`${match.path}/count`}>
                  COUNT
                </Link>
                <br />
                <Link className="navbar-item" to={`${match.path}/cases`}>
                  成功案例
                </Link>
                <br />
                <Link className="navbar-item" to={`${match.path}/about`}>
                  关于我
                </Link>
                <br />

                <Link className="navbar-item" to={`${match.path}/userlist`}>
                  用户管理列表
                </Link>
                <br />
              </nav>
              <div className="show main-right column has-background-info">
                <Switch>
                  <Route path={`${match.path}/about`} component={About} />
                  <Route path={`${match.path}/product`} component={Product} />
                  <Route path={`${match.path}/count`} component={Count} />
                  <Route path={`${match.path}/userlist`} component={UserList} />
                  <Route
                    render={() => {
                      return (
                        <div className="title">
                          <h6>欢迎您访问网站</h6>
                          <Lunbotu className="slide" />
                        </div>
                      );
                    }}
                  />
                </Switch>
              </div>
            </section>
            <section className="section second-accordion">
              <Accordion />
            </section>
            <section className="section third">1</section>
          </div>

          <aside className="aside" />
        </main>
        <footer className="footer">
          <Foot />
          <div className="copy">
            <p>版权所有@qinlihui.cn =={this.state.Num}==</p>
          </div>
        </footer>

        <hr />
        {/* 网站主要内容区域 */}
        {/* <div className="main-wrap">
          <main className="columns">
            <aside className="">
             
            </aside>
            <div className="">
             
            </div>
          </main>
        </div>
        <div className="accordion">
          <Accordion />
        </div> */}

        {/* <footer className="footer">
         
        </footer> */}

        {/* <Prompt message="您确定要离开吗？"></Prompt> */}
        <Prompt
          message={location => `您是否要跳转到${location.pathname}`}
          when={false}
        />
      </div>
    );
  }
}
