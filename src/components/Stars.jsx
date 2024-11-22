import { Star, StarHalf } from "lucide-react";

const Stars = ({rate, rating}) => {
  const decimal = rate % 1;
  return (
    <> 
      <p className="product-card-rating">
        {Array.from({ length :rate}, (_, index) => (
          <Star className="stars" key={`star-${index}`} />
        ))}
        {decimal > 0.4 ? (<StarHalf className="stars" key="star-half"/>) : null}
      {rate}({rating})</p>
    </>
  )
}

export default Stars;