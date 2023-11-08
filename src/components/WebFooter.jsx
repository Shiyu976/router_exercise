import React from 'react'
import { Footer } from 'antd/lib/layout/layout'
import { NavLink } from 'react-router-dom'

const WebFooter = () => {
  return (
    <div>
      <Footer style={{ textAlign: 'center' }}>
        Router_Exercise ©2023 Created by <span style={{color: 'purple'}}>Shiyu Wang</span> &nbsp;&nbsp;&nbsp;
      <NavLink to='/about'>About</NavLink> &nbsp;&nbsp;&nbsp;
      <NavLink to='/'>Home</NavLink>
      </Footer>
    </div>
  )
}

export default WebFooter;