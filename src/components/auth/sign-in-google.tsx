import { signIn } from "@/auth"
import { ReactNode } from "react"

export default function GoogleSignIn({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <form
      action={async () => {
        "use server"
        await signIn("google", { redirectTo: "/dashboard" })
      }}
    >
      {children}
    </form>
  )
} 