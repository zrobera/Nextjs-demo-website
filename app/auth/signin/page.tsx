"use client"

import { useRouter } from "next/navigation"
import { useAuth } from "@/components/auth-provider"

export default function SignInPage() {
  const router = useRouter()
  const { login } = useAuth()

  const handleSignIn = async () => {
    // Simulate a successful sign-in
    login()
    router.push("/") // Redirect to the home page after successful sign-in
  }

  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={handleSignIn}>Sign In</button>
    </div>
  )
}

