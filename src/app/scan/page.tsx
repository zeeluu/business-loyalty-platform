"use client";

import { useParams } from "next/navigation";
import { useEffect } from "react";

export default function ScanPage() {
  const params = useParams();

  const collectStamp = async () => {
    console.log("Sending ID:", Number(params.id));
    
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

    console.log("API Response:", data);

    if (data.success) {
      alert("🎉 Stamp Collected Successfully!");
    } else {
      alert("Failed");
    }
  };
  useEffect(() => {
    collectStamp();
    }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100">
      <div className="rounded-2xl bg-white p-10 shadow">

        <h1 className="mb-4 text-3xl font-bold">
          Scan Success 🎉
        </h1>

        <p>
          Customer ID: {params.id}
        </p>

      </div>
    </div>
  );
}