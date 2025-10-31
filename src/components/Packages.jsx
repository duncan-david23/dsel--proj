import React from 'react';
import { motion } from 'framer-motion';

const Packages = () => {
  const packages = [
    {
      id: 1,
      name: 'Essential',
      price: '₵2,500',
      duration: '3 hours',
      photos: '75 professionally edited images',
      delivery: '10-day delivery',
      features: [
        '3 hours of professional coverage',
        '75 high-resolution edited images',
        'Online digital gallery',
        'Digital delivery with print release',
        '1 outfit change',
        'Basic retouching',
        'Social media previews'
      ],
      
    },
    {
      id: 2,
      name: 'Premium',
      price: '₵4,500',
      duration: '6 hours',
      photos: '150+ luxury edited images',
      delivery: '2-week delivery',
      features: [
        '6 hours of premium coverage',
        '150+ luxury edited images',
        'Premium online gallery',
        'Print release & usage rights',
        '3 outfit changes',
        'Advanced retouching & color grading',
        '10 premium prints (8x10)',
        'Behind-the-scenes footage',
        'Priority scheduling',
        'Online gallery with custom domain'
      ],
      popular: true,
     
    },
    {
      id: 3,
      name: 'Luxury',
      price: '₵8,500',
      duration: 'Full Day',
      photos: '300+ master edited images',
      delivery: '3-week delivery',
      features: [
        'Full day coverage (up to 10 hours)',
        '300+ master edited images',
        'Luxury leather-bound photo album',
        'All digital images with full rights',
        'Unlimited outfit changes',
        'Cinematic color grading & retouching',
        '20 premium prints in various sizes',
        '4K behind-the-scenes video',
        'Express editing service',
        'Dedicated client coordinator',
        'Custom packaging & delivery',
        '1-year online gallery hosting'
      ],
     
    },
  ];

  const handlePackageSelect = (packageName, price) => {
    const message = `Hello! I'm interested in the ${packageName} package (${price}). I would love to learn more about what's included and discuss my photography needs.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/233556664343?text=${encodedMessage}`, '_blank');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Luxury Background Elements */}
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
      
      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(circle_at_1px_1px,#ffffff_1px,transparent_0)] bg-[length:20px_20px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <span className="bg-amber-500/10 text-amber-400 px-6 py-3 rounded-full text-sm font-light tracking-widest border border-amber-400/20">
              INVESTMENT
            </span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-light text-white mb-6 tracking-tight">
            Premium <span className="font-serif italic">Packages</span>
          </h2>
          <div className="w-24 h-0.5 bg-amber-400 mx-auto mb-8"></div>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
            Timeless photography experiences crafted for the discerning client who values excellence
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {packages.map((pkg) => (
            <motion.div
              key={pkg.id}
              className={`relative group ${
                pkg.popular ? 'lg:-translate-y-8' : ''
              }`}
              variants={itemVariants}
              whileHover={{ 
                y: pkg.popular ? -20 : -12,
                transition: { duration: 0.4, ease: "easeOut" }
              }}
            >
              {/* Premium Card */}
              <div className={`relative h-full bg-gradient-to-b from-slate-800/60 to-slate-900/90 backdrop-blur-sm rounded-3xl border-2 transition-all duration-500 overflow-hidden ${
                pkg.popular 
                  ? 'border-amber-400/50 shadow-2xl shadow-amber-400/20' 
                  : 'border-slate-600/40 hover:border-slate-500/60'
              }`}>
                
                {/* Premium Badge */}
                {pkg.popular && (
                  <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 px-10 py-4 rounded-full text-sm font-bold tracking-widest shadow-2xl shadow-amber-400/30">
                      ✦ {pkg.badge} ✦
                    </div>
                  </div>
                )}

                {/* Non-popular package badge */}
                {!pkg.popular && (
                  <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-20">
                    {/* <span className="bg-slate-700/90 text-slate-200 px-6 py-3 rounded-full text-xs font-medium tracking-widest border border-slate-600/60 backdrop-blur-sm">
                      {pkg.badge}
                    </span> */}
                  </div>
                )}

                <div className="p-10">
                  {/* Package Header - Fixed Spacing */}
                  <div className="text-center mb-12">
                    {/* <h3 className={`text-4xl font-light mb-8 tracking-wide ${
                      pkg.popular ? 'text-amber-400' : 'text-white'
                    }`}>
                      {pkg.name}
                    </h3> */}
                    
                    {/* Price Section */}
                    <div className="mb-10">
                      <div className="text-6xl font-light text-white mb-4 tracking-tighter">
                        {pkg.price}
                      </div>
                      <div className="text-slate-400 text-sm font-light tracking-widest uppercase">
                        Ghana Cedis
                      </div>
                    </div>

                    {/* Duration & Delivery - Improved Layout */}
                    <div className="grid grid-cols-3 gap-6 text-slate-300 text-sm mb-8">
                      <div className="text-center">
                        <div className="font-semibold text-white text-lg mb-2">{pkg.duration}</div>
                        <div className="text-slate-400 text-xs tracking-widest">COVERAGE</div>
                      </div>
                      <div className="text-center">
                        <div className="font-semibold text-white text-lg mb-2">{pkg.photos}</div>
                        <div className="text-slate-400 text-xs tracking-widest">IMAGES</div>
                      </div>
                      <div className="text-center">
                        <div className="font-semibold text-white text-lg mb-2">{pkg.delivery}</div>
                        <div className="text-slate-400 text-xs tracking-widest">TURNAROUND</div>
                      </div>
                    </div>
                  </div>

                  {/* Features List - Improved Spacing */}
                  <ul className="space-y-5 mb-12">
                    {pkg.features.map((feature, index) => (
                      <motion.li 
                        key={index} 
                        className="flex items-start text-slate-300 group-hover:text-slate-100 transition-colors duration-300"
                        whileHover={{ x: 8 }}
                        transition={{ duration: 0.3 }}
                      >
                        <svg 
                          className={`w-6 h-6 mr-4 mt-0.5 flex-shrink-0 ${
                            pkg.popular ? 'text-amber-400' : 'text-slate-500'
                          }`} 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="text-base font-light leading-relaxed">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA Button - Enhanced */}
                  <motion.button
                    className={`w-full py-5 rounded-2xl font-semibold text-lg transition-all duration-500 relative overflow-hidden group ${
                      pkg.popular 
                        ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 hover:shadow-3xl hover:shadow-amber-400/30' 
                        : 'bg-slate-700/60 text-white hover:bg-slate-600/70 border border-slate-600/50 hover:border-slate-500/70'
                    }`}
                    whileHover={{ 
                      scale: 1.03,
                      y: -2,
                      transition: { duration: 0.3 }
                    }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handlePackageSelect(pkg.name, pkg.price)}
                  >
                    <span className="relative z-10 tracking-wider font-medium">
                      {pkg.popular ? 'BEGIN YOUR JOURNEY' : 'EXPLORE PACKAGE'}
                    </span>
                    
                    {/* Enhanced Button Shine Effect */}
                    <div className="absolute inset-0 -left-full group-hover:left-full transition-all duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                  </motion.button>
                </div>

                {/* Enhanced Luxury Bottom Border */}
                <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4/5 h-1 ${
                  pkg.popular ? 'bg-gradient-to-r from-amber-400 to-amber-500' : 'bg-slate-600'
                }`}></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Luxury Footer Note */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-slate-400 text-sm font-light tracking-widest mb-4 uppercase">
            Every Investment Includes
          </p>
          <div className="flex justify-center items-center space-x-8 text-slate-300 text-lg font-light mb-8">
            <span>Professional Equipment</span>
            <span className="text-amber-400">•</span>
            <span>Creative Direction</span>
            <span className="text-amber-400">•</span>
            <span>Premium Editing</span>
            <span className="text-amber-400">•</span>
            <span>Client Care</span>
          </div>
          {/* <div className="mt-8">
            <motion.button
              className="text-amber-400 hover:text-amber-300 font-medium tracking-wide border-2 border-amber-400/40 hover:border-amber-400/60 px-12 py-4 rounded-full transition-all duration-300 hover:bg-amber-400/10 backdrop-blur-sm"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Schedule a Private Consultation
            </motion.button>
          </div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default Packages;