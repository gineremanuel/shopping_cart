import Stars from "./Stars";
import "../styles/ProductModal.css";
import { useState } from "react";
const ProductModal = ({title, description, rating, price, img, handleClose}) => {
  const [amount, setAmount] = useState(1);
  const [totalProductPrice, setTotalProductPrice] = useState(price)
    
  const handleChange = (e) => {
    const units = e.target.value
    setAmount(units)
    handlePricing(units)
  }
  const handlePricing = (units) => {
    const totalPrice = units * price
    setTotalProductPrice(totalPrice)
  }
  const handleDecrementClick = () => {
    if(amount > 1) {
      let units = amount
      units --
      setAmount(units)
      handlePricing(units)
    }
  }
  const handleIncrementClick = () => {
    if(amount < 10) {
      let units = amount
      units ++
      setAmount(units)
      handlePricing(units)
    }
  }
   return (
    <div className="product-modal-backdrop">
      <div className="product-modal">
      <button className="product-modal-close-btn" onClick={() => handleClose()}>x</button>
        <img className="product-modal-img" src={img} alt="product image" />
        <div className="product-modal-body">
          <div className="product-modal-title">{title}</div>
          <div className="product-modal-description">{description}</div>
          <Stars rate={rating.rate} rating={rating.count}/>
          <div className="product-modal-amount-container">
            <p className="product-modal-amount">Cantidad: 
              <button className="product-modal-amount-decrement"
               onClick={handleDecrementClick}>-</button>
              <input type="number" 
                value={amount}
                onChange={handleChange}/>
              <button className="product-modal-amount-increcrement"
                onClick={handleIncrementClick}>+</button>  
            </p>
            <p className="product-modal-price">${totalProductPrice}</p>
          </div>
        </div>
        <button className="product-modal-buy-btn" onClick={() => handleClose()}>Add to cart</button>
      </div>
    </div>
  )

}

export default ProductModal;