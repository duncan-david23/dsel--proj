import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Gallery = () => {
  const [activeImage, setActiveImage] = useState(null);
  const galleryRef = useRef(null);

  const galleryImages = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      aspect: 'portrait'
    },
    {
      id: 2,
      src: 'https://upsa.edu.gh/wp-content/uploads/2020/08/graduation-3.jpg',
      aspect: 'landscape'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      aspect: 'portrait'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      aspect: 'square'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      aspect: 'portrait'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1554048612-b6a482bc67e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      aspect: 'landscape'
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1493863641943-9b68992a8d07?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      aspect: 'portrait'
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      aspect: 'square'
    },
    {
      id: 9,
      src: 'https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      aspect: 'landscape'
    },
    {
      id: 10,
      src: 'https://images.unsplash.com/photo-1485182708500-e8f1f318ba72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      aspect: 'portrait'
    }
  ];

  const getAspectClass = (aspect) => {
    switch (aspect) {
      case 'portrait': return 'aspect-[3/4]';
      case 'landscape': return 'aspect-[4/3]';
      case 'square': return 'aspect-square';
      default: return 'aspect-square';
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      rotateY: -15,
      filter: "blur(10px)"
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const Modal = ({ image, onClose }) => (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="relative max-w-6xl max-h-[90vh] mx-4"
          initial={{ scale: 0.8, rotateY: 30 }}
          animate={{ scale: 1, rotateY: 0 }}
          exit={{ scale: 0.8, rotateY: -30 }}
          transition={{ type: "spring", damping: 25 }}
          onClick={(e) => e.stopPropagation()}
        >
          <motion.img
            src={image.src}
            alt=""
            className="w-full h-full object-contain rounded-2xl shadow-2xl"
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
          />
          
          {/* Floating Close Button */}
          <motion.button
            className="absolute -top-4 -right-4 bg-white text-black w-12 h-12 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
            whileHover={{ scale: 1.1, rotate: 90 }}
            onClick={onClose}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </motion.button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );

  return (
    <>
      <section className="min-h-screen py-20 bg-gradient-to-br from-slate-50 via-white to-amber-50/30 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -top-40 -right-40 w-80 h-80 bg-amber-200/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-slate-200/20 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.4, 0.2, 0.4],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Creative Header */}
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1, type: "spring" }}
              className="inline-block mb-8"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-amber-400 to-amber-500 rounded-2xl rotate-45 flex items-center justify-center shadow-2xl">
                <svg className="w-10 h-10 text-white -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
              </div>
            </motion.div>
            
            <motion.h2 
              className="text-5xl sm:text-7xl md:text-8xl font-black text-slate-900 mb-6 tracking-tighter"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              GALLERY
            </motion.h2>
            
            <motion.div 
              className="w-32 h-1 bg-gradient-to-r from-amber-400 to-transparent mx-auto mb-8"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
            
            <motion.p 
              className="text-xl text-slate-600 max-w-2xl mx-auto font-light"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Visual stories that speak louder than words
            </motion.p>
          </motion.div>

          {/* Creative Masonry Grid */}
          <motion.div 
            ref={galleryRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-8xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                className={`group relative ${getAspectClass(image.aspect)} overflow-hidden rounded-3xl cursor-pointer`}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  rotateZ: index % 2 === 0 ? -1 : 1,
                  transition: { 
                    type: "spring", 
                    stiffness: 300,
                    damping: 20
                  }
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveImage(image)}
                layoutId={`gallery-image-${image.id}`}
              >
                {/* Main Image with Parallax Effect */}
                <motion.div
                  className="w-full h-full"
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.6 }
                  }}
                >
                  <img 
                    src={image.src} 
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Glass Morphism Overlay */}
                <motion.div 
                  className="absolute inset-0 bg-black/0 group-hover:bg-black/20 backdrop-blur-0 group-hover:backdrop-blur-sm transition-all duration-500"
                  initial={false}
                />

                {/* Floating Elements */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={false}
                >
                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  
                  {/* Orbital Dots */}
                  {[0, 1, 2].map((dot) => (
                    <motion.div
                      key={dot}
                      className="absolute w-2 h-2 bg-white rounded-full"
                      initial={{ scale: 0, opacity: 0 }}
                      whileHover={{ 
                        scale: 1,
                        opacity: 1,
                        transition: { 
                          delay: dot * 0.1,
                          type: "spring",
                          stiffness: 200
                        }
                      }}
                      animate={{
                        x: [0, 20, 0],
                        y: [0, -20, 0],
                        rotate: [0, 180, 360]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: dot * 0.5
                      }}
                      style={{
                        top: `${20 + dot * 20}%`,
                        left: `${10 + dot * 25}%`
                      }}
                    />
                  ))}
                </motion.div>

                {/* Hover Border Animation */}
                <div className="absolute inset-0 border-4 border-transparent group-hover:border-white/30 rounded-3xl transition-all duration-500" />
              </motion.div>
            ))}
          </motion.div>

          {/* Floating CTA */}
          <motion.div 
            className="text-center mt-20"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {activeImage && (
          <Modal 
            image={activeImage} 
            onClose={() => setActiveImage(null)} 
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Gallery;