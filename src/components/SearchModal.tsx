'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { X, Search } from 'lucide-react';
import { PRODUCTS } from '@/data/products';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: Props) {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setTimeout(() => inputRef.current?.focus(), 100);
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

  if (!isOpen) return null;

  const results = query.length >= 2
    ? PRODUCTS.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.brand.toLowerCase().includes(query.toLowerCase()) ||
          p.category.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <div className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm animate-fade-in" onClick={onClose}>
      <div className="container mx-auto px-4 pt-20 md:pt-28" onClick={(e) => e.stopPropagation()}>
        <div className="bg-white rounded-2xl shadow-2xl max-w-2xl mx-auto overflow-hidden animate-slide-down">
          <div className="flex items-center gap-3 p-4 border-b border-border">
            <Search className="h-5 w-5 text-foreground/40 shrink-0" />
            <input
              ref={inputRef}
              type="text"
              placeholder="Поиск по товарам и брендам..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 text-lg outline-none bg-transparent placeholder:text-foreground/40"
            />
            <button
              onClick={onClose}
              className="p-1.5 text-foreground/40 hover:text-foreground transition-colors rounded-lg hover:bg-foreground/5"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {query.length >= 2 && (
            <div className="max-h-[60vh] overflow-y-auto p-2">
              {results.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-foreground/50 text-lg mb-1">Ничего не найдено</p>
                  <p className="text-foreground/30 text-sm">Попробуйте изменить запрос</p>
                </div>
              ) : (
                <div className="space-y-1">
                  {results.map((product) => (
                    <Link
                      key={product.id}
                      href={`/catalog/${product.id}`}
                      onClick={onClose}
                      className="flex items-center gap-4 p-3 rounded-xl hover:bg-primary-50 transition-colors"
                    >
                      <div className="relative w-14 h-14 bg-primary-50 rounded-lg overflow-hidden shrink-0">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          sizes="56px"
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-primary-600 font-medium">{product.brand}</p>
                        <p className="text-sm font-medium text-foreground truncate">{product.name}</p>
                      </div>
                      <span className="text-sm font-semibold text-foreground shrink-0">
                        {product.price.toLocaleString('ru-RU')} &#8381;
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          )}

          {query.length < 2 && (
            <div className="p-8 text-center text-foreground/40 text-sm">
              Введите минимум 2 символа для поиска
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
