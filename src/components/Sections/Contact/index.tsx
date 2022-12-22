import { AiFillGithub } from 'react-icons/ai';
import { SiFacebook, SiLinkedin } from 'react-icons/si';

import { LineBreak } from '../../index';
import classes from './styles/Contact.module.scss';
import avatar from '../../../assets/images/avatar.jpg';

const Contact = () => {
  return (
    <section id="contact" className={classes.Contact}>
      <div className={classes.header}>
        <h2>Liên hệ</h2>
        <LineBreak />
      </div>
      <div className={classes.content}>
        <div className={classes.avatar}>
          <img src={avatar} alt="My avatar" />
        </div>
        <div className={classes.name}>Vũ Vinh Hiển</div>
        <div className={classes.contactBox}>
          <p>Hãy liên hệ với mình qua những kênh sau:</p>
          <div className={classes.links}>
            <a
              className={`${classes.link}`}
              target="_blank"
              rel="noreferrer"
              href="https://github.com/hienhhcc"
            >
              <AiFillGithub />
            </a>
            <a
              className={`${classes.link}`}
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/v%C5%A9-vinh-hi%E1%BB%83n-ab0442225/"
            >
              <SiLinkedin />
            </a>
            <a
              className={`${classes.link}`}
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/thachdau16t"
            >
              <SiFacebook />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
