import Image from "next/image";
import Link from "next/link";
import NavItem from "./NavItem";
import { navItems } from "@/app/constant";

function SideBar() {
  return (
    <nav className=" w-1/6 rounded-xl capitalize bg-black text-white flex flex-col justify-around items-center px-8">
      <div className="flex flex-col gap-10 h-3/5 w-full ">
        <h1 className="text-3xl font-semibold ">Board.</h1>
        <div className="flex flex-col gap-4 font-extralight">
          {navItems.map((item) => (
            <NavItem
              className="font-semibold"
              icon={item.icon}
              name={item.name}
              active={item.active}
            />
          ))}
        </div>
      </div>
      <div className="w-full flex flex-col justify-center text-xs  h-20 gap-3">
        <Link href={"/"}>Help</Link>
        <Link href={"/"}>Contact Us</Link>
      </div>
    </nav>
  );
}

export default SideBar;
