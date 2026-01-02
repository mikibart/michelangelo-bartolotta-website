'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Errore durante l\'invio');
      }

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Reset status dopo 5 secondi
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Errore sconosciuto');
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const inputClass = `w-full px-4 py-3 bg-transparent border-b-2 border-[var(--pencil)]
    focus:border-[var(--foreground)] focus:outline-none transition-colors
    text-[var(--foreground)] placeholder:text-[var(--foreground)]/40`;

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <label
            htmlFor="name"
            className="block text-sm uppercase tracking-wider text-[var(--foreground)]/60 mb-2"
            style={{ fontFamily: "var(--font-patrick-hand), cursive" }}
          >
            Nome *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            disabled={status === 'loading'}
            className={inputClass}
            style={{ fontFamily: "var(--font-patrick-hand), cursive", fontSize: '1.1rem' }}
            placeholder="Il tuo nome"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm uppercase tracking-wider text-[var(--foreground)]/60 mb-2"
            style={{ fontFamily: "var(--font-patrick-hand), cursive" }}
          >
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={status === 'loading'}
            className={inputClass}
            style={{ fontFamily: "var(--font-patrick-hand), cursive", fontSize: '1.1rem' }}
            placeholder="La tua email"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="subject"
          className="block text-sm uppercase tracking-wider text-[var(--foreground)]/60 mb-2"
          style={{ fontFamily: "var(--font-patrick-hand), cursive" }}
        >
          Oggetto *
        </label>
        <select
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          disabled={status === 'loading'}
          className={`${inputClass} bg-[var(--background)] cursor-pointer`}
          style={{ fontFamily: "var(--font-patrick-hand), cursive", fontSize: '1.1rem' }}
        >
          <option value="">Seleziona un argomento</option>
          <option value="Nuovo Progetto">Nuovo Progetto</option>
          <option value="Consulenza">Consulenza</option>
          <option value="Ristrutturazione">Ristrutturazione</option>
          <option value="Informazioni">Richiesta informazioni</option>
          <option value="Altro">Altro</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm uppercase tracking-wider text-[var(--foreground)]/60 mb-2"
          style={{ fontFamily: "var(--font-patrick-hand), cursive" }}
        >
          Messaggio *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          disabled={status === 'loading'}
          rows={6}
          className={`${inputClass} resize-none border-2 rounded-none`}
          style={{ fontFamily: "var(--font-patrick-hand), cursive", fontSize: '1.1rem' }}
          placeholder="Raccontami il tuo progetto..."
        />
      </div>

      <div>
        <motion.button
          type="submit"
          disabled={status === 'loading'}
          className="btn-sketch btn-sketch-filled px-10 py-4 disabled:opacity-50 disabled:cursor-not-allowed"
          whileHover={status !== 'loading' ? { scale: 1.02, rotate: -1 } : {}}
          whileTap={status !== 'loading' ? { scale: 0.98 } : {}}
        >
          {status === 'loading' ? (
            <span className="flex items-center gap-2">
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Invio in corso...
            </span>
          ) : (
            'Invia messaggio'
          )}
        </motion.button>
      </div>

      {status === 'success' && (
        <motion.div
          className="p-4 bg-green-50 border-2 border-green-500"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p
            className="text-green-700 text-lg"
            style={{ fontFamily: "var(--font-patrick-hand), cursive" }}
          >
            Messaggio inviato con successo! Ti risponderò al più presto.
          </p>
        </motion.div>
      )}

      {status === 'error' && (
        <motion.div
          className="p-4 bg-red-50 border-2 border-red-500"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p
            className="text-red-700 text-lg"
            style={{ fontFamily: "var(--font-patrick-hand), cursive" }}
          >
            {errorMessage || 'Si è verificato un errore. Riprova più tardi.'}
          </p>
        </motion.div>
      )}
    </motion.form>
  );
}
