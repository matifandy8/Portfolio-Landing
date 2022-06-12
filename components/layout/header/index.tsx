import Link from "next/link";
import styles from "../../../styles/Header.module.scss";
const Header: React.FC = () => {
  return (
    <header className={styles.Header} >
      <div className={styles.Navigation}>
        <h1 className={styles.Navigation__title}>
          <Link href="/">Matias Fandiño</Link>
        </h1>
        <ul className={styles.Navigation__list}>
          <li className={styles.Navigation__list__item}>
            <Link href="/"> About </Link>
          </li>
          <li className={styles.Navigation__list__item}>
            <Link href="/"> Projects </Link>
          </li>

          <li className={styles.Navigation__list__item}>
            <Link href="/contact"> Contact </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
