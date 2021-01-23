import React from "react";
import { Switch, Route } from "react-router-dom";

import Navbar from "./navbar";
import Home from "./home_page/home";
import Description from "./description";
import Footer from "./footer";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/description">
          <Description />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
