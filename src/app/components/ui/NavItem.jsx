import Image from "next/image";
import Link from "next/link";

function NavItem({ icon, name, active }) {
  return (
    <Link
      href={`/${name}`}
      className={`flex gap-3 capitalize ${active && "font-semibold"}`}
    >
      <Image
        alt={icon}
        height={15}
        width={15}
        src={icon}
        className="text-white w-auto h-auto"
      />{" "}
      {name}
    </Link>
  );
}

export default NavItem;
