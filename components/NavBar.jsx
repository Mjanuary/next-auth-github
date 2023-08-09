import Link from "next/link";
import { ProfileIcon } from "./ProfileIcon";

export const NavBar = () => {
  return (
    <nav className="flex items-center justify-between fixed right-0 left-0 px-8 h-14 bg-blue-700 text-white">
      <Link className="font-bold" href={"/"}>
        TestApp
      </Link>
      <ProfileIcon />
    </nav>
  );
};
