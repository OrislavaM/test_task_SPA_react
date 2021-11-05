import React, { useEffect, useState } from "react";
import CardList from "../components/UI/Card/Card";
import "../Styles/Products.css";

function Products() {
    const [cards, setCards] = useState([]);

    const getCardRequest = async () => {
        const url = "https://api.thedogapi.com/v1/breeds?limit=8&page=9";

        const response = await fetch(url);
        const responseJson = await response.json();

        console.log(responseJson);
        setCards(responseJson);
    };

    useEffect(() => {
        getCardRequest();
    }, []);

    return (
        <div className="container">
            <h3>Product Page</h3>
            <div className="products">
                <CardList cards={cards} />
            </div>
        </div>
    );
}

export default Products;
