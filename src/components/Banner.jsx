import React from 'react';

export default function Banner({ 
  title = 'О нас', 
  backgroundImage = 'https://images.unsplash.com/photo-1595855759920-86582396756a?auto=format&fit=crop&q=80&w=1200' 
}) {
  return (
    <div 
      className="w-full min-h-[260px] sm:min-h-[260px] bg-cover bg-center font-roboto flex items-center justify-center px-4"
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2A4454] text-center tracking-wide select-none">
        {title}
      </h1>
    </div>
  );
}