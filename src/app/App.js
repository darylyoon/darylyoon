import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  useLocation,
} from "react-router-dom";
import "./App.css";
import Home from "../pages/index";

export default function App() {
  return (
    <Router>
      <Home />
    </Router>
  );
}
