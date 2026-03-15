import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { PRODUCTS } from '@/data/products';
import AddToCartButton from '@/components/AddToCartButton';
import ProductCard from '@/components/ProductCard';
import RecentlyViewed from '@/components/RecentlyViewed';
import { TrackView, ProductLikeButton } from '@/components/ProductDetailClient';

export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({ id: product.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = PRODUCTS.find((p) => p.id === id);
  if (!product) return { title: 'Товар не найден | BEAUTY SPHERE' };
  return {
    title: `${product.name} — ${product.brand} | BEAUTY SPHERE`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = PRODUCTS.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  const relatedProducts = PRODUCTS.filter(
    (p) => p.id !== product.id && (p.brand === product.brand || p.category === product.category)
  ).slice(0, 4);

  const categoryLabels: Record<string, string> = {
    Skincare: 'Уход за кожей',
    Injectables: 'Инъекционные препараты',
    Professional: 'Профессиональные средства',
    'Sun Protection': 'Солнцезащитные средства',
  };

  return (
    <div>
      {/* Track view in history */}
      <TrackView productId={product.id} />

      <div className="container mx-auto px-4 py-8 lg:py-16">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-foreground/50 mb-8">
          <Link href="/" className="hover:text-primary-600 transition-colors">Главная</Link>
          <span>/</span>
          <Link href="/catalog" className="hover:text-primary-600 transition-colors">Каталог</Link>
          <span>/</span>
          <span className="text-foreground/80 truncate max-w-[200px]">{product.name}</span>
        </nav>

        <Link
          href="/catalog"
          className="inline-flex items-center gap-2 text-sm text-foreground/60 hover:text-primary-600 transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Назад в каталог
        </Link>

        {/* Product Detail */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
          {/* Image */}
          <div className="relative aspect-square bg-primary-50 rounded-2xl overflow-hidden shadow-sm">
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover mix-blend-multiply"
              priority
            />
          </div>

          {/* Info */}
          <div className="flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <Link
                href={`/catalog?brand=${encodeURIComponent(product.brand)}`}
                className="text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors"
              >
                {product.brand}
              </Link>
              <ProductLikeButton productId={product.id} />
            </div>

            <h1 className="text-3xl lg:text-4xl font-semibold tracking-tight text-foreground mb-4 leading-tight">
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 text-xs font-medium bg-primary-50 text-primary-600 rounded-full">
                {categoryLabels[product.category] || product.category}
              </span>
            </div>

            <p className="text-foreground/70 leading-relaxed mb-8 text-lg">
              {product.description}
            </p>

            <div className="mb-8">
              <span className="text-3xl font-bold text-foreground">
                {product.price.toLocaleString('ru-RU')} &#8381;
              </span>
            </div>

            <div className="mt-auto">
              <AddToCartButton product={product} />
            </div>

            {/* Delivery info */}
            <div className="mt-8 p-4 bg-primary-50/50 rounded-xl space-y-2">
              <p className="text-sm text-foreground/70">
                <span className="font-medium text-foreground">Доставка:</span> по всей России, стоимость рассчитает менеджер
              </p>
              <p className="text-sm text-foreground/70">
                <span className="font-medium text-foreground">Оплата:</span> безналичный расчет, перевод на карту
              </p>
              <p className="text-sm text-foreground/70">
                <span className="font-medium text-foreground">Гарантия:</span> 100% оригинальная продукция
              </p>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground mb-8">
              Похожие товары
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Recently Viewed */}
      <RecentlyViewed excludeId={product.id} />
    </div>
  );
}
