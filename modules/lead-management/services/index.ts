import { ID, tablesDB } from "@/appwrite/config";
import { ENV_VARS } from "@/appwrite/const";
import { handleAppwriteError } from "@/appwrite/utils";
import { LeadFormData } from "../components/lead-form-sheet/lead-form-sheet.types";

import { Lead, LeadTag, Tag, FollowUp } from "./types";
import { enrichLeadsWithTags } from "./utils";
import { Query } from "appwrite";

export const fetchLeads = async () => {
  try {
    const [leadsResponse, leadTagsResponse, tagsResponse] = await Promise.all([
      tablesDB.listRows({
        databaseId: ENV_VARS.DATABASE_ID,
        tableId: ENV_VARS.LEADS_TABLE_ID,
      }),
      tablesDB.listRows({
        databaseId: ENV_VARS.DATABASE_ID,
        tableId: ENV_VARS.LEAD_TAGS_TABLE_ID,
      }),
      tablesDB.listRows({
        databaseId: ENV_VARS.DATABASE_ID,
        tableId: ENV_VARS.TAGS_TABLE_ID,
      }),
    ]);

    const enrichedLeads = enrichLeadsWithTags(
      leadsResponse.rows as unknown as Lead[],
      leadTagsResponse.rows as unknown as LeadTag[],
      tagsResponse.rows as unknown as Tag[]
    );

    return {
      success: true,
      data: {
        ...leadsResponse,
        rows: enrichedLeads,
      },
    };
  } catch (error) {
    return handleAppwriteError(error);
  }
};

export const createLead = async (data: LeadFormData) => {
  try {
    const response = await tablesDB.createRow({
      databaseId: ENV_VARS.DATABASE_ID,
      tableId: ENV_VARS.LEADS_TABLE_ID,
      rowId: ID.unique(),
      data: { ...data, status: "new" },
    });

    return {
      success: true,
      message: "Lead created successfully",
      data: response,
    };
  } catch (error) {
    return handleAppwriteError(error);
  }
};

export const deleteLead = async (leadId: string) => {
  try {
    await tablesDB.deleteRow({
      databaseId: ENV_VARS.DATABASE_ID,
      tableId: ENV_VARS.LEADS_TABLE_ID,
      rowId: leadId,
    });

    return {
      success: true,
      message: "Lead deleted successfully",
    };
  } catch (error) {
    return handleAppwriteError(error);
  }
};

export const deleteMultipleLeads = async (leadIds: string[]) => {
  try {
    await Promise.all(
      leadIds.map((leadId) =>
        tablesDB.deleteRow({
          databaseId: ENV_VARS.DATABASE_ID,
          tableId: ENV_VARS.LEADS_TABLE_ID,
          rowId: leadId,
        })
      )
    );

    return {
      success: true,
      message: `${leadIds.length} lead(s) deleted successfully`,
    };
  } catch (error) {
    return handleAppwriteError(error);
  }
};

export const updateLead = async (leadId: string, data: LeadFormData) => {
  try {
    const response = await tablesDB.updateRow({
      databaseId: ENV_VARS.DATABASE_ID,
      tableId: ENV_VARS.LEADS_TABLE_ID,
      rowId: leadId,
      data,
    });

    return {
      success: true,
      message: "Lead updated successfully",
      data: response,
    };
  } catch (error) {
    return handleAppwriteError(error);
  }
};

export const fetchLeadById = async (leadId: string) => {
  try {
    const response = await tablesDB.getRow({
      databaseId: ENV_VARS.DATABASE_ID,
      tableId: ENV_VARS.LEADS_TABLE_ID,
      rowId: leadId,
    });

    return {
      success: true,
      message: "Lead fetched successfully",
      data: response,
    };
  } catch (error) {
    return handleAppwriteError(error);
  }
};

export const updateLeadStatus = async (leadIds: string[], status: string) => {
  try {
    const responses = await Promise.all(
      leadIds.map((leadId) =>
        tablesDB.updateRow({
          databaseId: ENV_VARS.DATABASE_ID,
          tableId: ENV_VARS.LEADS_TABLE_ID,
          rowId: leadId,
          data: { status },
        })
      )
    );

    return {
      success: true,
      message: `${leadIds.length} lead(s) updated successfully`,
      data: responses,
    };
  } catch (error) {
    return handleAppwriteError(error);
  }
};

export const createLeadTag = async (tagName: string) => {
  try {
    const response = await tablesDB.createRow({
      databaseId: ENV_VARS.DATABASE_ID,
      tableId: ENV_VARS.TAGS_TABLE_ID,
      rowId: ID.unique(),
      data: {
        text: tagName,
      },
    });

    return {
      success: true,
      message: "Tag created successfully",
      data: response,
    };
  } catch (error) {
    return handleAppwriteError(error);
  }
};

export const fetchLeadTags = async () => {
  try {
    const response = await tablesDB.listRows({
      databaseId: ENV_VARS.DATABASE_ID,
      tableId: ENV_VARS.TAGS_TABLE_ID,
    });

    return {
      success: true,
      data: response,
    };
  } catch (error) {
    return handleAppwriteError(error);
  }
};

export const deleteLeadTag = async (tagId: string) => {
  try {
    await tablesDB.deleteRow({
      databaseId: ENV_VARS.DATABASE_ID,
      tableId: ENV_VARS.TAGS_TABLE_ID,
      rowId: tagId,
    });

    return {
      success: true,
      message: "Tag deleted successfully",
    };
  } catch (error) {
    return handleAppwriteError(error);
  }
};

