import styles from "../../../styles/Experience.module.scss";

const Experience: React.FC = () => {
    return (
        <article id="experience" className={styles.Experience}>
            <h1 className={styles.Experience__title}>Timeline</h1>
            <div className={styles.Experience__timeline}>
                <div className={styles.outer}>
                    <div className={styles.card}>
                        <div className={styles.info}>
                            <h3 className={styles.title}>2020</h3>
                            <h4> Developed interest in Coding 🚀.</h4>  <p> I started with the course called <a href="https://jovenesaprogramar.edu.uy/" target="_blank" rel="noopener" >Jovenes a programar (JAP)</a> I learned the basics of web development with technologies such as HTML, CSS, Javascript </p>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.info}>
                            <h3 className={styles.title}>2021</h3>
                            <h4> React Enthusiast ⚒.</h4>  <p> I started with Acceleration on Reacjs <a href="https://www.alkemy.org/" target="_blank" rel="noopener">Alkemy</a> Accelerate soft and technical skills </p>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.info}>
                            <h3 className={styles.title}>2022</h3>
                            <h4> First job 🚀.</h4>  <p> Got a job at <a href="https://www.wundermanthompson.com/" target="_blank" rel="noopener">Wunderman Thompson</a> as a Frontend </p>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default Experience;
