import StarRating from "./components/star-rating"
import ImageSlider from "./components/image-slider";
import LoadMoreData from "./components/load-more-data";
import QRCodeGenerator from "./components/qr-code-generator";
import ScrollIndicator from "./components/scroll-indicator";
import GithubProfileFinder from "./components/github-profile-finder";
import SearchAutocomplete from "./components/search-autocomplete-withapi";
import UseOnclickOutsideTest from "./components/use-outside-click/test";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from "react";

function App() {
  const [showNav, setShowNav] = useState(true);

  return (
    <Router>
      <div className="App">
        <Link onClick={() => setShowNav(true)} to="/" className={showNav ? "navigation" : "homeLink"}>Home</Link>
        {
          showNav &&
          <nav onClick={() => setShowNav(false)} className="navigation">
            <Link to="/components/star-rating">Star Rating</Link>
            <Link to="/components/image-slider">Image Slider</Link>
            <Link to="/components/load-more-data">Load More Data</Link>
            <Link to="/components/qr-code-generator">QR Code Generator</Link>
            <Link to="/components/scroll-indicator">Scroll Indicator</Link>
            <Link to="/components/github-profile-finder">Github Profile Finder</Link>
            <Link to="/components/search-autocomplete-withapi">Search Auto Complete</Link>
            <Link to="/components/use-outside-click">Use Outside Click</Link>
          </nav>
        }
        <Routes>
          <Route path="/components/star-rating" element={<StarRating nOfStars={10} />} />
          <Route path="/components/image-slider" element={<ImageSlider url={'https://picsum.photos/v2/list'} limit={'10'} page={'1'} />} />
          <Route path="/components/load-more-data" element={<LoadMoreData />} />
          <Route path="/components/qr-code-generator" element={<QRCodeGenerator />} />
          <Route path="/components/scroll-indicator" element={<ScrollIndicator url={'https://dummyjson.com/products?limit=100'} />} />
          <Route path="/components/github-profile-finder" element={<GithubProfileFinder />} />
          <Route path="/components/search-autocomplete-withapi" element={<SearchAutocomplete />} />
          <Route path="/components/use-outside-click" element={<UseOnclickOutsideTest />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
