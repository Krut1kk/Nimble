// react
import { FC, ReactNode } from "react";
// styles
import styles from "./TegButton.module.scss";

interface TegButtonProps {
  children: ReactNode;
}

export const TegButton: FC<TegButtonProps> = ({ children }) => {
  return <div className={styles.TegButton}>{children}</div>;
};
