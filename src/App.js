import React from "react";

import { Route } from "react-router-dom";
import { Header } from "./components/index";
import { Home, Cart } from "./pages/index";


import "./scss/app.scss";




function App() {
  
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
