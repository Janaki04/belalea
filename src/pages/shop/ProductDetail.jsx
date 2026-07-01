import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import image1 from "../../assets/Product2.png";
import image2 from "../../assets/Product3.png";
import banner from "../../assets/Banner Image.jpg";

const ALL_PRODUCTS = [
  { id: 1, type: 'Масла', title: 'Масло тыквенное, 250мл', img: image1, description: 'Натуральное масло холодного отжима, сохранившее все полезные свойства семян тыквы. Идеально для заправки салатов и готовых блюд.' },
  { id: 2, type: 'Мука', title: 'Масло кунжутное, 250мл', img: image1, description: 'Ароматное кунжутное масло придаст вашим блюдам изысканный восточный оттенок и обогатит рацион полезными жирными кислотами.' },
  { id: 3, type: 'Каши', title: 'Масло грецкого ореха, 250 мл', img: image1, description: 'Премиальное масло с нежным ореховым вкусом. Отличный источник витаминов и антиоксидантов для вашего здоровья.' },
  { id: 4, type: 'Масла', title: 'Масло Конопляное, 250мл', img: image1, description: 'Традиционное конопляное масло с уникальным балансом Омега-3 и Омега-6 кислот для поддержания иммунитета.' },
  { id: 5, type: 'Масла', title: 'Мука рисовая, 500г', img: image2, description: 'Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley.' },
  { id: 6, type: 'Мука', title: 'Мука рисовая, 500г', img: image2, description: 'Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley.' },
  { id: 7, type: 'Каши', title: 'Мука рисовая, 500г', img: image2, description: 'Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley.' },
  { id: 8, type: 'Масла', title: 'Мука рисовая, 500г', img: image2, description: 'Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley.' },
  { id: 9, type: 'Масла', title: 'Масло тыквенное, 250мл', img: image1, description: 'Натуральное масло холодного отжима из отборных тыквенных семечек.' },
  { id: 10, type: 'Мука', title: 'Масло кунжутное, 250мл', img: image1, description: 'Кунжутное масло первого холодного отжима высокой степени очистки.' },
  { id: 11, type: 'Каши', title: 'Масло грецкого ореха, 250 мл', img: image1, description: 'Изысканное масло грецкого ореха для кулинарных шедевров.' },
  { id: 12, type: 'Масла', title: 'Масло Конопляное, 250мл', img: image1, description: 'Полезное конопляное масло холодного прессования.' },
];

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const product = ALL_PRODUCTS.find(p => p.id === parseInt(id)) || ALL_PRODUCTS[4];
  
  const [activeImage, setActiveImage] = useState(product.img);

  useEffect(() => {
    setActiveImage(product.img);
    window.scrollTo(0, 0);
  }, [id, product]);

  const relatedProducts = ALL_PRODUCTS.filter(p => p.id !== product.id).slice(0, 4);

  return (
    <div className="w-full bg-white font-roboto text-[#2A4454]">

      <div 
        className="w-full h-64 bg-cover bg-center flex items-center justify-center relative"
        style={{ 
          backgroundImage: `url('${banner}')` 
        }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#2A4454]">
          {product.type}
        </h1>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        
        <div className="md:col-span-5 space-y-4">
          <div className="bg-[#F9FBFA] rounded-[30px] p-8 flex items-center justify-center aspect-square border border-gray-50 relative">
            <span className="absolute top-6 left-6 bg-[#2A4454] text-white font-bold text-[10px] tracking-wider uppercase px-3 py-1.5 rounded-lg">
              {product.type}
            </span>
            <img src={activeImage} alt={product.title} className="h-72 w-auto object-contain" />
          </div>
          
          <div className="grid grid-cols-4 gap-3">
            {[1, 2, 3, 4].map((thumbIndex) => (
              <div 
                key={thumbIndex}
                onClick={() => setActiveImage(product.img)}
                className={`bg-[#F9FBFA] rounded-2xl p-2 flex items-center justify-center aspect-square border cursor-pointer transition-all ${
                  activeImage === product.img ? 'border-[#7BB074] shadow-sm' : 'border-transparent hover:border-gray-200'
                }`}
              >
                <img src={product.img} alt="thumbnail" className="h-12 w-auto object-contain opacity-80" />
              </div>
            ))}
          </div>
        </div>

        <div className="md:col-span-7 space-y-6 pt-4">
          <h2 className="text-start text-3xl font-extrabold text-[#2A4454]">{product.title}</h2>
          
          <div className="space-y-4 text-gray-500 text-sm leading-relaxed max-w-xl">
            <p className='text-start'>{product.description}</p>
            <p className='text-start'>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <a 
              href="https://wildberries.ru" 
              target="_blank" 
              rel="noreferrer" 
              className="bg-[#C02484] hover:bg-[#A01E6E] text-white font-bold text-sm px-8 py-3.5 rounded-xl transition-all shadow-sm tracking-wide text-center min-w-[150px]"
            >
              Wildberries
            </a>
            <a 
              href="https://ozon.ru" 
              target="_blank" 
              rel="noreferrer" 
              className="bg-[#1C27FF] hover:bg-[#151DCE] text-white font-bold text-sm px-8 py-3.5 rounded-xl transition-all shadow-sm tracking-wide text-center min-w-[150px]"
            >
              OZON
            </a>
          </div>
        </div>

      </div>

      <div className="bg-[#FCFCFC] border-t border-gray-100/60 py-16 mt-8">
        <div className="max-w-6xl mx-auto px-4 space-y-10">
          <h3 className="text-2xl font-extrabold text-center tracking-tight text-[#2A4454]">
            Похожие продукты
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map((item) => (
              <div 
                key={item.id}
                onClick={() => navigate(`/product/${item.id}`)}
                className="bg-white rounded-[24px] p-5 shadow-sm border border-gray-100/40 flex flex-col justify-between items-start cursor-pointer transition-all duration-200 hover:shadow-md hover:-translate-y-1 group"
              >
                <span className="bg-[#2A4454] text-white font-bold text-[9px] tracking-wider uppercase px-2.5 py-1 rounded-md mb-3">
                  {item.type}
                </span>
                <div className="w-full aspect-[4/5] bg-[#F9FBFA] rounded-xl flex items-center justify-center p-3 mb-3">
                  <img src={item.img} alt={item.title} className="h-36 w-auto object-contain transition-transform group-hover:scale-105" />
                </div>
                <h4 className="font-bold text-[14px] text-[#2A4454] leading-snug group-hover:text-[#7BB074] transition-colors line-clamp-2">
                  {item.title}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}