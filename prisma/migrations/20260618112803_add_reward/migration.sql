-- CreateTable
CREATE TABLE "Reward" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "requiredStamps" INTEGER NOT NULL,
    "rewardType" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Reward_pkey" PRIMARY KEY ("id")
);
