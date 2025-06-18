import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, Image, ChevronLeft, ChevronRight } from 'lucide-react';
import OptimizedImage from './OptimizedImage';

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

interface GallerySectionProps {
  className?: string;
}

const GallerySection: React.FC<GallerySectionProps> = ({ className = '' }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'engine', name: 'Engine Work' },
    { id: 'brake', name: 'Brake Service' },
    { id: 'electrical', name: 'Electrical' },
    { id: 'body', name: 'Body Work' }
  ];

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: 'Engine Rebuild',
      category: 'engine',
      image: '/assets/img/update_1/project/project_1_1.jpg',
      description: 'Complete engine rebuild and restoration'
    },
    {
      id: 2,
      title: 'Brake System Upgrade',
      category: 'brake',
      image: '/assets/img/update_1/project/project_1_2.jpg',
      description: 'Performance brake system installation'
    },
    {
      id: 3,
      title: 'Electrical Diagnostics',
      category: 'electrical',
      image: '/assets/img/update_1/project/project_1_3.jpg',
      description: 'Advanced electrical system troubleshooting'
    },
    {
      id: 4,
      title: 'Body Restoration',
      category: 'body',
      image: '/assets/img/update_1/project/project_1_4.jpg',
      description: 'Classic car body restoration'
    },
    {
      id: 5,
      title: 'Performance Tuning',
      category: 'engine',
      image: '/assets/img/update_1/project/project_1_5.jpg',
      description: 'Engine performance optimization'
    },
    {
      id: 6,
      title: 'Suspension Work',
      category: 'body',
      image: '/assets/img/update_1/project/project_1_6.jpg',
      description: 'Custom suspension system installation'
    }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className={`section-padding bg-gradient-to-br from-gray-50 to-white ${className}`}>
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full px-6 py-2 mb-6">
            <Image className="w-4 h-4" />
            <span className="text-sm font-bold">GALLERY</span>
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">
            Our <span className="text-gradient">Project Gallery</span>
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            Explore our latest automotive projects and see the quality of our work
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200 hover:border-blue-300'
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="wait">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                layout
                className="group cursor-pointer"
                onClick={() => setSelectedImage(item)}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:scale-105">
                  <OptimizedImage
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover"
                    fallbackSrc="/assets/img/update_1/hero/hero_bg_3_1.jpg"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="font-display font-bold text-xl mb-2">{item.title}</h3>
                      <p className="text-white/80 text-sm">{item.description}</p>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-xs font-medium text-gray-700 capitalize">
                      {item.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative max-w-4xl max-h-[90vh] bg-white rounded-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <OptimizedImage
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-auto max-h-[70vh] object-cover"
                  fallbackSrc="/assets/img/update_1/hero/hero_bg_3_1.jpg"
                />
                
                <div className="p-6">
                  <h3 className="font-display font-bold text-2xl mb-2">{selectedImage.title}</h3>
                  <p className="text-gray-600 mb-4">{selectedImage.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-blue-600 capitalize">
                      {selectedImage.category} Work
                    </span>
                    <button
                      onClick={() => setSelectedImage(null)}
                      className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default GallerySection; 