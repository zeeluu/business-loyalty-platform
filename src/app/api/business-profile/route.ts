import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const profile =
    await prisma.businessProfile.findFirst();

  return NextResponse.json(profile);
}

export async function POST(req: Request) {
  const body = await req.json();

  const profile =
    await prisma.businessProfile.create({
      data: {
        businessName: body.businessName,
        phone: body.phone,
        email: body.email,
        address: body.address,
        website: body.website,
      },
    });

  return NextResponse.json({
    success: true,
    profile,
  });
}