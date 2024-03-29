import { inter } from "@/styles/fonts";
import { ShoppingCartIcon, UserIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import HeaderItem from "./HeaderItem";

export default function Header() {
  return (
    <header
      className={clsx([
        "w-full h-nav-header relative flex justify-end items-center px-40 border-b border-gray-200",
        inter.className,
      ])}
    >
      <div className="flex gap-x-8">
        <HeaderItem icon={<UserIcon className="w-5 h-5" />} text="My Profile" />
        <HeaderItem icon={<ShoppingCartIcon className="w-5 h-5" />} />
        <HeaderItem text="Items" />
        <HeaderItem text="$0.00" />
      </div>
    </header>
  );
}
