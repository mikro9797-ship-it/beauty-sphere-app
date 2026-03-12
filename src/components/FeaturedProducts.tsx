'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PRODUCTS } from '@/data/products';
import ProductCard from '@/components/ProductCard';

export default function FeaturedProducts() {
  const featuredProducts = PRODUCTS.slice(0, 4);

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground mb-2">
              Популярные продукты
            </h2>
            <p className="text-foreground/60">Выбор профессионалов и наших клиентов</p>
          </div>
          <Link
            href="/catalog"
            className="hidden sm:flex items-center text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors"
          >
            Смотреть все <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="sm:hidden mt-8 text-center">
          <Link
            href="/catalog"
            className="inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors"
          >
            Смотреть все товары <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
