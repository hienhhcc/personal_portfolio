import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-scroll";
import { CSSTransition } from "react-transition-group";
import logo from "src/assets/images/logo2.png";
import SideDrawer from "src/components/SideDrawer";

import { Container } from "../index";

import classes from "./styles/MainHeader.module.scss";
import slideInTransition from "./styles/transitions/slidein.module.scss";

const MainHeader = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleOpenMenu = () => {
    setOpenMenu((openMenu) => !openMenu);
  };

  return (
    <header className={classes.MainHeader}>
      <Container>
        <div className={classes.wrapper}>
          <a href='#home' className={classes.logoContainer}>
            <img src={logo} alt='HienhhccLogo' className={classes.logo} />
            <h1>
              Hien<span className={classes.highlight}>hhcc</span>
            </h1>
          </a>
          <nav className={classes.navigation}>
            <button
              className={classes.openMenuButton}
              onClick={() => {
                toggleOpenMenu();
              }}
            >
              <FaBars />
            </button>
            <CSSTransition
              in={openMenu}
              classNames={slideInTransition}
              timeout={300}
              mountOnEnter
              unmountOnExit
            >
              <SideDrawer toggleOpenMenu={toggleOpenMenu} open={openMenu} />
            </CSSTransition>
            <ul className={classes.navigationItems}>
              <li className={classes.navigationItem}>
                <Link to='home' smooth={true} duration={500}>
                  Trang chủ
                </Link>
              </li>
              <li className={classes.navigationItem}>
                <Link to='about' smooth={true} duration={500}>
                  Giới thiệu
                </Link>
              </li>
              <li className={classes.navigationItem}>
                <Link to='skills' smooth={true} duration={500}>
                  Kỹ năng
                </Link>
              </li>
              <li className={classes.navigationItem}>
                <Link to='projects' smooth={true} duration={500}>
                  Dự án
                </Link>
              </li>
              <li className={classes.navigationItem}>
                <Link to='contact' smooth={true} duration={500}>
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
