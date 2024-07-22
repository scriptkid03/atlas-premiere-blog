import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <>
      <div className="flex flex-col gap-5 mt-5">
        <div className="flex justify-center">
          <div className="flex justify-center items-center w-[80%]">
            <div className="w-2/3">
              <span className="font-bold text-7xl text-wrap text-slate-700">
                Atlas Premiere Knowledge Blogs:
              </span>
            </div>
            <div className="w-1/2">
              <span className="text-2xl text-gray-500">
                "Immerse yourself in the latest knowledge and research from our
                team of software engineers and design professionals.{" "}
              </span>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex border-8 h-96 border-white rounded-3xl w-4/6 shadow-2xl">
            <div className="w-1/2 overflow-hidden rounded-l-2xl">
              <Image
                src="assets/images/MacBook.png"
                width={500}
                height={400}
                alt={"macbook"}
                priority= {true}
                className="rounded-l-3xl scale-125 z-0"
              />
            </div>
            <div className="flex flex-col justify-between w-1/2">
              <div className="">
                <div className="flex items-center h-5 gap-5 text-gray-500 font-medium p-10">
                  <span>FREELANCING 101</span>
                  <Image
                    src="assets/svgs/Ellipse.svg"
                    width={10}
                    height={10}
                    alt={"ellipse"}
                  />
                  <span>Joseph Patrick</span>
                </div>
                <div className="flex">
                  <span className="text-3xl px-10 font-medium text-slate-700">
                    07 Ways to get Consistent Clients from Social Media
                  </span>
                </div>
              </div>
              <div className="flex items-center h-5 gap-5 text-gray-500 font-medium p-10">
                <span>15 Min Read</span>
                <Image
                  src="assets/svgs/Ellipse.svg"
                  width={10}
                  height={10}
                  alt={"ellipse"}
                />
                <span className="tracking-wider">23-05-2023</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <Image
            src="assets/svgs/Union.svg"
            width={5000}
            height={155}
            alt={"union"}
            className="rotate-180"
          />
        </div>
      </div>
    </>
  );
}
