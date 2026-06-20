"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function EditRewardPage() {
  const params = useParams();

  const [title, setTitle] = useState("");
  const [requiredStamps, setRequiredStamps] =
    useState(5);
  const [rewardType, setRewardType] =
    useState("");

  useEffect(() => {
    loadReward();
  }, []);

  const loadReward = async () => {
    const res = await fetch("/api/reward");
    const rewards = await res.json();

    const reward = rewards.find(
      (r: any) =>
        r.id === Number(params.id)
    );

    if (reward) {
      setTitle(reward.title);
      setRequiredStamps(
        reward.requiredStamps
      );
      setRewardType(
        reward.rewardType
      );
    }
  };

  const updateReward = async () => {
  const res = await fetch(
    "/api/reward",
    {
      method: "PATCH",
      headers: {
        "Content-Type":
          "application/json",
      },
      body: JSON.stringify({
        id: Number(params.id),
        title,
        requiredStamps,
        rewardType,
      }),
    }
  );

    const data = await res.json();

        if (data.success) {
            alert(
            "🎉 Reward Updated Successfully!"
            );
        } else {
            alert(
            "Failed to Update Reward"
            );
        }
        };

    return (
        <div className="min-h-screen bg-slate-100 p-8">
        <div className="mx-auto max-w-xl rounded-2xl bg-white p-8 shadow">

            <h1 className="mb-6 text-4xl font-bold">
            ✏️ Edit Reward
            </h1>

        <input
          type="text"
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
          placeholder="Reward Name"
          className="mb-4 w-full rounded-xl border p-3"
        />

        <input
          type="number"
          value={requiredStamps}
          onChange={(e) =>
            setRequiredStamps(
              Number(e.target.value)
            )
          }
          className="mb-4 w-full rounded-xl border p-3"
        />

        <input
          type="text"
          value={rewardType}
          onChange={(e) =>
            setRewardType(
              e.target.value
            )
          }
          placeholder="Reward Type"
          className="mb-6 w-full rounded-xl border p-3"
        />

        <button
          onClick={updateReward}
          className="w-full rounded-xl bg-green-600 p-3 text-white"
        >
          Save Changes
        </button>

      </div>
    </div>
  );
}