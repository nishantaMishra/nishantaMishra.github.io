import React, { Suspense } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import AppRoutes from "./routes";
import Headermain from "../header";
import BackgroundEffect from "../components/background/BackgroundEffect";
import "./App.css";

function ScrollToTop({ children }) {
  const { pathname } = useLocation();
  
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return children;
}

export default function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <BackgroundEffect />
      <ScrollToTop>
        <Headermain />
        <Suspense fallback={<div>Loading...</div>}>
          <AppRoutes />
        </Suspense>
      </ScrollToTop>
    </Router>
  );
}
