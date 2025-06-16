import type React from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-16">{children}</div>
      <Footer />
    </div>
  )
}
