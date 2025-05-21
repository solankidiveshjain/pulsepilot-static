"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function HomePage() {
  const router = useRouter()

  useEffect(() => {
    router.push("/onboarding/profile")
  }, [router])

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="h-12 w-12 rounded-full border-4 border-primary border-t-transparent animate-spin"></div>
    </div>
  )
}
