import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50">

      {/* Navbar */}
      <nav className="flex items-center justify-between border-b bg-white px-8 py-4">
        <h1 className="text-2xl font-bold text-blue-600">
          BizConnect
        </h1>

        <div className="flex gap-6">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/#contact">
            Contact
          </Link>
          <Link href="/pricing">Pricing</Link>
        </div>

        <div className="flex gap-3">
          <Link
            href="/login"
            className="rounded-lg border px-4 py-2"
          >
            Login
          </Link>

          <Link
            href="/signup"
            className="rounded-lg bg-blue-600 px-4 py-2 text-white"
          >
            Sign Up
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-8 py-20 text-center">
        <h1 className="mb-6 text-6xl font-bold">
          Grow Customer Loyalty
        </h1>

        <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-600">
          Reward customers with QR Codes,
          Stamp Cards, Scratch Rewards
          and Loyalty Programs.
        </p>

        <div className="flex justify-center gap-4">
          <Link
            href="/signup"
            className="rounded-xl bg-blue-600 px-8 py-4 text-white"
          >
            Get Started
          </Link>

          <Link
            href="/about"
            className="rounded-xl border px-8 py-4"
          >
            Learn More
          </Link>
        </div>
      </section>
      <div className="mt-16 flex justify-center">
  <img
    src="/dashboard-preview.png"
    alt="BizConnect Dashboard"
    className="rounded-3xl shadow-2xl border"
  />
</div>
      {/* Premium Features Section */}
      <section>

        <div className="mx-auto max-w-7xl">

          <h2 className="mb-4 text-center text-5xl font-bold">
            Features
          </h2>

          <p className="mx-auto mb-16 max-w-3xl text-center text-lg text-gray-500">
            Everything you need to build customer loyalty,
            increase retention and grow your business.
          </p>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            <div className="rounded-3xl border bg-white p-8 shadow-sm hover:shadow-xl">
              <h3 className="mb-4 text-2xl font-bold">
                Digital Loyalty Programs
              </h3>

              <p className="text-gray-600">
                Create customizable loyalty campaigns
                and reward repeat customers effortlessly.
              </p>
            </div>

            <div className="rounded-3xl border bg-white p-8 shadow-sm hover:shadow-xl">
              <h3 className="mb-4 text-2xl font-bold">
                QR Code Engagement
              </h3>

              <p className="text-gray-600">
                Instantly connect customers with your
                loyalty program using secure QR codes.
              </p>
            </div>

            <div className="rounded-3xl border bg-white p-8 shadow-sm hover:shadow-xl">
              <h3 className="mb-4 text-2xl font-bold">
                Reward Management
              </h3>

              <p className="text-gray-600">
                Create, manage and track rewards from
                a centralized dashboard.
              </p>
            </div>

            <div className="rounded-3xl border bg-white p-8 shadow-sm hover:shadow-xl">
              <h3 className="mb-4 text-2xl font-bold">
                Membership Levels
              </h3>

              <p className="text-gray-600">
                Bronze, Silver and Gold tiers to
                encourage customer retention.
              </p>
            </div>

            <div className="rounded-3xl border bg-white p-8 shadow-sm hover:shadow-xl">
              <h3 className="mb-4 text-2xl font-bold">
                Business Analytics
              </h3>

              <p className="text-gray-600">
                Monitor customer activity, rewards
                and engagement with real-time insights.
              </p>
            </div>

            <div className="rounded-3xl border bg-white p-8 shadow-sm hover:shadow-xl">
              <h3 className="mb-4 text-2xl font-bold">
                Secure Platform
              </h3>

              <p className="text-gray-600">
                Separate owner and customer accounts
                with secure authentication.
              </p>
            </div>

          </div>

        </div>
      </section>
      {/* How It Works Section */}
      <section className="bg-slate-50 px-8 py-24">
        <div className="mx-auto max-w-7xl">

          <h2 className="mb-4 text-center text-5xl font-bold">
            How It Works
          </h2>

          <p className="mx-auto mb-16 max-w-3xl text-center text-lg text-gray-500">
            Get started in minutes and build stronger
            customer relationships through digital loyalty.
          </p>

          <div className="grid gap-8 md:grid-cols-4">

            <div className="rounded-3xl bg-white p-8 text-center shadow-sm">
              <div className="mb-4 text-5xl font-bold text-blue-600">
                01
              </div>

              <h3 className="mb-3 text-xl font-bold">
                Create Account
              </h3>

              <p className="text-gray-600">
                Register your business and set up your loyalty program.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 text-center shadow-sm">
              <div className="mb-4 text-5xl font-bold text-blue-600">
                02
              </div>

              <h3 className="mb-3 text-xl font-bold">
                Share QR Code
              </h3>

              <p className="text-gray-600">
                Customers scan your unique QR code to join.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 text-center shadow-sm">
              <div className="mb-4 text-5xl font-bold text-blue-600">
                03
              </div>

              <h3 className="mb-3 text-xl font-bold">
                Earn Rewards
              </h3>

              <p className="text-gray-600">
                Customers collect stamps and unlock benefits.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 text-center shadow-sm">
              <div className="mb-4 text-5xl font-bold text-blue-600">
                04
              </div>

              <h3 className="mb-3 text-xl font-bold">
                Grow Retention
              </h3>

              <p className="text-gray-600">
                Increase repeat visits and customer loyalty.
              </p>
            </div>

          </div>

        </div>
      </section>
      {/* Statistics Section */}
