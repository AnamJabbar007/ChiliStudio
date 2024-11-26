const WhatIDo = () => {
  return (
    <section className="w-full mt-10 md:mt-20 border-b border-neutral-700/80 px-2">
      <div id="WhatWeDo" className=" justify-between flex-col md:flex-row flex">
        <div className="md:w-2/5 w-full md:h-screen ">
          <h2 className=" flex md:justify-end justify-start text-base sm:text-lg md:text-xl font-thin">
            01 - WHAT WE DO
          </h2>
        </div>
        <div className="md:w-2/5  h-screen  flex flex-col  ">
          <p className=" md:w-2/3 w-full flex justify-start text-2xl sm:text-3xl md:text-4xl font-thin">
            We aim to revolutionize digital production in the advertising space,
            bringing your ideas to life.
          </p>
          <div className=" md:w-2/3 w-11/12  md:px-0  mt-[10vw] flex flex-col text-xs sm:text-sm md:text-base font-thin">
            <p>
              As a contemporary studio, we use cutting-edge design practices and
              the latest technologies to deliver seamless digital work.
            </p>
            <p className="mt-[2vw]">
              Our commitment to creativity, innovation, and simplicity, paired
              with our agile approach, ensures your journey with us is smooth
              and enjoyable from start to finish.
            </p>
          </div>
        </div>
      </div>
      <div className="md:my-20 my-8 md:w-[64%] w-11/12 mx-auto  flex flex-wrap">
        <p className="text-xs sm:text-sm md:text-base font-thin md:pb-10 pb-5">
          Our services
        </p>
        <div className="service text-2xl md:py-10 py-4 sm:text-3xl md:text-4xl font-thin ">
          We provide captivating design, interactive animations, advanced
          usability, reliable code, and immaculate project coordination. Whether
          you need a campaign built from scratch or assistance at a specific
          phase, we’ve got you covered.
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
