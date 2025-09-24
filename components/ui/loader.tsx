"use client";

import { motion } from "framer-motion";

export  function Loader() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <motion.div
        className="relative w-16 h-16"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
          ease: "linear",
        }}
      >
        <motion.span
          className="absolute inset-0 rounded-full border-4 border-blue-500 border-t-transparent"
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 1,
            ease: "linear",
          }}
        />
        <motion.span
          className="absolute inset-2 rounded-full border-4 border-blue-400 border-b-transparent opacity-70"
          animate={{ rotate: -360 }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "linear",
          }}
        />
      </motion.div>
    </div>
  );
}
