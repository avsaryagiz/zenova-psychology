import { fetchAPI } from "../api/fetch-API";
import type { CategoriesResponse, Category } from "@/types/strapi_types";

/**
 * Fetch all categories.
 * @returns {Promise<CategoriesResponse[]>} A promise that resolves to an array of categories.
 */
export async function fetchCategories(): Promise<Category[]> {
  const response = await fetchAPI<CategoriesResponse>("/categories", {
    filters: {
      posts: {
        id: {
          $notNull: true,
        },
      },
    },
  });

  return response.data;
}
