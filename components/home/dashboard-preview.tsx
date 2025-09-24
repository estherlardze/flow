"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export function DashboardPreview() {
  return (
    <div className="bg-gray-50 py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h3 className="text-3xl font-semibold">Dashboard Preview</h3>
        <p className="text-slate-600 mt-2 mb-12">
          Take a look at your sleek, modern dashboard in action.
        </p>

        <motion.div
          initial={{ rotateX: -45, opacity: 0, y: 100 }}
          animate={{ rotateX: 0, opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          whileHover={{ rotateX: 5, rotateY: 5, scale: 1.02 }}
          className="relative mx-auto w-full max-w-4xl perspective"
        >
          <Image
            src="/images/dash.png"
            alt="Dashboard preview"
            width={1200}
            height={700}
            className="rounded-xl shadow-2xl border border-gray-200 object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
}
