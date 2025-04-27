import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4">
      {/* SEARCH BAR */}
      <div className="hidden md:flex items-center text-xs gap-2 rounded-full border border-gray-300 px-2 py-1">
        <Image src={"/search.png"} alt="" width={12} height={12} />
        <input
          type="text"
          placeholder="Search..."
          className="outline-none bg-transparent w-40 text-xs"
        />
      </div>
      {/* ICON AND USER */}
      <div className="flex items-center gap-6 justify-end w-full">
        <div className="bg-white rounded-full  w-7 h-7 flex items-center justify-center cursor-pointer">
          <Image src={"/message.png"} alt="" width={20} height={20} />
        </div>
        <div className="bg-white rounded-full  w-7 h-7 flex items-center justify-center cursor-pointer relative">
          <Image src={"/announcement.png"} alt="" width={20} height={20} />
          <div className="absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-purple-500 text-white rounded-full text-xs">
            1
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-xs font-medium leading-3">Sagor</span>
          <span className="text-[10px] text-gray-500 text-right">admin</span>
        </div>
        <Image
          src={"/avatar.png"}
          alt=""
          width={36}
          height={36}
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default Navbar;
