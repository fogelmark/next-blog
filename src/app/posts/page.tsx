import { PostsList } from "@/components"
import { Suspense } from "react"
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"

export default async function Page() {
  return (
    <main className="px-5 py-16 text-center">
      <h1 className="mb-10 text-4xl font-bold md:text-5xl">All posts</h1>
      <Suspense fallback={<Skeleton count={3} height={60} width={593} />}>
        <PostsList />
      </Suspense>
    </main>
  )
}
