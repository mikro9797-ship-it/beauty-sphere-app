'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { X, MessageCircle } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const NAV_LINKS = [
  { href: '/', label: 'Главная' },
  { href: '/catalog', label: 'Каталог' },
  { href: '/brands', label: 'Бренды' },
  { href: '/favorites', label: 'Избранное' },
  { href: '/about', label: 'О Компании' },
  { href: '/contacts', label: 'Контакты' },
  { href: '/cart', label: 'Корзина' },
];

export default function MobileMenu({ isOpen, onClose }: Props) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[90] bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Panel */}
      <div
        className={`fixed top-0 left-0 z-[95] h-full w-80 max-w-[85vw] bg-white shadow-2xl transition-transform duration-300 ease-out flex flex-col ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-border">
          <span className="text-lg font-semibold tracking-wide">BEAUTY SPHERE</span>
          <button
            onClick={onClose}
            className="p-2 text-foreground/60 hover:text-foreground transition-colors rounded-lg hover:bg-foreground/5"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="block px-4 py-3.5 text-foreground/80 hover:text-primary-600 hover:bg-primary-50 rounded-xl transition-colors font-medium"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="p-6 border-t border-border space-y-3">
          <a
            href="tel:+79882933999"
            className="block text-sm text-foreground/60 hover:text-primary transition-colors"
          >
            +7 988 293-39-99
          </a>
          <a
            href="https://wa.me/message/OTTKIKPZOFJVA1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full px-4 py-3 text-sm font-medium text-white bg-[#25D366] hover:bg-[#1DA851] rounded-xl transition-colors"
          >
            <MessageCircle className="h-4 w-4" />
            Написать в WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}
