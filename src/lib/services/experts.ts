import { fetchAPI } from "../api/fetch-API";
import type { Expert, ExpertsResponse } from "@/types/strapi-types";

/**
 * Fetch all experts.
 * @returns {Promise<ExpertsResponse[]>} A promise that resolves to an array of experts.
 */
export async function fetchExperts(): Promise<Expert[]> {
  const response = await fetchAPI<ExpertsResponse>("/experts", {
    sort: { priority: "asc" },
    populate: ["image", "specialities", "branch"],
  });

  return response.data;
}
