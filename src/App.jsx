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
import ProductDetail from './pages/shop/ProductDetail';
import BlogPostDetail from './pages/blog/BlogPostDetail';
import NotFound from "./components/NotFound"
 


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
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contacts" element={<Contact />} />
        <Route path="/blog/:id" element={<BlogPostDetail />} />
        <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
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
