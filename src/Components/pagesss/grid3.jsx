import React, { useEffect, useRef } from 'react';
import photo1 from '../../assets/image2/photo1.jpg'
import photo2 from '../../assets/image2/photo2.jpg'
import photo3 from '../../assets/image2/photo3.jpg'
import photo4 from '../../assets/image2/photo4.jpg'
import photo5 from '../../assets/image2/photo5.jpg'
import photo6 from '../../assets/image2/photo6.jpg'
import photo7 from '../../assets/image2/photo7.jpg'
import photo8 from '../../assets/image2/photo8.jpg'
import photo9 from '../../assets/image2/photo9.jpg'
import photo10 from '../../assets/image2/photo10.jpg'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(ScrollTrigger, TextPlugin);

function CreativeAgency() {
  const heroRef = useRef(null);
  const logoContainerRef = useRef(null);
  const logoTrackRef = useRef(null);
  const statsRef = useRef(null);
  const experienceRef = useRef(null);
  const brandImages = [
 photo1,photo2,photo3,photo4,photo5,photo6,photo7,photo8,photo9,photo10
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Logo animations
      gsap.from('.logo', {
        scrollTrigger: {
          trigger: logoContainerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        },
        y: -50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out'
      });

      // Hero text animation
      gsap.from('.hero-line', {
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse'
        },
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power4.out'
      });

      // Circle counter animation
      gsap.from('.experience-circle', {
        scrollTrigger: {
          trigger: experienceRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse'
        },
        scale: 1,
        rotation: 180,
        duration: 1.2,
        ease: 'back.out(1.7)'
      });

      // Counter number animation
      gsap.fromTo(
        '.counter-number',
        { textContent: 0 },
        {
          scrollTrigger: {
            trigger: experienceRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse'
          },
          textContent: 3,
          duration: 2,
          ease: 'power1.inOut',
          snap: { textContent: 1 },
          onUpdate: function () {
            const el = this.targets()[0];
            el.textContent = `${el.textContent}+`;
          }
        }
      );

      // Experience text
      gsap.from('.experience-text', {
        scrollTrigger: {
          trigger: experienceRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse'
        },
        x: 50,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        ease: 'power3.out'
      });

      // Continuous logo carousel marquee
      const track = logoTrackRef.current;
      if (track) {
        const marquee = gsap.to(track, {
          x: '-50%',
          duration: 30,
          ease: 'none',
          repeat: -1
        });

        const container = logoContainerRef.current;
        if (container) {
          container.addEventListener('mouseenter', () => marquee.pause());
          container.addEventListener('mouseleave', () => marquee.play());
        }
      }

      // Stats animations
      gsap.from('.stat-item', {
        scrollTrigger: {
          trigger: statsRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        },
        y: 80,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
      });

      // Icon animations
      gsap.from('.stat-icon', {
        scrollTrigger: {
          trigger: statsRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        },
        scale: 0,
        rotation: 360,
        duration: 1,
        stagger: 0.2,
        delay: 0.3,
        ease: 'elastic.out(1, 0.5)'
      });

    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-black">
      {/* Logo Section */}
      <div ref={logoContainerRef} className="container mx-auto px-2 pt-12 overflow-hidden">
        <div ref={logoTrackRef} className="flex items-center gap-12 whitespace-nowrap will-change-transform" style={{ width: '200%' }}>
          {brandImages.map((src, i) => (
            <img key={`a-${i}`} className="logo h-20 md:h-40 object-cover rounded-xl opacity-90" src={src} alt={`Brand ${i + 1}`} />
          ))}
          {brandImages.map((src, i) => (
            <img key={`b-${i}`} className="logo h-20 md:h-40 object-cover rounded-xl opacity-90" src={src} alt={`Brand ${i + 1}`} />
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <div ref={heroRef} className="container mx-auto px-6 py-24">
        <div className="max-w-6xl">
          <div className="overflow-hidden">
            <h1 className="hero-line text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-4">
              We are a creative
            </h1>
          </div>
          <div className="overflow-hidden">
            <h1 className="hero-line text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-4">
              bold digital agency
            </h1>
          </div>
          
        </div>
      </div>

      {/* Experience Section */}
      <div ref={experienceRef} className="container mx-auto px-4 py-8 Font-[font1]">
        <div className="flex items-center justify-center flex-wrap gap-12">
          <div className="experience-circle w-80 h-80 bg-gray-900 rounded-full flex items-center justify-center">
            <span className="counter-number text-white text-8xl font-bold font-[font1]">3+</span>
          </div>
          <div className="experience-text max-w-md">
            <h3 className="text-2xl font-bold mb-4 font-[font1]">3+ YEARS OF EXPERIENCE</h3>
            <p className="text-gray-600 text-lg leading-relaxed font-[font2]">
              We are dedicated to providing outstanding digital and design services meet the functional and aesthetic.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div ref={statsRef} className="container mx-auto px-6 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="stat-item">
            <div className="flex items-start gap-4">
              <div className="stat-icon text-4xl">😊</div>
              <div>
                <h3 className="text-4xl font-bold mb-2">90+</h3>
                <p className="text-gray-600">very satisfied clients around the worldwide.</p>
              </div>
            </div>
          </div>

          <div className="stat-item">
            <div className="flex items-start gap-4">
              <div className="stat-icon text-4xl">📢</div>
              <div>
                <h3 className="text-4xl font-bold mb-2">3+</h3>
                <p className="text-gray-600">good award winning digital media agency.</p>
              </div>
            </div>
          </div>

          <div className="stat-item">
            <div className="flex items-start gap-4">
              <div className="stat-icon text-4xl">💼</div>
              <div>
                <h3 className="text-4xl font-bold mb-2">45+</h3>
                <p className="text-gray-600">successfully project completed in one year.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      {/* <div className="fixed bottom-8 right-8 text-sm text-gray-400">
        SCROLL ↓
      </div> */}
    </div>
  );
}

export default CreativeAgency
