import prisma from "@/lib/db"
import Link from "next/link"

export async function PostsList() {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  const posts = await prisma.post.findMany()

  return (
    <ul className="mx-auto grid gap-6 max-sm:w-full md:w-1/2">
      {posts.map((post) => (
        <Link
          className="border-b pb-6 text-lg hover:border-zinc-700 hover:bg-white"
          key={post.id}
          href={`/posts/${post.id}`}
        >
          {post.title}
        </Link>
      ))}
    </ul>
  )
}
