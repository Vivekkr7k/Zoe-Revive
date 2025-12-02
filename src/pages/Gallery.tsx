import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'

// Import gallery images
import teamImage from '../assets/Gallery/Team.jpg'
import galleryImage1 from '../assets/Gallery/WhatsApp Image 2025-11-28 at 19.22.37_14aa7c94.jpg'
import galleryImage2 from '../assets/Gallery/WhatsApp Image 2025-11-28 at 19.22.38_eb8f70ae.jpg'
import galleryImage3 from '../assets/Gallery/WhatsApp Image 2025-11-28 at 19.22.39_ffed6d6c.jpg'
import galleryImage4 from '../assets/Gallery/WhatsApp Image 2025-11-28 at 19.22.40_7e7a74e2.jpg'
import galleryImage5 from '../assets/Gallery/WhatsApp Image 2025-11-28 at 19.22.41_28c0669a.jpg'
import galleryImage6 from '../assets/Gallery/WhatsApp Image 2025-11-28 at 19.22.41_7b284ba3.jpg'
import galleryImage7 from '../assets/Gallery/WhatsApp Image 2025-11-28 at 19.22.41_f4042d0d.jpg'
import galleryImage8 from '../assets/Gallery/WhatsApp Image 2025-11-28 at 19.22.42_105bfe26.jpg'
import galleryImage9 from '../assets/Gallery/WhatsApp Image 2025-11-28 at 19.22.42_2710264a.jpg'
import galleryImage10 from '../assets/Gallery/WhatsApp Image 2025-11-28 at 19.22.42_3e98c004.jpg'
import galleryImage11 from '../assets/Gallery/WhatsApp Image 2025-11-28 at 19.22.43_2c221b52.jpg'
import galleryImage12 from '../assets/Gallery/WhatsApp Image 2025-11-28 at 19.22.43_67c95436.jpg'
import galleryImage13 from '../assets/Gallery/WhatsApp Image 2025-11-28 at 19.22.43_cb219753.jpg'
import galleryImage14 from '../assets/Gallery/WhatsApp Image 2025-11-28 at 19.22.44_00aeba06.jpg'
import galleryImage15 from '../assets/Gallery/WhatsApp Image 2025-11-28 at 19.22.44_4a31a181.jpg'
import galleryImage16 from '../assets/Gallery/WhatsApp Image 2025-11-28 at 19.22.44_c724fac8.jpg'
import zrtPic1 from '../assets/Gallery/ZRT PICS 1.jpg'
import zrtPic2 from '../assets/Gallery/ZRT PICS 2.jpg'
import zrtPic13 from '../assets/Gallery/ZRT PICS 13.JPG'
import zrtPic14 from '../assets/Gallery/ZRT PICS 14.JPG'
import zrtPic15 from '../assets/Gallery/ZRT PICS 15.JPG'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const galleryImages = [
    {
      id: 1,
      src: teamImage,
      alt: 'Our team at Zoe Revive Trust',
      category: 'Team',
    },
    {
      id: 2,
      src: galleryImage1,
      alt: 'Zoe Revive Trust facility',
      category: 'Facility',
    },
    {
      id: 3,
      src: galleryImage2,
      alt: 'Zoe Revive Trust facility',
      category: 'Facility',
    },
    {
      id: 4,
      src: galleryImage3,
      alt: 'Zoe Revive Trust facility',
      category: 'Facility',
    },
    {
      id: 5,
      src: galleryImage4,
      alt: 'Zoe Revive Trust facility',
      category: 'Facility',
    },
    {
      id: 6,
      src: galleryImage5,
      alt: 'Zoe Revive Trust facility',
      category: 'Facility',
    },
    {
      id: 7,
      src: galleryImage6,
      alt: 'Zoe Revive Trust facility',
      category: 'Facility',
    },
    {
      id: 8,
      src: galleryImage7,
      alt: 'Zoe Revive Trust facility',
      category: 'Facility',
    },
    {
      id: 9,
      src: galleryImage8,
      alt: 'Zoe Revive Trust facility',
      category: 'Facility',
    },
    {
      id: 10,
      src: galleryImage9,
      alt: 'Zoe Revive Trust facility',
      category: 'Facility',
    },
    {
      id: 11,
      src: galleryImage10,
      alt: 'Zoe Revive Trust facility',
      category: 'Facility',
    },
    {
      id: 12,
      src: galleryImage11,
      alt: 'Zoe Revive Trust facility',
      category: 'Facility',
    },
    {
      id: 13,
      src: galleryImage12,
      alt: 'Zoe Revive Trust facility',
      category: 'Facility',
    },
    {
      id: 14,
      src: galleryImage13,
      alt: 'Zoe Revive Trust facility',
      category: 'Facility',
    },
    {
      id: 15,
      src: galleryImage14,
      alt: 'Zoe Revive Trust facility',
      category: 'Facility',
    },
    {
      id: 16,
      src: galleryImage15,
      alt: 'Zoe Revive Trust facility',
      category: 'Facility',
    },
    {
      id: 17,
      src: galleryImage16,
      alt: 'Zoe Revive Trust facility',
      category: 'Facility',
    },
    {
      id: 18,
      src: zrtPic1,
      alt: 'Zoe Revive Trust activities and care',
      category: 'Facility',
    },
    {
      id: 19,
      src: zrtPic2,
      alt: 'Zoe Revive Trust activities and care',
      category: 'Facility',
    },
    {
      id: 20,
      src: zrtPic13,
      alt: 'Zoe Revive Trust activities and care',
      category: 'Facility',
    },
    {
      id: 21,
      src: zrtPic14,
      alt: 'Zoe Revive Trust activities and care',
      category: 'Facility',
    },
    {
      id: 22,
      src: zrtPic15,
      alt: 'Zoe Revive Trust activities and care',
      category: 'Facility',
    },
  ]

  const categories = ['All', 'Facility', 'Therapy', 'Team']

  const [activeCategory, setActiveCategory] = useState('All')

  const filteredImages =
    activeCategory === 'All'
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory)

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <section className="relative min-h-[80vh] flex items-center bg-gradient-to-br from-neutral-50 via-sage-50/30 to-sage-100/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 w-full">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <p className="text-sage-600 text-sm font-semibold mb-4">• GALLERY</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-sage-800 mb-6">
                Our Facility & Care in Action
              </h1>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
                Take a virtual tour of our state-of-the-art facilities and see our team in action, providing compassionate care to those on their recovery journey.
              </p>
            </motion.div>

            {/* Category Filter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 shadow-md ${
                    activeCategory === category
                      ? 'bg-sage-600 text-white'
                      : 'bg-white text-sage-700 hover:bg-sage-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </motion.div>

            {/* Gallery Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
              <AnimatePresence mode="wait">
                {filteredImages.map((image, index) => (
                  <motion.div
                    key={image.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                    className="relative aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
                    onClick={() => setSelectedImage(image.id)}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    {/* Overlay on Hover */}
                    <div className="absolute inset-0 bg-sage-800/0 group-hover:bg-sage-800/40 transition-colors duration-300 flex items-center justify-center">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileHover={{ opacity: 1, scale: 1 }}
                        className="text-white text-center px-4"
                      >
                        <svg
                          className="w-12 h-12 mx-auto mb-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
                          />
                        </svg>
                        <p className="text-sm font-semibold">{image.category}</p>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </section>
      </main>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-6xl max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={galleryImages.find((img) => img.id === selectedImage)?.src}
                alt={galleryImages.find((img) => img.id === selectedImage)?.alt}
                className="max-w-full max-h-[90vh] object-contain rounded-lg"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors flex items-center justify-center"
                aria-label="Close"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  )
}

export default Gallery


