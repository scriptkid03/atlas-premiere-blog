import React from "react";
import Image from "next/image";

export default function Blog() {
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
  );
}