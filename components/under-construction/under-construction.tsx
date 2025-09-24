"use client";
import { motion } from "motion/react";
import { Wrench, ArrowLeft } from "lucide-react";

export default function UnderConstruction() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="max-w-lg w-full text-center"
      >
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-8"
        >
          <Wrench className="w-8 h-8 text-blue-600" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-2xl font-semibold text-gray-900 mb-4"
        >
          We'll be back soon
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-600 leading-relaxed mb-8"
        >
          We're making some improvements to give you a better experience. Thanks
          for your patience.
        </motion.p>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-700 text-white
          font-medium rounded-xl hover:bg-blue-600 transition-colors duration-200 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          Go back
        </motion.button>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-sm text-gray-500 mt-8"
        >
          Need help? Contact us at{" "}
          <a
            href="mailto:info@sleekteq.com"
            className="text-blue-600 hover:underline"
          >
            info@sleekteq.com
          </a>
        </motion.p>
      </motion.div>
    </main>
  );
}
