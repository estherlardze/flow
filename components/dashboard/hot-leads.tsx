"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UserPlus } from 'lucide-react'

const hotLeads = [
  { name: "John Doe", budget: "$500k", urgency: "High", location: "NY" },
  { name: "Lisa Smith", budget: "$350k", urgency: "Medium", location: "LA" },
   { name: "John Doe", budget: "$500k", urgency: "High", location: "NY" },
  
];

export function HotLeads() {
  return (
    <Card className="rounded-2xl shadow-sm hover:shadow-md transition-shadow">
      <CardHeader>
        <CardTitle>Top Opportunities</CardTitle>
      </CardHeader>
      <CardContent>
        <section aria-labelledby="hot-leads-title">
          <h2 id="hot-leads-title" className="sr-only">Top Opportunities</h2>
          <ul className="space-y-3 h-[250px] overflow-y-scroll hide-scrollbar" role="list" >
            {hotLeads.map((l, i) => (
              <li
                key={i}
                className="flex items-center justify-between gap-4 p-3 rounded-lg hover:bg-accent/5 transition-colors"
              >
                <article className="flex items-center gap-3">
                  <figure className="h-10 w-10 flex items-center justify-center rounded-full bg-primary/20 text-primary font-semibold">
                    <span aria-hidden>
                      {l.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                    </span>
                    <figcaption className="sr-only">{l.name} avatar initials</figcaption>
                  </figure>

                  <div>
                    <div className="font-medium">{l.name}</div>
                    <div className="text-xs text-muted-foreground">{l.budget} • {l.urgency} • {l.location}</div>
                  </div>
                </article>

                <div className="flex items-center gap-2">
                  <button aria-label={`View ${l.name}`} className="inline-flex items-center justify-center text-sm px-3 py-1.5 rounded-md border">
                    View
                  </button>
                  <button aria-label={`Assign ${l.name}`} className="inline-flex items-center justify-center text-sm px-3 py-1.5 rounded-md bg-primary text-white">
                    <UserPlus className="mr-2 h-4 w-4" />Assign
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </CardContent>
    </Card>
  );
}
