'use client'

import { Button } from "@/components/ui/button"
import { useState } from "react"
import { ResumeDialog } from "./resume-dialog"

export function ResumeButton() {
  const [isResumeOpen, setIsResumeOpen] = useState(false)

  return (
    <>
      <Button variant="outline" className="animate-fade-in" onClick={() => setIsResumeOpen(true)}>
        Resume
      </Button>
      <ResumeDialog open={isResumeOpen} onOpenChange={setIsResumeOpen} />
    </>
  )
} 