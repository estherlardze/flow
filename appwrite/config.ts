import { Client, Account, ID, TablesDB } from "appwrite";
import { ENV_VARS } from "./const";

export const client = new Client();

try {
  client.setEndpoint(ENV_VARS.API_ENDPOINT).setProject(ENV_VARS.PROJECT_ID);
} catch (error) {
  throw error;
}

export const account = new Account(client);
export const tablesDB = new TablesDB(client);
export { ID };
