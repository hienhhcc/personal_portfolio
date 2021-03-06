import Particles from 'react-tsparticles';
import { AiOutlineEye } from 'react-icons/ai';

import { Container } from '../../index';

import classes from './styles/Home.module.scss';
import avatar from '../../../assets/images/avatar1.jpg';
import { Link } from 'react-scroll';

const Home = () => {
  const particlesInit = (main) => {
    console.log(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: '#000000',
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: 'push',
              },
              onHover: {
                enable: true,
                mode: 'repulse',
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
              value: '#E50000',
            },
            links: {
              color: '#ffffff',
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: 'none',
              enable: true,
              outMode: 'bounce',
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
              type: 'circle',
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      />
      <section id="home" className={classes.Home}>
        <Container>
          <div className={classes.homeContent}>
            <div className={classes.avatar}>
              <img src={avatar} alt="Avatar" />
            </div>
            <div className={classes.hi}>
              Xin ch??o, m??nh t??n{' '}
              <span className={classes.name}>V?? Vinh Hi???n</span>
            </div>
            <div className={classes.job}>Front-End Developer</div>
            <div className={classes.text}>
              B???n th??n m??nh y??u th??ch l???p tr??nh web, ?????c bi???t l?? l??m vi???c v???i
              c??c d??? ??n React v?? ExpressJs.
            </div>
            <div className={classes.actions}>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className={classes.actionButton}
              >
                <AiOutlineEye /> D???? a??n ??a?? la??m
              </Link>
              <Link
                to="skills"
                smooth={true}
                duration={500}
                className={classes.actionButton2}
              >
                <AiOutlineEye /> Ky?? n??ng
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Home;
