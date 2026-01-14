import React, { useEffect, useRef, useState } from 'react';
import { MapPin, Mail, Phone, CheckCircle, AlertCircle } from 'lucide-react';

const ContactPage = () => {
  const heroRef = useRef(null);
  const cardsRef = useRef([]);
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    const hero = heroRef.current;
    const cards = cardsRef.current;
    const formEl = formRef.current;

    if (hero) {
      hero.style.opacity = '0';
      hero.style.transform = 'translateY(-30px)';
      setTimeout(() => {
        hero.style.transition = 'all 0.8s ease-out';
        hero.style.opacity = '1';
        hero.style.transform = 'translateY(0)';
      }, 100);
    }

    cards.forEach((card, index) => {
      if (card) {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        setTimeout(() => {
          card.style.transition = 'all 0.6s ease-out';
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }, 300 + index * 150);
      }
    });

    if (formEl) {
      formEl.style.opacity = '0';
      formEl.style.transform = 'translateY(40px)';
      setTimeout(() => {
        formEl.style.transition = 'all 0.8s ease-out';
        formEl.style.opacity = '1';
        formEl.style.transform = 'translateY(0)';
      }, 800);
    }
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.company || !formData.email || !formData.phone || !formData.message) {
      setSubmitStatus({ type: 'error', message: 'Please fill in all fields' });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Replace with your actual API endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          submittedAt: new Date().toISOString()
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      const result = await response.json();
      
      setSubmitStatus({ 
        type: 'success', 
        message: 'Message sent successfully! We\'ll get back to you soon.' 
      });
      
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        message: ''
      });

      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus({ 
        type: 'error', 
        message: 'Failed to send message. Please try again later.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-cyan-500/10 rounded-full animate-pulse"
            style={{
              width: Math.random() * 6 + 2 + 'px',
              height: Math.random() * 6 + 2 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animationDelay: Math.random() * 5 + 's',
              animationDuration: Math.random() * 3 + 2 + 's'
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div ref={heroRef} className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-white text-sm font-medium">Contact</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent">
            Contact Us
          </h1>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <div
            ref={el => cardsRef.current[0] = el}
            className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-800/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 hover:scale-105 group cursor-pointer"
          >
            <div className="bg-cyan-500/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-cyan-500/20 transition-all duration-300">
              <MapPin className="w-8 h-8 text-cyan-400" />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Sharma complex 2nd floor bcs, New Shimla
            </p>
          </div>

          <div
            ref={el => cardsRef.current[1] = el}
            className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-800/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 hover:scale-105 group cursor-pointer"
          >
            <div className="bg-cyan-500/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-cyan-500/20 transition-all duration-300">
              <Mail className="w-8 h-8 text-cyan-400" />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              info@craftysocials.com
            </p>
          </div>

          <div
            ref={el => cardsRef.current[2] = el}
            className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-800/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 hover:scale-105 group cursor-pointer"
          >
            <div className="bg-cyan-500/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-cyan-500/20 transition-all duration-300">
              <Phone className="w-8 h-8 text-cyan-400" />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              93178 00911
            </p>
          </div>
        </div>

        {/* Contact Form Section */}
        <div ref={formRef} className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Connect With Us Today!</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We offer total business solutions tailored to your company's needs and goals so we 
              invite you to reach out and let us know and one of our experts will be in touch with you directly.
            </p>
          </div>

          <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 md:p-12">
            {/* Status Message */}
            {submitStatus && (
              <div className={`mb-6 p-4 rounded-xl flex items-center gap-3 ${
                submitStatus.type === 'success' 
                  ? 'bg-green-500/10 border border-green-500/50 text-green-400' 
                  : 'bg-red-500/10 border border-red-500/50 text-red-400'
              }`}>
                {submitStatus.type === 'success' ? (
                  <CheckCircle className="w-5 h-5" />
                ) : (
                  <AlertCircle className="w-5 h-5" />
                )}
                <span>{submitStatus.message}</span>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name*</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Name"
                    className="w-full px-4 py-3 bg-slate-700/30 border border-slate-600/50 rounded-xl focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 text-white placeholder-gray-500"
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Company*</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Company"
                    className="w-full px-4 py-3 bg-slate-700/30 border border-slate-600/50 rounded-xl focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 text-white placeholder-gray-500"
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Email*</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email"
                    className="w-full px-4 py-3 bg-slate-700/30 border border-slate-600/50 rounded-xl focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 text-white placeholder-gray-500"
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number*</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+0 / Phone number"
                    className="w-full px-4 py-3 bg-slate-700/30 border border-slate-600/50 rounded-xl focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 text-white placeholder-gray-500"
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Message*</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Message"
                  rows={6}
                  className="w-full px-4 py-3 bg-slate-700/30 border border-slate-600/50 rounded-xl focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 text-white placeholder-gray-500 resize-none"
                  disabled={isSubmitting}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50 hover:scale-105 active:scale-95 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16 rounded-3xl overflow-hidden border border-slate-700/50 shadow-2xl">
          <div className="relative h-96 bg-slate-800">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d27044.123456!2d77.17259979248047!3d31.08350372314453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1697190000000!5m2!1sen!2sin"
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;