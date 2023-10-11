import Image from "next/image";
import { Project } from "../../../type";
import styles from "../../../styles/CardProject.module.scss";
const TechnologyIcon = ({ technology }: any) => {
  return (
    <div className={styles.TechnologyIcon} title={technology.name}>
      <span>{technology.name}</span>
      <Image
        src={technology.iconUrl}
        alt={technology.name}
        width={30}
        height={30}
        objectFit="contain"
      />
    </div>
  );
};

const CardProject = ({ name, image, github, demo, technologies }: Project) => {
  const technologyList = Array.isArray(technologies)
    ? technologies.map((technology, index) => (
        <TechnologyIcon key={index} technology={technology} />
      ))
    : [];
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
      <div className={styles.CardProject__technologies}>{technologyList}</div>
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
