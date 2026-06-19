"use client";

import { useParams } from "next/navigation";

export default function ScanPage() {
  const params = useParams();

  const collectStamp = async () => {
    const res = await fetch("/api/customer", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: Number(params.id),
      }),
    });

    const data = await res.json();

    if (data.success) {
      alert("🎉 Stamp Collected Successfully!");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100">
      <div className="rounded-2xl bg-white p-10 shadow">

        <h1 className="mb-4 text-3xl font-bold">
          Scan Success 🎉
        </h1>

        <p>
          Customer ID: {params.id}
        </p>

        <button
          onClick={collectStamp}
          className="mt-6 rounded-xl bg-green-600 px-6 py-3 text-white"
        >
          Collect Stamp
        </button>

      </div>
    </div>
  );
}