'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface FavoritesStore {
  favoriteIds: string[];
  toggleFavorite: (productId: string) => void;
  isFavorite: (productId: string) => boolean;
  getFavoritesCount: () => number;
  clearFavorites: () => void;
}

export const useFavoritesStore = create<FavoritesStore>()(
  persist(
    (set, get) => ({
      favoriteIds: [],

      toggleFavorite: (productId: string) => {
        set((state) => {
          if (state.favoriteIds.includes(productId)) {
            return { favoriteIds: state.favoriteIds.filter((id) => id !== productId) };
          }
          return { favoriteIds: [...state.favoriteIds, productId] };
        });
      },

      isFavorite: (productId: string) => {
        return get().favoriteIds.includes(productId);
      },

      getFavoritesCount: () => {
        return get().favoriteIds.length;
      },

      clearFavorites: () => set({ favoriteIds: [] }),
    }),
    {
      name: 'beauty-sphere-favorites',
    }
  )
);
