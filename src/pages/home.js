import React, { useState } from "react";
import * as emailjs from "emailjs-com";
import Typewriter from "typewriter-effect";
import { introdata } from "../content_option";
import Navbar from "../components/navbar/navbar";
import About from "../components/about/about";
import Exp from "../components/experience/experience";
import Projects from "../components/projects/projects";
import Contact from "../components/contact/contact";
import "./home.css";

export default function Home() {

  return (
    <div className="home">

      <div className="left">
        <div className="about">
          <h1>{introdata.title}</h1>
          <h2>{introdata.role}</h2>
          <Typewriter
            options={{
              strings: introdata.animated.first,
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <Navbar />
        {/* <Contact /> */}
        <div className="socials">
          <a href="https://github.com/darylyoon"><i className="fab fa-github"></i></a>
          <a href="https://www.linkedin.com/in/daryl-yoon-08a84221a/"><i className="fab fa-linkedin"></i></a>
          <a href="https://www.instagram.com/darylyoon/"><i className="fab fa-instagram"></i></a>
          <a href="https://www.facebook.com/lovinghotfm913/"><i className="fab fa-facebook"></i></a>
        </div>
      </div>

      <div className="right">
        <About />
        <Exp />
        <Projects />
      </div>

    </div>
  );
};
