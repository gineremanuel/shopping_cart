import "../styles/ProductCard.css";
import Stars from "../components/Stars";
import { useState } from "react";
import ProductModal from "./ProductModal";
import { useCart } from "../hooks/useCart";

const ProductCard = ({product}) => {
  const [showModal, setShowModal] = useState(false);
  const {amount, setAmount} = useCart();

  const handleClose = () => {
    setShowModal(false)
    setAmount(1)
  }

  return (
    <>
      <div className="product-card">
        <img src={product.image} alt="" className="product-card-image"/>
        <div className="product-card-content">
          <h3 className="product-card-title">{product.title}</h3>
        
          <Stars rate={product.rating.rate} rating={product.rating.count}/>
          <h4 className="product-card-price">${product.price}</h4>
          <button 
            className="product-card-btn"
            onClick={() => setShowModal(true)} >Buy</button>
        </div>
      </div>
      {showModal && 
        <ProductModal 
          product= {product}
          handleClose={handleClose}/>
        }
    </>
  )
}

export default ProductCard;