
"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import ScratchCard from "react-scratchcard-v2";

export default function ScratchPage() {
  const [reward, setReward] = useState("");
  const params = useParams();

  const scratchCard = async () => {
    const rewards = [
      "🎁 Free Coffee",
      "🎉 10% Discount",
      "⭐ 20 Bonus Points",
      "🎁 Free Product",
      "😢 Better Luck Next Time",
    ];

    const randomReward =
      rewards[
        Math.floor(
          Math.random() * rewards.length
        )
      ];

    setReward(randomReward);

    await fetch("/api/reward-history", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        customerId: Number(params.id),
        rewardTitle: randomReward,
      }),
    });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100">
      <div className="rounded-2xl bg-white p-10 shadow text-center">

        <h1 className="mb-6 text-3xl font-bold">
          🎁 Scratch Card
        </h1>

        <button
          onClick={scratchCard}
          className="rounded-xl bg-purple-600 px-6 py-3 text-white"
        >
          Scratch Now
        </button>

        {reward && (
          <div className="mt-6 text-2xl font-bold">
            {reward}
          </div>
        )}

      </div>
    </div>
  );
}