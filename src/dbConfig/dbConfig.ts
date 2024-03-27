import { error } from "console";
import mongoose from "mongoose";
import { DB_NAME } from "@/constants/constants";
export default async function connect(){
    try {
        await mongoose.connect(`${process.env.MONGO_URL!}/${DB_NAME}`);
        const connection=mongoose.connection;

        connection.on('connected',()=>{
            console.log("MongoDB connected successfully")
        })
        connection.on('error',(error)=>{
            console.log("MongoDB connection error ",error);
        })
        
    } catch (error) {
        console.log("Somehing went wrong while connecting with DB ",error);
    }
}