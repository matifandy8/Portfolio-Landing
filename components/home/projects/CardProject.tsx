import Image from "next/image";
import { Project } from "../../../type";
import pic from "../../../public/vercel.svg";
import styles from "../../../styles/CardProject.module.scss";



const CardProject = ({ name, image, github, demo, technologies}) => {
  return (
    <div className={styles.CardProject}>
      <h1>{name}</h1>
      <Image
        alt="alt"
        src={image}
        width={200}
        height={200}
        objectFit="contain"
      />
      <div className={styles.CardProject__tags}>
        <a href={github}>Source</a>
        <a href={demo}>Demo</a>
      </div>
      <p>{technologies}</p>
    </div>
  );
};

export default CardProject;
