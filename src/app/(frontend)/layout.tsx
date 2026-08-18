import React from 'react'
import './styles.css'
import Header from '@/components/Layouts/Header'
import Navbar from '@/components/Layouts/Navbar'
import Footer from '@/components/Layouts/Footer'

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Point-of-Sale System',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

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
