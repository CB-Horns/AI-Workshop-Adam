import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 font-sans dark:bg-zinc-950">
      <header className="sticky top-0 z-10 border-b border-zinc-200 bg-white/80 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/80">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            AI&nbsp;Workshop&nbsp;Adam
          </Link>
          <div className="flex items-center gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-400">
            <Link href="/#workshops" className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-50">
              Workshops
            </Link>
            <Link href="/#projects" className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-50">
              Projects
            </Link>
            <Link
              href="/#contact"
              className="rounded-full bg-zinc-900 px-4 py-1.5 text-zinc-50 transition-colors hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-300"
            >
              Get in touch
            </Link>
          </div>
        </nav>
      </header>

      <main className="flex flex-1 flex-col">
        <section className="mx-auto flex w-full max-w-5xl flex-col items-start gap-8 px-6 py-24 sm:py-32">
          <p className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium uppercase tracking-widest text-zinc-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400">
            Hands-on AI workshops
          </p>
          <h1 className="max-w-2xl text-4xl font-extrabold leading-tight tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-6xl">
            Build real things with AI, together.
          </h1>
          <p className="max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            AI Workshop Adam is a community for makers and learners. We run practical workshops,
            build sample projects, and share what we create — from prompt engineering to shipped
            apps.
          </p>
          <div className="flex flex-col gap-4 pt-2 sm:flex-row">
            <Link
              href="/#workshops"
              className="flex h-12 items-center justify-center rounded-full bg-zinc-900 px-6 text-sm font-semibold text-zinc-50 transition-colors hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-300"
            >
              Browse workshops
            </Link>
            <Link
              href="/#contact"
              className="flex h-12 items-center justify-center rounded-full border border-zinc-300 px-6 text-sm font-semibold text-zinc-900 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-50 dark:hover:bg-zinc-900"
            >
              Join the community
            </Link>
          </div>
        </section>

        <section id="workshops" className="border-y border-zinc-200 bg-white py-20 dark:border-zinc-800 dark:bg-zinc-900/40">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-3xl">
              What we do
            </h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {[
                {
                  title: "Workshops",
                  text: "Step-by-step sessions where you build a working project and leave with code you own.",
                },
                {
                  title: "Sample projects",
                  text: "A growing gallery of AI-powered experiments, templates, and starter apps to remix.",
                },
                {
                  title: "Community",
                  text: "Share what you build, get feedback, and learn from other makers working with AI.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900"
                >
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="py-20">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-3xl">
              Sample projects
            </h2>
            <p className="mt-3 max-w-xl text-zinc-600 dark:text-zinc-400">
              Every workshop ships a completed project. Here’s a taste of what we build together.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {[
                { title: "AI writing assistant", tag: "Prompting" },
                { title: "RAG chatbot", tag: "RAG" },
                { title: "Image generator app", tag: "Generative AI" },
                { title: "Automation agent", tag: "Agents" },
              ].map((project) => (
                <div
                  key={project.title}
                  className="flex items-center justify-between rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900"
                >
                  <div>
                    <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">{project.title}</h3>
                    <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">{project.tag}</p>
                  </div>
                  <span className="text-zinc-300 dark:text-zinc-600">&rarr;</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="border-t border-zinc-200 bg-zinc-900 py-20 dark:border-zinc-800 dark:bg-zinc-950">
          <div className="mx-auto max-w-5xl px-6 text-center">
            <h2 className="text-2xl font-bold tracking-tight text-zinc-50 sm:text-3xl">
              Ready to build with us?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-zinc-400">
              Tell us what you want to learn or build and we’ll help you get started.
            </p>
            <a
              href="mailto:hello@aiworkshopadam.com"
              className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-zinc-50 px-8 text-sm font-semibold text-zinc-900 transition-colors hover:bg-zinc-300"
            >
              hello@aiworkshopadam.com
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-200 bg-white py-8 dark:border-zinc-800 dark:bg-zinc-950">
        <div className="mx-auto max-w-5xl px-6 text-sm text-zinc-500 dark:text-zinc-400">
          &copy; {new Date().getFullYear()} AI Workshop Adam. Built with Next.js.
        </div>
      </footer>
    </div>
  );
}