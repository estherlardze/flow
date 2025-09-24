"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Link2, QrCode, Home } from "lucide-react";
import { toast } from "sonner";
import QRCodeModal from "../qr-code-modal/qr-code-modal";

export default function CaptureTools() {
  const [qrModalOpen, setQrModalOpen] = useState(false);

  const handleOpenHouseClick = () => {
    const openHouseUrl = `${window.location.origin}/get-started`;
    navigator.clipboard.writeText(openHouseUrl);
    toast.success("Open house link copied!", {
      description: "Share this link with potential buyers",
    });
  };

  const handleCaptureLinkClick = () => {
    const captureUrl = `${window.location.origin}/get-started`;
    navigator.clipboard.writeText(captureUrl);
    toast.success("Capture link copied!", {
      description: "Share this link to collect leads from website visitors",
    });
  };

  const handleQRCodeClick = () => {
    setQrModalOpen(true);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="h-9 px-3 bg-white hover:bg-gray-50 border border-gray-200 hover:border-gray-300 transition-all duration-200"
        >
          <Link2 className="h-4 w-4 mr-2 text-gray-600" />
          Capture Tools
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56 bg-white">
        <DropdownMenuItem onClick={handleCaptureLinkClick}>
          <Link2 className="h-4 w-4 mr-2 text-gray-600" />
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-900">Capture Link</p>
            <p className="text-xs text-gray-500">Copy lead capture form link</p>
          </div>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem onClick={handleOpenHouseClick}>
          <Home className="h-4 w-4 mr-2 text-gray-600" />
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-900">Open House Link</p>
            <p className="text-xs text-gray-500">Copy open house link</p>
          </div>
        </DropdownMenuItem>

        <DropdownMenuItem onClick={handleQRCodeClick}>
          <QrCode className="h-4 w-4 mr-2 text-gray-600" />
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-900">QR Code</p>
            <p className="text-xs text-gray-500">Generate open house QR code</p>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>

      <QRCodeModal open={qrModalOpen} onOpenChange={setQrModalOpen} />
    </DropdownMenu>
  );
}
