import React from "react";
import {useDispatch} from "react-redux";
import { Route } from "react-router-dom";
import { Header } from "./components/index";
import { Home, Cart } from "./pages/index";
import {setPizzasAC} from './redux/actions/pizzasAC'

import "./scss/app.scss";




function App() {


  window.test = () => {
    fetch('http://localhost:3001/db.json').then(resp => resp.json()).then(json => {
      dispatch(setPizzasAC(json))
    })}


  const dispatch = useDispatch()

  React.useEffect(() => {
    fetch('http://localhost:3001/db.json').then(resp => resp.json()).then(json => {
      dispatch(setPizzasAC(json.pizzas))
    })
  }, [])
  
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path="/" component={Home} />
        <Route exact path="/cart" component={Cart} />
      </div>
    </div>
  );
}

export default App;
