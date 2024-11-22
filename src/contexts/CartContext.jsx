import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({children}) => {
  const [cart, setCart] = useState([]);
  
  const [amount, setAmount] = useState(1);
  const [totalProductPrice, setTotalProductPrice] = useState(0);

  
  const addToCart = (product, amount) => {
    const productInCartIndex = cart.findIndex(item => item.id === product.id);
    if(productInCartIndex >= 0) {
      const newCart = structuredClone(cart);
      newCart[productInCartIndex].quantity += amount;
      newCart[productInCartIndex].totalPrice += (amount * product.price);

      setCart(newCart);
    }
    else { 
      setCart(prevState => [
        ...prevState,
        {
          ...product,
          quantity: amount,
          totalPrice: amount * product.price
        }
      ])
    }
  }
  const removeFromCart = (productId) => {
    setCart(prevState => prevState.filter(item => item.id !== productId))
  }

  const clearCart = () => {
    setCart([])
  }

  const handleDecrement = () => {
    if (amount > 1) {
      setAmount(amount - 1);
    }
  };

  const handleIncrement = () => {
    if (amount < 10) {
      setAmount(amount + 1);
    }
  };


  return (
    <CartContext.Provider value={
      {cart,
      addToCart,
      removeFromCart,
      clearCart,
      handleDecrement,
      handleIncrement,
      amount,
      setAmount
    }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider;