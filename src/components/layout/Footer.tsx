import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold tracking-wide text-foreground">BEAUTY SPHERE</h3>
            <p className="text-sm text-foreground/60 leading-relaxed max-w-xs">
              Дилерский центр профессиональной космецевтики. Официальный дилер более 15 брендов. Только 100% оригинальная продукция.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-medium uppercase tracking-wider text-foreground">Навигация</h4>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li><Link href="/catalog" className="hover:text-primary transition-colors">Каталог продукции</Link></li>
              <li><Link href="/brands" className="hover:text-primary transition-colors">Наши бренды</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">О нас</Link></li>
              <li><Link href="/contacts" className="hover:text-primary transition-colors">Контакты</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-medium uppercase tracking-wider text-foreground">Контакты</h4>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li>г. Махачкала</li>
              <li>ул. Азиза Алиева 18</li>
              <li className="pt-2"><a href="tel:+79882933999" className="hover:text-primary transition-colors">+7 988 293-39-99</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-medium uppercase tracking-wider text-foreground">Мы в соцсетях</h4>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li>
                <a 
                  href="https://www.instagram.com/beauty_spheree_dag" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Instagram @beauty_spheree_dag
                </a>
              </li>
              <li>
                <a 
                  href="https://wa.me/message/OTTKIKPZOFJVA1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-foreground/40">
          <p>© {new Date().getFullYear()} BEAUTY SPHERE. Все права защищены.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-foreground">Политика конфиденциальности</Link>
            <Link href="/terms" className="hover:text-foreground">Пользовательское соглашение</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
