import React, { useState } from 'react';
import { toast } from 'react-toastify';
import image from "../../assets/A1.png"
import image1 from "../../assets/A2.png"
import image2 from "../../assets/A3.png"
import image3 from "../../assets/A4.png"
import image4 from "../../assets/A5.png"
import image5 from "../../assets/A6.jpg"

export default function AdditionalSections() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      toast.info(`Поиск по запросу: "${searchQuery}"`);
    }
  };

  const handleNewsClick = (title) => {
    toast.info(`Открыта новость: "${title}"`);
  };

  return (
    <div className="w-full bg-white font-roboto text-[#2A4454]">
      <section className="w-full bg-[#F9F8F3] relative min-h-[540px] flex items-center lg:items-stretch flex-col lg:flex-row overflow-hidden">
        <div 
          className="w-full lg:w-1/2 min-h-[300px] lg:min-h-full bg-cover bg-center"
          style={{ backgroundImage: `url('${image5}')` }}
        />

        <div className="w-full lg:w-1/2 flex items-center justify-start px-4 sm:px-8 lg:px-16 py-12 lg:py-16">
          <div className="bg-white rounded-[32px] p-8 sm:p-10 lg:p-12 shadow-sm max-w-xl border border-gray-50 lg:-ml-24 z-10 relative">
            <div className="space-y-2">
              <span className="italic font-serif text-[#7BB074] text-xl block">Eco Friendly</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#2A4454]">Создаём здоровое будущее</h2>
            </div>

            <div className="mt-8 space-y-6">
              <div>
                <h4 className="font-bold text-[#2A4454] text-base">Современное сельское хозяйство</h4>
                <p className="text-gray-400 text-xs mt-1 leading-relaxed">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
              </div>
              <div>
                <h4 className="font-bold text-[#2A4454] text-base">Технологичный подход в производстве</h4>
                <p className="text-gray-400 text-xs mt-1 leading-relaxed">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
              </div>
              <div>
                <h4 className="font-bold text-[#2A4454] text-base">Популяризация натуральных продуктов</h4>
                <p className="text-gray-400 text-xs mt-1 leading-relaxed">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl bg-[#F1F8F4] mx-auto px-2 sm:px-6 lg:px-0 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div 
            onClick={() => toast.info('Переход в категорию: Натуральные масла')}
            className="relative  overflow-hidden min-h-[320px] bg-cover bg-center flex items-center justify-center p-6 cursor-pointer group shadow-sm"
            style={{ backgroundImage: `url('${image4}')` }}
          >
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
            <span className="relative z-10 bg-white/95 text-[#2A4454] font-bold text-sm px-6 py-3.5 rounded-xl shadow-sm tracking-wide transition-transform group-hover:scale-105">
              Натуральные масла
            </span>
          </div>

          <div 
            onClick={() => toast.info('Переход в категорию: Новинки')}
            className="relative overflow-hidden min-h-[320px] bg-cover bg-center flex items-center justify-center p-6 cursor-pointer group shadow-sm"
            style={{ backgroundImage: `url('${image}')` }}
          >
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
            <span className="relative z-10 bg-white/95 text-[#2A4454] font-bold text-sm px-8 py-3.5 rounded-xl shadow-sm tracking-wider uppercase transition-transform group-hover:scale-105">
              НОВИНКИ
            </span>
          </div>

          <div 
            onClick={() => toast.info('Переход в категорию: Полезная мука')}
            className="relative overflow-hidden min-h-[320px] bg-cover bg-center flex items-center justify-center p-6 cursor-pointer group shadow-sm"
            style={{ backgroundImage: `url('${image1}')` }}
          >
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
            <span className="relative z-10 bg-white/95 text-[#2A4454] font-bold text-sm px-6 py-3.5 rounded-xl shadow-sm tracking-wide transition-transform group-hover:scale-105">
              Полезная мука
            </span>
          </div>

        </div>
      </section>

      <section id="news" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-24 py-12 space-y-10">
        
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div className="space-y-2">
            <span className="text-start italic font-serif text-[#7BB074] text-xl block">Новости</span>
            <h3 className="text-start text-2xl sm:text-3xl font-bold text-[#2A4454] max-w-xl leading-tight">
              Новости об органических продуктах и многом другом
            </h3>
          </div>
          
          <button 
            onClick={() => toast.success('Загрузка архива новостей...')}
            className="flex border-2 border-[#2A4454] hover:bg-[#2A4454] hover:text-white text-[#2A4454] font-bold text-xs rounded-xl px-5 py-3.5 transition-all whitespace-nowrap self-start sm:self-auto flex items-center gap-2"
          >
            Больше новостей <span>⊞</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div 
            onClick={() => handleNewsClick('Витаминная заправка для летнего салата')}
            className="rounded-[32px] overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer bg-cover bg-center min-h-[400px] flex items-end p-4 sm:p-6"
            style={{ backgroundImage: `url('${image2}')` }}
          >
            <div className="bg-white rounded-[24px] p-6 w-full relative space-y-3 shadow-lg">
              <div className="absolute -top-6 left-6 bg-white w-12 h-12 rounded-full flex flex-col items-center justify-center text-center shadow-md border border-gray-50">
                <span className="text-sm font-extrabold text-[#2A4454] leading-none">25</span>
                <span className="text-[9px] font-bold text-[#7BB074] uppercase">Авг</span>
              </div>

              <h4 className="font-bold text-[#2A4454] text-base sm:text-lg pt-2 group-hover:text-[#7BB074]">
                Витаминная заправка для летнего салата
              </h4>
              <p className="text-gray-400 text-xs line-clamp-2">
                Simply dummy text of the printing and typesetting industry. Lorem Ipsum.
              </p>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-[#E9C874] hover:text-[#DCB965] uppercase tracking-wider pt-1">
                Подробнее <span>➔</span>
              </span>
            </div>
          </div>

          <div 
            onClick={() => handleNewsClick('Каких витаминов не хватает осенью?')}
            className="rounded-[32px] overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer bg-cover bg-center min-h-[400px] flex items-end p-4 sm:p-6"
            style={{ backgroundImage: `url('${image3}')` }}
          >
            <div className="bg-white rounded-[24px] p-6 w-full relative space-y-3 shadow-lg">
              <div className="absolute -top-6 left-6 bg-white w-12 h-12 rounded-full flex flex-col items-center justify-center text-center shadow-md border border-gray-50">
                <span className="text-sm font-extrabold text-[#2A4454] leading-none">25</span>
                <span className="text-[9px] font-bold text-[#7BB074] uppercase">Окт</span>
              </div>

              <h4 className="font-bold text-[#2A4454] text-base sm:text-lg pt-2">
                Каких витаминов не хватает осенью?
              </h4>
              <p className="text-gray-400 text-xs line-clamp-2">
                Simply dummy text of the printing and typesetting industry. Lorem Ipsum.
              </p>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-[#E9C874] hover:text-[#DCB965] uppercase tracking-wider pt-1">
                Подробнее <span>➔</span>
              </span>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}