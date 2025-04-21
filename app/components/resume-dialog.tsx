'use client'

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

interface ResumeDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ResumeDialog({ open, onOpenChange }: ResumeDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl h-[90vh]">
        <DialogHeader>
          <DialogTitle className="flex justify-between items-center">
            <span>Resume</span>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                const link = document.createElement("a")
                link.href = "/Mukarram CV.pdf"
                link.download = "Mukarram_Razzaq_Resume.pdf"
                document.body.appendChild(link)
                link.click()
                document.body.removeChild(link)
              }}
            >
              <Download className="mr-2 h-4 w-4" />
              Download
            </Button>
          </DialogTitle>
        </DialogHeader>
        <div className="flex-1 overflow-auto">
          <iframe
            src="/Mukarram CV.pdf"
            className="w-full h-full min-h-[70vh]"
            title="Resume"
          />
        </div>
      </DialogContent>
    </Dialog>
  )
} 