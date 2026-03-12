'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Product } from '@/data/products';

export interface CartItem extends Product {
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getCartCount: () => number;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      
      addItem: (product: Product) => {
        set((state: CartStore) => {
          const existingItem = state.items.find((item: CartItem) => item.id === product.id);
          if (existingItem) {
            return {
              items: state.items.map((item: CartItem) =>
                item.id === product.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
            };
          }
          return { items: [...state.items, { ...product, quantity: 1 }] };
        });
      },

      removeItem: (productId: string) => {
        set((state: CartStore) => ({
          items: state.items.filter((item: CartItem) => item.id !== productId),
        }));
      },

      updateQuantity: (productId: string, quantity: number) => {
        set((state: CartStore) => ({
          items: state.items.map((item: CartItem) =>
            item.id === productId ? { ...item, quantity: Math.max(1, quantity) } : item
          ),
        }));
      },

      clearCart: () => set({ items: [] }),

      getCartTotal: () => {
        return get().items.reduce((total: number, item: CartItem) => total + item.price * item.quantity, 0);
      },

      getCartCount: () => {
        return get().items.reduce((count: number, item: CartItem) => count + item.quantity, 0);
      },
    }),
    {
      name: 'beauty-sphere-cart',
    }
  )
);
