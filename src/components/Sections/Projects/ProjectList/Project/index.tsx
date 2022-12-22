import React, { FC } from "react";
import { AiFillEye } from "react-icons/ai";
import { FaCaretRight } from "react-icons/fa";
import { TiCode } from "react-icons/ti";

import { Badge } from "../../../../index";

import classes from "./styles/Project.module.scss";

interface Props {
  imageSrc: string;
  imageAlt: string;
  name: string;
  description: string;
  functionalities: string[];
  libraries: string[];
  deployLink: {
    frontend: string;
    backend?: string;
  };
  githubLink: {
    frontend: string;
    backend?: string;
  };
  type: "personal" | "collaboration";
}

const Project: FC<Props> = ({
  imageSrc,
  imageAlt,
  name,
  description,
  functionalities,
  libraries,
  deployLink,
  githubLink,
  type,
}) => {
  return (
    <li className={classes.Project}>
      <Badge
        name={type === "personal" ? "Cá nhân" : "Công ty"}
        background={type === "personal" ? "yellow" : "green"}
      />
      <div className={classes.imageContainer}>
        <img src={`/images/${imageSrc}`} alt={imageAlt} />
      </div>
      <div className={classes.content}>
        <h3 className={classes.name}>{name}</h3>
        <p className={classes.description}>{description}</p>
        <ul className={classes.functionalities}>
          {functionalities.map((feature) => (
            <li key={feature} className={classes.feature}>
              <FaCaretRight style={{ color: "red" }} />
              {feature}
            </li>
          ))}
        </ul>
        <ul className={classes.libraries}>
          {libraries.map((library) => (
            <li key={library} className={classes.library}>
              {library}
            </li>
          ))}
        </ul>
        <div className={classes.actions}>
          {githubLink && (
            <a
              className={`${classes.button}`}
              target='_blank'
              rel='noreferrer'
              href={githubLink.frontend}
            >
              <TiCode />
              Source
            </a>
          )}

          {deployLink && (
            <a
              className={`${classes.button} ${classes.live}`}
              target='_blank'
              rel='noreferrer'
              href={deployLink.frontend}
            >
              <AiFillEye />
              Live
            </a>
          )}
        </div>
      </div>
    </li>
  );
};

export default Project;
