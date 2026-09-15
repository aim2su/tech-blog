import { useState, type FormEvent } from 'react';
import { Button } from '../ui/Button';

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="p-6 bg-surface border border-accent/30 rounded-xl text-center">
        <p className="text-accent font-medium">Сообщение отправлено!</p>
        <p className="mt-2 text-sm text-muted">
          Отвечу в течение 1–2 дней.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="contact-name" className="block text-sm text-text mb-2">
          Имя
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          className="w-full px-4 py-2.5 bg-surface border border-border rounded-lg text-text placeholder-muted focus:outline-none focus:border-accent transition-colors"
          placeholder="Как к вам обращаться"
        />
      </div>

      <div>
        <label htmlFor="contact-email" className="block text-sm text-text mb-2">
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          className="w-full px-4 py-2.5 bg-surface border border-border rounded-lg text-text placeholder-muted focus:outline-none focus:border-accent transition-colors"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label htmlFor="contact-message" className="block text-sm text-text mb-2">
          Сообщение
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          required
          className="w-full px-4 py-2.5 bg-surface border border-border rounded-lg text-text placeholder-muted focus:outline-none focus:border-accent transition-colors resize-none"
          placeholder="Ваш вопрос или предложение"
        />
      </div>

      <Button type="submit" className="w-full sm:w-auto">
        Отправить
      </Button>
    </form>
  );
}