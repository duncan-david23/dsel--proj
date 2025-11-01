import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Wedding Photography',
      description: 'Timeless imagery that tells your unique love story',
      image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80',
    },
    {
      id: 2,
      title: 'Graduation Portraits',
      description: 'Celebrating academic achievements in style',
      image: 'https://upsa.edu.gh/wp-content/uploads/2020/08/graduation-3.jpg',
    },
    {
      id: 3,
      title: 'Corporate Events',
      description: 'Professional documentation for business milestones',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    },
    {
      id: 4,
      title: 'Family Portraits',
      description: 'Preserving beautiful connections and moments',
      image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Minimal Header */}
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

        {/* Full-Bleed Image Grid */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-0 max-w-8xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="group relative aspect-[4/5] overflow-hidden bg-slate-900"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.6, ease: "easeOut" }
              }}
            >
              {/* Main Image */}
              <motion.img 
                src={service.image} 
                alt={service.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 1.5 }}
              />
              
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500"></div>
              
              {/* Service Number - Minimal */}
              <div className="absolute top-6 left-6 opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-white text-sm font-light tracking-widest">
                  0{service.id}
                </span>
              </div>

              {/* Text Overlay - Bottom Left */}
              <div className="absolute bottom-6 left-6 right-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <motion.h3 
                  className="text-2xl md:text-3xl font-light mb-2 tracking-tight"
                  whileHover={{ x: 5 }}
                >
                  {service.title}
                </motion.h3>
                
                <motion.p 
                  className="text-slate-200 text-lg font-light leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200"
                >
                  {service.description}
                </motion.p>

                {/* Subtle Divider */}
                <div className="w-12 h-0.5 bg-amber-400 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300"></div>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/10 transition-all duration-500 pointer-events-none"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Minimal CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
        </motion.div>
      </div>
    </section>
  );
};

export default Services;