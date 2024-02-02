import React from 'react'
import { Layout, Menu, theme } from 'antd';
const { Header, Content, Footer } = Layout;

export default function AppFooter() {
  return (
    <Footer
    style={{
      textAlign: 'center',
    }}
  >
    Автошкола «МалинАвто» ©{new Date().getFullYear()}
  </Footer>
  )
}
