import Image from "next/image";

export default function Home() {
  
  return (
    <main className="bg-stone-50">
      <div>
        <div>
          <button>
            <Image 
              src="assets/svgs/Union.svg" 
              width={5000} 
              height={155} 
              alt={"union"} 
            />
          </button>
        </div>
        <div className="flex justify-center">
          <div className="flex fixed z-50 right-0 left-0 justify-center items-center -mt-20">
            <button className="flex items-center justify-center border border-gray-300 p-[18px] rounded-l-full bg-white">
              <Image 
                src="assets/svgs/A.svg" 
                width={26} 
                height={26} 
                alt={"a"} 
              />
            </button>
            <div className="flex items-center justify-center border border-gray-300 py-5 px-[18px] rounded-r-full bg-white">
              <Image 
                src="assets/svgs/menu.svg" 
                width={25} 
                height={25} 
                alt={"menu"} 
              />
            </div>
          </div>
        </div>
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
                  "Immerse yourself in the latest knowledge and research from our team of software engineers and design professionals.          </span>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="flex border-8 h-96 border-white rounded-3xl w-4/6 shadow-2xl">
              <div className="w-1/2 overflow-hidden rounded-l-2xl">
                <Image 
                  src="assets/svgs/MacBook.svg" 
                  width={500} 
                  height={400} 
                  alt={"macbook"} 
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
                    <span className="text-3xl px-10 font-medium text-slate-700">07 Ways to get Consistent Clients from Social Media</span>
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
      </div>
      <div className="flex items-center justify-between p-10">
        <h2 className="font-bold text-6xl text-slate-700">Blogs</h2>
        <div className="flex justify-between gap-8">
          <span className="text-cyan-800 p-2 border border-cyan-800 rounded-2xl bg-slate-100">All Blogs</span>
          <span className="p-2 text-gray-400">Trends</span>
          <span className="p-2 text-gray-400">Research</span>
          <span className="p-2 text-gray-400">In-house Knowledge</span>
        </div>
      </div>
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
      <div>
        <div className="flex border-8 h-2/5 border-white rounded-3xl w-1/5 shadow-2xl"></div>
      </div>
    </main>
  );
}
