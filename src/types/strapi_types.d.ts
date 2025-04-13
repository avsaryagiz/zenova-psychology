// types.ts

// ==========================================
// Base Interfaces
// ==========================================

/**
 * Base entity interface with common properties
 */
export interface BaseEntity {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

/**
 * Common pagination metadata
 */
export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

/**
 * Common response metadata
 */
export interface ResponseMeta {
  pagination: Pagination;
}

/**
 * Generic API response structure
 */
export interface ApiResponse<T> {
  data: T[];
  meta: ResponseMeta;
}

// ==========================================
// Image Interfaces
// ==========================================

/**
 * Image format details
 */
export interface ImageFormat {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: null;
  size: number;
  width: number;
  height: number;
  sizeInBytes: number;
}

/**
 * Available image formats
 */
export interface ImageFormats {
  small: ImageFormat;
  thumbnail: ImageFormat;
  url?: ImageFormat;
}

/**
 * Complete image entity
 */
export interface Image extends BaseEntity {
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: ImageFormats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: null | undefined;
}

/**
 * Image data used within content blocks
 */
export interface ContentImage {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  size: number;
  width: number;
  height: number;
  caption: string | null;
  formats: ImageFormats;
  provider: string;
  createdAt: string;
  updatedAt: string;
  previewUrl: string | null;
  alternativeText: string | null;
  provider_metadata: null | undefined;
}

// ==========================================
// Content Node Interfaces
// ==========================================

/**
 * Base node interface
 */
export interface BaseNode {
  type: string;
}

/**
 * Text node with formatting options
 */
export interface TextNode extends BaseNode {
  type: "text";
  text: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  strikethrough?: boolean;
  code?: boolean;
}

/**
 * Link node
 */
export interface LinkNode extends BaseNode {
  type: "link";
  url: string;
  children: (TextNode | LinkNode)[];
}

/**
 * Union type for all possible content node children
 */
export type ContentNodeChild = TextNode | LinkNode;

// ==========================================
// Content Block Interfaces
// ==========================================

/**
 * Base block interface
 */
export interface BaseBlock {
  type: string;
}

/**
 * Text-based content blocks
 */
export interface TextContentBlock extends BaseBlock {
  children: ContentNodeChild[];
}

/**
 * List-based content blocks
 */
export interface ListContentBlock extends BaseBlock {
  children: (ListItemBlock | ListBlock)[];
}

/**
 * Heading block with levels 1-6
 */
export interface HeadingBlock extends TextContentBlock {
  type: "heading";
  level: 1 | 2 | 3 | 4 | 5 | 6;
}

/**
 * Paragraph block
 */
export interface ParagraphBlock extends TextContentBlock {
  type: "paragraph";
}

/**
 * Quote block
 */
export interface QuoteBlock extends TextContentBlock {
  type: "quote";
}

/**
 * List item block
 */
export interface ListItemBlock extends TextContentBlock {
  type: "list-item";
}

/**
 * List block with format and indentation
 */
export interface ListBlock extends ListContentBlock {
  type: "list";
  format: "ordered" | "unordered";
  indentLevel?: number;
}

/**
 * Code block with language
 */
export interface CodeBlock extends TextContentBlock {
  type: "code";
  language: string;
}

/**
 * Image block
 */
export interface ImageBlock extends BaseBlock {
  type: "image";
  image: ContentImage;
  children: ContentNodeChild[];
}

/**
 * Union type for all possible content blocks
 */
export type ContentBlock =
  | HeadingBlock
  | ParagraphBlock
  | QuoteBlock
  | ListBlock
  | ListItemBlock
  | CodeBlock
  | ImageBlock;

// ==========================================
// Entity Interfaces
// ==========================================

/**
 * Category entity
 */
export interface Category extends BaseEntity {
  name: string;
  slug: string;
}

/**
 * Expert entity
 */
export interface Expert extends BaseEntity {
  name: string;
  slug: string;
  image: Image;
}

/**
 * Post entity
 */
export interface Post extends BaseEntity {
  title: string;
  slug: string;
  content: ContentBlock[];
  categories: Category[];
  expert: Expert;
  cover_image: Image;
}

// ==========================================
// Response Interfaces
// ==========================================

/**
 * Categories API response
 */
export type CategoriesResponse = ApiResponse<Category>;

/**
 * Experts API response
 */
export type ExpertsResponse = ApiResponse<Expert>;

/**
 * Posts API response
 */
export type PostsResponse = ApiResponse<Post>;
