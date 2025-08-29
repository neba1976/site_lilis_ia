export default function Page() {
  return (
    <section className="py-10">
      <div className="max-w-[85rem] w-full mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-semibold dark:text-neutral-100 mb-6">
          Catalog
        </h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="rounded-2xl border overflow-hidden bg-white dark:bg-neutral-800 dark:border-neutral-700"
            >
              <div className="h-40 bg-gradient-to-br from-gray-100 to-white dark:from-neutral-800 dark:to-neutral-800 flex items-center justify-center text-gray-400">
                Imagen {i + 1}
              </div>
              <div className="p-4 space-y-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold dark:text-neutral-100">
                    Plantilla #{i + 1}
                  </h3>
                  <span className="text-xs rounded-full bg-emerald-100 text-emerald-800 px-2 py-0.5 dark:bg-emerald-900 dark:text-emerald-500">
                    Nuevo
                  </span>
                </div>
                <p className="text-sm text-gray-600 dark:text-neutral-400">
                  Landing / Dashboard / Blog
                </p>
                <div className="pt-2 flex items-center justify-between">
                  <span className="text-gray-900 dark:text-neutral-100 font-medium">
                    $ {49 + i * 10}
                  </span>
                  <a
                    className="text-sm text-emerald-700 hover:underline"
                    href="#"
                  >
                    Ver detalles
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
