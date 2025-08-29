export default function Page() {
  return (
    <section className="py-10">
      <div className="max-w-[85rem] w-full mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-semibold dark:text-neutral-100 mb-6">
          Pricing
        </h1>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              name: 'Starter',
              price: 'Free',
              features: [
                '1 proyecto',
                'Componentes básicos',
                'Actualizaciones mensuales',
              ],
            },
            {
              name: 'Pro',
              price: '$19/mo',
              features: [
                '5 proyectos',
                'Componentes completos',
                'Soporte prioritario',
              ],
            },
            {
              name: 'Enterprise',
              price: 'Contáctanos',
              features: [
                'Proyectos ilimitados',
                'Integraciones a medida',
                'SLA 99.9%',
              ],
            },
          ].map((tier, i) => (
            <div
              key={i}
              className={`rounded-2xl border p-6 bg-white dark:bg-neutral-800 dark:border-neutral-700 ${tier.name === 'Pro' ? 'ring-2 ring-emerald-600' : ''}`}
            >
              <h3 className="font-semibold dark:text-neutral-100">
                {tier.name}
              </h3>
              <div className="mt-2 text-3xl font-bold dark:text-neutral-100">
                {tier.price}
              </div>
              <ul className="mt-4 space-y-2 text-sm text-gray-700 dark:text-neutral-300 list-disc list-inside">
                {tier.features.map((f, j) => (
                  <li key={j}>{f}</li>
                ))}
              </ul>
              <a
                href="#contact"
                className="mt-6 inline-flex items-center justify-center w-full rounded-lg bg-gray-900 text-white px-4 py-2"
              >
                Seleccionar
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
