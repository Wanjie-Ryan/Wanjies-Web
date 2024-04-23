import React, { useState } from "react";
import "./nav.css";
import { BiHomeSmile, BiUserCircle } from "react-icons/bi";
import { BsBook } from "react-icons/bs";
import { MdDesignServices } from "react-icons/md";
import { TiContacts } from "react-icons/ti";

function Nav() {
  const [active, setactive] = useState("#home");

  return (
    <>
      <nav>
        <a
          href="#home"
          onClick={() => setactive("#home")}
          className={active === "#home" ? "active" : ""}
        >
          {" "}
          <BiHomeSmile />{" "}
        </a>

        <a
          href="#about"
          onClick={() => setactive("#about")}
          className={active === "#about" ? "active" : ""}
        >
          {" "}
          <BiUserCircle />{" "}
        </a>

        <a
          href="#experience"
          onClick={() => setactive("#experience")}
          className={active === "#experience" ? "active" : ""}
        >
          {" "}
          <BsBook />{" "}
        </a>

        <a
          href="#services"
          onClick={() => setactive("#services")}
          className={active === "#services" ? "active" : ""}
        >
          {" "}
          <MdDesignServices />{" "}
        </a>

        <a
          href="#contact"
          onClick={() => setactive("#contact")}
          className={active === "#contact" ? "active" : ""}
        >
          {" "}
          <TiContacts />{" "}
        </a>
      </nav>
    </>
  );
}

export default Nav;
