"use client"

import { useRowLabel } from "@payloadcms/ui"

const ChildItemRowLabel = () => {
    const {rowNumber}  = useRowLabel()
  return `Child ${String(rowNumber + 1).padStart(2,'0')}`
}

export default ChildItemRowLabel
