const initialState = {
  items: [],
  isLoaded: false
}

const setPizzas = 'setPizzas'


const pizzas = (state = initialState, action) => {
  switch (action.type) {
    case setPizzas:
      return { ...state,  items: action.pizzas};
    default:
      return state;
  }
};

export default pizzas