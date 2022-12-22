import { FC } from "react";

import classes from "./styles/Badge.module.scss";

interface Props {
  name: string;
}

const Badge: FC<Props> = ({ name }) => {
  return <span className={classes.badge} data-content={name}></span>;
};

export default Badge;
