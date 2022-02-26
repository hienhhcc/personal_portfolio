import classes from './styles/Container.module.scss';

const Container = ({ children }) => {
  return <div className={classes.Container}>{children}</div>;
};

export default Container;
