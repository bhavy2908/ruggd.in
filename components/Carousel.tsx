"use client";
import React, { useEffect } from "react";
import "../assets/Carousel.css";

const CarouselComponent: React.FC = () => {
  const carouselItems = [
    {
      src: "http://static.superiorwallpapers.com/images/lthumbs/2016-03/11645_Elephant-runing-in-the-jungle-HD-wild-animal-wallpaper.jpg",
      alt: "Elephant running in the jungle",
    },
    {
      src: "http://static.superiorwallpapers.com/images/lthumbs/2016-03/11645_Elephant-runing-in-the-jungle-HD-wild-animal-wallpaper.jpg",
      alt: "Elephant running in the jungle",
    },
    {
      src: "http://static.superiorwallpapers.com/images/lthumbs/2016-03/11645_Elephant-runing-in-the-jungle-HD-wild-animal-wallpaper.jpg",
      alt: "Elephant running in the jungle",
    },
    {
      src: "http://static.superiorwallpapers.com/images/lthumbs/2016-03/11645_Elephant-runing-in-the-jungle-HD-wild-animal-wallpaper.jpg",
      alt: "Elephant running in the jungle",
    },
    {
      src: "http://static.superiorwallpapers.com/images/lthumbs/2016-03/11645_Elephant-runing-in-the-jungle-HD-wild-animal-wallpaper.jpg",
      alt: "Elephant running in the jungle",
    },
    {
      src: "http://static.superiorwallpapers.com/images/lthumbs/2016-03/11645_Elephant-runing-in-the-jungle-HD-wild-animal-wallpaper.jpg",
      alt: "Elephant running in the jungle",
    },
    {
      src: "http://static.superiorwallpapers.com/images/lthumbs/2016-03/11645_Elephant-runing-in-the-jungle-HD-wild-animal-wallpaper.jpg",
      alt: "Elephant running in the jungle",
    },
    {
      src: "http://static.superiorwallpapers.com/images/lthumbs/2016-03/11645_Elephant-runing-in-the-jungle-HD-wild-animal-wallpaper.jpg",
      alt: "Elephant running in the jungle",
    },
    {
      src: "http://static.superiorwallpapers.com/images/lthumbs/2016-03/11645_Elephant-runing-in-the-jungle-HD-wild-animal-wallpaper.jpg",
      alt: "Elephant running in the jungle",
    },
  ];

  useEffect(() => {
    const swiftUpElements = document.querySelectorAll(".swift-up-text");
    swiftUpElements.forEach((elem) => {
      const words = elem.textContent!.split(" ");
      elem.innerHTML = "";
      words.forEach((el, index) => {
        words[index] = `<span><i>${words[index]}</i></span>`;
      });
      elem.innerHTML = words.join(" ");
      const children = document.querySelectorAll("span > i");
      children.forEach((node, index) => {
        (node as HTMLElement).style.animationDelay = `${index * 0.2}s`;
      });
    });
  }, []);

  return (
    <div className="container-box">
      <div className="container2">
        <div className="lamp-img">
          <img
            src="https://i.pinimg.com/474x/24/ed/e0/24ede0000cc3e1b22582fa5f36cfb6f2.jpg"
            alt="Lamp"
          />
        </div>
        <div id="carousel">
          {carouselItems.map((item, index) => (
            <div
              key={index}
              style={
                {
                  "--_image-url": `url(${item.src})`,
                } as React.CSSProperties
              }
            >
              <img src={item.src} alt={item.alt} loading="lazy" />
            </div>
          ))}
          <div className="carousel-ground"></div>
        </div>
      </div>
      <section className="container3">
        <h1 className="swift-up-text">unleash the</h1>
        <h1 className="swift-up-text" style={{ color: "#186F65" }}>
          elegance
        </h1>
        <h1 className="swift-up-text">
          underfoot.
        </h1>
        <button className="swift-up-text shop-now-btn">Discover Now</button>
      </section>
    </div>
  );
};

export default CarouselComponent;
