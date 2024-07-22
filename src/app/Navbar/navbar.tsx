import React from "react";
import Image from "next/image";

export default function Navbar() {

  return (
    <>
      <div>
        <button>
          <Image
            src="assets/svgs/Union.svg"
            width={5000}
            height={155}
            alt={"union"} />
        </button>
      </div><div className="flex justify-center">
        <div className="flex fixed z-50 right-0 left-0 justify-center items-center -mt-20">
          <button className="flex items-center justify-center border border-gray-300 p-[18px] rounded-l-full bg-white">
            <Image
              src="assets/svgs/A.svg"
              width={26}
              height={26}
              alt={"a"} />
          </button>
          <div className="flex items-center justify-center border border-gray-300 py-5 px-[18px] rounded-r-full bg-white">
            <Image
              src="assets/svgs/menu.svg"
              width={25}
              height={25}
              alt={"menu"} />
          </div>
        </div>
      </div>
    </>
  );
}

export function BlogNav() {
  return (
    <div className="flex items-center justify-between p-10">
      <h2 className="font-bold text-6xl text-slate-700">Blogs</h2>
      <div className="flex justify-between gap-8">
        <span className="text-cyan-800 p-2 font-semibold border border-cyan-800 rounded-2xl bg-slate-100">All Blogs</span>
        <span className="p-2 text-gray-400">Trends</span>
        <span className="p-2 text-gray-400">Research</span>
        <span className="p-2 text-gray-400">In-house Knowledge</span>
      </div>
    </div>
  );
}