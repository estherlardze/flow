import { CheckCircle, Flame, TrendingUp, Users, Timer } from "lucide-react";

export type Lead = {
  id: string;
  name: string;
  status: string;
  value?: number;
  lastActivity?: string;
  location?: string;
  priority?: "low" | "medium" | "high";
};

export const mockLeads: Lead[] = [
  {
    id: "1",
    name: "Sarah Connor",
    status: "New",
    value: 450000,
    lastActivity: "2025-09-09",
    location: "Brooklyn, NY",
    priority: "high",
  },
  {
    id: "2",
    name: "John Doe",
    status: "Contacted",
    value: 320000,
    lastActivity: "2025-09-08",
    location: "Queens, NY",
    priority: "medium",
  },
  {
    id: "3",
    name: "David Smith",
    status: "Nurturing",
    value: 210000,
    lastActivity: "2025-09-04",
    location: "Bronx, NY",
    priority: "low",
  },
  {
    id: "4",
    name: "Priya Patel",
    status: "Scheduled Showing",
    value: 720000,
    lastActivity: "2025-09-10",
    location: "Manhattan, NY",
    priority: "high",
  },
  {
    id: "5",
    name: "Carlos Ruiz",
    status: "Hot",
    value: 580000,
    lastActivity: "2025-09-10",
    location: "Staten Island, NY",
    priority: "high",
  },
  {
    id: "6",
    name: "Emma Green",
    status: "Offer Made",
    value: 400000,
    lastActivity: "2025-09-01",
    location: "Brooklyn, NY",
    priority: "medium",
  },
  {
    id: "7",
    name: "Liam Brown",
    status: "Closed",
    value: 600000,
    lastActivity: "2025-08-28",
    location: "Queens, NY",
    priority: "high",
  },
  {
    id: "8",
    name: "Olivia Lee",
    status: "Lost",
    value: 0,
    lastActivity: "2025-08-15",
    location: "Bronx, NY",
    priority: "low",
  },
];

export const mockTasks = [
  {
    id: "t1",
    title: "Call Sarah about pre-approval",
    due: "2025-09-10",
    leadId: "1",
  },
  {
    id: "t2",
    title: "Send comparables to Priya",
    due: "2025-09-11",
    leadId: "4",
  },
  {
    id: "t3",
    title: "Follow up with John re: docs",
    due: "2025-09-06",
    leadId: "2",
  },
];

export const mockActivities = [
  { id: "a1", text: "New lead: Sarah Connor", time: "2m" },
  { id: "a2", text: "Priya booked a showing for 2025-09-12", time: "1h" },
  { id: "a3", text: "Carlos replied to email", time: "3h" },
];

export const mockCalendar = [
  { id: "c1", title: "Showing - 123 Maple Ave", time: "2025-09-11 10:00" },
  { id: "c2", title: "Call: Sarah Connor", time: "2025-09-10 15:00" },
];

export const statItems = [
  {
    key: "total",
    title: "Total Leads",
    icon: Users,
    quantity: "150",
    bgClass: "bg-blue-600/10",
    colorClass: "text-blue-600",
    lastmonth: "-12%",
  },
  {
    key: "closed",
    title: "Conversion Rate ",
    icon: TrendingUp,
    quantity: "45%",
    bgClass: "bg-violet-600/10",
    colorClass: "text-violet-600",
    lastmonth: "+3%",
  },
  {
    key: "new",
    title: "New Leads",
    icon: CheckCircle,
    quantity: "35",
    bgClass: "bg-green-600/10",
    colorClass: "text-green-600",
    lastmonth: "+5%",
  },
  {
    key: "active",
    title: "Active Leads",
    quantity: "85",
    icon: Flame,
    bgClass: "bg-red-600/10",
    colorClass: "text-red-600",
    lastmonth: "-0.5%",
  },
  {
    key: "time",
    title: "Avg Response Time",
    quantity: "2.3h",
    icon: Timer,
    bgClass: "bg-amber-600/10",
    colorClass: "text-amber-600",
    lastmonth: "+8h",
  },
];

export const data = [
  { stage: "New", count: 120 },
  { stage: "Contacted", count: 90 },
  { stage: "Nurturing", count: 60 },
  { stage: "Scheduled", count: 40 },
  { stage: "Offer Made", count: 25 },
  { stage: "Closed", count: 15 },
];

export const COLORS = [
  "#3b82f6",
  "#60a5fa",
  "#34d399",
  "#fbbf24",
  "#fb7185",
  "#a78bfa",
];

// monthly performance data (used in performance.tsx)

export const monthlySeries = [
  { month: "Apr", total: 10, new: 20, active: 60, closed: 5 },
  { month: "May", total: 230, new: 25, active: 62, closed: 10 },
  { month: "Jun", total: 25, new: 18, active: 58, closed: 20 },
  { month: "Jul", total: 245, new: 30, active: 70, closed: 9 },
  { month: "Aug", total: 20, new: 22, active: 65, closed: 12 },
  { month: "Sep", total: 260, new: 28, active: 68, closed: 8 },
];
