"use server";
import { NextRequest, NextResponse } from "next/server";
import { usersTable } from "@/db/schema"
import { db } from '@/db/index'
import { and, eq, gt } from 'drizzle-orm'


export async function POST(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url);
        const token = searchParams.get("token") as string

        console.log(token)
        const result = (await db.select().from(usersTable).where(and(
            eq(usersTable.verifyToken, token),
            gt(usersTable.verifyTokenExpiry, new Date().toISOString())
        )))[0] as UserFetched

        if (result) {
            await db.update(usersTable).set({
                isVerified: true,
                verifyToken: undefined,
                verifyTokenExpiry: undefined
            }).where(eq(usersTable.email, result.email))
        } else {
            console.log("User not found")
            return NextResponse.json({ message: "User not found" }, { status: 400 })
        }

        return NextResponse.json({ message: "Verified Successfully" }, { status: 201 })
    } catch (error: any) {
        console.log(error)
        return NextResponse.json({ message: error.message }, { status: 500 })
    }
}


