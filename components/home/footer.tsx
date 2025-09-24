"use client";

import Link from "next/link";
import { Building2 } from "lucide-react";
import {
  companyLinks,
  legalLinks,
  productLinks,
  socials,
  supportLinks,
} from "./data";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <motion.footer
      className="bg-gray-900 text-white py-16"
      id="contact-us"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="grid md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <Building2 className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">LeadFlow</span>
            </div>
            <p className="text-gray-400 mb-4">
              The complete CRM solution for real estate professionals.
            </p>
            <address className="flex space-x-4 not-italic">
              {socials.map(({ icon: Icon, label, href }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={href}
                    aria-label={label}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                </motion.div>
              ))}
            </address>
          </motion.div>

          {/* Product */}
          <motion.nav
            aria-label="Product"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold mb-4">Quick</h3>
            <ul className="space-y-2 text-gray-400">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>

          {/* Company */}
          <motion.nav
            aria-label="Company"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold mb-4">Contact & Address</h3>
            <ul className="space-y-2 text-gray-400">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>

          {/* Support */}
          <motion.nav
            aria-label="Support"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>
        </section>

        {/* Bottom row */}
        <motion.div
          className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-left md:items-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400">
            © {new Date().getFullYear()} LeadFlow. All rights reserved.
          </p>
          <ul className="flex space-x-6 mt-4 md:mt-0 text-gray-400">
            {legalLinks.map((link, i) => (
              <motion.li
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.7 + i * 0.1 }}
                viewport={{ once: true }}
              >
                <Link
                  href={link.href}
                  className="hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.footer>
  );
}
