import { ERROR_MESSAGES } from "@/config/constants/error-messages";

export class AppError extends Error {
  context?: string;
  details?: unknown;

  constructor(message: string, context?: string, details?: unknown) {
    super(message);
    this.name = "AppError";
    this.context = context;
    this.details = details;
  }
}

export function handleError(error: unknown) {
  let errorMessage = ERROR_MESSAGES.CLIENT;
  let errorDetails: unknown = null;

  if (error instanceof AppError) {
    errorMessage = `[${error.context}] ${error.message}`;
    errorDetails = error.details;
  } else if (error instanceof Error) {
    errorMessage = error.message;
    errorDetails = error.stack;
  } else {
    errorMessage = String(error);
  }

  if (process.env.NODE_ENV === "development") {
    console.error(`❌ ERROR: ${errorMessage}`, errorDetails);
  } else {
    console.error(`❌ ERROR: ${errorMessage}`);
  }

  return { success: false, error: errorMessage };
}
