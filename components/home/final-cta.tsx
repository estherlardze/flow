"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { stats } from "./data";
import Link from "next/link";

export function FinalCTA() {
  return (
    <section className="py-20 bg-blue-50">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Start Growing Your Business Today
        </motion.h2>

        <motion.p
          className="text-xl text-gray-500 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          viewport={{ once: true }}
        >
          Join over 1,000 real estate professionals who trust Leadflow to manage
          their leads and close more deals.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-primary rounded-2xl flex items-center justify-center shadow-md">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl text-gray-800 font-bold mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="py-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Link href="#" className="bg-blue-500 hover:bg-blue-600 text-white px-12 py-3 mb-48 rounded-3xl font-bold text-lg shadow-lg transition-all duration-300">
            Get Started for Free
          </Link>
          <p className="text-gray-600 mt-4">
            No credit card required • 14-day free trial
          </p>
        </motion.div>
      </div>
    </section>
  );
}
