import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="bg-white text-gray-800">
      {/* Top bar */}
      <div className="bg-black text-white text-sm text-center py-2">
        Summer Sale For All Swim Suits And Free Express Delivery – OFF 50%!{' '}
        <a href="#" className="underline ml-1">ShopNow</a>
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
      <section className="flex flex-col-reverse md:flex-row items-center justify-between px-10 py-14 bg-blue-50">
        <div className="w-full md:w-1/2 space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold leading-snug">
            Phần Mềm Chuyên Nghiệp cho Doanh Nghiệp
          </h1>
          <p className="text-gray-600">
            Giải pháp tối ưu hóa quy trình, tăng trưởng kinh doanh
          </p>
          <div className="flex gap-4">
            <Image src="/images/icon-erp.png" alt="ERP" width={40} height={40} />
            <Image src="/images/icon-dev.png" alt="Dev" width={40} height={40} />
          </div>
          <button className="bg-blue-600 text-white px-6 py-2 rounded">Xem sản phẩm</button>
        </div>
        <div className="w-full md:w-1/2">
          <Image src="/images/dashboard.png" alt="Banner" width={600} height={400} />
        </div>
      </section>

      {/* Best Selling Products */}
      <section className="px-10 py-14">
        <h2 className="text-xl font-semibold mb-6">Best Selling Products</h2>
        <div className="bg-gray-100 rounded p-6 text-center">
          <Image src="/images/product-main.png" alt="Best Seller" width={400} height={200} className="mx-auto mb-4" />
          <p className="text-lg font-medium">Pexena 20WG - Tan Tám Hiệu Địa - Diệt Từ Khuẩn</p>
        </div>
      </section>

      {/* Explore Products */}
      <section className="px-10 py-14 bg-gray-50">
        <h2 className="text-xl font-semibold mb-6">Explore Our Products</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <Image src="/images/item1.png" alt="Item" width={150} height={100} className="mx-auto" />
            <p className="mt-2">Product Name 1</p>
          </div>
          <div className="text-center">
            <Image src="/images/item2.png" alt="Item" width={150} height={100} className="mx-auto" />
            <p className="mt-2">Product Name 2</p>
          </div>
          <div className="text-center">
            <Image src="/images/item3.png" alt="Item" width={150} height={100} className="mx-auto" />
            <p className="mt-2">Product Name 3</p>
          </div>
          <div className="text-center">
            <Image src="/images/item4.png" alt="Item" width={150} height={100} className="mx-auto" />
            <p className="mt-2">Product Name 4</p>
          </div>
        </div>
        <div className="text-center mt-6">
          <button className="bg-sky-500 text-white px-6 py-2 rounded">Explore More</button>
        </div>
      </section>

      {/* Blog or Service Section */}
      <section className="px-10 py-14">
        <h2 className="text-xl font-semibold mb-6">Shop and Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Image src="/images/shop-banner.png" alt="Shop" width={600} height={300} className="rounded" />
          <Image src="/images/service-banner.png" alt="Service" width={600} height={300} className="rounded" />
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
              <h4 className="font-semibold mb-2">Categories</h4>
              <ul className="text-sm space-y-1">
                <li>Office Software</li>
                <li>Graphic Tools</li>
                <li>Antivirus</li>
                <li>OS</li>
                <li>Dev Tools</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Shopping</h4>
              <ul className="text-sm space-y-1">
                <li>Payments</li>
                <li>Delivery</li>
                <li>Buyer Protection</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Customer Care</h4>
              <ul className="text-sm space-y-1">
                <li>Help Center</li>
                <li>Terms</li>
                <li>Privacy</li>
                <li>Returns</li>
              </ul>
            </div>
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
