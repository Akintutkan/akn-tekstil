import React from "react";
import ReactDOM from "react-dom/client";
import {render} from "react-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import "./index.scss";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { CartProvider } from "./contexts/cart.context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <Router>
  
       
          <CartProvider>
        <App />
          </CartProvider>
        
    </Router>
    </Provider>
  </React.StrictMode>
);
