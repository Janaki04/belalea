import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-[800px] mt-10 bg-[#D4E3E5] font-sans text-[#2A4454] relative overflow-hidden flex items-center">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-20 flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Левая графическая часть (Иллюстрация сухоцветов по макету) */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end relative">
          <img 
            src="https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?auto=format&fit=crop&q=80&w=600" // Замените на локальный ассет, если есть вырезанная иллюстрация
            alt="Flowers illustration" 
            className="max-w-full h-auto max-h-[400px] object-contain rounded-2xl opacity-90 drop-shadow-sm"
          />
        </div>

        {/* Правая текстовая часть */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-4 md:pl-8">
          {/* Огромный заголовок 404 */}
          <h1 className="text-[120px] sm:text-[160px] font-black tracking-tighter text-[#A2B9BC] leading-none select-none">
            404
          </h1>
          
          {/* Основные сообщения */}
          <div className="space-y-1">
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#2A4454]">
              Страница не найдена
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 font-medium tracking-wide">
              The page you are looking for doesn't exist or has been moved
            </p>
          </div>

          {/* Интерактивная кнопка перехода в каталог */}
          <div className="pt-4">
            <button
              onClick={() => navigate('/')}
              className="inline-flex items-center gap-2.5 bg-[#2A4454] hover:bg-[#203440] text-white text-xs font-bold rounded-xl px-7 py-4 shadow-md transition-all active:scale-95"
            >
              <span>В каталог</span>
              <svg 
                className="w-3.5 h-3.5" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}