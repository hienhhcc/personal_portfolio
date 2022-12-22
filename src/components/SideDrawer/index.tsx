import React, { FC } from "react";
import { createPortal } from "react-dom";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { CSSTransition } from "react-transition-group";

import Backdrop from "../Backdrop";

import classes from "./styles/SideDrawer.module.scss";
import fadeTransition from "./styles/transitions/fade.module.scss";

interface Props {
  open: boolean;
  toggleOpenMenu: () => void;
}

const SideDrawer: FC<Props> = ({ toggleOpenMenu, open }) => {
  const content = (
    <aside className={classes.SideDrawer}>
      <div className={classes.action}>
        <button className={classes.closeMenuButton} onClick={() => toggleOpenMenu()}>
          <FaTimes />
        </button>
      </div>
      <CSSTransition in={open} classNames={fadeTransition} timeout={300} mountOnEnter unmountOnExit>
        <Backdrop toggleOpenMenu={toggleOpenMenu} />
      </CSSTransition>

      <hr />
      <ul className={classes.navigationItems}>
        <li className={classes.navigationItem}>
          <Link
            to='home'
            smooth={true}
            duration={500}
            onClick={() => {
              toggleOpenMenu();
            }}
          >
            Trang chủ
          </Link>
        </li>
        <li className={classes.navigationItem}>
          <Link
            to='about'
            smooth={true}
            duration={500}
            onClick={() => {
              toggleOpenMenu();
            }}
          >
            Giới thiệu
          </Link>
        </li>
        <li className={classes.navigationItem}>
          <Link
            to='skills'
            smooth={true}
            duration={500}
            onClick={() => {
              toggleOpenMenu();
            }}
          >
            Kỹ năng
          </Link>
        </li>
        <li className={classes.navigationItem}>
          <Link
            to='projects'
            smooth={true}
            duration={500}
            onClick={() => {
              toggleOpenMenu();
            }}
          >
            Dự án
          </Link>
        </li>
        <li className={classes.navigationItem}>
          <Link
            to='contact'
            smooth={true}
            duration={500}
            onClick={() => {
              toggleOpenMenu();
            }}
          >
            Liên hệ
          </Link>
        </li>
      </ul>
    </aside>
  );

  return createPortal(content, document.getElementById("side-drawer")!);
};

export default SideDrawer;
