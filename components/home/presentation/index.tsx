import React from "react";
import Image from "next/image";

import styles from "../../../styles/Presentation.module.scss";
import mypic from "../../../public/me.jpg";

const Presentation: React.FC = () => {
  return (
    <article className={styles.Presentation}>
      {" "}
      <Image
        className={styles.Presentation__img}
        src={mypic}
        alt="Picture of the author"
        width={200}
        height={200}
      />
      <div className={styles.Presentation__title}>
        <h1>Hey, I'm Matias Fandiño.</h1>
        <p>
          I'm a Frontend developer in Uruguay. I love building projects and I am
          a Self-Taught i have experience developing web applications using
          React, Redux, Javascript, MongoDB and Nodejs.
        </p>
      </div>
    </article>
  );
};

export default Presentation;
