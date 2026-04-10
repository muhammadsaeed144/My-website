import type React from "react"
import type { Metadata } from "next"
import { Courier_Prime, Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"
import { Analytics } from "@/components/analytics"
import { MousePositionProvider } from "@/components/mouse-position-provider"
import { Toaster as HotToaster } from 'react-hot-toast'

const courier = Courier_Prime({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-courier",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Saeed - Creative Storyteller",
  description: "Professional video editor, copywriter and creative storyteller",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${courier.variable} ${inter.variable} font-sans antialiased bg-[#141414] text-white`}>
        <MousePositionProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <Toaster />
          <HotToaster
            position="bottom-right"
            toastOptions={{
              style: {
                background: '#1f1f1f',
                color: '#fff',
                border: '1px solid #E50914',
              },
            }}
          />
          <Analytics />
        </MousePositionProvider>
      </body>
    </html>
  )
}
