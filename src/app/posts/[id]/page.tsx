import { Spinner } from "@/components"
import Post from "@/components/post"
import { Suspense } from "react"
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"

export default function Page({ params }: { params: { id: string } }) {
  const { id } = params

  return (
    <Suspense
      fallback={
        <main className="grid gap-7 pt-24 mx-auto">
          <Skeleton count={2} height={50} width={700} />
          <Skeleton count={6} width={700} />
        </main>
      }
    >
      <Post id={id} />
    </Suspense>
  )
}
