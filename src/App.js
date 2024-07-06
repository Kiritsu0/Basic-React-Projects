// import StarRating from "./components/star-rating"
import ImageSlider from "./components/image-slider";

function App() {
  return (
    <div className="App">
      {/* <StarRating nOfStars={10}/> */}

      <ImageSlider url={'https://picsum.photos/v2/list'} limit={'10'} page={'1'}/>
    </div>
  );
}

export default App;
