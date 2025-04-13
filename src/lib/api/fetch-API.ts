/* eslint-disable  @typescript-eslint/no-explicit-any */
import qs from "qs";

/**
 * Helper to fetch from Strapi API
 * @param path - API endpoint path
 * @returns - Full URL to Strapi API
 */
export function getStrapiURL(path = ""): string {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://127.0.0.1:1337"
  }${path}`;
}

/**
 * Fetches data from Strapi API
 * @description This function is used to fetch data from the Strapi API. It takes a path, an optional object of URL parameters, and an optional object of options. It returns a promise that resolves to the data fetched from the API.
 * @param path
 * @param urlParamsObject
 * @param options
 * @returns - A promise that resolves to the data fetched from the API.
 */
export async function fetchAPI<T>(
  path: string,
  urlParamsObject = {},
  options: { headers?: Record<string, string> } = {},
): Promise<T> {
  try {
    const token = process.env.STRAPI_BEARER_TOKEN;
    const mergedOptions = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        ...options?.headers,
      },
      ...options,
    };

    const queryString = qs.stringify(urlParamsObject, { encode: false });
    const requestUrl = `${getStrapiURL(
      `/api${path}${queryString ? `?${queryString}` : ""}`,
    )}`;

    const response = await fetch(requestUrl, mergedOptions);

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Failed to fetch ${path}: ${response.status} ${response.statusText}\n${errorText}`,
      );
    }

    return await response.json();
  } catch (error: any) {
    throw new Error(
      `Something went wrong. Please check your API server and parameters.\nError: ${error.message}`,
    );
  }
}
