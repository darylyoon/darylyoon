import React, { useState } from "react";
import * as emailjs from "emailjs-com";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, 
  meta, 
  dataportfolio, 
  dataabout,
  worktimeline,
  skills,
  services,
  contactConfig,
  school, } from "../content_option";
import { Container, Row, Col, Alert } from "react-bootstrap";

export default function Home() {
  return (
    <div>
      <h1>Under Maintainence from 7 Oct 2023 to 9 Oct 2023 08:00am</h1>
    </div>
  );
};
