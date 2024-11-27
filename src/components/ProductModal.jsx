import Stars from "./Stars";
import "../styles/ProductModal.css";
import {useCart} from "../hooks/useCart.js";

const ProductModal = ({product, handleClose}) => {
  const {addToCart, handleDecrement, handleIncrement, amount, setAmount} = useCart();
     
  const handleChange = (e) => {
    const units = Number(e.target.value);
    setAmount(units)
  }
   return (
    <div className="product-modal-backdrop">
      <div className="product-modal">
      <button className="product-modal-close-btn" onClick={handleClose}>x</button>
        <img className="product-modal-img" src={product.image} alt="product image" />
        <div className="product-modal-body">
          <div className="product-modal-title">{product.title}</div>
          <div className="product-modal-description">{product.description}</div>
          <Stars rate={product.rating.rate} rating={product.rating.count}/>
          <div className="product-modal-amount-container">
            <p className="product-modal-amount">Amount: 
              <button className="product-modal-amount-decrement"
               onClick={handleDecrement}>-</button>
              <input type="number"
                value={amount}
                onChange={handleChange}/>
              <button className="product-modal-amount-increcrement"
                onClick={handleIncrement}>+</button>  
            </p>
            <p className="product-modal-price">${(product.price * amount).toFixed(2)}</p>
          </div>
        </div>
        <button className="product-modal-buy-btn" onClick={() => addToCart(product, amount, handleClose)}>Add to cart</button>
      </div>
    </div>
  )
}

export default ProductModal;