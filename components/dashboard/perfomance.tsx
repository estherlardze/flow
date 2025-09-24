"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Area,
  AreaChart,
} from "recharts";
import React from "react";
import { monthlySeries } from "./data";

// Sample data - replace with your actual data import


export  function Performance() {
  const colors: Record<string, string> = {
    total: "#6366F1", // Indigo
    new: "#F59E0B", // Amber
    active: "#EF4444", // Red
    closed: "#10B981", // Green
  };

  const seriesKeys = ["total", "new", "active", "closed"] as const;

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload?.length) {
      return (
        <div className="bg-white p-2 rounded-lg shadow text-xs">
          <div className="font-semibold mb-1">{label}</div>
          {payload.map((p: any) => (
            <div key={p.dataKey} className="flex items-center gap-2">
              <span
                style={{
                  width: 10,
                  height: 10,
                  background: p.stroke,
                  borderRadius: 2,
                }}
              />
              <span className="capitalize">{p.dataKey}:</span>
              <span className="text-muted-foreground">{p.value}</span>
            </div>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <Card className="rounded-2xl shadow-sm hover:shadow-md transition-shadow">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Performance Metrics</CardTitle>
      </CardHeader>
      <CardContent>
        <section className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <main className="flex-1">
            <figure className="h-[340px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={monthlySeries}
                  margin={{ top: 6, right: 12, left: 0, bottom: 6 }}
                >
                  <defs>
                    {seriesKeys.map((key) => (
                      <linearGradient
                        id={`grad-${key}`}
                        key={key}
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="0%"
                          stopColor={colors[key]}
                          stopOpacity={0.15}
                        />
                        <stop
                          offset="100%"
                          stopColor={colors[key]}
                          stopOpacity={0.05}
                        />
                      </linearGradient>
                    ))}
                  </defs>
                  
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="rgba(0,0,0,0.05)"
                  />
                  <XAxis dataKey="month" axisLine={true} tickLine={true} />
                  <YAxis axisLine={true} tickLine={true} />
                  <Tooltip content={<CustomTooltip />} />

                  {seriesKeys.map((key) => (
                    <Area
                      key={key}
                      type="monotone"
                      dataKey={key}
                      stroke={colors[key]}
                      strokeWidth={key === "closed" ? 3 : 2}
                      fill={`url(#grad-${key})`}
                      fillOpacity={1}
                      dot={false}
                      activeDot={{ r: 5, strokeWidth: 0 }}
                    />
                  ))}
                </AreaChart>
              </ResponsiveContainer>
            </figure>
          </main>
        </section>

        <header className="flex items-center gap-3 mb-2">
          <div className="text-sm text-muted-foreground">
            Monthly trends · since start
          </div>
          <div className="flex gap-2 ml-4">
            {seriesKeys.map((k) => (
              <div
                key={k}
                className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100"
              >
                <span
                  style={{
                    width: 8,
                    height: 8,
                    background: colors[k],
                    borderRadius: "50%",
                  }}
                />
                <span className="capitalize">{k}</span>
              </div>
            ))}
          </div>
        </header>
      </CardContent>
    </Card>
  );
}