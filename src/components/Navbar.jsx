"use client";
import { LinkedInIcon, GithubIcon, MenuIcon } from "@/public/Icons";

const Navbar = () => {
  return (
    <div className="flex bg-[#0C0C1D]">
      <div className="bg-white rounded-full p-2">
        <MenuIcon />
      </div>
      <div className="transition ease-in-out   hover:scale-125  duration-300 cursor-pointer ">
        <LinkedInIcon />
        <GithubIcon />
      </div>
    </div>
  );
};

export default Navbar;
