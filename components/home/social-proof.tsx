"use client";

import React from "react";
import { metrics } from "./data";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function Metrics() {
  return (
    <section
      className="py-16 bg-white relative -top-14 z-40 rounded-tl-[60px] rounded-tr-[60px]"
      aria-labelledby="metrics-heading"
    >
      <div className="max-w-7xl mx-auto px-4">
        <h2 id="metrics-heading" className="sr-only">
          Key Performance Metrics
        </h2>

        <motion.div
          className="grid sm:grid-cols-2 md:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {metrics.map((metric) => (
            <motion.article
              key={metric.label}
              className="text-center border border-gray-200 p-8 bg-gray-50 rounded-xl hover:shadow-md transition-all duration-300 hover:-translate-y-2"
              aria-labelledby={`${metric.label}-title`}
              variants={cardVariants}
            >
              <div
                className={`inline-flex items-center justify-center w-16 h-16 ${metric.color} bg-white rounded-full shadow-md mb-4`}
                aria-hidden="true"
              >
                <metric.icon className="w-8 h-8" />
              </div>

              <p className="text-4xl font-bold text-gray-900 mb-2">
                {metric.number}
              </p>

              <h3
                id={`${metric.label}-title`}
                className="text-gray-600 font-medium text-lg"
              >
                {metric.label}
              </h3>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
