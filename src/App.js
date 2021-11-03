import "./Styles/App.css";
import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Products from "./Pages/Products";

function App() {
    return (
        <BrowserRouter>
            <Route path="/Home">
                <Home />
            </Route>
            <Route path="/Products">
                <Products />
            </Route>
            <div>Work App!</div>
        </BrowserRouter>
    );
}

export default App;
