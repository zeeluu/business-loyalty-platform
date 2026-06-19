import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const user = await prisma.user.findUnique({
      where: {
        email: body.email,
      },
    });

    if (!user) {
      return NextResponse.json({
        success: false,
        message: "User not found",
      });
    }

    const isMatch = await bcrypt.compare(
      body.password,
      user.password
    );

    if (!isMatch) {
      return NextResponse.json({
        success: false,
        message: "Invalid Password",
      });
    }

    return NextResponse.json({
      success: true,
      message: "Login Successful",
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Server Error",
      },
      { status: 500 }
    );
  }
}