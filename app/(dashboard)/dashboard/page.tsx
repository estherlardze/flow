import { ActivityFeed } from "@/components/dashboard/activity-feed";
import SummaryCards from "@/components/dashboard/summary-cards";
import { HotLeads } from "@/components/dashboard/hot-leads";
import { Performance } from "@/components/dashboard/perfomance";
import { QuickActions } from "@/components/dashboard/quick-atctions";
import { Tasks } from "@/components/dashboard/tasks";
import { LeadBarChart } from "@/components/dashboard/lead-status-charts";
import { LeadSourcePerformance } from "@/components/dashboard/lead-source-perfomance";
import { TeamPerformance } from "@/components/dashboard/team-perfomance";

export default function DashboardPage() {
  return (
    <div className="p-6 space-y-6">
      <SummaryCards />

      <div className="grid gap-6 md:grid-cols-2">
        <LeadSourcePerformance />
        <Performance />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <LeadBarChart />

        <Tasks />
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        <TeamPerformance />
        <ActivityFeed />
        <QuickActions />
      </div>

      <div className="">
        <HotLeads />
      </div>
    </div>
  );
}
