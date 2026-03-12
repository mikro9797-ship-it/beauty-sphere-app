import Link from 'next/link';

export const metadata = {
  title: 'Политика конфиденциальности | BEAUTY SPHERE',
  description: 'Политика конфиденциальности BEAUTY SPHERE.',
};

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-12 lg:py-20">
      <div className="max-w-3xl mx-auto">
        <nav className="flex items-center gap-2 text-sm text-foreground/50 mb-8">
          <Link href="/" className="hover:text-primary-600 transition-colors">Главная</Link>
          <span>/</span>
          <span className="text-foreground/80">Политика конфиденциальности</span>
        </nav>

        <h1 className="text-3xl lg:text-4xl font-semibold tracking-tight text-foreground mb-8">
          Политика конфиденциальности
        </h1>

        <div className="prose prose-foreground/80 max-w-none space-y-6 text-foreground/70 leading-relaxed">
          <p>
            Настоящая Политика конфиденциальности определяет порядок обработки и защиты
            персональных данных пользователей сайта BEAUTY SPHERE (далее — Сайт).
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">1. Сбор информации</h2>
          <p>
            Мы можем собирать следующую информацию при использовании вами Сайта:
            имя, номер телефона, адрес электронной почты, адрес доставки, а также
            техническую информацию о вашем устройстве и браузере.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">2. Использование информации</h2>
          <p>
            Собранная информация используется для обработки заказов, улучшения качества
            обслуживания, связи с клиентами и информирования о новых продуктах и акциях
            (при наличии согласия).
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">3. Защита данных</h2>
          <p>
            Мы принимаем все необходимые организационные и технические меры для защиты
            ваших персональных данных от несанкционированного доступа, изменения,
            раскрытия или уничтожения.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">4. Передача данных третьим лицам</h2>
          <p>
            Мы не передаем ваши персональные данные третьим лицам, за исключением
            случаев, предусмотренных законодательством Российской Федерации, а также
            для выполнения обязательств по доставке заказов.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">5. Файлы cookie</h2>
          <p>
            Сайт может использовать файлы cookie для улучшения пользовательского
            опыта. Вы можете отключить cookie в настройках вашего браузера.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">6. Ваши права</h2>
          <p>
            Вы имеете право запросить информацию о хранящихся у нас персональных данных,
            потребовать их изменения или удаления. Для этого свяжитесь с нами по
            контактным данным, указанным на странице{' '}
            <Link href="/contacts" className="text-primary-600 hover:text-primary-700 underline">
              Контакты
            </Link>.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">7. Контактная информация</h2>
          <p>
            По вопросам, связанным с обработкой персональных данных, вы можете
            обратиться по телефону{' '}
            <a href="tel:+79882933999" className="text-primary-600 hover:text-primary-700 underline">
              +7 988 293-39-99
            </a>{' '}
            или написать нам в WhatsApp.
          </p>

          <p className="text-sm text-foreground/40 mt-12 pt-6 border-t border-border">
            Дата последнего обновления: март 2026 г.
          </p>
        </div>
      </div>
    </div>
  );
}
