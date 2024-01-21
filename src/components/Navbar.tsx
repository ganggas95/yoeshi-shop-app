import { inter } from "@/styles/fonts";
import clsx from "clsx";
import NavbarBrandIcon from "./NavbarBrandIcon";
import NavbarMenu from "./NavbarMenu";

export default function Navbar() {
  return (
    <nav
      className={clsx([
        "w-full h-navbar relative flex justify-between items-center px-40",
        inter.className,
      ])}
    >
      <a className="flex gap-x-2 items-center">
        <NavbarBrandIcon width={44} height={44} />
        <span>Yoeshi Fashion</span>
      </a>
      <NavbarMenu />
    </nav>
  );
}
