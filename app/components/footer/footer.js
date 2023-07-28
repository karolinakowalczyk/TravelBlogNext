import React from "react";
import "./footer.css";
import GitHubIcon from "@/public/images/github-icon.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <a
        target="_blank"
        href="https://icons8.com/icon/CHdzWZyJzlf4/around-the-globe"
        rel="noreferrer"
      >
        Around the Globe
      </a>{" "}
      icon by{" "}
      <a target="_blank" href="https://icons8.com" rel="noreferrer">
        Icons8
      </a>
      <p>See us on: </p>
      <a
        target="_blank"
        href="https://github.com/karolinakowalczyk/TravelBlogNext"
        rel="noreferrer"
      >
        <Image src={GitHubIcon} width={24} height={24} alt="github icon" />
      </a>
    </footer>
  );
};

export default Footer;
