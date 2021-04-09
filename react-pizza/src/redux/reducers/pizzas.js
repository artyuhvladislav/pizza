const initialState = {
  items: [],
  isLoaded: false,
};

const setPizzas = "setPizzas";
const setLoaded = "setLoaded";

const pizzas = (state = initialState, action) => {
  switch (action.type) {
    case setPizzas:
      return { ...state, items: action.pizzas, isLoaded: true };
    case setLoaded:
      return { ...state, isLoaded: action.payload };
    default:
      return state;
  }
};

export default pizzas;
