"use client";
import {
  faBars,
  faImages,
  faSignIn,
  faSignOut,
  faTimes,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { signOut } from "next-auth/react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };

  // const session = useSession();
  const { data: session, status } = useSession();

  return (
    <nav className="p-2 flex bg-emerald-300 justify-between items-center">
      <Link href={"/"} className="z-50">
        <Image src={"/images/logo.png"} alt="Logo" width={60} height={60} />
      </Link>

      <button
        onClick={handleOpen}
        className="border z-50 p-2 py-1 rounded border-gray-500 text-gray-500 hidden max-sm:block"
      >
        <FontAwesomeIcon icon={!open ? faBars : faTimes} />
      </button>

      <ul
        className={`flex z-40 fixed max-sm:w-full max-sm:h-dvh max-sm:top-0 max-sm:left-0 max-sm:bg-emerald-300 max-sm:flex-col max-sm:justify-center max-sm:items-center max-sm:bg-opacity-70 transition-all ${
          !open ? "max-sm:-translate-x-full" : ""
        } sm:static gap-5 pr-10`}
      >
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
        {status != "authenticated" ? (
          <li>
            <Link href={"/signin"} className="p-2 ">
              Sign In <FontAwesomeIcon icon={faSignIn} className="text-white" />
            </Link>
          </li>
        ) : (
          <>
            <li>
              <Link href={"/profile"} className="p-2 ">
                Profile
                <FontAwesomeIcon icon={faUserCircle} className="text-white" />
              </Link>
            </li>
            <li>
              <Link href={"/signin"} className="p-2 ">
                Uploads
                <FontAwesomeIcon icon={faImages} className="text-white" />
              </Link>
            </li>
            <li>
              <button onClick={signOut}  className="inline-block">
                Sign Out
                <FontAwesomeIcon icon={faSignOut} className="text-white" />
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
