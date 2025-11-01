import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      title: 'Wedding Photography',
      subtitle: 'Capturing your special day with elegance and grace'
    },
    {
      id: 2,
      image: 'https://upsa.edu.gh/wp-content/uploads/2020/08/graduation-3.jpg',
      title: 'Graduation Moments',
      subtitle: 'Celebrating academic achievements in style'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80',
      title: 'Special Events',
      subtitle: 'Professional coverage for all your occasions'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      title: 'Family Portraits',
      subtitle: 'Timeless memories with your loved ones'
    }
  ];

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const handleBookSession = () => {
    const message = "Hello D'sel Graphy! I'm interested in booking a photography session. Could you please provide me with more information?";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/233556664343?text=${encodedMessage}`, '_blank');
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Slider */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
          >
            <img 
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Brand Identity - Top Left - Fixed for Mobile */}
      <motion.div 
        className="absolute top-4 left-4 sm:top-8 sm:left-8 z-30 text-white"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="flex items-center space-x-2 sm:space-x-3">
          {/* Brand Logo Symbol - Smaller on Mobile */}
          <motion.div 
            className="w-8 h-8 sm:w-12 sm:h-12 bg-amber-500 rounded-full flex items-center justify-center"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
          >
            <svg className="w-4 h-4 sm:w-6 sm:h-6 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
          </motion.div>
          
          {/* Brand Name - Smaller on Mobile */}
          <div className="text-left">
            <motion.h1 
              className="text-lg sm:text-2xl font-light tracking-tight"
              whileHover={{ scale: 1.05 }}
            >
              D'sel <span className="font-serif italic text-amber-400">Graphy</span>
            </motion.h1>
            <motion.p 
              className="text-slate-300 text-xs sm:text-sm font-light tracking-widest mt-0.5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              VISUAL STORYTELLING
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* Slide Indicators - Adjusted for Mobile */}
      <div className="absolute bottom-24 sm:bottom-20 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2 sm:space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-amber-500 scale-125' 
                : 'bg-white bg-opacity-50 hover:bg-opacity-80'
            }`}
          />
        ))}
      </div>

      {/* Main Hero Content - Fixed Spacing for Mobile */}
      <div className="relative z-10 text-center text-white px-4 w-full max-w-6xl mt-8 sm:mt-0">
        {/* Creative Brand Showcase - Adjusted for Mobile */}
        <motion.div
          className="mb-6 sm:mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="inline-block bg-black/30 backdrop-blur-sm rounded-xl sm:rounded-2xl px-4 py-3 sm:px-8 sm:py-4 border border-white/10 mx-2">
            <motion.p 
              className="text-amber-400 text-sm sm:text-lg font-light tracking-widest uppercase"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Welcome to
            </motion.p>
            <motion.h2 
              className="text-xl sm:text-3xl md:text-4xl font-light mt-1 sm:mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              D'sel <span className="font-serif italic text-amber-400">Graphy</span> Studio
            </motion.h2>
          </div>
        </motion.div>

        {/* Dynamic Slide Content - Responsive Text Sizes */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8 }}
            className="px-2"
          >
            <motion.h1 
              className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-light mb-4 sm:mb-6 tracking-tight leading-tight sm:leading-normal"
            >
              {slides[currentSlide].title}
              <motion.span 
                className="block text-amber-400 mt-2 sm:mt-4 text-lg sm:text-2xl md:text-3xl lg:text-4xl font-serif italic"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Beautiful Moments
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-base sm:text-xl md:text-2xl lg:text-3xl mb-6 sm:mb-8 max-w-3xl mx-auto font-light leading-relaxed text-slate-200 px-2"
            >
              {slides[currentSlide].subtitle}
            </motion.p>
          </motion.div>
        </AnimatePresence>
        
        {/* CTA Buttons - Responsive Sizing */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mt-8 sm:mt-12 px-2"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.button 
            className="bg-amber-500 text-slate-900 px-6 sm:px-10 py-3 sm:py-5 rounded-full font-semibold text-base sm:text-lg hover:bg-amber-400 transition-all duration-300 shadow-2xl flex items-center space-x-2 sm:space-x-3 w-full sm:w-auto justify-center"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 25px 50px -12px rgba(245, 158, 11, 0.25)"
            }}
            whileTap={{ scale: 0.95 }}
            onClick={handleBookSession}
          >
            <span>Book Your Session</span>
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
            </svg>
          </motion.button>
          
          {/* <motion.button 
            className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-5 rounded-full font-medium text-base sm:text-lg hover:bg-white hover:text-slate-900 transition-all duration-300 backdrop-blur-sm w-full sm:w-auto justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Portfolio
          </motion.button> */}
        </motion.div>

        {/* Trust Indicators - Stack on Mobile */}
        <motion.div 
          className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-4 md:space-x-8 mt-8 sm:mt-16 text-slate-300 text-xs sm:text-sm px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <div className="flex items-center space-x-1 sm:space-x-2">
            <svg className="w-3 h-3 sm:w-4 sm:h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
            </svg>
            <span>Premium Quality</span>
          </div>
          <div className="flex items-center space-x-1 sm:space-x-2">
            <svg className="w-3 h-3 sm:w-4 sm:h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
            </svg>
            <span>Professional Editing</span>
          </div>
          <div className="flex items-center space-x-1 sm:space-x-2">
            <svg className="w-3 h-3 sm:w-4 sm:h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
            </svg>
            <span>Timely Delivery</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator - Adjusted Position for Mobile */}
      <motion.div 
        className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white rounded-full flex justify-center">
          <motion.div 
            className="w-1 h-2 sm:h-3 bg-white rounded-full mt-1 sm:mt-2"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>

      {/* Enhanced Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40 pointer-events-none"></div>
    </section>
  );
};

export default Hero;