import React from "react";
import Slider from "react-slick";
import "./Slide.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Slide(props) {
    const settings = {
        focusOnSelect: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 500,
    };
    return (
        <Slider {...settings}>
            {props.cards.map((card) => {
                return (
                    <div className="dogs_card">
                        <img src={card.image.url} alt="dogs"></img>
                        <div className="dogs_information">
                            <p className="dogs_name">{card.name}</p>
                            <p className="dogs_bred">{card.bred_for}</p>
                            <p className="dogs_temperament">
                                {card.temperament}
                            </p>
                        </div>
                    </div>
                );
            })}
        </Slider>
    );
}
