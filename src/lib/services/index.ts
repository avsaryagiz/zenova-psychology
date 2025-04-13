import { unstable_cache } from "next/cache";
import { AppError, handleError } from "../utils/error-handler";
import {
  fetchPosts,
  fetchPostsByCategory,
  fetchPostSlugs,
  fetchRelatedPosts,
  fetchSinglePost,
} from "./posts";
import { fetchCategories } from "./categories";
import { ERROR_MESSAGES } from "@/config/constants/error-messages";
import type { Category, Post } from "@/types/strapi_types";

/**
 * Fetch all posts' slugs and cache the response.
 * @returns {Promise<string[]>} A promise that resolves to an array of post slugs.
 */
export const getCachedPostSlugs = unstable_cache(
  async (): Promise<string[]> => {
    try {
      return await fetchPostSlugs();
    } catch (error) {
      handleError(
        new AppError(
          ERROR_MESSAGES.FETCH_POST_SLUGS,
          "fn:getCachedPostSlugs",
          error,
        ),
      );
      return [] as string[];
    }
  },
  ["post-slugs-cache"],
  { tags: ["revalidate"] },
);

/**
 * Fetch all related posts and cache the response.
 * @param postId The post's ID.
 * @param categoryIds The post's category IDs.
 * @returns {Promise<IPost[]>} A promise that resolves to an array of posts.
 */
export const getCachedRelatedPosts = unstable_cache(
  async (postId: number, categoryIds: number[]): Promise<Post[]> => {
    try {
      return await fetchRelatedPosts(postId, categoryIds);
    } catch (error) {
      handleError(
        new AppError(
          ERROR_MESSAGES.FETCH_POSTS_RELATED,
          "fn:getCachedRelatedPosts",
          error,
        ),
      );
      return [] as Post[];
    }
  },
  ["related-posts-cache"],
  { tags: ["revalidate"] },
);

/**
 * Fetch a single post by slug and cache the response.
 * @param slug The post's slug.
 * @returns {Promise<IPost>} A promise that resolves to a post.
 */
export const getCachedSinglePost = unstable_cache(
  async (slug: string): Promise<Post> => {
    try {
      return await fetchSinglePost(slug);
    } catch (error) {
      handleError(
        new AppError(
          ERROR_MESSAGES.FETCH_POSTS,
          "fn:getCachedSinglePost",
          error,
        ),
      );
      return {} as Post;
    }
  },
  ["post-cache", "single-post"],
  { tags: ["revalidate"] },
);

/**
 * Fetch the latest posts and cache the response.
 * @returns {Promise<IPost[]>} A promise that resolves to an array of latest posts.
 * This function fetches the latest three posts from the API and caches the response.
 */
export const getCachedLatestPosts = unstable_cache(
  async (): Promise<Post[]> => {
    try {
      const latestPosts = await fetchPosts(0, 3);
      return latestPosts.data;
    } catch (error) {
      handleError(
        new AppError(
          ERROR_MESSAGES.FETCH_POSTS_LATEST,
          "fn:getCachedPosts",
          error,
        ),
      );
      return [] as Post[];
    }
  },
  ["latest-posts-cache"],
  { tags: ["revalidate"] },
);

/**
 * Fetch all categories and cache the response.
 * @returns {Promise<CategoriesResponse>} A promise that resolves to an array of categories.
 */
export const getCachedCategories = unstable_cache(
  async (): Promise<Category[]> => {
    try {
      return await fetchCategories();
    } catch (error) {
      handleError(
        new AppError(
          ERROR_MESSAGES.FETCH_CATEGORIES,
          "fn:getCachedCategories",
          error,
        ),
      );
      return [] as Category[];
    }
  },
  ["categories-cache"],
  { tags: ["revalidate"] },
);

/**
 * Fetch all posts by category and cache the response.
 * @param category The category's slug.
 * @returns {Promise<Post[]>} A promise that resolves to an array of posts.
 */
export const getCachedPosts = unstable_cache(
  async (
    category?: string,
  ): Promise<{
    categories: Category[];
    postsData: Post[];
  }> => {
    try {
      const [categories, posts] = await Promise.all([
        getCachedCategories(),
        category === "tum-kategoriler"
          ? fetchPosts()
          : fetchPostsByCategory(category!),
      ]);
      const postsData = posts.data;
      return {
        categories,
        postsData,
      };
    } catch (error) {
      handleError(
        new AppError(
          ERROR_MESSAGES.FETCH_POSTS_BY_CATEGORY,
          "fn:getCachedPosts",
          error,
        ),
      );
      return {
        categories: [],
        postsData: [],
      };
    }
  },
  ["category-posts-cache"],
  { tags: ["revalidate"] },
);
