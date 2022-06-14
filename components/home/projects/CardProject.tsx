import Image from "next/image";
import { Project } from "../../../type";
import pic from "../../../public/vercel.svg";
import styles from "../../../styles/CardProject.module.scss";



const CardProject = () => {
  return (
    <div className={styles.CardProject}>
      <h1>My App</h1>
      <Image
        alt="alt"
        src={pic}
        width={100}
        height={100}
      />
      <div className={styles.CardProject__tags}>
        <a href="">Source</a>
        <a href="">Demo</a>
      </div>
      <p>Description</p>
    </div>
  );
};

export default CardProject;
