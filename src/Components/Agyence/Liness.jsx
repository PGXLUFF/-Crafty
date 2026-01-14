import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import imageR from '../../assets/image4/pexels-dzmitry-tsikhamirau-2156395575-34201577.jpg'

gsap.registerPlugin(ScrollTrigger);

const Liness = () => {
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(textRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(imageRef.current, {
        opacity: 0,
        scale: 0.8,
        rotate: 20,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.3,
      });

      gsap.from(statsRef.current, {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power3.out",
        delay: 0.8,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="h-[100vh] flex flex-col md:flex-row justify-between items-center px-10 pb-10 md:px-20 bg-black text-white overflow-hidden"
    >
      {/* Left Content */}
      <div className="max-w-xl space-y-6" ref={textRef}>
        <h1 className="text-5xl md:text-6xl font-semibold leading-tight">
          Elevate Your Brand <br /> with Next-Gen
        </h1>
        <p className="text-gray-300 text-lg">
          At Crafty Socials, we craft future-ready solutions that transform brands,
          enhance user experiences, and drive innovation.
        </p>

        <button className="bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 rounded-md font-medium text-white hover:opacity-90 transition">
          Learn More
        </button>

        <div className="flex items-center gap-3 pt-4">
          <div className="flex -space-x-2">
            <img src="https://i.pravatar.cc/40?img=1" alt="" className="w-10 h-10 rounded-full border-2 border-[#07091a]" />
            <img src="https://i.pravatar.cc/40?img=2" alt="" className="w-10 h-10 rounded-full border-2 border-[#07091a]" />
            <img src="https://i.pravatar.cc/40?img=3" alt="" className="w-10 h-10 rounded-full border-2 border-[#07091a]" />
          </div>
          <span className="text-cyan-400 text-lg font-semibold">27+</span>
        </div>
      </div>

      {/* Right Visual */}
      <div ref={imageRef} className="relative w-full h-full mt-12 md:mt-0">
        <img
          src= {imageR}
          // replace with your image (from the one you sent)
          alt="3D swirl"
          className=""
        />
        <div className="absolute bottom-5 right-5 w-40 h-15 flex
         justify-center bg-gradient-to-r from-transparent via-blue-400 to-transparent backdrop-blur-md">
          <p className=" text-1xl  text-gray-100 font-[font1]">AI-Powered Web Development</p>
        </div>
        <div
        ref={statsRef}
        className="  left-10 flex gap-10 text-cyan-400 text-sm"
      >
        <div>
          <h3 className="text-xl font-bold text-white">215K</h3>
          <p className="text-gray-400">User-Centered</p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">70%</h3>
          <p className="text-gray-400">Market Trends</p>
        </div>
      </div>
      </div>

      {/* Stats Section */}
      
    </section>
  );
};

export default Liness;
