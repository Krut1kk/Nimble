// react
import { ChangeEvent, FC } from "react";
// styles
import styles from "./Input.module.scss";

interface InputProps {
  value: string | number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  type: string;
}

export const Input: FC<InputProps> = ({
  value,
  onChange,
  placeholder,
  type,
}) => {
  return (
    <input
      placeholder={placeholder}
      value={value}
      type={type}
      onChange={onChange}
      className={styles.Input}
    />
  );
};
