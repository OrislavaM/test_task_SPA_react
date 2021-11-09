import React, { useState, useEffect } from "react";
import Card from "./UI/Card/Card";
import "../components/UI/Loader/Loader.css";
import MyLoader from "./UI/Loader/Loader";

function CardList() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch("https://api.thedogapi.com/v1/breeds?limit=8&page=6")
            .then((res) => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setCards(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            );
    }, []);

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return (
            <div className="my_loader">
                <MyLoader />
            </div>
        );
    } else {
        return <Card cards={cards} />;
    }
}
export default CardList;
