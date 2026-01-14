import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Star } from "lucide-react";
import { div } from "motion/react-client";
import image1 from "../../assets/image4/pexels-dzmitry-tsikhamirau-2156395575-34201577.jpg"

gsap.registerPlugin(ScrollTrigger);


const testimonials = [
  {
    text: "CraftySocials transformed our digital presence with cutting-edge AI solutions. Our website is now faster, smarter, and more engaging.",
  },
  {
    text: "The UX/UI design by CraftySocials is truly next-level. Our customers love the intuitive experience, and our engagement rates have soared.",
  },
  {
    text: "Working with CraftySocials was a game-changer. Their expertise in digital innovation helped us scale faster and reach a global audience.",
  },
  {
    text: "We needed a digital transformation, and CraftySocials delivered beyond our expectations — from Web3 integration to AI automation.",
  },
];

const DigitalExcellence = ()=> {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".heading", {
        y: 50,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      });

      gsap.from(cardsRef.current, {
        y: 60,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="w-full h-full  ">
        <div className="w-full text-center p-10 pb-30 lg:p-10 items-center flex-col lg:flex-row  flex justify-between">
        <h1 className="heading text-[50px] sm:text-[4vw] font-[font1] mb-6">
          Redefining Digital <br /> Excellence
        </h1>
        <p className="text-gray-300 max-w-2xl ">
         we push the boundaries of innovation to deliver cutting-edge
          digital solutions that transform businesses.
        </p>
        </div>
    <section
      ref={sectionRef}
      className="relative w-full h-full flex  justify-center items-center  flex-col lg:flex-row   bg-black text-white pt-10 pb-60  "
    >
        <img src={image1} alt=""  className="md:w-[40vw] w-60 "/>
      {/* Background Glow Effect */}
      <div className="absolute left-10 z-10 w-[300px] h-[300px] bg-gradient-to-r from-cyan-500 via-blue-700 to-purple-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>

      {/* Content */}
     

      {/* Testimonials */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:p-10 gap-10 w-[80vw]">
        {testimonials.map((t, i) => (
          <div
            key={i}
            ref={(el) => (cardsRef.current[i] = el)}
            className="bg-gradient-to-br from-[#111827] to-[#1e293b] rounded-2xl p-6 shadow-lg border border-gray-700 hover:scale-105 transition-transform"
          >
            <div className="flex gap-1 mb-3">
              {[...Array(5)].map((_, j) => (
                <Star key={j} size={18} className="text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <p className="text-gray-300 text-sm">{t.text}</p>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
}

export default DigitalExcellence;