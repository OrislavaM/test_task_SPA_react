import React, { useState, useEffect } from "react";
import Slide from "./UI/Slider/Slide";
import "../components/UI/Loader/Loader.css";
import MyLoader from "./UI/Loader/Loader";

function CardSlider() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch("https://api.thedogapi.com/v1/breeds?limit=9&page=7")
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
            <div className="loader">
                <MyLoader />
            </div>
        );
    } else {
        return <Slide cards={cards} />;
    }
}
export default CardSlider;
