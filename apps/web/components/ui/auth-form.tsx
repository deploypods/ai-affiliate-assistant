"use client"

import type React from "react"

import { useState, useMemo } from "react"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Eye, EyeOff, Loader2 } from "lucide-react"

type Mode = "sign-in" | "sign-up"

export interface AuthFormProps {
  mode?: Mode
  title?: string
  subtitle?: string
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export default function AuthForm({
  mode = "sign-in",
  title = mode === "sign-in" ? "Welcome back" : "Create your account",
  subtitle = mode === "sign-in" ? "Sign in to continue" : "Get started in seconds",
}: AuthFormProps) {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [message, setMessage] = useState<string | null>(null)

  const canSubmit = useMemo(() => {
    if (!isValidEmail(email)) return false
    if (password.length < 6) return false
    return true
  }, [email, password])

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    setMessage(null)

    if (!canSubmit) {
      setError("Enter a valid email and a password of at least 6 characters.")
      return
    }

    setLoading(true)
    try {
      if (mode === "sign-in") {
        const { error: signInError } = await supabase.auth.signInWithPassword({ email, password })
        if (signInError) throw signInError
        setMessage("Logged in successfully!")
        router.replace("/") // adjust to your post-login route
      } else {
        const { error: signUpError } = await supabase.auth.signUp({ email, password })
        if (signUpError) throw signUpError
        setMessage("Check your email for a confirmation link.")
        // You can route them to a "check your inbox" page if you prefer.
      }
    } catch (err: any) {
      setError(err?.message || "Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-2xl">{title}</CardTitle>
        <p className="text-sm text-slate-600">{subtitle}</p>
      </CardHeader>
      <CardContent>
        {error && (
          <Alert variant="destructive" className="mb-4">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        {message && (
          <Alert className="mb-4">
            <AlertDescription>{message}</AlertDescription>
          </Alert>
        )}

        <form onSubmit={onSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor={`email-${mode}`}>Email</Label>
            <Input
              id={`email-${mode}`}
              type="email"
              placeholder="you@example.com"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
              aria-invalid={!isValidEmail(email) && email.length > 0}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor={`password-${mode}`}>Password</Label>
            <div className="relative">
              <Input
                id={`password-${mode}`}
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                autoComplete={mode === "sign-in" ? "current-password" : "new-password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading}
                aria-invalid={password.length > 0 && password.length < 6}
              />
              <button
                type="button"
                aria-label={showPassword ? "Hide password" : "Show password"}
                onClick={() => setShowPassword((v) => !v)}
                className="absolute inset-y-0 right-2 inline-flex items-center px-2 text-slate-500 hover:text-slate-700"
                disabled={loading}
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
            <p className="text-xs text-slate-500">At least 6 characters.</p>
          </div>

          <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-500" disabled={loading || !canSubmit}>
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />{" "}
                {mode === "sign-in" ? "Signing in..." : "Creating account..."}
              </>
            ) : mode === "sign-in" ? (
              "Sign in"
            ) : (
              "Create account"
            )}
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-2">
        {mode === "sign-in" ? (
          <>
            <p className="text-sm text-slate-600">
              Don{"'"}t have an account?{" "}
              <a href="/auth/sign-up" className="text-indigo-600 hover:underline">
                Create one
              </a>
            </p>
            <button
              type="button"
              onClick={async () => {
                setError(null)
                setMessage(null)
                if (!isValidEmail(email)) {
                  setError("Enter your email above, then click reset.")
                  return
                }
                setLoading(true)
                try {
                  const redirectTo = typeof window !== "undefined" ? `${window.location.origin}/auth` : undefined
                  const { error: resetError } = await supabase.auth.resetPasswordForEmail(email, { redirectTo })
                  if (resetError) throw resetError
                  setMessage("Password reset email sent (if an account exists).")
                } catch (err: any) {
                  setError(err?.message || "Could not send reset email.")
                } finally {
                  setLoading(false)
                }
              }}
              className="text-sm text-slate-600 hover:underline"
            >
              Forgot password?
            </button>
          </>
        ) : (
          <p className="text-sm text-slate-600">
            Already have an account?{" "}
            <a href="/auth/sign-in" className="text-indigo-600 hover:underline">
              Sign in
            </a>
          </p>
        )}
      </CardFooter>
    </Card>
  )
}
