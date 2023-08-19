import Link from "next/link";
import InputUi from "./InputUi";

function Card() {
  return (
    <div className="w-[340px] h-[320px] flex flex-col justify-around ">
      <form
        action=""
        className="flex flex-col justify-around items-center h-4/5  bg-white rounded-2xl py-6"
      >
        <InputUi type={"email"} name="email address" />
        <InputUi type={"password"} name="password" />

        <Link href={"/"} className="w-4/5 text-xs text-blue-500">
          Forget password?
        </Link>
        <button
          type="submit"
          className="bg-black text-white w-4/5 rounded-md h-8 text-sm"
        >
          Sign In
        </button>
      </form>
      <p className="self-center text-xs">
        Dont' have an account?{" "}
        <span className="text-blue-500">Register Here</span>
      </p>
    </div>
  );
}

export default Card;
