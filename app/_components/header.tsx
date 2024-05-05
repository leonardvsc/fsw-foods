import Image from "next/image";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex items-center justify-between px-5 py-3">
      <Link href={"/"}>
        <Image src="/logo.png" alt="FSW Foods" width={100} height={30} />
      </Link>
      <Button
        size={"icon"}
        variant={"outline"}
        className="border-none bg-transparent"
      >
        <MenuIcon />
      </Button>
    </div>
  );
};

export default Header;
