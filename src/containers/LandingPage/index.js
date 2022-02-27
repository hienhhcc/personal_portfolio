import ScrollToTop from 'react-scroll-to-top';
import { MainHeader, Home, About, Skills, Projects } from '../../components';

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
      </main>
    </>
  );
};

export default LandingPage;
