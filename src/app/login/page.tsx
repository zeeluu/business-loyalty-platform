"use client";

import { useState } from "react";

export default function LoginPage() {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [showPassword, setShowPassword] = useState(false);

const handleLogin = async () => {
const res = await fetch("/api/login", {
method: "POST",
headers: {
"Content-Type": "application/json",
},
body: JSON.stringify({
email,
password,
}),
});

const data = await res.json();

if (data.success) {
  alert("Login Successful!");

  if (data.user?.role === "OWNER") {
    window.location.href = "/dashboard";
  } else {
    window.location.href = `/customers/${data.user.id}`;
  }
} else {
  alert(data.message || "Login Failed");
}


};

return ( <div className="flex min-h-screen items-center justify-center bg-gray-100"> <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg"> <h1 className="mb-6 text-center text-3xl font-bold">
Login </h1>

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

    <div className="mb-4 text-right">
      <a
        href="/forgot-password"
        className="text-blue-600 hover:underline"
      >
        Forgot Password?
      </a>
    </div>

    <button
      onClick={handleLogin}
      className="w-full rounded-lg bg-blue-600 p-3 text-white"
    >
      Login
    </button>

    <p className="mt-4 text-center">
      Don't have an account?{" "}
      <a
        href="/signup"
        className="text-green-600 font-semibold"
      >
        Sign Up
      </a>
    </p>
  </div>
</div>

);
}
