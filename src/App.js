import StarRating from "./components/star-rating"
import ImageSlider from "./components/image-slider";
import LoadMoreData from "./components/load-more-data";

function App() {
  return (
    <div className="App">
      {/* <StarRating nOfStars={10}/> */}

      {/* <ImageSlider url={'https://picsum.photos/v2/list'} limit={'10'} page={'1'}/> */}

      <LoadMoreData />
    </div>
  );
}

export default App;
