"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { faqs } from "./data";
import { motion } from "framer-motion";

export function FAQ() {
  return (
    <section className="py-20 bg-white max-w-7xl mx-auto px-4" id="faqs">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          Frequently Asked Questions
        </h2>
        <p className="md:text-xl text-gray-600">
          Get answers to common questions about CRM Lead Pro
        </p>
      </motion.div>

      <Accordion
        type="single"
        collapsible
        className="grid md:grid-cols-2 gap-6"
      >
        {faqs.map((faq, index) => (
          <motion.div
            key={faq.question}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            <AccordionItem
              value={`item-${index}`}
              className="bg-gray-50 rounded-xl border border-gray-200"
            >
              <AccordionTrigger className="px-6 py-6 text-left text-lg font-semibold text-gray-900 hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 text-gray-600 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          </motion.div>
        ))}
      </Accordion>

      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.7 }}
        viewport={{ once: true }}
      >
        <p className="text-gray-600 mb-4">Still have questions?</p>
        <Link
          href="mailto:info@sleekteq.com"
          className="text-[#0088FE] font-semibold hover:underline"
        >
          Contact our support team
        </Link>
      </motion.div>
    </section>
  );
}
