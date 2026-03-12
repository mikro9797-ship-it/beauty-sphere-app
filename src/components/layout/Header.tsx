'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ShoppingBag, Search, Menu } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';
import SearchModal from '@/components/SearchModal';
import MobileMenu from '@/components/MobileMenu';

export default function Header() {
  const { getCartCount } = useCartStore();
  const count = getCartCount();
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          {/* Mobile Menu */}
          <button
            className="lg:hidden p-2 text-foreground/80 hover:text-foreground transition-colors"
            onClick={() => setMenuOpen(true)}
            aria-label="Открыть меню"
          >
            <Menu className="h-6 w-6" />
          </button>

          {/* Logo */}
          <Link href="/" className="flex flex-col items-center justify-center space-y-1">
            <div className="relative h-10 w-40">
              <Image
                src="/assets/logo.png"
                alt="BEAUTY SPHERE Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              href="/catalog"
              className="text-sm font-medium tracking-wide text-foreground/80 hover:text-primary-600 transition-colors uppercase"
            >
              Каталог
            </Link>
            <Link
              href="/brands"
              className="text-sm font-medium tracking-wide text-foreground/80 hover:text-primary-600 transition-colors uppercase"
            >
              Бренды
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium tracking-wide text-foreground/80 hover:text-primary-600 transition-colors uppercase"
            >
              О Компании
            </Link>
            <Link
              href="/contacts"
              className="text-sm font-medium tracking-wide text-foreground/80 hover:text-primary-600 transition-colors uppercase"
            >
              Контакты
            </Link>
          </nav>

          {/* Action Icons */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <button
              className="p-2 text-foreground/80 hover:text-primary-600 transition-colors"
              onClick={() => setSearchOpen(true)}
              aria-label="Поиск"
            >
              <Search className="h-5 w-5" />
            </button>
            <Link
              href="/cart"
              className="p-2 text-foreground/80 hover:text-primary-600 transition-colors relative"
            >
              <ShoppingBag className="h-5 w-5" />
              {count > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary-500 text-[10px] font-bold text-white animate-scale-in">
                  {count > 99 ? '99+' : count}
                </span>
              )}
            </Link>
          </div>
        </div>
      </header>

      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
