import { faSignIn } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="p-2 flex bg-emerald-300 justify-between items-center">
      <Link href={"#"}>
        <Image 
          src={"/images/logo.png"}
          alt="Logo"
          width={60}
          height={60}
        />
      </Link>

      <ul className="flex gap-5 pr-10">
        <li>
          <Link href={"#"} className="p-2 ">
            Assets
          </Link>
        </li>
        <li>
          <Link href={"#"} className="p-2 ">
            Categories
          </Link>
        </li>
        <li>
          <Link href={"#"} className="p-2 ">
            Contact
          </Link>
        </li>
        <li>
          <Link href={"#"} className="p-2 ">
            Sign In <FontAwesomeIcon icon={faSignIn} className="text-white" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
