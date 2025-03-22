
'use client'

import { motion } from 'framer-motion'
import { Smartphone, Zap, Layout, Globe, Shield, BarChart } from 'lucide-react'

const features = [
  {
    name: 'Responsive Design',
    description: 'Looks perfect on every screen size and device, from mobile phones to desktop monitors.',
    icon: Smartphone,
  },
  {
    name: 'Lightning Fast',
    description: 'Optimized for speed with minimal load times to keep your visitors engaged.',
    icon: Zap,
  },
  {
    name: 'Modern Layouts',
    description: 'Contemporary design patterns that follow the latest web design trends and best practices.',
    icon: Layout,
  },
  {
    name: 'SEO Optimized',
    description: 'Built with search engines in mind to help improve your site's visibility.',
    icon: Globe,
  },
  {
    name: 'Secure by Default',
    description: 'Implements the latest security practices to keep your site and visitors safe.',
    icon: Shield,
  },
  {
    name: 'Conversion Focused',
    description: 'Strategically designed to guide visitors toward your call-to-action and increase conversions.',
    icon: BarChart,
  },
]

export default function Features() {
  return (
    <section id="features" className="section bg-secondary-50">
      <div className="container">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="heading-lg text-secondary-900 mb-4">
            Everything you need in a <span className="text-primary-600">landing page</span>
          </h2>
          <p className="text-xl text-secondary-600">
            Our landing pages come packed with all the features you need to succeed online.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.name}
              className="bg-white rounded-xl p-8 shadow-soft hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-primary-100 rounded-lg inline-flex p-3 mb-5">
                <feature.icon className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-3">{feature.name}</h3>
              <p className="text-secondary-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
