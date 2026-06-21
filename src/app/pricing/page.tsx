import Link from "next/link";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-slate-50">

      {/* Hero */}
      <section className="px-8 py-24 text-center">

        <div className="mb-6 inline-block rounded-full bg-green-100 px-6 py-3 font-semibold text-green-700">
          🚀 Launch Offer • 6 Months Free
        </div>

        <h1 className="mb-6 text-6xl font-bold">
          Simple Pricing For Every Business
        </h1>

        <p className="mx-auto max-w-3xl text-xl text-gray-600">
          Start free today and grow your customer loyalty
          with QR rewards, stamp cards and engagement tools.
        </p>

      </section>

      {/* Pricing Cards */}
      <section className="px-8 pb-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-3">

          {/* Starter */}
          <div className="rounded-[32px] bg-white p-10 shadow-lg">

            <h2 className="mb-4 text-3xl font-bold">
              Starter
            </h2>

            <div className="mb-2 text-6xl font-bold text-green-600">
              FREE
            </div>

            <p className="mb-8 text-gray-500">
              First 6 Months
            </p>

            <ul className="mb-10 space-y-4 text-gray-700">
              <li>✓ Up to 500 Customers</li>
              <li>✓ QR Loyalty Cards</li>
              <li>✓ Digital Stamp Cards</li>
              <li>✓ Reward Management</li>
              <li>✓ Basic Analytics</li>
              <li>✓ Email Support</li>
            </ul>

            <Link
              href="/signup"
              className="block rounded-2xl bg-blue-600 py-4 text-center font-semibold text-white"
            >
              Start Free
            </Link>

          </div>

          {/* Growth */}
          <div className="relative rounded-[32px] border-2 border-blue-600 bg-white p-10 shadow-2xl">

            <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white">
              MOST POPULAR
            </div>

            <h2 className="mb-4 text-3xl font-bold">
              Growth
            </h2>

            <div className="mb-2 text-6xl font-bold">
              ₹999
            </div>

            <p className="mb-8 text-gray-500">
              Per Month
            </p>

            <ul className="mb-10 space-y-4 text-gray-700">
              <li>✓ Unlimited Customers</li>
              <li>✓ QR Loyalty System</li>
              <li>✓ Digital Stamp Cards</li>
              <li>✓ Scratch Card Campaigns</li>
              <li>✓ Membership Levels</li>
              <li>✓ Advanced Analytics</li>
              <li>✓ Campaign Management</li>
              <li>✓ Priority Support</li>
            </ul>

            <Link
              href="/signup"
              className="block rounded-2xl bg-blue-600 py-4 text-center font-semibold text-white"
            >
              Start Trial
            </Link>

          </div>

          {/* Enterprise */}
          <div className="rounded-[32px] bg-white p-10 shadow-lg">

            <h2 className="mb-4 text-3xl font-bold">
              Enterprise
            </h2>

            <div className="mb-2 text-5xl font-bold">
              Custom
            </div>

            <p className="mb-8 text-gray-500">
              Contact Sales
            </p>

            <ul className="mb-10 space-y-4 text-gray-700">
              <li>✓ Unlimited Everything</li>
              <li>✓ Multi Branch Support</li>
              <li>✓ Custom Branding</li>
              <li>✓ White Label Solution</li>
              <li>✓ API Access</li>
              <li>✓ Dedicated Manager</li>
              <li>✓ Custom Integrations</li>
              <li>✓ 24/7 Support</li>
            </ul>

            <Link
              href="/contact"
              className="block rounded-2xl bg-slate-900 py-4 text-center font-semibold text-white"
            >
              Contact Sales
            </Link>

          </div>

        </div>
      </section>

      {/* FAQ */}
      <section className="px-8 pb-24">
        <div className="mx-auto max-w-5xl">

          <h2 className="mb-12 text-center text-5xl font-bold">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">

            <div className="rounded-2xl bg-white p-6 shadow">
              <h3 className="mb-2 text-xl font-bold">
                Is Starter really free?
              </h3>

              <p className="text-gray-600">
                Yes. New businesses receive full access
                to the Starter Plan for 6 months.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow">
              <h3 className="mb-2 text-xl font-bold">
                Do I need a credit card?
              </h3>

              <p className="text-gray-600">
                No credit card is required to start.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow">
              <h3 className="mb-2 text-xl font-bold">
                Can I upgrade later?
              </h3>

              <p className="text-gray-600">
                Yes. You can upgrade your plan anytime.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="px-8 pb-24">
        <div className="mx-auto max-w-6xl rounded-[40px] bg-gradient-to-r from-blue-600 to-cyan-500 p-16 text-center text-white">

          <h2 className="mb-6 text-5xl font-bold">
            Ready To Reward Your Customers?
          </h2>

          <p className="mb-10 text-xl">
            Launch your loyalty program in minutes
            and increase customer retention.
          </p>

          <Link
            href="/signup"
            className="rounded-2xl bg-white px-10 py-5 font-semibold text-blue-600"
          >
            Get Started Free
          </Link>

        </div>
      </section>

    </div>
  );
}