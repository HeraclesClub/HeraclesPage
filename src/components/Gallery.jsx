import React, { useState } from "react";
import "../styles/styles.css";

const Gallery = () => {
    const images = [
        "Heracles1.jpg",
        "Heracles2.jpg",
        "Heracles3.jpg",
        "Heracles4.jpg",
        "Heracles5.jpg",
        "Heracles6.jpg",
        "Heracles7.jpg",
        "Heracles8.jpg",
        "Heracles9.jpg",
        "Heracles10.jpg",
        "Heracles11.jpg",
        "Heracles12.jpg",
        "Heracles13.jpg",
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const changeImage = (index) => {
        const galleryImage = document.getElementById("gallery-image");
        galleryImage.classList.remove("text-focus-in");
        void galleryImage.offsetWidth;
        galleryImage.src = images[index];
        galleryImage.classList.add("text-focus-in");
    };

    const handlePrev = () => {
        const newIndex = (currentIndex - 1 + images.length) % images.length;
        setCurrentIndex(newIndex);
        changeImage(newIndex);
    };

    const handleNext = () => {
        const newIndex = (currentIndex + 1) % images.length;
        setCurrentIndex(newIndex);
        changeImage(newIndex);
    };

    return (
        <div className="gallery-container">
            <button className="nav-button translucent-button" id="prev-button" onClick={handlePrev}>
                ←
            </button>
            <div className="gallery">
                <img
                    src={images[currentIndex]}
                    alt="Heracles Fitness Club"
                    className="gallery-image"
                    id="gallery-image"
                />
            </div>
            <button className="nav-button translucent-button" id="next-button" onClick={handleNext}>
                →
            </button>
        </div>
    );
};

export default Gallery;