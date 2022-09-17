import Link from "next/link";
import styles from "../../../styles/Header.module.scss";
const Header: React.FC = () => {
  return (
    <header className={styles.Header} >
      <div className={styles.Navigation}>
        <h1 className={styles.Navigation__title}>
          <Link href="/">MF</Link>
        </h1>
        <ul className={styles.Navigation__list}>
          <li className={styles.Navigation__list__item}>
            <Link href="#about"> About </Link>
          </li>
          <li className={styles.Navigation__list__item}>
            <Link href="#project"> Projects </Link>
          </li>

          <li className={styles.Navigation__list__item}>
            <Link href="#experience"> Experience </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
