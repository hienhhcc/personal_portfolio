import { AiOutlineEye } from "react-icons/ai";
import { Link } from "react-scroll";
import Particles from "react-tsparticles";

import avatar from "../../../assets/images/avatar1.jpg";
import { Container } from "../../index";

import classes from "./styles/Home.module.scss";

const Home = () => {
  return (
    <>
      <Particles
        id='tsparticles'
        options={{
          background: {
            color: {
              value: "#000000",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#E50000",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 6,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      />
      <section id='home' className={classes.Home}>
        <Container>
          <div className={classes.homeContent}>
            <div className={classes.avatar}>
              <img src={avatar} alt='Avatar' />
            </div>
            <div className={classes.hi}>
              Xin chào, mình tên <span className={classes.name}>Vũ Vinh Hiển</span>
            </div>
            <div className={classes.job}>FrontEnd Developer</div>
            <div className={classes.text}>
              Bản thân mình yêu thích lập trình web, đặc biệt là làm việc với các dự án React và
              ExpressJs.
            </div>
            <div className={classes.actions}>
              <Link to='projects' smooth={true} duration={500} className={classes.actionButton}>
                <AiOutlineEye /> Dự án đã làm
              </Link>
              <Link to='skills' smooth={true} duration={500} className={classes.actionButton2}>
                <AiOutlineEye /> Kỹ năng
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Home;
