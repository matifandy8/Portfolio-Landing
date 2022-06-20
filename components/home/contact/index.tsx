import styles from "../../../styles/Contact.module.scss";
import Image from "next/image";

import linkedin from "../../../public/linkedin.png";
import github from "../../../public/github.png";

const Contact: React.FC = () => {
  return (
    <article className={styles.Contact}>
      <div className={styles.Contact__title}>
        <h1>Contact</h1>
        <h3>
          I am always waiting for a message from you. I would be happy to hear
          from you for an interview and a possible job offer. Or you can just
          talk to me. Don&apos;t hesitate to contact me.😎
        </h3>
        <h3>matifandy@gmail.com</h3>
      </div>
      <div className={styles.Contact__socialmedia}>
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

      <div></div>
    </article>
  );
};

export default Contact;
