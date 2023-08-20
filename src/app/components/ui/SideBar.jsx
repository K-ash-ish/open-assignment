"use client";
import Image from "next/image";
import Link from "next/link";
import NavItem from "./NavItem";
import { navItems } from "@/app/constant";
import { useState } from "react";

function SideBar() {
  const [sidebar, setSidebar] = useState(false);

  return (
    <nav
      className={`md:w-[220px] md:min-h-screen ${
        sidebar ? "h-[400px]" : "h-20"
      } w-4/5  rounded-xl capitalize bg-black text-white flex flex-col justify-around items-center px-8 transition-all ease-in duration-500`}
    >
      <div className="flex flex-col md:gap-10 gap-4 h-3/5 w-full  ">
        <div className="flex justify-between mt-2 md:m-0">
          <h1 className="text-3xl font-bold ">Board.</h1>
          <Image
            width={20}
            height={20}
            alt="hamburger"
            src={"/bars-solid.svg"}
            className="cursor-pointer md:hidden visible w-auto h-auto"
            onClick={() => {
              setSidebar(!sidebar);
            }}
          />
        </div>
        <div
          className={`${
            sidebar
              ? "transition-all transform translate-x-0 visible "
              : "transition-all transform -translate-x-full md:translate-x-0 invisible"
          } md:visible md:flex flex-col gap-4 font-extralight ease-in-out duration-1000`}
        >
          {navItems.map((item, index) => (
            <NavItem
              key={index}
              className="font-semibold"
              icon={item.icon}
              name={item.name}
              active={item.active}
            />
          ))}
        </div>
      </div>
      <div
        className={`${
          sidebar
            ? "transition-all transform translate-x-0 visible "
            : "transition-all transform -translate-x-full md:translate-x-0 invisible"
        } w-full flex flex-col justify-center text-xs  h-20 md:gap-3 gap-1`}
      >
        <Link href={"/"}>Help</Link>
        <Link href={"/"}>Contact Us</Link>
      </div>
    </nav>
  );
}

export default SideBar;
