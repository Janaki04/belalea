import { useState } from 'react'
import './App.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header'
import Footer from './components/Footer'
import HeroSection from './pages/home/Hero'
import About from './pages/about/About';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Contact from './pages/contact/Contact';
import Shop from './pages/shop/Shop';
import Blog from './pages/blog/Blog';
 

const Home = () => <div className="p-8 max-w-7xl mx-auto text-xl">Главная страница интернет-магазина</div>;
const Catalog = () => <div className="p-8 max-w-7xl mx-auto text-xl">Каталог продукции (Масла, Мука, Семена)</div>;
const Dealers = () => <div className="p-8 max-w-7xl mx-auto text-xl">Информация для корпоративных дилеров</div>;
const News = () => <div className="p-8 max-w-7xl mx-auto text-xl">Блог и новости органических продуктов</div>;
const Contacts = () => <div className="p-8 max-w-7xl mx-auto text-xl">Контактная информация и карта проезда</div>;
const SearchResults = () => <div className="p-8 max-w-7xl mx-auto text-xl">Результаты поиска по сайту</div>;
const NotFound = () => <div className="p-8 max-w-7xl mx-auto text-xl text-red-500 font-bold">404 — Страница не найдена</div>;

export default function AppRoutes() {
  return (
    <>
    <Router>
      {/* Шапка сайта зафиксирована на всех страницах верхнего уровня */}
      <Header />
      
      {/* Основная контентная зона с анимацией переходов и логикой роутера */}
      <main className="min-h-screen bg-white">
        <Routes>
          {/* Главный экран */}
          <Route path="/" element={<HeroSection />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contacts" element={<Contact />} />
        </Routes>
      </main>
      <Footer/>
    </Router>
   <ToastContainer 
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      /></>
  );
}
