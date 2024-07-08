import StarRating from "./components/star-rating"
import ImageSlider from "./components/image-slider";
import LoadMoreData from "./components/load-more-data";
import QRCodeGenerator from "./components/qr-code-generator";
import ScrollIndicator from "./components/scroll-indicator";
import GithubProfileFinder from "./components/github-profile-finder";

function App() {
  return (
    <div className="App">
      {/* <StarRating nOfStars={10}/> */}

      {/* <ImageSlider url={'https://picsum.photos/v2/list'} limit={'10'} page={'1'}/> */}

      {/* <LoadMoreData /> */}

      {/* <QRCodeGenerator /> */}

      {/* <ScrollIndicator url={'https://dummyjson.com/products?limit=100'} /> */}

      <GithubProfileFinder />

    </div>
  );
}

export default App;
