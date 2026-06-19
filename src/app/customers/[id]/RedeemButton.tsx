"use client";

export default function RedeemButton({
  rewardId,
}: {
  rewardId: number;
}) {
  const redeemReward = async () => {
    const res = await fetch(
      "/api/reward-history",
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: rewardId,
        }),
      }
    );

    const data = await res.json();

    if (data.success) {
      alert("🎉 Reward Redeemed!");
      window.location.reload();
    }
  };

  return (
    <button
      onClick={redeemReward}
      className="rounded-lg bg-blue-500 px-3 py-1 text-white"
    >
      Redeem
    </button>
  );
}