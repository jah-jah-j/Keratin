import Welcome from './components/Welcome/Welcome';
import {Route, Routes, useNavigate} from "react-router-dom";
import Length from './components/Length/Length';
import React, {FC, useState} from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import {Layout, Menu} from 'antd';
import 'antd/dist/antd.min.css';
import Thickness from './components/Thickness/Thickness';
import Procedure from './components/Procedure/Procedure';
import TotalCost from './components/TotalCost/TotalCost';
import {useInit} from './hooks/init';

const App: FC = () => {
  const [collapsed, setCollapsed] = useState(true);
  const {Header, Sider, Content} = Layout;
  const Navigation = useNavigate();

  useInit()

  return (
    <Layout className="app">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo"/>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          onClick={({item, key}) => Navigation(key)}
          items={[
            {
              key: '/',
              icon: <UserOutlined/>,
              label: 'nav 1',
            },
            {
              key: '/promotions',
              icon: <VideoCameraOutlined/>,
              label: 'nav 2',
            },
            {
              key: '/contacts',
              icon: <UploadOutlined/>,
              label: 'nav 3',
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{padding: 0}}>
          {collapsed
            ? <MenuUnfoldOutlined className="trigger" onClick={() => setCollapsed(!collapsed)}/>
            : <MenuFoldOutlined className="trigger" onClick={() => setCollapsed(!collapsed)}/>}
        </Header>
        <Content className="site-layout-background"
                 style={{margin: '24px 16px', padding: 24, minHeight: 280,}}>
          <Routes>
            <Route path="/" element={<Welcome/>}/>
            <Route path="length" element={<Length/>}/>
            <Route path="thickness" element={<Thickness/>}/>
            <Route path="procedure" element={<Procedure/>}/>
            <Route path="cost" element={<TotalCost/>}/>
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
}

export default React.memo(App);
