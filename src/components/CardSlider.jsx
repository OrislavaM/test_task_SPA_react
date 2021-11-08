import React, { useState, useEffect } from "react";
import Slide from "./UI/Slider/Slide";

function CardSlider() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch("https://api.thedogapi.com/v1/breeds?limit=8&page=8")
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
        return <div>Loaded...</div>;
    } else {
        return <Slide cards={cards} />;
    }
}
export default CardSlider;
