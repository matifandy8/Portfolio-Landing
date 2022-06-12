import React from "react";
import { Project } from "../../../type";
import styles from "../../../styles/Projects.module.scss";
import CardProject from "./CardProject";

export default function Projects () {
  return (
    <article className={styles.Projects}>
      <div className={styles.Projects__title}>
        <h1>Projects</h1>
        <p>
          A few highlights of my open-source projects. View them all <a href="https://github.com/matifandy8">on GitHub.</a> 
        </p>
      </div>
      <div className={styles.Projects__cardlist}>
         <CardProject />
         <CardProject />
         <CardProject />
         <CardProject />
         <CardProject />
         <CardProject />
      </div>
    </article>
  );
};

