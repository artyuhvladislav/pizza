const filterCategories = 'filterCategories'
const sortItemsBy = 'sortItemsBy'

export const setCategoriesAC = (category) => ({type:filterCategories, category})
export const setSortItemsAC = (sortBy) => ({type:sortItemsBy, sortBy})
