import { createPortal } from 'react-dom';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';
import Backdrop from '../Backdrop';
import classes from './styles/SideDrawer.module.scss';

const SideDrawer = (props) => {
  let content = (
    <aside className={classes.SideDrawer}>
      <div className={classes.action}>
        <button
          className={classes.closeMenuButton}
          onClick={() => props.setOpenMenu(false)}
        >
          <FaTimes />
        </button>
      </div>
      <Backdrop setOpenMenu={props.setOpenMenu} />
      <hr />
      <ul className={classes.navigationItems}>
        <li className={classes.navigationItem}>
          <Link
            to="home"
            smooth={true}
            duration={500}
            onClick={() => {
              props.setOpenMenu(false);
            }}
          >
            Trang chủ
          </Link>
        </li>
        <li className={classes.navigationItem}>
          <Link
            to="about"
            smooth={true}
            duration={500}
            onClick={() => {
              props.setOpenMenu(false);
            }}
          >
            Giới thiệu
          </Link>
        </li>
        <li className={classes.navigationItem}>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            onClick={() => {
              props.setOpenMenu(false);
            }}
          >
            Kỹ năng
          </Link>
        </li>
        <li className={classes.navigationItem}>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            onClick={() => {
              props.setOpenMenu(false);
            }}
          >
            Dự án
          </Link>
        </li>
        <li className={classes.navigationItem}>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            onClick={() => {
              props.setOpenMenu(false);
            }}
          >
            Liên hệ
          </Link>
        </li>
      </ul>
    </aside>
  );

  return createPortal(content, document.getElementById('side-drawer'));
};

export default SideDrawer;
