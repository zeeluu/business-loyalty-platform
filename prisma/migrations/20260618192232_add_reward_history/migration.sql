-- CreateTable
CREATE TABLE "RewardHistory" (
    "id" SERIAL NOT NULL,
    "customerId" INTEGER NOT NULL,
    "rewardTitle" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "RewardHistory_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "RewardHistory" ADD CONSTRAINT "RewardHistory_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
