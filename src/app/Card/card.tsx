import React from "react";
import Image from "next/image";

export default function Card() {
  return (
    <>
      
      <div className="flex justify-center p-5">
        <div className="flex border-8 h-96 border-white rounded-3xl w-4/5 shadow-2xl">
          <div className="w-1/2 overflow-hidden rounded-l-2xl">
            <div className="flex flex-col gap-20 h-96">
              <div className="w-full scale-150 h-10 relative rounded-l-3xl py-2">
                <Image
                  src="assets/svgs/Union.svg"
                  width={5000}
                  height={1000}
                  alt={"union"}
                  className="scale-150 scale-y-150"
                />
              </div>
              <div className="flex items-center justify-evenly">
                <Image
                  src={"assets/svgs/Facebook.svg"}
                  width={80}
                  height={80}
                  alt={"facebook"}
                />
                <Image
                  src={"assets/svgs/LinkedIn.svg"}
                  width={80}
                  height={80}
                  alt={"linkedin"}
                />
                <Image
                  src={"assets/svgs/Instagram.svg"}
                  width={80}
                  height={80}
                  alt={"instagram"}
                />
                <Image
                  src={"assets/svgs/Behance.svg"}
                  width={80}
                  height={80}
                  alt={"behance"}
                />
                <Image
                  src={"assets/svgs/Dribble.svg"}
                  width={80}
                  height={80}
                  alt={"dribble"}
                />
              </div>
              <div className="w-full scale-150 h-10 relative rounded-l-3xl py-2">
                <Image
                  src="assets/svgs/Union.svg"
                  width={5000}
                  height={1000}
                  alt={"union"}
                  className="rotate-180 scale-150 scale-y-150"
                />
              </div>
            </div>
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
                <span className="text-4xl px-10 font-medium text-slate-700">07 Ways to get Consistent Clients from Social Media</span>
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
    </>
  );
}