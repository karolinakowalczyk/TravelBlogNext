"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import "../../globals.css";
import VeneziaLandscape from "@/public/images/pexels-jarod-barton.jpg";
import GirlWithSuitcase from "@/public/images/pexels-tranmautritam.jpg";
export default function Home() {
  const router = useRouter();
  const explore = () => {
    if (localStorage.getItem("user")) {
      router.push("/my-posts");
    } else {
      router.push("/login");
    }
  };

  return (
    <div>
      <Image
        src={VeneziaLandscape}
        className="main-image"
        alt="venezia-landscape"
      />
      <div className="d-flex content-div">
        <div className="half cropped">
          <Image
            src={GirlWithSuitcase}
            className="sub-image main-image"
            alt="girl with suitcase"
          />
        </div>
        <div className="half second d-flex flex-column justify-content-center">
          <h1 className="primary">
            <br /> 360 <span>&#176;</span> TRAVEL <br /> INSPIRATIONS
          </h1>
          <p className="mt-5">
            You&apos;re travel lover? It&apos;s perfect place for you! This blog
            is about my travel experiences and tips. Do you want to join this
            trip?
          </p>
          <button className="p-3 mt-5 main-btn" onClick={explore}>
            Expole the Blog
          </button>
        </div>
      </div>
    </div>
  );
}
