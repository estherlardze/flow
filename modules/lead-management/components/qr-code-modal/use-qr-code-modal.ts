"use client";

import { useState, useRef } from "react";
import { toast } from "sonner";
import type { QRCode } from "react-qrcode-logo";

export function useQRCodeModal() {
  const openHouseUrl = `http://localhost:3000/get-started`;

  const [loading, setLoading] = useState(false);
  const [qrGenerated, setQrGenerated] = useState(false);
  const qrRef = useRef<QRCode | null>(null);

  const handleGenerateQR = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setQrGenerated(true);
      toast.success("QR Code generated successfully!");
    }, 1500);
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(openHouseUrl);
      toast.success("Link copied to clipboard!", {
        description: "You can now share this link manually.",
      });
    } catch (error) {
      toast.error("Failed to copy link", {
        description: "Please copy the URL manually.",
      });
    }
  };

  const handleDownloadQR = () => {
    if (!qrRef.current) {
      toast.error("No QR code to download");
      return;
    }
    qrRef.current.download("png", "openhouse-qr");
    toast.success("QR Code downloaded!");
  };

  return {
    openHouseUrl,
    loading,
    qrGenerated,
    handleGenerateQR,
    handleCopyLink,
    handleDownloadQR,
    qrRef,
  };
}
