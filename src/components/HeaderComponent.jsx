import React from 'react';
import logo from '../logo.svg';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
const {  Header } = Layout;

function HeaderComponent({state}) {
  const selectedMenuItem = document.location.pathname.slice(1);
  const menuItem = state.menuItems.map((menu) =>
    <Menu.Item key={menu.id}>
      <Link to={menu.link}/>
        {menu.name}
    </Menu.Item>
  )

  return (
    <Header>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[selectedMenuItem]}>
        <Menu.Item key={"react"}>
          <img src={logo} className='app-logo' alt="logo"/>
          React
        </Menu.Item>
        {menuItem}
      </Menu>
    </Header>
  );
}

export default HeaderComponent;
