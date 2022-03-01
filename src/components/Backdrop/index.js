import { createPortal } from 'react-dom';
import classes from './styles/Backdrop.module.scss';

const Backdrop = (props) => {
  return createPortal(
    <div
      onClick={() => {
        props.toggleOpenMenu();
      }}
      className={classes.Backdrop}
    ></div>,
    document.getElementById('backdrop')
  );
};

export default Backdrop;
