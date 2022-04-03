import classes from './styles/Badge.module.scss';

const Badge = ({ name }) => {
  return <span className={classes.badge} data-content={name}></span>;
};

export default Badge;
