import prisma from "@/lib/db"
import { notFound } from "next/navigation"

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
    <main className="px-7 pt-24">
      <h1 className="mb-7 max-w-[700px] mx-auto text-5xl font-semibold">{post.title}</h1>
      <p className="mx-auto max-w-[700px] text-left">{post.body}</p>
    </main>
  )
}
