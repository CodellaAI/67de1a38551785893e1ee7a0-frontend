
'use client'

import { motion } from 'framer-motion'
import { CheckCircle, X } from 'lucide-react'

const tiers = [
  {
    name: 'Starter',
    price: 29,
    description: 'Perfect for small businesses and startups.',
    features: [
      'Single landing page',
      'Responsive design',
      'Basic analytics',
      'Email support',
      '30-day money back guarantee',
    ],
    limitations: [
      'No custom domain',
      'No A/B testing',
    ],
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Professional',
    price: 79,
    description: 'Everything you need for a growing business.',
    features: [
      'Up to 5 landing pages',
      'Responsive design',
      'Advanced analytics',
      'A/B testing',
      'Custom domain',
      'Priority email support',
      '30-day money back guarantee',
    ],
    limitations: [],
    cta: 'Get Started',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 199,
    description: 'Advanced features for larger organizations.',
    features: [
      'Unlimited landing pages',
      'Responsive design',
      'Advanced analytics with custom reports',
      'A/B testing',
      'Multiple custom domains',
      'Priority 24/7 support',
      'Dedicated account manager',
      '30-day money back guarantee',
    ],
    limitations: [],
    cta: 'Contact Sales',
    popular: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="section bg-secondary-50">
      <div className="container">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="heading-lg text-secondary-900 mb-4">
            Simple, transparent <span className="text-primary-600">pricing</span>
          </h2>
          <p className="text-xl text-secondary-600">
            Choose the perfect plan for your business needs. No hidden fees or surprises.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              className={`bg-white rounded-xl overflow-hidden shadow-soft border ${tier.popular ? 'border-primary-500 ring-2 ring-primary-500 ring-opacity-50' : 'border-secondary-100'}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {tier.popular && (
                <div className="bg-primary-600 text-white text-center py-2 font-medium">
                  Most Popular
                </div>
              )}
              <div className="p-8">
                <h3 className="text-xl font-bold text-secondary-900 mb-2">{tier.name}</h3>
                <p className="text-secondary-600 mb-6">{tier.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-secondary-900">${tier.price}</span>
                  <span className="text-secondary-600">/month</span>
                </div>
                
                <a 
                  href="#contact" 
                  className={`block w-full text-center py-3 px-6 rounded-md font-medium transition-colors ${
                    tier.popular 
                      ? 'bg-primary-600 hover:bg-primary-700 text-white' 
                      : 'bg-secondary-100 hover:bg-secondary-200 text-secondary-900'
                  }`}
                >
                  {tier.cta}
                </a>
              </div>
              
              <div className="px-8 pb-8">
                <p className="font-medium text-secondary-900 mb-4">What's included:</p>
                <ul className="space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-secondary-700">{feature}</span>
                    </li>
                  ))}
                  
                  {tier.limitations.map((limitation) => (
                    <li key={limitation} className="flex items-start">
                      <X className="h-5 w-5 text-secondary-400 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-secondary-500">{limitation}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
