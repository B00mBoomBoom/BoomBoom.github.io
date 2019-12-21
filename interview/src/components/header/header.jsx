import React from 'react'
import './header.scss'

const Header = () => {
  return (
    <div className="header">
      <div className="header-content">
        {/* logo */}
        <img className="logo" src="https://img.alicdn.com/tfs/TB1Zv8_lxSYBuNjSspjXXX73VXa-390-63.png" alt="logo"/>
        <div className="segmentation">|</div>
        <i>社招官网</i>

        {/* 菜单列表 */}
        <ul className="menu">
          <li>首&nbsp;&nbsp;页</li>
          <li>社会招聘</li>
          <li>校园招聘</li>
          <li>了解阿里</li>
          <li>个人中心</li>
        </ul>

        {/* 登录模块 */}
        <div className="login">
          <span>欢迎来到阿里巴巴集团招聘！</span>
          <a href="https://passport.alibaba.com/login.htm?appName=hrjob&params=https%3A%2F%2Fjob.alibaba.com%2F%2Fzhaopin%2Findex.htm">登录</a>
          <span>|</span>
          <a href="http://member1.taobao.com/member/newbie.htm">注册</a>
        </div>
      </div>
    </div>
    )
}

export default Header