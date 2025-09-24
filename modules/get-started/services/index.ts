import { handleAppwriteError } from "@/appwrite/utils";
import { LeadFormData } from "../components/get-started/get-started.types";
import { ID, tablesDB } from "@/appwrite/config";
import { ENV_VARS } from "@/appwrite/const";

export const createLead = async (data: LeadFormData) => {
  try {
    const response = await tablesDB.createRow({
      databaseId: ENV_VARS.DATABASE_ID,
      tableId: ENV_VARS.LEADS_TABLE_ID,
      rowId: ID.unique(),
      data: { ...data, source: "website", status: "new" },
    });
    return {
      success: true,
      data: {
        email: response.email,
      },
    };
  } catch (error) {
    return handleAppwriteError(error);
  }
};
