import ImageSlider from "./image_slider/ImageSlider";
import Header from "./Header/Header";
import {SliderData} from "./image_slider/SliderData";

function App() {
  return (
    <div className="App">
        <Header/>
        <ImageSlider slides={SliderData}></ImageSlider>
    </div>
  );
}

export default App;
