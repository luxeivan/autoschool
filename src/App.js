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
import appcss from './App.css'
import Page404 from './pages/Page404';
import Docs from './pages/About/Docs';
import Staff from './pages/About/Staff';
import AboutEducation from './pages/About/AboutEducation';
import Info from './pages/About/Info';
import CategoryA from './pages/Services/CategoryA';
import Medical from './pages/Services/Medical';
import Quadro from './pages/Services/Quadro';
import Board from './pages/Services/Board';
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
          Descriptions: {
            /* here is your component tokens */
            titleMarginBottom: 5
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
                  padding: "0 24px",
                  borderRadius: borderRadiusLG,
                }}
              >

                <Routes>
                  <Route path='/' element={<Main />} />
                  <Route path='/services' element={<Services />} />
                  {/* ----------------------- */}
                  <Route path='/services/category-b' element={<CategoryB />} />
                  <Route path='/services/category-b-at' element={<CategoryBAT />} />
                  <Route path='/services/category-a' element={<CategoryA />} />
                  <Route path='/services/medical' element={<Medical />} />
                  <Route path='/services/quadro' element={<Quadro />} />
                  <Route path='/services/board' element={<Board />} />
                  <Route path='/services/education' element={<Education />} />
                  {/* ----------------------- */}
                  <Route path='/advanced' element={<Advanced />} />
                  {/* ----------------------- */}
                  <Route path='/about' element={<About />} />
                  <Route path='/about/docs' element={<Docs />} />
                  <Route path='/about/staff' element={<Staff />} />
                  <Route path='/about/info' element={<Info />} />
                  <Route path='/about/education' element={<AboutEducation />} />
                  {/* ----------------------- */}

                  <Route path='/contacts' element={<Contacts />} />
                  <Route path='*' element={<Page404 />} />
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