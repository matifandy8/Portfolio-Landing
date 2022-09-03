import styles from "../../../styles/Footer.module.scss";
import Image from "next/image";

import linkedin from "../../../public/linkedin.png";
import github from "../../../public/github.png";


const Footer: React.FC = () => {
  return (
    <footer className={styles.Footer}>
      <div>
        <span>© 2022 </span> 
        <a href="github.com/matifandy8">Matias Fandiño</a>
      </div>
        

      <div className={styles.Footer__socialmedia}>
        <a href="https://github.com/matifandy8"><Image
          className={styles.img}
          src={github}
          alt="Github Icon"
          width={30}
          height={30}
        /></a>
       
        <a href="https://www.linkedin.com/in/matiasfandino/"><Image
          className={styles.img}
          src={linkedin}
          alt="Linkedin Icon"
          width={30}
          height={30}
        /></a>
      </div>
    </footer>
  );
};

export default Footer;