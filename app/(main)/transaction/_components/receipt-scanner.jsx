"use client";

import { useState, useRef } from "react";
import { Camera, Loader2, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export function ReceiptScanner({ onScanComplete }) {
  const [isScanning, setIsScanning] = useState(false);
  const fileInputRef = useRef(null);

  const handleReceiptScan = async (file) => {
    if (file.size > 5 * 1024 * 1024) {
      toast.error("File size should be less than 5MB");
      return;
    }

    setIsScanning(true);

    try {
      // MOCK SCAN: Simulate API delay and return fake data
      await new Promise((resolve) => setTimeout(resolve, 2000));
      
      const mockData = {
        amount: 150.00,
        date: new Date(),
        description: "Mocked Receipt Store",
        category: "Food", // Needs to match a valid category ID
      };

      toast.success("Receipt scanned successfully (Mock)");
      onScanComplete(mockData);
    } catch (error) {
      console.error("Scan error:", error);
      toast.error("Failed to scan receipt");
    } finally {
      setIsScanning(false);
    }
  };

  return (
    <div className="mb-6 p-4 border border-dashed rounded-lg bg-gray-50 flex flex-col items-center justify-center gap-4">
      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        accept="image/*"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) handleReceiptScan(file);
        }}
      />
      
      <div className="text-center space-y-2">
        <div className="bg-white p-3 rounded-full shadow-sm inline-block">
           <Camera className="w-6 h-6 text-blue-600" />
        </div>
        <h3 className="font-medium text-sm">Scan Receipt with AI</h3>
        <p className="text-xs text-muted-foreground">
          Upload a receipt to auto-fill details
        </p>
      </div>

      <Button
        type="button"
        variant="outline"
        onClick={() => fileInputRef.current?.click()}
        disabled={isScanning}
        className="w-full sm:w-auto cursor-pointer"
      >
        {isScanning ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Scanning...
          </>
        ) : (
          <>
            <Upload className="mr-2 h-4 w-4" />
            Upload Receipt
          </>
        )}
      </Button>
    </div>
  );
}