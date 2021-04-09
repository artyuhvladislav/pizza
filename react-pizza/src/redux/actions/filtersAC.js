const filterCategories = 'filterCategories'
const sortItemsBy = 'sortItemsBy'

export const setCategoriesAC = (category) => ({type:filterCategories, category})
export const setSortItemsAC = ({type, order}) => ({type:sortItemsBy, payload: {type,order}})
