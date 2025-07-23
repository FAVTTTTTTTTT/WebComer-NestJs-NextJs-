import Image from 'next/image';

export default function Login() {
  return (
    <div className="bg-white min-h-screen text-gray-800">
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
          <a href="#" className="hover:underline">Contact</a>
          <a href="#" className="hover:underline">About</a>
          <a href="#" className="font-bold underline">Log In</a>
        </nav>
        <div className="text-sm">English ▼</div>
      </header>

      {/* Main */}
      <main className="flex flex-col md:flex-row py-10 gap-10 items-start justify-start">
        {/* Image on left */}
        <div className="w-ful        git add frontend/src/app/LogIn.jsl md:w-1/2 pl-0">
          <Image
            src="/images/CNC.png"
            alt="Login Banner"
            width={600}
            height={400}
            className="rounded shadow-lg w-full h-auto ml-0"
          />
        </div>

        {/* Login Form */}
        <div className="w-full md:w-1/2 max-w-md px-6 md:px-0">
          <h2 className="text-2xl font-bold mb-4">Welcome Back!</h2>
          <p className="text-gray-600 mb-6">Log in to your account</p>
          <form className="space-y-4">
            <input type="text" placeholder="Email or Phone Number" className="w-full border px-4 py-2 rounded" />
            <input type="password" placeholder="Password" className="w-full border px-4 py-2 rounded" />
            <button type="submit" className="w-full bg-sky-500 text-white py-2 rounded">Log In</button>
          </form>

          <div className="flex items-center my-4">
            <div className="flex-grow h-px bg-gray-300"></div>
            <div className="px-2 text-gray-500 text-sm">or</div>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div>

          <button className="w-full border py-2 rounded flex items-center justify-center gap-2">
            <Image src="/images/go.png" alt="Google" width={20} height={20} />
            Log in with Google
          </button>

          <p className="text-sm text-center mt-4">
            Don't have an account? <a href="#" className="text-blue-600">Sign up</a>
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white px-10 py-10">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <div>
            <h3 className="font-bold text-lg mb-2">⭐ SoftWeb Pro</h3>
            <p className="text-sm mb-2">A platform dedicated to licensed software and digital solutions.</p>
            <p className="text-sm">We offer products that support businesses and individuals to grow efficiently.</p>
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
