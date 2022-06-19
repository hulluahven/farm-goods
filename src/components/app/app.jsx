import React from "react";
import PageWrapper from "/src/components/layout/page-wrapper/page-wrapper";
import featuresList from "/src/mocks/featuresList";
import { GlobalStyle } from "./styled";
import products from "/src/mocks/products";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppRoute } from "/src/app-route";
import MainPage from "/src/components/pages/main-page/main-page";
import OrderPage from "/src/components/pages/order-page/order-page";
import FixedScroll from "/src/components/ui/fixed-scroll/fixed-scroll";

export default function App({ pageUrl }) {
  return (
    <>
      <GlobalStyle />
      <Router>
        <FixedScroll />
        <Routes>
          <Route
            path={AppRoute.MAIN}
            element={<PageWrapper pageUrl={pageUrl} />}
          >
            <Route index element={<MainPage features={featuresList} />} />
            <Route
              path={AppRoute.ORDER.replace(AppRoute.MAIN, "")}
              element={
                <OrderPage
                  pageUrl={pageUrl}
                  products={products}
                />
              }
            />
          </Route>
        </Routes>
      </Router>
    </>
  );
}
