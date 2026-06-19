import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const history =
      await prisma.rewardHistory.create({
        data: {
          customerId: body.customerId,
          rewardTitle: body.rewardTitle,
        },
      });

    return NextResponse.json({
      success: true,
      history,
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      { success: false },
      { status: 500 }
    );
  }
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);

    const customerId = Number(
      searchParams.get("customerId")
    );

    const history =
      await prisma.rewardHistory.findMany({
        where: {
          customerId,
        },
        orderBy: {
          id: "desc",
        },
      });

    return NextResponse.json(history);
  } catch (error) {
    return NextResponse.json([]);
  }
}
export async function PATCH(req: Request) {
  try {
    const { id } = await req.json();

    await prisma.rewardHistory.update({
      where: {
        id,
      },
      data: {
        isRedeemed: true,
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