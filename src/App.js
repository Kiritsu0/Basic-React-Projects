import StarRating from "./components/star-rating"
import ImageSlider from "./components/image-slider";
import LoadMoreData from "./components/load-more-data";
import QRCodeGenerator from "./components/qr-code-generator";

function App() {
  return (
    <div className="App">
      {/* <StarRating nOfStars={10}/> */}

      {/* <ImageSlider url={'https://picsum.photos/v2/list'} limit={'10'} page={'1'}/> */}

      {/* <LoadMoreData /> */}

      <QRCodeGenerator />
    </div>
  );
}

export default App;
