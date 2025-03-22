
'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Mail, MessageSquare } from 'lucide-react'

export default function CTA() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="heading-lg text-secondary-900 mb-4">
                Ready to <span className="text-primary-600">get started</span>?
              </h2>
              <p className="text-xl text-secondary-600 mb-8">
                Join thousands of satisfied customers who have transformed their online presence with our landing page solutions.
              </p>
              
              <div className="bg-white shadow-soft rounded-xl p-6 mb-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-primary-100 rounded-full p-3">
                    <Mail className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-secondary-900">Email Us</h3>
                    <p className="text-secondary-600">We'll get back to you within 24 hours</p>
                  </div>
                </div>
                <a href="mailto:hello@sleek.com" className="text-primary-600 hover:text-primary-700 font-medium flex items-center">
                  hello@sleek.com
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
              
              <div className="bg-white shadow-soft rounded-xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-primary-100 rounded-full p-3">
                    <MessageSquare className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-secondary-900">Live Chat</h3>
                    <p className="text-secondary-600">Speak with our team in real-time</p>
                  </div>
                </div>
                <button className="text-primary-600 hover:text-primary-700 font-medium flex items-center">
                  Start a conversation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-white rounded-xl shadow-soft p-8 border border-secondary-100">
                <h3 className="text-2xl font-bold text-secondary-900 mb-6">Get in touch</h3>
                <form>
                  <div className="space-y-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-4 py-3 rounded-lg border border-secondary-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-3 rounded-lg border border-secondary-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-1">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg border border-secondary-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                        placeholder="Tell us how we can help..."
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full btn btn-primary"
                    >
                      Send Message
                    </button>
                    
                    <p className="text-sm text-secondary-600 text-center">
                      By submitting this form, you agree to our{' '}
                      <a href="#" className="text-primary-600 hover:text-primary-700">
                        Privacy Policy
                      </a>
                    </p>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
