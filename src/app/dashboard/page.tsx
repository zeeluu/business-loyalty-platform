"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import QRCodeComponent from "@/components/QRCodeComponent";


export default function DashboardPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const [customers, setCustomers] = useState<any[]>([]);
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

  useEffect(() => {
    loadCustomers();
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
    <div className="flex min-h-screen bg-slate-100">
      {/* Sidebar */}
      <div className="w-64 bg-slate-900 p-6 text-white">
        <h1 className="mb-10 text-3xl font-bold text-cyan-400">
          BizConnect
        </h1>

        <ul className="space-y-5">
          <li>Dashboard</li>
          <li>Customers</li>
          <li>Offers</li>
          <li>
            <Link
              href="/rewards"
              className="hover:text-cyan-400"
            >
              Rewards
            </Link>
          </li>
          <li>Analytics</li>
          <li>Settings</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <h1 className="mb-8 text-4xl font-bold">
          Business Dashboard
        </h1>
        <div className="mb-8 rounded-2xl bg-white p-6 shadow">
          <h2 className="mb-4 text-2xl font-bold">
            📱 Business QR Code
          </h2>

          <div className="flex justify-center">
            <QRCodeComponent
              value={qrValue}
            />
          </div>

          <p className="mt-4 text-center text-gray-600">
            Reward your customers instantly through QR-based loyalty tracking
          </p>
        </div>
        <div className="mt-10 rounded-2xl bg-white p-8 shadow">
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
          <div className="rounded-2xl bg-white p-6 shadow">
            <h2 className="text-lg font-semibold">
              Customers
            </h2>
            <p className="mt-2 text-3xl font-bold text-blue-600">
              {customers.length}
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow">
            <h2 className="text-lg font-semibold">
              Active Offers
            </h2>
            <p className="mt-2 text-3xl font-bold text-green-600">
              0
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow">
            <h2 className="text-lg font-semibold">
              Reward Points
            </h2>
            <p className="mt-2 text-3xl font-bold text-orange-600">
              0
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow">
            <h2 className="text-lg font-semibold">
              Revenue Impact
            </h2>
            <p className="mt-2 text-3xl font-bold text-purple-600">
              ₹0
            </p>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow">
            <h2 className="text-lg font-semibold">
              Gold Members
            </h2>
            <p className="mt-2 text-3xl font-bold text-yellow-500">
              {goldMembers}
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow">
            <h2 className="text-lg font-semibold">
              Silver Members
            </h2>
            <p className="mt-2 text-3xl font-bold text-gray-500">
              {silverMembers}
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow">
            <h2 className="text-lg font-semibold">
              Bronze Members
            </h2>
            <p className="mt-2 text-3xl font-bold text-orange-500">
              {bronzeMembers}
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow">
            <h2 className="text-lg font-semibold">
              Total Stamps
            </h2>
            <p className="mt-2 text-3xl font-bold text-cyan-600">
              {totalStamps}
            </p>
          </div>
        </div>
        

        {/* Add Customer */}
        <div className="mt-10 rounded-2xl bg-white p-8 shadow">
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
        <div className="mt-10 rounded-2xl bg-white p-8 shadow">
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

          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b">
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Phone</th>
                <th className="p-3 text-left">Email</th>
                <th className="p-3 text-left">Points</th>
                <th className="p-3 text-left">Stamps</th>
                <th className="p-3 text-left">Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredCustomers.map((customer) => (
                <tr key={customer.id} className="border-b">
                  <td className="p-3">{customer.name}</td>
                  <td className="p-3">{customer.phone}</td>
                  <td className="p-3">{customer.email}</td>
                  <td className="p-3">{customer.points}</td>
                  <td className="p-3">
                    ⭐ {customer.stamps}
                  </td>

                  <td className="p-3 space-x-2">

                    <button
                      onClick={() => addStamp(customer.id)}
                      className="rounded-lg bg-yellow-500 px-3 py-2 text-white"
                    >
                      + Stamp
                    </button>

                    <Link
                      href={`/customers/${customer.id}`}
                      className="rounded-lg bg-blue-500 px-3 py-2 text-white"
                    >
                      View
                    </Link>

                    <button
                      onClick={() => deleteCustomer(customer.id)}
                      className="rounded-lg bg-red-500 px-3 py-2 text-white"
                    >
                      Delete
                    </button>

                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Reward Form */}
        <div className="mt-10 rounded-2xl bg-white p-8 shadow">
          <h2 className="mb-6 text-2xl font-bold">
            Create Reward
          </h2>

          <div className="grid gap-4 md:grid-cols-3">
            <input
              type="text"
              placeholder="Reward Name"
              value={rewardTitle}
              onChange={(e) =>
                setRewardTitle(e.target.value)
              }
              className="rounded-xl border p-3"
            />

            <input
              type="number"
              value={requiredStamps}
              onChange={(e) =>
                setRequiredStamps(Number(e.target.value))
              }
              className="rounded-xl border p-3"
            />

            <select
              value={rewardType}
              onChange={(e) =>
                setRewardType(e.target.value)
              }
              className="rounded-xl border p-3"
            >
              <option>Gift</option>
              <option>Discount</option>
              <option>Scratch Card</option>
              <option>Bonus Points</option>
              <option>Free Product</option>
            </select>
          </div>

          <button
            onClick={addReward}
            className="mt-6 rounded-xl bg-green-600 px-6 py-3 text-white"
          >
            Create Reward
          </button>
        </div>
      </div>
    </div>
  );
}