// config
import { AppRouter } from "./config/route/AppRouter";
// styles
import styles from "./App.module.scss";

const App = () => {
  return (
    <div className={styles.App}>
      <div className={styles.appContent}>
        <AppRouter />
      </div>
    </div>
  );
};

export default App;
