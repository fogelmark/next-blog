import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components"
import { Form } from "@/components"

export default async function Page() {
  return (
    <main className="pt-16 text-center">
      <h1 className="mb-5 text-4xl font-bold md:text-5xl">Create post</h1>
      <Form />
      <LogoutLink>Log out</LogoutLink>
    </main>
  )
}
