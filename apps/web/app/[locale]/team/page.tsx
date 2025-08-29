export default function Page() {
  return (
    <section className="py-10">
      <div className="max-w-[85rem] w-full mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-semibold dark:text-neutral-100 mb-6">
          Team
        </h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {['Ana', 'Luis', 'Marta', 'Diego'].map((name, i) => (
            <div
              key={i}
              className="rounded-2xl border p-6 text-center bg-white dark:bg-neutral-800 dark:border-neutral-700"
            >
              <div className="mx-auto size-16 rounded-full bg-gray-200 dark:bg-neutral-700" />
              <h3 className="mt-3 font-semibold dark:text-neutral-100">
                {name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-neutral-400">
                Product Designer
              </p>
              <div className="mt-3 flex items-center justify-center gap-3 text-gray-500 dark:text-neutral-400">
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="hover:text-gray-900 dark:hover:text-neutral-200"
                >
                  in
                </a>
                <a
                  href="#"
                  aria-label="X"
                  className="hover:text-gray-900 dark:hover:text-neutral-200"
                >
                  x
                </a>
                <a
                  href="#"
                  aria-label="GitHub"
                  className="hover:text-gray-900 dark:hover:text-neutral-200"
                >
                  gh
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
