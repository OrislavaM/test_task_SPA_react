import React from "react";
import CardList from "../components/CardList";
import "../Styles/Products.css";

function Products() {
    return (
        <div className="container">
            <h3>Product Page</h3>
            <div className="products">
                <CardList />
            </div>
        </div>
    );
}

export default Products;
