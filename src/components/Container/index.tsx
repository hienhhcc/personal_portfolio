import { FC, ReactNode } from "react";

import classes from "./styles/Container.module.scss";

interface Props {
  children: ReactNode;
}

const Container: FC<Props> = ({ children }) => {
  return <div className={classes.Container}>{children}</div>;
};

export default Container;
