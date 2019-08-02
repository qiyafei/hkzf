import React from 'react'
import { Link } from 'react-router-dom'
import '../../assets/fonts/iconfont.css'
import './base.scss'

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="btmNav">
          <ul>
            <li>
              <Link to="1">
                <i className="iconfont icon-ind" />
                <p>首页</p>
              </Link>
            </li>
            <li>
              <Link to="2">
                <i className="iconfont icon-ind" />
                <p>首页</p>
              </Link>
            </li>
            <li>
              <Link to="3">
                <i className="iconfont icon-ind" />
                <p>首页</p>
              </Link>
            </li>
            <li>
              <Link to="4">
                <i className="iconfont icon-ind" />
                <p>首页</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Home
