import React from 'react'
import { NavLink, Route } from 'react-router-dom'
import '../../assets/fonts/iconfont.css'
import './base.scss'
import Index from './Index/index'
import House from './House/index'
import News from './News/index'
import My from './My/index'

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="btmNav">
          <ul>
            <li>
              <NavLink to="/home/index">
                <i className="iconfont icon-ind" />
                <p>首页</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/home/house">
                <i className="iconfont icon-findHouse" />
                <p>找房</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/home/news">
                <i className="iconfont icon-infom" />
                <p>资讯</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/home/my">
                <i className="iconfont icon-my" />
                <p>我的</p>
              </NavLink>
            </li>
          </ul>
        </div>
        <Route path="/home/index" component={Index} />
        <Route path="/home/house" component={House} />
        <Route path="/home/news" component={News} />
        <Route path="/home/my" component={My} />
      </div>
    )
  }
}

export default Home
