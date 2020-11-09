import React from "react";
import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import { Route, Switch } from "react-router-dom";
import Checkout from "./Checkout/Checkout";
import Privacy from "./Privacy/Privacy";
import "../css/styles.css"

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
