import React from "react";
import Header from "/src/components/layout/header/header";
import Footer from "/src/components/layout/footer/footer";
import { Main } from "./styled";
import { Outlet } from "react-router-dom";

function PageWrapper({ pageUrl }) {
  return (
    <>
      <Header pageUrl={pageUrl} />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
}

export default PageWrapper;
