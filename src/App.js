import ImageSlider from "./image_slider/ImageSlider";
import Header from "./Header/Header";
import {SliderData} from "./image_slider/SliderData";
import HomeBlog from "./HomeBlog/HomeBlog";

function App() {
  return (
    <div className="App">
        <Header/>
        <ImageSlider slides={SliderData}></ImageSlider>
        <HomeBlog></HomeBlog>
    </div>
  );
}

export default App;
