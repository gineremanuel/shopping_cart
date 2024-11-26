import { useId, useMemo } from 'react';
import { ShoppingCart, Trash2 } from 'lucide-react';
import "../styles/Cart.css";
import { useCart } from '../hooks/useCart';




const Cart = () => {
  const cartCheckboxId = useId();
  const {cart, clearCart, removeFromCart} = useCart();

  const total = useMemo(() => cart.reduce((total, product) => total + product.totalPrice,0),[cart])

  return (
    <>
      <label className="cart-button" htmlFor={cartCheckboxId}>
        <ShoppingCart />
      </label>
      <input id={cartCheckboxId} type="checkbox" hidden/>
      <aside className='cart'>
        
        { cart?.map(product => (
          <div className='cart-item-container' key={product.id}>
            <img src={product.image} alt={product.title}/>
            <div  className='cart-item'>
              <div className='cart-item-info'>
                <div className='cart-item-title'>{product.title}</div> 
              </div>
              <div className='cart-item-details'>
                <span className='cart-item-quantity'>Qty: {product.quantity}</span>
                <span className='cart-item-price'>$ {(product.totalPrice).toFixed(2)}</span>
              </div>
              <button className='cart-item-remove-btn'
                onClick={() => removeFromCart(product)}>
                  
                  <Trash2 />
              </button>
            </div>
          </div>
          
        ))|| <p>No items in the cart</p>}
          <p className='cart-total'>
            Total: ${total.toFixed(2)}
          </p>   
        <div className='cart-item-actions'>
          <button onClick={clearCart} className='clear-cart-btn'>
            Clear cart <Trash2 />
          </button>
          <button className='checkout-button'>Checkout</button>
        </div>
        
      </aside>
    </>
  )
}

export default Cart;