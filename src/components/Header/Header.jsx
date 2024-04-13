import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/routes";
import styles from "../../styles/Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link to={ROUTES.HOME}></Link>
      </div>
    </div>
  );
};

export default Header;
