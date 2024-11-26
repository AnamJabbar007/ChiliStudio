import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const HeroSection = ({ toggleCanvas , onMouseEnter, onMouseLeave }) => {
  const circle = useRef();

  useGSAP(() => {
    gsap.to(circle.current, {
      rotate: 360,
      duration: 15,
      repeat: -1,
      ease: "linear",
    });
  });

  return (
    <section className="w-full relative">
      <div className="mx-auto gap-x-24 flex flex-col md:flex-row justify-center items-center px-4">
        <div className="bg-red-40 w-full md:w-[28%] p-4">
          <h3 className="mt-10 text-2xl sm:text-3xl md:text-4xl font-thin">
            At Thirtysixstudio,
            <br /> we build immersive digital experiences for brands with a
            purpose.
          </h3>
          <p className="mt-6 text-sm sm:text-base md:text-lg font-thin">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
            voluptatem repellendus esse optio cum vel fuga maxime adipisci iure,
            tempora sapiente.
          </p>
          <p className="mt-6 text-sm sm:text-base md:text-lg font-thin">scroll</p>
        </div>

        <div className="flex px-6 items-center justify-center mt-8 md:mt-0">
          <svg ref={circle} width="170" height="170" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <path
                id="fullCirclePath"
                d="M85,85 m-70,0 a70,70 0 1,1 140,0 a70,70 0 1,1 -140,0"
                fill="none"
              />
            </defs>
            <text fill="#fff" fontSize="14" fontWeight="bold" letterSpacing="1">
              <textPath
                href="#fullCirclePath"
                startOffset="0%"
                textLength="439"
              >
                THIRTYSIXSTUDIO — FOR ALL THINGS DIGITAL PRODUCTION —
              </textPath>
            </text>
          </svg>
        </div>
      </div>

      <div id="heading"
       onClick={(e) => toggleCanvas(e)}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave} className="py-12 mt-10 md:mt-20 border-b border-neutral-700/80 overflow-x-hidden">
      <div className="overlay  z-50"></div>
        <h1 
          className="text-[25vw] z-30 sm:text-[25vw] md:text-[15vw] lg:text-[15vw] xl:text-[15vw] w-[95%] mx-auto leading-[0.9] cursor-pointer relative group"
         
        >
          Thirty
          <br className="md:hidden block" />
          six
          <br className="md:hidden block" />
          studio
          {/* Hover Text */}
          {/* <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 text-sm sm:text-base md:text-lg text-[#FD2C2A] hidden group-hover:block">
            Yeah! click there
          </span> */}
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;
