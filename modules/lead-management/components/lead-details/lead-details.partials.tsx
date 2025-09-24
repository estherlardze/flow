import {
  AlertCircle,
  CheckCircle,
  Clock,
  MessageSquare,
  TrendingUp,
  XCircle,
} from "lucide-react";

export const getStatusInfo = (status: string) => {
  switch (status) {
    case "new":
      return {
        color: "bg-blue-100 text-blue-800 border-blue-200",
        icon: <AlertCircle className="h-4 w-4" />,
      };
    case "contacted":
      return {
        color: "bg-blue-100 text-blue-800 border-blue-200",
        icon: <MessageSquare className="h-4 w-4" />,
      };
    case "qualified":
      return {
        color: "bg-green-100 text-green-800 border-green-200",
        icon: <CheckCircle className="h-4 w-4" />,
      };
    case "proposal":
      return {
        color: "bg-yellow-100 text-yellow-800 border-yellow-200",
        icon: <TrendingUp className="h-4 w-4" />,
      };
    case "negotiation":
      return {
        color: "bg-orange-100 text-orange-800 border-orange-200",
        icon: <TrendingUp className="h-4 w-4" />,
      };
    case "under_contract":
      return {
        color: "bg-purple-100 text-purple-800 border-purple-200",
        icon: <Clock className="h-4 w-4" />,
      };
    case "close_won":
      return {
        color: "bg-green-100 text-green-800 border-green-200",
        icon: <CheckCircle className="h-4 w-4" />,
      };
    case "close_lost":
      return {
        color: "bg-gray-100 text-gray-600 border-gray-200",
        icon: <XCircle className="h-4 w-4" />,
      };
    default:
      return {
        color: "bg-gray-100 text-gray-600 border-gray-200",
        icon: <Clock className="h-4 w-4" />,
      };
  }
};
