import React from "react";
import Image from "next/image";

export default function Footer(){
  
  return(
    <div className="flex flex-col h-[500px] w-full bg-[#294F74] justify-center items-center">
        <div className="flex flex-col justify-between items-center bg-white w-4/5 h-4/5 rounded-3xl">
          <div className="m-10 flex justify-between h-44 w-4/5">
            <div className="flex flex-col justify-between">
              <div className="flex flex-col gap-2">
                <span className="text-slate-800 font-bold">Say Hello!</span>
                <span className="text-slate-600">Atlaspremier@gmail.com</span>
                <div className="flex gap-3">
                  <div className="flex justify-center items-center h-10 w-10 rounded-md bg-gray-100">
                    <Image
                      src={"assets/svgs/ig.svg"}
                      width={24}
                      height={24}
                      alt={"ig"}
                    />
                  </div>
                  <div className="flex justify-center items-center h-10 w-10 rounded-md bg-gray-100">
                    <Image
                      src={"assets/svgs/fb.svg"}
                      width={20}
                      height={20}
                      alt={"fb"}
                    />
                  </div>
                  <div className="flex justify-center items-center h-10 w-10 rounded-md bg-gray-100">
                  <Image
                    src={"assets/svgs/twitter.svg"}
                    width={20}
                    height={20}
                    alt={"twitter"}
                  />
                </div>
                <div className="flex justify-center items-center h-10 w-10 rounded-md bg-gray-100">
                  <Image
                    src={"assets/svgs/lIn.svg"}
                    width={23}
                    height={23}
                    alt={"linkedin"}
                  />
                </div>
                </div>
              </div>
              <div>
                <span className="text-gray-500 font-light text-xl">
                  NewYork, US
                </span>
              </div>
            </div>
            <div className="flex flex-col justify-between">
              <div className="flex gap-10 text-slate-600">
                <div className="flex flex-col gap-3">
                  <span>Home</span>
                  <span>About Us</span>
                  <span>Work</span>
                </div>
                <div className="flex flex-col gap-3">
                  <span>Services</span>
                  <span>Contact Us</span>
                </div>
              </div>
              <div>
                <span className="text-gray-500 font-light">
                  Atlas Premier. All Rights Reserved
                </span>
              </div>
            </div>
          </div>
          <div className="-mb-5">
            <span className="text-9xl font-extrabold text-[#294F74]">
              Atlas Premier
            </span>
          </div>
        </div>
      </div>
  );
}

export function PreFooter(){
  return(
    <div className="flex justify-center p-20">
        <div className="max-w-6xl bg-gradient-to-b from-[#2F5478] to-[#22405C] rounded-3xl overflow-hidden">
          <div>
            <Image
              src="assets/svgs/Union.svg"
              width={5000}
              height={155}
              alt={"union"}
              className=""
            />
          </div>
          <div className="flex justify-evenly h-60">
            <div className="flex flex-col text-white justify-center">
              <div className="text-5xl">
                <span >
                  Transforming your <br />
                </span>
                <span className="font-bold">Ideas into Reality</span>
              </div>
              <div>
                <span>Let's build something extraordinary together to  captivate your audience.</span>
              </div>
            </div>
            <div className="h-60 w-60 border border-white rounded-full flex justify-center items-center text-center text-white font-semibold">
              <span>Let's Work <br />Together!</span>
            </div>
          </div>
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
      </div>
  );
}