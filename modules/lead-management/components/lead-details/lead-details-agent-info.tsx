"use client";

import React from "react";
import { User } from "lucide-react";
import { LeadDetailsAgentInfoProps } from "./lead-details.types";
import AgentCard from "../agent-card/agent-card";

export default function LeadDetailsAgentInfo({
  lead,
}: LeadDetailsAgentInfoProps) {
  return (
    <div>
      <h2 className="text-base font-semibold text-black mb-3 flex items-center">
        <div className="flex items-center justify-center w-6 h-6 bg-blue-100 rounded-md mr-2">
          <User className="h-3 w-3 text-blue-600" />
        </div>
        Assigned Agent
      </h2>
      <div className="w-full bg-white rounded-lg hover:border-blue-200 hover:shadow-sm transition-all duration-200">
        <AgentCard agentId={lead.agent_id} />
      </div>
    </div>
  );
}
