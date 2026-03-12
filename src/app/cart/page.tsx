'use client';

import { useCartStore, type CartItem } from '@/store/cartStore';
import Image from 'next/image';
import Link from 'next/link';
import { Minus, Plus, Trash2, MessageCircle } from 'lucide-react';

export default function CartPage() {
  const { items, removeItem, updateQuantity, getCartTotal, clearCart } = useCartStore();
  const WHATSAPP_NUMBER = '79882933999';

  const handleCheckout = () => {
    if (items.length === 0) return;

    let message = 'Здравствуйте! Я хочу оформить заказ:\n\n';
    items.forEach((item: CartItem, index: number) => {
      message += `${index + 1}. ${item.brand} - ${item.name} x${item.quantity} шт. (${(item.price * item.quantity).toLocaleString('ru-RU')} ₽)\n`;
    });
    message += `\nОбщая сумма: ${getCartTotal().toLocaleString('ru-RU')} ₽\n\nПодскажите, пожалуйста, по условиям доставки и оплаты.`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');
    clearCart();
  };

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-24 text-center">
        <div className="w-24 h-24 mx-auto bg-primary-50 rounded-full flex items-center justify-center mb-6">
          <Trash2 className="h-10 w-10 text-primary-300" />
        </div>
        <h1 className="text-3xl font-semibold tracking-tight text-foreground mb-4">Ваша корзина пуста</h1>
        <p className="text-foreground/60 mb-8 max-w-md mx-auto">
          Похоже, вы еще ничего не добавили. Перейдите в каталог, чтобы найти нужную продукцию.
        </p>
        <Link href="/catalog" className="inline-flex items-center justify-center px-8 py-3 text-sm font-medium text-white bg-primary-500 hover:bg-primary-600 rounded-lg shadow-sm transition-colors">
          Перейти в каталог
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 lg:py-20">
      <h1 className="text-3xl lg:text-4xl font-semibold tracking-tight text-foreground mb-8">Корзина</h1>
      
      <div className="flex flex-col lg:flex-row gap-12">
        <div className="lg:w-2/3 space-y-6">
          {items.map((item) => (
            <div key={item.id} className="flex flex-col sm:flex-row gap-6 p-4 sm:p-6 bg-white rounded-xl border border-border/50 shadow-sm relative pr-12 sm:pr-6">
              <button 
                onClick={() => removeItem(item.id)}
                className="absolute top-4 right-4 sm:relative sm:top-0 sm:right-0 p-2 text-foreground/40 hover:text-red-500 transition-colors order-first sm:order-last sm:ml-auto"
                aria-label="Удалить товар"
              >
                <Trash2 className="h-5 w-5" />
              </button>
              
              <div className="relative w-24 h-24 sm:w-32 sm:h-32 shrink-0 bg-primary-50 rounded-lg overflow-hidden mix-blend-multiply">
                <Image src={item.image} alt={item.name} fill className="object-cover" />
              </div>
              
              <div className="flex flex-col flex-1">
                <div className="flex-1">
                  <p className="text-xs font-medium text-primary-600 mb-1">{item.brand}</p>
                  <h3 className="text-lg font-medium text-foreground leading-tight mb-2 pr-4 sm:pr-0">
                    <Link href={`/catalog/${item.id}`} className="hover:text-primary-600 transition-colors">{item.name}</Link>
                  </h3>
                  <p className="font-semibold text-foreground">{item.price.toLocaleString('ru-RU')} ₽</p>
                </div>
                
                <div className="flex items-center mt-4 sm:mt-0">
                  <div className="flex items-center border border-border rounded-lg bg-background">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="p-2 text-foreground/70 hover:text-foreground disabled:opacity-50 transition-colors"
                      disabled={item.quantity <= 1}
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="w-10 text-center text-sm font-medium">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="p-2 text-foreground/70 hover:text-foreground transition-colors"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="lg:w-1/3">
          <div className="bg-white rounded-2xl p-6 lg:p-8 border border-border/50 shadow-sm sticky top-24">
            <h2 className="text-xl font-semibold mb-6">Сумма заказа</h2>
            
            <div className="space-y-4 text-sm mb-6 pb-6 border-b border-border/50">
               <div className="flex justify-between text-foreground/70">
                 <span>Товары ({items.length})</span>
                 <span>{getCartTotal().toLocaleString('ru-RU')} ₽</span>
               </div>
               <div className="flex justify-between text-foreground/70">
                 <span>Доставка</span>
                 <span>Менеджер рассчитает</span>
               </div>
            </div>
            
            <div className="flex justify-between items-center mb-8">
               <span className="text-lg font-semibold">Итого</span>
               <span className="text-2xl font-bold text-foreground">{getCartTotal().toLocaleString('ru-RU')} ₽</span>
            </div>

            <button 
              onClick={handleCheckout}
              className="w-full flex items-center justify-center px-6 py-4 text-sm font-medium text-white bg-[#25D366] hover:bg-[#1DA851] rounded-xl shadow-sm transition-all hover:scale-[1.02] active:scale-95 mb-4 group"
            >
              <MessageCircle className="mr-2 h-5 w-5 group-hover:animate-pulse" />
              Оформить через WhatsApp
            </button>
            <p className="text-xs text-center text-foreground/50">
              Ваш заказ будет моментально сформирован и отправлен нашему менеджеру в WhatsApp.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
