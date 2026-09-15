import type { PlatformStat, AdFormat, CaseExample } from '../types';

export const platforms: PlatformStat[] = [
  {
    platform: 'YouTube',
    followers: '222K',
    avgViews: '50K+',
    description: 'Видео о технологиях, обзоры, разборы',
  },
  {
    platform: 'Telegram',
    followers: '54K',
    avgViews: '5-6K',
    description: 'Мысли, ссылки, короткие заметки',
  },
  {
    platform: 'TikTok',
    followers: '—',
    avgViews: '310K',
    description: 'Короткие видео о технологиях',
  },
  {
    platform: 'Instagram',
    followers: '—',
    avgViews: '—',
    description: 'За кадром, анонсы',
  },
];

export const adFormats: AdFormat[] = [
  {
    title: 'Интеграция в видео',
    description:
      'Упоминание бренда в YouTube-видео. Органично встраиваю в сюжет.',
  },
  {
    title: 'Отдельный обзор',
    description: 'Полноценный обзор продукта или сервиса на YouTube.',
  },
  {
    title: 'Пост в Telegram',
    description: 'Нативный пост с ссылкой и описанием.',
  },
  {
    title: 'Короткое видео в TikTok',
    description: 'Динамичный ролик с продуктом.',
  },
  {
    title: 'Статья в блоге',
    description: 'Развёрнутый текст с упоминанием бренда.',
  },
];

export const cases: CaseExample[] = [
  {
    brand: 'TechBrand',
    description: 'Интеграция в обзор нейросетей',
    result: '120K просмотров, 3.5K переходов',
  },
  {
    brand: 'SmartCity KZ',
    description: 'Серия постов про умный город',
    result: 'Охват 40K, рост подписок +2K',
  },
];