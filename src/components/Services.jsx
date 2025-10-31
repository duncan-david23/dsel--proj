import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Wedding Photography',
      description: 'Elegant coverage of your special day with timeless imagery that tells your unique love story',
      image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80',
    },
    {
      id: 2,
      title: 'Graduation Portraits',
      description: 'Celebrate academic achievements with sophisticated portraits that capture this milestone',
      image: 'https://upsa.edu.gh/wp-content/uploads/2020/08/graduation-3.jpg',
    },
    {
      id: 3,
      title: 'Corporate Events',
      description: 'Professional documentation for business gatherings, conferences, and corporate milestones',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    },
    {
      id: 4,
      title: 'Family Portraits',
      description: 'Artful family sessions that preserve the beautiful connections and moments you share',
      image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    },
  ];

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
    hidden: { opacity: 0, y: 60, scale: 0.95 },
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
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Luxury Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-50/20 via-transparent to-transparent"></div>
      
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
            <span className="bg-amber-500/10 text-amber-600 px-6 py-3 rounded-full text-sm font-light tracking-widest border border-amber-400/30">
              OUR CRAFT
            </span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-light text-slate-900 mb-6 tracking-tight">
            Signature <span className="font-serif italic">Services</span>
          </h2>
          <div className="w-24 h-0.5 bg-amber-400 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
            Immersive photography experiences designed to capture life's most precious moments with artistic excellence
          </p>
        </motion.div>

        {/* Luxury Grid Layout */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className={`group relative overflow-hidden rounded-3xl bg-white shadow-2xl hover:shadow-3xl transition-all duration-700 ${
                index % 2 === 0 ? 'lg:rotate-[-1deg]' : 'lg:rotate-[1deg]'
              } hover:rotate-0`}
              variants={itemVariants}
              whileHover={{ 
                y: -15,
                scale: 1.02,
                transition: { duration: 0.4, ease: "easeOut" }
              }}
            >
              {/* Main Content Container */}
              <div className="flex flex-col lg:flex-row h-full min-h-[500px] lg:min-h-[400px]">
                {/* Image Section */}
                <div className="lg:w-1/2 relative overflow-hidden">
                  <motion.img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-64 lg:h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 1.2 }}
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Luxury Badge */}
                  <div className="absolute top-6 left-6">
                    <span className="bg-white/90 backdrop-blur-sm text-slate-900 px-4 py-2 rounded-full text-sm font-medium tracking-widest shadow-lg">
                      0{service.id}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="lg:w-1/2 p-8 lg:p-10 flex flex-col justify-center">
                  {/* Service Title */}
                  <motion.h3 
                    className="text-2xl lg:text-3xl font-light text-slate-900 mb-4 tracking-tight group-hover:text-amber-600 transition-colors duration-500"
                    whileHover={{ x: 5 }}
                  >
                    {service.title}
                  </motion.h3>
                  
                  {/* Description */}
                  <p className="text-slate-600 leading-relaxed mb-6 font-light text-lg">
                    {service.description}
                  </p>

                  {/* Luxury Divider */}
                  <div className="w-16 h-0.5 bg-amber-400 mb-6 transform group-hover:scale-x-150 transition-transform duration-500 origin-left"></div>

                  {/* Feature Highlights */}
                  <div className="space-y-2 mb-8">
                    {service.id === 1 && (
                      <>
                        <div className="flex items-center text-slate-500 text-sm">
                          <div className="w-1 h-1 bg-amber-400 rounded-full mr-3"></div>
                          Full-day coverage
                        </div>
                        <div className="flex items-center text-slate-500 text-sm">
                          <div className="w-1 h-1 bg-amber-400 rounded-full mr-3"></div>
                          Premium album included
                        </div>
                      </>
                    )}
                    {service.id === 2 && (
                      <>
                        <div className="flex items-center text-slate-500 text-sm">
                          <div className="w-1 h-1 bg-amber-400 rounded-full mr-3"></div>
                          Multiple location options
                        </div>
                        <div className="flex items-center text-slate-500 text-sm">
                          <div className="w-1 h-1 bg-amber-400 rounded-full mr-3"></div>
                          Digital & print packages
                        </div>
                      </>
                    )}
                    {service.id === 3 && (
                      <>
                        <div className="flex items-center text-slate-500 text-sm">
                          <div className="w-1 h-1 bg-amber-400 rounded-full mr-3"></div>
                          Professional editing
                        </div>
                        <div className="flex items-center text-slate-500 text-sm">
                          <div className="w-1 h-1 bg-amber-400 rounded-full mr-3"></div>
                          Quick turnaround
                        </div>
                      </>
                    )}
                    {service.id === 4 && (
                      <>
                        <div className="flex items-center text-slate-500 text-sm">
                          <div className="w-1 h-1 bg-amber-400 rounded-full mr-3"></div>
                          Natural light sessions
                        </div>
                        <div className="flex items-center text-slate-500 text-sm">
                          <div className="w-1 h-1 bg-amber-400 rounded-full mr-3"></div>
                          Family heirloom quality
                        </div>
                      </>
                    )}
                  </div>

                  {/* Subtle CTA */}
                  <motion.div 
                    className="flex items-center text-amber-600 font-light tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    whileHover={{ x: 10 }}
                  >
                    <span className="text-sm">Discover this experience</span>
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.div>
                </div>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-amber-400/20 rounded-3xl transition-all duration-500 pointer-events-none"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Luxury Footer Note */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-slate-500 text-sm font-light tracking-widest mb-4">
            EACH SERVICE IS TAILORED TO YOUR UNIQUE VISION
          </p>
          <motion.button
            className="bg-slate-900 text-white px-10 py-4 rounded-full font-light tracking-wide hover:bg-slate-800 transition-all duration-300 border border-slate-700 hover:border-slate-600 shadow-xl"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Begin Your Photographic Journey
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;