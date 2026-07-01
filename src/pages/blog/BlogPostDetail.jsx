import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function BlogPostDetail() {
  const location = useLocation();
  const navigate = useNavigate();

  const receivedPost = location.state?.currentPost;

  const defaultPost = {
    fullDate: 'Январь 6, 2024',
    title: 'Research More Organic Food',
    excerpt: 'Established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed',
    image: 'https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?auto=format&fit=crop&q=80&w=1200'
  };

  const post = receivedPost || defaultPost;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [post]);

  return (
    <div className="w-full bg-white font-roboto text-[#2A4454] antialiased pb-24">
      
      <div className="max-w-5xl mx-auto px-6 pt-6">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-[#7BB074] transition-colors"
        >
          ← Вернуться к списку новостей
        </button>
      </div>

      <div className="max-w-5xl mx-auto px-4 pt-4">
        <div 
          className="w-full h-[480px] rounded-[32px] bg-contain bg-center shadow-inner relative"
          style={{ backgroundImage: `url('${post.image}')` }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative">
        
        <div className="bg-white rounded-[24px] p-8 sm:p-10 shadow-xl shadow-gray-100/60 border border-gray-100/40 -mt-24 relative z-10 max-w-3xl space-y-4布">
          <div className="text-xs font-medium text-gray-400">
            <span className="text-start font-bold text-[#2A4454] mr-1">Дата публикации:</span> {post.fullDate || 'Январь 6, 2024'}
          </div>
          <h1 className="text-start text-2xl sm:text-4xl font-extrabold tracking-tight text-[#2A4454] leading-tight">
            {post.title}
          </h1>
          <p className="text-start text-xs sm:text-sm text-gray-400 font-medium leading-relaxed">
            {post.excerpt}
          </p>
        </div>

        <div className="mt-16 max-w-2xl mx-auto space-y-8 text-xs sm:text-sm text-gray-500 font-medium leading-relaxed">
          
          <p className='text-start'>
            Uniquely matrix economically sound value through cooperative technology. Competently parallel task fully researched data and enterprise process improvements. Collaboratively expedite quality manufactured products via client-focused results quickly communicate enabled technology and turnkey leadership skills. Uniquely enable accurate supply chains rather than friction technology.
          </p>

          <div className="space-y-4">
            <h2 className="text-start text-xl font-extrabold text-[#2A4454]">Preferred Form of Vitamin D?</h2>
            <p className="text-start">
              It is a long established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
            </p>
            
            <ul className="space-y-3 pl-2 pt-2 text-gray-400">
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7BB074] shrink-0" />
                <span className="text-start">Publishing packages and web pageLorem Ipsum as their default</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7BB074] shrink-0" />
                <span className="text-start">Content here, content here', making it look like readable</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7BB074] shrink-0" />
                <span className='text-start'>Packages and web pageLorem Ipsum as their default</span>
              </li>
            </ul>
          </div>

          <div className="bg-[#F4F6F4]/50 border-l-2 border-[#7BB074] rounded-2xl p-6 sm:p-8 text-center my-6">
            <p className=" text-start font-extrabold text-[#2A4454] italic leading-relaxed max-w-lg mx-auto">
              “The first rule of any organic used in a business is that nature applied to an efficient operation will magnify the efficiency. The second is that organic applied to an inefficient operation will magnify the health.”
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-starttext-xl font-extrabold text-[#2A4454]">Make perfect organic product with us</h2>
            <p>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking a layout.
            </p>

            <ol className="space-y-3 pl-1 pt-2 text-gray-400">
              <li className="flex gap-2">
                <span className="font-bold text-[#2A4454]">1.</span>
                <span className="text-start">Publishing packages and web pageLorem Ipsum as their default</span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold text-[#2A4454]">2.</span>
                <span className="text-start">Content here, content here', making it look like readable</span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold text-[#2A4454]">3.</span>
                <span className="text-start">Packages and web pageLorem Ipsum as their default</span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold text-[#2A4454]">4.</span>
                <span className="text-start">more-or-less normal distribution of letters</span>
              </li>
            </ol>
          </div>

        </div>

      </div>
    </div>
  );
}