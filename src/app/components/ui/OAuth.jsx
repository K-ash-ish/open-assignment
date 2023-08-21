"use client";
import Image from "next/image";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

function OAuth({ providers }) {
  return (
    <button
      onClick={() => signIn(providers.google.id)}
      className=" bg-white text-[#858585] text-xs px-2 py-1 rounded-lg flex justify-around items-center"
    >
      <Image
        src={"/google.png"}
        alt="google-log"
        className="mr-2 w-auto h-auto"
        width={10}
        height={10}
      />
      Sign in with google
    </button>
  );
}

export default OAuth;
