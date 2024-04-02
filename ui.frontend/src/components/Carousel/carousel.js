import React, { useState } from 'react';
import './carousel.css';

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const cards = [
        {
            image: 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1707298920/Croma%20Assets/Entertainment/Television/Images/228393_jgdnwd.png?tr=w-360',
            description: 'Description 1'
        },
        {
            image: 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1709122842/Croma%20Assets/Communication/Mobiles/Images/305041_i5rm5i.png?tr=w-360',
            description: 'Description 2'
        },
        {
            image: 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1697175643/Croma%20Assets/Computers%20Peripherals/Tablets%20and%20iPads/Images/302273_gjmw3u.png?tr=w-360',
            description: 'Description 3'
        },
        {
            image: 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1675864156/Croma%20Assets/Communication/Chargers%20and%20Batteries/Images/256184_0_smisal.png?tr=w-360',
            description: 'Description 4'
        },
        {
            image: 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1703767747/Croma%20Assets/Large%20Appliances/Refrigerator/Images/273622_0_cjppke.png?tr=w-360',
            description: 'Description 5'
        },
        {
            image: 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1697621846/Croma%20Assets/Small%20Appliances/Microwave%20or%20OTG/Images/196953_ez1bkz.png?tr=w-360',
            description: 'Description 6'
        }
    ];

    const totalCards = cards.length;

    const nextSlide = () => {
        if (currentIndex < totalCards - 1) {
            setCurrentIndex((prevIndex) => prevIndex + 1);
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prevIndex) => prevIndex - 1);
        }
    };

    return (
        <div className="carousel-container">
            <button onClick={prevSlide} disabled={currentIndex === 0}>&lt;</button>
            <div className="card-container">
                {cards.slice(currentIndex, currentIndex + 4).map((card, index) => (
                    <div className="card" key={index}>
                        <img src={card.image} alt={`Card ${index + 1}`} />
                        <p>{card.description}</p>
                    </div>
                ))}
            </div>
            <button onClick={nextSlide} disabled={currentIndex === totalCards - 4}>&gt;</button>
        </div>
    );
};

export default Carousel;
