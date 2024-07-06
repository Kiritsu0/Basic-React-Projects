import { useState, useEffect } from "react";
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from "react-icons/bs";
import "./styles.css";
const ImageSlider = ({ url, limit = 5, page = 1 }) => {
  // Variables
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Functions
  const fetchImages = async (getUrl) => {
    try {
      setLoading(true)
      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();

      if(data) {
        setImages(data)
        setLoading(false)
      }
    } catch(e) {
      setError(e.message)
    }
  }

  const handlePrevious = () => {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1)
  }

  const handleNext = () => {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1)
    
  }

  useEffect(() => {
    if (url !== "") {
      fetchImages(url)
    }
  }, [url])

  if (loading) {
    return <div>Loading data! Please wait</div>
  }

  if (error !== null) {
    return <div>Error occured! {error}</div>
  }

  return (
    <div className="container">
      <BsArrowLeftCircleFill onClick={handlePrevious} className="arrow arrow-left"/>
      {
        images && images.length ?
          images.map((imageItem, index) => (
            <img 
              key={imageItem.id}
              alt={imageItem.download_url}
              src={imageItem.download_url}
              className={currentSlide === index ? "current-image" : "current-image hide-current-image"}
            />
          ))
        : null
      }
      <BsArrowRightCircleFill onClick={handleNext} className="arrow arrow-right"/>
      <span className="circle-indicators">
        {
          images && images ? 
            images.map((_, index) => {
              return <button 
                  onClick={() => setCurrentSlide(index)} 
                  key={index} 
                  className={currentSlide === index ? "current-indicator" : "current-indicator inactive-indicator"}>
                </button>
            })
          : null
        }
      </span>
    </div>
  )
}

export default ImageSlider