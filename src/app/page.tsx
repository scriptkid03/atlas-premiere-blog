import { time } from "console";
import Image from "next/image";
import { title } from "process";

export default function Home() {

  const data = [
    {
      imageSrc: "/assets/images/UIUX.jpg",
      imageAlt: "",
      title: "Freelancing 101",
      author: "Charley Den",
      description: "Enhance UX: Designing Better UX/UI",
      time: "16 Min Read",
      date: "23-05-2023"
    },
    {
      imageSrc: "/assets/images/investments.jpg",
      imageAlt: "",
      title: "Freelancing 101",
      author: "Breth Matthew",
      description: "Case Study: FlipX, an Investment Attraction Startup",
      time: "8 Min Read",
      date: "12-03-2023"
    },
    {
      imageSrc: "/assets/images/digitalPresence.jpg",
      imageAlt: "",
      title: "Freelancing 101",
      author: "Lily Bella",
      description: "Mastering Startup Branding: Expanding Digital Presence",
      time: "12 Min Read",
      date: "22-05-2023"
    },
    {
      imageSrc: "/assets/images/productivity.jpg",
      imageAlt: "",
      title: "Freelancing 101",
      author: "Gigi Selena",
      description: "Designing for Productivity: Efficiency Rules",
      time: "27 Min Read",
      date: "05-11-2012"
    },
    {
      imageSrc: "/assets/images/career.jpg",
      imageAlt: "",
      title: "Freelancing 101",
      author: "David Travis",
      description: "Kickstart your UI/UX design career?",
      time: "27 Min Read",
      date: "05-11-2012"
    },
    {
      imageSrc: "/assets/images/firstImpressions.jpg",
      imageAlt: "",
      title: "Freelancing 101",
      author: "Smith Jack",
      description: "Designing Impression: The Power of First Impressions",
      time: "45 Min Read",
      date: "25-12-2023"
    },
  ]
  
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
      <div className="flex justify-center p-5">
        <div className="flex flex-wrap h-auto w-4/5 justify-between gap-10">
          {data.map((card, index) => (
            <div key={index} className="flex flex-col border-8 h-[500px] border-white rounded-3xl w-[30%] shadow-2xl">
              <div className="h-1/2 overflow-hidden rounded-2xl">
                <div>
                  <Image
                    src={card.imageSrc}
                    width={600}
                    height={400}
                    alt={card.imageAlt}
                    priority={true}
                    className="h-full w-full rounded-2xl"
                  />
                </div>
              </div>
              <div className=" flex flex-col justify-between h-1/2 pt-5 p-2">
                <div className="flex gap-4 items-center h-5 text-sm text-gray-500 font-medium">
                  <span>{card.title}</span>
                  <Image
                    src="assets/svgs/Ellipse.svg"
                    width={10}
                    height={10}
                    alt={"ellipse"}
                  />
                  <span>{card.author}</span>
                </div>
                <div className="flex justify-center items-center">
                  <span className="text-2xl p-5 font-medium text-slate-700">{card.description}</span>
                </div>
                <div className="flex items-center h-5 gap-4 text-sm text-gray-500 font-medium">
                  <span>{card.time}</span>
                  <Image 
                    src="assets/svgs/Ellipse.svg"
                    width={10}
                    height={10}
                    alt={"ellipse"}
                  />
                  <span className="tracking-wider">{card.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
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
    </main>
  );
}
