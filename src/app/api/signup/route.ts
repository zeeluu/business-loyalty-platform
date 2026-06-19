import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const hashedPassword = await bcrypt.hash(
      body.password,
      10
    );

    const user = await prisma.user.create({
      data: {
        name: body.name,
        email: body.email,
        password: hashedPassword,
      },
    });

    return NextResponse.json({
      success: true,
      user,
    });
  } catch (error) {
    console.log("SIGNUP ERROR:", error);

    return NextResponse.json(
      { success: false },
      { status: 500 }
     );
}
}