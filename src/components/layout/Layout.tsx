import React, { FC } from 'react'

import { Layout } from 'antd'

const { Header, Footer, Content } = Layout

const LayoutComponent: FC = ({ children }) => (
  <Layout>
    <Header className="header">LOGO</Header>
    <Content className="site-layout">
      <div className="site-layout-content">{children}</div>
    </Content>
    <Footer className="footer">Copyright</Footer>
  </Layout>
)

export { LayoutComponent }
