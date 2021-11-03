import "./Styles/App.css";
// import React, { useState } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Navbar from "./components/UI/Navbar/Navbar";
import Footer from "./components/UI/Footer/Footer";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route path="/Home">
                    <Home />
                </Route>
                <Route path="/Products">
                    <Products />
                </Route>
                <Redirect to="/Home" />
            </Switch>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
