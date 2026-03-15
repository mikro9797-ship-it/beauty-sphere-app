'use client';

import { Heart } from 'lucide-react';
import { useFavoritesStore } from '@/store/favoritesStore';

interface Props {
  productId: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function LikeButton({ productId, size = 'sm', className = '' }: Props) {
  const { toggleFavorite, isFavorite } = useFavoritesStore();
  const liked = isFavorite(productId);

  const sizeClasses = {
    sm: 'w-9 h-9',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
  };

  const iconSizes = {
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-6 w-6',
  };

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(productId);
  };

  return (
    <button
      onClick={handleClick}
      className={`${sizeClasses[size]} rounded-full flex items-center justify-center transition-all active:scale-90 ${
        liked
          ? 'bg-red-50 text-red-500 hover:bg-red-100'
          : 'bg-white/80 backdrop-blur-sm text-foreground/40 hover:text-red-400 hover:bg-white'
      } ${className}`}
      aria-label={liked ? 'Убрать из избранного' : 'Добавить в избранное'}
    >
      <Heart
        className={`${iconSizes[size]} transition-all ${liked ? 'fill-red-500 scale-110' : ''}`}
      />
    </button>
  );
}
