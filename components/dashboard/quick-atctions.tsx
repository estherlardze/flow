"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function QuickActions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <Button>Add New Lead</Button>
        <Button variant="outline">Send Follow-Up</Button>
        <Button variant="outline">Schedule Showing</Button>
        <Button variant="outline">Share Lead</Button>
      </CardContent>
    </Card>
  );
}
