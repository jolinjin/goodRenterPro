import React from 'react'
import { Button } from 'antd-mobile'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import CityList from './pages/CityLits/index'
import Home from './pages/Home/index'

export default function App() {
  return (
    <Router>
      <div className='App'>
        {/* 项目根组件 <button>登录</button> */}

        {/* 配置导航菜单 */}
        <ul>
          <li>
            <Link to="/home">首页</Link>

          </li>
          <li>
            <Link to="/Citylist">城市选择</Link>

          </li>

        </ul>
        {/* 配置路由 */}
        <Route path="/home" component={Home}></Route>
        <Route path="/Citylist" component={CityList}></Route>
      </div>
    </Router>
  )
}
