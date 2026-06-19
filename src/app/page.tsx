import Link from "next/link";
export default function Home() {
  return (
    <main>
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-4 shadow-md">
        <h1 className="text-2xl font-bold text-blue-600">
          BizConnect
        </h1>

        <div className="space-x-4">
          <button className="rounded-lg border px-4 py-2">
            Login
          </button>

          <button className="rounded-lg bg-blue-600 px-4 py-2 text-white">
            Sign Up
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex min-h-[80vh] flex-col items-center justify-center text-center">
        <h1 className="text-6xl font-bold">
          Grow Your Business Smarter 🚀
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-gray-600">
          Manage customers, loyalty rewards, offers,
          marketing and business growth from one platform.
        </p>

        <button className="mt-8 rounded-xl bg-blue-600 px-8 py-3 text-white">
          Get Started Free
        </button>
        <Link href="/login">
          <button className="rounded-lg border px-4 py-2">
            Login
          </button>
        </Link>
        <Link href="/signup">
          <button className="mt-8 rounded-xl bg-blue-600 px-8 py-3 text-white">
            Get Started Free
          </button>
        </Link>

      </section>
      {/* Features Section */} 
      <section className="px-8 py-20"> 
        <h2 className="mb-12 text-center text-4xl font-bold"> Features </h2> 
        <div className="grid gap-8 md:grid-cols-3"> 
          <div className="rounded-xl border p-6 shadow">
            <h3 className="mb-3 text-xl font-bold"> Customer Management </h3> 
            <p> Manage all your customers from one dashboard. </p> 
            </div>
            <div className="rounded-xl border p-6 shadow"> 
              <h3 className="mb-3 text-xl font-bold"> Loyalty Rewards </h3> 
              <p> Increase repeat customers with reward points. </p> 
              </div> <div className="rounded-xl border p-6 shadow">
                <h3 className="mb-3 text-xl font-bold"> Business Analytics </h3> 
                <p> Track growth and customer engagement. </p> 
                </div> 
                </div> 
                </section>
    </main>
  );
}