<section className="bg-blue-600 px-8 py-20 text-white">
  <div className="mx-auto max-w-7xl">

    <div className="grid gap-10 text-center md:grid-cols-4">

      <div>
        <h2 className="text-5xl font-bold">
          5000+
        </h2>
        <p className="mt-3 text-lg">
          Customers Rewarded
        </p>
      </div>

      <div>
        <h2 className="text-5xl font-bold">
          250+
        </h2>
        <p className="mt-3 text-lg">
          Businesses Using Platform
        </p>
      </div>

      <div>
        <h2 className="text-5xl font-bold">
          1M+
        </h2>
        <p className="mt-3 text-lg">
          QR Scans Processed
        </p>
      </div>

      <div>
        <h2 className="text-5xl font-bold">
          98%
        </h2>
        <p className="mt-3 text-lg">
          Customer Satisfaction
        </p>
      </div>

    </div>

  </div>
</section>
{/* Contact Section */}
<section className="bg-white px-8 py-24">
  {/* Contact Section */}
<section
  id="contact"
  className="bg-white px-8 py-24"
></section>
  <div className="mx-auto max-w-6xl">

    <h2 className="mb-4 text-center text-5xl font-bold">
      Contact Us
    </h2>

    <p className="mx-auto mb-16 max-w-2xl text-center text-lg text-gray-500">
      Have questions about our loyalty platform?
      We'd love to hear from you.
    </p>

    <div className="grid gap-12 md:grid-cols-2">

      <div>
        <h3 className="mb-6 text-3xl font-bold">
          Get In Touch
        </h3>

        <div className="space-y-6">

          <div>
            <p className="font-semibold">
              Email
            </p>
            <p className="text-gray-600">
              vekariyazeel63@gmail.com
            </p>
          </div>

          <div>
            <p className="font-semibold">
              Phone
            </p>
            <p className="text-gray-600">
              +91 6353905828
            </p>
          </div>

          <div>
            <p className="font-semibold">
              Address
            </p>
            <p className="text-gray-600">
              Ahmedabad, Gujarat, India
            </p>
          </div>

        </div>
      </div>

      <div className="rounded-3xl border p-8 shadow-sm">

        <input
          type="text"
          placeholder="Your Name"
          className="mb-4 w-full rounded-xl border p-4"
        />

        <input
          type="email"
          placeholder="Your Email"
          className="mb-4 w-full rounded-xl border p-4"
        />

        <textarea
          placeholder="Your Message"
          rows={5}
          className="mb-4 w-full rounded-xl border p-4"
        />

        <button
          className="w-full rounded-xl bg-blue-600 py-4 text-white"
        >
          Send Message
        </button>

      </div>

    </div>

  </div>
</section>
{/* Footer */}
<footer className="bg-slate-900 px-8 py-16 text-white">
  <div className="mx-auto max-w-7xl">

    <div className="grid gap-10 md:grid-cols-4">

      <div>
        <h2 className="mb-4 text-3xl font-bold">
          BizConnect
        </h2>

        <p className="text-gray-400">
          Modern loyalty platform helping
          businesses reward customers and
          increase retention.
        </p>
      </div>

      <div>
        <h3 className="mb-4 text-xl font-semibold">
          Product
        </h3>

        <ul className="space-y-2 text-gray-400">
          <li>Features</li>
          <li>Rewards</li>
          <li>Analytics</li>
          <li>QR Loyalty</li>
        </ul>
      </div>

      <div>
        <h3 className="mb-4 text-xl font-semibold">
          Company
        </h3>

        <ul className="space-y-2 text-gray-400">
          <li>About</li>
          <li>Contact</li>
          <li>Pricing</li>
          <li>Support</li>
        </ul>
      </div>

      <div>
        <h3 className="mb-4 text-xl font-semibold">
          Contact
        </h3>

        <ul className="space-y-2 text-gray-400">
          <li>vekariyazeel63@gmail.com</li>
          <li>+91 6353905828</li>
          <li>Ahmedabad, Gujarat</li>
        </ul>
      </div>

    </div>

    <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-400">
      © 2026 BizConnect Loyalty Platform.
      All Rights Reserved.
    </div>

  </div>
</footer>
    </div>
  );
}