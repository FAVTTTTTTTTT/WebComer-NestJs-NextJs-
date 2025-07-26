'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function HomePage() 
{ 
  const images = ['/dietmoi.jpg', '/quanan.jpg','/quanly.jpg'];
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % images.length);
    }, 2000); // đổi sau 2 giây

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="bg-white text-gray-800">
     {/* Top bar */}
      <div className="bg-black text-white text-sm text-center py-2">
        SoftWeb Pro — Dịch vụ làm web chuyên nghiệp –{' '}
        
      </div>
        {/* Header */}
      <header className="flex items-center justify-between px-10 py-4 shadow">
        <div className="text-2xl font-bold">SoftWeb</div>
        <nav className="space-x-6">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">Products</a>
          <a href="#" className="hover:underline">About</a>
          <a href="#" className="hover:underline">Contact</a>
        </nav>
        <div className="text-sm">English ▼</div>
      </header>
      {/* Hero Section */}
      <section className="Hero Section flex items-center justify-center min-h-screen px-4 bg-white">
  <div className="text-center space-y-6 max-w-4xl w-full">
    <h1 className="text-3xl md:text-4xl font-bold leading-snug">
      Phần Mềm Chuyên Nghiệp cho Doanh Nghiệp
    </h1>
    <p className="text-gray-600">
      Giải pháp tối ưu hóa quy trình, tăng trưởng kinh doanh
    </p>

    <div className="w-full max-w-4xl mx-auto">
      <img
        src={images[current]}
        alt="Chuyển ảnh"
        className="w-full h-auto object-cover rounded shadow-md transition-all duration-500"
      />
    </div>

    <button className="bg-blue-600 text-white px-6 py-2 rounded">
      Xem sản phẩm
    </button>
  </div>
</section>



      {/* Best Products */}
      <section className="px-10 py-14">
        <h2 className="text-xl font-semibold mb-6">Dự án nổi bật</h2>
        <div className="bg-gray-100 rounded p-6 text-center">
          <img src="/quanly.jpg" alt="Best Seller" width={500} height={450} className="mx-auto mb-4" /> 
          <p className="text-lg font-medium">Trang quản lý nhân sự HappyTime</p>
        </div>
      </section>

      {/* Explore Products */}
      <section className="px-10 py-14 bg-gray-50">
        <h2 className="text-xl font-semibold mb-6">Explore Our Products</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          <div className="text-center">
            <img src="/dietmoi.jpg" alt="Item" width={500} height={450} className="mx-auto" /> 
            <p className="mt-2">Trang diệt mối</p>
          </div>
          <div className="text-center">
            <img src="/quanan.jpg" alt="Item" width={500} height={450} className="mx-auto" />
            <p className="mt-2">Trang quản lý ăn uống</p>
          </div>
          <div className="text-center">
            <img src="/quanly.jpg" alt="Item" width={500} height={450} className="mx-auto" />
            <p className="mt-2">Trang quản lý nhân sự HappyTime</p>
          </div>
          
        </div>
    
      </section>

      {/* Blog or Service Section */}
      <section className="px-10 py-14">
        <h2 className="text-xl font-semibold mb-6">Shop and Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* <Image src="/images/shop-banner.png" alt="Shop" width={600} height={300} className="rounded" />
          <Image src="/images/service-banner.png" alt="Service" width={600} height={300} className="rounded" /> */}
        </div>
        <div className="text-center mt-6">
          <button className="bg-sky-500 text-white px-6 py-2 rounded">See More</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white px-10 py-10">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <div>
            <h3 className="font-bold text-lg mb-2">⭐ SoftWeb Pro</h3>
            <p className="text-sm mb-2">A platform dedicated to licensed software and digital solutions.</p>
            <p className="text-sm">We offer products that support businesses and individuals to grow efficiently.</p>
            <div className="flex gap-4 mt-4 text-xl">
              <a href="#"><i className="fab fa-facebook" /></a>
              <a href="#"><i className="fab fa-twitter" /></a>
              <a href="#"><i className="fab fa-instagram" /></a>
              <a href="#"><i className="fab fa-linkedin" /></a>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <h4 className="font-semibold mb-2">Pages</h4>
              <ul className="text-sm space-y-1">
                <li>About Us</li>
                <li>Shop</li>
                <li>Contact</li>
                <li>Services</li>
                <li>Blog</li>
              </ul>
            </div>
          </div>
        </div>

        <p className="text-center text-sm text-gray-400 mt-10">© 2025 SoftWeb Pro. All rights reserved.</p>
      </footer>
    </div>
  );
}
