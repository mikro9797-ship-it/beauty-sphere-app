'use client';

import { useState } from 'react';
import { Minus, Plus, ShoppingBag, Check } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';
import { Product } from '@/data/products';

export default function AddToCartButton({ product }: { product: Product }) {
  const { addItem } = useCartStore();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product);
    }
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      setQuantity(1);
    }, 2000);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <div className="flex items-center border border-border rounded-lg bg-background">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="p-3 text-foreground/70 hover:text-foreground disabled:opacity-40 transition-colors"
            disabled={quantity <= 1}
          >
            <Minus className="h-4 w-4" />
          </button>
          <span className="w-12 text-center font-medium tabular-nums">{quantity}</span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="p-3 text-foreground/70 hover:text-foreground transition-colors"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>
        <span className="text-sm text-foreground/60">
          Итого: {(product.price * quantity).toLocaleString('ru-RU')} &#8381;
        </span>
      </div>
      <button
        onClick={handleAdd}
        className={`w-full flex items-center justify-center gap-2 px-6 py-4 text-sm font-medium rounded-xl shadow-sm transition-all hover:scale-[1.02] active:scale-95 ${
          added
            ? 'bg-green-500 text-white'
            : 'bg-primary-500 text-white hover:bg-primary-600'
        }`}
      >
        {added ? (
          <>
            <Check className="h-5 w-5" />
            Добавлено в корзину
          </>
        ) : (
          <>
            <ShoppingBag className="h-5 w-5" />
            Добавить в корзину
          </>
        )}
      </button>
    </div>
  );
}
