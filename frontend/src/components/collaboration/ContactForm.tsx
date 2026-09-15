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
        <p className="text-accent font-medium">Заявка отправлена!</p>
        <p className="mt-2 text-sm text-muted">
          Свяжусь с вами в ближайшее время.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm text-text mb-2">
          Имя
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full px-4 py-2.5 bg-surface border border-border rounded-lg text-text placeholder-muted focus:outline-none focus:border-accent transition-colors"
          placeholder="Ваше имя"
        />
      </div>

      <div>
        <label htmlFor="company" className="block text-sm text-text mb-2">
          Компания
        </label>
        <input
          id="company"
          name="company"
          type="text"
          className="w-full px-4 py-2.5 bg-surface border border-border rounded-lg text-text placeholder-muted focus:outline-none focus:border-accent transition-colors"
          placeholder="Название компании"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm text-text mb-2">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full px-4 py-2.5 bg-surface border border-border rounded-lg text-text placeholder-muted focus:outline-none focus:border-accent transition-colors"
          placeholder="you@company.com"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm text-text mb-2">
          Сообщение
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="w-full px-4 py-2.5 bg-surface border border-border rounded-lg text-text placeholder-muted focus:outline-none focus:border-accent transition-colors resize-none"
          placeholder="Расскажите о проекте"
        />
      </div>

      <Button type="submit" className="w-full sm:w-auto">
        Отправить заявку
      </Button>
    </form>
  );
}