"use client"
import { useRowLabel } from '@payloadcms/ui'


const ImageRowLabel = () => {
  const { rowNumber } = useRowLabel()

  return `Image ${String(rowNumber + 1).padStart(2, '0')}`
}

export default ImageRowLabel
