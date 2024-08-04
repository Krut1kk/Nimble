// ui
import { NavLink } from "@/shared/ui/NavLink";
// constanst
import { getHomeRoute } from "@/shared/libs/constants/routes";
// styles
import styles from "./Header.module.scss";

export const Header = ({}) => {
  return (
    <div className={styles.Header}>
      <NavLink to={getHomeRoute()}>Home</NavLink>
    </div>
  );
};
