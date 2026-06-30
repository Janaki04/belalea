import React from 'react';
import { toast } from 'react-toastify';
import image2 from "../../assets/Product3.png"


// Данные лучших предложений месяца из макета
const BEST_OFFERS = [
  { id: 1, title: 'Масло тыквенное, 250мл', tag: 'Масла', img: image2 },
  { id: 2, title: 'Масло тыквенное, 250мл', tag: 'Масла', img: image2 },
  { id: 3, title: 'Масло тыквенное, 250мл', tag: 'Масла', img: image2 },
  { id: 4, title: 'Масло тыквенное, 250мл', tag: 'Масла', img: image2 },
];

export default function BestOffersSection() {
  
  const handleProductClick = (title) => {
    toast.info(`Вы открыли карточку: ${title}`);
  };

  const handleSeeAllClick = () => {
    toast.success('Переход ко всем предложениям месяца');
  };

  return (
    <div className="w-full bg-[#7CA287] px-4 sm:px-6 lg:px-8 py-16 mt-0 font-roboto">
      <div className="max-w-7xl mx-auto space-y-8 px-16">
        
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-wide">
            Лучшие предложения месяца
          </h2>
          
          <button 
            onClick={handleSeeAllClick}
            className="inline-flex items-center justify-center gap-2 bg-[#E9C874] hover:bg-[#DCB965] text-[#2A4454] font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-full shadow-sm transition-all self-start sm:self-auto"
          >
            Смотреть все
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {BEST_OFFERS.map((product) => (
            <div 
              key={product.id}
              onClick={() => handleProductClick(product.title)}
              className="bg-white rounded-[24px] p-5 flex flex-col justify-between items-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer group"
            >
              <div className="w-full flex justify-start">
                <span className="bg-[#2A4454] text-white text-[11px] font-bold px-3 py-1 rounded-md tracking-wide">
                  {product.tag}
                </span>
              </div>

              <div className="h-56 my-4 flex items-center justify-center overflow-hidden w-full bg-transparent p-2">
                <img 
                  src={product.img} 
                  alt={product.title} 
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300" 
                />
              </div>

              <div className="w-full text-center border-t border-gray-50 pt-3">
                <h4 className="text-[#2A4454] font-bold text-[15px] group-hover:text-[#7CA287] transition-colors line-clamp-2">
                  {product.title}
                </h4>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}