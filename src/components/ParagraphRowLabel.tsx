"use client"

import { useRowLabel } from "@payloadcms/ui"

const ParagraphRowLabel = () => {
    const {rowNumber}  = useRowLabel()
  return `Paragraph ${String(rowNumber + 1).padStart(2,'0')}`
}

export default ParagraphRowLabel
