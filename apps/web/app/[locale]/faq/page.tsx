export default function Page() {
  return (
    <section className="py-10">
      <div className="max-w-[85rem] w-full mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-semibold dark:text-neutral-100 mb-6">
          FAQ
        </h1>
        <div className="mx-auto max-w-3xl space-y-3">
          {[
            {
              q: '¿Esto funciona con Next.js 15 y React 19?',
              a: 'Sí, sin next-intl. i18n ligera con JSON/context.',
            },
            {
              q: '¿Puedo usar los bloques en proyectos comerciales?',
              a: 'Sí, según la licencia de cada recurso (Preline es MIT).',
            },
            {
              q: '¿Incluye navegación web real?',
              a: 'Puedes activar más adelante; ahora la UI es 100% estática.',
            },
          ].map((item, i) => (
            <details
              key={i}
              className="rounded-2xl border bg-white dark:bg-neutral-800 dark:border-neutral-700 p-4 open:shadow-sm"
            >
              <summary className="cursor-pointer font-medium dark:text-neutral-100">
                {item.q}
              </summary>
              <p className="mt-2 text-sm text-gray-600 dark:text-neutral-300">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
