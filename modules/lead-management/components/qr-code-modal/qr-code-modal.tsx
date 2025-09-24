"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Copy, Download, QrCode, Loader2 } from "lucide-react";

import { QRCode } from "react-qrcode-logo";
import { QRCodeModalProps } from "./qr-code-modal.types";
import { useQRCodeModal } from "./use-qr-code-modal";

export default function QRCodeModal({ open, onOpenChange }: QRCodeModalProps) {
  const {
    openHouseUrl,
    loading,
    qrGenerated,
    handleGenerateQR,
    handleCopyLink,
    handleDownloadQR,
    qrRef,
  } = useQRCodeModal();

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-white border-0 shadow-2xl rounded-2xl">
        <DialogHeader className="text-center space-y-3 pb-6">
          <div className="mx-auto w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
            <QrCode className="w-6 h-6 text-blue-600" />
          </div>
          <DialogTitle className="text-xl font-semibold text-gray-900">
            QR Code for Open House
          </DialogTitle>
          <DialogDescription className="text-gray-600 text-sm leading-relaxed">
            Display this QR code at your open house for leads to scan and submit
            their information quickly.
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col items-center space-y-6 py-4">
          <div
            className="relative w-48 h-48 flex items-center justify-center bg-gray-50 border
          border-gray-200 rounded-xl shadow-sm"
          >
            {!qrGenerated && !loading && (
              <Button
                onClick={handleGenerateQR}
                className="bg-transparent hover:bg-transparent cursor-pointer text-black rounded-lg"
              >
                Generate Qr Code
              </Button>
            )}

            {loading && (
              <Loader2 className="w-6 h-6 text-blue-600 animate-spin" />
            )}

            {qrGenerated && (
              <QRCode
                value={openHouseUrl}
                size={180}
                fgColor="#2563EB"
                eyeColor="#1E40AF"
                logoWidth={60}
                removeQrCodeBehindLogo
                ref={qrRef}
              />
            )}
          </div>

          <div className="text-center space-y-2">
            <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">
              Open House Link
            </p>
            <p
              className="text-sm text-gray-700 font-mono bg-gray-50 px-3 py-2 rounded-lg
            border border-gray-200 max-w-xs mx-auto break-all"
            >
              {openHouseUrl}
            </p>
          </div>
        </div>

        <DialogFooter className="flex gap-3 pt-6 border-t border-gray-100">
          <Button
            variant="outline"
            onClick={handleCopyLink}
            className="flex-1 h-11 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 rounded-xl"
          >
            <Copy className="w-4 h-4 mr-2" />
            Copy Link
          </Button>
          <Button
            onClick={handleDownloadQR}
            disabled={!qrGenerated}
            className="flex-1 h-11 bg-blue-600 hover:bg-blue-700 text-white transition-all duration-200 rounded-xl
            shadow-sm hover:shadow-md disabled:opacity-50"
          >
            <Download className="w-4 h-4 mr-2" />
            Download QR
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
