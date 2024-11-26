import { useEffect, useState, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import gsap from "gsap";
import Canvas from "./Canvas";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import WhatIDo from "./components/WhatIDo";
import data from "./data";

import "./index.css";

export default function App() {
  const [showCanvas, setShowCanvas] = useState(false);
  const growingSpan = useRef(null);
  const scrollRef = useRef(null);
  const cursorRef = useRef(null);
  const mainRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const main = mainRef.current;

    // Mouse move animation
    const handleMouseMove = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
      });
    };

    main.addEventListener("mousemove", handleMouseMove);

    return () => {
      main.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Handler for mouse enter
  const handleMouseEnter = () => {
    const cursor = cursorRef.current;
    cursor.innerHTML = `<img 
      src="https://thirtysixstudio.com/dist/pepper.529367f1.png" 
      alt="View More" 
      style=" width: 30px;" 
    />`;
    gsap.to(cursor, {
      scale: 4,
    });
  };

  // Handler for mouse leave
  const handleMouseLeave = () => {
    const cursor = cursorRef.current;
    cursor.textContent = "";
    gsap.to(cursor, {
      scale: 1,
    });
  };
  // Locomotive Scroll setup
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    const locomotiveScroll = new LocomotiveScroll({
      el: scrollContainer,
      smooth: true,
      smartphone: { smooth: true },
      tablet: { smooth: true },
    });

    // Update scroll on content changes
    setTimeout(() => locomotiveScroll.update(), 100);

    return () => locomotiveScroll.destroy();
  }, [showCanvas]);

  const toggleCanvas = (e) => {
    const spanElement = growingSpan.current;

    setShowCanvas((prevState) => {
      if (!prevState) {
        if (typeof window.scrollTo === "function") {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }
        gsap.set(spanElement, {
          top: e.clientY,
          left: e.clientX,
        });

        gsap.to("#cursor", {
          delay: 1,
          backgroundColor: "black",
        });
        // Animate opening
        gsap
          .timeline()
          .to("body", {
            color: "#000",
            backgroundColor: "#FD2C2A",
            duration: 1.2,
            ease: "power2.inOut",
          })

          .to(
            "svg text",
            { fill: "#000", duration: 1.2, ease: "power2.inOut" },
            "<"
          )

          .to(
            spanElement,
            {
              scale: 1000,
              duration: 1.2,
              ease: "power2.inOut",
              onComplete: () => {
                gsap.set(spanElement, {
                  scale: 0,
                  clearProps: "all",
                });
              },
            },
            "<"
          );
      } else {
        // Animate closing
        gsap
          .timeline()
          .to("body", {
            color: "#fff",
            backgroundColor: "#000",
            duration: 1.2,
            ease: "power2.inOut",
          })
          .to("#cursor", {
            backgroundColor: "#FD2C2A",
          })
          .to(
            "svg text",
            { fill: "#fff", duration: 1.2, ease: "power2.inOut" },
            "<"
          );
      }

      return !prevState;
    });
  };

  return (
    <main id="main" ref={mainRef}>
      <div
        ref={scrollRef}
        data-scroll-container
        className="overflow-x-hidden md:overflow-visible"
      >
        <div id="cursor" ref={cursorRef} className="cursor z-40 w-5 h-5"></div>
        <Navbar />
        <span
          ref={growingSpan}
          className="growing rounded-full top-0 block fixed  w-5 h-5"
        ></span>
        <div className="w-full relative min-h-screen">
          {showCanvas &&
            data[0].map((canvasDetails, index) => (
              <Canvas key={index} details={canvasDetails} />
            ))}
          <HeroSection
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            toggleCanvas={toggleCanvas}
          />
        </div>
        <div className="w-full relative min-h-screen">
          {showCanvas &&
            data[1].map((canvasDetails, index) => (
              <Canvas key={index} details={canvasDetails} />
            ))}
          <WhatIDo />
        </div>
      </div>
    </main>
  );
}