export const updateLeadTag = async (tagId: string, tag: string) => {
  try {
    const response = await tablesDB.updateRow({
      databaseId: ENV_VARS.DATABASE_ID,
      tableId: ENV_VARS.TAGS_TABLE_ID,
      rowId: tagId,
      data: {
        text: tag,
      },
    });

    return {
      success: true,
      message: "Tag updated successfully",
      data: response,
    };
  } catch (error) {
    return handleAppwriteError(error);
  }
};

export const assignTagToLead = async (leadId: string, tagId: string) => {
  try {
    const response = await tablesDB.createRow({
      databaseId: ENV_VARS.DATABASE_ID,
      tableId: ENV_VARS.LEAD_TAGS_TABLE_ID,
      rowId: ID.unique(),
      data: {
        lead_id: leadId,
        tag_id: tagId,
      },
    });

    return {
      success: true,
      message: "Tag assigned to lead successfully",
      data: response,
    };
  } catch (error) {
    return handleAppwriteError(error);
  }
};

export const assignTagToMultipleLeads = async (
  leadIds: string[],
  tagId: string
) => {
  try {
    const responses = await Promise.all(
      leadIds.map((leadId) =>
        tablesDB.createRow({
          databaseId: ENV_VARS.DATABASE_ID,
          tableId: ENV_VARS.LEAD_TAGS_TABLE_ID,
          rowId: ID.unique(),
          data: {
            lead_id: leadId,
            tag_id: tagId,
          },
        })
      )
    );

    return {
      success: true,
      message: `${leadIds.length} lead(s) tagged successfully`,
      data: responses,
    };
  } catch (error) {
    return handleAppwriteError(error);
  }
};

export const createNoteForLead = async (leadId: string, content: string) => {
  try {
    const response = await tablesDB.createRow({
      databaseId: ENV_VARS.DATABASE_ID,
      tableId: ENV_VARS.NOTES_TABLE_ID,
      rowId: ID.unique(),
      data: {
        lead_id: leadId,
        content,
      },
    });

    return {
      success: true,
      message: "Note created successfully",
      data: response,
    };
  } catch (error) {
    return handleAppwriteError(error);
  }
};

export const fetchNotesForLead = async (leadId: string) => {
  try {
    const response = await tablesDB.listRows({
      databaseId: ENV_VARS.DATABASE_ID,
      tableId: ENV_VARS.NOTES_TABLE_ID,
      queries: [Query.equal("lead_id", leadId)],
    });

    return {
      success: true,
      message: "Notes fetched successfully",
      data: response.rows,
    };
  } catch (error) {
    return handleAppwriteError(error);
  }
};

export const deleteNote = async (noteId: string) => {
  try {
    await tablesDB.deleteRow({
      databaseId: ENV_VARS.DATABASE_ID,
      tableId: ENV_VARS.NOTES_TABLE_ID,
      rowId: noteId,
    });

    return {
      success: true,
      message: "Note deleted successfully",
    };
  } catch (error) {
    return handleAppwriteError(error);
  }
};

export const updateNote = async (noteId: string, content: string) => {
  try {
    const response = await tablesDB.updateRow({
      databaseId: ENV_VARS.DATABASE_ID,
      tableId: ENV_VARS.NOTES_TABLE_ID,
      rowId: noteId,
      data: {
        content,
      },
    });

    return {
      success: true,
      message: "Note updated successfully",
      data: response,
    };
  } catch (error) {
    return handleAppwriteError(error);
  }
};

export const createLeadFollowUp = async (
  leadId: string,
  scheduled_at: Date,
  message: string
) => {
  try {
    const response = await tablesDB.createRow({
      databaseId: ENV_VARS.DATABASE_ID,
      tableId: ENV_VARS.FOLLOW_UP_TABLE_ID,
      rowId: ID.unique(),
      data: {
        lead_id: leadId,
        scheduled_at,
        message,
        status: "pending",
        type: "email",
      },
    });

    return {
      success: true,
      message: "Follow up created successfully",
      data: response,
    };
  } catch (error) {
    return handleAppwriteError(error);
  }
};

export const createMultipleLeadFollowUps = async (
  leadIds: string[],
  scheduled_at: string,
  message: string
) => {
  try {
    const responses = await Promise.all(
      leadIds.map((leadId) =>
        tablesDB.createRow({
          databaseId: ENV_VARS.DATABASE_ID,
          tableId: ENV_VARS.FOLLOW_UP_TABLE_ID,
          rowId: ID.unique(),
          data: {
            lead_id: leadId,
            scheduled_at,
            message,
            status: "pending",
          },
        })
      )
    );

    return {
      success: true,
      message: `${leadIds.length} follow up(s) created successfully`,
      data: responses,
    };
  } catch (error) {
    return handleAppwriteError(error);
  }
};

export const fetchFollowUpsForLead = async (leadId: string) => {
  try {
    const response = await tablesDB.listRows({
      databaseId: ENV_VARS.DATABASE_ID,
      tableId: ENV_VARS.FOLLOW_UP_TABLE_ID,
      queries: [Query.equal("lead_id", leadId)],
    });

    return {
      success: true,
      message: "Follow ups fetched successfully",
      data: response.rows,
    };
  } catch (error) {
    return handleAppwriteError(error);
  }
};

export const updateFollowUp = async (
  followUpId: string,
  data: Partial<Pick<FollowUp, "message" | "scheduled_at" | "status" | "type">>
) => {
  try {
    const response = await tablesDB.updateRow({
      databaseId: ENV_VARS.DATABASE_ID,
      tableId: ENV_VARS.FOLLOW_UP_TABLE_ID,
      rowId: followUpId,
      data,
    });

    return {
      success: true,
      message: "Follow up updated successfully",
      data: response,
    };
  } catch (error) {
    return handleAppwriteError(error);
  }
};
