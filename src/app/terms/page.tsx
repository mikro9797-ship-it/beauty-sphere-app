import Link from 'next/link';

export const metadata = {
  title: 'Пользовательское соглашение | BEAUTY SPHERE',
  description: 'Пользовательское соглашение BEAUTY SPHERE.',
};

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-12 lg:py-20">
      <div className="max-w-3xl mx-auto">
        <nav className="flex items-center gap-2 text-sm text-foreground/50 mb-8">
          <Link href="/" className="hover:text-primary-600 transition-colors">Главная</Link>
          <span>/</span>
          <span className="text-foreground/80">Пользовательское соглашение</span>
        </nav>

        <h1 className="text-3xl lg:text-4xl font-semibold tracking-tight text-foreground mb-8">
          Пользовательское соглашение
        </h1>

        <div className="prose prose-foreground/80 max-w-none space-y-6 text-foreground/70 leading-relaxed">
          <p>
            Настоящее Пользовательское соглашение (далее — Соглашение) регулирует
            отношения между администрацией сайта BEAUTY SPHERE (далее — Администрация)
            и пользователем сайта (далее — Пользователь).
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">1. Общие положения</h2>
          <p>
            Использование Сайта означает согласие Пользователя с настоящим Соглашением.
            Если вы не согласны с условиями Соглашения, пожалуйста, не используйте Сайт.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">2. Предмет соглашения</h2>
          <p>
            Администрация предоставляет Пользователю доступ к информации о продукции,
            размещенной на Сайте, а также возможность оформления заказов через
            мессенджер WhatsApp.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">3. Оформление заказов</h2>
          <p>
            Заказы оформляются через WhatsApp. Цены на сайте носят информационный
            характер. Окончательная стоимость заказа, включая условия доставки,
            согласовывается с менеджером.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">4. Оплата и доставка</h2>
          <p>
            Способы оплаты и условия доставки обсуждаются индивидуально с менеджером
            при оформлении заказа. Доставка осуществляется по всей территории
            Российской Федерации.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">5. Гарантия качества</h2>
          <p>
            Вся продукция, представленная на Сайте, является 100% оригинальной,
            сертифицированной и проходит строгий контроль качества. BEAUTY SPHERE
            является официальным дилером всех представленных брендов.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">6. Интеллектуальная собственность</h2>
          <p>
            Все материалы Сайта, включая тексты, изображения и дизайн, являются
            собственностью Администрации и защищены законодательством об авторском праве.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">7. Ответственность</h2>
          <p>
            Администрация не несет ответственности за временную недоступность Сайта,
            вызванную техническими причинами. Информация на Сайте может обновляться
            без предварительного уведомления.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">8. Контакты</h2>
          <p>
            По всем вопросам, связанным с настоящим Соглашением, обращайтесь на
            страницу{' '}
            <Link href="/contacts" className="text-primary-600 hover:text-primary-700 underline">
              Контакты
            </Link>.
          </p>

          <p className="text-sm text-foreground/40 mt-12 pt-6 border-t border-border">
            Дата последнего обновления: март 2026 г.
          </p>
        </div>
      </div>
    </div>
  );
}
