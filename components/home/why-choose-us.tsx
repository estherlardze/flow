"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Smartphone, Settings, Zap, Shield } from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  className = "",
}) => {
  return (
    <motion.div
      className={`bg-gray-100 rounded-lg p-6 ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="w-12 h-12 border-2 border-gray-300 rounded-full flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
};

export function Benefits() {
  return (
    <section className="bg-white py-24 px-4" id="why-choose-us">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl text-center mb-12 font-bold text-gray-900"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Why <span className="text-blue-500">Lead Pro</span> is The Right
          Choice for You
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard
            icon={<Zap className="w-6 h-6 text-gray-600" />}
            title="Easy to use"
            description="An intuitive, clutter-free interface designed specifically for real estate professionals, so you can focus on closing deals instead of learning complex software."
          />

          <FeatureCard
            icon={<Settings className="w-6 h-6 text-gray-600" />}
            title="Customizable"
            description="Easily adapt the platform to your unique workflow with customizable pipelines, fields, and reports that align with how your team actually works"
          />

          <motion.div
            className="bg-blue-500 text-white rounded-lg p-6 lg:row-span-2"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center mb-4">
              <Smartphone className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Mobile First</h3>
            <p className="text-white text-sm leading-relaxed mb-6">
              Stay productive on the go with a mobile-first design that lets you
              access leads, track progress, and update client data from
              anywhere, anytime.
            </p>
            <p className="text-white text-sm leading-relaxed mb-8">
              Don&apos;t let your device be a barrier—manage leads, update
              client details, and close deals seamlessly whether you&apos;re on
              your phone, tablet, or desktop.
            </p>

            <motion.button
              className="border text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-colors hover:bg-white hover:text-blue-600"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              Start Free Trial
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </motion.div>

          <div className="md:col-span-2 lg:col-span-2">
            <FeatureCard
              icon={<Shield className="w-6 h-6 text-gray-600" />}
              title="Secure"
              description="Enjoy peace of mind with enterprise-grade security, encrypted data storage, and strict access controls that safeguard your clients’ sensitive information."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
