'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Check } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';
import { Product } from '@/data/products';

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCartStore();
  const [added, setAdded] = useState(false);

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="group flex flex-col bg-white rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-all hover:border-primary-200 relative">
      <Link href={`/catalog/${product.id}`} className="absolute inset-0 z-10">
        <span className="sr-only">Смотреть {product.name}</span>
      </Link>
      <div className="relative aspect-square bg-primary-50 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110 mix-blend-multiply"
        />
        <div className="absolute top-3 left-3 px-2.5 py-1 text-xs font-medium bg-white/90 backdrop-blur-sm rounded-md text-foreground z-20">
          {product.brand}
        </div>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <p className="text-xs text-primary-600 font-medium mb-1">{product.brand}</p>
        <h3 className="text-sm font-medium text-foreground line-clamp-2 mb-2 group-hover:text-primary-600 transition-colors">
          {product.name}
        </h3>
        <div className="mt-auto pt-4 flex items-center justify-between">
          <span className="text-lg font-semibold text-foreground">{product.price.toLocaleString('ru-RU')} &#8381;</span>
          <button
            onClick={handleAdd}
            className={`relative z-20 h-10 px-4 rounded-lg text-sm font-medium transition-all active:scale-95 ${
              added
                ? 'bg-green-500 text-white'
                : 'bg-primary-50 text-primary-600 hover:bg-primary-500 hover:text-white'
            }`}
          >
            {added ? (
              <span className="flex items-center gap-1"><Check className="h-4 w-4" /> Добавлено</span>
            ) : (
              'В корзину'
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
