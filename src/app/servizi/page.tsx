import Link from 'next/link';

const services = [
  {
    title: 'Pubblicazioni',
    description: 'Pubblichiamo articoli, interviste e approfondimenti sui migliori progetti di architettura contemporanea. Offriamo visibilità a studi emergenti e affermati.',
    features: [
      'Articoli editoriali',
      'Interviste agli architetti',
      'Reportage fotografici',
      'Monografie di progetto',
    ],
  },
  {
    title: 'Consulenza Editoriale',
    description: 'Aiutiamo studi di architettura e aziende a comunicare efficacemente i propri progetti attraverso contenuti di qualità.',
    features: [
      'Copywriting architettonico',
      'Creazione portfolio',
      'Storytelling di progetto',
      'Content strategy',
    ],
  },
  {
    title: 'Eventi e Webinar',
    description: 'Organizziamo eventi online e in presenza per favorire il networking e la condivisione di conoscenze nel settore.',
    features: [
      'Conferenze tematiche',
      'Workshop professionali',
      'Talk con esperti',
      'Visite guidate ai cantieri',
    ],
  },
  {
    title: 'Partnership',
    description: 'Collaboriamo con brand, istituzioni e organizzazioni che condividono i nostri valori per creare progetti speciali.',
    features: [
      'Progetti editoriali sponsorizzati',
      'Co-creazione di contenuti',
      'Media partnership',
      'Collaborazioni internazionali',
    ],
  },
];

const stats = [
  { value: '50K+', label: 'Lettori mensili' },
  { value: '200+', label: 'Progetti pubblicati' },
  { value: '150+', label: 'Architetti intervistati' },
  { value: '25+', label: 'Paesi raggiunti' },
];

export const metadata = {
  title: 'Servizi | ArchiMag',
  description: 'Scopri i servizi offerti da ArchiMag: pubblicazioni, consulenza editoriale, eventi e partnership.',
};

export default function ServiziPage() {
  return (
    <div className="py-16">
      {/* Header */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 mb-24">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-semibold text-neutral-900 mb-6">
            I Nostri Servizi
          </h1>
          <p className="text-xl text-neutral-600 leading-relaxed">
            Offriamo una gamma di servizi pensati per architetti, studi, aziende e istituzioni che vogliono comunicare l&apos;architettura in modo efficace e coinvolgente.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-neutral-50 py-16 mb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl md:text-5xl font-semibold text-neutral-900">
                  {stat.value}
                </p>
                <p className="mt-2 text-neutral-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 mb-24">
        <div className="grid md:grid-cols-2 gap-12">
          {services.map((service) => (
            <div
              key={service.title}
              className="p-8 border border-neutral-200 hover:border-neutral-300 transition-colors"
            >
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
                {service.title}
              </h2>
              <p className="text-neutral-600 mb-6">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-neutral-700">
                    <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="bg-neutral-950 px-8 py-16 md:px-16 text-center">
          <h2 className="text-3xl font-semibold text-white mb-4">
            Interessato ai nostri servizi?
          </h2>
          <p className="text-neutral-400 mb-8 max-w-xl mx-auto">
            Contattaci per discutere delle tue esigenze e scoprire come possiamo collaborare.
          </p>
          <Link
            href="/contatti"
            className="inline-block px-8 py-3 bg-white text-neutral-900 text-sm font-medium hover:bg-neutral-100 transition-colors"
          >
            Contattaci
          </Link>
        </div>
      </section>
    </div>
  );
}
