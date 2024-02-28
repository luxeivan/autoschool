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
import Gibdd from './pages/Advanced/Gibdd';
import OurInstructors from './pages/Advanced/OurInstructors';
import AdditionalClasses from './pages/Advanced/AdditionalClasses';
import Gosuslugi from './pages/Advanced/Gosuslugi';
import Container from './components/Container';
const { Content } = Layout;



const App = () => {

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
              {/* <div
                style={{
                  // background: colorBgContainer,
                  minHeight: 280,
                  maxWidth: 1240,
                  margin: "0 auto",
                  padding: "0 24px",
                  borderRadius: borderRadiusLG,
                }}
              > */}
              <Routes>
                <Route path='/' element={<Main />} />

                <Route path='/services' element={<Container><Services /></Container>} />
                {/* ----------------------- */}
                <Route path='/services/category-b' element={<Container><CategoryB /></Container>} />
                <Route path='/services/category-b-at' element={<Container><CategoryBAT /></Container>} />
                <Route path='/services/category-a' element={<Container><CategoryA /></Container>} />
                <Route path='/services/medical' element={<Container><Medical /></Container>} />
                <Route path='/services/quadro' element={<Container><Quadro /></Container>} />
                <Route path='/services/board' element={<Container><Board /></Container>} />
                <Route path='/services/education' element={<Container><Education /></Container>} />
                {/* ----------------------- */}
                <Route path='/advanced' element={<Container><Advanced /></Container>} />
                {/* ----------------------- */}
                <Route path='/advanced/gibdd' element={<Container><Gibdd /></Container>} />
                <Route path='/advanced/our-instructors' element={<Container><OurInstructors /></Container>} />
                <Route path='/advanced/additional-classes' element={<Container><AdditionalClasses /></Container>} />
                <Route path='/advanced/gosuslugi' element={<Container><Gosuslugi /></Container>} />
                {/* ----------------------- */}
                <Route path='/about' element={<Container><About /></Container>} />
                <Route path='/about/docs' element={<Container><Docs /></Container>} />
                <Route path='/about/staff' element={<Container><Staff /></Container>} />
                <Route path='/about/info' element={<Container><Info /></Container>} />
                <Route path='/about/education' element={<Container><AboutEducation /></Container>} />
                {/* ----------------------- */}

                <Route path='/contacts' element={<Container><Contacts /></Container>} />
                <Route path='*' element={<Container><Page404 /></Container>} />
              </Routes>
              {/* </div> */}
            </Content>

            <Footer />
          </Flex>
          <ScrollToTop />
        </BrowserRouter>
      </Layout>
    </ConfigProvider>
  );
};
export default App;