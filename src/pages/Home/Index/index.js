import React from 'react'
import { Carousel, Flex, Grid } from 'antd-mobile'
import axios from 'axios'
import './index.scss'
import Nav1 from 'assets/images/nav-1.png'
import Nav2 from 'assets/images/nav-2.png'
import Nav3 from 'assets/images/nav-3.png'
import Nav4 from 'assets/images/nav-4.png'
import { Link } from 'react-router-dom'

class Index extends React.Component {
  state = {
    // 轮播图数据
    swiper: [],
    isLoaded: false,
    // 租房小组
    groups: [],
    // 轮播图图片默认高度
    imgHeight: 212,
    // 最新资讯
    messages: [],
    cityName: '北京'
  }

  async getSwipers() {
    const res = await axios.get('http://localhost:8080/home/swiper')
    // console.log(res.data)
    const { status, body } = res.data
    if (status === 200) {
      this.setState({
        swiper: body,
        isLoaded: true
      })
    }
  }
  async getGroups() {
    const res = await axios.get(
      'http://localhost:8080/home/groups?area=AREA%7C88cff55c-aaa4-e2e0'
    )
    // console.log(res.data)
    const { status, body } = res.data
    if (status === 200) {
      this.setState({
        groups: body
      })
    }
  }
  async getMessages() {
    const res = await axios.get(
      'http://localhost:8080/home/news?area=AREA%7C88cff55c-aaa4-e2e0'
    )
    // console.log(res.data)
    const { status, body } = res.data
    if (status === 200) {
      this.setState({
        messages: body
      })
    }
  }
  renderMessages() {
    return (
      <>
        <h3 className="message-title">最新资讯</h3>
        {this.state.messages.map(item => (
          <div key={item.id} className="news-item">
            <div className="imgwrap">
              <img
                className="img"
                src={`http://localhost:8080${item.imgSrc}`}
                alt=""
              />
            </div>
            <Flex className="content" direction="column" justify="between">
              <h3 className="title">{item.title}</h3>
              <Flex className="info" justify="between">
                <span>{item.from}</span>
                <span>{item.date}</span>
              </Flex>
            </Flex>
          </div>
        ))}
      </>
    )
  }
  renderSwiper() {
    if (!this.state.isLoaded) {
      return null
    }
    return (
      <Carousel autoplay infinite>
        {this.state.swiper.map(item => (
          <a
            key={item.id}
            href="http://www.baidu.com"
            style={{
              display: 'inline-block',
              width: '100%',
              height: this.state.imgHeight
            }}
          >
            <img
              src={`http://localhost:8080${item.imgSrc}`}
              alt=""
              style={{ width: '100%', verticalAlign: 'top' }}
              onLoad={() => {
                // fire window resize event to change height
                window.dispatchEvent(new Event('resize'))
                this.setState({ imgHeight: 'auto' })
              }}
            />
          </a>
        ))}
      </Carousel>
    )
  }
  renderSerach() {
    return (
      <>
        {/* 搜索框 */}
        <Flex className="search-box">
          <Flex className="search-form">
            <div
              className="location"
              onClick={() => this.props.history.push('/city')}
            >
              <span className="name">上海</span>
              <i className="iconfont icon-arrow"> </i>
            </div>
            <div
              className="search-input"
              onClick={() => this.props.history.push('/search')}
            >
              <i className="iconfont icon-seach" />
              <span className="text">请输入小区地址</span>
            </div>
          </Flex>
          {/* 地图小图标 */}
          <i
            className="iconfont icon-map"
            onClick={() => this.props.history.push('/map')}
          />
        </Flex>
      </>
    )
  }

  componentDidMount() {
    this.getSwipers()
    this.getGroups()
    this.getMessages()
    // 调用百度地图的api，获取当前的城市
    const myCity = new window.BMap.LocalCity()
    myCity.get(async result => {
      const cityName = result.name
      console.log('当前定位城市名称为:', cityName)
      // 发送ajax请求，获取城市的详细信息
      const res = await axios.get(
        `http://localhost:8080/area/info?name=${cityName}`
      )

      const { status, body } = res.data
      if (status === 200) {
        // 第一步：把整个结果存储到本地缓存中
        localStorage.setItem('current_city', JSON.stringify(body))
      }
      // 第二步：显示城市的名字
      this.setState({
        cityName: body.label
      })
    })
  }
  render() {
    return (
      <div className="index">
        {/* 轮播图 */}
        <div className="banner" style={{ height: this.state.imgHeight }}>
          {this.renderSerach()}
          {this.renderSwiper()}
        </div>
        <div className="nav">
          {/* 商品导航 */}
          <Flex>
            <Flex.Item>
              <Link to="/home/house">
                <img src={Nav1} alt="" />
                <p>整租</p>
              </Link>
            </Flex.Item>
            <Flex.Item>
              <Link to="/home/house">
                <img src={Nav2} alt="" />
                <p>合租</p>
              </Link>
            </Flex.Item>
            <Flex.Item>
              <Link to="/city">
                <img src={Nav3} alt="" />
                <p>地图找房</p>
              </Link>
            </Flex.Item>
            <Flex.Item>
              <Link to="11">
                <img src={Nav4} alt="" />
                <p>去出租</p>
              </Link>
            </Flex.Item>
          </Flex>
        </div>

        {/* 租房小组 */}
        <div className="group">
          <div className="group-title">
            <p>
              <span style={{ fontWeight: 700 }}>租房小组</span>
              <span className="more">更多</span>
            </p>
          </div>
          <div className="group-content">
            <Grid
              data={this.state.groups}
              columnNum={2}
              hasLine={false}
              square={false}
              renderItem={item => (
                <Flex className="group-item" justify="around">
                  <div className="desc">
                    <p className="title">{item.title}</p>
                    <span className="info">{item.desc}</span>
                  </div>
                  <img src={`http://localhost:8080${item.imgSrc}`} alt="" />
                </Flex>
              )}
            />
          </div>
        </div>

        {/* 最新资讯 */}
        <div className="message">{this.renderMessages()}</div>
      </div>
    )
  }
}

export default Index
