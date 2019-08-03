import React from 'react'
import { NavLink, Route } from 'react-router-dom'
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
      selectedTab: 'blueTab',
      fullScreen: false
    }
  }

  render() {
    return (
      <div className="index">
        {/* 底部TabBar切换栏 */}
        <div>
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
              selected={this.state.selectedTab === 'blueTab'}
              onPress={() => {
                this.setState({
                  selectedTab: 'blueTab'
                })
              }}
              data-seed="logId"
            />
            <TabBar.Item
              icon={<i className="iconfont icon-findHouse" />}
              selectedIcon={<i className="iconfont icon-findHouse" />}
              title="找房"
              key="找房"
              selected={this.state.selectedTab === 'redTab'}
              onPress={() => {
                this.setState({
                  selectedTab: 'redTab'
                })
              }}
              data-seed="logId1"
            />
            <TabBar.Item
              icon={<i className="iconfont icon-infom" />}
              selectedIcon={<i className="iconfont icon-infom" />}
              title="资讯"
              key="资讯"
              selected={this.state.selectedTab === 'greenTab'}
              onPress={() => {
                this.setState({
                  selectedTab: 'greenTab'
                })
              }}
            />
            <TabBar.Item
              icon={<i className="iconfont icon-my" />}
              selectedIcon={<i className="iconfont icon-my" />}
              title="我的"
              key="我的"
              selected={this.state.selectedTab === 'yellowTab'}
              onPress={() => {
                this.setState({
                  selectedTab: 'yellowTab'
                })
              }}
            />
          </TabBar>
        </div>
      </div>
    )
  }
}

export default TabBarExample
