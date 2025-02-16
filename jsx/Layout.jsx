import React from "react";
import SearchAppBar from "./Appbar";
import Home from "./Home";
import Footer from "./footer";
const Layout = ({ children }) => {
  return (
    <>
      <SearchAppBar/>
      <Home/>
      <div> {children}</div>
      <Footer/>
    </>
  );
};

export default Layout;