"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import "../../globals.css";
import VeneziaLandscape from "@/public/images/pexels-jarod-barton/pexels-jarod-barton.webp";
import VeneziaLandscape300 from "@/public/images/pexels-jarod-barton/pexels-jarod-barton_300.webp";
import VeneziaLandscape950 from "@/public/images/pexels-jarod-barton/pexels-jarod-barton_950.webp";
import VeneziaLandscape1320 from "@/public/images/pexels-jarod-barton/pexels-jarod-barton_1320.webp";
import VeneziaLandscape1600 from "@/public/images/pexels-jarod-barton/pexels-jarod-barton_1600.webp";
import VeneziaLandscape1840 from "@/public/images/pexels-jarod-barton/pexels-jarod-barton_1840.webp";
import VeneziaLandscape2048 from "@/public/images/pexels-jarod-barton/pexels-jarod-barton_2048.webp";
import GirlWithSuitcase from "@/public/images/pexels-tranmautritam/pexels-tranmautritam.webp";
import GirlWithSuitcase300 from "@/public/images/pexels-tranmautritam/pexels-tranmautritam_300.webp";
import GirlWithSuitcase720 from "@/public/images/pexels-tranmautritam/pexels-tranmautritam_720.webp";
import GirlWithSuitcase980 from "@/public/images/pexels-tranmautritam/pexels-tranmautritam_980.webp";
import GirlWithSuitcase1180 from "@/public/images/pexels-tranmautritam/pexels-tranmautritam_1180.webp";
import GirlWithSuitcase1350 from "@/public/images/pexels-tranmautritam/pexels-tranmautritam_1350.webp";
import GirlWithSuitcase1500 from "@/public/images/pexels-tranmautritam/pexels-tranmautritam_1500.webp";
import GirlWithSuitcase1650 from "@/public/images/pexels-tranmautritam/pexels-tranmautritam_1650.webp";
import GirlWithSuitcase1800 from "@/public/images/pexels-tranmautritam/pexels-tranmautritam_1800.webp";
import GirlWithSuitcase1930 from "@/public/images/pexels-tranmautritam/pexels-tranmautritam_1930.webp";
import GirlWithSuitcase2048 from "@/public/images/pexels-tranmautritam/pexels-tranmautritam_2048.webp";

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
        width={4088}
        height={3066}
        srcSet={`${VeneziaLandscape300} 300w, ${VeneziaLandscape950} 950w, ${VeneziaLandscape1320} 1320w, ${VeneziaLandscape1600} 1600w, ${VeneziaLandscape1840} 1840w, ${VeneziaLandscape2048} 2048w`}
      />
      <div className="d-flex content-div">
        <div className="half cropped">
          <Image
            src={GirlWithSuitcase}
            className="sub-image main-image"
            alt="girl with suitcase"
            width={2725}
            height={4088}
            loading = 'eager'
            srcSet={`${GirlWithSuitcase300} 300w, ${GirlWithSuitcase720} 720w, ${GirlWithSuitcase980} 980w, ${GirlWithSuitcase1180} 1180w, ${GirlWithSuitcase1350} 1350w, ${GirlWithSuitcase1500} 1500w ${GirlWithSuitcase1650} 1650w, ${GirlWithSuitcase1800} 1800w, ${GirlWithSuitcase1930} 1930w, ${GirlWithSuitcase2048} 2048w`}
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
          <p className="fw-bold">Discover a World of Adventures:</p>
          <p>
            At TravelBlog, we believe that travel is not just a hobby; it&apos;s
            a way of life. Our travel blog showcases a diverse range of
            destinations, from the snow-capped peaks of the Himalayas to the
            sun-kissed beaches of the Maldives. Whether you seek
            adrenaline-pumping escapades, cultural immersions, or serene
            retreats, our blog offers a vast array of travel guides and
            itineraries to suit every explorer&apos;s taste.
          </p>
          <p className="fw-bold">Immerse Yourself in Engaging Narratives:</p>
          <p>
            We pride ourselves on our engaging storytelling, which brings
            destinations to life through the eyes of passionate globetrotters.
            Our experienced team of travel writers and contributors craft each
            article with meticulous attention to detail, giving you an authentic
            glimpse into the heart and soul of each location. From enthralling
            encounters with local communities to thrilling anecdotes of wildlife
            encounters, our blog ensures that you are a part of every adventure.
          </p>
          <p className="fw-bold">Inspiring Photography:</p>
          <p>
            A picture is worth a thousand words, and at TravelBlog.com, we
            curate stunning visual experiences to complement our narratives.
            Immerse yourself in breathtaking photographs that capture the
            essence of each destination, transporting you to far-off lands
            without leaving your seat. Our images will make you feel as though
            you are standing atop ancient ruins, strolling through bustling
            markets, or gazing at magnificent sunsets.
          </p>
          <p className="fw-bold">Expert Tips and Travel Hacks:</p>
          <p>
            As avid globetrotters ourselves, we know that planning a trip can be
            both exciting and daunting. That&apos;s why our travel blog goes
            beyond inspiring stories, providing practical tips and travel hacks
            to enhance your travel planning. Whether it&apos;s advice on finding
            the best accommodation deals, packing like a pro, or navigating
            through foreign customs, we&apos;ve got you covered.
          </p>
          <p className="fw-bold">Join Our Thriving Travel Community:</p>
          <p>
            TravelBlog.com isn&apos;t just a blog; it&apos;s a vibrant community
            of fellow travelers. Engage with our passionate readers and
            contributors through comments, forums, and social media. Share your
            own experiences, exchange valuable insights, and build lasting
            connections with like-minded adventurers from all corners of the
            globe.
          </p>
          <button className="p-3 mt-5 main-btn" onClick={explore}>
            Expole the Blog
          </button>
        </div>
      </div>
    </div>
  );
}
