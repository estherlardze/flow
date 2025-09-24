"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const activity = [
  { msg: "New lead: John Doe added", time: "2h ago", type: 'new' },
  { msg: "Sarah opened your email", time: "5h ago", type: 'email' },
  { msg: "Mike booked a showing", time: "Yesterday", type: 'calendar' },
];

import { Activity } from 'lucide-react'

export function ActivityFeed() {
  return (
    <Card className="rounded-2xl shadow-sm hover:shadow-md transition-shadow">
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {activity.map((a, i) => (
            <li key={i} className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent/5 transition-colors">
              <div className="mt-1">
                <Activity className="h-5 w-5 text-muted-foreground" />
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium">{a.msg}</div>
                <div className="text-xs text-muted-foreground">{a.time}</div>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
