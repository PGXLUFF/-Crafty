import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const headerRef = useRef(null);
  const formRef = useRef(null);
  const imageRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.from(headerRef.current.children, {
        y: -30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      });

      // Form fields animation
      gsap.from(formRef.current.querySelectorAll(".form-field"), {
        x: -50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        delay: 0.3,
      });

      // Image animation
      gsap.from(imageRef.current, {
        x: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.5,
      });

      // Button animation
      gsap.from(buttonRef.current, {
        scale: 0.8,
        opacity: 0,
        duration: 0.5,
        ease: "back.out(1.7)",
        delay: 1,
      });
    });

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    gsap.to(buttonRef.current, {
      scale: 0.95,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
      onComplete: () => {
        alert("Message sent! (Demo only)");
      },
    });
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex">
              <div className="w-6 h-6 bg-lime-400 rounded-full"></div>
              <div className="w-6 h-6 bg-slate-800 rounded-full -ml-2"></div>
            </div>
            <span className="text-slate-700 font-medium">Contact Us</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900">
            Get Your Free Quote Today!
          </h1>
        </div>

        {/* Form + Image Section */}
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Form */}
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div className="form-field">
              <label className="block text-slate-900 font-medium mb-2">
                Your Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Ex. John Doe"
                required
                className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg 
                           focus:outline-none focus:ring-2 focus:ring-lime-400 
                           focus:border-transparent transition-all"
              />
            </div>

            <div className="form-field">
              <label className="block text-slate-900 font-medium mb-2">
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="example@gmail.com"
                required
                className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg 
                           focus:outline-none focus:ring-2 focus:ring-lime-400 
                           focus:border-transparent transition-all"
              />
            </div>

            <div className="form-field">
              <label className="block text-slate-900 font-medium mb-2">
                Phone *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Enter Phone Number"
                required
                className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg 
                           focus:outline-none focus:ring-2 focus:ring-lime-400 
                           focus:border-transparent transition-all"
              />
            </div>

            <div className="form-field">
              <label className="block text-slate-900 font-medium mb-2">
                Service Interested In *
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg 
                           focus:outline-none focus:ring-2 focus:ring-lime-400 
                           focus:border-transparent transition-all appearance-none cursor-pointer"
              >
                <option value="">Select Service</option>
                <option value="consulting">Consulting</option>
                <option value="development">Development</option>
                <option value="design">Design</option>
                <option value="marketing">Marketing</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="form-field">
              <label className="block text-slate-900 font-medium mb-2">
                Your Message *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Enter here.."
                required
                rows="6"
                className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg 
                           focus:outline-none focus:ring-2 focus:ring-lime-400 
                           focus:border-transparent transition-all resize-none"
              ></textarea>
            </div>

            <button
              ref={buttonRef}
              type="submit"
              className="px-8 py-4 bg-slate-800 text-lime-400 font-semibold rounded-full 
                         hover:bg-slate-900 hover:shadow-lg transition-all duration-300"
            >
              Send Message
            </button>
          </form>

          {/* Image Section */}
          <div ref={imageRef} className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl relative">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=1000&fit=crop"
                alt="Team collaboration"
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-8 right-8 flex gap-3">
                <div className="w-8 h-8 bg-lime-400 rounded-full animate-pulse"></div>
                <div
                  className="w-12 h-12 bg-lime-400 rounded-full animate-pulse"
                  style={{ animationDelay: "0.2s" }}
                ></div>
                <div
                  className="w-6 h-6 bg-lime-400 rounded-full animate-pulse"
                  style={{ animationDelay: "0.4s" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
