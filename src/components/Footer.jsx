import React, { useState } from 'react';
import { toast } from 'react-toastify'; 
import image from "../assets/Image.png";
import logo from "../assets/Logo.svg";
import image1 from "../assets/1.png";
import image2 from "../assets/2.png";
import image3 from "../assets/3.png";
import image4 from "../assets/4.png";

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      toast.success(`${email} subscribed successfully!`);
      setEmail('');
    }
  };

  const icons = {
    'Facebook': image1,
    'Twitter': image2,
    'Instagram': image3,
    'LinkedIn': image4
  };

  return (
    <div className="w-full bg-white font-roboto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-7xl mx-auto">
        
        <div 
          className="relative rounded-[32px] overflow-hidden bg-[#EE8843] min-h-[280px] p-8 md:p-12 mb-16 flex flex-col lg:flex-row items-center justify-between gap-6 bg-cover bg-center"
          style={{
            backgroundImage: `url('${image}')`
          }}
        >
          <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-center lg:text-left max-w-md leading-snug">
            Узнайте первыми о новых акциях!
          </h2>

          <form onSubmit={handleSubscribe} className="w-full max-w-xl flex flex-col sm:flex-row items-center gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Введите ваш e-mail адрес"
              required
              className="w-full sm:flex-1 bg-white rounded-xl px-5 py-4 text-[#2E4756] placeholder-gray-400 focus:outline-none text-[15px]"
            />
            <button
              type="submit"
              className="w-full sm:w-auto bg-[#83B67C] hover:bg-[#72A36B] text-white font-medium rounded-xl px-8 py-4 transition-colors whitespace-nowrap text-[15px]"
            >
              Подписаться
            </button>
          </form>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-4 text-center md:text-left items-start">
          
          <div className="md:border-r border-gray-100 md:pr-8 space-y-5 md:text-right">
            <h3 className="text-[#2A4454] font-bold text-xl mb-4">Contact Us</h3>
            <div className="space-y-1">
              <span className="block text-[#2A4454] font-bold text-sm">Email</span>
              <a href="mailto:needhelp@Organia.com" className="text-gray-500 hover:text-[#83B67C] text-[15px] transition-colors">
                needhelp@Organia.com
              </a>
            </div>
            <div className="space-y-1">
              <span className="block text-[#2A4454] font-bold text-sm">Phone</span>
              <a href="tel:666888888" className="text-gray-500 hover:text-[#83B67C] text-[15px] transition-colors">
                666 888 888
              </a>
            </div>
            <div className="space-y-1">
              <span className="block text-[#2A4454] font-bold text-sm">Address</span>
              <p className="text-gray-500 text-[15px] leading-relaxed">
                88 road, borklyn street, USA
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center px-4 space-y-5">
            <div className="flex items-center gap-2">
                <img src={logo} alt="Logo" className="h-10 w-auto" />
            </div>
            <p className="text-gray-500 text-sm max-w-[280px] text-center leading-relaxed">
              Следите за новостями и акциями в наших сетях, подпишитесь!
            </p>
            <div className="flex items-center gap-3">
                {Object.entries(icons).map(([platform, iconSrc]) => (
                    <a
                        key={platform}
                        href={`#${platform.toLowerCase()}`}
                        className="w-10 h-10 bg-[#F4F6F4] hover:bg-[#83B67C] transition-all rounded-full flex items-center justify-center overflow-hidden p-2"
                        aria-label={platform}
                    >
                        <img
                            src={iconSrc}
                            alt={`${platform} icon`}
                            className="w-full h-full object-contain"
                        />
                    </a>
                ))}
            </div>
          </div>

          <div className="md:border-l border-gray-100 md:pl-8 space-y-3">
            <h3 className="text-[#2A4454] font-bold text-xl mb-4">Utility Pages</h3>
            <ul className="space-y-3 text-gray-500 text-[15px]">
              {['Style Guide', '404 Not Found', 'Password Protected', 'Licences', 'Changelog'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(/ /g, '-')}`} className="hover:text-[#83B67C] transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
}