import { Container } from '../index';

import classes from './styles/MainHeader.module.scss';
import logo from '../../assets/images/logo2.png';

const MainHeader = () => {
  return (
    <header className={classes.MainHeader}>
      <Container>
        <div className={classes.wrapper}>
          <a href="#home" className={classes.logoContainer}>
            <img src={logo} alt="HienhhccLogo" className={classes.logo} />
            <h1>Hien</h1>
          </a>
          <nav className={classes.navigation}>
            <ul className={classes.navigationItems}>
              <li className={classes.navigationItem}>
                <a href="#home">Trang chủ</a>
              </li>
              <li className={classes.navigationItem}>
                <a href="#about">Giới thiệu</a>
              </li>
              <li className={classes.navigationItem}>
                <a href="#skills">Kỹ năng</a>
              </li>
              <li className={classes.navigationItem}>
                <a href="#portfolio">Dự án</a>
              </li>
              <li className={classes.navigationItem}>
                <a href="#contact">Liên hệ</a>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default MainHeader;
