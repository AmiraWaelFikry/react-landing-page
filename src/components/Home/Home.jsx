import styles from "./Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
function Home() {
  return (
    <>
      <main>
        <div className={styles.mainContent}>
          <p className={styles.title}>best destination in the world</p>
          <h1>Travel, enjoy and live a new and full life</h1>
          <p className={styles.desc}>
            Built Wicket longer admire do barton vanity itself do in it.
            Preferred to sportsmen it engrossed listening. Park gate sell they
            west hard for the.
          </p>
          <div className={styles.btns}>
            <button>Find out more</button>
            <a href="#">
              <FontAwesomeIcon
                className={styles.playIcon}
                icon={faCirclePlay}
              />
              play Demo
            </a>
          </div>
        </div>
        <img
          className={styles.homeImg}
          src="https://themewagon.github.io/jadoo/v1.0.0/assets/img/hero/hero-img.png"
          alt="travel"
        />
      </main>
    </>
  );
}

export default Home;
