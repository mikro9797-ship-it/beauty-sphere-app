import { MessageCircle, MapPin, Phone, Instagram } from 'lucide-react';

export const metadata = {
  title: 'Контакты | BEAUTY SPHERE',
  description: 'Свяжитесь с BEAUTY SPHERE для заказа профессиональной косметики.',
};

export default function ContactsPage() {
  return (
    <div className="container mx-auto px-4 py-16 lg:py-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl lg:text-5xl font-semibold tracking-tight text-foreground text-center mb-6">Свяжитесь с нами</h1>
        <p className="text-lg text-foreground/70 text-center mb-16 max-w-2xl mx-auto">
          Наша команда экспертов всегда готова проконсультировать вас по продукции, условиям сотрудничества и оформлению заказа.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Details */}
          <div className="space-y-8 bg-white p-8 rounded-2xl border border-border/50 shadow-sm">
            <h2 className="text-2xl font-semibold mb-6">Контактная информация</h2>
            
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-primary-50 text-primary-600 rounded-full shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-medium text-foreground text-lg">Адрес</h3>
                <p className="text-foreground/70 mt-1">г. Махачкала<br/>ул. Азиза Алиева 18</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 bg-primary-50 text-primary-600 rounded-full shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-medium text-foreground text-lg">Телефон</h3>
                <a href="tel:+79882933999" className="text-foreground/70 mt-1 hover:text-primary transition-colors block">+7 988 293-39-99</a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 bg-primary-50 text-primary-600 rounded-full shrink-0">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-medium text-foreground text-lg">WhatsApp</h3>
                <a 
                  href="https://wa.me/message/OTTKIKPZOFJVA1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-foreground/70 mt-1 hover:text-primary transition-colors block"
                >
                  Написать нам в WhatsApp
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 bg-primary-50 text-primary-600 rounded-full shrink-0">
                <Instagram className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-medium text-foreground text-lg">Instagram</h3>
                <a 
                  href="https://www.instagram.com/beauty_spheree_dag" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-foreground/70 mt-1 hover:text-primary transition-colors block"
                >
                  @beauty_spheree_dag
                </a>
              </div>
            </div>
          </div>

          {/* Quick Action */}
          <div className="bg-primary-50 p-8 rounded-2xl flex flex-col justify-center text-center space-y-6">
             <div className="w-20 h-20 mx-auto bg-white rounded-full flex items-center justify-center shadow-sm">
               <MessageCircle className="w-10 h-10 text-primary-600" />
             </div>
             <div>
               <h3 className="text-2xl font-semibold text-foreground mb-3">Оформить заказ или задать вопрос?</h3>
               <p className="text-foreground/70 mb-8">
                 Самый быстрый способ связаться с нашими менеджерами — написать нам в WhatsApp. Мы поможем подобрать уход и оформим доставку.
               </p>
               <a 
                  href="https://wa.me/message/OTTKIKPZOFJVA1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-white bg-[#25D366] hover:bg-[#1DA851] rounded-lg shadow-sm transition-all hover:scale-105 active:scale-95"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Написать в WhatsApp
                </a>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
