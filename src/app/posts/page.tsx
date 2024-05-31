import { PostsList, Spinner } from "@/components"
import { Suspense } from "react"

export default async function Page() {
  return (
    <main className="px-5 pt-16 text-center">
      <h1 className="mb-10 text-4xl font-bold md:text-5xl">All posts</h1>

      <Suspense fallback={<Spinner />}>
        <PostsList />
      </Suspense>
    </main>
  )
}
