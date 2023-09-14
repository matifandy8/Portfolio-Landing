import Image from "next/image";
import { Project } from "../../../type";
import styles from "../../../styles/CardProject.module.scss";

const CardProject = ({ name, image, github, demo, technologies }: Project) => {
  return (
    <div className={styles.CardProject}>
      <h1>{name}</h1>
      <Image
        alt="alt"
        src={image}
        width={600}
        height={350}
        objectFit="contain"
      />
      <p>{technologies}</p>
      <div className={styles.CardProject__tags}>
        <a href={github} target="_blank" rel="noreferrer">
          Source
        </a>
        <a href={demo} target="_blank" rel="noreferrer">
          Demo
        </a>
      </div>
    </div>
  );
};

export default CardProject;
