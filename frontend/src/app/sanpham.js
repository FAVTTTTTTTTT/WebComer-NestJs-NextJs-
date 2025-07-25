'use client';

import Image from 'next/image';

export default function ProductDetail() {
  return (
    <div className="bg-white text-gray-800 min-h-screen">
      {/* Top bar */}
      <div className="bg-black text-white text-sm text-center py-2">
        SoftWeb Pro — Website bán laptop chuyên nghiệp –{' '}
        <a href="#" className="underline ml-1">ShopNow</a>
      </div>

      {/* Header */}
      <header className="flex items-center justify-between px-10 py-4 shadow">
        <div className="text-2xl font-bold">SoftWeb</div>
        <nav className="space-x-6">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">Contact</a>
          <a href="#" className="hover:underline">About</a>
          <a href="#" className="hover:underline">Sign Up</a>
        </nav>
        <input
          type="text"
          placeholder="What are you looking for?"
          className="hidden md:block border px-2 py-1 rounded text-sm"
        />
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-10">
        <div className="mb-6">
          <h2 className="text-xl font-semibold">Nguyễn Minh Tân</h2>
          <h1 className="text-2xl font-bold mt-2 mb-4">
            Mẫu Website Đặt Đồ Ăn Hiện Đại Và Tiện Lợi
          </h1>
          <p className="text-gray-700 leading-relaxed">
            Trang chủ của website được thiết kế sống động và bắt mắt, mang đến cảm giác thân thiện và tiện lợi từ cái nhìn đầu tiên. 
            Hình ảnh món ăn chất lượng cao, giao diện tối ưu cho cả máy tính và thiết bị di động, giúp khách hàng dễ dàng lựa chọn, đặt món và tối đa hoá trải nghiệm của họ.
          </p>
        </div>

        {/* Product Image */}
        <div className="my-8">
          <Image
            src="/images/food.png"
            alt="Website đặt đồ ăn"
            width={800}
            height={400}
            className="rounded shadow"
          />
        </div>

        {/* Only Contact Button */}
        <div className="mt-6">
          <button className="bg-blue-500 text-white px-6 py-2 rounded">Liên hệ</button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white px-10 py-10 mt-20">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <div>
            <h3 className="font-bold text-lg mb-2">⭐ SoftWeb Pro</h3>
            <p className="text-sm mb-2">A platform dedicated to licensed software and digital solutions.</p>
            <p className="text-sm">We offer high-quality software products that support businesses and individuals in growing efficiently.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
            <div>
              <h4 className="font-semibold mb-2">Categories</h4>
              <ul>
                <li>Office Software</li>
                <li>Graphic Tools</li>
                <li>Antivirus</li>
                <li>Dev Tools</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Shopping</h4>
              <ul>
                <li>Payments</li>
                <li>Delivery</li>
                <li>Buyer Protection</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Customer Care</h4>
              <ul>
                <li>Help Center</li>
                <li>Privacy</li>
                <li>Returns</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Pages</h4>
              <ul>
                <li>About Us</li>
                <li>Contact</li>
                <li>Shop</li>
              </ul>
            </div>
          </div>
        </div>
        <p className="text-center text-sm text-gray-400 mt-10">© 2025 SoftWeb Pro. All rights reserved.</p>
      </footer>
    </div>
  );
}
