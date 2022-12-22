import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-scroll";
import { CSSTransition } from "react-transition-group";
import logo from "src/assets/images/logo2.png";
import SideDrawer from "src/components/SideDrawer";

import { Container } from "../index";

import classes from "./styles/MainHeader.module.scss";
import slideInTransition from "./styles/transitions/slidein.module.scss";

const navigationItems = [
  {
    to: "home",
    name: "Trang chủ",
  },
  {
    to: "about",
    name: "Giới thiệu",
  },
  {
    to: "skills",
    name: "Kỹ năng",
  },
  {
    to: "projects",
    name: "Dự án",
  },
  {
    to: "contact",
    name: "Liên hệ",
  },
];

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
              {navigationItems.map(({ name, to }) => (
                <li key={name} className={classes.navigationItem}>
                  <Link to={to} smooth={true} duration={500}>
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default MainHeader;
