'use client';

import { useHistoryStore } from '@/store/historyStore';
import { PRODUCTS } from '@/data/products';
import ProductCard from '@/components/ProductCard';

interface Props {
  excludeId?: string;
  limit?: number;
}

export default function RecentlyViewed({ excludeId, limit = 4 }: Props) {
  const { viewedIds } = useHistoryStore();

  const viewedProducts = viewedIds
    .filter((id) => id !== excludeId)
    .map((id) => PRODUCTS.find((p) => p.id === id))
    .filter(Boolean)
    .slice(0, limit);

  if (viewedProducts.length === 0) return null;

  return (
    <section className="py-16 border-t border-border/50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground mb-8">
          Вы недавно смотрели
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {viewedProducts.map((product) => (
            <ProductCard key={product!.id} product={product!} />
          ))}
        </div>
      </div>
    </section>
  );
}
