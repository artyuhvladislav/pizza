const addPizzasToCart = "addPizzasToCart";
const clearCart = "clearCart";
const removeItem = "removeItem";
const plusCartItem = "plusCartItem";
const minusCartItem = "minusCartItem";

const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const getTotalPrice = (arr) => arr.reduce((sum, obj) => obj.price + sum, 0);

const cart = (state = initialState, action) => {
  switch (action.type) {
    case addPizzasToCart: {
      const currentPizzaItems = !state.items[action.payload.id]
        ? [action.payload]
        : [...state.items[action.payload.id].items, action.payload];

      const newItems = {
        ...state.items,
        [action.payload.id]: {
          items: currentPizzaItems,
          totalPrice: getTotalPrice(currentPizzaItems),
        },
      };

      const items = Object.values(newItems).map((obj) => obj.items);
      const allPizzas = [].concat.apply([], items);
      const totalPrice = getTotalPrice(allPizzas);

      return {
        ...state,
        items: newItems,
        totalCount: allPizzas.length,
        totalPrice: totalPrice,
      };
    }

    case clearCart:
      return {
        ...state,
        items: {},
        totalPrice: 0,
        totalCount: 0,
      };

    case removeItem: {
      const newItems = {
        ...state.items
      }
      delete newItems[action.payload]

      const items = Object.values(newItems).map((obj) => obj.items);
      const allPizzas = [].concat.apply([], items);
      const totalPrice = getTotalPrice(allPizzas);

      return {
        ...state,
        items: newItems,
        totalCount: allPizzas.length,
        totalPrice: totalPrice,
      };
    }

    case plusCartItem: {
      const newObjItems = [
        ...state.items[action.payload].items,
        state.items[action.payload].items[0],
      ];
      const newItems = {
        ...state.items,
        [action.payload]: {
          items: newObjItems,
          totalPrice: getTotalPrice(newObjItems),
        },
      };
      const items = Object.values(newItems).map((obj) => obj.items);
      const allPizzas = [].concat.apply([], items);
      const totalPrice = getTotalPrice(allPizzas);

      
      return {
        ...state,
        items: newItems,
        totalCount: allPizzas.length,
        totalPrice,
      };
    }

    case minusCartItem: {
      const oldItems = state.items[action.payload].items;
      const newObjItems =
        oldItems.length > 1 ? state.items[action.payload].items.slice(1) : oldItems;
      const newItems = {
        ...state.items,
        [action.payload]: {
          items: newObjItems,
          totalPrice: getTotalPrice(newObjItems),
        },
      };
      const items = Object.values(newItems).map((obj) => obj.items);
      const allPizzas = [].concat.apply([], items);
      const totalPrice = getTotalPrice(allPizzas);

      
      return {
        ...state,
        items: newItems,
        totalCount: allPizzas.length,
        totalPrice,
      };
    }
      
    default:
      return state;
  }
};

export default cart;
