"use client";

import { Play, X } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export function Hero() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section
      className="relative overflow-hidden bg-slate-900 text-white py-30 flex flex-col justify-center min-h-screen items-center text-center"
      aria-labelledby="hero-heading"
      style={{
        backgroundImage: `url('/images/hero.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-slate-900/95"></div>

      <div className="relative z-10 max-w-5xl flex flex-col items-center justify-center text-center mx-auto px-4 py-24">
        <hgroup>
          <motion.h1
            id="hero-heading"
            className="text-4xl lg:text-7xl font-bold leading-tight mb-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            The innovative CRM built to close more{" "}
            <span className="italic text-blue-400">
              real estate deals efficiently
            </span>
          </motion.h1>

          <motion.p
            className="text-xl text-gray-300 my-10 leading-relaxed"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
          >
            Track, manage, and close leads faster with powerful analytics and
            automation. Designed specifically for real estate professionals who
            want to grow their business.
          </motion.p>
        </hgroup>

        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          aria-label="Primary actions"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
        >
          <Link
            href="#"
            className="bg-blue-500 text-white px-8 py-3 rounded-lg w-full sm:w-fit font-semibold text-lg hover:bg-blue-600 transition-all duration-200 shadow-lg text-center"
          >
            Get Started
          </Link>
          <button
            className="border-2 border-gray-400 text-gray-300 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-700 hover:text-white transition-all duration-200 flex items-center justify-center gap-2 w-full sm:w-fit text-center"
          >
            <Play className="h-5 w-5" />
            Get a Free Demo
          </button>
        </motion.div>
      </div>

      <AnimatePresence>
        {showVideo && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="relative w-full max-w-5xl aspect-video">
              <video
                src="#"
                controls
                autoPlay
                className="w-full h-full rounded-lg shadow-2xl"
              >
                <track kind="captions" src="/wombad.vtt" />
              </video>

              <button
                onClick={() => setShowVideo(false)}
                className="absolute -top-12 right-0 text-white hover:text-red-500"
              >
                <X className="h-8 w-8" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
