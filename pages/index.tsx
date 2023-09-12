import type { GetServerSideProps } from "next";

import Head from "next/head";
import Presentation from "../components/home/presentation";
import Projects from "../components/home/projects";
import styles from "../styles/Home.module.scss";
import { Project, Props } from "../type";
import { motion } from "framer-motion";
import Experience from "../components/home/experience";

const Home: React.FC<Props> = ({ projects }) => {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Matias Fandiño</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <motion.main
        initial="hidden"
        animate="visible"
        variants={variants}
        className={styles.main}
      >
        <Presentation />
        <Projects projects={projects} />
        <Experience />
      </motion.main>
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(
    "https://my-json-server.typicode.com/matifandy8/api/projects"
  );
  const data = await res.json();
  console.log(data);

  return {
    props: { projects: data },
  };
};
