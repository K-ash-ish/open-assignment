import Image from "next/image";
import React from "react";

function DashboardCard({ icon, cardName, data, classname }) {
  return (
    <div
      className={`${classname} md:w-44 w-28 h-20 rounded-xl flex flex-col justify-center px-4`}
    >
      <Image
        alt={icon}
        src={icon}
        height={20}
        width={20}
        className="self-end w-5 h-5"
      />
      <div className="capitalize self-start">
        <p className="text-xs">{cardName}</p>
        <p className="md:text-base text-sm font-bold">{data}</p>
      </div>
    </div>
  );
}

export default DashboardCard;
