import prisma from "@/lib/db"
import Link from "next/link"

export async function PostsList() {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  const posts = await prisma.post.findMany()

  return (
    <ul className="grid md:w-1/2 gap-4 max-sm:w-full mx-auto">
      {posts.map((post) => (
        <Link className="rounded py-4 shadow-md bg-zinc-50 hover:bg-white" key={post.id} href={`/posts/${post.id}`}>
            {post.title}
        </Link>
      ))}
    </ul>
  )
}
