import React from 'react'
import 'antd-mobile/dist/antd-mobile.css'
import './index.scss'
import Home from './pages/Home/index.js'
import City from './pages/City'
import Map from './pages/Map'
import { Route, Redirect } from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <hr />
        {/* 配置路由规则 */}
        <Redirect form="/" to="home" />
        <Route path="/home" component={Home} />
        <Route path="/city" component={City} />
        <Route path="/map" component={Map} />
      </div>
    )
  }
}

export default App
