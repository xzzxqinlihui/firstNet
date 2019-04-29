import React, { Component } from 'react'
import "../sass/Accordion.scss"

export default class accordion extends Component {

  render() {
    return (
      <div>
         <ul className="fold_wrap" id="sm">
      <li className="li">
        <a href="http://www.baidu.com" target="blank">
          <div className="mask_b"><h4>温泉酒店</h4></div>
          <div className="pic_auto pic_auto1"></div>
          <div className="adv_intro">
            有谁不爱泡温泉？浸入雾气蒸腾的泉水之中，把身体泡成一片茶叶，舒展轻盈。有比这更美妙的感觉吗？
          </div>
        </a>
      </li>
      <li className="li">
        <a href="http://www.baidu.com" target="blank">
          <div className="mask_b"><h4>情侣酒店</h4></div>
          <div className="pic_auto pic_auto2"></div>
          <div className="adv_intro">
            浪漫，是香闺围笼里的暧昧，是灯火迷离，泪眼婆裟的唯美，是杨柳岸、晓风残月中的无语凝噎……
          </div>
        </a>
      </li>
      <li className="li">
        <a href="http://www.baidu.com" target="blank">
          <div className="mask_b"><h4>设计师酒店</h4></div>
          <div className="pic_auto pic_auto3"></div>
          <div className="adv_intro">
            前卫的酒店设计理念，独具魅力的风格，优美的自然风光才能有这样顶级的酒店。
          </div>
        </a>
      </li>
      <li className="li">
        <a href="http://www.baidu.com" target="blank">
          <div className="mask_b"><h4>青年旅舍</h4></div>
          <div className="pic_auto pic_auto4"></div>
          <div className="adv_intro">
            我为你煮一杯温茶，斟一杯美酒。让我们席地而坐，听你的梦想。用你的只言片语装点我们的梦想博物馆。
          </div>
        </a>
      </li>
      <li className="li">
        <a href="http://www.baidu.com" target="blank"> 
          <div className="mask_b"><h4>特色客栈</h4></div>
          <div className="pic_auto pic_auto5"></div>
          <div className="adv_intro">
            在这里，你可以静静发呆，而不被人打扰，只用细细品味它的美好；在这里，你能看见最美好的星星，能让你找到最深的感动。
          </div>
        </a>
      </li>
      <li className="li">
        <a href="http://www.baidu.com" target="blank">
          <div className="mask_b"><h4>海岛酒店</h4></div>
          <div className="pic_auto pic_auto6"></div>
          <div className="adv_intro">
            不想过冬，厌倦沉重，就飞去热带的岛屿游泳，卸下包袱，放下压力，让自己的身与心，在这碧海蓝天之中，享受一次超自然的洗礼。
          </div>
        </a>
      </li>
      <li className="li">
        <a href="http://www.baidu.com" target="blank">
          <div className="mask_b"><h4>海外温泉</h4></div>
          <div className="pic_auto pic_auto7"></div>
          <div className="adv_intro">
            因地形地质的区别，世界各地的温泉也千差万别，选择一处适合自己的温泉，5分钟后，你会忘记自己，20分钟后，你会忘记世界。
          </div>
        </a>
      </li>
    </ul>
      </div>
    )
  }
}
