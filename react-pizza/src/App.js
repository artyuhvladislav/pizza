import React from "react";
import { Route } from "react-router-dom";

import "./scss/app.scss";

import { Header } from "./components/index";
import { Home, Cart } from "./pages/index";

function App() {
  const [pizzas, setPizzas] = React.useState([])

  React.useEffect(() => {
    fetch('http://localhost:3000/db.json').then(resp => resp.json()).then(json => {
      setPizzas(json.pizzas)
    })
   
  }, [])
  
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path="/" render={() => <Home items={pizzas} /> }/>
        <Route exact path="/cart" component={Cart} />
      </div>
    </div>
  );
}

export default App;
