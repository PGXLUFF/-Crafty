import React, { useEffect, useRef } from "react";
import { Users, Award, TrendingUp, FileText } from "lucide-react";
import { gsap } from "gsap";

const WhyChooseUs = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const imageRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Initial animations
    tl.from(titleRef.current, { y: -50,  duration: 1 })
      .from(
        imageRef.current,
        { x: -100, scale: 0.8, duration: 1 },
        "-=0.5"
      )
      .from(
        cardsRef.current,
        { x: 100, stagger: 0.2, duration: 0.8 },
        "-=0.8"
      );

    // Hover effects for feature cards
    cardsRef.current.forEach((card) => {
      if (!card) return;

      const icon = card.querySelector(".icon-circle");

      const handleEnter = () => {
        gsap.to(card, { scale: 1.05, duration: 0.3, ease: "power2.out" });
        gsap.to(icon, {
          rotation: 360,
          scale: 1.1,
          duration: 0.5,
          ease: "back.out(1.7)",
        });
      };

      const handleLeave = () => {
        gsap.to(card, { scale: 1, duration: 0.3, ease: "power2.out" });
        gsap.to(icon, {
          rotation: 0,
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        });
      };

      card.addEventListener("mouseenter", handleEnter);
      card.addEventListener("mouseleave", handleLeave);

      // Cleanup event listeners
      return () => {
        card.removeEventListener("mouseenter", handleEnter);
        card.removeEventListener("mouseleave", handleLeave);
      };
    });

    // Floating and wave animations
    gsap.to(".sparkle", {
      y: -20,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: 0.3,
    });

    gsap.to(".wave-shape", {
      y: 15,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, []);

  const features = [
    {
      icon: Users,
      title: "Certified Experts",
      description:
        "Our team of certified digital marketing specialists brings proven expertise in SEO, PPC, social media, and content marketing to drive measurable results for your business.orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    },
    {
      icon: Award,
      title: "Proven Results",
      description:
        "We deliver real, measurable outcomes — from increased website traffic to higher conversion rates — helping your brand achieve its online growth goals.",
    },
    {
      icon: TrendingUp,
      title: "Award Winning",
      description:
        "Our innovative strategies and creative campaigns have been recognized with industry awards, demonstrating our commitment to excellence in digital marketing.",
    },
    {
      icon: FileText,
      title: "Transparent Reporting",
      description:
        "We provide clear, detailed reports on all campaigns, ensuring you can track performance, ROI, and growth with full transparency.",
    },
  ];

  return (
    <div
      ref={containerRef}
      className="h-full w-full py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto opacity-100">
        {/* Header */}
        <div ref={titleRef} className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex items-center">
              <div className="w-4 h-4 bg-lime-400 rounded-full"></div>
              <div className="w-4 h-4 bg-gray-800 rounded-full -ml-1"></div>
              <div className="w-4 h-4 bg-gray-700 rounded-full -ml-1"></div>
            </div>
            <span className="text-black font-[font1] font-medium">Why Choose Us</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Why Our Clients Believe
            <br />
            We're Different
          </h1>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left side - Image */}
          <div ref={imageRef} className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
                alt="Team collaboration"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-lime-400 rounded-full wave-shape opacity-90 flex items-center justify-center">
              <svg
                className="w-24 h-24 text-gray-800"
                viewBox="0 0 100 100"
                fill="none"
              >
                <path
                  d="M50 20 Q35 35, 50 50 T50 80"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  fill="none"
                />
                <circle cx="50" cy="20" r="4" fill="currentColor" />
                <circle cx="50" cy="50" r="4" fill="currentColor" />
                <circle cx="50" cy="80" r="4" fill="currentColor" />
              </svg>
            </div>

            {/* Sparkles */}
            <div className="absolute -top-4 -left-4">
              <svg
                className="w-12 h-12 text-lime-400 sparkle"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" />
              </svg>
            </div>
            <div className="absolute top-10 -left-2">
              <svg
                className="w-8 h-8 text-lime-400 sparkle"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" />
              </svg>
            </div>
          </div>

          {/* Right side - Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  ref={(el) => (cardsRef.current[index] = el)}
                  className="bg-gradient-to-br from-green-800 to-green-900 rounded-2xl p-6 text-white shadow-xl cursor-pointer"
                >
                  <div className="icon-circle w-14 h-14 bg-lime-400 rounded-full flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-gray-900" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-green-100 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
