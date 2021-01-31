import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";

import './assets/stylesheets/application.scss';
import App from "./components/app";
import { HomeContextProvider } from "./home_context";


const root = document.getElementById('root');
if (root) {
  ReactDOM.render(
    <Router>
      <HomeContextProvider>
        <App />
      </HomeContextProvider>
    </Router>, root
  );
}
