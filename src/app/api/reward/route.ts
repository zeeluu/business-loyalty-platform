import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const reward = await prisma.reward.create({
      data: {
        title: body.title,
        requiredStamps: body.requiredStamps,
        rewardType: body.rewardType,
      },
    });

    return NextResponse.json({
      success: true,
      reward,
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      { success: false },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const rewards = await prisma.reward.findMany({
      orderBy: {
        id: "desc",
      },
    });

    return NextResponse.json(rewards);
  } catch (error) {
    return NextResponse.json(
      [],
      { status: 500 }
    );
  }
}
export async function DELETE(req: Request) {
  try {
    const { id } = await req.json();

    await prisma.reward.delete({
      where: {
        id,
      },
    });

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false },
      { status: 500 }
    );
  }
}
export async function PATCH(req: Request) {
  try {
    const {
      id,
      title,
      requiredStamps,
      rewardType,
    } = await req.json();

    const reward =
      await prisma.reward.update({
        where: {
          id,
        },
        data: {
          title,
          requiredStamps,
          rewardType,
        },
      });

    return NextResponse.json({
      success: true,
      reward,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false },
      { status: 500 }
    );
  }
}