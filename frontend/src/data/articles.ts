import type { Article } from '../types';

export const articles: Article[] = [
  {
    id: '1',
    slug: 'ai-kills-internet',
    title: 'Как ИИ убивает интернет',
    excerpt:
      'Нейросети генерируют контент быстрее, чем мы успеваем его читать. Что это значит для открытого веба?',
    content: '<p>Полный текст статьи...</p>',
    cover: '/images/articles/ai-internet.jpg',
    date: '2025-01-15',
    readingTime: 7,
    tags: ['ИИ', 'Интернет'],
  },
  {
    id: '2',
    slug: 'smart-city-almaty',
    title: 'Smart City в Алматы: что уже работает',
    excerpt:
      'Разбираю, какие цифровые сервисы уже запущены в городе и что будет дальше.',
    content: '<p>Полный текст статьи...</p>',
    cover: '/images/articles/smart-city.jpg',
    date: '2025-01-08',
    readingTime: 5,
    tags: ['Smart City', 'Казахстан'],
  },
  {
    id: '3',
    slug: 'future-of-web',
    title: 'Будущее открытого веба',
    excerpt: 'Почему RSS возвращается, а большие платформы теряют доверие.',
    content: '<p>Полный текст статьи...</p>',
    cover: '/images/articles/future-web.jpg',
    date: '2024-12-20',
    readingTime: 6,
    tags: ['Интернет', 'Будущее'],
  },
];