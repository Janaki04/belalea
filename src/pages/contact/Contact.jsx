import React,{useState} from 'react'
import Banner from '../../components/Banner'
import contact from "../../assets/contact.jpg"
import image1 from "../../assets/contact1.jpg"
import image2 from "../../assets/contact2.png"

import image5 from "../../assets/1.png";
import image6 from "../../assets/2.png";
import image3 from "../../assets/3.png";
import image4 from "../../assets/4.png";
import { toast } from 'react-toastify'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });

    const icons = {
      'Facebook': image5,
      'Twitter': image6,
      'Instagram': image3,
      'LinkedIn': image4
    };

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast.error('Пожалуйста, заполните все обязательные поля, отмеченные звездочкой (*)');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      toast.success(`Спасибо, ${formData.name}! Ваше сообщение по теме "${formData.subject}" успешно отправлено.`);
      setFormData({ name: '', email: '', company: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <>
       <Banner   title="Контакты" 
        backgroundImage={contact}/>
         <div className="w-full bg-white font-sans text-[#2E4756] antialiased">
      <div className="max-w-6xl mx-auto px-4 py-16 font-roboto space-y-20">
     
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-16 items-center">
          
          <div className="md:col-span-5 w-full aspect-square rounded-[32px] overflow-hidden bg-[#0A91EC] relative shadow-inner">
            <img 
              src={image1} 
              alt="Flying fruits background" 
              className="w-full h-full object-cover mix-blend-normal"
            />
          </div>

          <div className="md:col-span-7 space-y-6">
            <h1 className="text-start text-3xl sm:text-4xl font-extrabold text-[#2E4756] leading-tight max-w-xl">
              Мы с удовольствием поговорим о том, как мы можем работать вместе.
            </h1>
            
            <p className="text-start text-xs sm:text-sm text-gray-400 leading-relaxed max-w-xl">
              Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg pt-2">
              <div className="flex items-center gap-4 bg-white border border-gray-100 p-4 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-[#F4F6F4] rounded-xl flex items-center justify-center text-[#7BB074] shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-start font-extrabold text-sm text-[#2E4756]">Сообщение</h4>
                  <a href="mailto:support@belalea.by" className="text-xs text-gray-400 hover:text-[#7BB074] transition-colors">support@belalea.by</a>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white border border-gray-100 p-4 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-[#F4F6F4] rounded-xl flex items-center justify-center text-[#7BB074] shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.75z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-start font-extrabold text-sm text-[#2E4756]">Звонок</h4>
                  <a href="tel:+375297897895" className="text-xs text-gray-400 hover:text-[#7BB074] transition-colors">+375 (29) 789 789 5</a>
                </div>
              </div>
            </div>

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
        </div>
        <div 
          className="w-full min-h-[380px] rounded-[40px] bg-cover bg-center flex items-center justify-end p-6 sm:p-12 relative overflow-hidden"
          style={{ 
            backgroundImage: `url('${image2}')` 
          }}
        >
          <div className="bg-white/95 backdrop-blur-sm rounded-[32px] p-8 max-w-md w-full shadow-xl border border-white/40 space-y-4">
            <div className="space-y-1">
              <span className="text-start italic font-serif text-[#7BB074] text-xl block">Где мы?</span>
              <h2 className="text-start text-2xl font-extrabold text-[#2E4756]">Наш адрес</h2>
            </div>
            
            <p className="text-start text-xs text-gray-400 leading-relaxed">
              Мы находимся в самом экологически чистом районе Беларуси.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3">
                <div className="text-[#7BB074] pt-0.5 shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25s-7.5-4.108-7.5-11.25a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div className="text-xs">
                  <h5 className="text-start font-extrabold text-[#2E4756]">Офис:</h5>
                  <p className="text-start text-gray-400 font-medium">г.Клецк, ул. Аветисова</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="text-[#7BB074] pt-0.5 shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25s-7.5-4.108-7.5-11.25a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div className="text-xs">
                  <h5 className="text-start font-extrabold text-[#2E4756]">Производство:</h5>
                  <p className="text-start text-gray-400 font-medium">г.Клецк, ул. Нагдаляна</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="w-full max-w-4xl mx-auto space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="flex block text-xs font-extrabold text-[#2E4756]">Как вас зовут?*</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Ирина, Денис, Елена"
                className="w-full bg-white border border-gray-200 focus:border-[#7BB074] focus:ring-1 focus:ring-[#7BB074] rounded-2xl px-5 py-4 text-sm text-[#2E4756] placeholder-gray-300 outline-none transition-all"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="flex block text-xs font-extrabold text-[#2E4756]">Ваша почта*</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="example@yourmail.com"
                className="w-full bg-white border border-gray-200 focus:border-[#7BB074] focus:ring-1 focus:ring-[#7BB074] rounded-2xl px-5 py-4 text-sm text-[#2E4756] placeholder-gray-300 outline-none transition-all"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="flex block text-xs font-extrabold text-[#2E4756]">Компания</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                placeholder="Название вашей компании"
                className="w-full bg-white border border-gray-200 focus:border-[#7BB074] focus:ring-1 focus:ring-[#7BB074] rounded-2xl px-5 py-4 text-sm text-[#2E4756] placeholder-gray-300 outline-none transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="flex block text-xs font-extrabold text-[#2E4756]">Тема обращения*</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="Напишите ваше предложение или вопрос"
                className="w-full bg-white border border-gray-200 focus:border-[#7BB074] focus:ring-1 focus:ring-[#7BB074] rounded-2xl px-5 py-4 text-sm text-[#2E4756] placeholder-gray-300 outline-none transition-all"
                required
              />
            </div>

          </div>
          <div className="space-y-2">
            <label className="flex block text-xs font-extrabold text-[#2E4756]">Сообщение*</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows="6"
              placeholder="Не забудьте поздороваться :)"
              className="w-full bg-white border border-gray-200 focus:border-[#7BB074] focus:ring-1 focus:ring-[#7BB074] rounded-2xl px-5 py-4 text-sm text-[#2E4756] placeholder-gray-300 outline-none transition-all resize-none"
              required
            ></textarea>
          </div>
          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-[#2A4454] hover:bg-[#1E323F] active:scale-[0.98] disabled:opacity-50 text-white font-bold text-sm px-8 py-4 rounded-xl transition-all shadow-sm"
            >
              {isSubmitting ? 'Отправка...' : 'Отправить'}
            </button>
          </div>

        </form>

      </div>
    </div>
    </>
   
  );
}