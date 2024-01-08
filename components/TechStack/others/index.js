import React from "react";

export default function Others() {
  const canva = [
    { canvaImg: "/Images/icons/canva.png" },
    { canvaImg: "/Images/icons/figma.png" },
    { canvaImg: "/Images/icons/vercel.jfif" },
    { canvaImg: "/Images/icons/git.png" },
    { canvaImg: "/Images/icons/github.png" },
    { canvaImg: "/Images/icons/linux.png" },
    
  ];
  return (
    <div className="w-[90%] md:w-[70%] lg:w-[50%] mx-auto">
      <h2 className="text-white text-center text-[3.4vh] my-[5vh]">Canva</h2>
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
