"use client";

import { useState } from "react";

export default function StampCardPage() {
  const [visits, setVisits] = useState(10);
  const [expiry, setExpiry] = useState(30);
  const [rewardTitle, setRewardTitle] =
    useState("");

const saveProgram = async () => {
  const res = await fetch("/api/reward", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: rewardTitle,
      requiredStamps: visits,
      rewardType: "Stamp Card",
    }),
  });

  const data = await res.json();

  if (data.success) {
    alert("🎉 Reward Program Saved!");

    setRewardTitle("");
    setVisits(10);
    setExpiry(30);
  } else {
    alert("Failed to Save Reward");
  }
};

  return (
    <div className="min-h-screen bg-slate-100 p-6">
      <div className="mx-auto max-w-2xl rounded-3xl bg-white p-8 shadow-lg">

        <h1 className="mb-2 text-4xl font-bold">
          ⭐ Stamp Card Program
        </h1>

        <p className="mb-8 text-gray-500">
          Create a loyalty reward program
        </p>

        <div className="rounded-3xl border p-6">

          <div className="mb-8 flex gap-6">

            <div className="flex h-32 w-32 cursor-pointer items-center justify-center rounded-3xl border bg-slate-50">
              <div className="text-center">
                <div className="text-4xl">
                  📷
                </div>
                <p className="mt-2 text-sm">
                  Upload Image
                </p>
              </div>
            </div>

            <div className="flex-1">

              <h2 className="mb-3 text-xl font-bold">
                Visits Required
              </h2>

              <div className="flex items-center gap-3">

                <button
                  onClick={() =>
                    setVisits(
                      Math.max(1, visits - 1)
                    )
                  }
                  className="rounded-full bg-gray-200 px-4 py-2 text-xl"
                >
                  -
                </button>

                <span className="text-2xl font-bold">
                  {visits}
                </span>

                <button
                  onClick={() =>
                    setVisits(visits + 1)
                  }
                  className="rounded-full bg-red-700 px-4 py-2 text-xl text-white"
                >
                  +
                </button>

              </div>

              <h2 className="mb-3 mt-8 text-xl font-bold">
                Reward Expiry
              </h2>

              <div className="flex items-center gap-3">

                <button
                  onClick={() =>
                    setExpiry(
                      Math.max(1, expiry - 1)
                    )
                  }
                  className="rounded-full bg-gray-200 px-4 py-2 text-xl"
                >
                  -
                </button>

                <span className="text-2xl font-bold">
                  {expiry}
                </span>

                <button
                  onClick={() =>
                    setExpiry(expiry + 1)
                  }
                  className="rounded-full bg-red-700 px-4 py-2 text-xl text-white"
                >
                  +
                </button>

                <span>Days</span>

              </div>

            </div>

          </div>

          <div>
            <h2 className="mb-3 text-xl font-bold">
              Reward Description
            </h2>

            <input
              type="text"
              value={rewardTitle}
              onChange={(e) =>
                setRewardTitle(
                  e.target.value
                )
              }
              placeholder="e.g. Free Coffee after 10 visits"
              className="w-full rounded-2xl border p-4"
            />
          </div>

        </div>

        <button
          onClick={saveProgram}
          className="mt-8 w-full rounded-full bg-red-700 py-5 text-2xl font-bold text-white"
        >
          Save Reward Program
        </button>

      </div>
    </div>
  );
}