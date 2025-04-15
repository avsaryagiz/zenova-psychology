import { fetchAPI } from "../api/fetch-API";
import type { PostsResponse, Post } from "@/types/strapi-types";

/**
 * Fetch all post slugs.
 * @returns {Promise<string[]>} A promise that resolves to an array of post slugs.
 */
export async function fetchPostSlugs(): Promise<string[]> {
  const response = await fetchAPI<{ data: Post[] }>("/posts", {
    fields: ["slug"],
  });

  return response.data.map((post) => post.slug);
}

/**
 * Fetch related posts by categories.
 * @param currentPostId The current post's ID.
 * @param categoryIds The category IDs.
 * @param limit The number of posts to fetch.
 * @returns {Promise<Post[]>} A promise that resolves to an array of posts.
 */
export async function fetchRelatedPosts(
  currentPostId: number,
  categoryIds: number[],
  limit: number = 3,
): Promise<Post[]> {
  const response = await fetchAPI<PostsResponse>("/posts", {
    filters: {
      id: { $ne: currentPostId },
      categories: { id: { $in: categoryIds } },
    },
    populate: ["coverImage", "categories", "expert.image"],
    pagination: { limit },
    sort: { createdAt: "desc" },
  });

  return response.data;
}

/**
 * Fetch a single post by slug.
 * @param slugOrId The post's slug or ID.
 * @returns {Promise<Post>} A promise that resolves to a post.
 */
export async function fetchSinglePost(slugOrId: string): Promise<Post> {
  const isNumeric = /^\d+$/.test(slugOrId);
  const filterField = isNumeric ? "id" : "slug";

  const { data } = await fetchAPI<PostsResponse>("/posts", {
    filters: { [filterField]: { $eq: slugOrId } },
    populate: {
      coverImage: { fields: ["url"] },
      expert: { populate: ["image"] },
      categories: { fields: ["name", "slug"] },
    },
  });
  if (data.length === 0) {
    throw new Error("Post not found");
  }

  return data[0];
}

/**
 * Fetch posts by Category with optional pagination.
 * @param categorySlug The category's slug.
 * @param start The start index.
 * @param limit The number of posts to fetch.
 * @returns {Promise<Post[]>} A promise that resolves to an array of posts.
 */
export async function fetchPostsByCategory(
  categorySlug: string,
  start?: number,
  limit?: number,
): Promise<PostsResponse> {
  const baseQuery = {
    filters: { categories: { slug: { $eq: categorySlug } } },
    populate: ["coverImage", "categories", "expert.image"],
    sort: { createdAt: "desc" },
  };

  const query =
    start !== undefined && limit !== undefined
      ? { ...baseQuery, pagination: { start, limit } }
      : baseQuery;

  const response = await fetchAPI<PostsResponse>("/posts", query);

  return response;
}

/**
 * Fetch all posts with optional pagination.
 * @param start The start index.
 * @param limit The number of posts to fetch.
 * @returns {Promise<Post[]>} A promise that resolves to an array of posts.
 */
export async function fetchPosts(
  start?: number,
  limit?: number,
): Promise<PostsResponse> {
  const baseQuery = {
    sort: { createdAt: "desc" },
    populate: ["coverImage", "categories", "expert.image"],
  };

  const query =
    start !== undefined && limit !== undefined
      ? { ...baseQuery, pagination: { start, limit } }
      : baseQuery;

  const response = await fetchAPI<PostsResponse>("/posts", query);

  return { data: response.data as Post[], meta: response.meta };
}
