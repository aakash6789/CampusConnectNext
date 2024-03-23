"use client";
import Link from "next/link";
import React ,{useEffect, useState} from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";
import {useDropzone} from 'react-dropzone';
export default function SignupPage(){
    const router=useRouter();
    interface User{
        username:string;
        email:string;
        password:string
    }
    const initialState:User={
        username:"",
        email:"",
        password:""
    }
    const [user,setUser]=useState<User>(initialState);
   const [buttonDisabled,setButtonDisabled]=useState<boolean>(false);
   const [loading,setLoading]=useState<boolean>(false);
   const register=async ()=>{
    try {
        setLoading(true);
        const response=await axios.post("/api/users/signup",user);
        console.log(response.data);
        toast.success("Registration sucessfull")
        router.push("/login");
    } catch (error) {
        console.log("Signup failed",error);
    }
    finally{
        setLoading(false);

    }

   }
   useEffect(()=>{
    if(user.email.length>0 && user.password.length>0 && user.username.length>0){
        setButtonDisabled(false);
    }else{
        setButtonDisabled(true);
    }
   },[user])
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>{loading?"Processing":""}</h1>
                 <hr></hr>
                 <label htmlFor="username" className="my-2 text-left">username</label>
                 <input id="username" className="text-black p-2 border rounded-lg mb:4 border-gray-300 focus:outline-none focus:border-gray-600 " onChange={(e)=>setUser({...user,username:e.target.value})}/>
                 <label htmlFor="email" className="my-2">email</label>
                 <input id="email" className="text-black p-2 border rounded-lg mb:4 border-gray-300 focus:outline-none focus:border-gray-600 " onChange={(e)=>setUser({...user,email:e.target.value})}/>
        <label htmlFor="password" className="my-2">password</label>
                 <input id="password" type="password" className="text-black p-2 border rounded-lg mb:4 border-gray-300 focus:outline-none focus:border-gray-600 " onChange={(e)=>setUser({...user,password:e.target.value})}/>
                 <label className="mt-4">Choose profile picture</label>
                 <input type="file" className="ml-[15%]"></input>
                 <button className="mt-[3%]"   onClick={ register}>{buttonDisabled?"Enter details":"Signup"}</button>
                 <p className="mt-[3%]">Have a account<Link href="/login" className=" underline mx-1 ">login</Link>instead?</p>
        </div>
    );
}


