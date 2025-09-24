import { createElement } from "react";
import { Mail, Phone, MessageSquare } from "lucide-react";

export const getTypeIcon = (type: string): React.ReactElement => {
  switch (type) {
    case "email":
      return createElement(Mail, { className: "h-4 w-4" });
    case "call":
      return createElement(Phone, { className: "h-4 w-4" });
    case "sms":
      return createElement(MessageSquare, { className: "h-4 w-4" });
    case "mixed":
      return createElement(Mail, { className: "h-4 w-4" });
    default:
      return createElement(Mail, { className: "h-4 w-4" });
  }
};

export const getTypeColor = (type: string) => {
  switch (type) {
    case "email":
      return "bg-blue-100 text-blue-800 border-blue-200";
    case "call":
      return "bg-green-100 text-green-800 border-green-200";
    case "sms":
      return "bg-purple-100 text-purple-800 border-purple-200";
    case "mixed":
      return "bg-orange-100 text-orange-800 border-orange-200";
    default:
      return "bg-gray-100 text-gray-800 border-gray-200";
  }
};

export const getStatusColor = (status: string) => {
  switch (status) {
    case "active":
      return "bg-green-100 text-green-800 border-green-200";
    case "draft":
      return "bg-yellow-100 text-yellow-800 border-yellow-200";
    default:
      return "bg-gray-100 text-gray-800 border-gray-200";
  }
};

export const formatTypeLabel = (type: string) => {
  switch (type) {
    case "email":
      return "Email";
    case "call":
      return "Call";
    case "sms":
      return "SMS";
    case "mixed":
      return "Mixed";
    default:
      return type;
  }
};

export const formatDate = (date: Date) => {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);
};

export const getLeadSelectionLabel = (selectionType: string) => {
  switch (selectionType) {
    case "all":
      return "All";
    case "status":
      return "By Status";
    case "source":
      return "By Source";
    case "tags":
      return "By Tags";
    case "individual":
      return "Individual";
    default:
      return "All";
  }
};
