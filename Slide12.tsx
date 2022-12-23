import { FunctionComponent } from "react";
import styles from "./Slide12.module.css";

const Slide12: FunctionComponent = () => {
  return (
    <div className={styles.slide12}>
      <img className={styles.layer1Icon} alt="" src="../layer-1.svg" />
      <div className={styles.retailItemsAnimationAndVid}>
        <p className={styles.p}>2022</p>
        <p className={styles.p}>2021</p>
        <p className={styles.p}>2020</p>
        <p className={styles.p}>Retail Items</p>
        <p className={styles.p}>Animation and Video</p>
        <p className={styles.p}>Artificial Intelligence</p>
      </div>
      <img className={styles.topaz1Icon} alt="" src="../topaz-1.svg" />
      <div className={styles.sHUFFLE}>SHUFFLE</div>
      <img
        className={styles.secularExplosionIcon}
        alt=""
        src="../044-secular-explosion@2x.png"
      />
      <img
        className={styles.soupboneTheWrathful}
        alt=""
        src="../025-soupbone-the-wrathful@2x.png"
      />
      <video className={styles.aReionizedUniverse} autoPlay muted loop>
        <source src="../021_a reionized universe.mp4" />
      </video>
    </div>
  );
};

export default Slide12;
