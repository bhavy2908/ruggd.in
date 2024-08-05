'use client'
import React, { useState } from "react";
import "../assets/Carousel.css"

interface CarouselItem {
  imageUrl: string;
  link: string;
  index: number;
}

const CarouselComponent: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const carouselItems: CarouselItem[] = [
    {
      imageUrl:
        "https://5.imimg.com/data5/SELLER/Default/2023/5/305639688/VA/II/TR/68642660/versace-luxury-rug-500x500.jpg",
      link: "",
      index: 1,
    },
    {
      imageUrl:
        "https://media.karousell.com/media/photos/products/2021/5/20/formula_1_wool_rug_thick_pile_1621476763_723a3767_progressive.jpg",
      link: "",
      index: 2,
    },
    {
      imageUrl:
        "https://5.imimg.com/data5/SELLER/Default/2023/9/344842391/OW/AY/XG/87155868/rfgtht-500x500.jpg",
      link: "",
      index: 3,
    },
    {
      imageUrl:
        "https://letsrug.in/cdn/shop/files/014E4F37-FB2C-4C1E-A005-A2FBE026D6EF.png?v=1695576857&width=416",
      link: "",
      index: 4,
    },
    {
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe1AkAcOzKFrnPOrcIqj9AlGgzmogVMN1OhA&s",
      link: "",
      index: 5,
    },
    {
      imageUrl:
        "https://i.etsystatic.com/33539386/r/il/a127ec/4123396508/il_fullxfull.4123396508_i0jr.jpg",
      link: "",
      index: 6,
    },
    {
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGttiFqHhETyzBwECFStbCL1GsVCLWI3PmNg&s",
      link: "",
      index: 7,
    },
    {
      imageUrl:
        "https://m.media-amazon.com/images/I/71qKIhTTRJS._AC_UF894,1000_QL80_.jpg",
      link: "",
      index: 8,
    },
    {
      imageUrl:
        "https://www.travelsintranslation.com/wp-content/uploads/2021/07/Punk-Rock-Stars-Social-Distortion-Band-Area-Rug-Music-CV60024-Rug-Carpet.jpg",
      link: "",
      index: 9,
    },
    {
      imageUrl:
        "https://i.etsystatic.com/36437972/r/il/1554f8/4100559936/il_fullxfull.4100559936_sju7.jpg",
      link: "",
      index: 10,
    },
    {
      imageUrl:
        "https://preview.redd.it/i-made-a-gta-san-andreas-rug-v0-88y634hihb091.jpg?width=640&crop=smart&auto=webp&s=996696297d9500c506850251d4512a3b8ed95dee",
      link: "",
      index: 11,
    },
  ];

  const handleControlClick = (direction: "left" | "right") => {
    setActiveIndex((prevIndex) => {
      if (direction === "left") {
        return prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1;
      } else {
        return prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  return (
    <div className="carousel">
      <div className="lamp-img">
        <img
          src="https://i.pinimg.com/474x/24/ed/e0/24ede0000cc3e1b22582fa5f36cfb6f2.jpg"
          alt="Lamp"
        />
      </div>

      <div className="carousel-control-button left">
        <input
          type="radio"
          name="carousel-control-input"
          onChange={() => handleControlClick("left")}
        />
      </div>
      <div className="carousel-control-button right">
        <input
          type="radio"
          name="carousel-control-input"
          onChange={() => handleControlClick("right")}
          checked={true}
        />
      </div>

      <div className="carousel-rotation-direction">
        <ul
          className="carousel-item-wrapper"
          style={
            { "--_num-elements": carouselItems.length } as React.CSSProperties
          }
        >
          {carouselItems.map((item, index) => (
            <li
              key={item.index}
              className={`carousel-item ${
                index === activeIndex ? "active" : ""
              }`}
              style={
                {
                  "--_index": item.index,
                  "--_image-url": `url('${item.imageUrl}')`,
                } as React.CSSProperties
              }
            >
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                {item.index}
              </a>
            </li>
          ))}
          <li className="carousel-ground"></li>
        </ul>
      </div>
    </div>
  );
};

export default CarouselComponent;