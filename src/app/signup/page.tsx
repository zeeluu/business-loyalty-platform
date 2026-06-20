"use client";

import { useState } from "react";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState<"CUSTOMER" | "OWNER">("CUSTOMER");

  const handleSignup = async () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    const res = await fetch("/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        businessName,
        phone,
        email,
        password,
        role,
      }),
    });

    const data = await res.json();

    if (data.success) {
      alert("Account Created Successfully!");
      window.location.href = "/login";
    } else {
      alert("Signup Failed!");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg">
        <h1 className="mb-6 text-center text-3xl font-bold">
          Sign Up
        </h1>
        {role === "OWNER" && (
          <input
            type="text"
            placeholder="Business Name"
            value={businessName}
            onChange={(e) =>
              setBusinessName(e.target.value)
            }
            className="mb-4 w-full rounded-lg border p-3"
          />
        )}

        <input
          type="text"
          placeholder={
            role === "OWNER"
              ? "Owner Name"
              : "Customer Name"
          }
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mb-4 w-full rounded-lg border p-3"
        />

        <input
          type="text"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="mb-4 w-full rounded-lg border p-3"
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-4 w-full rounded-lg border p-3"
        />

        <div className="relative mb-4">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-lg border p-3"
          />

          <button
            type="button"
            onClick={() =>
              setShowPassword(!showPassword)
            }
            className="absolute right-3 top-3"
          >
            {showPassword ? "🙈" : "👁️"}
          </button>
        </div>

        <div className="relative mb-4">
          <input
            type={
              showConfirmPassword
                ? "text"
                : "password"
            }
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) =>
              setConfirmPassword(e.target.value)
            }
            className="w-full rounded-lg border p-3"
          />

          <button
            type="button"
            onClick={() =>
              setShowConfirmPassword(
                !showConfirmPassword
              )
            }
            className="absolute right-3 top-3"
          >
            {showConfirmPassword ? "🙈" : "👁️"}
          </button>
        </div>

        <div className="mb-6 flex rounded-full bg-gray-200 p-2">
          <button
            type="button"
            onClick={() => setRole("CUSTOMER")}
            className={`flex-1 rounded-full py-3 text-lg font-semibold ${
              role === "CUSTOMER"
                ? "bg-white shadow"
                : ""
            }`}
          >
            ✨ Customer
          </button>

          <button
            type="button"
            onClick={() => setRole("OWNER")}
            className={`flex-1 rounded-full py-3 text-lg font-semibold ${
              role === "OWNER"
                ? "bg-white shadow"
                : ""
            }`}
          >
            🏪 Business
          </button>
        </div>

        <button
          onClick={handleSignup}
          className="w-full rounded-lg bg-green-600 p-3 text-white"
        >
          Create Account
        </button>
      </div>
    </div>
  );
}