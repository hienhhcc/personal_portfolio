import { FC, ReactNode } from "react";

import classes from "./styles/Button.module.scss";

interface Props {
  children: ReactNode;
  onClick: () => void;
  type: "button" | "submit" | "reset";
}

const Button: FC<Props> = ({ children, onClick, type }) => {
  return (
    <button className={classes.Button} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default Button;
