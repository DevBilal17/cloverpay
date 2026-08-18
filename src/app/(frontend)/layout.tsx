import React from 'react'
import './styles.css'
import Header from '@/components/Layouts/Header'
import Footer from '@/components/Layouts/Footer'
import { getSiteSettings } from '@/lib/getSiteSettings'
import type { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  const { favicon } = await getSiteSettings()

  return {
    title: 'Point-of-Sale System',
    description:
      'Scalable and customizable point-of-sale solutions designed to help your business operate efficiently and securely.',

    icons: {
      icon: favicon?.url,
    },
  }
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <main>
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}