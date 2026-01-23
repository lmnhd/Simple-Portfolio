'use client';

import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function DownloadButton() {
  const handleDownload = () => {
    const resumePath = "/Resume_Nathaniel_Orange.pdf"; 
    
    const link = document.createElement("a");
    link.href = resumePath;
    link.download = "Nathaniel_Orange_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Button
      onClick={handleDownload}
      className="flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30 px-8 py-3 rounded-lg font-semibold transition-all print:hidden"
    >
      <Download className="w-4 h-4" />
      Resume
    </Button>
  );
}
