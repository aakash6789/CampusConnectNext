import connect from "@/dbConfig/dbConfig";
import User from "@/models/userModel.js"
import bcryptjs from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";
import multerMiddleware from "@/helpers/multer";
connect();

export async function POST(request:NextRequest){
    try{
    
     multerMiddleware(request, () => {
        // Logic for handling the uploaded file
        const uploadedFile = request?.file; // Access the uploaded file details
    
        // Send response
        return NextResponse.json({reqBody},{status:200});
    });
    const reqBody= await request.json();
    console.log(request);
    return NextResponse.json({reqBody},{status:200});
    }
    catch(error:any){
     console.log(error);
     return NextResponse.json({error:error.message},{status:500})
    }

}