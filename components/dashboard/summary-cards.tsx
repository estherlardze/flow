import React from "react";
import { statItems } from "./data";
import { renderChangeBadge } from "@/lib/render-change-badge";

export const SummaryCards: React.FC = () => {


  return (
    <section
      aria-labelledby="summary-cards"
      className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5"
    >
      <h2 id="summary-cards" className="sr-only">Summary cards</h2>

      {statItems.map((s) => (
        <article key={s.key} aria-labelledby={`${s.key}-title`}>
          <div
            className={`overflow-hidden rounded-2xl ${s.bgClass} border p-4 hover:shadow-md transition-transform hover:-translate-y-1`}
          >
            <header className="flex justify-between items-center gap-2">
              <p id={`${s.key}-title`} className="font-medium text-gray-600">
                {s.title}
              </p>
              <s.icon className={`w-5 h-5 ${s.colorClass}`} aria-hidden="true" />
            </header>

            <div className="mt-8">
              <p className={`text-2xl font-semibold ${s.colorClass}`} aria-live="polite">
                {s.quantity}
              </p>

              <div className="flex gap-2 items-center mt-1">
                <span className="text-sm text-muted-foreground">vs last month</span>
                {renderChangeBadge(s.lastmonth)}
              </div>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
};

export default SummaryCards;
