"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import QRCodeComponent from "@/components/QRCodeComponent";
import AnalyticsChart from "@/components/AnalyticsChart";


export default function DashboardPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const [customers, setCustomers] = useState<any[]>([]);
  const [business, setBusiness] = useState<any>(null);
  const totalStamps = customers.reduce(
    (sum, customer) => sum + (customer.stamps || 0),
    0
  );
  
  const QRCode = dynamic(
    () => import("react-qr-code"),
    { ssr: false }
  );

  const goldMembers = customers.filter(
    (customer) => customer.stamps >= 25
  ).length;

  const silverMembers = customers.filter(
    (customer) =>
      customer.stamps >= 10 &&
      customer.stamps < 25
  ).length;

  const bronzeMembers = customers.filter(
    (customer) => customer.stamps < 10
  ).length;
  
  const [search, setSearch] = useState("");

  const [rewardTitle, setRewardTitle] = useState("");
  const [requiredStamps, setRequiredStamps] = useState(5);
  const [rewardType, setRewardType] = useState("Gift");
  const qrValue =
    typeof window !== "undefined"
      ? `${window.location.origin}/scan/owner`
      : "";

  const loadCustomers = async () => {
    const res = await fetch("/api/customer");
    const data = await res.json();
    setCustomers(data);
  };
  const loadBusiness = async () => {
    const res = await fetch(
      "/api/business-profile"
    );

    const data = await res.json();

      setBusiness(data);
    };

  useEffect(() => {
    loadCustomers();
    loadBusiness();
  }, []);

  const filteredCustomers = customers.filter(
    (customer) =>
      customer.name
        ?.toLowerCase()
        .includes(search.toLowerCase()) ||
      customer.phone?.includes(search)
  );

  const addCustomer = async () => {
    const res = await fetch("/api/customer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        phone,
        email,
      }),
    });
    const data = await res.json();

    if (data.success) {
      alert("Customer Added Successfully!");

      setName("");
      setPhone("");
      setEmail("");

      loadCustomers();
    } else {
      alert("Failed to Add Customer");
    }
  };

  const deleteCustomer = async (id: number) => {
    const res = await fetch("/api/customer", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });

    const data = await res.json();

    if (data.success) {
      loadCustomers();
    }
  };
  const addStamp = async (id: number) => {
  const res = await fetch("/api/customer", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id }),
  });

  const data = await res.json();

  if (data.success) {
    loadCustomers();
  }
};

  const addReward = async () => {
    const res = await fetch("/api/reward", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: rewardTitle,
        requiredStamps,
        rewardType,
      }),
    });

    const data = await res.json();

    if (data.success) {
      alert("Reward Added Successfully!");

      setRewardTitle("");
      setRequiredStamps(5);
      setRewardType("Gift");
    }
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-50 via-white to-cyan-50">
      {/* Sidebar */}
      <div className="w-72 bg-slate-950 p-8 text-white shadow-2xl">
        <div className="mb-12">
          <h1 className="text-4xl font-extrabold text-cyan-400">
            {business?.businessName || "BizConnect"}
          </h1>

          <p className="mt-2 text-sm text-slate-400">
            Powered by BizConnect
          </p>
        </div>
        <div className="mt-8 mb-8 rounded-2xl bg-slate-900 p-4">

          <h3 className="font-semibold">
            {business?.businessName}
          </h3>

          <p className="mt-1 text-sm text-slate-400">
            {business?.phone}
          </p>

          <p className="text-sm text-slate-400">
            {business?.email}
          </p>

        </div>

        <ul className="space-y-4">

          <li className="rounded-xl bg-cyan-600 px-4 py-3">
            Dashboard
          </li>

          <li className="rounded-xl px-4 py-3 hover:bg-slate-800">
            Customers
          </li>

          <li className="rounded-xl px-4 py-3 hover:bg-slate-800">
            Offers
          </li>

          <li className="rounded-xl px-4 py-3 hover:bg-slate-800">
            Analytics
          </li>

          <li className="rounded-xl px-4 py-3 hover:bg-slate-800">
            Settings
          </li>

        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="mb-10 flex items-center justify-between">

          <div>
            <h1 className="text-5xl font-bold">
              Dashboard
            </h1>

            <p className="mt-2 text-gray-500">
              Welcome back to BizConnect
            </p>
          </div>

          <button className="rounded-2xl bg-cyan-600 px-6 py-3 text-white">
            Upgrade Plan
          </button>

        </div>
        <div className="mt-10 rounded-3xl bg-white p-8 shadow-xl border border-slate-100">
          <h2 className="mb-6 text-3xl font-bold">
            Create Offers
          </h2>

          <p className="mb-6 text-gray-500">
            Choose an offer type for your customers
          </p>

          <div className="grid gap-6 md:grid-cols-3">

            <Link
              href="/offers/stamp-card"
              className="rounded-3xl bg-red-700 p-8 text-center text-white shadow-lg transition hover:scale-105"
            >
              <div className="mb-4 text-5xl">⭐</div>
              <h3 className="text-2xl font-bold">
                Stamp Card
              </h3>
              <p className="mt-2 text-sm opacity-80">
                Loyalty Program
              </p>
            </Link>

            <Link
              href="/offers/scratch-card"
              className="rounded-3xl bg-yellow-600 p-8 text-center text-white shadow-lg transition hover:scale-105"
            >
              <div className="mb-4 text-5xl">🎁</div>
              <h3 className="text-2xl font-bold">
                Scratch Card
              </h3>
              <p className="mt-2 text-sm opacity-80">
                Instant Gifts
              </p>
            </Link>

            <Link
              href="/offers/catalog"
              className="rounded-3xl bg-green-600 p-8 text-center text-white shadow-lg transition hover:scale-105"
            >
              <div className="mb-4 text-5xl">🏪</div>
              <h3 className="text-2xl font-bold">
                Digital Catalog
              </h3>
              <p className="mt-2 text-sm opacity-80">
                QR Catalog
              </p>
            </Link>

          </div>
        </div>

        {/* Stats */}
        
        <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-6">
          <div className="rounded-3xl bg-white p-6 shadow-xl border border-slate-100 transition hover:-translate-y-1 hover:shadow-2xl">
            <h2 className="text-lg font-semibold">
              Customers
            </h2>
            <p className="mt-2 text-3xl font-bold text-blue-600">
              {customers.length}
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-xl border border-slate-100 transition hover:-translate-y-1 hover:shadow-2xl">
            <h2 className="text-lg font-semibold">
              Active Offers
            </h2>
            <p className="mt-2 text-3xl font-bold text-green-600">
              0
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-xl border border-slate-100 transition hover:-translate-y-1 hover:shadow-2xl">
            <h2 className="text-lg font-semibold">
              Reward Points
            </h2>
            <p className="mt-2 text-3xl font-bold text-orange-600">
              0
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-xl border border-slate-100 transition hover:-translate-y-1 hover:shadow-2xl">
            <h2 className="text-lg font-semibold">
              Revenue Impact
            </h2>
            <p className="mt-2 text-3xl font-bold text-purple-600">
              ₹0
            </p>
          </div>
          <div className="rounded-3xl bg-white p-6 shadow-xl border border-slate-100 transition hover:-translate-y-1 hover:shadow-2xl">
            <h2 className="text-lg font-semibold">
              Gold Members
            </h2>
            <p className="mt-2 text-3xl font-bold text-yellow-500">
              {goldMembers}
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-xl border border-slate-100 transition hover:-translate-y-1 hover:shadow-2xl">
            <h2 className="text-lg font-semibold">
              Silver Members
            </h2>
            <p className="mt-2 text-3xl font-bold text-gray-500">
              {silverMembers}
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-xl border border-slate-100 transition hover:-translate-y-1 hover:shadow-2xl">
            <h2 className="text-lg font-semibold">
              Bronze Members
            </h2>
            <p className="mt-2 text-3xl font-bold text-orange-500">
              {bronzeMembers}
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-xl border border-slate-100 transition hover:-translate-y-1 hover:shadow-2xl">
            <h2 className="text-lg font-semibold">
              Total Stamps
            </h2>
            <p className="mt-2 text-3xl font-bold text-cyan-600">
              {totalStamps}
            </p>
          </div>
        </div>
        <div className="mt-10">
          <AnalyticsChart customers={customers} />
        </div>
        

        {/* Add Customer */}
        <div className="mt-10 rounded-3xl bg-white p-8 shadow-xl">
          <h2 className="mb-6 text-2xl font-bold">
            Add Customer
          </h2>

          <div className="grid gap-4 md:grid-cols-3">
            <input
              type="text"
              placeholder="Customer Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="rounded-xl border p-3"
            />

            <input
              type="text"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="rounded-xl border p-3"
            />

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-xl border p-3"
            />
          </div>

          <button
            onClick={addCustomer}
            className="mt-6 rounded-xl bg-cyan-600 px-6 py-3 text-white"
          >
            Add Customer
          </button>
        </div>
        <div className="mt-10 rounded-3xl bg-white p-8 shadow-xl">
          <h2 className="mb-6 text-2xl font-bold">
            🏆 Top Customers
          </h2>

          <div className="space-y-3">
            {[...customers]
              .sort(
                (a, b) => (b.stamps || 0) - (a.stamps || 0)
              )
              .slice(0, 5)
              .map((customer, index) => (
                <div
                  key={customer.id}
                  className="flex items-center justify-between rounded-xl bg-slate-100 p-4"
                >
                  <div>
                    #{index + 1} {customer.name}
                  </div>

                  <div>
                    ⭐ {customer.stamps}
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="mt-10 rounded-3xl bg-white p-8 shadow-xl border border-slate-100">
          <h2 className="mb-6 text-2xl font-bold">
            Recent Activity
          </h2>

          <div className="space-y-4">

            {customers.slice(0, 5).map((customer) => (
              <div
                key={customer.id}
                className="flex items-center justify-between rounded-xl bg-slate-50 p-4"
              >
                <div className="flex items-center gap-3">

                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-600 text-white font-bold">
                    {customer.name?.charAt(0)}
                  </div>

                  <div>
                    <p className="font-semibold">
                      {customer.name}
                    </p>

                    <p className="text-sm text-gray-500">
                      Customer activity recorded
                    </p>
                  </div>

                </div>

                <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-700">
                  Active
                </span>
              </div>
            ))}

          </div>
        </div>
        {/* Customer List */}
        <div className="mt-10 rounded-2xl bg-white p-8 shadow">
          <h2 className="mb-6 text-2xl font-bold">
            Customer List
          </h2>

          <input
            type="text"
            placeholder="🔍 Search Customer"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="mb-6 w-full rounded-xl border p-3"
          />

          <table className="w-full overflow-hidden rounded-2xl">
            <thead>
              <tr className="border-b bg-slate-50">
                <th className="p-4 text-left">Customer</th>
                <th className="p-4 text-left">Contact</th>
                <th className="p-4 text-left">Points</th>
                <th className="p-4 text-left">Membership</th>
                <th className="p-4 text-left">Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredCustomers.map((customer) => {
                const level =
                  customer.stamps >= 25
                    ? "Gold"
                    : customer.stamps >= 10
                    ? "Silver"
                    : "Bronze";

                return (
                  <tr
                    key={customer.id}
                    className="border-b hover:bg-slate-50"
                  >
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-600 text-white font-bold">
                          {customer.name?.charAt(0)}
                        </div>

                        <div>
                          <p className="font-semibold">
                            {customer.name}
                          </p>

                          <p className="text-sm text-gray-500">
                            ID #{customer.id}
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="p-4">
                      <div>
                        <p>{customer.phone}</p>
                        <p className="text-sm text-gray-500">
                          {customer.email}
                        </p>
                      </div>
                    </td>

                    <td className="p-4">
                      <div>
                        <p>⭐ {customer.stamps}</p>
                        <p className="text-sm text-gray-500">
                          {customer.points} points
                        </p>
                      </div>
                    </td>

                    <td className="p-4">
                      {level === "Gold" && (
                        <span className="rounded-full bg-yellow-100 px-3 py-1 text-sm text-yellow-700">
                          Gold
                        </span>
                      )}

                      {level === "Silver" && (
                        <span className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700">
                          Silver
                        </span>
                      )}

                      {level === "Bronze" && (
                        <span className="rounded-full bg-orange-100 px-3 py-1 text-sm text-orange-700">
                          Bronze
                        </span>
                      )}
                    </td>

                    <td className="p-4">
                      <div className="flex gap-2">

                        <button
                          onClick={() =>
                            addStamp(customer.id)
                          }
                          className="rounded-lg bg-yellow-500 px-3 py-2 text-white"
                        >
                          + Stamp
                        </button>

                        <Link
                          href={`/customers/${customer.id}`}
                          className="rounded-lg bg-blue-600 px-3 py-2 text-white"
                        >
                          View
                        </Link>

                        <button
                          onClick={() =>
                            deleteCustomer(customer.id)
                          }
                          className="rounded-lg bg-red-500 px-3 py-2 text-white"
                        >
                          Delete
                        </button>

                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="mb-8 rounded-2xl bg-white p-6 shadow">
          <h2 className="mb-4 text-2xl font-bold">
            📱 Business QR Code
          </h2>

          <div className="flex justify-center">
            <QRCodeComponent value={qrValue} />
          </div>

          <p className="mt-4 text-center text-gray-600">
            Reward your customers instantly through QR-based loyalty tracking
          </p>
        </div>
      </div>
    </div>
  );
}