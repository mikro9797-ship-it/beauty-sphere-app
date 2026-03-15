'use client';

import { useEffect } from 'react';
import { useHistoryStore } from '@/store/historyStore';
import LikeButton from '@/components/LikeButton';

export function TrackView({ productId }: { productId: string }) {
  const { addToHistory } = useHistoryStore();

  useEffect(() => {
    addToHistory(productId);
  }, [productId, addToHistory]);

  return null;
}

export function ProductLikeButton({ productId }: { productId: string }) {
  return <LikeButton productId={productId} size="lg" />;
}
