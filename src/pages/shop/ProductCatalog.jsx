import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import image1 from "../../assets/Product2.png"; 
import image2 from "../../assets/Product3.png"; 
import { toast } from 'react-toastify';

export default function ProductCatalog() {
  const navigate = useNavigate(); 
  const categories = ['Все', 'Масла', 'Мука', 'Каши'];
  const [activeCategory, setActiveCategory] = useState('Все');

  const products = [
    { id: 1, type: 'Масла', title: 'Масло тыквенное, 250мл', img: image1 },
    { id: 2, type: 'Мука', title: 'Масло кунжутное, 250мл', img: image1 },
    { id: 3, type: 'Каши', title: 'Масло грецкого ореха, 250 мл', img: image1 },
    { id: 4, type: 'Масла', title: 'Масло Конопляное, 250мл', img: image1 },
    { id: 5, type: 'Масла', title: 'Мука рисовая, 500г', isPacket: true, img: image2 },
    { id: 6, type: 'Мука', title: 'Мука рисовая, 500г', isPacket: true, img: image2 },
    { id: 7, type: 'Каши', title: 'Мука рисовая, 500г', isPacket: true, img: image2 },
    { id: 8, type: 'Масла', title: 'Мука рисовая, 500г', isPacket: true, img: image2 },
    { id: 9, type: 'Масла', title: 'Масло тыквенное, 250мл', img: image1 },
    { id: 10, type: 'Мука', title: 'Масло кунжутное, 250мл', img: image1 },
    { id: 11, type: 'Каши', title: 'Масло грецкого ореха, 250 мл', img: image1 },
    { id: 12, text: 'Масла', title: 'Масло Конопляное, 250мл', img: image1 },
  ];

  const filteredProducts = activeCategory === 'Все' 
    ? products 
    : products.filter(p => p.type === activeCategory);

  return (
    <section className="w-full bg-[#FCFCFC] py-12 font-roboto text-[#2A4454]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 space-y-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-gray-100 pb-6">
          <div className="space-y-1">
            <span className="text-start italic text-[#7BB074] text-xl block">Категории</span>
            <h2 className="text-[#000] text-start text-3xl font-extrabold tracking-tight">Наши продукты</h2>
          </div>
          
          <div className="flex flex-wrap gap-2 bg-[#F4F6F4] p-1.5 rounded-2xl self-start md:self-auto">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-200 ${
                  activeCategory === category ? 'bg-[#2A4454] text-white shadow-sm' : 'text-[#2A4454] hover:bg-white/60'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div 
              key={product.id}
              onClick={() => navigate(`/product/${product.id}`)} // Переход на страницу деталей
              className="bg-white rounded-[30px] p-6 shadow-sm border border-gray-100/40 flex flex-col justify-between items-start transition-all duration-300 hover:shadow-md hover:-translate-y-1 group relative overflow-hidden cursor-pointer"
            >
              <span className="bg-[#2A4454] text-white font-bold text-[10px] tracking-wider uppercase px-3 py-1.5 rounded-lg mb-4 z-10">
                {product.type}
              </span>

              <div className="w-full aspect-[4/5] bg-[#F9FBFA] rounded-2xl flex items-center justify-center p-4 mb-4 overflow-hidden">
                <img 
                  src={product.img} 
                  alt={product.title} 
                  className={`object-contain transition-transform duration-300 group-hover:scale-105 ${
                    product.isPacket ? 'h-44 w-auto' : 'h-48 w-auto'
                  }`}
                />
              </div>

              <div className="w-full space-y-2">
                <h3 className="font-bold text-[15px] text-[#2A4454] leading-snug group-hover:text-[#7BB074] transition-colors duration-150">
                  {product.title}
                </h3>
                
                <div className="flex items-center justify-between pt-2 w-full">
                  <span className="text-xs font-bold text-gray-400">В наличии</span>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation(); 
                      toast.success('Товар добавлен в корзину');
                    }}
                    className="w-8 h-8 bg-[#2A4454] hover:bg-[#7BB074] text-white rounded-full flex items-center justify-center text-sm transition-colors duration-200 shadow-sm active:scale-95"
                  >
                    +
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}