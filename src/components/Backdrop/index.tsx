import { FC } from "react";
import { createPortal } from "react-dom";

import classes from "./styles/Backdrop.module.scss";

interface Props {
  toggleOpenMenu: () => void;
}

const Backdrop: FC<Props> = ({ toggleOpenMenu }) => {
  return createPortal(
    <div
      onClick={() => {
        toggleOpenMenu();
      }}
      className={classes.Backdrop}
    ></div>,
    document.getElementById("backdrop")
  );
};

export default Backdrop;
