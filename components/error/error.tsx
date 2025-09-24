"use client";

import { motion } from "motion/react";
import { AlertCircle, RefreshCw, Home } from "lucide-react";
import { useError } from "./use-error";

export default function ErrorComponent() {
  const { handleRefresh, handleGoHome } = useError();

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
          className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-2xl mb-8"
        >
          <AlertCircle className="w-8 h-8 text-red-600" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-2xl font-semibold text-gray-900 mb-4"
        >
          Something went wrong
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-600 leading-relaxed mb-8"
        >
          We encountered an unexpected error. Please try refreshing the page or
          go back to the homepage.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-3 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleRefresh}
            className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white font-medium rounded-xl
            hover:bg-red-500 transition-colors duration-200 cursor-pointer"
          >
            <RefreshCw className="w-4 h-4" />
            Try again
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleGoHome}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-300
            text-gray-700 font-medium rounded-xl hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
          >
            <Home className="w-4 h-4" />
            Go home
          </motion.button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-sm text-gray-500 mt-8"
        >
          If this problem continues, contact us at{" "}
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
