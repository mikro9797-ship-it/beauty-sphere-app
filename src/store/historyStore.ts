'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const MAX_HISTORY = 20;

interface HistoryStore {
  viewedIds: string[];
  addToHistory: (productId: string) => void;
  clearHistory: () => void;
  getHistoryCount: () => number;
}

export const useHistoryStore = create<HistoryStore>()(
  persist(
    (set, get) => ({
      viewedIds: [],

      addToHistory: (productId: string) => {
        set((state) => {
          const filtered = state.viewedIds.filter((id) => id !== productId);
          return { viewedIds: [productId, ...filtered].slice(0, MAX_HISTORY) };
        });
      },

      clearHistory: () => set({ viewedIds: [] }),

      getHistoryCount: () => {
        return get().viewedIds.length;
      },
    }),
    {
      name: 'beauty-sphere-history',
    }
  )
);
