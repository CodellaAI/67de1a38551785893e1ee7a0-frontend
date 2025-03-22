
'use client'

import Image from 'next/image'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary-100 text-primary-800 font-medium text-sm mb-6">
              Introducing Sleek
            </span>
            <h1 className="heading-xl text-secondary-900 mb-6">
              Elevate your online presence with our{' '}
              <span className="text-primary-600">sleek design</span>
            </h1>
            <p className="text-xl text-secondary-600 mb-8 max-w-lg">
              Create stunning landing pages that convert visitors into customers with our modern, responsive design templates.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a href="#contact" className="btn btn-primary">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a href="#features" className="btn btn-secondary">
                Learn More
              </a>
            </div>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-white">
                    <Image
                      src={`https://images.unsplash.com/photo-151${i}000005-6dde2f72c8a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80`}
                      alt={`User ${i}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-secondary-600">
                  <span className="font-bold">4.9/5</span> from over 1,000+ reviews
                </p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-600 to-purple-600 rounded-2xl blur opacity-20"></div>
            <div className="relative bg-white p-2 rounded-2xl shadow-soft overflow-hidden">
              <div className="aspect-[4/3] rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80"
                  alt="Dashboard preview"
                  width={600}
                  height={450}
                  className="object-cover"
                />
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-soft p-4 flex items-center gap-3">
              <div className="bg-green-100 rounded-full p-2">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <p className="font-medium text-secondary-900">Easy Setup</p>
                <p className="text-sm text-secondary-600">Ready in minutes</p>
              </div>
            </div>
            
            <div className="absolute top-20 -right-6 bg-white rounded-lg shadow-soft p-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <p className="font-medium">Conversion Rate</p>
              </div>
              <p className="text-2xl font-bold">+147%</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
