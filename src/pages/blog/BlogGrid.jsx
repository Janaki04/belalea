import React from 'react';
import { useNavigate } from 'react-router-dom';
import blog1 from "../../assets/blog1.png";
import blog2 from "../../assets/blog2.png";
import blog3 from "../../assets/blog3.png";
import image2 from "../../assets/A3.png"
import image3 from "../../assets/A4.png"

export default function BlogGrid() {
  const navigate = useNavigate();

  const blogPosts = [
    {
      id: 1,
      date: '25 Nov',
      fullDate: 'Ноябрь 25, 2025',
      title: 'The Benefits of Vitamin D & How to Get It',
      excerpt: "Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
      image:image2,
      linkText: 'Читать дальше'
    },
    {
      id: 2,
      date: '25 Nov',
      fullDate: 'Ноябрь 25, 2025',
      title: 'The Benefits of Vitamin D & How to Get It',
      excerpt: "Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
      image: image3,
      linkText: 'Читать дальше'
    },
    {
      id: 3,
      date: '25 Nov',
      fullDate: 'Ноябрь 25, 2025',
      title: 'Benefits of Vitamin C & How to Get It',
      excerpt: "Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
      image: blog1,
      linkText: 'Read More'
    },
    {
      id: 4,
      date: '25 Nov',
      fullDate: 'Январь 6, 2024', 
      title: 'Research More Organic Food',
      excerpt: "Established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum.",
      image: blog2, 
      linkText: 'Read More'
    },
    {
      id: 5,
      date: '25 Nov',
      fullDate: 'Ноябрь 25, 2025',
      title: 'Everyday Fresh Fruites',
      excerpt: "Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
      image: blog3,
      linkText: 'Read More'
    },
    {
      id: 6,
      date: '25 Nov',
      fullDate: 'Ноябрь 25, 2025',
      title: "Don't Use Plastic Product! It's Kill Nature",
      excerpt: "Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
      image: 'https://images.unsplash.com/photo-1618477388954-7852f32655ec?auto=format&fit=crop&q=80&w=600',
      linkText: 'Read More'
    }
  ];

  const handleCardClick = (post) => {
    navigate(`/blog/${post.id}`, { state: { currentPost: post } });
  };

  return (
    <section className="w-full bg-[#FCFCFC] py-16 font-roboto text-[#2A4454]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {blogPosts.map((post) => (
            <div 
              key={post.id}
              onClick={() => handleCardClick(post)}
              className="group relative w-full aspect-[4/3] rounded-[32px] overflow-hidden shadow-sm cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              
              <div className="absolute top-6 left-6 w-14 h-14 bg-white rounded-full flex flex-col items-center justify-center p-1 text-center shadow-md">
                <span className="text-xs font-black leading-none text-[#2A4454]">{post.date.split(' ')[0]}</span>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{post.date.split(' ')[1]}</span>
              </div>

              <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6">
                <div className="bg-white rounded-[24px] p-6 shadow-lg space-y-2">
                  <h3 className="text-start text-base sm:text-lg font-extrabold text-[#2A4454] line-clamp-1 group-hover:text-[#7BB074] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-start text-xs text-gray-400 font-medium line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center gap-1.5 pt-1 text-xs font-bold text-[#2A4454] group-hover:text-[#7BB074]">
                    <span>{post.linkText}</span>
                    <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}