import { FaStar } from "react-icons/fa"
import { useState } from "react"
import "./styles.css";

const StarRating = ({nOfStars}) => {
  // Variables
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  // Functions
  const handleClick = (getCurrentIndex) => {
    setRating(getCurrentIndex)
  }

  const handleMouseEnter = (getCurrentIndex) => {
    setHover(getCurrentIndex)
  }

  const handleMouseLeave = () => {
    setHover(rating)
  }

  return (
    <div className="star-rating">
      {
          [...Array(nOfStars)].map((_, index) => {
            index += 1
            return <FaStar 
              key={index} 
              className={index <= (hover || rating) ? "active": ""}
              onClick={() => handleClick(index)} 
              onMouseMove={() => handleMouseEnter(index)} 
              onMouseLeave={() => handleMouseLeave()} 
              size={40}
            />
          })
      }
    </div>
  )
}

export default StarRating;