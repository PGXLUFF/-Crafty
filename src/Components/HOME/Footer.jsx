import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CraftyS from '../../assets/image4/Craftysocials .png'

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);
  const headerRef = useRef(null);
  const logoRef = useRef(null);
  const socialRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.from(headerRef.current, {
        y: -50,
        opacity: 0,
        duration: 0.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top bottom-=100",
          toggleActions: "play none none reverse",
        },
      });

      // Logo animation
      gsap.from(logoRef.current, {
        scale: 0.8,
        opacity: 0,
        duration: 0.5,
        ease: "elastic.out(1, 0.5)",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top bottom-=200",
          toggleActions: "play none none reverse",
        },
      });

      // Social icons stagger
      gsap.from(".social-icon", {
        x: -30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top bottom-=150",
          toggleActions: "play none none reverse",
        },
      });

      // Contact info stagger
      gsap.from(".contact-card", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contactRef.current,
          start: "top bottom-=100",
          toggleActions: "play none none reverse",
        },
      });

      // Footer links
      gsap.from(".footer-link", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top bottom-=100",
          toggleActions: "play none none reverse",
        },
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  // Hover animations
  const handleSocialHover = (e) => {
    gsap.to(e.currentTarget, {
      scale: 1.2,
      rotation: 5,
      duration: 0.3,
      ease: "back.out(2)",
    });
  };

  const handleSocialLeave = (e) => {
    gsap.to(e.currentTarget, {
      scale: 1,
      rotation: 0,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleLinkHover = (e) => {
    gsap.to(e.currentTarget, {
      x: 5,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleLinkLeave = (e) => {
    gsap.to(e.currentTarget, {
      x: 0,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  return (
    <div ref={footerRef} className="h-full flex flex-col">
      {/* Spacer */}
      <div className="flex-1 bg-gray-50"></div>

      {/* Yellow CTA Section */}
      <div className="bg-black flex justify-between  text-white py-20 px-8 text-color-white">
        <div ref={headerRef} className="w-full ">
          <h2 className="text-[4vw]  font-light mb-8">
            Let&apos;s work <span className="font-bold">together</span>
          </h2>
          <div className="flex gap-6 text-lg">
            <button className="w-30 h-10 rounded-2xl border-1 border-amber-50">  <a
              href="#"
              className="hover:underline font-medium transition-all hover:text-amber-200"
              onMouseEnter={handleLinkHover}
              onMouseLeave={handleLinkLeave}
            >
              Get in Touch
            </a></button>
            <button className="w-30 h-10 rounded-2xl border-1 border-amber-50">
              <a
                href="#"
                className="hover:underline font-medium transition-all"
                onMouseEnter={handleLinkHover}
                onMouseLeave={handleLinkLeave}
              >
                Careers
              </a></button>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-white py-3 px-8">
        <div className="w-full mx-auto">
          {/* Top Section - Social & Contact */}
          <div className="flex flex-col md:flex-row justify-between items-start mb-16">
            {/* Social Icons */}
            <div ref={socialRef} className="flex gap-6 mb-8 md:mb-0">
              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                className="social-icon text-2xl hover:text-gray-600 transition-colors"
                onMouseEnter={handleSocialHover}
                onMouseLeave={handleSocialLeave}
              >
                <svg
                  className="w-6 h-6"
                  fill="skyblue"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19 0h-14C2.2 0 0 2.2 0 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5V5c0-2.8-2.2-5-5-5zM7.1 20.4H3.6V9h3.5v11.4zM5.3 7.5c-1.1 0-1.9-.8-1.9-1.9S4.2 3.8 5.3 3.8s1.9.8 1.9 1.9c.1 1.1-.8 1.8-1.9 1.8zM20.4 20.4h-3.5v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.7H9.5V9h3.3v1.6h.1c.5-.9 1.7-1.9 3.5-1.9 3.7 0 4.4 2.4 4.4 5.5v6.2z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                className="social-icon text-2xl hover:text-gray-600 transition-colors"
                onMouseEnter={handleSocialHover}
                onMouseLeave={handleSocialLeave}
              >
                <svg
                  className="w-6 h-6"
                  fill="red"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 2 .2 2.5.4.6.2 1 .5 1.5 1 .5.5.8.9 1 1.5.2.5.4 1.3.4 2.5.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 2-.4 2.5-.2.6-.5 1-.9 1.5-.5.5-.9.8-1.5 1-.5.2-1.3.4-2.5.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-2-.2-2.5-.4-.6-.2-1-.5-1.5-1-.5-.5-.8-.9-1-1.5-.2-.5-.4-1.3-.4-2.5-.1-1.3-.1-1.7-.1-4.9s0-3.6.1-4.9c.1-1.2.2-2 .4-2.5.2-.6.5-1 .9-1.5.5-.5.9-.8 1.5-1 .5-.2 1.3-.4 2.5-.4C8.4 2.2 8.8 2.2 12 2.2m0-2.2C8.7 0 8.3 0 7 .1 5.6.2 4.5.3 3.7.5c-.9.3-1.7.7-2.4 1.4S.3 3.3.1 4.2C0 5 .1 6.1.1 7.5 0 8.8 0 9.2 0 12s0 3.2.1 4.5c.1 1.4.2 2.5.4 3.3.3.9.7 1.7 1.4 2.4.7.7 1.5 1.1 2.4 1.4.8.2 1.9.4 3.3.4 1.3.1 1.7.1 4.9.1s3.6 0 4.9-.1c1.4-.1 2.5-.2 3.3-.4.9-.3 1.7-.7 2.4-1.4.7-.7 1.1-1.5 1.4-2.4.2-.8.4-1.9.4-3.3.1-1.3.1-1.7.1-4.9s0-3.6-.1-4.9c-.1-1.4-.2-2.5-.4-3.3-.3-.9-.7-1.7-1.4-2.4-.7-.7-1.5-1.1-2.4-1.4C18.5.3 17.4.2 16 .1 14.7 0 14.3 0 12 0z" />
                  <circle cx="12" cy="12" r="3.5" />
                  <circle cx="18.4" cy="5.6" r="1.1" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://facebook.com"
                className="social-icon text-2xl hover:text-gray-600 transition-colors"
                onMouseEnter={handleSocialHover}
                onMouseLeave={handleSocialLeave}
              >
                <svg
                  className="w-6 h-6"
                  fill="blue"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073c0 6.03 4.388 11.037 10.125 11.954v-8.46H7.078v-3.494h3.047V9.797c0-3.02 1.791-4.687 4.533-4.687 1.312 0 2.686.235 2.686.235v2.953h-1.513c-1.492 0-1.956.93-1.956 1.885v2.264h3.328l-.532 3.494h-2.796v8.46C19.612 23.11 24 18.104 24 12.073z" />
                </svg>
              </a>
            </div>


            {/* Contact Cards */}
            <div ref={contactRef} className="flex flex-col md:flex-row gap-12">
              {/* Raleigh */}
              <div className="contact-card">
                <h3 className="font-bold text-gray-900 mb-2">Contact</h3>
                <p className="text-gray-600 text-sm mb-1">

                </p>
                <p className="text-gray-600 text-sm mb-2">
                info@craftysocials.com</p>
                <a
                  href="tel:9198336413"
                  className="text-black text-sm hover:underline"
                >
                  93178 00911
                </a>
              </div>

              {/* Charlotte */}
              <div className="contact-card">
                <h3 className="font-bold text-gray-900 mb-2">Address</h3>
                <p className="text-gray-600 text-sm mb-1">
                  Sharma complex 2nd floor bcs
                </p>
                <p className="text-gray-600 text-sm mb-2">New Shimla</p>
                <a
                  href="tel:7043337272"
                  className="text-gray-900 text-sm hover:underline"
                >
                </a>
              </div>
            </div>
          </div>
        <div className="w-full h-full relative">
          {/* Bottom Section - Logo & Links */}
          <h3 className='text-[10vw] uppercase flex align-center justify-center font-[font2] text-black'>CRAFTY Soicals</h3>
          <img  className="w-[10vw] absolute bottom-[13vw] left-[16vw] h-{10vh}" src={CraftyS} alt="" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
