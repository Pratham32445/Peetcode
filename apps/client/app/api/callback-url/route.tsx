import { NextRequest } from "next/server";

export const PUT = async (req : NextRequest) => {
    console.log(await req.json());
}