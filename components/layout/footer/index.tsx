import Link from "next/link";
import styles from "../../../styles/Footer.module.scss";

const Footer: React.FC = () => {
  return (
    <footer className={styles.Footer}>
      <span>© 2022 </span> 
        <a href="github.com/matifandy8">Matias Fandiño</a>
    </footer>
  );
};

export default Footer;