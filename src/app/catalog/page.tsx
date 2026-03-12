'use client';

import { useState, useEffect, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { SlidersHorizontal, X } from 'lucide-react';
import { PRODUCTS, BRANDS } from '@/data/products';
import ProductCard from '@/components/ProductCard';

const CATEGORIES = [
  { value: 'all', label: 'Все категории' },
  { value: 'Skincare', label: 'Уход за кожей' },
  { value: 'Injectables', label: 'Инъекционные препараты' },
  { value: 'Professional', label: 'Профессиональные средства' },
  { value: 'Sun Protection', label: 'Солнцезащитные средства' },
];

const SORT_OPTIONS = [
  { value: 'default', label: 'По умолчанию' },
  { value: 'price-asc', label: 'Сначала дешевые' },
  { value: 'price-desc', label: 'Сначала дорогие' },
  { value: 'name-asc', label: 'По названию А-Я' },
];

function CatalogContent() {
  const searchParams = useSearchParams();
  const brandFromUrl = searchParams.get('brand');
  const categoryFromUrl = searchParams.get('category');

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState('default');
  const [filtersOpen, setFiltersOpen] = useState(false);

  useEffect(() => {
    if (brandFromUrl) {
      setSelectedBrands([brandFromUrl]);
    }
    if (categoryFromUrl && categoryFromUrl !== 'all') {
      const found = CATEGORIES.find(
        (c) => c.value.toLowerCase() === categoryFromUrl.toLowerCase()
      );
      if (found) setSelectedCategory(found.value);
    }
  }, [brandFromUrl, categoryFromUrl]);

  const toggleBrand = (brand: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  const clearFilters = () => {
    setSelectedCategory('all');
    setSelectedBrands([]);
    setSortBy('default');
  };

  const hasActiveFilters = selectedCategory !== 'all' || selectedBrands.length > 0;

  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];

    if (selectedCategory !== 'all') {
      result = result.filter((p) => p.category === selectedCategory);
    }

    if (selectedBrands.length > 0) {
      result = result.filter((p) => selectedBrands.includes(p.brand));
    }

    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'name-asc':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
    }

    return result;
  }, [selectedCategory, selectedBrands, sortBy]);

  const Sidebar = () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-sm font-semibold tracking-wider text-foreground mb-4 uppercase">
          Категории
        </h3>
        <ul className="space-y-1">
          {CATEGORIES.map((cat) => (
            <li key={cat.value}>
              <button
                onClick={() => setSelectedCategory(cat.value)}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                  selectedCategory === cat.value
                    ? 'text-primary-600 bg-primary-50 font-medium'
                    : 'text-foreground/70 hover:text-foreground hover:bg-foreground/5'
                }`}
              >
                {cat.label}
                <span className="text-foreground/30 ml-1">
                  (
                  {cat.value === 'all'
                    ? PRODUCTS.length
                    : PRODUCTS.filter((p) => p.category === cat.value).length}
                  )
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-sm font-semibold tracking-wider text-foreground mb-4 uppercase">
          Бренды
        </h3>
        <ul className="space-y-1">
          {BRANDS.map((brand) => (
            <li key={brand}>
              <label className="flex items-center gap-3 cursor-pointer group px-3 py-2 rounded-lg hover:bg-foreground/5 transition-colors">
                <input
                  type="checkbox"
                  checked={selectedBrands.includes(brand)}
                  onChange={() => toggleBrand(brand)}
                  className="w-4 h-4 rounded border-border text-primary-500 focus:ring-primary-500 cursor-pointer accent-primary-500"
                />
                <span
                  className={`text-sm transition-colors ${
                    selectedBrands.includes(brand)
                      ? 'text-foreground font-medium'
                      : 'text-foreground/70 group-hover:text-foreground'
                  }`}
                >
                  {brand}
                </span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      {hasActiveFilters && (
        <button
          onClick={clearFilters}
          className="w-full px-4 py-2.5 text-sm font-medium text-primary-600 bg-primary-50 hover:bg-primary-100 rounded-lg transition-colors"
        >
          Сбросить фильтры
        </button>
      )}
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8 lg:py-16">
      <nav className="flex items-center gap-2 text-sm text-foreground/50 mb-6">
        <Link href="/" className="hover:text-primary-600 transition-colors">
          Главная
        </Link>
        <span>/</span>
        <span className="text-foreground/80">Каталог</span>
      </nav>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Desktop Sidebar */}
        <aside className="hidden lg:block w-64 flex-shrink-0">
          <div className="sticky top-24">
            <Sidebar />
          </div>
        </aside>

        {/* Mobile Filter Button */}
        <div className="lg:hidden flex items-center gap-3">
          <button
            onClick={() => setFiltersOpen(true)}
            className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium border border-border rounded-lg hover:bg-foreground/5 transition-colors"
          >
            <SlidersHorizontal className="h-4 w-4" />
            Фильтры
            {hasActiveFilters && (
              <span className="w-5 h-5 rounded-full bg-primary-500 text-white text-xs flex items-center justify-center">
                {(selectedCategory !== 'all' ? 1 : 0) + selectedBrands.length}
              </span>
            )}
          </button>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-3 py-2.5 text-sm border border-border rounded-lg bg-white outline-none focus:border-primary-400"
          >
            {SORT_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        {/* Mobile Filter Drawer */}
        {filtersOpen && (
          <>
            <div
              className="fixed inset-0 z-[90] bg-black/50 backdrop-blur-sm lg:hidden"
              onClick={() => setFiltersOpen(false)}
            />
            <div className="fixed top-0 right-0 z-[95] h-full w-80 max-w-[85vw] bg-white shadow-2xl lg:hidden overflow-y-auto flex flex-col">
              <div className="flex items-center justify-between p-6 border-b border-border">
                <span className="text-lg font-semibold">Фильтры</span>
                <button
                  onClick={() => setFiltersOpen(false)}
                  className="p-2 text-foreground/60 hover:text-foreground rounded-lg hover:bg-foreground/5"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="flex-1 p-6 overflow-y-auto">
                <Sidebar />
              </div>
              <div className="p-6 border-t border-border">
                <button
                  onClick={() => setFiltersOpen(false)}
                  className="w-full px-4 py-3 text-sm font-medium text-white bg-primary-500 hover:bg-primary-600 rounded-lg transition-colors"
                >
                  Показать {filteredProducts.length}{' '}
                  {filteredProducts.length === 1
                    ? 'товар'
                    : filteredProducts.length < 5
                    ? 'товара'
                    : 'товаров'}
                </button>
              </div>
            </div>
          </>
        )}

        {/* Product Grid */}
        <main className="flex-1">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl lg:text-4xl font-semibold tracking-tight text-foreground">
                Каталог
              </h1>
              <p className="text-foreground/60 mt-1">
                {filteredProducts.length === 0
                  ? 'Товары не найдены'
                  : `Найдено ${filteredProducts.length} ${
                      filteredProducts.length === 1
                        ? 'товар'
                        : filteredProducts.length < 5
                        ? 'товара'
                        : 'товаров'
                    }`}
              </p>
            </div>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="hidden lg:block px-4 py-2.5 text-sm border border-border rounded-lg bg-white outline-none focus:border-primary-400 cursor-pointer"
            >
              {SORT_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          {/* Active Filter Tags */}
          {hasActiveFilters && (
            <div className="flex flex-wrap items-center gap-2 mb-6">
              {selectedCategory !== 'all' && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-primary-50 text-primary-600 rounded-full">
                  {CATEGORIES.find((c) => c.value === selectedCategory)?.label}
                  <button onClick={() => setSelectedCategory('all')} className="hover:text-primary-800">
                    <X className="h-3 w-3" />
                  </button>
                </span>
              )}
              {selectedBrands.map((brand) => (
                <span
                  key={brand}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-primary-50 text-primary-600 rounded-full"
                >
                  {brand}
                  <button onClick={() => toggleBrand(brand)} className="hover:text-primary-800">
                    <X className="h-3 w-3" />
                  </button>
                </span>
              ))}
              <button
                onClick={clearFilters}
                className="text-xs text-foreground/50 hover:text-foreground transition-colors underline ml-1"
              >
                Сбросить все
              </button>
            </div>
          )}

          {filteredProducts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-foreground/50 text-lg mb-2">Товары не найдены</p>
              <p className="text-foreground/30 text-sm mb-6">
                Попробуйте изменить параметры фильтрации
              </p>
              <button
                onClick={clearFilters}
                className="px-6 py-2.5 text-sm font-medium text-primary-600 bg-primary-50 hover:bg-primary-100 rounded-lg transition-colors"
              >
                Сбросить фильтры
              </button>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default function CatalogPage() {
  return (
    <Suspense
      fallback={
        <div className="container mx-auto px-4 py-16 text-center text-foreground/50">
          Загрузка каталога...
        </div>
      }
    >
      <CatalogContent />
    </Suspense>
  );
}
