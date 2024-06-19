import React from "react";
import { Router } from "@reach/router";
import { Home } from "../Screens/Home";
import { About } from "../Screens/About";
import { Contact } from "../Screens/Contact";

export default function ReactRouter() {
  return (
    <div>
      <Router>
        <Home path="/" />
        <About path="/about" />
        <Contact path="/contact" />
      </Router>
    </div>
  );
}
