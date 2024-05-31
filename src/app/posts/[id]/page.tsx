import { Spinner } from "@/components"
import Post from "@/components/post"
import { Suspense } from "react"
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"

export default function Page({ params }: { params: { id: string } }) {
  const { id } = params

  return (
    <Suspense fallback={<Spinner />}>
      <Post id={id} />
    </Suspense>
  )
}
