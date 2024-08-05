'use client'
import React, { useEffect } from "react";

const SmoothScroll: React.FC = () => {
  useEffect(() => {
    const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      const targetId = e.currentTarget.getAttribute("href");
      if (targetId) {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    const links = document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]');
    links.forEach((link) => {
      link.addEventListener("click", smoothScroll as unknown as EventListener);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener(
          "click",
          smoothScroll as unknown as EventListener
        );
      });
    };
  }, []);

  return null;
};

export default SmoothScroll;
