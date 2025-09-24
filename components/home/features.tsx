"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cardData, tags } from "./data";

export function Features() {
  return (
    <section id="features" className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.header
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Everything You Need to Succeed
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Powerful features designed specifically for real estate
            professionals to streamline operations and drive growth.
          </p>
        </motion.header>

        <section className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 mb-20">
          <ul
            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl"
            aria-label="Feature list"
          >
            {cardData.map((card, index) => (
              <motion.li
                key={card.title}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <article
                  className="relative rounded-lg p-6 flex flex-col border border-gray-600 justify-between h-full 
                  transition-shadow hover:shadow-md"
                >
                  <div className="relative z-10">
                    <header className="flex items-center gap-3 mb-4">
                      <div
                        className="w-10 h-10 rounded-md flex items-center justify-center"
                        style={{ backgroundColor: card.color }}
                      >
                        <card.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-semibold text-lg text-gray-200">
                        {card.title}
                      </h3>
                    </header>
                    <p className="text-sm text-gray-300 mb-4">
                      {card.subtitle}
                    </p>
                  </div>
                </article>
              </motion.li>
            ))}
          </ul>

          <motion.figure
            className="relative w-full rounded-xl overflow-hidden shadow-md max-w-xl"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Image
              src="/images/features.jpg"
              alt="Real estate team collaboration"
              className="w-full object-cover"
              width={600}
              height={400}
              priority
            />
            <figcaption className="sr-only">
              Tags showing team roles like Sales, IT, and Marketing
            </figcaption>

            {tags.map((tag, index) => (
              <motion.span
                key={tag.color}
                className={`absolute text-white text-sm font-medium px-3 py-1 rounded-lg ${tag.color}`}
                style={{ top: tag.top, left: tag.left }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
                viewport={{ once: true }}
              >
                {tag.label}
              </motion.span>
            ))}
          </motion.figure>
        </section>
      </div>
    </section>
  );
}
