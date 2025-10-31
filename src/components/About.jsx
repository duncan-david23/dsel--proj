import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const stats = [
    { number: '500+', label: 'Events Captured' },
    { number: '5+', label: 'Years Experience' },
    { number: '100%', label: 'Client Satisfaction' },
    { number: '50+', label: 'Awards Won' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Gallery */}
          <motion.div 
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4">
              <motion.img 
                src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="Photographer at work"
                className="w-full h-64 object-cover rounded-2xl shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <motion.img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="Portrait photography"
                className="w-full h-48 object-cover rounded-2xl shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <div className="space-y-4 pt-8">
              <motion.img 
                src="https://images.unsplash.com/photo-1493863641943-9b68992a8d07?ixlib=rb-4.0.3&auto=format&fit=crop&w=2058&q=80"
                alt="Wedding photography"
                className="w-full h-48 object-cover rounded-2xl shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <motion.img 
                src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&auto=format&fit=crop&w=2053&q=80"
                alt="Camera equipment"
                className="w-full h-64 object-cover rounded-2xl shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              About Me
            </h2>
            <p className="text-lg text-secondary mb-6">
              Welcome to my world of photography! With over 5 years of experience, 
              I specialize in capturing the most precious moments of your life. 
              From intimate weddings to grand celebrations, every event tells a unique story.
            </p>
            <p className="text-lg text-secondary mb-8">
              My approach combines technical expertise with artistic vision, ensuring 
              that each photograph not only documents but also evokes the emotions and 
              atmosphere of your special day. I believe in creating timeless images 
              that you'll cherish forever.
            </p>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-2 gap-6 mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-secondary font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.button
              className="bg-primary text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-slate-800 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More About My Work
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;