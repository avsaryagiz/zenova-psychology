const generateErrorMessage = (
  action: string,
  entity: string,
  attachment?: string,
) => `An error occurred while ${action} the ${entity}. ${attachment}`;

export const ERROR_MESSAGES = {
  FETCH_API: generateErrorMessage("using", "Fetch API"),
  FETCH_EXPERTS: generateErrorMessage("fetching", "experts"),
  FETCH_POSTS_BY_CATEGORY: generateErrorMessage(
    "fetching",
    "posts by category",
  ),
  FETCH_POSTS_BY_EXPERT: generateErrorMessage("fetching", "posts by author"),
  FETCH_POSTS_RELATED: generateErrorMessage("fetching", "related posts"),
  FETCH_POSTS_LATEST: generateErrorMessage("fetching", "latest posts"),
  FETCH_POST_SLUGS: generateErrorMessage("fetching", "post slugs"),
  FETCH_POSTS: generateErrorMessage("fetching", "post/s"),
  FETCH_CATEGORIES: generateErrorMessage("fetching", "categories"),
  METADATA: generateErrorMessage("generating", "metadata"),
  CLIENT: "An error occurred.",
  DATABASE: generateErrorMessage("connecting to", "database"),
  WAITLIST: generateErrorMessage(
    "fetching",
    "waitlist",
    "Please try again later.",
  ),
};
