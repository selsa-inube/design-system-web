/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

interface CreateIssueResponse {
  success: boolean;
  data?: any;
  error?: string;
}

const createGithubIssue = async (
  title: string,
  body: string,
): Promise<CreateIssueResponse> => {
  try {
    const response = await axios.post("/api/createIssue", { title, body });
    return { success: true, data: response.data };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
};

export { createGithubIssue };
