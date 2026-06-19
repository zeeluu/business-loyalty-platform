"use client";

import { useEffect, useState } from "react";

export default function RewardsPage() {
  const [rewards, setRewards] = useState<any[]>([]);

  const loadRewards = async () => {
    const res = await fetch("/api/reward");
    const data = await res.json();
    setRewards(data);
  };

  useEffect(() => {
    loadRewards();
  }, []);

  const deleteReward = async (id: number) => {
    const res = await fetch("/api/reward", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });

    const data = await res.json();

    if (data.success) {
      loadRewards();
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <h1 className="mb-8 text-4xl font-bold">
        Rewards
      </h1>

      <div className="rounded-2xl bg-white p-8 shadow">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="p-3 text-left">
                Reward Name
              </th>
              <th className="p-3 text-left">
                Required Stamps
              </th>
              <th className="p-3 text-left">
                Type
              </th>
              <th className="p-3 text-left">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {rewards.map((reward) => (
              <tr
                key={reward.id}
                className="border-b"
              >
                <td className="p-3">
                  {reward.title}
                </td>

                <td className="p-3">
                  {reward.requiredStamps}
                </td>

                <td className="p-3">
                  {reward.rewardType}
                </td>

                <td className="p-3">
                  <button
                    onClick={() =>
                      deleteReward(reward.id)
                    }
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
    </div>
  );
}