import React from 'react'
import { Route, Switch } from 'react-router-dom'
import '../../assets/fonts/iconfont.css'
import './base.scss'
import Index from './Index/index'
import House from './House/index'
import News from './News/index'
import My from './My/index'
import { TabBar } from 'antd-mobile'
// 抽取TabBar中的不同数据
const itemList = [
  { title: '首页', icon: 'icon-ind', path: '/home' },
  { title: '找房', icon: 'icon-findHouse', path: '/home/house' },
  { title: '资讯', icon: 'icon-infom', path: '/home/news' },
  { title: '我的', icon: 'icon-my', path: '/home/my' }
]

class TabBarExample extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // 设置默认高亮图标
      selectedTab: this.props.location.pathname
    }
  }

  componentDidUpdate(prevProps) {
    // console.log(prevProps)
    // console.log(this.props)
    // 更新阶段不能直接调用setState的，需要有条件
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.setState({
        selectedTab: this.props.location.pathname
      })
    }
  }

  renderTabBar() {
    return itemList.map(item => (
      <TabBar.Item
        title={item.title}
        key={item.title}
        icon={<i className={`iconfont ${item.icon}`} />}
        selectedIcon={<i className={`iconfont ${item.icon}`} />}
        selected={this.state.selectedTab === item.path}
        onPress={() => {
          this.props.history.push(item.path)
        }}
      />
    ))
  }

  render() {
    return (
      <div className="index">
        {/* 配置路由规则 */}
        <Switch>
          <Route exact path="/home" component={Index} />
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
            {this.renderTabBar()}
          </TabBar>
        </div>
      </div>
    )
  }
}

export default TabBarExample
