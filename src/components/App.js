import React from "react";
import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import { Route, Redirect, Switch } from "react-router-dom";
import Checkout from "./Checkout/Checkout";
import Privacy from "./Privacy/Privacy";
import Tranding from "./RequestPage/Tranding"
import "../css/styles.css"
import RequestPage from "./RequestPage/Request";

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
      <Route exact path="/purchase">
        <RequestPage />
      </Route>
      <Redirect to="/" />
    </Switch>
  </>
  )
}

export default App;
