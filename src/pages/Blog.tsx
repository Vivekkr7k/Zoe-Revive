import { motion } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Understanding the Recovery Journey: A Comprehensive Guide',
      excerpt: 'Recovery is a personal journey that requires patience, support, and the right resources. Learn about the stages of recovery and how to navigate each step with confidence.',
      author: 'Dr. Sarah Chen',
      date: 'March 15, 2024',
      category: 'Recovery',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
    },
    {
      id: 2,
      title: 'The Importance of Holistic Treatment Approaches',
      excerpt: 'Holistic treatment addresses the whole person—mind, body, and spirit. Discover how integrated approaches lead to more sustainable recovery outcomes.',
      author: 'Michael Rodriguez',
      date: 'March 10, 2024',
      category: 'Treatment',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop',
    },
    {
      id: 3,
      title: 'Building a Support Network: Key to Long-Term Success',
      excerpt: 'A strong support network is crucial for maintaining recovery. Explore strategies for building meaningful connections and finding community support.',
      author: 'Dr. Emily Watson',
      date: 'March 5, 2024',
      category: 'Support',
      image: 'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=600&h=400&fit=crop',
    },
    {
      id: 4,
      title: 'Mental Health and Physical Wellness: The Connection',
      excerpt: 'Physical health and mental wellness are deeply interconnected. Learn how exercise, nutrition, and self-care contribute to overall recovery.',
      author: 'James Thompson',
      date: 'February 28, 2024',
      category: 'Wellness',
      image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&h=400&fit=crop',
    },
    {
      id: 5,
      title: 'Evidence-Based Therapies: What Works and Why',
      excerpt: 'Understanding the science behind effective treatments helps you make informed decisions about your care. Explore proven therapeutic approaches.',
      author: 'Dr. Sarah Chen',
      date: 'February 20, 2024',
      category: 'Treatment',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
    },
    {
      id: 6,
      title: 'Overcoming Stigma: Your Journey Matters',
      excerpt: 'Breaking down barriers and challenging misconceptions about recovery. Your story has power, and seeking help is a sign of strength.',
      author: 'Michael Rodriguez',
      date: 'February 15, 2024',
      category: 'Recovery',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop',
    },
  ]

  const categories = ['All', 'Recovery', 'Treatment', 'Support', 'Wellness']

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
              <p className="text-sage-600 text-sm font-semibold mb-4">• BLOG</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-sage-800 mb-6">
                Insights & Resources
              </h1>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
                Stay informed with the latest articles, research, and stories from our team of experts.
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
                  className="px-6 py-2 rounded-full bg-white text-sage-700 font-medium hover:bg-sage-600 hover:text-white transition-colors duration-200 shadow-md"
                >
                  {category}
                </button>
              ))}
            </motion.div>

            {/* Blog Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <Link to={`/blog/${post.id}`}>
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-sage-600 text-white text-sm font-semibold rounded-full">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-sage-800 mb-3 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-neutral-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-sm text-neutral-500">
                        <span>{post.author}</span>
                        <span>{post.date}</span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Blog


