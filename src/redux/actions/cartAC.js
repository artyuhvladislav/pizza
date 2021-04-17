const addPizzasToCart = 'addPizzasToCart'
const clearCart = 'clearCart'
const removeItem = 'removeItem'
const plusCartItem = "plusCartItem";
const minusCartItem = "minusCartItem";

export const addPizzasToCartAC = (pizzaObj) => ({type:addPizzasToCart, payload:pizzaObj})
export const removeItemAC = (id) => ({type:removeItem, payload: id})
export const plusCartItemAC = (id) => ({type:plusCartItem, payload: id})
export const minusCartItemAC = (id) => ({type:minusCartItem, payload: id})
export const clearCartAC = () => ({type:clearCart})
