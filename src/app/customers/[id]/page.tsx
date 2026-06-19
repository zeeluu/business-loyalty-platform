import RedeemButton from "./RedeemButton";
import Link from "next/link";
import QRCode from "react-qr-code";

const BASE_URL =
  process.env.NEXT_PUBLIC_APP_URL ||
  "http://localhost:3000";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}


async function getCustomer(id: string) {
  const res = await fetch(
    `${BASE_URL}/api/customer?id=${id}`,
    {
      cache: "no-store",
    }
  );

  return res.json();
}

async function getRewards() {
  const res = await fetch(
    `${BASE_URL}/api/reward`,
    {
      cache: "no-store",
    }
  );

  return res.json();
}
async function getRewardHistory(id: string) {
  const res = await fetch(
    `${BASE_URL}/api/reward-history?customerId=${id}`,
    {
      cache: "no-store",
    }
  );

  return res.json();
}

export default async function CustomerProfile({
  params,
}: PageProps) {
  const { id } = await params;

  const customer = await getCustomer(id);
  const rewards = await getRewards();
  const history = await getRewardHistory(id);

  if (!customer) {
    return <div>Customer Not Found</div>;
  }

  const eligibleRewards = rewards.filter(
    (reward: any) =>
      customer.stamps >= reward.requiredStamps
  );

  const lockedRewards = rewards.filter(
    (reward: any) =>
      customer.stamps < reward.requiredStamps
  );
  const nextReward = rewards
  .sort(
    (a: any, b: any) =>
      a.requiredStamps - b.requiredStamps
  )
  .find(
    (reward: any) =>
      customer.stamps < reward.requiredStamps
  );

const progress = nextReward
  ? (customer.stamps /
      nextReward.requiredStamps) *
    100
  : 100;

const level =
  customer.stamps >= 25
    ? "Gold"
    : customer.stamps >= 10
    ? "Silver"
    : "Bronze";
async function redeemReward(id: number) {
  "use server";

  await fetch(
    `${BASE_URL}/api/reward-history`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    }
  );
}


  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <div className="rounded-2xl bg-white p-8 shadow">

        <h1 className="mb-6 text-4xl font-bold">
          Customer Profile
        </h1>

        <div className="space-y-4">

          <p>
            <strong>ID:</strong> {customer.id}
          </p>

          <p>
            <strong>Name:</strong> {customer.name}
          </p>

          <p>
            <strong>Phone:</strong> {customer.phone}
          </p>

          <p>
            <strong>Email:</strong> {customer.email}
          </p>

          <p>
            <strong>Stamps:</strong> ⭐ {customer.stamps}
          </p>
          <p>
            <strong>Membership:</strong>{" "}
            {level === "Gold" && "🥇 Gold"}
            {level === "Silver" && "🥈 Silver"}
            {level === "Bronze" && "🥉 Bronze"}
          </p>

        </div>
        <div className="mt-8 rounded-xl bg-blue-100 p-6">

  <h2 className="mb-4 text-xl font-bold">
    🎯 Reward Progress
  </h2>

  <div className="h-5 w-full rounded-full bg-gray-300">
    <div
      className="h-5 rounded-full bg-blue-600"
      style={{
        width: `${progress}%`,
      }}
    />
  </div>

  {nextReward ? (
    <p className="mt-3">
      Need{" "}
      {nextReward.requiredStamps -
        customer.stamps}
      {" "}more stamps for{" "}
      <strong>
        {nextReward.title}
      </strong>
    </p>
  ) : (
    <p className="mt-3 text-green-700 font-bold">
      🎉 All Rewards Unlocked
    </p>
  )}

</div>

        <div className="mt-8 rounded-xl bg-green-100 p-4">
          <h2 className="mb-3 text-xl font-bold">
            🎁 Eligible Rewards
          </h2>
          {eligibleRewards.length > 0 && (
            <Link
              href="/scratch"
              className="mt-4 inline-block rounded-xl bg-purple-600 px-5 py-3 text-white"
            >
              🎁 Open Scratch Card
            </Link>
          )}

          {eligibleRewards.length === 0 ? (
            <p>No Rewards Yet</p>
          ) : (
            <ul className="space-y-2">
              {eligibleRewards.map((reward: any) => (
                <li key={reward.id}>
                  ✅ {reward.title}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="mt-6 rounded-xl bg-red-100 p-4">
          <h2 className="mb-3 text-xl font-bold">
            🔒 Locked Rewards
          </h2>

          {lockedRewards.map((reward: any) => (
            <div key={reward.id}>
              🔒 {reward.title}
              {" "}
              (Need {reward.requiredStamps} Stamps)
            </div>
          ))}
        </div>
        <div className="mt-6 rounded-xl bg-yellow-100 p-4">
          <h2 className="mb-3 text-xl font-bold">
            🏆 Reward History
          </h2>

          {history.length === 0 ? (
            <p>No Rewards Claimed Yet</p>
          ) : (
            <ul className="space-y-2">
              {history.map((item: any) => (
                <div
                  key={item.id}
                  className="mb-2 flex items-center justify-between rounded-lg bg-white p-3"
                >
                  <span>
                    ✅ {item.rewardTitle}
                  </span>

                  {item.isRedeemed ? (
                    <span className="rounded-lg bg-green-500 px-3 py-1 text-white">
                      Redeemed
                    </span>
                  ) : (
                    <RedeemButton rewardId={item.id} />
                  )}
                </div>
              ))}
            </ul>
          )}
        </div>
        <div className="mt-8 flex justify-center">
  <div className="rounded-2xl bg-white p-6 shadow">
    <h2 className="mb-4 text-center text-xl font-bold">
      Customer QR
    </h2>
    

    <QRCode
      value={`${BASE_URL}/scan/${customer.id}`}
      size={180}
    />
  </div>
</div>
      </div>
    </div>
  );
}