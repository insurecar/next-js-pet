import styles from "./Button.module.css";
import { ButtonProps } from "./Button.props";
import cn from "classnames";

export const Button = ({
  appearence = "primary",
  children,
  className,
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={cn(styles.button, {
        [styles.primary]: appearence === "primary",
        [styles.ghost]: appearence === "ghost",
      })}
      {...props}
    >
      {children}
    </button>
  );
};
