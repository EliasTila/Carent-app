"use client"


import React from 'react'
import { signIn, signOut, useSession } from "next-auth/react";
import Link from 'next/link';

const Register = () => {
const { data: session } = useSession();


    if(session){
        return(<div className="flex flex-col items-center justify-center min-h-screen bg-white text-black space-y-6">
  <h1 className="text-3xl font-semibold">
    Welcome, {session?.user?.name}
  </h1>
  <button
    onClick={() => signOut()}
    className="bg-black text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-gray-800 transition"
  >
    Sign out
  </button>
  <div className="flex items-center space-x-1 text-lg">
    <span>Go back</span>
    <Link href="/">
      <span className="font-bold underline cursor-pointer">home</span>
    </Link>
  </div>
</div>)
    }

    return(<div className="flex flex-col justify-center items-center min-h-screen bg-white text-black gap-6 px-4 text-center">
  <p className="text-xl font-semibold max-w-md">
    Discover all of our features by logging in!
  </p>
  <button
    onClick={() => signIn('github')}
    className="w-[200px] h-[80px] bg-black text-white rounded-md font-bold text-[1.5em] hover:bg-gray-800 transition"
  >
    Login with GitHub
  </button>
</div>
)
  
}

export default Register
