import React from "react";
import "../Card/Card.css";

const Card = (props) => {
    return (
        <>
            {props.cards.map((card) => (
                <div className="dogs_card">
                    <img src={card.image.url} alt="dogs"></img>
                    <div className="dogs_information">
                        <p className="dogs_name">{card.name}</p>
                        <p className="dogs_bred">{card.bred_for}</p>
                        <p className="dogs_temperament">{card.temperament}</p>
                    </div>
                </div>
            ))}
        </>
    );
};
export default Card;
