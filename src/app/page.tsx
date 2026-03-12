import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Award, Truck, ShieldCheck } from 'lucide-react';
import { BRANDS } from '@/data/products';
import FeaturedProducts from '@/components/FeaturedProducts';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary-50 py-20 lg:py-32">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 max-w-2xl">
              <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary-600">
                <span className="flex h-2 w-2 rounded-full bg-primary-500 mr-2 animate-pulse"></span>
                Только 100% оригинальная продукция
              </div>
              <h1 className="text-4xl lg:text-6xl font-semibold tracking-tight text-foreground leading-tight">
                Дилерский центр{' '}
                <span className="text-primary-600 block mt-2">Профессиональной космецевтики</span>
              </h1>
              <p className="text-lg text-foreground/70 leading-relaxed max-w-xl">
                Все для работы косметологов. Официальный дилер более 15 брендов.
                <br />
                Мы провели более 150 семинаров для профессионалов отрасли.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="/catalog"
                  className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-white bg-primary-500 hover:bg-primary-600 rounded-lg shadow-sm transition-all hover:scale-105 active:scale-95"
                >
                  Перейти в каталог
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href="/contacts"
                  className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-foreground bg-white border border-border hover:bg-primary-50 rounded-lg shadow-sm transition-all hover:scale-105 active:scale-95"
                >
                  Связаться с нами
                </Link>
              </div>
            </div>
            <div className="relative hidden lg:block h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1200&auto=format&fit=crop&q=80"
                alt="Professional aesthetics setup"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Soft background shape */}
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[800px] rounded-full bg-primary-100/50 blur-3xl -z-0 animate-pulse-slow"></div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background border-b border-border/50">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Award, title: '15+ Брендов', desc: 'Официальный дилер ведущих мировых производителей косметики.' },
              { icon: ShieldCheck, title: '100% Оригинал', desc: 'Вся продукция сертифицирована и проходит строгий контроль качества.' },
              { icon: Truck, title: 'Доставка по России', desc: 'Быстрая и надежная доставка ваших заказов в любой регион страны.' },
              { icon: CheckCircle2, title: 'Экспертность', desc: 'Проведено более 150 семинаров онлайн и оффлайн для косметологов.' },
            ].map((feature) => (
              <div
                key={feature.title}
                className="flex flex-col items-center text-center p-6 space-y-4 rounded-xl bg-white shadow-sm border border-border/50 hover:border-primary-200 hover:shadow-md transition-all"
              >
                <div className="p-4 rounded-full bg-primary-50 text-primary-600">
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="font-semibold text-foreground">{feature.title}</h3>
                <p className="text-sm text-foreground/60">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <FeaturedProducts />

      {/* Brand Marquee */}
      <section className="py-20 bg-primary-50 border-y border-primary-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-foreground/50 mb-10">
            Официальный дилер
          </h2>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {BRANDS.slice(0, 6).map((brand) => (
              <Link
                key={brand}
                href={`/catalog?brand=${encodeURIComponent(brand)}`}
                className="text-xl md:text-2xl font-serif font-bold text-foreground/60 lowercase tracking-tighter hover:text-primary-600 transition-colors"
              >
                {brand}
              </Link>
            ))}
          </div>
          <Link
            href="/brands"
            className="inline-flex items-center mt-10 text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors"
          >
            Смотреть все бренды <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
