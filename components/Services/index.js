import React from 'react';
import dynamic from "next/dynamic";
import appdev from "../../public/assets-json/appdev.json";
import uiux from "../../public/assets-json/uiux.json";
import web from "../../public/assets-json/web.json";
import website from "../../public/assets-json/website.json";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function Services() {
  return (
    <div id="services">
        <h1 className="text-white text-[3vh] md:text-[5vh] font-semibold text-center my-[10vh]">Services</h1>

        <div className='flex flex-row'>
            <Lottie
                animationData={appdev}
            />
            
            <Lottie
                animationData={web}
            />
            <Lottie
                animationData={website}
            />
        </div>


    </div>
  )
}
