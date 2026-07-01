import React from 'react';
import image from "../../assets/image 15.png";
import image1 from "../../assets/Image (1).png";
import image2 from "../../assets/Image (2).png";
import ProductSection from './ProductSection';
import TestimonialsSection from './TestimonialsSection';
import BestOffersSection from './BestOffersSection';
import AdditionalSections from './AdditionalSections';

export default function HeroSection() {
  return (
    <>
    <div className="w-full bg-white font-roboto text-[#2A4454] ">
      <div className="space-y-8">
        

        <div 
          className="relative w-full overflow-hidden bg-[#F9F6F0] min-h-[580px] flex items-center sm:p-12 lg:p-20 bg-cover bg-right sm:bg-center"
          style={{
           
            backgroundImage: `url('${image}')`
          }}
        >
          <div className="max-w-xl space-y-6 z-10">
            <span className="text-start italic text-[#7BB074] font-serif text-xl sm:text-2xl block">
              100% натурально
            </span>
            <h1 className="text-start text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2A4454] leading-tight">
             Масла и мука <br/> из фермерского<br/>сырья
            </h1>
            <a 
              href="#catalog" 
              className="flex w-fit items-center gap-2 bg-[#EFD372] hover:bg-[#DCB965] text-[#2A4454] font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-full shadow-sm transition-all"
            >
              В КАТАЛОГ
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-20">
          
          <div 
            className="relative rounded-[24px] overflow-hidden bg-[#ED638B] min-h-[220px] p-8 flex items-center bg-cover bg-right text-white"
            style={{
              backgroundImage: `url('${image1}')`
            }}
          >
            <div className="max-w-[240px] space-y-2">
              <span className="italic font-serif text-lg block opacity-90">New!</span>
              <h3 className="text-xl sm:text-2xl font-bold leading-snug">
                Fresh Styrian oil
              </h3>
            </div>
          </div>

          <div 
            className="relative rounded-[24px] overflow-hidden bg-[#E8EFF2] min-h-[220px] p-8 flex items-center bg-cover bg-right text-[#2A4454]"
            style={{
              backgroundImage: `url('${image2}')`
            }}
          >
            <div className="max-w-[240px] space-y-2">
              <span className="italic font-serif text-lg text-[#7BB074] block">Discount!</span>
              <h3 className="text-xl sm:text-2xl font-bold leading-snug">
                20% discount for subscribing
              </h3>
            </div>
          </div>

        </div>

      </div>
    </div>
    <ProductSection/>
    <TestimonialsSection/>
    <BestOffersSection/>
    <AdditionalSections/>
    </>
  );
}