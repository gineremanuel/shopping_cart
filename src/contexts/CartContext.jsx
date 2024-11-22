import { createContext, useReducer, useState } from "react";

export const CartContext = createContext();

const initialState = [];
const reducer = (state, action) => {
  const { type : actionType, payload: actionPayload } = action;

  switch ( actionType) {
    case 'ADD_TO_CART': {
      const { product, amount, handleClose } = actionPayload;
      const productInCartIndex = state.findIndex(item => item.id === product.id);
      if(productInCartIndex >= 0) {
        const newState = structuredClone(state);
        newState[productInCartIndex].quantity += amount;
        newState[productInCartIndex].totalPrice += (amount * product.price);
        handleClose()
        return newState;
      } else {
        handleClose()
        return [ 
          ...state,
          {
            ...product,
            quantity: amount,
            totalPrice: amount * product.price
          }
        ]
      } 
    }
    case 'REMOVE_FROM_CART': {
      const { id } = actionPayload;
      return state.filter(item => item.id !== id)
    }
    case 'CLEAR_CART': {
      return initialState
    }
  }
  return state
}

const CartProvider = ({children}) => {
  const [amount, setAmount] = useState(1);
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (product, amount, handleClose) => dispatch({
    type: 'ADD_TO_CART',
    payload: {
      product,
      amount,
      handleClose
    }
  });

  const removeFromCart = product => dispatch({
    type: 'REMOVE_FROM_CART',
    payload: product
  })

  const clearCart = () => dispatch({type: 'CLEAR_CART'})

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
      {cart: state,
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