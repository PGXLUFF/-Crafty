import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: (
      <svg className="w-16 h-16 mx-auto mb-4" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="50" cy="50" r="20" />
        <path d="M50 30 L50 20 M50 80 L50 70 M30 50 L20 50 M80 50 L70 50 M35 35 L28 28 M65 65 L72 72 M65 35 L72 28 M35 65 L28 72" />
      </svg>
    ),
    title: 'Digital Marketing',
    description: 'Digital marketing drives business growth through SEO, social media, paid ads, content, and email campaigns, building brand visibility, boosting engagement, and delivering measurable results across all online platforms.'
  },
  {
    icon: (
      <svg className="w-16 h-16 mx-auto mb-4" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M30 30 Q50 50 30 70 Q10 50 30 30" />
        <path d="M60 25 L65 45 L55 35 L70 35 L60 25 M60 45 L50 70" />
      </svg>
    ),
    title: 'UGC Content Creation',
    description: 'UGC content creation empowers brands with authentic customer voices, boosting trust, engagement, and SEO rankings while driving organic growth, stronger brand awareness, and lasting customer loyalty through genuine user experiences.'
  },
  {
    icon: (
      <svg className="w-16 h-16 mx-auto mb-4" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="25" y="20" width="50" height="40" rx="2" />
        <rect x="30" y="25" width="40" height="30" rx="1" />
        <circle cx="50" cy="40" r="8" />
        <path d="M42 40 Q50 48 58 40" />
        <rect x="20" y="65" width="60" height="15" rx="2" />
      </svg>
    ),
    title: 'AD Management',
    description: 'Professional ad management maximizes ROI by optimizing campaigns, targeting the right audience, reducing ad spend waste, and driving conversions through data-driven strategies on Google Ads, Facebook, Instagram, and more.'
  },
  {
    icon: (
      <svg className="w-16 h-16 mx-auto mb-4" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="25" y="15" width="50" height="60" rx="2" />
        <path d="M30 20 L70 20 M30 25 L70 25" />
        <path d="M40 35 L45 40 L40 45 M50 37.5 L60 37.5 M50 42.5 L60 42.5" />
      </svg>
    ),
    title: 'Website Development',
    description: 'Website development services build fast, responsive, and SEO-friendly websites that enhance user experience, strengthen brand identity, and drive business growth through custom design, functionality, and advanced digital solutions.'
  },
  {
    icon: (
      <svg className="w-16 h-16 mx-auto mb-4" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="40" cy="50" r="25" />
        <path d="M40 30 L40 50 L50 55" />
        <circle cx="70" cy="35" r="8" />
        <path d="M70 27 L70 20 M62 35 L55 35 M78 35 L85 35" />
      </svg>
    ),
    title: 'Search Engine Marketing',
    description: 'Search engine marketing boosts online visibility through paid ads, keyword targeting, and campaign optimization, helping brands drive traffic, generate qualified leads, and achieve measurable growth with higher ROI.'
  },
  {
    icon: (
      <svg className="w-16 h-16 mx-auto mb-4" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M30 60 L40 40 L50 50 L70 20" />
        <path d="M70 30 L75 20 L80 25 M75 20 L85 18" />
      </svg>
    ),
    title: 'Influencer marketing',
    description: 'Influencer marketing helps brands grow online by building trust, boosting engagement, and reaching target audiences through authentic collaborations, driving sales, visibility, and long-term customer loyalty with measurable results.'
  },
  {
    icon: (
      <svg className="w-16 h-16 mx-auto mb-4" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="50" cy="50" r="25" />
        <path d="M50 30 L50 45 M42 52 Q50 60 58 52" />
        <path d="M30 25 L32 28 M70 25 L68 28 M25 40 L28 40 M72 40 L75 40" />
        <path d="M30 65 L32 68 M70 65 L68 68" />
      </svg>
    ),
    title: 'Creative & Communication',
    description: 'Creative and communication services enhance brand identity through impactful designs, storytelling, and strategies that connect with audiences, strengthen engagement, and deliver clear, consistent messaging across all digital and offline platforms.'
  },
  {
    icon: (
      <svg className="w-16 h-16 mx-auto mb-4" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="30" y="35" width="40" height="30" rx="2" />
        <circle cx="50" cy="50" r="8" />
        <path d="M42 50 L46 54 L58 42" />
        <rect x="25" y="25" width="10" height="8" />
        <rect x="65" y="25" width="10" height="8" />
      </svg>
    ),
    title: 'Graphic and Video Editing',
    description: 'Graphic and video editing services create engaging visuals, professional designs, and high-quality content that boost brand identity, attract audiences, and enhance digital marketing with creative storytelling and impactful visuals.'
  }
];

function ServicesGrid() {
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((card) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 80,
          scale: 0.9
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            end: 'top 65%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-4 text-slate-800">
          Our Services
        </h1>
        <p className="text-center text-slate-600 mb-16 text-lg">
          Comprehensive digital solutions to grow your business
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              ref={addToRefs}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-blue-600">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-800 text-center">
                {service.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServicesGrid;
