import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Honlor Admin",
  description: "Honlor Admin Dashboard",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}