import { Link } from "@reach/router";
import React from "react";

export const Navigation = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
};
