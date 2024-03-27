import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import multer from "multer";
import {upload} from "@/helpers/multer.js"
export function middleware(request:NextRequest){
  const path=request.nextUrl.pathname;
  
}

export const config={
    matcher:[
        '/signup'
    ]
}