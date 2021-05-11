import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";

import './assets/stylesheets/application.scss';
import App from "./components/app";
import ScrollToTop from "./scroll_top";
import { HomeContextProvider } from "./home_context";
import 'mapbox-gl/dist/mapbox-gl.css';


const root = document.getElementById('root');
if (root) {
  ReactDOM.render(
    <Router>
      <ScrollToTop />
      <HomeContextProvider>
        <App />
      </HomeContextProvider>
    </Router>, root
  );
}
