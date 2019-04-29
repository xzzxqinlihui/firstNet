import React, { Component } from 'react';
import team75 from '../assets/foot/75team.png';
import FEX from '../assets/foot/FEX.png';
import FED from '../assets/foot/FED.png';
import CEC from '../assets/foot/CEC.png';
import JDC from '../assets/foot/JDC.png';
import UED from '../assets/foot/UED.png';
import '../sass/Foot.scss';

export default class Foot extends Component {
  render() {
    return (
      <div className="foot-wrap">
        
        <ul className="link-friend">
          <li>
            <a href="https://75team.com/" target="blank">
              <img src={team75} alt="奇舞团" />
            </a>
          </li>
          <li>
            <a href="http://jdc.jd.com//">
              <img src={FEX} alt="百度FEX" />
            </a>
          </li>
          <li>
            <a href="http://taobaofed.org/">
              <img src={FED} alt="淘宝FED" />
            </a>
          </li>
          <li>
            <a href="https://cdc.tencent.com/">
              <img src={CEC} alt="腾讯CEC" />
            </a>
          </li>
          <li>
            <a href="http://jdc.jd.com/">
              <img src={JDC} alt="京东JDC" />
            </a>
          </li>
          <li>
            <a href="http://www.aliued.com/">
              <img src={UED} alt="阿里UED" />
            </a>
          </li>
        </ul>

        <ul className="link-friend link-friend-last" >
            <li><a href="https://www.liaoxuefeng.com/">廖雪峰个人网站</a></li>
            <li><a href="https://www.zhangxinxu.com/">张鑫旭个人网站</a></li>
            <li><a href="http://www.ruanyifeng.com/blog/">阮一峰个人网站</a></li>
            <li><a href="https://blog.evanyou.me/">尤雨溪个人网站</a></li>
            <li><a href="http://html5ify.com/">朴灵个人网站</a></li>
            <li><a href="http://caibaojian.com/lifesinger">玉伯个人网站</a></li>
        </ul>
      </div>
    );
  }
}
