'use client'
import React, { useEffect, useRef } from "react";

const ProductsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scRef = useRef<HTMLSpanElement>(null);
  const rRef = useRef<HTMLSpanElement>(null);
  const oRef = useRef<HTMLSpanElement>(null);
  const llRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const sc = scRef.current;
    const r = rRef.current;
    const o = oRef.current;
    const ll = llRef.current;

    if (!section || !sc || !r || !o || !ll) return;

    const transformLetters = () => {
      const windowHeight = window.innerHeight;
      const scrollPosition = window.scrollY + windowHeight / 3;
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (
        scrollPosition > sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        const scrollInSection = scrollPosition - sectionTop;

        sc.style.transform = `translate3d(0, ${-scrollInSection * 0.6}px, 0)`;
        r.style.transform = `translate3d(0, ${-scrollInSection * 0.6}px, 0)`;
        o.style.transform = `translate3d(0, ${-scrollInSection * 0.6}px, 0)`;
        ll.style.transform = `translate3d(0, ${-scrollInSection * 0.6}px, 0)`;
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            window.addEventListener("scroll", transformLetters);
            transformLetters();
          } else {
            window.removeEventListener("scroll", transformLetters);
          }
        });
      },
      { threshold: 0 }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", transformLetters);
    };
  }, []);

  return (
    <div ref={sectionRef} id="scroll-section">
      <div className="letters">
        <span>P</span>
        <span ref={scRef} className="sc">
          r
        </span>
        <span>o</span>
        <span ref={rRef} className="r">
          d
        </span>
        <span>u</span>
        <span ref={oRef} className="o">
          c
        </span>
        <span>t</span>
        <span ref={llRef} className="ll">
          s
        </span>
      </div>
    </div>
  );
};

export default ProductsSection;
