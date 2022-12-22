import AboutMe from "./AboutMe";

import classes from "./styles/About.module.scss";

const About = () => {
  return (
    <section id="about" className={classes.About}>
      <AboutMe />
    </section>
  );
};

export default About;
