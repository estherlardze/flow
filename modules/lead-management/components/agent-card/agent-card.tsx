"use client";

import React from "react";
import Avatar from "@/components/ui/avatar";
import { getInitials } from "../lead-details/lead-details.utils";
import { AgentCardProps } from "./agent-card.types";

import { User, AlertCircle } from "lucide-react";

function AgentFallbackCard({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <div className="w-full flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
      <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
        {icon}
      </div>
      <span className="text-sm font-medium text-gray-500">{label}</span>
    </div>
  );
}

export default function AgentCard({ agentId }: AgentCardProps) {
  if (!agentId) {
    return (
      <AgentFallbackCard
        label="Unassigned"
        icon={<User className="w-4 h-4 text-gray-400" />}
      />
    );
  }

  const agent = agentId || null;

  if (!agent) {
    return (
      <AgentFallbackCard
        label="Agent not found"
        icon={<AlertCircle className="w-4 h-4 text-gray-400" />}
      />
    );
  }

  const initials = getInitials(agent);

  return (
    <div className="w-full flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors duration-200">
      <Avatar name={agent} initials={initials} showAsButton={false} />
      <div className="flex flex-col">
        <span className="text-sm font-medium text-gray-900">{agent}</span>
        <span className="text-xs text-gray-500">Agent</span>
      </div>
    </div>
  );
}
