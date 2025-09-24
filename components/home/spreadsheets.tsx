"use client";

import React, { JSX } from "react";
import { TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

type BaseCard = {
  id: number;
  title: string;
  descriptionTitle: string;
  description: string;
};

type ValueCard = BaseCard & {
  type: "value";
  value: string;
  change: string;
  changeColor: string;
  chartColor: string;
};

type ProgressCard = BaseCard & {
  type: "progress";
  steps: number[];
  activeStep: number;
};

type AvatarCard = BaseCard & {
  type: "avatar";
  avatars: string[];
};

type Card = ValueCard | ProgressCard | AvatarCard;

export const spreadsheet: Card[] = [
  {
    id: 1,
    type: "value",
    title: "Total Leads",
    value: "536,256",
    change: "+2.7%",
    changeColor: "text-red-500",
    chartColor: "stroke-red-500",
    descriptionTitle: "Disorganized Follow-ups",
    description:
      "Leads slip through the cracks when follow-up tasks are scattered...",
  },
  {
    id: 2,
    type: "progress",
    title: "Deal Progress",
    steps: [1, 2, 3, 4, 5, 6],
    activeStep: 2,
    descriptionTitle: "Difficult Pipeline Tracking",
    description:
      "Manually managing lead stages or deal progress can quickly become confusing...",
  },
 
  {
    id: 4,
    type: "value",
    title: "Total Revenue",
    value: "$191,256",
    change: "+12.7%",
    changeColor: "text-blue-500",
    chartColor: "stroke-red-500",
    descriptionTitle: "Performance insight",
    description:
      "Without visibility into what your team is doing — who's closing deals...",
  },
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.25 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export function LeadLossSection(): JSX.Element {
  return (
    <section
      className="bg-white pt-10 pb-20 px-4 flex flex-col items-center justify-center max-w-7xl mx-auto"
      aria-labelledby="lead-loss-heading"
    >
      <header className="max-w-4xl text-center mb-12">
        <h2
          id="lead-loss-heading"
          className="text-4xl md:text-5xl leading-tight mb-3 font-semibold"
        >
          Tired of losing leads in{" "}
          <em className="italic text-black">
            spreadsheets, <span className="text-blue-600">sticky notes</span>,
            and scattered reminders
          </em>
        </h2>
        <p className="text-gray-600 text-sm md:text-base">
          Keep every lead organized and follow up faster — without the mess of
          manual tracking.
        </p>
      </header>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {spreadsheet.map((card) => {
          if (card.type === "value") {
            return (
              <motion.article
                key={card.id}
                className="col-span-1 md:col-span-2 bg-gray-100 rounded-xl p-6 flex flex-col md:flex-row items-center"
                aria-labelledby={`card-${card.id}-title`}
                variants={cardVariants}
              >
                <div className="bg-white rounded-lg px-3 py-6 flex flex-col items-start w-full md:w-48 mb-4 md:mb-0 md:mr-6 shadow-sm">
                  <header className="flex items-center justify-between w-full mb-2">
                    <span className="text-sm text-gray-500">{card.title}</span>
                    <TrendingUp
                      className="w-6 h-6 text-red-600"
                      aria-hidden="true"
                    />
                  </header>
                  <p className="text-xl font-semibold mb-1">{card.value}</p>
                  <svg
                    className="w-full h-16 mt-3 text-red-500"
                    aria-label={`${card.title} trend chart`}
                    fill="none"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 100 40"
                  >
                    <path
                      d="M0,20 Q20,5 40,20 T100,20"
                      stroke="currentColor"
                      fill="none"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3
                    id={`card-${card.id}-title`}
                    className="font-semibold mb-1 text-gray-900"
                  >
                    {card.descriptionTitle}
                  </h3>
                  <p className="text-gray-600 text-sm">{card.description}</p>
                </div>
              </motion.article>
            );
          }

          if (card.type === "progress") {
            return (
              <motion.article
                key={card.id}
                className="col-span-1 bg-gray-100 rounded-xl p-6 flex flex-col gap-3 items-center"
                aria-labelledby={`card-${card.id}-title`}
                variants={cardVariants}
              >
                <div className="bg-white rounded-lg p-5 w-full shadow-sm">
                  <span className="text-xs text-gray-500 mb-2 block">
                    {card.title}
                  </span>
                  <nav
                    className="flex space-x-3"
                    aria-label="Deal Progress Steps"
                  >
                    {card.steps.map((step) => (
                      <button
                        key={step}
                        type="button"
                        className={`w-8 h-8 rounded-full border flex items-center justify-center text-sm font-semibold ${
                          step <= card.activeStep
                            ? "bg-blue-500 text-white border-blue-500"
                            : "bg-white text-gray-400 border-gray-300"
                        }`}
                        aria-pressed={step <= card.activeStep}
                      >
                        {step}
                      </button>
                    ))}
                  </nav>
                </div>
                <div className="flex-1">
                  <h3
                    id={`card-${card.id}-title`}
                    className="font-semibold mb-1 text-gray-900"
                  >
                    {card.descriptionTitle}
                  </h3>
                  <p className="text-gray-600 text-sm">{card.description}</p>
                </div>
              </motion.article>
            );
          }

          if (card.type === "avatar") {
            return (
              <motion.article
                key={card.id}
                className="col-span-1 bg-gray-100 rounded-xl p-6 flex flex-col gap-4 items-center"
                aria-labelledby={`card-${card.id}-title`}
                variants={cardVariants}
              >
                <div className="bg-white rounded-lg p-5 w-full shadow-sm flex items-center space-x-3">
                  <div className="flex -space-x-2" aria-hidden="true">
                    {card.avatars.map((avatar) => (
                      <img
                        key={avatar}
                        src={avatar}
                        alt=""
                        className="w-8 h-8 rounded-full border-2 border-white"
                      />
                    ))}
                  </div>
                  <span className="text-xs font-semibold">
                    {card.descriptionTitle}
                  </span>
                </div>
                <div className="flex-1">
                  <h3
                    id={`card-${card.id}-title`}
                    className="font-semibold mb-1 text-gray-900"
                  >
                    {card.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{card.description}</p>
                </div>
              </motion.article>
            );
          }

          return null;
        })}
      </motion.div>
    </section>
  );
}
