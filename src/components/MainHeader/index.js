import { Container } from '../index';
import { Link, Link as ScrollLink } from 'react-scroll';
import { FaBars } from 'react-icons/fa';

import classes from './styles/MainHeader.module.scss';
import logo from '../../assets/images/logo2.png';
import { useState } from 'react';
import SideDrawer from '../SideDrawer';

const MainHeader = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header className={classes.MainHeader}>
      <Container>
        <div className={classes.wrapper}>
          <a href="#home" className={classes.logoContainer}>
            <img src={logo} alt="HienhhccLogo" className={classes.logo} />
            <h1>
              Hien<span className={classes.highlight}>hhcc</span>
            </h1>
          </a>
          <nav className={classes.navigation}>
            <button
              className={classes.openMenuButton}
              onClick={() => {
                setOpenMenu(true);
              }}
            >
              <FaBars />
            </button>
            {openMenu && <SideDrawer setOpenMenu={setOpenMenu} />}
            <ul className={classes.navigationItems}>
              <li className={classes.navigationItem}>
                <Link to="home" smooth={true} duration={500}>
                  Trang chủ
                </Link>
              </li>
              <li className={classes.navigationItem}>
                <Link to="about" smooth={true} duration={500}>
                  Giới thiệu
                </Link>
              </li>
              <li className={classes.navigationItem}>
                <Link to="skills" smooth={true} duration={500}>
                  Kỹ năng
                </Link>
              </li>
              <li className={classes.navigationItem}>
                <Link to="projects" smooth={true} duration={500}>
                  Dự án
                </Link>
              </li>
              <li className={classes.navigationItem}>
                <Link to="contact" smooth={true} duration={500}>
                  Liên hệ
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default MainHeader;
