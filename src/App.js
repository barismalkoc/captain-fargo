import './App.css';
import ImageSlider from "./image_slider/ImageSlider";
import {SliderData} from "./image_slider/SliderData";

function App() {
  return (
    <div className="App">
        <ImageSlider slides={SliderData}></ImageSlider>
    </div>
  );
}

export default App;
