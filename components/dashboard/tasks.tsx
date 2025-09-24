"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const tasks = [
  { task: "Follow up with Sarah", due: "Today", status: "Overdue" },
  { task: "Call Mike", due: "Tomorrow", status: "Pending" },
  { task: "Email Lisa", due: "Fri", status: "Pending" },
    { task: "Email Lisa", due: "Fri", status: "Pending" },

      { task: "Email Lisa", due: "Fri", status: "Pending" },

];

export function Tasks() {
  return (
    <Card className="rounded-2xl shadow-sm hover:shadow-md transition-shadow">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Tasks & Reminders</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3 h-[350px] overflow-y-auto hide-scrollbar">
          {tasks.map((t, i) => (
            <li key={i} className="flex items-center justify-between gap-4 p-3 rounded-lg hover:bg-accent/5 transition-colors">
              <div>
                <div className="font-medium">{t.task}</div>
                <div className="text-xs text-muted-foreground">Due {t.due}</div>
              </div>
              <div>
                {t.status === 'Overdue' ? (
                  <span className="inline-flex items-center rounded-full bg-red-50 px-3 py-1 text-xs font-semibold text-red-600">Overdue</span>
                ) : (
                  <span className="inline-flex items-center rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-600">{t.status}</span>
                )}
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
