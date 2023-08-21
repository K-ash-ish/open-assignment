import Image from "next/image";
import Card from "./ui/Card";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { getProviders } from "next-auth/react";
import OAuth from "./ui/OAuth";
import { redirect } from "next/navigation";
async function Login() {
  const session = await getServerSession(authOptions);
  const providers = await getProviders();
  if (session) {
    return redirect("/dashboard");
  }

  return (
    <div className="h-full flex md:flex-row flex-col-reverse">
      <div className="md:w-1/3 w-full md:h-full h-1/3 bg-black text-white flex justify-center items-center capitalize">
        <h1 className="text-5xl">board.</h1>
      </div>
      <div className="md:w-4/5 h-4/5 md:h-full flex flex-col justify-center items-center bg-[#f5f5f5] ">
        <div className="400 h-[450px] justify-around flex flex-col">
          <div>
            <h1 className="text-3xl font-bold">Sign In</h1>
            <p className="text-xs ">Sign in to your account</p>
          </div>
          <div>
            <OAuth providers={providers} />
          </div>
          <Card />
        </div>
      </div>
    </div>
  );
}

export default Login;
