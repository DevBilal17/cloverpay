'use client'

import { useRowLabel } from '@payloadcms/ui'

export default function NavItemRowLabel() {
  const { rowNumber } = useRowLabel()

  return `Nav Item ${String(rowNumber + 1).padStart(2, '0')}`
}