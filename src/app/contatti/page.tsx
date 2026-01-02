import ContactForm from '@/components/ContactForm';

const contactInfo = [
  {
    title: 'Email',
    value: 'redazione@archimag.it',
    description: 'Per proposte e collaborazioni',
  },
  {
    title: 'Telefono',
    value: '+39 02 1234567',
    description: 'Lun-Ven 9:00-18:00',
  },
  {
    title: 'Indirizzo',
    value: 'Via dell\'Architettura, 42',
    description: '20121 Milano, Italia',
  },
];

const socials = [
  { name: 'Instagram', handle: '@archimag.it' },
  { name: 'LinkedIn', handle: 'ArchiMag Magazine' },
  { name: 'Pinterest', handle: 'ArchiMag' },
];

export const metadata = {
  title: 'Contatti | ArchiMag',
  description: 'Contattaci per proposte, collaborazioni o semplicemente per salutarci.',
};

export default function ContattiPage() {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold text-neutral-900 mb-6">
            Contatti
          </h1>
          <p className="text-xl text-neutral-600 leading-relaxed">
            Hai un progetto da condividere, una proposta di collaborazione o semplicemente vuoi salutarci? Siamo sempre felici di ascoltarti.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-16">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-semibold text-neutral-900 mb-8">
              Scrivici
            </h2>
            <ContactForm />
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-semibold text-neutral-900 mb-8">
              Informazioni
            </h2>

            <div className="space-y-8 mb-12">
              {contactInfo.map((info) => (
                <div key={info.title}>
                  <h3 className="text-sm uppercase tracking-wider text-neutral-500 mb-1">
                    {info.title}
                  </h3>
                  <p className="text-lg text-neutral-900">{info.value}</p>
                  <p className="text-sm text-neutral-500">{info.description}</p>
                </div>
              ))}
            </div>

            <div>
              <h3 className="text-sm uppercase tracking-wider text-neutral-500 mb-4">
                Social
              </h3>
              <div className="space-y-3">
                {socials.map((social) => (
                  <div key={social.name} className="flex items-center justify-between">
                    <span className="text-neutral-900">{social.name}</span>
                    <span className="text-neutral-500">{social.handle}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-12">
              <div className="aspect-square bg-neutral-100 flex items-center justify-center">
                <p className="text-neutral-400 text-sm">Mappa</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
