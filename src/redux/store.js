import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import filters from './reducers/filters'
import pizzas from './reducers/pizzas'
import cart from './reducers/cart'


const reducers = combineReducers({
    filters,
    pizzas,
    cart,
})

const store = createStore(reducers, compose(applyMiddleware(thunk)))
export default store