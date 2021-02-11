import React from "react";
import { Switch, Route } from "react-router-dom";

import Navbar from "./navbar";
import Home from "./home_page/home";
import Description from "./description/description";
import Disponibilite from "./disponibilite/disponibilite";
import Emplacement from "./emplacement/emplacement";
import Activite from "./activite/activite";
import Lien from "./lien/lien";
import Footer from "./footer";

function App() {
  return (
    <div className="wrapper">
      <div className="header">
        <Navbar />
      </div>
      <div className="main-content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/description">
            <Description />
          </Route>
          <Route path="/disponibilite&tarif">
            <Disponibilite />
          </Route>
          <Route path="/emplacement">
            <Emplacement />
          </Route>
          <Route path="/activite">
            <Activite />
          </Route>
          <Route path="/lien">
            <Lien />
          </Route>
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
