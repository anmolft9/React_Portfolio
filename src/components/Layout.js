import React from "react";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

export const Layout = ({ children }) => {
  return (
    <div>
      <div className="main">{children}</div>
    </div>
  );
};
