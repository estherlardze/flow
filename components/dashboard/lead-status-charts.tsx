"use client";

import { 
  BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, LabelList 
} from "recharts";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import React from "react";

const data = [
  { stage: "New", count: 100 },
  { stage: "Qualified", count: 75 },
  { stage: "Proposal", count: 50 },
  { stage: "Negotiation", count: 30 },
  { stage: "Closed", count: 20 }
];

export function LeadBarChart() {
  const max = Math.max(...data.map(d => d.count));

  return (
    <Card className="rounded-2xl shadow-sm hover:shadow-md transition-shadow">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Lead Performance</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[340px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart 
              data={data} 
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <XAxis 
                dataKey="stage" 
                tick={{ fontSize: 13 }} 
                axisLine={false} 
                tickLine={false}
              />
              <YAxis 
                type="number" 
                domain={[0, max + 10]}
                tick={{ fontSize: 13 }} 
                axisLine={false} 
                tickLine={false}
              />
              <Tooltip formatter={(value: any) => [`${value} leads`, "Leads"]} />
              <Bar 
                dataKey="count" 
                fill="#3b82f6"
                radius={[4, 4, 0, 0]} 
              >
                <LabelList 
                  dataKey="count" 
                  position="top" 
                  formatter={(val: any) => `${val}`}
                  style={{ fontSize: '12px', fontWeight: 'bold' }}
                />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <p className="mt-4 text-sm text-muted-foreground">
          Lead performance across different stages: from <strong>{data[0].count} New</strong> leads down to <strong>{data[data.length-1].count} Closed</strong> deals.
        </p>
      </CardContent>
    </Card>
  );
}