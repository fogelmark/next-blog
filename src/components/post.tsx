import prisma from "@/lib/db"
import { notFound } from "next/navigation"
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

type Props = {
  id: string
}

export default async function Post(props: Props) {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  const post = await prisma.post.findUnique({
    where: {
      id: parseInt(props.id),
    },
  })

  if (!post) {
    notFound()
  }

  return (
    <main className="px-7 pt-24 text-center">
      <h1 className="mb-7 text-5xl font-semibold">{post.title}</h1>
      <p className="mx-auto max-w-[700px]">{post.body}</p>
    </main>
  )
}
