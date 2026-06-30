import React, { useState } from 'react';
import { toast } from 'react-toastify';
import image from "../../assets/Product1.png"
import image1 from "../../assets/Product2.png"
import image2 from "../../assets/Product3.png"


const INITIAL_PRODUCTS = [
  { id: 1, title: 'Масло тыквенное, 250мл', category: 'Масла', tag: 'Масла', img: image2 },
  { id: 2, title: 'Масло кунжутное, 250мл', category: 'Мука', tag: 'Мука', img: image2 },
  { id: 3, title: 'Масло грецкого ореха, 250 мл', category: 'Каши', tag: 'Каши', img: image2 },
  { id: 4, title: 'Масло Конопляное, 250мл', category: 'Масла', tag: 'Масла', img: image2 },
  { id: 5, title: 'Мука рисовая, 500г', category: 'Масла', tag: 'Масла', img: image1 },
  { id: 6, title: 'Мука гречневая, 500г', category: 'Мука', tag: 'Мука', img: image1 },
  { id: 7, title: 'Мука овсяная, 500г', category: 'Каши', tag: 'Каши', img: image1 },
  { id: 8, title: 'Мука льняная, 500г', category: 'Масла', tag: 'Масла', img: image1 },
];

export default function ProductSection() {
  const [selectedCategory, setSelectedCategory] = useState('Все');

  const handleProductClick = (productName) => {
    toast.info(`Выбран товар: ${productName}`);
  };

  const filteredProducts = selectedCategory === 'Все' 
    ? INITIAL_PRODUCTS 
    : INITIAL_PRODUCTS.filter(p => p.category === selectedCategory);

  return (
    <div className="w-full bg-white font-roboto text-[#2A4454] space-y-24 py-16">
      

      <div 
        className="w-full min-h-[600px] bg-[#F4F6F4] relative flex items-center bg-cover bg-left md:bg-center px-4 sm:px-6 lg:px-8 py-12"
        style={{
          backgroundImage: `url('${image}')`
        }}
      >
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

          <div className="hidden lg:block h-full" />


          <div className="space-y-6 max-w-xl lg:pl-8">
            <div className="space-y-2">
              <span className="text-start italic font-serif text-[#7BB074] text-xl block">О нас</span>
              <h2 className="text-start text-3xl sm:text-4xl font-bold text-[#2A4454] leading-tight">
                Мы работаем только с качественным сырьём от местных фермеров
              </h2>
            </div>
            
            <p className="text-start text-gray-500 text-[15px] leading-relaxed">
              Работа с местными фермерами приносит производственным компаниям преимущество в виде высококачественного сырья, укрепляет местное сообщество, снижает экологический след и способствует устойчивости цепочки поставок, обеспечивая надежность и прозрачность.
            </p>


            <div className="space-y-4 pt-2">

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center flex-shrink-0 shadow-sm border border-gray-100">
                  <svg className="w-6 h-6 text-[#7BB074]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M14 12a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-start font-bold text-[#2A4454] text-base">Только натуральная продукция</h4>
                  <p className="text-start text-gray-500 text-sm mt-0.5">Полагаясь на природу, мы предлагаем продукты без искусственных добавок, гарантируя вам чистоту и качество.</p>
                </div>
              </div>


              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center flex-shrink-0 shadow-sm border border-gray-100">
                  <svg className="w-6 h-6 text-[#7BB074]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-start font-bold text-[#2A4454] text-base">Высокие стандарты качества</h4>
                  <p className="text-start text-gray-500 text-sm mt-0.5">На каждом этапе производства мы стремимся к совершенству, чтобы вы могли наслаждаться продуктами с превосходным качеством и вкусом.</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button className="bg-[#2A4454] hover:bg-[#1E323F] text-white font-medium text-sm rounded-xl px-7 py-3.5 transition-colors shadow-sm flex items-center gap-2">
                Подробнее <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </div>



      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-2">
          <span className="italic font-serif text-[#7BB074] text-xl block">Категории</span>
          <h3 className="text-3xl font-bold text-[#2A4454]">Наши продукты</h3>
          

          <div className="flex items-center justify-center gap-2 pt-4 flex-wrap">
            {['Все', 'Масла', 'Мука', 'Каши'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === cat 
                    ? 'bg-[#2A4454] text-white shadow-sm' 
                    : 'bg-gray-100 text-[#2A4454] hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-12 lg:grid-cols-4 gap-4">
          {filteredProducts.map((product) => (
            <div 
              key={product.id}
              onClick={() => handleProductClick(product.title)}
              className="bg-[#F8F9FA] rounded-3xl p-3 flex flex-col justify-between items-center transition-all hover:shadow-md cursor-pointer group border border-transparent hover:border-gray-100"
            >

              <div className="w-full flex justify-start">
                <span className="bg-[#2A4454] text-white text-[11px] font-bold px-3 py-1 rounded-md tracking-wide">
                  {product.tag}
                </span>
              </div>


              <div className="h-48 my-4 flex items-center justify-center overflow-hidden w-full rounded-2xl bg-white">
                <img 
                  src={product.img} 
                  alt={product.title} 
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300" 
                />
              </div>


              <div className="w-full text-center pt-2">
                <h4 className="text-[#2A4454] font-bold text-[15px] group-hover:text-[#7BB074] transition-colors line-clamp-2">
                  {product.title}
                </h4>
              </div>
            </div>
          ))}
        </div>


        <div className="text-center pt-6">
          <button 
            onClick={() => {
              setSelectedCategory('Все');
              toast.success('Загружен полный список товаров каталога!');
            }}
            className="bg-[#2A4454] hover:bg-[#1E323F] text-white font-medium text-sm rounded-xl px-8 py-4 transition-colors shadow-sm flex items-center gap-2 mx-auto"
          >
            Смотреть всё <span>+</span>
          </button>
        </div>
      </div>

    </div>
  );
}