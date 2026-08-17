"use client"
import { useRowLabel } from '@payloadcms/ui'
import React from 'react'

const FeatureRowLabel = () => {
    const {rowNumber} = useRowLabel()
  return `Feature ${String(rowNumber + 1).padStart(2,'0')}`
}

export default FeatureRowLabel
