import Image from 'next/image';
import Link from 'next/link';
import { Target, Award, Users } from 'lucide-react';

export const metadata = {
  title: 'О Компании | BEAUTY SPHERE',
  description: 'Узнайте больше о дилерском центре профессиональной космецевтики BEAUTY SPHERE.',
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="py-20 lg:py-32 bg-primary-50 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
          <h1 className="text-4xl lg:text-5xl font-semibold tracking-tight text-foreground mb-6">
            BEAUTY SPHERE
          </h1>
          <p className="text-xl text-foreground/70 leading-relaxed">
            Ваш надежный партнер в мире профессиональной космецевтики. Мы объединяем передовые бренды и экспертные знания для эстетической медицины.
          </p>
        </div>
        {/* Decorative circle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-primary-200/50 -z-10 animate-spin-slow"></div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-xl">
               <Image
                 src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&auto=format&fit=crop&q=80"
                 alt="Spa and clinical dermatology"
                 fill
                 className="object-cover"
               />
               <div className="absolute inset-0 bg-primary-600/10 mix-blend-multiply"></div>
            </div>
            
            <div className="space-y-10">
              <div>
                <h2 className="text-3xl font-semibold tracking-tight text-foreground mb-4">Кто мы?</h2>
                <div className="w-12 h-1 bg-primary-400 mb-6"></div>
                <p className="text-lg text-foreground/70 leading-relaxed">
                  BEAUTY SPHERE — это дилерский центр профессиональной космецевтики. Мы специализируемся на подборе, поставке и обучении работе с инновационными, безопасными и 100% оригинальными препаратами. Наш ассортимент включает инъекционные средства, профессиональные пилинги, а также домашние линии для комплексного ухода.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center text-primary-600 mb-4">
                    <Target className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-medium text-foreground">Наша Миссия</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    Предоставить косметологам доступ к лучшим мировым премиум-препаратам, обеспечивая уверенность в результате и безопасности каждого протокола.
                  </p>
                </div>
                
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center text-primary-600 mb-4">
                    <Users className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-medium text-foreground">Наш Подход</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    Мы верим в синергию качественного продукта и глубоких знаний. Поэтому мы регулярно проводим обучающие семинары и развиваем профессиональное сообщество.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-x divide-white/20">
            <div className="space-y-2">
              <p className="text-5xl font-light tracking-tighter">15+</p>
              <p className="text-primary-100 font-medium uppercase tracking-wider text-sm">Официальных брендов</p>
            </div>
            <div className="space-y-2">
              <p className="text-5xl font-light tracking-tighter">150+</p>
              <p className="text-primary-100 font-medium uppercase tracking-wider text-sm">Обучающих семинаров</p>
            </div>
            <div className="space-y-2">
              <p className="text-5xl font-light tracking-tighter">100%</p>
              <p className="text-primary-100 font-medium uppercase tracking-wider text-sm">Оригинальной продукции</p>
            </div>
            <div className="space-y-2">
              <p className="text-5xl font-light tracking-tighter">РФ</p>
              <p className="text-primary-100 font-medium uppercase tracking-wider text-sm">Доставка по стране</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <Award className="w-12 h-12 text-primary-500 mx-auto mb-6" />
          <h2 className="text-3xl font-semibold tracking-tight text-foreground mb-4">Хотите начать сотрудничество?</h2>
          <p className="text-lg text-foreground/70 mb-8">
            Свяжитесь с нами для получения прайс-листа для специалистов или оформления розничного заказа.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Link href="/catalog" className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-white bg-primary-500 hover:bg-primary-600 rounded-lg shadow-sm transition-all hover:scale-105 active:scale-95">
                Каталог
             </Link>
             <Link href="/contacts" className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-foreground bg-white border border-border hover:bg-primary-50 rounded-lg shadow-sm transition-all hover:scale-105 active:scale-95">
                Связаться с нами
             </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
