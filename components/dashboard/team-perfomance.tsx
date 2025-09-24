import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface TeamMember {
  name: string;
  closed: number;
  total: number;
  calls: number;
  avgResponse: string;
  rate: number;
}

const teamData: TeamMember[] = [
  {
    name: "Sarah Johnson",
    closed: 0,
    total: 2,
    calls: 2,
    avgResponse: "1.1h",
    rate: 0
  },
  {
    name: "Mike Wilson",
    closed: 0,
    total: 2,
    calls: 1,
    avgResponse: "1.0h",
    rate: 0
  },
  {
    name: "David Brown",
    closed: 1,
    total: 1,
    calls: 1,
    avgResponse: "3.5h",
    rate: 100
  }
];

export function TeamPerformance() {
  return (
    <Card className=" text-gray-900 bg-white">
      <CardHeader>
        <CardTitle className="text-lg font-semibold ">
          Team Performance
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {teamData.map((member) => (
            <div
              key={member.name}
              className=" rounded-lg p-4 flex justify-between items-center border border-gray-300"
            >
              <div className="flex flex-col">
                <h3 className="text-gray-900 font-medium text-base mb-1">
                  {member.name}
                </h3>
                <p className="text-gray-900 text-sm">
                  {member.closed}/{member.total} closed • {member.calls} calls
                </p>
              </div>
              
              <div className="text-right">
                <div className="text-gray-900 font-medium text-base mb-1">
                  {member.rate}% rate
                </div>
                <div className="text-slate-400 text-sm">
                  {member.avgResponse} avg response
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};