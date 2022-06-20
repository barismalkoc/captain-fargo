import {Route, Routes} from 'react-router-dom';
import HomePage from "./pages/HomePage/HomePage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AboutUs from "./pages/AboutUs/AboutUs";
import BlueVoyager from "./pages/BlueVoyager/BlueVoyager";
import Blog from "./pages/Blog/Blog";
import FAQPage from "./pages/FAQPage/FAQPage";

function App({data}) {

  const fullData = data;
  const headerData = fullData.headerData;
  const homePageData = fullData.homePageData;
  const aboutUsData = fullData.aboutPage;
  const blueVoyageData = fullData.blueVoyageData;
  const blogData = fullData.fargoBlogData;
  const faqPageData = fullData.fAQPageData;
  return (
    <>
      <Header headerData={headerData}></Header>
      <Routes>
        <Route path={"/"} element={<HomePage homePageData={homePageData}/>}></Route>
        <Route path={"/about"} element={<AboutUs aboutUsData={aboutUsData}/>}></Route>
        <Route path={"/blueVoyage"} element={<BlueVoyager blueVoyageData={blueVoyageData}/>}></Route>
        <Route path={"/blog"} element={<Blog blogData={blogData}/>}></Route>
        <Route path={"/faq"} element={<FAQPage faqPageData={faqPageData}/>}></Route>
      </Routes>
      <Footer/>
    </>

  );
}

export default App;
