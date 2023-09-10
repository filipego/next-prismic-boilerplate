import './styles/globals.scss'
import type { Metadata, ResolvingMetadata } from 'next'
import { createClient, repositoryName } from '@/prismicio'
import { PrismicPreview } from '@prismicio/next'

import Header from './components/Header'
import Footer from './components/Footer'


export async function generateMetadata(): Promise<Metadata> {
  const client = createClient()

  const settings = await client.getSingle("settings")

  return {
    title: settings.data.site_title || "Next and Preismic",
    description: settings.data.meta_description || "Next and Preismic Boilerplate",
    openGraph: {
      images: [settings.data.og_image.url || ""],
    },
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />

        {children}
        <Footer />
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  )
}
