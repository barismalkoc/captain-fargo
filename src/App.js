import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import HomePage from "./pages/HomePage/HomePage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AboutUs from "./pages/AboutUs/AboutUs";
import BlueVoyageInfo from "./components/BlueVoyageInfo/BlueVoyageInfo";
import BlueVoyager from "./pages/BlueVoyager/BlueVoyager";
import Blog from "./pages/Blog/Blog";

function App() {
  return (
    <>
      <Header></Header>

      <Routes>
        <Route path={"/"} element={<HomePage/>}></Route>
        <Route path={"/about"} element={<AboutUs/>}></Route>
        <Route path={"/blueVoyage"} element={<BlueVoyager/>}></Route>
        <Route path={"/blog"} element={<Blog/>}></Route>
      </Routes>

      <Footer/>
    </>

  );
}

export default App;
