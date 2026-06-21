"use client";

import { useState } from "react";

export default function BusinessProfilePage() {
  const [businessName, setBusinessName] =
    useState("");

  const [phone, setPhone] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [address, setAddress] =
    useState("");

  const [website, setWebsite] =
    useState("");

  const saveProfile = async () => {
    const res = await fetch(
      "/api/business-profile",
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify({
          businessName,
          phone,
          email,
          address,
          website,
        }),
      }
    );

    const data = await res.json();

    if (data.success) {
      alert(
        "Business Profile Saved!"
      );
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <div className="mx-auto max-w-3xl rounded-3xl bg-white p-8 shadow-xl">

        <h1 className="mb-8 text-4xl font-bold">
          Business Profile
        </h1>

        <div className="space-y-4">

          <input
            type="text"
            placeholder="Business Name"
            value={businessName}
            onChange={(e) =>
              setBusinessName(
                e.target.value
              )
            }
            className="w-full rounded-xl border p-3"
          />

          <input
            type="text"
            placeholder="Phone"
            value={phone}
            onChange={(e) =>
              setPhone(
                e.target.value
              )
            }
            className="w-full rounded-xl border p-3"
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) =>
              setEmail(
                e.target.value
              )
            }
            className="w-full rounded-xl border p-3"
          />

          <input
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e) =>
              setAddress(
                e.target.value
              )
            }
            className="w-full rounded-xl border p-3"
          />

          <input
            type="text"
            placeholder="Website"
            value={website}
            onChange={(e) =>
              setWebsite(
                e.target.value
              )
            }
            className="w-full rounded-xl border p-3"
          />

          <button
            onClick={saveProfile}
            className="rounded-xl bg-cyan-600 px-6 py-3 text-white"
          >
            Save Profile
          </button>

        </div>
      </div>
    </div>
  );
}