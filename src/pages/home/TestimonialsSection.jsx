import React, { useState } from 'react';
import test from "../../assets/test.jpg"

// Данные для слайдера отзывов
const TESTIMONIALS = [
  {
    id: 1,
    name: 'Анна К.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150',
    rating: 5,
    text: 'Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.'
  },
  {
    id: 2,
    name: 'Мария С.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150',
    rating: 5,
    text: 'Замечательные натуральные продукты высокого качества! Масла обладают невероятным ароматом, а выпечка из рисовой муки получается просто воздушной. Теперь заказываю только здесь.'
  },
  {
    id: 3,
    name: 'Дмитрий В.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150',
    rating: 5,
    text: 'Отличный сервис и быстрая доставка. Очень радует, что сырье закупается напрямую у местных фермеров. Будем продолжать сотрудничество и рекомендовать коллегам.'
  }
];

// Данные для круговых счетчиков внизу
const STATS = [
  { id: 1, value: '100%', label: 'Органически' },
  { id: 2, value: '15', label: 'Продуктов на рынке' },
  { id: 3, value: '150+', label: 'Торговых точек' },
  { id: 4, value: '5+', label: 'Лет на рынке' }
];

export default function TestimonialsSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
      <div
          className="w-full bg-white font-roboto text-[#2A4454] px-4 sm:px-6 lg:px-8 py-12 relative overflow-hidden bg-no-repeat bg-cover"
          style={{

              backgroundImage: `url('${test}')`
          }}
      >
      <div className="max-w-5xl mx-auto space-y-16 relative z-10">
        

        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <div className="space-y-2">
            <span className="italic font-serif text-[#7BB074] text-2xl block">
              Отзывы
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2A4454]">
              Что говорят наши покупатели?
            </h2>
          </div>


          <div className="transition-all duration-300 ease-in-out py-4 space-y-4">
            {/* Аватар */}
            <div className="w-20 h-20 mx-auto rounded-full overflow-hidden border-2 border-[#7BB074] shadow-sm">
              <img 
                src={TESTIMONIALS[activeSlide].avatar} 
                alt={TESTIMONIALS[activeSlide].name} 
                className="w-full h-full object-cover"
              />
            </div>


            <div className="flex justify-center gap-1 text-[#FFA800]">
              {[...Array(TESTIMONIALS[activeSlide].rating)].map((_, i) => (
                <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>


            <p className="text-gray-500 text-[15px] sm:text-16px leading-relaxed italic px-4">
              {TESTIMONIALS[activeSlide].text}
            </p>
          </div>


          <div className="flex justify-center items-center gap-2 pt-2">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  activeSlide === index ? 'w-6 bg-[#7BB074]' : 'w-2.5 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Перейти к отзыву ${index + 1}`}
              />
            ))}
          </div>
        </div>


        <hr className="border-gray-100 max-w-2xl mx-auto" />


        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 justify-items-center pt-2">
          {STATS.map((stat) => (
            <div 
              key={stat.id} 
              className="flex flex-col items-center justify-center w-32 h-32 rounded-full border-[4px] border-[#83B67C] bg-white shadow-sm p-2 text-center transition-transform hover:scale-105"
            >
              <span className="text-xl font-extrabold text-[#2A4454] block">
                {stat.value}
              </span>
              <span className="text-xs font-bold text-[#2A4454] mt-1 leading-tight max-w-[100px]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}