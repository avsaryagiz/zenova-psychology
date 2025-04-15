import { fetchAPI } from "../api/fetch-API";
import type { Branch, BranchesResponse } from "@/types/strapi-types";

/**
 * Fetch all categories.
 * @returns {Promise<Branch[]>} A promise that resolves to an array of branches.
 */
export async function fetchBranches(): Promise<Branch[]> {
  const response = await fetchAPI<BranchesResponse>("/branches", {
    filters: {
      experts: {
        id: {
          $notNull: true,
        },
      },
    },
  });

  return response.data;
}
