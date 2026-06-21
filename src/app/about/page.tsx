import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50">

      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-24 text-white">
        <div className="mx-auto max-w-6xl text-center">

          <h1 className="mb-6 text-6xl font-bold">
            About BizConnect
          </h1>

          <p className="mx-auto max-w-3xl text-xl">
            Transforming customer loyalty through
            digital rewards, QR technology and
            intelligent engagement solutions.
          </p>

        </div>
      </section>

      {/* Story */}
      <section className="px-8 py-24">
        <div className="mx-auto max-w-6xl">

          <div className="grid gap-12 md:grid-cols-2">

            <div>
              <h2 className="mb-6 text-4xl font-bold">
                Our Story
              </h2>

              <p className="leading-8 text-gray-600">
                BizConnect was created to help
                businesses build stronger customer
                relationships through modern loyalty
                programs. Our platform replaces
                traditional paper loyalty cards with
                smart digital experiences powered by
                QR technology and reward automation.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-10 shadow-xl">
              <h3 className="mb-4 text-2xl font-bold">
                What We Offer
              </h3>

              <ul className="space-y-4 text-gray-600">
                <li>✓ QR Loyalty Programs</li>
                <li>✓ Digital Stamp Cards</li>
                <li>✓ Scratch Card Campaigns</li>
                <li>✓ Reward Automation</li>
                <li>✓ Business Analytics</li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* Mission Vision */}
      <section className="bg-white px-8 py-24">
        <div className="mx-auto max-w-6xl">

          <div className="grid gap-8 md:grid-cols-2">

            <div className="rounded-3xl p-10 shadow-lg">
              <h2 className="mb-6 text-3xl font-bold">
                Our Mission
              </h2>

              <p className="text-gray-600">
                Empower businesses with modern tools
                that increase customer retention and
                create memorable reward experiences.
              </p>
            </div>

            <div className="rounded-3xl p-10 shadow-lg">
              <h2 className="mb-6 text-3xl font-bold">
                Our Vision
              </h2>

              <p className="text-gray-600">
                Become the leading loyalty platform
                trusted by businesses worldwide.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Stats */}
      <section className="bg-slate-900 px-8 py-20 text-white">
        <div className="mx-auto max-w-6xl">

          <div className="grid gap-10 text-center md:grid-cols-4">

            <div>
              <h2 className="text-5xl font-bold">
                5000+
              </h2>
              <p className="mt-3">
                Customers Rewarded
              </p>
            </div>

            <div>
              <h2 className="text-5xl font-bold">
                250+
              </h2>
              <p className="mt-3">
                Businesses
              </p>
            </div>

            <div>
              <h2 className="text-5xl font-bold">
                1M+
              </h2>
              <p className="mt-3">
                QR Scans
              </p>
            </div>

            <div>
              <h2 className="text-5xl font-bold">
                98%
              </h2>
              <p className="mt-3">
                Satisfaction
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="px-8 py-24">
        <div className="mx-auto max-w-5xl rounded-3xl bg-blue-600 p-16 text-center text-white">

          <h2 className="mb-6 text-5xl font-bold">
            Ready To Grow Your Business?
          </h2>

          <p className="mb-8 text-xl">
            Join businesses using BizConnect to
            improve customer loyalty and retention.
          </p>

          <Link
            href="/signup"
            className="rounded-2xl bg-white px-8 py-4 font-semibold text-blue-600"
          >
            Get Started
          </Link>

        </div>
      </section>

    </div>
  );
}