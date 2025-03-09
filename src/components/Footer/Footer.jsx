import styles from "./Footer.module.css";

function Footer() {
  return (
    <>
      <footer>
        <div className={styles.footerItems}>
          <div className={styles.footerItem}>
            <h2 className={styles.logoNname}>Jadoo</h2>

            <div className={styles.footerLinks}>
              <p>Book your trip in minute, get full Control for much longer.</p>
            </div>
          </div>

          <div className={styles.footerItem}>
            <h3>Company</h3>

            <div className={styles.footerLinks}>
              <a href="">About</a>
              <a href="">Careers</a>
              <a href="">Mobile</a>
            </div>
          </div>

          <div className={styles.footerItem}>
            <h3>Contact</h3>

            <div className={styles.footerLinks}>
              <a href="">Help/FAQ</a>
              <a href="">PressPress</a>
              <a href="">Affilates</a>
            </div>
          </div>

          <div className={styles.footerItem}>
            <h3>More</h3>

            <div className={styles.footerLinks}>
              <a href="">Airlinefees</a>
              <a href="">Airline</a>
              <a href="">Low fare tips</a>
            </div>
          </div>
        </div>
        <div className={styles.copyRights}>All rights reserved@jadoo.co</div>
      </footer>
    </>
  );
}

export default Footer;
