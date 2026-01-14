import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Product() {
  const headerRef = useRef(null);
  const subtitleRef = useRef(null);
  const imageRef = useRef(null);
  const servicesRef = useRef([]);

  useEffect(() => {
    const context = gsap.context(() => {
      gsap.from(headerRef.current, {
        opacity: 0,
        y: -50,
        duration: 1,
        ease: 'power3.out'
      });

      gsap.from(subtitleRef.current, {
        opacity: 0,
        y: -30,
        duration: 1,
        delay: 0.3,
        ease: 'power3.out'
      });

      gsap.from(imageRef.current, {
        opacity: 0,
        x: -100,
        duration: 1,
        delay: 0.6,
        ease: 'power3.out'
      });

      gsap.from(servicesRef.current, {
        scrollTrigger: {
          trigger: servicesRef.current[0],
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        },
        opacity: 0,
        x: 100,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
      });

      servicesRef.current.forEach((serviceElement) => {
        if (!serviceElement) return;

        serviceElement.addEventListener('mouseenter', () => {
          gsap.to(serviceElement, {
            scale: 1.05,
            duration: 0.3,
            ease: 'power2.out'
          });
        });

        serviceElement.addEventListener('mouseleave', () => {
          gsap.to(serviceElement, {
            scale: 1,
            duration: 0.3,
            ease: 'power2.out'
          });
        });
      });
    });

    return () => context.revert();
  }, []);

  const services = [
    {
      title: 'SEO Optimization',
      description: "Boost your website's visibility with expert SEO techniques and analysis."
    },
    {
      title: 'Social Media Management',
      description: 'Enhance your online presence with tailored social media strategies.'
    },
    {
      title: 'Content Creation',
      description: 'Engaging content designed to captivate your target audience effectively.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="pt-20 pb-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1
            ref={headerRef}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6"
          >
            Digital Marketing Solutions
          </h1>
          <p
            ref={subtitleRef}
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Empowering your brand with innovative digital marketing strategies and tools.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            ref={imageRef}
            className="relative overflow-hidden rounded-3xl shadow-2xl"
          >
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
              alt="Team collaborating"
              className="w-full h-[70vh] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>

          <div className="space-y-8">
            {services.map((service, index) => (
              <div
                key={index}
                ref={(el) => { servicesRef.current[index] = el; }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
              >
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* <div className="max-w-7xl mx-auto px-6 py-20 text-center">
        <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
          Get Started Today
        </button>
      </div> */}
    </div>
  );
}

export default Product;


