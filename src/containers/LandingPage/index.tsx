import React from "react";
import ScrollToTop from "react-scroll-to-top";

import {
  About,
  Contact,
  Footer,
  Home,
  MainHeader,
  Projects,
  Skills,
} from "../../components";

const LandingPage = () => {
  return (
    <>
      <ScrollToTop smooth />
      <MainHeader />
      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default LandingPage;
