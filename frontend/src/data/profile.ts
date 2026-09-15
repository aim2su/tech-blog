import type { Profile } from '../types';

export const profile: Profile = {
  name: 'Демо-версия сайта',
  tagline: 'Концепт личного сайта техноблогера',
  bio: 'Техноблогер. Рассказывает о том, как технологии меняют города, интернет и нашу жизнь.',
  longBio: `Это демонстрационный макет личного сайта техноблогера.
Фокус контента — искусственный интеллект, умные города и будущее интернета.
Цель проекта — показать, как мог бы выглядеть сайт с блогом, Media Kit и портфолио.
Все данные, ссылки и цифры приведены как пример и взяты из открытых источников.`,
  avatar: '/images/avatar.jpg',
  socials: {
    youtube: 'https://youtube.com',
    telegram: 'https://t.me',
    tiktok: 'https://tiktok.com',
    instagram: 'https://instagram.com',
  },
  stats: [
    { label: 'Подписчиков на YouTube', value: '222K' },
    { label: 'Подписчиков в Telegram', value: '54K' },
    { label: 'Просмотров в TikTok', value: '933K' },
    { label: 'Авторских колонок', value: '10+' },
  ],
  projects: [
    {
      title: 'Авторские колонки',
      description: 'Публикации про Smart City и влияние ИИ на интернет.',
      url: '#',
    },
    {
      title: 'YouTube-канал',
      description: 'Видео о технологиях, обзоры и разборы.',
      url: '#',
    },
    {
      title: 'Telegram-канал',
      description: 'Мысли, ссылки и короткие заметки.',
      url: '#',
    },
  ],
  press: [
    {
      title: 'Как ИИ меняет интернет',
      source: 'Пример публикации',
      url: '#',
      date: '2024-11-15',
    },
    {
      title: 'Smart City: что это и зачем',
      source: 'Пример публикации',
      url: '#',
      date: '2024-10-02',
    },
  ],
  email: 'demo@example.com',
};