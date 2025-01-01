"use client";

import React, { useEffect, useRef, useState } from "react";

const ImageGallery: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const container = containerRef.current;
        const rect = container.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const scrollPosition = window.scrollY;
        const containerHeight = container.offsetHeight;

        if (scrollPosition < containerHeight - windowHeight) {
          const newProgress = Math.min(
            scrollPosition / (containerHeight - windowHeight),
            1
          );
          setProgress(newProgress);
        } else {
          setProgress(1);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const images = [
    "https://5.imimg.com/data5/SELLER/Default/2023/5/305639688/VA/II/TR/68642660/versace-luxury-rug-500x500.jpg",
    "https://media.karousell.com/media/photos/products/2021/5/20/formula_1_wool_rug_thick_pile_1621476763_723a3767_progressive.jpg",
    "https://5.imimg.com/data5/SELLER/Default/2023/9/344842391/OW/AY/XG/87155868/rfgtht-500x500.jpg",
    "https://letsrug.in/cdn/shop/files/014E4F37-FB2C-4C1E-A005-A2FBE026D6EF.png?v=1695576857&width=416",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe1AkAcOzKFrnPOrcIqj9AlGgzmogVMN1OhA&s",
    "https://i.etsystatic.com/33539386/r/il/a127ec/4123396508/il_fullxfull.4123396508_i0jr.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGttiFqHhETyzBwECFStbCL1GsVCLWI3PmNg&s",
    "https://m.media-amazon.com/images/I/71qKIhTTRJS._AC_UF894,1000_QL80_.jpg",
  ];

  const getRowStyle = (rowIndex: number) => {
    const scale = 1 + (1 - progress) * 2;
    const xTranslate =
      rowIndex === 0 ? -30 + progress * 30 : 13 - progress * 13;
    const yTranslate =
      rowIndex === 0 ? -100 + progress * 100 : 15 - progress * 0;

    return {
      transform: `
        scale(${scale})
        translateX(${xTranslate}%)
        translateY(${yTranslate}%)
      `,
    };
  };

  return (
    <div ref={containerRef} className="gallery-container">
      <div className="gallery-wrapper">
        <div className="gallery-grid">
          {[0, 1].map((rowIndex) => (
            <div
              key={rowIndex}
              className="gallery-row"
              style={getRowStyle(rowIndex)}
            >
              {images
                .slice(rowIndex * 4, (rowIndex + 1) * 4)
                .map((src, index) => (
                  <div key={index} className="image-container">
                    <img
                      src={src}
                      alt={`Gallery image ${rowIndex * 4 + index + 1}`}
                    />
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .gallery-container {
          height: 300vh;
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
        }
        .gallery-wrapper {
          position: sticky;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .gallery-grid {
          display: flex;
          flex-direction: column;
          width: 90%;
          height: 80%;
          gap: -10px;
        }
        .gallery-row {
          display: flex;
          justify-content: space-between;
          height: 50%;
          gap: 35px;
          margin-bottom: -10px;
        }
        .image-container {
          flex: 1;
          height: 100%;
          overflow: hidden;
        }
        .image-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      `}</style>
    </div>
  );
};

export default ImageGallery;
