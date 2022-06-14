import ImageSlider from "../../components/ImageSlider/ImageSlider";
import Header from "../../components/Header/Header";
import {SliderData} from "../../components/ImageSlider/SliderData";
import HomeBlog from "../../components/HomeBlog/HomeBlog";
import BlogCardContainer from "../../components/BlogCardContainer/BlogCardContainer";
import Footer from "../../components/Footer/Footer";

function HomePage() {
  return (
    <div className="App">
      <Header/>
      <ImageSlider slides={SliderData}></ImageSlider>
      <HomeBlog/>
      <BlogCardContainer/>
      <Footer/>
    </div>
  );
}

export default HomePage;
