"use client";
import React, { useEffect } from "react";
import "../assets/Carousel.css";

const CarouselComponent: React.FC = () => {
  const carouselItems = [
    {
      src: "https://5.imimg.com/data5/SELLER/Default/2023/5/305639688/VA/II/TR/68642660/versace-luxury-rug-500x500.jpg",
      alt: "Versace luxury rug",
    },
    {
      src: "https://media.karousell.com/media/photos/products/2021/5/20/formula_1_wool_rug_thick_pile_1621476763_723a3767_progressive.jpg",
      alt: "Formula 1 wool rug",
    },
    {
      src: "https://5.imimg.com/data5/SELLER/Default/2023/9/344842391/OW/AY/XG/87155868/rfgtht-500x500.jpg",
      alt: "Colorful abstract rug",
    },
    {
      src: "https://letsrug.in/cdn/shop/files/014E4F37-FB2C-4C1E-A005-A2FBE026D6EF.png?v=1695576857&width=416",
      alt: "Geometric pattern rug",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe1AkAcOzKFrnPOrcIqj9AlGgzmogVMN1OhA&s",
      alt: "Circular pattern rug",
    },
    {
      src: "https://i.etsystatic.com/33539386/r/il/a127ec/4123396508/il_fullxfull.4123396508_i0jr.jpg",
      alt: "Vintage style rug",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGttiFqHhETyzBwECFStbCL1GsVCLWI3PmNg&s",
      alt: "Modern abstract rug",
    },
    {
      src: "https://m.media-amazon.com/images/I/71qKIhTTRJS._AC_UF894,1000_QL80_.jpg",
      alt: "Bohemian style rug",
    },
    {
      src: "https://www.travelsintranslation.com/wp-content/uploads/2021/07/Punk-Rock-Stars-Social-Distortion-Band-Area-Rug-Music-CV60024-Rug-Carpet.jpg",
      alt: "Punk rock band rug",
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
        <h1 className="swift-up-text">underfoot.</h1>
        <button className="swift-up-text shop-now-btn shine">
          Discover Now
        </button>
      </section>
    </div>
  );
};

export default CarouselComponent;
