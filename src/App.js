import React from 'react'
import 'antd-mobile/dist/antd-mobile.css'
import './index.scss'
import Home from './pages/Home'
import City from './pages/City'
import Map from './pages/Map'
import NotFound from './pages/404'
import { Route, Redirect, Switch } from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <div className="app">
        {/* 配置路由规则 */}
        <Switch>
          <Redirect exact from="/" to="/home" />
          <Route path="/home" component={Home} />
          <Route path="/city" component={City} />
          <Route path="/map" component={Map} />
          <Route component={NotFound} />
        </Switch>
      </div>
    )
  }
}

export default App
