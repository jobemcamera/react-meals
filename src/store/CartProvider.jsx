import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0
}

const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    const updateItems = state.items.concat(action.item);
    const upadateTotalAmount = state.totalAmount + (action.item.price * action.item.amount);

    return {
      items: updateItems,
      totalAmount: upadateTotalAmount
    };
  }
  // if (action.type === 'REMOVE') {

  // }

  return defaultCartState;
};

const CartProvider = (props) => {

  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: 'ADD', item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: 'REMOVE', id: id });
  };

  const CartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler
  }

  return (
    <CartContext.Provider value={CartContext}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider;