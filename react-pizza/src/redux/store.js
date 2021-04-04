import { createStore, combineReducers} from 'redux'
import filtersReducer from './reducers/filters'
import pizzasReducer from './reducers/pizzas'

const reducers = combineReducers({
    filters: filtersReducer,
    pizzas: pizzasReducer
})

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
window.store = store
export default store