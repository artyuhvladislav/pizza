const initialState = {
  sortBy: {
    type: "popular",
    order: 'desc'
  },
  category: null
}

const filterCategories = 'filterCategories'
const sortItemsBy = 'sortItemsBy'

const filters = (state = initialState, action) => {
  switch (action.type) {
    case filterCategories:
      return { ...state, category: action.category };
    case sortItemsBy:
      return { ...state, sortBy: action.payload  };
    default:
      return state;
  }
};

export default filters