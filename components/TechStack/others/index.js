import React from "react";

export default function Others() {
  const canva = [
    { canvaImg: "/Images/icons/canva.webp" },
    { canvaImg: "/Images/icons/figma.webp" },
    { canvaImg: "/Images/icons/vercel.jfif" },
    { canvaImg: "/Images/icons/git.webp" },
    { canvaImg: "/Images/icons/github.webp" },
    { canvaImg: "/Images/icons/linux.png" },
    
  ];
  return (
    <div className="w-[90%] md:w-[50%] mx-auto">
      <h2 className="text-white text-center text-[3.4vh] my-[3vh]">Canva</h2>
      <div className="flex flex-row flex-wrap justify-center items-center gap-[2vh]">
        {canva.map((item) => (
          <img
            src={item.canvaImg}
            className="w-[12vh] h-[12vh] md:h-[20vh] md:w-[20vh] object-cover rounded-2xl"
            alt=""
          />
        ))}
      </div>
    </div>
  );
}