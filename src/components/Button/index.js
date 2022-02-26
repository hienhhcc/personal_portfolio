import classes from './styles/Button.module.scss';

const Button = ({ children, onClick, type }) => {
  return (
    <button className={classes.Button} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default Button;
