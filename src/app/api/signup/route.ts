import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const existingUser = await prisma.user.findUnique({
      where: {
        email: body.email,
      },
    });

    if (existingUser) {
      return NextResponse.json(
        {
          success: false,
          message: "Email already exists",
        },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(
      body.password,
      10
    );

    const user = await prisma.user.create({
      
      data: {
        name: body.name,
        // businessName: body.businessName,
        // phone: body.phone,
        email: body.email,
        password: hashedPassword,
        // role: body.role || "CUSTOMER",
      },
    });
    if ((body.role || "CUSTOMER") === "CUSTOMER") {
      await prisma.customer.create({
        data: {
          name: body.name,
          phone: body.phone || "",
          email: body.email,
        },
      });
    }

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