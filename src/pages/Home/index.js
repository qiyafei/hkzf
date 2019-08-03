import React from 'react'
import { Route, Switch } from 'react-router-dom'
import '../../assets/fonts/iconfont.css'
import './base.scss'
import Index from './Index/index'
import House from './House/index'
import News from './News/index'
import My from './My/index'
import { TabBar } from 'antd-mobile'

class TabBarExample extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedTab: '/home/index'
    }
  }

  render() {
    return (
      <div className="index">
        {/* 配置路由规则 */}
        <Switch>
          <Route path="/home" component={Index} />
          <Route path="/home/house" component={House} />
          <Route path="/home/news" component={News} />
          <Route path="/home/my" component={My} />
        </Switch>
        {/* 底部TabBar切换栏 */}
        <div className="btmNav">
          <TabBar
            unselectedTintColor="#949494"
            tintColor="red"
            barTintColor="#fff"
            noRenderContent={true}
          >
            <TabBar.Item
              title="首页"
              key="首页"
              icon={<i className="iconfont icon-ind" />}
              selectedIcon={<i className="iconfont icon-ind" />}
              selected={this.state.selectedTab === '/home/index'}
              onPress={() => {
                this.setState({
                  selectedTab: '/home/index'
                })
                this.props.history.push('/home/index')
              }}
              data-seed="logId"
            />
            <TabBar.Item
              icon={<i className="iconfont icon-findHouse" />}
              selectedIcon={<i className="iconfont icon-findHouse" />}
              title="找房"
              key="找房"
              selected={this.state.selectedTab === '/home/house'}
              onPress={() => {
                this.setState({
                  selectedTab: '/home/house'
                })
                this.props.history.push('/home/house')
              }}
              data-seed="logId1"
            />
            <TabBar.Item
              icon={<i className="iconfont icon-infom" />}
              selectedIcon={<i className="iconfont icon-infom" />}
              title="资讯"
              key="资讯"
              selected={this.state.selectedTab === '/home/news'}
              onPress={() => {
                this.setState({
                  selectedTab: '/home/news'
                })
                this.props.history.push('/home/news')
              }}
            />
            <TabBar.Item
              icon={<i className="iconfont icon-my" />}
              selectedIcon={<i className="iconfont icon-my" />}
              title="我的"
              key="我的"
              selected={this.state.selectedTab === '/home/my'}
              onPress={() => {
                this.setState({
                  selectedTab: '/home/my'
                })
                this.props.history.push('/home/my')
              }}
            />
          </TabBar>
        </div>
      </div>
    )
  }
}

export default TabBarExample
