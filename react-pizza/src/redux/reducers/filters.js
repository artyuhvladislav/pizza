const initialState = {
  sortBy: 'popular',
  categories: 0
}

const filterCategories = 'filterCategories'
const sortItemsBy = 'sortItemsBy'

const filters = (state = initialState, action) => {
  switch (action.type) {
    case filterCategories:
      return { ...state, categories: action.category };
    case sortItemsBy:
      return { ...state, sortBy: action.sortBy };
    default:
      return state;
  }
};

export default filters