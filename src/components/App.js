import React from "react";
import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
// import "materialize-css/dist/css/materialize.min.css";
// import "materialize-css/dist/js/materialize.min";
import "../css/styles.css"
import { Route, Switch } from "react-router-dom";
import Checkout from "./Checkout/Checkout";
import Privacy from "./Privacy/Privacy";

const App = () => {
  return (<>
    <Switch>
      <Route exact path="/">
        <Navbar />
        <Home />
      </Route>
      <Route exact path="/checkout">
        <Checkout />
      </Route>
      <Route exact path="/privacy">
        <Privacy />
      </Route>
    </Switch>
  </>
  )
}

export default App;
