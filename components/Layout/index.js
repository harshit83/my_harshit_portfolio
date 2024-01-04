import React, { useState, useEffect } from "react";
import Head from "next/head";
import Navbar from "../Navbar";
import Footer from "../Footer";
import CanvasBackground from "../CanvasBackground";
import dynamic from "next/dynamic";
import loader from "../../public/assets-json/loader.json";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function Layout({ children }) {

  const [isloading, setLoading] = useState(true);

  useEffect(()=>{
    const timer = setTimeout(()=>{
        setLoading(false);
    },3000)
    return ()=>clearTimeout(timer);
  },[])

  return (
    <>
      {isloading ? (
        <div className="flex flex-row justify-center items-center h-[100vh]">
            <CanvasBackground className="canvas-background"/>
            <Lottie animationData={loader} className="w-[60vh]"/>
        </div>
      ) : (
        <div>
          <Head>
            <title>Gaurav Madan</title>
          </Head>

          <header>
            <Navbar />
          </header>

          <main>{children}</main>

          <footer>
            <Footer />
          </footer>
        </div>
      )}
    </>
  );
}
