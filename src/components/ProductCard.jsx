import "../styles/ProductCard.css";
import Stars from "../components/Stars";
import { useState } from "react";
import ProductModal from "./ProductModal";

const ProductCard = ({title, description, rating, price, img}) => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => {setShowModal(false)}

  return (
    <>
      <div className="product-card">
        <img src={img} alt="" className="product-card-image"/>
        <div className="product-card-content">
          <h3 className="product-card-title">{title}</h3>
        
          <Stars rate={rating.rate} rating={rating.count}/>
          <h4 className="product-card-price">${price}</h4>
          <button 
            className="product-card-btn"
            onClick={() => setShowModal(true)} >Buy</button>
        </div>
      </div>
      {showModal && 
        <ProductModal 
          title={title}
          description={description}
          rating={rating} 
          price={price} 
          img ={img}
          handleClose={handleClose}/>
        }
    </>
  )
}

export default ProductCard;