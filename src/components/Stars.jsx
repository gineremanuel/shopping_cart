import { Star, StarHalf } from "lucide-react";

const Stars = ({rate, rating}) => {
  const decimal = rate % 1;
  return (
    <> 
      <p className="product-card-rating">
        {Array.from({ length :rate}, () => (
          <Star className="stars" />
        ))}
        {decimal > 0.4 ? (<StarHalf className="stars"/>) : null}
      {rate}({rating})</p>
    </>
  )
}

export default Stars;