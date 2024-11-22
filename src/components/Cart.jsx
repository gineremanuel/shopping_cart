import { useId, useContext, useMemo } from 'react';
import { ShoppingCart } from 'lucide-react';
import "../styles/Cart.css";
import { CartContext } from '../contexts/CartContext';
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
        <ul>
          { cart?.map(product => (
            <li key={product.id}>
            <img src={product.image} alt={product.title}/>
            <div>
              <strong>{product.title}</strong> - $ {product.price}
            </div>
            <footer>
              <small>
                Qty: {product.quantity}
              </small>
              <small>
                SubTotal: $ {product.totalPrice}
              </small>
              <button onClick={() => removeFromCart(product.id)}>Remove</button>
            </footer>
          </li>  
          ))|| <p>No items in the cart</p>}
          
        </ul>
        <small>Total: $ {total}</small>
        <button onClick={clearCart}>
          <ShoppingCart />
        </button>
      </aside>
    </>
  )
}

export default Cart;