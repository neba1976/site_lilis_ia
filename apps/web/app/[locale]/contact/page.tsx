export default function Page() {
  return (
    <section className="py-10">
      <div className="max-w-[85rem] w-full mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-semibold dark:text-neutral-100 mb-6">
          Contact
        </h1>
        <form className="max-w-xl mx-auto rounded-2xl border p-6 grid gap-4 bg-white dark:bg-neutral-800 dark:border-neutral-700">
          <div className="grid md:grid-cols-2 gap-4">
            <input
              className="border rounded-lg px-3 py-2 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-200"
              placeholder="Nombre"
            />
            <input
              type="email"
              className="border rounded-lg px-3 py-2 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-200"
              placeholder="Email"
            />
          </div>
          <input
            className="border rounded-lg px-3 py-2 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-200"
            placeholder="Asunto"
          />
          <textarea
            className="border rounded-lg px-3 py-2 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-200"
            placeholder="Mensaje"
            rows={4}
          />
          <button className="rounded-lg bg-emerald-600 text-white px-4 py-2">
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
}
