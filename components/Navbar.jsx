import { faBars, faSignIn } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="p-2 flex bg-emerald-300 justify-between items-center">
      <Link href={"#"}>
        <Image src={"/images/logo.png"} alt="Logo" width={60} height={60} />
      </Link>

      <button className="border p-2 py-1 rounded border-gray-500 text-gray-500 hidden max-sm:block">
       <FontAwesomeIcon icon={faBars} /> 
      </button>

      <ul className="flex fixed max-sm:w-full max-sm:h-dvh max-sm:top-0 max-sm:left-0 max-sm:bg-emerald-300 max-sm:flex-col max-sm:justify-center max-sm:items-center max-sm:bg-opacity-70 transition-all max-sm:-translate-x-full sm:static gap-5 pr-10">
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
