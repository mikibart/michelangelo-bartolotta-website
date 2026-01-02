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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    // Invia email tramite mailto (soluzione semplice senza backend)
    const mailtoLink = `mailto:michelangelo@atomoprogetti.it?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Nome: ${formData.name}\nEmail: ${formData.email}\n\nMessaggio:\n${formData.message}`
    )}`;

    window.location.href = mailtoLink;

    setStatus('success');
    setFormData({ name: '', email: '', subject: '', message: '' });

    setTimeout(() => setStatus('idle'), 3000);
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
            style={{ fontFamily: "'Patrick Hand', cursive" }}
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
            className={inputClass}
            style={{ fontFamily: "'Patrick Hand', cursive", fontSize: '1.1rem' }}
            placeholder="Il tuo nome"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm uppercase tracking-wider text-[var(--foreground)]/60 mb-2"
            style={{ fontFamily: "'Patrick Hand', cursive" }}
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
            className={inputClass}
            style={{ fontFamily: "'Patrick Hand', cursive", fontSize: '1.1rem' }}
            placeholder="La tua email"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="subject"
          className="block text-sm uppercase tracking-wider text-[var(--foreground)]/60 mb-2"
          style={{ fontFamily: "'Patrick Hand', cursive" }}
        >
          Oggetto *
        </label>
        <select
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className={`${inputClass} bg-[var(--background)] cursor-pointer`}
          style={{ fontFamily: "'Patrick Hand', cursive", fontSize: '1.1rem' }}
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
          style={{ fontFamily: "'Patrick Hand', cursive" }}
        >
          Messaggio *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className={`${inputClass} resize-none border-2 rounded-none`}
          style={{ fontFamily: "'Patrick Hand', cursive", fontSize: '1.1rem' }}
          placeholder="Raccontami il tuo progetto..."
        />
      </div>

      <div>
        <motion.button
          type="submit"
          disabled={status === 'loading'}
          className="btn-sketch btn-sketch-filled px-10 py-4"
          whileHover={{ scale: 1.02, rotate: -1 }}
          whileTap={{ scale: 0.98 }}
        >
          {status === 'loading' ? 'Invio in corso...' : 'Invia messaggio'}
        </motion.button>
      </div>

      {status === 'success' && (
        <motion.p
          className="text-green-600 text-lg"
          style={{ fontFamily: "'Patrick Hand', cursive" }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Si aprirà il tuo client email per inviare il messaggio!
        </motion.p>
      )}

      {status === 'error' && (
        <motion.p
          className="text-red-600 text-lg"
          style={{ fontFamily: "'Patrick Hand', cursive" }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Si è verificato un errore. Riprova più tardi.
        </motion.p>
      )}
    </motion.form>
  );
}
