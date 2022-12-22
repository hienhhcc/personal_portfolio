import React from "react";
import ScrollToTop from "react-scroll-to-top";
import {
  MainHeader,
  Home,
  About,
  Skills,
  Projects,
  Contact,
  Footer,
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
