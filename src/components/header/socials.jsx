import React from "react";
import {
  BsLinkedin,
  BsGithub,
  BsYoutube,
  BsMedium,
  BsTwitter,
} from "react-icons/bs";
import { SiLinktree } from "react-icons/si";

function Socials() {
  return (
    <>
      <div className="header-socials">
        <a
          href="https://github.com/Wanjie-Ryan"
          target="_blank"
          rel="noreferrer"
        >
          <BsGithub />
        </a>

        <a
          href="https://www.youtube.com/channel/UC1Fu4FFqsOR-pGxkQVQTTsg"
          target="_blank"
          rel="noreferrer"
        >
          <BsYoutube />
        </a>

        <a
          href="https://medium.com/@ryanwanjiedistortion"
          target="_blank"
          rel="noreferrer"
        >
          <BsMedium />
        </a>

        <a
          href="https://www.linkedin.com/in/ryan-wanjie-7797831b5/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>

        <a href="https://twitter.com/RWanjie" target="_blank" rel="noreferrer">
          <BsTwitter />
        </a>

        <a href="https://linktr.ee/wanjieryan" target="_blank" rel="noreferrer">
          <SiLinktree />
        </a>
      </div>
    </>
  );
}

export default Socials;
