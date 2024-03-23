"use client";
import Link from "next/link";
import React ,{useState} from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";
export default function LoginPage() {
    const router=useRouter();
    const [loading,setLoading]=useState<boolean>(false);
    interface User{
        email:string;
        password:string
    }
    const initialState:User={
        email:"",
        password:""
    }
    const [user,setUser]=useState<User>(initialState);
       const onlogin=async ()=>{
        try {
            setLoading(true);
            const response=await axios.post("/api/users/login",user);
            console.log(response.data);
            toast.success("Login sucessfull")
            router.push("/profile");
        } catch (error) {
            console.log("Signup failed",error);
        }
        finally{
            setLoading(false);
    
        }
       }
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>{loading?"Loading":""}</h1>
        <label htmlFor="email">email</label>
                 <input id="email" className="text-black p-2 mb-2 border rounded-lg mb:4 border-gray-300 focus:outline-none focus:border-gray-600 " onChange={(e)=>setUser({...user,email:e.target.value})}/>
        <label htmlFor="password">password</label>
                 <input id="password" type="password" className="text-black p-2 border rounded-lg mb:4 border-gray-300 focus:outline-none focus:border-gray-600 " onChange={(e)=>setUser({...user,password:e.target.value})}/>
                 <button className="p-2 mt-4 border rounded-lg mb:4 border-gray-300 focus:outline-none focus:border-gray-600" onClick={onlogin}>Submit</button>     
        </div>
        
    )
}