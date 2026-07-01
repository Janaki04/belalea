import React from 'react';
import { useNavigate } from 'react-router-dom';
import Banner from '../../components/Banner';
import BestOffersSection from '../home/BestOffersSection';
import about from "../../assets/about.png"
import about2 from "../../assets/about2.png"
import about1 from "../../assets/about1.png"

export default function AboutAndBenefitsSection() {
  const navigate = useNavigate();

  const bottomcards = [
    {
      id: 1,
      title: 'Доступность',
      desc: 'Наша продукция во всех гипермаркетах',
      icon: (
        <svg className="w-6 h-6 text-[#2A4454]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 0a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      id: 2,
      title: '100% Свежесть',
      desc: 'Мы - местный производитель',
      icon: (
        <svg className="w-6 h-6 text-[#2A4454]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      id: 3,
      title: 'Поддержка',
      desc: 'Мы всегда готовы ответить на все вопросы',
      icon: (
        <svg className="w-6 h-6 text-[#2A4454]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  return (
    <>
    <Banner    title="О нас" 
            backgroundImage={about}/>
    <div className="w-full bg-white text-[#2A4454] font-roboto">
   
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 flex justify-center items-center order-1">
          <div className="relative max-w-[480px] w-full aspect-square transition-transform duration-500 hover:scale-[1.02]">
            <img 
              src={about1} 
              alt="Fresh healthy salad bowl" 
              className="w-full h-full object-cover rounded-full drop-shadow-2xl"
            />
          </div>
        </div>

        <div className="lg:col-span-6 space-y-6 order-2">
          <div className="space-y-2">
            <span className="text-start italic font-serif text-[#7BB074] text-xl sm:text-2xl block tracking-wide">
              О нас
            </span>
            <h1 className="text-start text-3xl sm:text-4xl font-extrabold text-[#2A4454] leading-tight tracking-tight">
              Натуральные продукты - здоровое население
            </h1>
          </div>

          <div className="space-y-4 text-gray-500 text-sm leading-relaxed max-w-xl">
            <p className='text-start'>
              Simply dummy text of the printing and typesetting industry. Lorem had ceased to be the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
            </p>
            <p className='text-start'>
              Simply dummy text of the printing and typesetting industry. Lorem had ceased to be the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
            <div className="flex items-center gap-4 group">
              <div className="w-14 h-14 bg-[#F4F6F4] group-hover:bg-[#e7ebe7] rounded-2xl flex items-center justify-center text-[#7BB074] flex-shrink-0 transition-colors duration-200">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="font-bold text-[14px] text-[#2A4454] leading-snug">
                Современная сельхоз. техника
              </span>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="w-14 h-14 bg-[#F4F6F4] group-hover:bg-[#e7ebe7] rounded-2xl flex items-center justify-center text-[#7BB074] flex-shrink-0 transition-colors duration-200">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <span className="font-bold text-[14px] text-[#2A4454] leading-snug">
                Выращивание без гормонов
              </span>
            </div>
          </div>

          <div className="pt-4">
            <button 
              onClick={() => navigate('/contacts')}
              className="bg-[#2A4454] hover:bg-[#1E323F] active:scale-[0.98] py-2 text-white font-bold text-xs uppercase tracking-wider rounded-xl px-8 py-4.5 transition-all duration-200 flex items-center gap-2 shadow-sm"
            >
              Контакты <span>➔</span>
            </button>
          </div>
        </div>
      </section>

      <section className="bg-[#F9FBFA] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6 max-w-xl">
            <div className="space-y-2">
              <span className="text-start italic font-serif text-[#7BB074] text-xl sm:text-2xl block tracking-wide">
                Почему мы?
              </span>
              <h2 className="text-start text-2xl sm:text-3xl font-extrabold text-[#2A4454] leading-tight tracking-tight">
                Мы закупаем семена и орехи у лучших фермеров.
              </h2>
              <p className="text-start text-gray-400 text-xs leading-relaxed pt-1">
                Simply dummy text of the printing and typesetting industry. Lorem had ceased to be the industry's standard the 1500s, when an unknown
              </p>
            </div>

            <div className="space-y-2 pt-2">
              <div className="flex w-fit items-center gap-2.5 bg-[#ECEFEF] rounded-full px-5 py-2.5">
                <div className=" flex w-2 h-2 rounded-full bg-[#7BB074]" />
                <span className="text-start flex font-extrabold text-xs text-[#2A4454] tracking-wide">
                  100% Натуральные продукты
                </span>
              </div>
              <p className="text-start text-gray-500 text-xs pl-6 max-w-md leading-relaxed">
                Simply dummy text of the printing and typesetting industry Lorem Ipsum
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex w-fit items-center gap-2.5 bg-[#ECEFEF] rounded-full px-5 py-2.5">
                <div className="w-2 h-2 rounded-full bg-[#7BB074]" />
                <span className="text-start font-extrabold text-xs text-[#2A4454] tracking-wide">
                  Сертификаты качества и соответствия
                </span>
              </div>
              <p className="text-start text-gray-500 text-xs pl-6 max-w-md leading-relaxed">
                Filling, and temptingly healthy, our Biona Organic Granola with Wild Berries is just the thing
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div 
              className="w-full max-w-[540px] h-[300px] sm:h-[380px] bg-cover bg-center rounded-[32px] overflow-hidden shadow-md transition-shadow duration-300 hover:shadow-lg"
              style={{ backgroundImage: `url('${about2}')` }}
            />
          </div>
        </div>
      </section>

      <section className="w-full bg-[#F9FBFA] pb-16 md:pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {bottomcards.map((card) => (
              <div 
                key={card.id}
                className="bg-white rounded-[24px] p-8 shadow-sm hover:shadow-md border border-gray-100/50 flex flex-col items-center text-center space-y-4 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-[#F4F6F4] rounded-2xl flex items-center justify-center flex-shrink-0">
                  {card.icon}
                </div>
                <h3 className="font-extrabold text-[15px] text-[#2A4454] tracking-wide">
                  {card.title}
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed max-w-[200px]">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
    <BestOffersSection/>
    </>
  );
}