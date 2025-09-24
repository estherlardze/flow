"use client";

import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Eye, AlertTriangle, Users } from "lucide-react";
import {
  LeadDetailsProps,
  RawLeadFromAppwrite,
  BackendNote,
  BackendFollowUp,
} from "./lead-details.types";

import LeadDetailsHeader from "./lead-details-header";
import LeadDetailsContactInfo from "./lead-details-contact-info";
import LeadDetailsPropertyPreferences from "./lead-details-property-preferences";
import LeadDetailsAgentInfo from "./lead-details-agent-info";

import LeadDetailsTags from "./lead-details-tags";
import LeadDetailsActivityTimeline from "./lead-details-activity-timeline";
import LeadDetailsNotes from "./lead-details-notes";
import LeadDetailsFollowUps from "./lead-details-follow-ups";

import { useFetchLeadById } from "../../hooks/use-fetch-lead";

import { transformLeadDetails } from "./lead-details.utils";
import { InlineLoadingSpinner } from "@/components/loading-spinner/loading-spinner-presets";
import { useFetchNotesForLead } from "../../hooks/use-fetch-notes-for-lead";
import { useFetchFollowUpsForLead } from "../../hooks/use-fetch-followup-for-lead";

export default function LeadDetails({
  lead,
  triggerText = "View Details",
}: LeadDetailsProps) {
  if (!lead) return null;

  const {
    data: fetchedLead,
    isPending: isFetchingLeadDetail,
    error,
  } = useFetchLeadById(lead.id);

  const hasValidData =
    fetchedLead && "data" in fetchedLead && fetchedLead.success;
  const hasError =
    error || (fetchedLead && "success" in fetchedLead && !fetchedLead.success);

  const leadData: RawLeadFromAppwrite | null = hasValidData
    ? (fetchedLead.data as unknown as RawLeadFromAppwrite)
    : null;
  const leadDataDetails = leadData
    ? { ...transformLeadDetails(leadData), tags: lead.tags }
    : null;

  const { data: notesData, isLoading: isLoadingNotes } = useFetchNotesForLead(
    lead.id
  );

  const { data: followUpsData, isLoading: isLoadingFollowUps } = useFetchFollowUpsForLead(
    lead.id
  );

  return (
    <Sheet>
      <SheetTrigger asChild>
        <div
          className="flex items-center gap-3 px-3 py-2 text-sm text-gray-700 hover:bg-blue-50
        hover:text-blue-700 rounded-md cursor-pointer transition-colors"
        >
          <div className="flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full">
            <Eye className="h-4 w-4 text-blue-600" />
          </div>
          <div className="flex flex-col">
            <span className="font-medium">{triggerText}</span>
            <span className="text-xs text-gray-500">Open lead profile</span>
          </div>
        </div>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-full sm:max-w-2xl bg-gray-50 overflow-y-auto p-0 [&>button]:top-4
        [&>button]:right-4 [&>button]:bg-blue-600 [&>button]:hover:bg-blue-700 [&>button]:text-white [&>button]:rounded-full
        [&>button]:w-8 [&>button]:h-8 [&>button]:flex [&>button]:items-center [&>button]:justify-center [&>button]:shadow-md [&>button]:border-0"
      >
        <div className="bg-white m-4 rounded-lg shadow-sm border border-gray-200 overflow-hidden h-[calc(100vh-2rem)]">
          <div
            className="h-full overflow-y-auto"
            style={{
              scrollbarWidth: "thin",
              scrollbarColor: "#2563eb #f3f4f6",
            }}
          >
            {isFetchingLeadDetail ? (
              <div className="flex items-center justify-center h-full">
                <InlineLoadingSpinner text="Loading lead details..." />
              </div>
            ) : hasError ? (
              <div className="flex items-center justify-center h-full">
                <div className="text-center p-6">
                  <div className="text-red-500 mb-2">
                    <AlertTriangle className="w-12 h-12 mx-auto" />
                  </div>
                  <p className="text-gray-700 font-medium">
                    Failed to load lead details
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    {error?.message ||
                      (fetchedLead && "message" in fetchedLead
                        ? fetchedLead.message
                        : "Unknown error occurred")}
                  </p>
                </div>
              </div>
            ) : leadDataDetails ? (
              <>
                <LeadDetailsHeader lead={leadDataDetails} />
                <div className="p-4 space-y-6">
                  <LeadDetailsContactInfo lead={leadDataDetails} />
                  <LeadDetailsPropertyPreferences lead={leadDataDetails} />
                  <LeadDetailsAgentInfo lead={leadDataDetails} />
                  <LeadDetailsTags lead={leadDataDetails} />
                  <LeadDetailsNotes
                    notes={
                      notesData && "data" in notesData
                        ? (notesData.data as unknown as BackendNote[])
                        : []
                    }
                    isLoading={isLoadingNotes}
                    leadId={lead.id}
                  />
                  <LeadDetailsFollowUps
                    followUps={
                      followUpsData && "data" in followUpsData
                        ? (followUpsData.data as unknown as BackendFollowUp[])
                        : []
                    }
                    isLoading={isLoadingFollowUps}
                    leadId={lead.id}
                  />
                  <LeadDetailsActivityTimeline lead={leadDataDetails} />
                </div>
              </>
            ) : (
              <div className="flex items-center justify-center h-full">
                <div className="text-center p-6">
                  <div className="text-gray-400 mb-2">
                    <Users className="w-12 h-12 mx-auto" />
                  </div>
                  <p className="text-gray-500">No lead data available</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
