import React, { Dispatch, ProfilerProps, SetStateAction } from "react";
import Image from "next/image";
import { AiFillGithub } from "react-icons/ai";
import Link from "next/link";

const Nav = (props) => {
  return (
    <>
      <nav>
        <div className="h-6 w-24 relative">
          <h1>LOGO</h1>
          {/* <Image
            layout="fill"
            objectFit="contain"
            priority
            src={"logo.svg"}
            alt="logo"
            className="h-full w-full"
          /> */}
        </div>

        <div className="flex xxsm:gap-4 md:gap-7 items-center">


          <div className="xxsm:w-6 xxsm:h-6 sm:w-7 sm:h-7 md:w-9 md:h-9 rounded-full bg-opacity-0 hover:bg-mande-gray-100  flex justify-center items-center">
            <Link href="https://github.com/JAPECorp/GhData-JoinWailtList" passHref={true}>
              <AiFillGithub className="text-mande-green-bright text-2xl" />
            </Link>
          </div>

          {/* <div className="hidden md:block">
            <button
              onClick={() =>{}}
              className="small"
            >
              Join our waitlist
            </button>
          </div> */}
        </div>
      </nav>
    </>
  );
};

export default Nav;
