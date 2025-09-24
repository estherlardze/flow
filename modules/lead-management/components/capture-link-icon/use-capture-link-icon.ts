import { toast } from "sonner";
import { captureFormLink } from "./capture-link-icon.utils";

export default function useCaptureLinkIcon() {
  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(captureFormLink);

      toast("Your capture form link is ready to share.");
    } catch (error) {
      toast("Please try again.");
    }
  };

  return {
    handleCopyLink,
  };
}
