import classes from './styles/Project.module.scss';
import { TiCode } from 'react-icons/ti';
import { AiFillEye } from 'react-icons/ai';
import { FaCaretRight } from 'react-icons/fa';

const Project = ({
  imageSrc,
  imageAlt,
  name,
  description,
  functionalities,
  libraries,
  deployLink,
  githubLink,
}) => {
  return (
    <li className={classes.Project}>
      <div className={classes.imageContainer}>
        <img src={`/images/${imageSrc}`} alt={imageAlt} />
      </div>
      <div className={classes.content}>
        <h3 className={classes.name}>{name}</h3>
        <p className={classes.description}>{description}</p>
        <ul className={classes.functionalities}>
          {functionalities.map((feature) => (
            <li className={classes.feature}>
              <FaCaretRight style={{ color: 'red' }} />
              {feature}
            </li>
          ))}
        </ul>
        <ul className={classes.libraries}>
          {libraries.map((library) => (
            <li className={classes.library}>{library}</li>
          ))}
        </ul>
        <div className={classes.actions}>
          <a
            className={`${classes.button}`}
            target="_blank"
            rel="noreferrer"
            href={githubLink.frontend}
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            <TiCode />
            Source
          </a>
          {deployLink && (
            <a
              className={`${classes.button} ${classes.live}`}
              target="_blank"
              rel="noreferrer"
              href={deployLink.frontend}
              onClick={(e) => {
                e.preventDefault();
              }}
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