import { FlipWords } from "@/components/ui/flip-words"

export default function Home() {
  const words = ["my", "your", "our"]

  return (
    <main className="px-5 pt-14 text-center">
      <h1 className="mb-10 text-4xl font-bold md:text-5xl">
        Welcome to <FlipWords words={words} className="w-[110px]" /> blog!
      </h1>
      <section className="mx-auto max-w-[750px] space-y-6 text-center leading-8 mb-6">
        <article>
          <p className="font-bold">Calling all passionate developers!</p>
          <p>
            This is your one-stop shop to learn, share, and grow alongside a
            vibrant community of fellow developers. Whether you're a seasoned
            pro or just starting out, there's a place for you here.
          </p>
        </article>
        <article>
          <span className="font-bold">
            Sharpen your skills and expand your knowledge:
          </span>{" "}
          Dive into insightful posts, tutorials, and discussions on a wide range
          of development topics.
        </article>
        <article>
          <span className="mb-4 font-bold">Give back and inspire others:</span>{" "}
          Share your expertise and experiences by contributing your own content.
          Help shape the future of development by fostering a collaborative and
          supportive environment. Sign up today and become part of something
          bigger!
        </article>
      </section>
    </main>
  )
}
