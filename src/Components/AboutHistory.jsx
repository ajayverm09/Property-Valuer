import React from 'react'
import { motion } from "framer-motion";

const AboutHistory = () => {
  return (
    <div>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Founded in 2008, our valuation practice has grown to become one
                of the most trusted names in the property industry. We started
                with a simple mission: to provide accurate, unbiased property
                valuations that clients could rely on for their most important
                financial decisions.
              </p>
              <p className="text-gray-700 mb-4">
                Over the years, we've expanded our services to cover all
                property types while maintaining our commitment to excellence
                and adherence to the highest professional standards.
              </p>
              <p className="text-gray-700">
                Today, our team of certified valuers brings together decades of
                combined experience across residential, commercial, and
                specialized property markets.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/8c29ef49-e938-4821-8f5d-c2151aef1d60.png"
                alt="Team of professional property valuers reviewing documents in a modern office setting"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default AboutHistory
