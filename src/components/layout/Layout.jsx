import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const router = useRouter();
  return (
    <>
      {router.pathname !== "/" ? (
        <>
          <Header />
          {children}
          <Footer />
        </>
      ) : (
        children
      )}
    </>
  );
};

export default Layout;
