import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { profile } from '../../data/profile';

const navItems = [
  { to: '/', label: 'Главная' },
  { to: '/articles', label: 'Статьи' },
  { to: '/about', label: 'Обо мне' },
  { to: '/collaboration', label: 'Сотрудничество' },
  { to: '/contact', label: 'Контакты' },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-bg/80 backdrop-blur border-b border-border">
      <div className="container-content flex items-center justify-between h-16">
        <Link to="/" className="font-semibold text-text hover:text-accent">
          {profile.name}
        </Link>

        <nav
          aria-label="Основная навигация"
          className="hidden md:flex items-center gap-6"
        >
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-sm transition-colors ${
                  isActive ? 'text-accent' : 'text-muted hover:text-text'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          className="md:hidden text-text p-2"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <nav
          aria-label="Мобильная навигация"
          className="md:hidden border-t border-border bg-surface"
        >
          <ul className="container-content py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block py-1 text-sm ${
                      isActive ? 'text-accent' : 'text-muted'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}