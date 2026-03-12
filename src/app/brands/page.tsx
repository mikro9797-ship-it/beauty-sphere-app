import Link from 'next/link';
import { BRANDS, PRODUCTS } from '@/data/products';

export const metadata = {
  title: 'Наши Бренды | BEAUTY SPHERE',
  description: 'Официальный дилер более 15 мировых брендов профессиональной космецевтики.',
};

const BRAND_DESCRIPTIONS: Record<string, string> = {
  'Harmony Castle': 'Инновационная российская космецевтика, специализирующаяся на биоревитализации и пребиотическом уходе за кожей.',
  'Arkana': 'Польский бренд профессиональной косметики с акцентом на дерматологические решения и микробиом кожи.',
  'Karisma Collagen': 'Передовые коллагеновые препараты нового поколения для профессионального антивозрастного ухода.',
  'Akradex': 'Производитель инъекционных филлеров на основе полимолочной кислоты для естественного омоложения.',
  'Vital Essential Cosmetics': 'Фармакологические пептидные препараты для профессионального антивозрастного ухода.',
  'Linerase': 'Биостимуляторы и препараты для глубокого увлажнения с гиалуроновой кислотой и аминокислотами.',
  'Reborn PLA': 'Премиальные PLLA биостимуляторы для естественной регенерации коллагена и долгосрочного омоложения.',
  'Factology': 'Современные средства для защиты кожи от солнца с инновационными текстурами.',
  'Skin Synergy': 'Канадская медицинская косметика с синергетическими пептидными формулами для чувствительной кожи.',
  'Lutronic Infini': 'Аппаратная косметология: лазерные и радиочастотные технологии для клинического омоложения.',
};

export default function BrandsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-primary-50">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-4xl lg:text-5xl font-semibold tracking-tight text-foreground mb-4">
            Наши Бренды
          </h1>
          <p className="text-lg text-foreground/70 leading-relaxed">
            Мы являемся официальным дилером ведущих мировых производителей профессиональной космецевтики.
            Каждый бренд тщательно отобран нашими экспертами.
          </p>
        </div>
      </section>

      {/* Brands Grid */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {BRANDS.map((brand) => {
              const productCount = PRODUCTS.filter((p) => p.brand === brand).length;
              const description = BRAND_DESCRIPTIONS[brand] || 'Профессиональный бренд космецевтики.';

              return (
                <Link
                  key={brand}
                  href={`/catalog?brand=${encodeURIComponent(brand)}`}
                  className="group p-8 bg-white rounded-2xl border border-border/50 shadow-sm hover:shadow-lg hover:border-primary-200 transition-all"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h2 className="text-2xl font-serif font-bold text-foreground group-hover:text-primary-600 transition-colors lowercase tracking-tight">
                      {brand}
                    </h2>
                    {productCount > 0 && (
                      <span className="px-3 py-1 text-xs font-medium bg-primary-50 text-primary-600 rounded-full shrink-0 ml-4">
                        {productCount} {productCount === 1 ? 'товар' : productCount < 5 ? 'товара' : 'товаров'}
                      </span>
                    )}
                  </div>
                  <p className="text-foreground/60 text-sm leading-relaxed mb-4">
                    {description}
                  </p>
                  <span className="text-sm font-medium text-primary-600 group-hover:text-primary-700 transition-colors">
                    Смотреть продукцию &rarr;
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-50 border-t border-primary-100">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground mb-4">
            Не нашли нужный бренд?
          </h2>
          <p className="text-foreground/70 mb-8">
            Свяжитесь с нами, и мы поможем подобрать оптимальное решение для вашей практики.
          </p>
          <Link
            href="/contacts"
            className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-white bg-primary-500 hover:bg-primary-600 rounded-lg shadow-sm transition-all hover:scale-105 active:scale-95"
          >
            Связаться с нами
          </Link>
        </div>
      </section>
    </div>
  );
}
