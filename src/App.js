import React from 'react'
import 'antd-mobile/dist/antd-mobile.css'
import './index.scss'
import Home from './pages/Home'
import City from './pages/City'
import Map from './pages/Map'
import { Link, Route } from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <ul>
          <li>
            <Link to="/home">首页</Link>
          </li>
          <li>
            <Link to="city">城市</Link>
          </li>
          <li>
            <Link to="map">地图</Link>
          </li>
        </ul>
        <hr />
        {/* 配置路由规则 */}
        <Route path="/home" component={Home} />
        <Route path="/city" component={City} />
        <Route path="/map" component={Map} />
      </div>
    )
  }
}

export default App
