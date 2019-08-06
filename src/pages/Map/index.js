import React from 'react'
import './index.scss'

const BMap = window.BMap
class Map extends React.Component {
  componentDidMount() {
    // navigator.geolocation.getCurrentPosition
    // position.coords表示当前的地理位置信息
    // 常用:
    // latitude 纬度
    // longitude 经度
    // {lng: 121.61887341233741, lat: 31.040603951746952}
    // function(position) {
    //   console.log(position)
    // },
    // function(error) {
    //   console.log(error)
    // }

    // 显示地图
    const map = new BMap.Map('container')
    // 具体位置
    const point = new BMap.Point(121.61895125119062, 31.040452304898167)
    map.centerAndZoom(point, 15)
    const marker = new BMap.Marker(point) // 创建标注
    map.addOverlay(marker) // 将标注添加到地图中
  }

  render() {
    return (
      <div className="map">
        {/* 保证container必须是全屏 */}
        <div id="container" />
      </div>
    )
  }
}

export default Map
