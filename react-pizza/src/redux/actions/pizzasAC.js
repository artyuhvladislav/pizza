const setPizzas = 'setPizzas'
const setLoaded = 'setLoaded'

export const fetchPizzas = (category, sortBy) => dispatch => {
    dispatch(setLoadedAC(false))
    fetch(`http://localhost:3001/pizzas?${
      !!category  ? `category=${category}` : '' 
    }&_sort=${sortBy.type}&_order=${sortBy.order}`).then(resp => resp.json()).then(json => {
      dispatch(setPizzasAC(json))
    })
}
export const setPizzasAC = (pizzas) => ({type:setPizzas, pizzas})
export const setLoadedAC = (payload) => ({type:setLoaded, payload})
