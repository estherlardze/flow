import { createElement } from "react";

export const getActionIcon = (actionType: string): string => {
  switch (actionType) {
    case "email":
      return "mail";
    case "call":
      return "phone";
    case "sms":
      return "message-square";
    default:
      return "mail";
  }
};

export const getActionColor = (actionType: string): string => {
  switch (actionType) {
    case "email":
      return "text-blue-600 bg-blue-50";
    case "call":
      return "text-green-600 bg-green-50";
    case "sms":
      return "text-purple-600 bg-purple-50";
    default:
      return "text-blue-600 bg-blue-50";
  }
};

export const getContentLabel = (actionType: string): string => {
  switch (actionType) {
    case "email":
      return "Email Content";
    case "call":
      return "Call Script";
    case "sms":
      return "SMS Message";
    default:
      return "Content";
  }
};

export const getContentPlaceholder = (actionType: string): string => {
  switch (actionType) {
    case "email":
      return "Write your email content here...";
    case "call":
      return "Write your call script here...";
    case "sms":
      return "Write your SMS message here...";
    default:
      return "Write your content here...";
  }
};

export const getIconComponent = (iconName: string): React.ReactElement => {
  switch (iconName) {
    case "mail":
      return createElement("span", { className: "text-blue-600" }, "📧");
    case "phone":
      return createElement("span", { className: "text-green-600" }, "📞");
    case "message-square":
      return createElement("span", { className: "text-purple-600" }, "💬");
    default:
      return createElement("span", { className: "text-blue-600" }, "📧");
  }
};
