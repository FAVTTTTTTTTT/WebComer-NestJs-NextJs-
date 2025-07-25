import Image from "next/image";

export default function MyAccount() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Top Bar */}
      <div className="bg-black text-white text-sm text-center py-2">
        SoftWeb Pro — Website bán laptop chuyên nghiệp –
        <a href="#" className="underline ml-1">ShopNow</a>
      </div>

      {/* Header */}
      <header className="flex items-center justify-between px-10 py-4 shadow">
        <div className="text-2xl font-bold">SoftWeb 4</div>
        <nav className="space-x-6">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">Contact</a>
          <a href="#" className="hover:underline">About</a>
          <a href="#" className="hover:underline">Sign Up</a>
        </nav>
        <div className="text-sm">English ▼</div>
      </header>

      {/* Main Form */}
      <main className="px-10 py-10 max-w-6xl mx-auto">
        <h2 className="text-xl font-semibold mb-8">Hồ sơ của tôi</h2>

        <div className="flex flex-col md:flex-row gap-10">
          {/* Form Left */}
          <div className="flex-1 space-y-6">
            <div>
              <label className="block font-semibold mb-1">Họ và tên</label>
              <input type="text" value="Nguyễn Minh Tân" className="w-full border px-4 py-2 rounded bg-gray-100" readOnly />
            </div>
            <div>
              <label className="block font-semibold mb-1">Email</label>
              <div className="flex items-center space-x-4">
                <span>tan********@gmail.com</span>
                <a href="#" className="text-blue-600 text-sm">Thay đổi</a>
              </div>
            </div>
            <div>
              <label className="block font-semibold mb-1">Số điện thoại</label>
              <a href="#" className="text-blue-600 text-sm">Thêm</a>
            </div>
            <div>
              <label className="block font-semibold mb-1">Giới tính</label>
              <div className="space-x-4">
                <label><input type="radio" name="gender" defaultChecked /> Nam</label>
                <label><input type="radio" name="gender" /> Nữ</label>
                <label><input type="radio" name="gender" /> Khác</label>
              </div>
            </div>
            <div>
              <label className="block font-semibold mb-1">Ngày sinh</label>
              <div className="flex gap-4">
                <select className="border px-2 py-1 rounded">
                  <option>Ngày</option>
                </select>
                <select className="border px-2 py-1 rounded">
                  <option>Tháng</option>
                </select>
                <select className="border px-2 py-1 rounded">
                  <option>Năm</option>
                </select>
              </div>
            </div>
            <button className="bg-sky-500 text-white px-6 py-2 rounded mt-4">Lưu</button>
          </div>

          {/* Avatar */}
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 border rounded-full flex items-center justify-center overflow-hidden">
              <Image src="/images/avatar-placeholder.png" alt="Avatar" width={100} height={100} />
            </div>
            <button className="mt-4 px-4 py-2 bg-sky-500 text-white rounded">Chọn ảnh</button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white px-10 py-10">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <div>
            <h3 className="font-bold text-lg mb-2">⭐ SoftWeb Pro</h3>
            <p className="text-sm mb-2">A platform dedicated to providing licensed software and digital solutions.</p>
            <p className="text-sm">We offer products that support businesses and individuals in growing efficiently.</p>
            <div className="flex gap-4 mt-4 text-xl">
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <h4 className="font-semibold mb-2">Categories</h4>
              <ul className="text-sm space-y-1">
                <li>Office Software</li>
                <li>Graphic Design Tools</li>
                <li>Antivirus & Security</li>
                <li>Operating Systems</li>
                <li>Developer Tools</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Shopping</h4>
              <ul className="text-sm space-y-1">
                <li>Payments</li>
                <li>Delivery options</li>
                <li>Buyer protection</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Customer care</h4>
              <ul className="text-sm space-y-1">
                <li>Help Center</li>
                <li>Terms & Conditions</li>
                <li>Privacy policy</li>
                <li>Returns & refund</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Pages</h4>
              <ul className="text-sm space-y-1">
                <li>About Us</li>
                <li>Shop</li>
                <li>Contact Us</li>
                <li>Services</li>
                <li>Software Blog</li>
              </ul>
            </div>
          </div>
        </div>
        <p className="text-center text-sm text-gray-400 mt-10">© 2025 SoftWeb Pro. All rights reserved.</p>
      </footer>
    </div>
  );
}
