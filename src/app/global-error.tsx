"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen items-center justify-center bg-white p-8 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
        <div className="mx-auto max-w-md text-center">
          <h1 className="text-lg font-bold uppercase tracking-widest text-amber-600">
            Something went wrong
          </h1>
          <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
            {error?.message || "An unexpected error occurred."}
          </p>
          <button
            type="button"
            onClick={() => reset()}
            className="mt-6 rounded-full border border-zinc-300 px-5 py-2 text-sm font-medium transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800"
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
