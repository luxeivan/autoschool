import React from 'react';
import { Flex, Layout, Menu, theme, ConfigProvider } from 'antd';
import { BrowserRouter, createBrowserRouter, RouterProvider, Routes, Route } from "react-router-dom";
import Header from './components/AppHeader';
import Footer from './components/AppFooter';
import Main from './pages/Main';
import Contacts from './pages/Contacts';
import Advanced from './pages/Advanced';
import About from './pages/About';
import Services from './pages/Services';
import CategoryBAT from './pages/Services/CategoryBAT';
import CategoryB from './pages/Services/CategoryB';
import Education from './pages/Services/Education';
import ScrollToTop from './components/ScrollToTop';
const { Content } = Layout;


const App = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <ConfigProvider
      theme={{
        components: {
          Layout: {
            /* here is your component tokens */
            headerBg: "#38385C",
          },
        },
        token: {
          // Seed Token
          colorPrimary: '#38385C',
          // borderRadius: 2,

          // Alias Token
          // colorBgContainer: '#A4A4FF',
        },
      }}
    >
      <Layout>
        <BrowserRouter>
          <Flex vertical justify={'space-between'} style={{ minHeight: "100vh" }}>

            <Header />
            <Content >
              <div
                style={{
                  // background: colorBgContainer,
                  minHeight: 280,
                  maxWidth: 1240,
                  margin: "0 auto",
                  padding: 24,
                  borderRadius: borderRadiusLG,
                }}
              >

                <Routes>
                  <Route path='/' element={<Main />} />
                  <Route path='/services' element={<Services />} />
                  {/* ----------------------- */}
                  <Route path='/services/category-b' element={<CategoryB />} />
                  <Route path='/services/category-b-at' element={<CategoryBAT />} />
                  <Route path='/services/education' element={<Education />} />
                  {/* ----------------------- */}
                  <Route path='/advanced' element={<Advanced />} />
                  <Route path='/about' element={<About />} />

                  <Route path='/contacts' element={<Contacts />} />
                </Routes>
              </div>
            </Content>

            <Footer />
          </Flex>
      <ScrollToTop/>          
        </BrowserRouter>
      </Layout>
    </ConfigProvider>
  );
};
export default App;