"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

interface LeadSourceData {
  name: string;
  value: number;
  color: string;
}

const data: LeadSourceData[] = [
  { name: "Referral", value: 20, color: "#00C49F" },
  { name: "Website", value: 20, color: "#0088FE" },
  { name: "Cold Call", value: 20, color: "#8884d8" },
  { name: "LinkedIn", value: 20, color: "#FF8042" },
  { name: "Trade Show", value: 20, color: "#FFBB28" },
];

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{
    payload: LeadSourceData;
    name: string;
    value: number;
  }>;
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload }) => {
  if (active && payload?.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-3">
        <p className="font-semibold text-gray-900">{data.name}</p>
        <p className="text-gray-600">
          <span className="font-medium">{data.value}%</span>
        </p>
      </div>
    );
  }
  return null;
};

export function LeadSourcePerformance() {
  return (
    <Card className="bg-white text-gray-900">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">
          Lead Source Performance
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-center  border-gray-500">
          <ResponsiveContainer width={600} height={400}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                outerRadius={150}
                dataKey="value"
                label={({ name, value }) => `${name} ${value}%`}
                labelLine={false}
              >
                {data.map((entry) => (
                  <Cell key={`cell-${entry.name}`} fill={entry.color} className="text-red-500"/>
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}