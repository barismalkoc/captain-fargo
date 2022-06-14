import './App.css';
import ImageSlider from "./image_slider/ImageSlider";
import {SliderData} from "./image_slider/SliderData";
import HomeBlog from "./HomeBlog/HomeBlog";

function App() {
  return (
    <div className="App">
        <ImageSlider slides={SliderData}></ImageSlider>
        <HomeBlog></HomeBlog>
    </div>
  );
}

export default App;
