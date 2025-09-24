export interface AppwriteError {
  message: string;
  code: string | number;
  details?: any;
}

export const handleAppwriteError = <T extends AppwriteError = AppwriteError>(
  error: any,
  customErrorMessages?: Record<string, string>
): T => {
  if (error && typeof error === "object" && "code" in error) {
    const appwriteError = error as any;
    const userMessage = getAppwriteErrorMessage(
      appwriteError.code,
      appwriteError.message,
      customErrorMessages
    );

    return {
      message: userMessage,
      code: appwriteError.code,
      details: appwriteError,
    } as T;
  }

  if (error instanceof Error) {
    return {
      message: error.message,
      code: "VALIDATION_ERROR",
      details: error,
    } as T;
  }

  return {
    message: "An unexpected error occurred",
    code: "UNKNOWN_ERROR",
    details: error,
  } as T;
};

export function getAppwriteErrorMessage(
  code: string | number,
  originalMessage: string,
  customMessages?: Record<string, string>
): string {
  if (customMessages && customMessages[code.toString()]) {
    return customMessages[code.toString()];
  }

  const defaultMessages: Record<string, string> = {
    row_invalid_structure: "Invalid data format. Please check all fields.",
    row_missing_data: "Required information is missing.",
    row_already_exists: "This record already exists.",
    table_not_found: "Resource not found. Please contact support.",
    database_not_found: "Database configuration error. Please contact support.",
    general_argument_invalid: "Invalid data provided.",
    general_rate_limit_exceeded: "Too many requests. Please try again later.",
    general_service_disabled: "Service is temporarily unavailable.",
    general_unknown: "Service temporarily unavailable. Please try again.",
    general_unauthorized: "You don't have permission to perform this action.",
    general_forbidden: "Access denied.",
  };

  if (originalMessage.includes("Unknown attribute")) {
    return "Database field mismatch. Please contact support for assistance.";
  }

  if (originalMessage.includes("Missing required attribute")) {
    const fieldMatch = originalMessage.match(
      /Missing required attribute "([^"]+)"/
    );
    const fieldName = fieldMatch ? fieldMatch[1] : "field";
    return `Required field "${fieldName}" is missing. Please fill in all required information.`;
  }

  return (
    defaultMessages[code.toString()] || `Operation failed: ${originalMessage}`
  );
}

export const isAppwriteError = (error: any): error is AppwriteError => {
  return (
    error && typeof error === "object" && "code" in error && "message" in error
  );
};

export const createErrorResponse = <T extends AppwriteError>(
  message: string,
  code: string | number = "UNKNOWN_ERROR",
  details?: any
): T => {
  return {
    message,
    code,
    details,
  } as T;
};
