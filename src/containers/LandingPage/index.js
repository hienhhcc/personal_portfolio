import { MainHeader, Home, About, Skills } from '../../components';

const LandingPage = () => {
  return (
    <>
      <MainHeader />
      <main>
        <Home />
        <About />
        <Skills />
        {/* Contact */}
      </main>
    </>
  );
};

export default LandingPage;
