import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const customer = await prisma.customer.create({
      data: {
        name: body.name,
        phone: body.phone,
        email: body.email,
      },
    });

    return NextResponse.json({
      success: true,
      customer,
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

    const id = searchParams.get("id");

    if (id) {
      const customer = await prisma.customer.findUnique({
        where: {
          id: Number(id),
        },
      });

      return NextResponse.json(customer);
    }

    const customers = await prisma.customer.findMany({
      orderBy: {
        id: "desc",
      },
    });

    return NextResponse.json(customers);
  } catch (error) {
    return NextResponse.json(
      { success: false },
      { status: 500 }
    );
  }
}
export async function DELETE(req: Request) {
  try {
    const { id } = await req.json();

    await prisma.customer.delete({
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
    const { id } = await req.json();

    const customer = await prisma.customer.update({
      where: {
        id,
      },
      data: {
        stamps: {
          increment: 1,
        },
      },
    });

    return NextResponse.json({
      success: true,
      customer,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false },
      { status: 500 }
    );
  }
}