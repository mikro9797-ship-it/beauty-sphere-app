'use client';

import Link from 'next/link';
import { Heart, ArrowRight } from 'lucide-react';
import { useFavoritesStore } from '@/store/favoritesStore';
import { PRODUCTS } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import RecentlyViewed from '@/components/RecentlyViewed';

export default function FavoritesPage() {
  const { favoriteIds, clearFavorites } = useFavoritesStore();

  const favoriteProducts = favoriteIds
    .map((id) => PRODUCTS.find((p) => p.id === id))
    .filter(Boolean);

  return (
    <div className="flex flex-col min-h-[70vh]">
      <div className="container mx-auto px-4 py-8 lg:py-16">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-foreground/50 mb-6">
          <Link href="/" className="hover:text-primary-600 transition-colors">
            Главная
          </Link>
          <span>/</span>
          <span className="text-foreground/80">Избранное</span>
        </nav>

        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl lg:text-4xl font-semibold tracking-tight text-foreground">
              Избранное
            </h1>
            <p className="text-foreground/60 mt-1">
              {favoriteProducts.length === 0
                ? 'Нет сохранённых товаров'
                : `${favoriteProducts.length} ${
                    favoriteProducts.length === 1
                      ? 'товар'
                      : favoriteProducts.length < 5
                      ? 'товара'
                      : 'товаров'
                  }`}
            </p>
          </div>
          {favoriteProducts.length > 0 && (
            <button
              onClick={clearFavorites}
              className="text-sm text-foreground/50 hover:text-red-500 transition-colors"
            >
              Очистить все
            </button>
          )}
        </div>

        {favoriteProducts.length === 0 ? (
          <div className="text-center py-20">
            <div className="w-20 h-20 mx-auto bg-primary-50 rounded-full flex items-center justify-center mb-6">
              <Heart className="w-8 h-8 text-primary-400" />
            </div>
            <h2 className="text-xl font-semibold text-foreground mb-2">
              Здесь пока пусто
            </h2>
            <p className="text-foreground/50 mb-8 max-w-md mx-auto">
              Нажмите на сердечко на карточке товара, чтобы добавить его в избранное
            </p>
            <Link
              href="/catalog"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white bg-primary-500 hover:bg-primary-600 rounded-lg transition-all hover:scale-105 active:scale-95"
            >
              Перейти в каталог
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {favoriteProducts.map((product) => (
              <ProductCard key={product!.id} product={product!} />
            ))}
          </div>
        )}
      </div>

      {/* Recently Viewed */}
      <RecentlyViewed />
    </div>
  );
}
